﻿using Microsoft.AspNetCore.SignalR;

namespace backend.Hubs
{
    public class ChatHub:Hub
    {
        private static List<Message> messages = new List<Message>();
        private static List<string> _users = new List<string>();

        public async Task<List<string>> GetAllUsersAsync()
        {

            return _users;

        }
        public Task AddUserAsync(string name)

        {
            _users.Add(name);

            return Clients.All.SendAsync("UserAdded", name);
        }

        public Task DeleteUser(string name)
        {
            _users.Remove(name);
            return Clients.All.SendAsync("UserDeleted", name);
        }
        public async Task<List<Message>> GetMessageList()
        {
            return messages;
        }

        public async Task AddMessage(Message message)
        {
            messages.Add(message);
            await Clients.All.SendAsync("MessageAdded", message);
        }

        public async Task GetUpdatedMessageList()
        {
            await Clients.Caller.SendAsync("MessageListUpdated", messages);
        }
    }

    public class Message
    {
        public string Sender { get; set; }
        public string Content { get; set; }
    }
}
