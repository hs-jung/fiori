sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    'sap/ui/model/Filter'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,History, Filter) {
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

                // 'Orders(10248)' 데이터 바인딩
                this.getView().bindElement(`/Orders(${oArgu.OrderID})`);

                // oArgu.OrderID 값으로 Key값을 얻었기 때문에
                // 그 값을 이용해서 oDataModel.read() 요청을 보낼 수 있다.

                // 단건 조회 요청 보내기
                //두번째 방법
                // var that = this;

                var oModel = this.getView().getModel('main');

                this.getView().getModel().read(`/Orders(${oArgu.OrderID})`, {
                    success: function(oReturn) {
                        // 서버에서 얻은 값을 success함수의 파라미터 변수 값에서
                        // JSON Data 형태로 얻을 수 있다.

                        // 전체데이터 설정
                        oModel.setProperty("/", oReturn);  
                        oModel.setData(oReturn);
                        //that.getView()~
                        this.getView().getModel('main').setData(oReturn);
                    }.bind(this)   //첫번째 방법 this bindind
                });


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
            },
            onRead : function() {
                var oDataModel = this.getView().getModel();
                var oFilter = new Filter('CustomerID', 'EQ', 'VINET');

                // SEGW URI : /EntitySetName
                // SEGW URI : oDataService_SRV/CarrierSet?$filter=CustomerID qd 'VINET'
                oDataModel.read("/Orders", {
                    filters : [oFilter],
                    success : function(oReturn) {
                        debugger;
                        oReturn.results // [ {}, {}, {}, {}, ... , {} ]
                    }
                });
            }
        });
    });
