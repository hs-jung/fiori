sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"                                         //1-1 전역 라이브러리로 설정
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {                                   //1-2 순서 맞춰서 전달
        "use strict";

        return Controller.extend("project1704.controller.Main", {
            onInit: function () {
                
                // 생성과 동시에 만드는 방법
                var oData = { name : {
                        firstName : 'Hansik',               //oData.name.firstName
                        lastName : 'Jung'                   //oData.name.lastName
                    }
                    ,
                    list : [
                    {name : 'Park' , age : 26, tel : '010-1111-1111'},
                    {name : 'Jung' , age : 27, tel : '010-2222-2222'},   // list[1].name
                    {name : 'Kim' , age : 25, tel : '010-3333-3333'}
                    ] ,
                    inpValue : "Park Gildong",
                    txtValue : ''
                };         //json data

                var oModel = new JSONModel(oData); //json model           //2-1. 1-1 설정한 라이브러리 객체 생성 방법
                // var oModel2 = new sap.ui.model.json.JSONModel();          //2. onInit 안에서 JSONModel 객체 생성 방법

                var oData2 = {
                    inpValue : "Park Gildong"
                };
                var oModel2 = new JSONModel(oData2);

                //jsonModel을 View에서 사용하고 싶으면 => Data Binding.
                this.getView().setModel(oModel, 'main');
                this.getView().setModel(oModel2, 'test');

            },

            onClick : function(oEvent){
                debugger;               //개발자도구 켜져있어야 실행됨

                var oModel = this.getView().getModel('main');

                //oModel.getData()     : 전체 데이터 가져오기
                //oModel.getProperty(경로) : 특정 데이터 가져오기
                // var oData = oModel.getData();
                // var oData = oModel.getProperty("/");   //전체데이터 가져오기
                // var oData = oModel.getProperty("/name");   //특정 데이터 가져오기 /name 객체
                var oData = oModel.getProperty("/inpValue");   //특정 데이터 가져오기 /name 객체
                console.log(oData);

                oModel.setProperty("/txtValue", oData);

            },
            onAddClick : function(oEvent)
            {
                var oModel = this.getView().getModel("main");
                var oData = oModel.getProperty("/list");
                var data = { };
                oData.push(data);
                oModel.setProperty("/list", oData)
            },
            onDeleteClick : function(oEvent){
                var oModel = this.getView().getModel("main");
                var oData = oModel.getProperty("/list");
                var newData = [];

                var selectedItems = this.getView().byId("idTable").getSelectedIndices();

                if(selectedItems.length <= 0)
                {
                    sap.m.MessageToast.show("데이터를 선택하세요.");
                }
                else{
                    //Solution1.
                    
                    // for(var i=0; i< oData.length; i++)
                    // {
                    //     if(selectedItems.indexOf(i) < 0)
                    //     {
                    //         newData.push(oData[i]);
                    //     }
                    // }

                    // oModel.setProperty("/list", newData);


                    // Solution 2.
                    for(var i = selectedItems.length-1; i>= 0 ; i--)
                    {
                        oData.splice(selectedItems[i],1);
                    }
                    oModel.setProperty("/list", oData);
                }
            },
            onRowActionItem : function(oEvent){
                // debugger;
                var vIndex = oEvent.getParameter('row').getIndex();
                var oModel = this.getView().getModel("main");
                var oData = oModel.getProperty("/list");   //oModel.getData().list;
                
                oData.splice(vIndex,1);
                oModel.setProperty("/list", oData);
            }
        });
    });
