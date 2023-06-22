import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HubConnectionBuilder, LogLevel, HubConnection } from '@microsoft/signalr';
import "./ChatPage.css"


type ChatParams = {
    name: string;
};

interface Message {
    sender: string;
    content: string;
}

function ChatPage() {
    const { name } = useParams<ChatParams>();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [username, setUsername] = useState<string>(name || '');
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
    const [connection, setConnection] = useState<HubConnection | null>(null);

    useEffect(() => {
        setUsername(name || '');
    }, [name]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = async () => {
        if (connection) {
            const message: Message = {
                sender: username || '',
                content: inputText,
            };

            try {
                await connection.invoke('AddMessage', message);
                setInputText('');
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleLeave = async () => {
        if (connection && username) {
            try {
                await connection.invoke('DeleteUser', username);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7166/chathub')
            .configureLogging(LogLevel.Information)
            .build();

        setConnection(newConnection);

        newConnection.start().then(() => {
            newConnection.invoke('GetAllUsersAsync').then((users: string[]) => {
                setOnlineUsers(users);
            });

            newConnection.invoke('GetMessageList').then((messageList: Message[]) => {
                setMessages(messageList);
            });
        });

        return () => {
            if (newConnection.state === 'Connected') {
                newConnection.stop();
            }
        };
    }, []);

    useEffect(() => {
        if (connection) {
            connection.on('MessageAdded', (message: Message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });

            connection.on('UserDeleted', (deletedUser: string) => {
                setOnlineUsers((prevUsers) => prevUsers.filter((user) => user !== deletedUser));
            });
        }
    }, [connection]);

    useEffect(() => {
        if (username && !onlineUsers.includes(username)) {
            setOnlineUsers((prevUsers) => [...prevUsers, username]);
        }
    }, [username, onlineUsers]);

    useEffect(() => {
        return () => {
            if (connection && username) {
                connection.invoke('DeleteUser', username).catch((error) => {
                    console.error(error);
                });
            }
        };
    }, [connection, username]);

    return (
        <div className="main-background">
            <div className="container">
            <Link to="/" style={{ position: 'absolute', top: 10, right: 10 }} onClick={handleLeave} className="leave-button">
                Leave
            </Link>
            <div className="content-container">
                <div className="online-users">
                    <div><h3>Online Users:</h3></div>
                    <div>
                    {onlineUsers.map((user, index) => (
                        <p key={index}>{user}</p>
                    ))}
                    </div>
                </div>
                <div className="chat-room">
                    <h2>Chat Room</h2>
                    <div className="message-container">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === username ? 'sent' : ''}`}
                            >
                                <strong>{message.sender}:</strong> {message.content}
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input type="text" value={inputText} onChange={handleInputChange} />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ChatPage;