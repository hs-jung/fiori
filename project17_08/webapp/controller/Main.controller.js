sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FlattenedDataset, FeedItem) {
        "use strict";

        return Controller.extend("project1708.controller.Main", {
            onInit: function () {
                this._setChartInView();
                this._setChartInController();
            },
            _setChartInView: function() {
                var oData = {
                    list : [
                        { name : 'aaa', rate : 35, cost : 10 },
                        { name : 'bbb', rate : 15, cost : 12 },
                        { name : 'ccc', rate : 10, cost : 11 },
                        { name : 'ddd', rate : 15, cost : 15 },
                        { name : 'eee', rate : 20, cost : 10 },
                        { name : 'fff', rate : 5, cost : 16 }
                    ]
                };

                this.getView().setModel(new JSONModel(oData), 'view');
            },
            _setChartInController : function() {
                var oData = {
                    sales : [
                        {product: 'Jackets', amount :'65'},
                        {product: 'Shirts', amount :'70'},
                        {product: 'Pants', amount :'83'},
                        {product: 'Coats', amount :'92'},
                        {product: 'Pruse', amount :'77'}
                    ]
                };

                this.getView().setModel(new JSONModel(oData), 'cont');
                
                //Chart
                var oChart = this.getView().byId("idChart");

                //dataset
                var oDataSet = new FlattenedDataset({
                    dimensions: [
                        {name : 'Product', value: '{cont>product}'}
                    ],
                    measures : [
                        {name : 'Amount', value: '{cont>amount}'}
                    ],
                    data : { path : 'cont>/sales'}
                });

                oChart.setDataset(oDataSet);

                //feed
                var feedValueAxis = new FeedItem({
                    uid : "valueAxis",
                    type : "Measure",
                    values : ['Amount']
                });

                var feedChategoryAxis = new FeedItem({
                    uid : "categoryAxis",
                    type : "Dimension",
                    values : ['Product']
                });

                oChart.addFeed(feedValueAxis);
                oChart.addFeed(feedChategoryAxis);

                oChart.setVizType("bar");


            }
        });
    });
