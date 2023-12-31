sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"  
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1703.controller.Main", {
            onInit: function () {
                console.log("onInit");
                // 초기값 세팅 - 화면이 뜨자마자 각 Input에 10, 20 세팅
                this.byId('idInput1').setValue("10");
                this.byId('idInput2').setValue("20");

                //Data 설정
                var oData = { combo : [
                    { key : 'PLUS', text : '+'},
                    { key : 'MINUS', text : '-'},
                    { key : 'DIVISION', text : '/'},
                    { key : 'MULTIPLE', text : 'x'}
                ],
                    history : [] };         //json data

                var oModel = new JSONModel(oData); 



                //jsonModel을 View에서 사용하고 싶으면 => Data Binding.
                this.getView().setModel(oModel, 'main');
            },

            calCulator: function() {
                let item1 = this.getView().byId("idInput1").getValue()*1;
                // let item1 = this.byId("idInput1").getValue()*1;     getView() 생략가능
                let item2 = this.getView().byId("idInput2").getValue()*1;
                let op = this.getView().byId("idSelect").getSelectedKey();
                let oModel = this.getView().getModel('main');
                let oData = this.getView().getModel('main').getProperty("/history");
                let result = 0;
                //Data 설정
                var oNewData = { };         //json data
                let op1 = '';

                switch(op){
                    case 'PLUS':
                        result = item1 + item2;
                        op1 = '+';
                        break;
                    case 'MINUS':
                        result = item1 - item2;
                        op1 = '-';
                        break;
                    case 'MULTIPLE':
                        result = item1 * item2;
                        op1 = 'x';
                        break;
                    case 'DIVISION':
                        result = item1 / item2;
                        op1 = '/';
                        break;
            
                }
                oNewData = { num1 : item1, op : op1, num2 : item2, result : result
                };         //json data
                // console.log( result );
                sap.m.MessageToast.show(result);
                // sap.m.MessageBox
                // debugger;
                this._addHistory(oNewData); // 외부 연결되지 않은 내부 함수

                // // oData.push(oNewData);  //ASE
                // oData.unshift(oNewData);  //DES
                // oModel.setProperty("/history", oData);
            },
            _addHistory: function(result){
                let oModel = this.getView().getModel('main');
                let oData = this.getView().getModel('main').getProperty("/history");

                oData.unshift(result);  //DES
                oModel.setProperty("/history", oData);

            }
        });
    });
