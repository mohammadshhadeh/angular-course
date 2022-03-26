import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log('count: ', count);
    // })
    const customIntervalObs = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000)
    })



    this.firstObsSubscription = customIntervalObs.pipe(filter((data : number) => {
      return data % 2 === 0;
    }), map((data :number) => {
      return 'pip: ' +  (data + 1);
    })).subscribe((data) => {
      console.log('count: ', data);
    }, error => {
      console.log(`%c Error: ${error.message}`, 'color: red' );
    }, () => {
      console.log('%cCompleted!', 'color: green')
    })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
