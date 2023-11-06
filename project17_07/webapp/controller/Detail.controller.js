sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment, Filter,FilterOperator) {
        "use strict";

        var _oModel; //클로저변수

        return Controller.extend("odata.project1.controller.Detail", {
            //최초 한번만 실행됨
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                //Detail 라우터에 Pattern Matched 이벤트 붙이기
                oRouter.getRoute('RouteDetail').attachPatternMatched(this._patternMatched, this);
               
            },
            //라우터 패턴이 "일치할때마다" 실행
            _patternMatched : function(oEvent) {
                //이벤트 객체의 파라미터 정보에 arguments 에서 넘겨받은 데이터 확인
                var oArgu = oEvent.getParameters().arguments;
                // oArgu => { OrderID : 'hihi', option : 123 }

                this.byId('detail').setTitle(oArgu.OrderID);

                

            }
        });
    });
