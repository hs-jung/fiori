sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("odata.project1.controller.Northwind", {
            onInit: function () {

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
                debugger;
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
            onClose : function() {
                var oDialog =  sap.ui.getCore().byId("idDialog");
                oDialog.close();
            }
        });
    });
