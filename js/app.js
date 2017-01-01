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
        $scope.todoList=[
            {id:getId(),content:'css',status:true},
            {id:getId(),content:'javaScript',status:false},
            {id:getId(),content:'jQuery',status:false}
        ];
        //输入todolist的初始值
        $scope.todoText="";
        //增加功能
        $scope.addTodo=function(){
            //判断输入框有没有值
            if( $scope.todoText.length>0){
                $scope.todoList.push({id:getId(),content:$scope.todoText,status:false})
            };
           //获取到数据之后就清空输入框的值
            $scope.todoText="";
        };
        //删除功能
        $scope.deleteTodo=function(todo){
            //保存要删除的todo的索引值
            var index=$scope.todoList.indexOf(todo);
            $scope.todoList.splice(index,1);
        }

    })
})(window);
