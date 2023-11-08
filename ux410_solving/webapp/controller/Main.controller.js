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

        return Controller.extend("sap.btp.ux410solving.controller.Main", {
            onInit: function () {
                var oData = { list : [
                    { type : "bar"},
                    { type : "column"},
                    { type : "line"},
                    { type : "donut"}
                ]}; 

                var oModel = new JSONModel(oData); 
                this.getView().setModel(oModel, 'typeList');

                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.getRoute('RouteMain').attachPatternMatched(this._patternMatched, this);

            },
            //라우터 패턴이 "일치할때마다" 실행
            _patternMatched : function(oEvent) {
           
            },
            onSearch : function() {
                var oModel = this.getView().byId("idOrderID");
                var aFilters = [];

                if(oModel.getValue())
                {
                    var oFilter = new Filter('OrderID', 'EQ', oModel.getValue());
                    aFilters.push(oFilter);
                }

                this.byId("idDataset").getBinding("data").filter(aFilters);
            }
        });
    });
