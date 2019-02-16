var Event = new Vue();

Vue.component('wanghuahua',{
    template:'<div>我说：<input type="text" @keyup="input_some()" v-model="woshuo">{{woshuo}}</div>',
    methods:{
        input_some:function(){
            Event.$emit('wanghuahua-say',this.woshuo);
        }
    },
    data:function () {
        return {
            woshuo:''
        }
    }
});

Vue.component('litaotao',{
    template:'<div >王花花说:{{wanghuahuasaid}}</div>',
    mounted:function () {
        var me = this;

        //监听wanghuahua-say事件
        Event.$on('wanghuahua-say',function (data) {
            me.wanghuahuasaid = data;
        });
    },
    data:function () {
        return {
            wanghuahuasaid:''
        }
    }
});

new Vue({
    el:'#app',
});
