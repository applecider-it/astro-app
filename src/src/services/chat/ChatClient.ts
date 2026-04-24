/**
 * チャットクライアント
 */
export default class ChatClient {
  private ws;

  private setMessage!: (msg: string) => void;

  constructor(argSetMessage: (msg: string) => void) {
    this.ws = new WebSocket(`${window.App.config.apiHost}/chat/ws/room1`);
    console.log('init WebSocket')

    this.ws.onopen = () => console.log('connected');
    this.ws.onmessage = this.onMessage;

    this.setMessage = argSetMessage
  }

  private onMessage = (e: MessageEvent<any>) => {
    const data = JSON.parse(e.data);

    console.log(data);

    this.setMessage(data.message);
  }

  sendMessage(message: string) {
    this.ws.send(JSON.stringify({ message }));
  }
}
