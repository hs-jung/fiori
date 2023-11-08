sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/model/Filter'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter) {
        "use strict";

        return Controller.extend("sap.btp.ux410solving.controller.Detail", {
            onInit: function () {
                var oData = {};
                var oModel = new JSONModel(oData); 

                //jsonModel을 View에서 사용하고 싶으면 => Data Binding.
                this.getView().setModel(oModel, 'data');
                var oRouter = this.getOwnerComponent().getRouter();
                //Detail 라우터에 Pattern Matched 이벤트 붙이기
                oRouter.getRoute('RouteDetail').attachPatternMatched(this._patternMatched, this);
            },
            //라우터 패턴이 "일치할때마다" 실행
            _patternMatched : function(oEvent) {
                var oArgu = oEvent.getParameters().arguments;
                // oArgu => { OrderID : 'hihi', option : 123 }
                var title = "OrderID : " + oArgu.OrderID;

                this.byId('idTitle').setText(title);

                this.getView().getModel().read(`/Order_Details(OrderID=${oArgu.OrderID}, ProductID=${oArgu.option})`, {
                    success: function(oReturn) {
                        this.getView().getModel("data").setProperty('/',oReturn);
                    }.bind(this)   //첫번째 방법 this bindind
                });

            }
        });
    });
