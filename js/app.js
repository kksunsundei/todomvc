(function (window) {
	'use strict';
    //Ҫ��ɵĹ���:��ɾ�Ĳ�

    //1.������
    //2.����ģ��
    //3.����������
    //4.д����
    var app=angular.module('todoApp',[]);
    app.controller('todoContorller',function($scope){
        //���ҹ���
        //ÿ������,Ҳ����todoList��ÿһ��,Ӧ����һ��Ψһ��idֵ,����,״̬
        //��ȡ���id
        function getId(){
            return Math.random();
        }
        //���ҹ���
        $scope.arr=[
            {id:getId(),content:'css',status:true},
            {id:getId(),content:'javaScript',status:false},
            {id:getId(),content:'jQuery',status:false}
        ]
    })
})(window);
