(function (window) {
	'use strict';
    //Ҫ��ɵĹ���:��ɾ�Ĳ�

    //1.������
    //2.����ģ��
    //3.����������
    //4.д����
    var app=angular.module('todoApp',[]);
    app.controller('todoContorller',['$scope','$filter',function($scope,$filter){
        //���ҹ���
        //ÿ������,Ҳ����todoList��ÿһ��,Ӧ����һ��Ψһ��idֵ,����,״̬
        //��ȡ���id
        function getId(){
            return Math.random();
        }
        //���ҹ���
        $scope.todoList=[
            {id:getId(),content:'css',status:true},
            {id:getId(),content:'javaScript',status:false},
            {id:getId(),content:'jQuery',status:false}
        ];
        //����todolist�ĳ�ʼֵ
        $scope.todoText="";
        //���ӹ���
        $scope.addTodo=function(){
            //�ж��������û��ֵ
            if( $scope.todoText.length>0){
                $scope.todoList.push({id:getId(),content:$scope.todoText,status:false})
            };
           //��ȡ������֮������������ֵ
            $scope.todoText="";
        };
        //ɾ������
        $scope.deleteTodo=function(todo){
            //����Ҫɾ����todo������ֵ
            var index=$scope.todoList.indexOf(todo);
            $scope.todoList.splice(index,1);
        };
        //˫��ʱ�޸���ʽ��ʽ
        //�ȴ���1���յĶ���,˫��ʱ����ǰtodo��ֵ���������,�Ӷ��޸ĵ�ǰ�������ʽΪ���ڱ����е���ʽ
        $scope.editingTodo={};
        $scope.editing=function(todo){
            $scope.editingTodo=todo;
        };
        //����հ������˳��޸�״̬
        $scope.quitEdit=function(){
            $scope.editingTodo={};
        };
        //ʣ��n��
        //ʹ�ù�����
        //ʹ�ü���,����������,���ظ��µ�ֵ
        $scope.$watch('todoList',function(newVal,oldVal){
            $scope.itemLeft=$filter('filter')(newVal,{'status':false}).length;
            //console.log($filter('filter')(newVal,{'status':false}).length);

        },true);
        



    }])
})(window);
