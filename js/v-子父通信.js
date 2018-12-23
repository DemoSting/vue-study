Vue.component('balance',{
    template:
        `
        <div>
            <show @show-balance="show_balance"></show>
            <div v-if="show">
                您的余额是：89亿
            </div>
        </div>
        `,

    methods:{
        show_balance:function (data) {
            this.show = true;
            console.log('data:',data)
        }
    },

    data:function () {
        return {
            show:false
        }
    },

});

// $emit让子组件触发的事件被父组件监听
Vue.component('show',{
    template:'<button @click="on_click()">显示余额</button>',
    methods:{
        on_click(){
            this.$emit('show-balance',{a:1,b:2});
        }
    }
});

new Vue({
    el:'.vue-基础'
});

// ################### 练习 ####################
Vue.component('fu',{
    template:
    // 外面要用div包裹 @show-price：监听事件，如果show_price不加（），则会将{a:1,b:2}参数传入
        `<div>
            <zi @show-price="show_price"></zi>
            <div v-if="show">
                您的余额是：29亿
            </div>
        </div>
        `,

    methods:{
        show_price:function (data) {
            this.show = true;
            console.log("data:",data)
        }
    },

    data:function () {
        return {
            show:false
        }
    },
});

Vue.component('zi',{
    template:'<button @click="on_click()">显示余额</button>',
    methods:{
        on_click:function () {
            // show-price：事件名称
            this.$emit('show-price',{a:1,b:2});
        }
    }
});

new Vue({
    el:'.span'
});