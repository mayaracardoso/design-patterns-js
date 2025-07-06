class Subject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    notify(data) {
      this.observers.forEach((observer) => observer(data));
    }
  }
  
  const subject = new Subject();
  subject.subscribe((data) => console.log(`Observer 1: ${data}`));
  subject.subscribe((data) => console.log(`Observer 2: ${data}`));
  
  subject.notify("Notificação enviada!"); 