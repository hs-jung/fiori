sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1702.controller.Main", {
            TEXT : "Hello World",

            onInit: function () { // Initial 
                var sText = this.TEXT;

            },

            onClick: function(oEvent) {
                alert('Click!');

            },

            onChange: function(){
                //inPut 객체 가져오기
                let oInput = this.getView().byId("idInput");
                let oText = this.getView().byId("idText");

                oText.setText( oInput.getValue()) ;
                console.log(oInput.getValue());
            }
        });
    });


