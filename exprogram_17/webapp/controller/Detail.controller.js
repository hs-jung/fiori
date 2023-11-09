sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, JSONModel, FlattenedDataset, FeedItem) {
        "use strict";

        return Controller.extend("exam.exprogram17.controller.Detail", {
           
            
            onInit: function () {
               
                var oRouter = this.getOwnerComponent().getRouter();
                //Detail 라우터에 Pattern Matched 이벤트 붙이기
                oRouter.getRoute('RouteDetail').attachPatternMatched(this._patternMatched, this);
            },
            //라우터 패턴이 "일치할때마다" 실행
            _patternMatched : function(oEvent) {
                var oArgu = oEvent.getParameters().arguments;
                // oArgu => { OrderID : 'hihi', option : 123 }
                // debugger;
                // this.getView().getModel().read(`/Order_Details_Extendeds(ProductName=${oArgu.ProductName})`, {
                //     success: function(oReturn) {
                        
                //         this.getView().getModel("data").setProperty('/',oReturn);
                //     }.bind(this)   //첫번째 방법 this bindind
                // });
                var title = oArgu.ProductName + " 상품의 주문 조회";

                this.byId('idTitle').setText(title);


            },
            //뒤로가기
            onBack : function() {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if(sPreviousHash !== undefined){
                    //sap router 히스토리가 없는 경우에는
                    //window 히스토리에서 뒤로 가기
                    window.history.go(-1);
                }
                else{
                    // sap router 히스토리가 있으면 메인 화면으로 이동
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("RouteNorthwind",{});
                }
            }
        });
    });
