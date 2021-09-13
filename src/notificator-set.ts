import  {Email, Facebook, Notificator, SMS, BusinessMessaging} from "./notificator"

class NotificatorSet implements Notificator {
 private notificators : Notificator[] = []

withEmail(receivers: string[]) {
  this.notificators.push(new Email(receivers))
  return this
}

withSMS(receivers: string[]) {
  this.notificators.push(new SMS(receivers))
  return this
}

withFacebook(receivers: string[]) {
  this.notificators.push(new Facebook(receivers))
  return this
}

withBusinessMessaging(receivers: string[]) {
  this.notificators.push(new BusinessMessaging(receivers))
  return this
}

 public send(message: string) : void {
   this.notificators.forEach(notificator => {
     notificator.send(message)
   });
 }
}

export default NotificatorSet