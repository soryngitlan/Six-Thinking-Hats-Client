export class App {


    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([
            { route: ['','home'], name: 'home', moduleId: './home', nav: true, title:'Home', settings:{hideNav: false} },
            { route: 'game', name: 'game', moduleId: './game', nav: false, title:'Joc', settings:{hideNav: false} },
            { route: 'intro', name: 'intro', moduleId: './intro', nav: false, title: 'Introduction', settings:{hideNav: true} },
            { route: 'login-sign-up', name: 'login-sign-up', moduleId: './login-sign-up', nav: false, title: 'Login and Sign Up', settings:{hideNav: true} }
            // {route: 'users', name: 'users', moduleId: 'users/index', nav: true},
            // {route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail'},
            // {route: 'files/*path', name: 'files', moduleId: 'files/index', href: '#files', nav: true}
        ]);
        console.log(this.router);
    }

}

