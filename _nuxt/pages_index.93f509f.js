(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(t,e,n){"use strict";n.r(e);n(104),n(29),n(60),n(61),n(28),n(13),n(163);var r={props:{title:{type:String,required:!0},icon_uri:{type:String}}},c=n(25),l=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title has-text-grey"},[this._v("\n      "+this._s(this.title)+"\n    ")])]),this._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content has-text-centered"},[e("img",{style:{width:100},attrs:{src:this.icon_uri}})])]),this._v(" "),e("footer",{staticClass:"card-footer"},[e("div",{staticClass:"card-footer-item"},[this._t("default")],2)])])}),[],!1,null,null,null).exports,o=n(165),d=n.n(o),h={name:"HomePage",components:{Card:l},data:function(){return{search:"",villagers:{}}},mounted:function(){var t=this;d.a.get("https://raw.githubusercontent.com/alexislours/ACNHAPI/master/villagers.json").then((function(e){t.villagers=e.data}))},computed:{filteredList:function(){var t=this;return Object.values(this.villagers).filter((function(e){return e.name["name-USen"].toLowerCase().includes(t.search.toLowerCase())||e.personality.toLowerCase().includes(t.search.toLowerCase())}))}}},v=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("b-field",[n("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"magnify","icon-clickable":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("div",{staticClass:"columns is-multiline is-mobile"},t._l(t.filteredList,(function(e){return n("div",{key:e.id,staticClass:"column"},[n("card",{attrs:{title:e.name["name-USen"],icon_uri:e.icon_uri}},[n("div",{staticClass:"w-100"},[n("p",[n("strong",[t._v("Gender: ")]),n("span",[t._v(t._s(e.gender))])]),t._v(" "),n("p",[n("strong",[t._v("Personality: ")]),n("span",[t._v(t._s(e.personality))])]),t._v(" "),n("p",[n("strong",[t._v("Birthday: ")]),n("span",[t._v(t._s(e.birthday))])])])])],1)})),0)],1)}),[],!1,null,null,null);e.default=v.exports}}]);