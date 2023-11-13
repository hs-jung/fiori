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
