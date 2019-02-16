
var app = new Vue({
   el:'.span',
   methods:{
       'onclick':function () {
           console.log("click");
       },
       'onmouseenter':function () {
           console.log("enter");
       },
       'onmouseout':function () {
           console.log("out");
       },
       'submit':function () {
           console.log('submit')
       },
       'onEnter':function (e) {
           console.log("enter")
       }
   }
});