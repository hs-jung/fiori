sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"  
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("sap.btp.ux400solving.controller.Main", {
            onInit: function () {
                //Data 설정
                var oData = { rows : [] };         //json data

                var oModel = new JSONModel(oData); 
                this.getView().setModel(oModel,"list");

            },
            onRandomPress : function () {
                var value = Math.floor(Math.random() * 100) + 1;
                this.byId("idInput").setValue(value);

                let oModel = this.getView().getModel('list');
                let oData = this.getView().getModel('list').getProperty("/rows");

                oData.unshift({text : value});  //DES
                oModel.setProperty("/rows", oData);
            }
        });
    });
