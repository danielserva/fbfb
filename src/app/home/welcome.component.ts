import { Component } from '@angular/core';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    lat: number = -11.6870881;
    lng: number = -48.4975477;
}
