webpackJsonp([10],{BDuy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={components:{},props:{},data:function(){return{tagActiveName:"first",adminClassData:[{id:1,class:"高一1班",allSubject:"物化政",goSubject:"/",classNumber:"30",ratio:"15/15",score:292},{id:2,class:"高一2班",allSubject:"生政史",goSubject:"/",classNumber:"29",ratio:"14/15",score:292},{id:3,class:"高一3班",allSubject:"物化史",goSubject:"/",classNumber:"32",ratio:"16/16",score:292},{id:4,class:"高一4班",allSubject:"化生政",goSubject:"/",classNumber:"35",ratio:"20/15",score:292},{id:5,class:"高一5班",allSubject:"物化X",goSubject:"/",classNumber:"30",ratio:"15/15",score:292},{id:6,class:"高一6班",allSubject:"物化X",goSubject:"/",classNumber:"30",ratio:"15/15",score:292},{id:7,class:"高一7班",allSubject:"物化X",goSubject:"物理、化学、政治",classNumber:"30",ratio:"15/15",score:292},{id:8,class:"高一8班",allSubject:"物化X",goSubject:"生物、化学",classNumber:"30",ratio:"15/15",score:292}]}},watch:{},computed:{},methods:{handleClick:function(e,t){console.log(e,t)},goClass:function(e){this.$router.push({path:"@/components/Class",name:"class",query:{row:e,tagActiveName:this.tagActiveName}})}},created:function(){},mounted:function(){this.$route.params.active&&(this.tagActiveName=this.$route.params.active)}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-main"},[a("div",{staticClass:"tabs"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tagActiveName,callback:function(t){e.tagActiveName=t},expression:"tagActiveName"}},[a("el-tab-pane",{attrs:{label:"高一",name:"first"}},[a("el-table",{staticClass:"ac-table",attrs:{data:e.adminClassData,border:"","header-cell-style":{background:"#eef1f6",color:"#606266"},stripe:""}},[a("el-table-column",{attrs:{fixed:"",prop:"class",label:"班级名称",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"allSubject",label:"组合科目",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goSubject",label:"走班科目",width:"200",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"classNumber",label:"班级人数",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ratio",label:"男女比例",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"成绩",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.goClass(t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"高二",name:"second"}},[a("el-table",{staticClass:"ac-table",attrs:{data:e.adminClassData,border:"","header-cell-style":{background:"#eef1f6",color:"#606266"},stripe:""}},[a("el-table-column",{attrs:{fixed:"",prop:"class",label:"班级名称",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"allSubject",label:"组合科目",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goSubject",label:"走班科目",width:"200",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"classNumber",label:"班级人数",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ratio",label:"男女比例",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"成绩",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.goClass(t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"高三",name:"third"}},[a("el-table",{staticClass:"ac-table",attrs:{data:e.adminClassData,border:"","header-cell-style":{background:"#eef1f6",color:"#606266"},stripe:""}},[a("el-table-column",{attrs:{fixed:"",prop:"class",label:"班级名称",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"allSubject",label:"组合科目",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goSubject",label:"走班科目",width:"200",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"classNumber",label:"班级人数",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ratio",label:"男女比例",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"成绩",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.goClass(t.row)}}},[e._v("查看")])]}}])})],1)],1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(l,c,!1,function(e){a("SeX7")},"data-v-b2f426c0",null);t.default=r.exports},SeX7:function(e,t){}});
//# sourceMappingURL=10.eb7929b49270cb0c3993.js.map