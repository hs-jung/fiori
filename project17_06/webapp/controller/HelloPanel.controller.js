sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("project1706.controller.HelloPanel", {
            onInit: function () {

            },
            onOpenDialog: function(oEvent) {
                var oDialog =  sap.ui.getCore().byId("idDialog");
                // sap.ui.core.Fragment
                if(!oDialog){
                    Fragment.load({
                        name : 'project1706.view.fragment.Dialog',
                        type : 'XML',
                        controller : this
                    }).then(function(oDialog) {
                        //비동기로 file load 끝난 후 then 함수 시작
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
