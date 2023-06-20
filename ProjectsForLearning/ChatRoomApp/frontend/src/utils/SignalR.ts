import { HubConnectionBuilder, LogLevel, HubConnectionState } from '@microsoft/signalr';

const connection = new HubConnectionBuilder()
  .withUrl('https://localhost:7166/chathub') // Replace with the actual URL of your SignalR hub
  .configureLogging(LogLevel.Information)
  .build();

export async function startSignalRConnection() {
  try {
    if (connection.state === HubConnectionState.Disconnected) {
      await connection.start();
    }
  } catch (error) {
    console.error('Error connecting to SignalR hub:', error);
  }
}

export default connection;