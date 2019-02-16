// 定义全局组件

// Vue.component('alert',{
//     template:'<button @click="on_click">弹弹弹</button>',
//     methods:{
//         on_click:function () {
//             alert("haha");
//         }
//     }
// });

// 定义局部组件
var alert_conponent = {
    template:'<button @click="on_click">弹弹弹</button>',
    methods:{
        on_click:function () {
            alert("haha");
        }
    }
};

new Vue({
    el:'.app',
    components:{
        alert:alert_conponent
    }
});

// 定义局部组件xixi
var haha = {
    template:'<button @click="on_click">haha</button>',
    methods:{
        on_click:function () {
            alert('xixi');
        }
    }
};

new Vue({
    el:'.app2',
    components:{
        xixi:haha
    }
});

// 定义全局组件yo
Vue.component('yo',{
    template:'<button @click="on_click">yo</button>',
    methods:{
        on_click:function () {
            alert('yo')
        }
    }
});

new Vue({
    el:'.yo'
});
