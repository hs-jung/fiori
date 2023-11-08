sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"  
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sap.btp.ux410solving.controller.Main", {
            onInit: function () {
                var oData = { list : [{}]}; 
                var oModel = new JSONModel(oData); 
                this.getView().setModel(oModel, 'data');

                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.getRoute('RouteMain').attachPatternMatched(this._patternMatched, this);

            },
            //라우터 패턴이 "일치할때마다" 실행
            _patternMatched : function(oEvent) {
                
                // debugger;
                // this.getView().getModel().read(`/Orders`, {
                //     success: function(oReturn) {
                //         // 서버에서 얻은 값을 success함수의 파라미터 변수 값에서
                //         // JSON Data 형태로 얻을 수 있다.

                //         debugger;

                //         // 전체데이터 설정
                //         // oModel.setProperty("/", oReturn);  
                //         // oModel.setData(oReturn);
                //         //that.getView()~
                //         this.getView().getModel('main').setData(oReturn);

                      
                //     }.bind(this)   //첫번째 방법 this bindind
                // });


            }
        });
    });
