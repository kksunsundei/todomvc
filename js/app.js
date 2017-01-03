(function (window) {
	'use strict';
    //要完成的功能:增删改查

    //1.先引包
    //2.创建模块
    //3.创建控制器
    //4.写代码
    var app=angular.module('todoApp',[]);
    app.controller('todoContorller',['$scope','$filter',function($scope,$filter){
        //查找功能
        //每个对象,也就是todoList的每一项,应该有一个唯一的id值,内容,状态
        //获取随机id
        function getId(){
            return Math.random();
        }
        //1.查找功能
        $scope.todoList=[
            {id:getId(),content:'css',status:true},
            {id:getId(),content:'javaScript',status:false},
            {id:getId(),content:'jQuery',status:false}
        ];
        //输入todolist的初始值
        $scope.todoText="";
        //2.增加功能
        $scope.addTodo=function(){
            //判断输入框有没有值
            if( $scope.todoText.length>0){
                $scope.todoList.push({id:getId(),content:$scope.todoText,status:false})
            };
           //获取到数据之后就清空输入框的值
            $scope.todoText="";
        };
        //3.删除功能
        $scope.deleteTodo=function(todo){
            //保存要删除的todo的索引值
            var index=$scope.todoList.indexOf(todo);
            $scope.todoList.splice(index,1);
        };
        //4.双击时修改样式样式
        //先创建1个空的对象,双击时将当前todo赋值给这个对象,从而修改当前对象的样式为正在编制中的样式
        $scope.editingTodo={};
        $scope.editing=function(todo){
            $scope.editingTodo=todo;
        };
        //5.点击空白区域退出修改状态
        $scope.quitEdit=function(){
            $scope.editingTodo={};
        };
        //6.剩余n项
        //使用过滤器
        //使用监听,第三个参数,返回更新得值
        $scope.$watch('todoList',function(newVal,oldVal){
            $scope.itemLeft=$filter('filter')(newVal,{'status':false}).length;

            //8.全选状态
            //和itemLeft的值是反着的,剩余0项时,证明全部完成,那toggleAll应该是true
            $scope.toggleAll=!$scope.itemLeft;

            //9.显示与隐藏clearCompleted
            $scope.isShowClearCompleted=$filter('filter')(newVal,{'status':true}).length>0?true:false;

        },true);
        //7.清楚已完成项目
        $scope.clearCompleted=function(){
            $scope.todoList=$filter('filter')($scope.todoList,{'status':false});
        }

        //8.全选按钮
        $scope.changeToggleAll=function(){
            $scope.todoList.forEach(function(item){
                item.status=$scope.toggleAll;
            })
        };






    }])
})(window);
