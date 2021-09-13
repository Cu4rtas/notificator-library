import { Email, Notificator, SMS, Facebook } from "./notificator";
import NotificatorSet from "./notificator-set";

class Client {
  private notificator: Notificator;

  constructor(notificator: Notificator) {
    this.notificator = notificator
  }

  setNotificator(notificator: Notificator) {
    this.notificator = notificator
  }

  doSomething() {
    // Doing ...
    this.notificator.send('Message!')
  }
}

// Single notificator
const firstClient = new Client(new Email(['jq4artas@gmail.com', 'alejogs4@gmail.com']))
firstClient.doSomething()
console.log('////////////////////')
// Several notificators
const composedNotificator = new NotificatorSet()
  .withEmail(['miguel@hotmail.com'])
  .withSMS(['1234', '123456'])
  .withFacebook(['pabloq', 'alejogs4', 'celcius gamer'])


const secondClient = new Client(composedNotificator)
secondClient.doSomething()
