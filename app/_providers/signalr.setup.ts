import * as signalR from "@microsoft/signalr";

let connection: signalR.HubConnection | null = null;

export const startSignalRConnection = () => {
  const url = "http://socket.soluck.io/rouletteHub";
  connection = new signalR.HubConnectionBuilder()
    .withUrl(url)
    .withAutomaticReconnect()
    .build();

  connection
    .start()
    .then(() => {
      if (!connection) return;
      console.log("SignalR Connected");

      connection.invoke<boolean>("Test", url).then((result) => {
        console.log("Connected", result);
      });

      connection.onclose(() => {
        console.log("Closed");
      });
    })
    .catch((error) => {
      console.error("SignalR connection failed:", error);
    });
};

export const closeSignalRConnection = () => {
  if (connection) {
    connection.stop();
    console.log("SignalR connection closed");
  }
};
