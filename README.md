# fiori
Fiori 수업

<h1>Project01 - Create Project --23.10.25</h1>
<h1>Project02 - input/Text fields & Controller 연습  --23.10.26</h1>
<h1>Project03 - calculator --23.10.26</h1>
<h1>Project04 - Model/JOSNModel --23.10.27</h1>
<ul>
  <li>Property Binding</li>
  <li>List Binding(=Aggregation Binding)</li>
  <ul>
    <li> rows="{main>/list}" </li>
    <li> Text text="{main>name}" wrapping="false" 상대경로로 list 배열 아래에서 찾음 </li>
  </ul>
  Client Model - Local에서 사용
  <ul>
    <li> JSON</li>
    <li> XML</li>
    <li> Resource</li>
  </ul>
  Server Model - Request
  <ul>
    <li> Odata V2</li>
    <li> OData V4</li>
  </ul>
</ul>

<h1>23.10.30</h1>
<ul> Proejct04
  <li>항목 추가</li>
  <li>항목 삭제(단일)</li>
  <li>항목 삭제(복수)</li>
</ul>
<ul> Proejct03
  <li>계산 히스토리 내역 추가</li>
</ul>

<h1>Project05 - Layout/Form/SimpleForm --23.10.31</h1>
<ul> Layout
  <li>Panel</li>
  <li>VerticalLayout</li>
  <li>HorizontalLayout</li>
  <li>Grid</li>
</ul>


<h1>Project06 - Layout/Form/SimpleForm --23.10.31</h1>
<ul> Nested View (중첩뷰)
  <li>파일명.fragment.xml => 컨트롤러 갖을 수 없음. 모달창 만들때 사용 뷰폴더 안에 fragment 폴더 만들어서 따로 관리하기도 함</li>
  <li>팝업 =>Dialog =>fragment로 구현</li>
</ul>

<h1>Project07 -OdataService --23.11.02</h1>
oData Service / ValueHelp / Filter
![image](https://github.com/hs-jung/fiori/assets/19891967/c331c46f-b1bc-48cd-9a2f-766c3f3aab89)
--namespace 설정
![image](https://github.com/hs-jung/fiori/assets/19891967/839ec7df-b6b6-4645-b61d-254d1981482f)


--Responsive Table

Model.filter
new Filter({
path : '필터 대상 필드명', ==> CustomerID
operator :                ==> BT, Contains, GT, LE, NE
value1 :
value2 :
})

new Filter({
filters : [필터객체1, 필터객체2, ... ],
and : true/false
})

<h1>ux400_solving - 기초다지기문제 --23.11.03</h1>

<h1>23.11.06</h1>
<ul> project07 - Dialog Data 적용, Table - Filter, Table - Sorter
  <li> Dialog Data 적용</li>
  <li>Table - Filter</li>
  <li>Table - Sorter</li>
</ul>
<ul> 라우팅 - Routing
  <li> config - 설정</li>
  <li> routes - 라우터 객체</li>
  <li> targets : 타겟 설정 (View)</li>
</ul>

<h1>Project09 - Chart/ Chart Container / Micro Chart --23.11.07</h1>
<ul> Chart
  <li>VizFrame</li>
  <li>FeedItem</li>
</ul>

<h1>23.11.13</h1>
<h5>UI5 Application</h5>
C : oDataModel.create("EntitysetName", oBody, {success : function() {}});
R (다건): oDataModel.read("/EntitysetName", { filters : [{필터객체1}, ... , {필터객체n}], sorter : [], success : function(oReturn) {}, error: function() {}}
R (단건): var Key = oDataModel.createKey("/EntitySetName", {Key1: value}
         oDataModel.read(Key, { filters : [{필터객체1}, ... , {필터객체n}], sorter : [], success : function(oReturn) {}, error: function() {}}
U : oDataModel.update("/EntitysetName(key1=value)", oBody, {success : function() {}, error : function() {}})
D : oDataModel.remove("/EntitysetName(key1=value)", {})

<h1>23.11.14</h1>
<h5>Deloy</h5>
npm run build
npm run deploy-config
npm run deploy

카탈로그 생성
SAP GUI
/n/ui2/flpd_cust
![image](https://github.com/hs-jung/fiori/assets/19891967/dd6905ea-3c9c-4f3d-8802-084bcf1b04e3)
![image](https://github.com/hs-jung/fiori/assets/19891967/2e72b99b-987a-4ae9-9c49-246504502750)
![image](https://github.com/hs-jung/fiori/assets/19891967/ae5b0bbc-a893-4b4e-bea6-d64881666bb0)
![image](https://github.com/hs-jung/fiori/assets/19891967/234645ac-c40a-4009-bcdd-4fef775dd095)
![image](https://github.com/hs-jung/fiori/assets/19891967/a76aac46-aea6-4eea-b0d7-1ffb3cde556a)

그룹설정
![image](https://github.com/hs-jung/fiori/assets/19891967/bbab6a6b-f9e2-404d-8d28-aa8a77bab2b3)
![image](https://github.com/hs-jung/fiori/assets/19891967/e9b1d36e-e2c5-4740-9107-3a4345cae50a)
![image](https://github.com/hs-jung/fiori/assets/19891967/dafce72b-54d7-413b-a447-cf34202150ed)
![image](https://github.com/hs-jung/fiori/assets/19891967/452bf5ab-7c5d-4070-a22f-a0acb006dd86)

/n/PFCG : 롤 추가/관리
![image](https://github.com/hs-jung/fiori/assets/19891967/ea9e9971-b0f4-4f0c-9864-7ce20ad0569a)
![image](https://github.com/hs-jung/fiori/assets/19891967/be3c1d37-a37b-4489-a67a-b9ef6bfac055)
![image](https://github.com/hs-jung/fiori/assets/19891967/40be9fd8-6172-43bd-9baf-527ae1057128)
![image](https://github.com/hs-jung/fiori/assets/19891967/afd8a4a5-8ffa-485d-ad16-a55a57557f4b)
![image](https://github.com/hs-jung/fiori/assets/19891967/7dbdc50c-77c5-46f5-9769-c322703376a2)



