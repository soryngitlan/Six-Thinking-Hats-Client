import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class NavBar {

    constructor(router){
        this.router = router;
        console.log(this.router);
        console.log('Navbar Block Constructor');
    }
}