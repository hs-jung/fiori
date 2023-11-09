sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("exam.exprogram17.controller.Main", {
            onInit: function () {

            },
            onSearch : function() {
                var categoryID = ""
                var categoryName = ""
                var oFilter = new Filter();
                var aFilter = [];

                if (this.byId("idCategoryID").getValue()) {
                    categoryID = this.byId("idCategoryID").getValue();
                    var oFilter = new Filter('CategoryID','GE', categoryID);
                    aFilter.push(oFilter);
                }

                if (this.byId("idCategoryName").getValue()) {
                    categoryName = this.byId("idCategoryName").getValue();
                    var oFilter = new Filter('CategoryName','Contains', categoryName);
                    aFilter.push(oFilter);
                }

                //테이블 객체 가져와서, 바인딩 정보 가져온 후, Filter 적용
                this.byId("idTable").getBinding("items").filter(aFilter);
                
            }
        });
    });
