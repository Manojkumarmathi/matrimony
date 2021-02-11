import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    user: any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    parentSubject: Subject<string> = new Subject();

    constructor(
        private router: Router,
    ) { }

    cardAnimation(value) {
        this.parentSubject.next(value);
    }

    gotoDashboard() {
        this.router.navigate(['/dashboard/dashboardContainer']);
    }

}
