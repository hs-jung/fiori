sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project17image.controller.View1", {
            onInit: function () {
                this.byId("idImage").setSrc(_rootPath + "/Image/AA.jpg")
            },
            fnImageSet : function(carrid) {
                if(carrid)
                {
                    return _rootPath + "/Image/" + carrid + ".jpg";
                    //return _rootPath + `/Image/${carrid}.jpg`;
                }
            }
        });
    });
