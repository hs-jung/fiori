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

        return Controller.extend("exam.exprogram17.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel();    
                oModel.loadData('../model/Products.json');
                this.getView().setModel(oModel, 'products');

                this._setChartInView();
            },
            _setChartInView : function() {
                var oModel = new JSONModel();
                oModel.loadData('../model/SalesByCategories.json');

                this.getView().setModel(oModel, 'sbc');
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
                
            },
            onRowSelected : function(oEvent) {
                var aFilter = [];
                var sPath = oEvent.getSource().getSelectedContextPaths();  // "/Categories(2)"
                
                this.getView().getModel().read(sPath[0], {
                    success: function(oReturn) {
                        if (oReturn.CategoryID) {
                            var oFilter = new Filter('CategoryID','EQ', oReturn.CategoryID);
                            aFilter.push(oFilter);
                        }
        
                        //테이블 객체 가져와서, 바인딩 정보 가져온 후, Filter 적용
                        this.byId("idTable2").getBinding("items").filter(aFilter);
                        // this.byId("idFdata").getBinding("data").filter(aFilter);

                        this.getChart(sPath[0]);

                    }.bind(this)  //첫번째 방법 this bindind
                });

                
            },
            getChart : function(sPath) {
                //차트 객체 가져와서, 바인딩 정보 가져온 후, Filter 적용
                //Chart
                var oSelectItem = this.getView().getModel().getProperty(sPath);
                var oModel = this.getView().getModel("sbc");
                var oDataModel = this.getView().getModel();
                var oFilter = new Filter('CategoryID','EQ', oSelectItem.CategoryID);

                // SEGW URI : /EntitySetName
                // SEGW URI : oDataService_SRV/CarrierSet?$filter=CustomerID qd 'VINET'
                oDataModel.read("/Sales_by_Categories", {
                    filters : [oFilter],
                    success : function(oReturn) {
                        oModel.setProperty("/list", oReturn.results);
                    }
                });

                var oChart = this.getView().byId("idChart");

                // oModel.loadData('../model/SalesByCategories.json');

                // this.getView().setModel(oModel, 'sbc');
                var oDataSet = new FlattenedDataset({
                    dimensions: [
                        {name : 'ProductName', value: '{sbc>ProductName}'}
                    ],
                    measures : [
                        {name : 'ProductSales', value: '{sbc>ProductSales}'}
                    ],
                    data : { path : 'sbc>/list'}
                });
                
                oChart.setDataset(oDataSet);
            },
            onSelectData : function(oEvent) {
                this.init();
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDetail",{
                    ProductName : oEvent.getParameters().data[0].data.ProductName, //필수 파라미터
                });
            },
            init : function() {
                var oModel = this.getView().getModel("sbc");
                var aFilter = [];
                var oFilter = new Filter('CategoryID','EQ', '0');
                aFilter.push(oFilter);
                       
        
                //테이블 객체 가져와서, 바인딩 정보 가져온 후, Filter 적용
                this.byId("idTable2").getBinding("items").filter(aFilter);

                oModel.setProperty("/list", {});

                var oChart = this.getView().byId("idChart");

                // oModel.loadData('../model/SalesByCategories.json');

                // this.getView().setModel(oModel, 'sbc');
                var oDataSet = new FlattenedDataset({
                    dimensions: [
                        {name : 'ProductName', value: '{sbc>ProductName}'}
                    ],
                    measures : [
                        {name : 'ProductSales', value: '{sbc>ProductSales}'}
                    ],
                    data : { path : 'sbc>/list'}
                });
                
                oChart.setDataset(oDataSet);
            }

        });
    });
