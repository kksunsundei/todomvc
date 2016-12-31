(function (window) {
	'use strict';
    //要完成的功能:增删改查

    //1.先引包
    //2.创建模块
    //3.创建控制器
    //4.写代码
    var app=angular.module('todoApp',[]);
    app.controller('todoContorller',function($scope){
        //查找功能
        //每个对象,也就是todoList的每一项,应该有一个唯一的id值,内容,状态
        //获取随机id
        function getId(){
            return Math.random();
        }
        //查找功能
        $scope.arr=[
            {id:getId(),content:'css',status:true},
            {id:getId(),content:'javaScript',status:false},
            {id:getId(),content:'jQuery',status:false}
        ]
    })
})(window);
