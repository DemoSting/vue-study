// 计算属性
var app = new Vue({
    el:'.app',
    data:{
        'yuwen':80,
        'shuxue':80,
        'en':80
    },
    computed:{
        'all':function () {
            return parseFloat(this.yuwen) + parseFloat(this.shuxue) + parseFloat(this.en);
        },
        'avg':function () {
            return Math.round(this.all/3);
        }
    }
});