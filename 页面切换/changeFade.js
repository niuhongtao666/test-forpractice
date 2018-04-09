/**
 * Created by 18333 on 2018/2/8.
 */
/*Javascript代码片段*/
var animateApp = angular.module('animateApp', ['ngRoute']);

animateApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'home.htm',
            controller: 'HomeController'
        }).
        when('/about', {
            templateUrl: 'about.htm',
            controller: 'AboutController'
        }).
        when('/contact', {
            templateUrl: 'contact.htm',
            controller: 'ContactController'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]);
// CONTROLLERS ============================================
// home page controller
animateApp.controller('HomeController',function($scope) {
    $scope.pageClass = 'page-home';
    $scope.message = "<这里是首页>";
});

// about page controller
animateApp.controller('AboutController', function($scope) {
    $scope.pageClass = 'page-about';
    $scope.message = "<这里是关于页>";
});

// contact page controller
animateApp.controller('ContactController', function($scope) {
    $scope.pageClass = 'page-contact';
    $scope.message = "<这里是联系页>";
});