Vue.component('balance',{
    template:
        `<div>
            <show @show_balance="show_balance"></show>
            <div v-if="is_show">
                您的余额为：90
            </div>
        </div>`,
    methods:{
        show_balance:function () {
            this.is_show = true;
        }
    },
    data:function () {
        return {
            is_show:false
        }
    }
});

Vue.component('show',{
    template:'<button @click="on_click">显示余额</button>',
    methods:{
        on_click:function () {
            this.$emit('show_balance',{a:1,b:2});
        }
    }
});

new Vue({
    el:'#app',
});

// #################练习#####################

Vue.component('balance2',{
    template:'<div><show2 @show_balance="show_balance"></show2><div v-if="is_show">您的余额是:90亿</div></div>',
    methods:{
        show_balance:function () {
            this.is_show = true;
        }
    },
    data:function () {
        return {
            is_show:false
        }
    }
});

Vue.component('show2',{
    template:'<button @click="on_click()">显示余额</button>',
    methods:{
        on_click:function () {
            this.$emit('show_balance',{a:1,b:2});
        }
    }
});

new Vue({
    el:'#app2'
});