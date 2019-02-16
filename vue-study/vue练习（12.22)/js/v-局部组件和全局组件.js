
// 定义全局属性
Vue.component('alert',{
    template:'<button @click="alert">弹弹弹</button>',
    methods:{
        alert:function (){
            alert("弹弹弹");
        }
    }
});

new Vue({
    el:'#app',
});

new Vue({
    el:'#app2',
    // 定义局部组件
    components:{
        baidu:{
            template:'<div><button @click = "click">哈哈</button></div>',
            methods:{
                click:function () {
                    alert("haha");
                }
            }
        }
    },
});

