sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
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
                
            }
            
        });
    });
