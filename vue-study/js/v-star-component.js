Vue.component('star',{
    // v-find绑定类，通过clicked确定是否绑定
    template:'#star-component-tmp',
    data:function(){
        return {
            star:10,
            clicked:false
        }
    },
    methods:{
        toggle_star:function () {
            // 是否点击，第一次点击star加一，否则减一
            if(!this.clicked){
                this.star++;
                this.clicked = !this.clicked;
            }else{
                this.star--;
                this.clicked = !this.clicked;
            }
        }
    }
});

new Vue({
    el:'.app'
});

// 拉黑hate组件
Vue.component('hate',{
    template:'#hate-component-tmp',
    data:function () {
        return {
            hate:10,
            clicked:false
        }
    },
    methods:{
        toggle_hate:function () {
            if(!this.clicked){
                this.hate++;
                this.clicked = !this.clicked;
            }else{
                this.hate--;
                this.clicked = !this.clicked;
            }
        }
    }
});

new Vue({
    el:'.vue-基础'
});
