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
                } };         //json data

                var oModel = new JSONModel(oData); //json model           //2-1. 1-1 설정한 라이브러리 객체 생성 방법
                // var oModel2 = new sap.ui.model.json.JSONModel();          //2. onInit 안에서 JSONModel 객체 생성 방법

                var oData2 = {
                    inpValue : "Park Gildong"
                };
                var oModel2 = new JSONModel(oData2);

                //jsonModel을 View에서 사용하고 싶으면 => Data Binding.
                this.getView().setModel(oModel, 'main');
                this.getView().setModel(oModel2, 'test');

            }
        });
    });
