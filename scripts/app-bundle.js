define('app',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.map([{ route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Home', settings: { hideNav: false } }, { route: 'game', name: 'game', moduleId: './game', nav: false, title: 'Joc', settings: { hideNav: false } }, { route: 'intro', name: 'intro', moduleId: './intro', nav: false, title: 'Introduction', settings: { hideNav: true } }, { route: 'login-sign-up', name: 'login-sign-up', moduleId: './login-sign-up', nav: false, title: 'Login and Sign Up', settings: { hideNav: true } }]);
            console.log(this.router);
        };

        return App;
    }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('game',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Game = exports.Game = function Game() {
    _classCallCheck(this, Game);
  };
});
define('home',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Home = exports.Home = function () {
        function Home() {
            _classCallCheck(this, Home);

            this.hVar = 'H Variable';
            this.inputVar = 'Somethig';
            this.user = {};
            this.imageSource = 'http://st1.agora.md/news/big/directorul-media-tv-din-cimislia-15-posturi-locale-de-televiziune-vor-disparea-29980.jpg';
            this.listOfImages = [{
                news: 'http://agora.md/1',
                image: 'http://st1.agora.md/news/big/directorul-media-tv-din-cimislia-15-posturi-locale-de-televiziune-vor-disparea-29980.jpg'
            }, {
                news: 'http://agora.md/2',
                image: 'http://st2.agora.md/news/big/sinteza-saptamanii-la-londra-a-avut-loc-un-atac-terorist--iar-in-franta-s-au-identificat-liderii-alegerilor-prezidentiale-29972.jpg'
            }, {
                news: 'http://agora.md/3',
                image: 'http://st2.agora.md/news/medium/video--schema-de-spalare-a-miliardelor-din-rusia-cu-ajutorul-instantelor-moldovenesti--pe-intelesul-tuturor-29982.jpg'

            }];

            this.message = 'Hello World!';
            console.log('Constructor');
        }

        Home.prototype.activate = function activate() {
            this.getUserData();
            console.log('Activate');
        };

        Home.prototype.attached = function attached() {
            console.log('Attached');
        };

        Home.prototype.getUserData = function getUserData() {
            this.user = {
                name: 'Sorin',
                email: 'sorin.gitlan@sens.media'
            };

            if (window.localStorage.getItem('user')) {
                this.user = JSON.parse(window.localStorage.getItem('user'));
            }
        };

        Home.prototype.showInputVariable = function showInputVariable() {
            console.log(this.user);
        };

        Home.prototype.saveUserData = function saveUserData() {
            console.log('Data was sent tot server');
            console.log(this.user);
            window.localStorage.setItem('user', JSON.stringify(this.user));
            console.log();
        };

        return Home;
    }();
});
define('imageBlock',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var ImageBlock = exports.ImageBlock = function ImageBlock() {
      _classCallCheck(this, ImageBlock);

      console.log('Imag eBlock Constructor');
   };
});
define('intro',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Intro = exports.Intro = function () {
        function Intro() {
            _classCallCheck(this, Intro);

            console.log('Constructor Intro');
        }

        Intro.prototype.activate = function activate() {
            console.log('Activate Intro');
        };

        Intro.prototype.attached = function attached() {
            console.log('Attached Intro');
        };

        return Intro;
    }();
});
define('login-sign-up',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var LoginSignUp = exports.LoginSignUp = function () {
        function LoginSignUp() {
            _classCallCheck(this, LoginSignUp);

            console.log('Constructor Login and Sign up');
        }

        LoginSignUp.prototype.activate = function activate() {
            console.log('Activate Login and Sign up');
        };

        LoginSignUp.prototype.attached = function attached() {
            console.log('Attached Login and Sign up');
        };

        return LoginSignUp;
    }();
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('nav-bar',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NavBar = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var NavBar = exports.NavBar = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function NavBar(router) {
        _classCallCheck(this, NavBar);

        this.router = router;
        console.log(this.router);
        console.log('Navbar Block Constructor');
    }) || _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"styles/style.css\"></require><compose if.bind=\"!router.currentInstruction.config.settings.hideNav\" view-model=\"nav-bar\"></compose><router-view></router-view></template>"; });
