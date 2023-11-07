sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem",
    "sap/m/Label",
	"sap/m/ColumnListItem", 
    "sap/m/library", 
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FlattenedDataset, FeedItem, 
        Label, ColumnListItem, library, MessageToast ) {
        "use strict";

        
        

        return Controller.extend("project1709.controller.Main", {
            
            onInit: function () {
                this._setChartInController();

            },
            _setChartInController: function() {
                var oModel = new JSONModel();
                oModel.loadData('../model/Data.json');
                this.getView().setModel(oModel, 'data');

                //Chart
                var oChart = this.getView().byId("idChart");

                //Dataset
                var oDataSet = new FlattenedDataset({
                    dimensions : [ {name : 'Country',
                            value : '{data>Country}'
                        }],
                    measures : [{
                        name : 'Revenue',
                        value : '{data>Revenue}'
                    },
                    {
                        name : 'Revenue2',
                        value : '{data>Revenue2}'
                    }],
                    data : { path : 'data>/Products'}
                });

                oChart.setDataset(oDataSet);

                //feed
                var feedValueAxis = new FeedItem({
                    uid : "valueAxis",
                    type : "Measure",
                    values : ['Revenue','Revenue2']
                });

                var feedChategoryAxis = new FeedItem({
                    uid : "categoryAxis",
                    type : "Dimension",
                    values : ['Country']
                });

                oChart.addFeed(feedValueAxis);
                oChart.addFeed(feedChategoryAxis);

                // oChart.setVizType("Radar");
            }
        });
    });
