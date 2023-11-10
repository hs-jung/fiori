sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project17btp.controller.Main", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(oModel, 'main');
            },
            onReadEntitySet : function() {
                // oData Model 전체조회
                // Get 요청 :/MemberSet
                
                this.getView().getModel().read("/MemberSet", {
                    success: function(oReturn){
                        // ET_ENTITYSET
                        // Response Data가 oReturn으로 돌어옴
                        this.getView().setModel("/", oRerun.results);
                    }
                });
            },//단건조회(GET)
            onReadEntity : function() {
                var oTable = this.getView().byId("idTable");
                var index = oTable.getSelectedIndex();
                var oMainModel = this.getView().getModel('main');
                var path = oTable.getContextByIndex(index).getPath();

                // 데이터 한 건 가져오는 방법 -1
                // this.getView().getModel().getProperty(path);

                // 데이터 한 건 가져오는 방법 -2
                this.getView().getModel().read(path, {
                    success: function(oReturn){
                        oMainModel.setData(oReturn);


                    }.bind(this)
                });

            },//생성(POST) - Create EntitySet /MemberSet + Body(Json)
            onCreateEntity : function() {
                var oMainModel = this.getView().getModel('main');
                var oData = oMainModel.getData();

                /** oData 변수에 들어가 있는 json Data
                 * {
                 *      memID : 'Input Value'
                 *      Memnm : ''
                 *      Telno : ''
                 *      Email : ''
                 * }
                 */
                this.getView().getModel().create("/MemberSet", oData, {
                    success: function(oReturn) {
                        sap.m.MessageToast.show("데이터 생성 완료");

                    },
                    error : function(oError) {
                        // 에러 처리
                        debugger;
                    }
                })


            },//변경(PUT)
            onUpdateEntity : function() {
                var oMainModel = this.getView().getModel('main');
                var oDataModel = this.getView().getModel();
                var oData = oMainModel.getData();

                // oDataModel.read("/MemberSet(key1='10218', key2='20202')")

                //"MemberSet('key')"
                var path = oDataModel.createKey("/MemberSet",{
                    Memid : oData.Memid
                 });     //MemberSet('1')

                 oDataModel.update(path, oData, {
                    success : function(oReturn) {
                        sap.m.MessageToast.show("변경 완료");
                    }
                 });


            },//삭제(DELETE)
            onDeleteEntity : function() {
                var oMainModel = this.getView().getModel('main');
                var oDataModel = this.getView().getModel();
                var oData = oMainModel.getData();

                var path = oDataModel.createKey("/MemberSet",{
                    Memid : oData.Memid
                 });     //MemberSet('1')

                oDataModel.remove(path,{
                    success : function() {
                        sap.m.MessageToast.show("삭제 완료");
                    }
                });

            },
            onRowSelectedChange : function(oEvent) {
                var path = oEvent.getParameters().rowCoutext.getPath();
                var oSelectedData = this.getView().getModel().getProperty(path);

                this.getView().getModel('main').setData({
                    Memid : oSelectedData.Memid,
                    Memnm : oSelectedData.Memnm,
                    Telno : oSelectedData.Telno,
                    Email : oSelectedData.Email
                });

            }
        });
    });
