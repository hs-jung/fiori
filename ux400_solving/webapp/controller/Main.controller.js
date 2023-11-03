sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Fragment) {
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
            },
            onOpenPress : function() {
                // debugger;
                var oDialog =  sap.ui.getCore().byId("idDialog");
                var oModel = this.getView().getModel();
                // sap.ui.core.Fragment
                if(!oDialog){
                    Fragment.load({
                        name : 'sap.btp.ux400solving.view.fragment.Products',
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
            _typeToString: function(value) {
                return value ? 'Yes' : 'No';
            },
            //formatter 함수
            formatter : {
                transformDiscontinued : function(value) {
                    // debugger;
                    return this._typeToString(value);
                    // return value ? 'Yes' : 'No';
                }
            }
        });
    });
