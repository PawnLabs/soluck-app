export enum IMessageTypes {
  SYSTEM = "SYSTEM",
  USER = "USER",
  OTHER_USER = "OTHER_USER",
}

export interface IMessage {
  // Renamed from Message to IMessage
  id: number;
  message: string;
  messageType: IMessageTypes;
  sender: string;
  color: string;
  time: string;
}
