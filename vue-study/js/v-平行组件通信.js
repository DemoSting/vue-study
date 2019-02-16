var Event = new Vue();

Vue.component('wanghuahua',{
    template:
        `
            <div>
                王花花说：<input @keyup="on_change" type="text" v-model="i_said">{{i_said}}
            </div>
        `,
    data:function () {
        return {
            i_said:''
        };
    },
    methods:{
        on_change:function () {
            //注意这里是调度器
            Event.$emit('wanghuahua-said',this.i_said);
        }
    }

});

Vue.component('shuandan',{
    template:
        `
            <div>
                花花说了：{{huahuasaid}}
            </div>
        `,

    mounted:function () {
        //调度器Event触发之后就会，this指向的是Event，所以这里要先缓存下来this。
        var me = this;
        console.log(me);
        Event.$on('wanghuahua-said',function (data) {
            me.huahuasaid = data;
        })
    },
    data:function () {
        return {
            huahuasaid:''
        }
    },

});

new Vue({
    el:'.vue-基础'
});


// #######################练习#############################
// 怎么理解这个Event?
var Event1 = new Vue();

Vue.component('jiazai',{
    template:'<div>a:<input @keyup="on_input" v-model="a_data" type="text">{{a_data}}</div>',
    data:function () {
        return {
            a_data:''
        }
    },
    methods:{
        on_input:function () {
            Event1.$emit('component-a-said',this.a_data)
        }
    }
});

Vue.component('jiesou',{
    template:'<div>b:{{a_said}}</div>',
    data:function () {
        return {
            a_said:''
        }
    },
    mounted:function () {
        var me = this;
        console.log("haha");
        Event1.$on('component-a-said',function (data) {
            me.a_said = data;
        })
    }
});

new Vue({
    el:'.vue2'
});




















