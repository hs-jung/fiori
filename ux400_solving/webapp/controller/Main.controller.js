sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.btp.ux400solving.controller.Main", {
            onInit: function () {

            },
            onRandomPress : function () {
                this.byId("idInput").setValue(Math.floor(Math.random() * 100) + 1);
            }
        });
    });
