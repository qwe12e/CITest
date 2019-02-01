import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'deneme';
    asd = 5;
    c = this.asd + 5;
    deneme = 'test';
}
