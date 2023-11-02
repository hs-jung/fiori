sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment, Filter) {
        "use strict";

        return Controller.extend("odata.project1.controller.Northwind", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    CustomerID : ''
                });

                this.getView().setModel(oModel, "main");

            },
            //formatter 함수
            formatter : {
                fnDateToString: function(value) {
                    if(value){
                        // var date = new Date(value);
                        // result = date.getFullYear().toString() + "-" + date.getMonth().toString() + "-"  + date.getDate().toString() + " " + date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString();
    
                        var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
                            pattern : 'yyyy-MM-dd HH:mm:ss'
                        });
                        return oFormat.format(value);
    
                    }
                    
                },
                fnFreightSum : function(via, freight) {
                    if( via && freight){
                        return via * Number(freight);
                    }
                }
            },
            onValueHelp: function(){
                // debugger;
                var oDialog =  sap.ui.getCore().byId("idDialog");
                var oModel = this.getView().getModel();
                // sap.ui.core.Fragment
                if(!oDialog){
                    Fragment.load({
                        name : 'odata.project1.view.fragment.Dialog',
                        type : 'XML',
                        controller : this
                    }).then(function(oDialog) {
                        //비동기로 file load 끝난 후 then 함수 시작
                        oDialog.setModel(oModel);
                        oDialog.open();
                    });
                }
                else{
                    oDialog.open();
                }
            },
            onClose : function(oEvent) {
                var oDialog =  sap.ui.getCore().byId("idDialog");
                // oDialog.close();

                //이벤트를 일으킨 객체(버튼)로부터 접근하여 Dialog 닫기
                oEvent.getSource().getParent().close();
            },
            onSearch : function() {
                // debugger;
                var oData = this.getView().getModel("main").getData();
                var aFilter = [];

                if(oData.CustomerID){
                    // var oFilter = new Filter({
                    //     path : "CustomerID",           //필터 대상 필드 이름
                    //     operator : "EQ",      // 조건 (EQ, NE, GT, GE, BT, Contains, ... )
                    //     value1 : oData.CustomerID,        // From 값
                    //     // value1 : 'VINET',        // From 값
                    //     value2 : ""         // To 값
                    // });

                    var oFilter = new Filter('CustomerID','EQ', oData.CustomerID);
                    aFilter.push(oFilter);

                }
               

                this.byId("idTable").getBinding("items").filter(aFilter);

            }
        });
    });
