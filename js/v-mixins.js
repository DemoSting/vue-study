//mixins练习
var props = {
    data:function () {
        return {
            visible:false
        }
    },
    methods:{
        toggle:function () {
            this.visible = !this.visible;
        },
        show:function () {
            this.visible = true;
        },
        hide:function () {
            this.visible = false;
        }
    }
};

Vue.component('mixins',{
    template:'#mixins-tmp',
    mixins:[props]
});

Vue.component('mixins2',{
    template:'#mixins-tmp2',
    mixins:[props]
});

new Vue({
   el:'#mix'
});