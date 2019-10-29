import { Observable } from "rxjs";

//custom observer ===> explains how observer works
export class CustomObserver {
  constructor() {}

  customObserverMethod() {
    let count = 0;
    return Observable.create(observer => {
      setInterval(() => {
        observer.next(count);
        if (count === 2) observer.complete();
        if (count === 3) observer.error();

        count++;
      }, 1000);
    });
  }
}
