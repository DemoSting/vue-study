new Vue({
    el:'#app',
    data:{
        math:80,
        yuwen:90,
        en:30
    },
    computed:{
        // 计算总分
        sum:function () {
            return this.math + this.yuwen + this.en;
        },
        // 计算平均分
        avg:function () {
            return Math.round(this.sum / 3);
        }
    }
});