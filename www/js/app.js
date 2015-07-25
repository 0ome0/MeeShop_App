// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
// var myApp = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

// .run(function($ionicPlatform) {
//     $ionicPlatform.ready(function() {
//         // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//         // for form inputs)
//         if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//         }
//         if (window.StatusBar) {
//             // org.apache.cordova.statusbar required
//             StatusBar.styleLightContent();
//         }
//     });
// })


angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //$ionicConfigProvider.views.maxCache(5);
    //$ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');

    $ionicConfigProvider.tabs.position('bottom');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "views/tabs.html"
    })



    .state('tab.main', {
        url: '/main',
        views: {
            'tab-main': {
                templateUrl: 'views/tab-main.html',
                controller: 'mainCtrl'
            }
        }
    })


    .state('tab.product', {
        url: '/product',
        views: {
            'tab-product': {
                templateUrl: 'views/tab-product.html',
                controller: 'productCtrl'
            }
        }
    })

    .state('tab.product-detail', {
        url: '/product/:productId',
        //url: '/list/:listId/:serialNumber/:dept/:borrowDate/:borrowDays/:empName/:staffName/:description/:catImgPath',
        views: {
            'tab-product': {
                templateUrl: 'views/product-detail.html',
                controller: 'productDetailCtrl'
            }
        }
    })

    // .state('tab.product-detail', {
    //    url: '/product/:productId/:productId',
    //    //url: '/list/:listId/:serialNumber/:dept/:borrowDate/:borrowDays/:empName/:staffName/:description/:catImgPath',
    //    views: {
    //      'tab-product': {
    //        templateUrl: 'views/product-detail.html',
    //        controller: 'productDetailCtrl'
    //      }
    //    }
    //  })

    .state('tab.promotion', {
        url: '/promotion',
        views: {
            'tab-promotion': {
                templateUrl: 'views/tab-promotion.html',
                controller: 'promotionCtrl'
            }
        }
    })

    .state('tab.category', {
        url: '/category',
        views: {
            'tab-category': {
                templateUrl: 'views/tab-category.html',
                controller: 'categoryCtrl'
            }
        }
    })


    .state('tab.shop', {
        url: '/shop',
        views: {
            'tab-shop': {
                templateUrl: 'views/tab-shop.html',
                controller: 'shopCtrl'
            }
        }
    });

    // Each tab has its own nav history stack:

    // .state('tab.dash', {
    //   url: '/dash',
    //   views: {
    //     'tab-dash': {
    //       templateUrl: 'templates/tab-dash.html',
    //       controller: 'DashCtrl'
    //     }
    //   }
    // })

    // .state('tab.chats', {
    //     url: '/chats',
    //     views: {
    //       'tab-chats': {
    //         templateUrl: 'templates/tab-chats.html',
    //         controller: 'ChatsCtrl'
    //       }
    //     }
    //   })
    //   .state('tab.chat-detail', {
    //     url: '/chats/:chatId',
    //     views: {
    //       'tab-chats': {
    //         templateUrl: 'templates/chat-detail.html',
    //         controller: 'ChatDetailCtrl'
    //       }
    //     }
    //   })

    // .state('tab.account', {
    //   url: '/account',
    //   views: {
    //     'tab-account': {
    //       templateUrl: 'templates/tab-account.html',
    //       controller: 'AccountCtrl'
    //     }
    //   }
    // });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/main');

});
