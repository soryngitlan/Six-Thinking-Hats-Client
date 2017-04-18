export class Home {
    hVar = 'H Variable';
    inputVar = 'Somethig';
    user = {};
    imageSource = 'http://st1.agora.md/news/big/directorul-media-tv-din-cimislia-15-posturi-locale-de-televiziune-vor-disparea-29980.jpg';
    listOfImages = [
        {
            news: 'http://agora.md/1',
            image: 'http://st1.agora.md/news/big/directorul-media-tv-din-cimislia-15-posturi-locale-de-televiziune-vor-disparea-29980.jpg'
        },
        {
            news: 'http://agora.md/2',
            image: 'http://st2.agora.md/news/big/sinteza-saptamanii-la-londra-a-avut-loc-un-atac-terorist--iar-in-franta-s-au-identificat-liderii-alegerilor-prezidentiale-29972.jpg'
        },
        {
            news: 'http://agora.md/3',
            image: 'http://st2.agora.md/news/medium/video--schema-de-spalare-a-miliardelor-din-rusia-cu-ajutorul-instantelor-moldovenesti--pe-intelesul-tuturor-29982.jpg'

        }

    ]
    constructor() {
        this.message = 'Hello World!';
        console.log('Constructor');
    }
    activate() {
        this.getUserData();
        console.log('Activate');
    }

    attached() {
        console.log('Attached');
    }

    getUserData() {
        this.user = {
            name: 'Sorin',
            email: 'sorin.gitlan@sens.media'
        }

        if (window.localStorage.getItem('user')) {
            this.user = JSON.parse( window.localStorage.getItem('user'));
        }
    }

    showInputVariable() {
        console.log(this.user);
    }

    saveUserData() {
        console.log('Data was sent tot server');
        console.log(this.user);
        window.localStorage.setItem('user', JSON.stringify(this.user));
        console.log();}
}