(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{315:function(e,t,n){"use strict";n.r(t);n(37);var o={data:function(){return{nameState:null,showAddModal:!1,newItem:{name:"",price:0},fields:[{key:"name",label:"Название",sortable:!0},{key:"price",label:"Цена",sortable:!0}],items:[]}},mounted:function(){var e=this;this.$axios.$get("/products").then((function(t){e.items=t}))},methods:{checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.nameState=e,e},resetModal:function(){this.newItem.name="",this.newItem.price=0,this.nameState=null},handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){var e=this;this.checkFormValidity()&&this.$axios.$post("/products",this.newItem).then(console.log).then((function(){e.$nextTick((function(){e.$bvModal.hide("add-modal")}))}))}}},l=n(82),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Товары")]),e._v(" "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.add-modal",modifiers:{"add-modal":!0}}],staticStyle:{"margin-bottom":"8px"}},[e._v("+")]),e._v(" "),n("b-table",{attrs:{fields:e.fields,items:e.items}}),e._v(" "),n("b-modal",{ref:"modal",attrs:{id:"add-modal",title:"Добавить новый товар"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[n("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[n("b-form-group",{attrs:{label:"Название","label-for":"name-input","invalid-feedback":"Обязательное поле",state:e.nameState}},[n("b-form-input",{attrs:{id:"name-input",state:e.nameState,required:""},model:{value:e.newItem.name,callback:function(t){e.$set(e.newItem,"name",t)},expression:"newItem.name"}})],1),e._v(" "),n("b-form-group",{attrs:{label:"Цена","label-for":"price-input","invalid-feedback":"Обязательное поле",state:e.nameState}},[n("b-form-input",{attrs:{id:"price-input",state:e.nameState,required:""},model:{value:e.newItem.price,callback:function(t){e.$set(e.newItem,"price",t)},expression:"newItem.price"}})],1)],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);