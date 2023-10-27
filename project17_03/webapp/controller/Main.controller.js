sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1703.controller.Main", {
            onInit: function () {
                // 초기값 세팅 - 화면이 뜨자마자 각 Input에 10, 20 세팅
                this.byId('idInput1').setValue("10");
                this.byId('idInput2').setValue("20");
            },

            calCulator: function() {
                let item1 = this.getView().byId("idInput1").getValue()*1;
                // let item1 = this.byId("idInput1").getValue()*1;     getView() 생략가능
                let item2 = this.getView().byId("idInput2").getValue()*1;
                let op = this.getView().byId("idSelect").getSelectedKey();
                let result = 0;

                switch(op){
                    case 'PLUS':
                        result = item1 + item2;
                        break;
                    case 'MINUS':
                        result = item1 - item2;
                        break;
                    case 'MULTIPLE':
                        result = item1 * item2;
                        break;
                    case 'DIVISION':
                        result = item1 / item2;
                        break;
            
                }
                // console.log( result );
                sap.m.MessageToast.show(result);
                // sap.m.MessageBox
            }
        });
    });
