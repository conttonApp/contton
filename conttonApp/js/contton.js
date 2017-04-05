/**
 * Created by 80715 on 2017/3/30.
 */
var app=angular.module('conttonApp',['ionic'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('start',{
                url:'/ctnStart',
                templateUrl:'tpl/start.html'
            })
            .state('main',{
                url:'/ctnMain',
                templateUrl:'tpl/main.html'
            })
            .state('category',{
                url:'/ctnCategory',
                templateUrl:'tpl/category.html'
            })
            .state('community',{
                url:'/ctnCommunity',
               templateUrl:'tpl/community.html'
             })
            .state('cart',{
                url:'/ctnCart',
                templateUrl:'tpl/cart.html'
            })
            .state('user_center',{
                url:'/ctnUser_center',
                templateUrl:'tpl/user_center.html'
            })
        $urlRouterProvider.otherwise('/ctnMain')
    })

app.controller('parentCtrl',['$scope','$state',
    function($scope,$state){
        $scope.jump=function(stateName,arg){
            $state.go(stateName,arg);
        }
}])