define('text!styles/style.css', ['module'], function(module) { module.exports = "body {\n    font-family: 'Roboto', sans-serif;\n    background-color: #eceff1;\n}\n\n.intro-page .custom-bar {\n    padding: 20px;\n    z-index: 2;\n    /*position: absolute;*/\n}\n\n.intro-page .custom-bar .six-hats-logo img {\n    height: 30px;\n}\n\n.intro-page .welcome {\n    margin-top: -70px;\n    text-align: center;\n    display: table;\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: -1px;\n    height: calc(75vh + 1px);\n    padding: 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    background-image: url('../src/styles/images/ciuvak.jpg');\n}\n\n.intro-page .welcome-body {\n    color: white;\n    display: table-cell;\n    vertical-align: middle;\n}\n.intro-page .welcome-text {\n    padding-bottom: 20px;\n}\n\n.intro-page .welcome-body .to-login {\n    border-radius: 0px;\n    background-color: transparent;\n    color: white;\n}\n\n.intro-page #info {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.intro-page #info .container > div {\n    padding: 30px;\n    border-right: 10px solid #c2c9d0;\n    border-left: 10px solid #c2c9d0;\n}\n\n@media (min-width: 993px) {\n    .intro-page #info .container .info-title {\n        padding-bottom: 0px;\n        margin-bottom: -130px;\n    }\n\n    .intro-page #info .container .info-conclusion {\n        padding-bottom: 0px;\n        margin-top: -130px;\n    }\n\n    .intro-page .info-title .row > div,\n    .intro-page .info-conclusion .row > div {\n        shape-outside: circle();\n        /*margin: 0px 15px 15px 0px;*/\n    }\n\n    /*#info p {*/\n    /*!*margin: 0 130px 0 130px;*!*/\n    /*padding: 30px;*/\n    /*border-right: 10px solid #c2c9d0;*/\n    /*border-left: 10px solid #c2c9d0;*/\n    /*}*/\n    .intro-page #info .container > div {\n        border: none;\n    }\n}\n\n/**\nTESTING CIRCLE\n */\n\n.col {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    /*margin:4% 0 5% 3%;*/\n    padding: 0;\n    background-color: transparent;\n    border-top: none;\n}\n\n.col .spacer {\n    position: relative;\n    padding-top: 100%;\n}\n\n.circle {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border: 10px solid #eceff1;\n    background-color: #c2c9d0;\n    color: #333;\n    border-radius: 50%;\n    box-sizing: border-box;\n    text-align: center;\n    display: block;\n    padding: 15px;\n}\n\n.circle:before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n    margin-right: -2%;\n}\n\n.circle h3 {\n    /*font-size: 0.9em;*/\n    color: #18304c;\n    line-height: 1em;\n    display: inline-block;\n    vertical-align: middle;\n\n}\n\n/**\nEND TESTING CIRCLE\n */\n.intro-page footer {\n    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    background-image: url('../src/styles/images/footer-image.jpg');\n    height: 25%;\n}\n\n.intro-page footer h2 {\n    color: white;\n    line-height: calc(25vh + 1px);\n    text-align: center;\n    margin: 0;\n    /*padding-top: 5%;*/\n}\n\n.image-block {\n    width: 100px;\n    margin: 30px 0;\n}\n\n.image-block img {\n    width: 100%;\n}\n\n/* ********************* LOGIN & SIGN UP ********************* */\n.login-sign-up-page {\n    color: #263238;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n    background-image: url('../src/styles/images/login-wallpaper.jpg');\n    height: 100vh;\n}\n.login-sign-up-page .login-area .row{\n    margin-top: 25%;\n    background-color: #d4dce0;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cad4d8' fill-opacity='0.63' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\");\n}\n.login-sign-up-page .intro-advantages {\n    padding: 50px;\n    background: url('../src/styles/images/the-hat.png') center center no-repeat;\n}\n.login-sign-up-page .login-sign-up-forms{\n    background-color: white;\n}\n.login-sign-up-page .login-area .btn-default{\n    border: 0px solid transparent;\n    border-radius: 0px;\n    background-color: #d4dce0;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cad4d8' fill-opacity='0.63' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\");\n    font-weight: bold;\n    font-size: 130%;\n}\n.login-sign-up-page .panel-title a,\n.login-sign-up-page .panel-title a:hover{\n    display: inline-flex;\n    text-decoration: none;\n}"; });
define('text!game.html', ['module'], function(module) { module.exports = "<template><h1>Game Page</h1></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><h3 innerhtml.bind=\"hVar\">Opps</h3><form submit.delegate=\"saveUserData()\"><input type=\"text\" value.bind=\"user.name\"> <input type=\"email\" value.bind=\"user.email\"> <button type=\"submit\">Save Form</button></form><compose repeat.for=\"imageSrc of listOfImages\" view-model=\"imageBlock\"></compose><button click.delegate=\"showInputVariable()\" class=\"btn\">SAVE</button></template>"; });
define('text!imageBlock.html', ['module'], function(module) { module.exports = "<template><div class=\"image-block\"><h1>${$index}</h1><a href=\"${imageSrc.news}\"><img src=\"${imageSrc.image}\" alt=\"\"></a></div></template>"; });
define('text!intro.html', ['module'], function(module) { module.exports = "<template><div class=\"intro-page\"><div class=\"custom-bar\"><div class=\"six-hats-logo container img-responsive\"><div class=\"container\"><div class=\"row\"><img src=\"./src/styles/images/six-hat.png\"></div></div></div></div><header class=\"welcome\"><div class=\"welcome-body\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-10 col-md-8 col-sm-6 col-xs-12\"><h2 class=\"welcome-text\">Put your thinking hat on!</h2><button class=\"to-login btn btn-default\"><a href=\"#/login-sign-up\">GET STARTED</a></button></div></div></div></div></header><div id=\"info\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"container\"><div class=\"info-title\"><div class=\"row\"><div class=\"col-lg-offset-0 col-lg-3 col-md-offset-0 col-md-3 col-sm-offset-4 col-sm-4 col-xs-offset-2 col-xs-8\"><div class=\"col\"><div class=\"spacer\"></div><div class=\"circle\"><h3>What is Six Thinking Hats?</h3></div></div></div></div></div><div class=\"info-book\"><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-sm-9 col-xs-12\"><p>Six Thinking Hats is a system designed by Edward de Bono which describes a tool for group discussion and individual thinking involving six colored hats. \"Six Thinking Hats\" and the associated idea parallel thinking provide a means for groups to plan thinking processes in a detailed and cohesive way, and in doing so to think together more effectively.</p></div><div class=\"col-lg-3 col-md-3 col-sm-offset-0 col-sm-3 col-xs-offset-3 col-xs-6\"><img class=\"img-responsive\" src=\"./src/styles/images/book.png\"></div></div></div><div class=\"info-author\"><div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-offset-0 col-sm-3 col-xs-offset-3 col-xs-6\"><img class=\"img-responsive\" src=\"./src/styles/images/edward.png\"></div><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\"><p>Edward de Bono (born 19 May 1933) is a Maltese physician, psychologist, author, inventor and consultant. He originated the term lateral thinking, wrote the book Six Thinking Hats and is a proponent of the teaching of thinking as a subject in schools. De Bono also has written 57 books with translations into 34 languages. He has taught his thinking methods to government agencies, corporate clients, organizations and individuals, privately or publicly in group sessions.</p></div></div></div><div class=\"info-rules\"><div class=\"row\"><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\"><p>Six distinct directions are identified and assigned a color. The six directions are:<br>Managing Blue – what is the subject? what are we thinking about? what is the goal? Can look at the big picture.<br>Information White – considering purely what information is available, what are the facts?<br>Emotions Red – intuitive or instinctive gut reactions or statements of emotional feeling (but not any justification)<br>Discernment Black – logic applied to identifying reasons to be cautious and conservative. Practical, realistic.<br>Optimistic response Yellow – logic applied to identifying benefits, seeking harmony. Sees the brighter, sunny side of situations.<br>Creativity Green – statements of provocation and investigation, seeing where a thought goes. Thinks creatively, outside the box.</p></div><div class=\"col-lg-3 col-md-3 col-sm-offset-0 col-sm-3 col-xs-offset-3 col-xs-6\"><img class=\"img-responsive\" src=\"./src/styles/images/hats.png\"></div></div></div><div class=\"info-conclusion\"><div class=\"row\"><div class=\"col-lg-offset-0 col-lg-3 col-md-offset-0 col-md-3 col-sm-offset-4 col-sm-4 col-xs-offset-2 col-xs-8\"><div class=\"col\"><div class=\"spacer\"></div><div class=\"circle\"><h3>Your success depends on how well you think!</h3></div></div></div></div></div></div></div><footer><h2 role=\"button\" data-toggle=\"collapse\" href=\"#info\" aria-expanded=\"false\" aria-controls=\"info\">ABOUT US</h2></footer></div></template>"; });
define('text!login-sign-up.html', ['module'], function(module) { module.exports = "<template><div class=\"login-sign-up-page\"><div class=\"login-area container\"><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 intro-advantages\"><h2>six thinking hats</h2></div><div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 login-sign-up-forms\"><div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"headingOne\"><h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Login Now</a></h4></div><div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"panel-body\"><h1>Welcome!</h1><h3>Login to get started</h3><form><div class=\"form-group\"><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Login\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\"></div><div class=\"checkbox\"><label><input type=\"checkbox\"> Remember me</label></div><button type=\"submit\" class=\"btn btn-default col-lg-12 col-md-12 col-sm-12 col-xs-12\">Login</button></form></div></div></div><div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\"><h4 class=\"panel-title\"><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">First time here?<p class=\"text-danger\">&nbsp Create your account!</p></a></h4></div><div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\"><div class=\"panel-body\"><form><div class=\"form-group\"><label for=\"exampleInputEmail1\">First Name</label><input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Enter your first name\"></div><div class=\"form-group\"><label for=\"exampleInputEmail1\">Last Name</label><input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Enter your last name\"></div><div class=\"form-group\"><label for=\"exampleInputEmail1\">Login</label><input type=\"text\" class=\"form-control\" id=\"login\" placeholder=\"Enter your login\"></div><div class=\"form-group\"><label for=\"exampleInputEmail1\">Email address</label><input type=\"email\" class=\"form-control\" id=\"Email\" placeholder=\"Enter your email address\"></div><div class=\"form-group\"><label for=\"exampleInputPassword1\">Password</label><input type=\"password\" class=\"form-control\" id=\"Password\" placeholder=\"Enter your password\"></div><div class=\"form-group\"><label for=\"exampleInputPassword1\">Confirm password</label><input type=\"password\" class=\"form-control\" id=\"ConfirmationPassword\" placeholder=\"Confirm Password\"></div><button type=\"submit\" class=\"btn btn-default col-lg-12 col-md-12 col-sm-4 col-xs-12\">Sign up</button></form></div></div></div></div></div></div></div></div></template>"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
//# sourceMappingURL=app-bundle.js.map