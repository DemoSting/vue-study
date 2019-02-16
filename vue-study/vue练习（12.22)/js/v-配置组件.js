new Vue({
    el:'#app',
    components:{
        like:{
            template:'#v-like-tmp',
            methods:{
                clickLiked:function () {

                    // if(this.isClicked)
                    //     this.num++;
                    // else
                    //     this.num--;
                    // this.isClicked = !this.isClicked;

                    // 控制加减
                    if(this.isClicked){
                        this.num ++;
                    }else{
                        this.num --;
                    }
                    this.isClicked = !this.isClicked;
                }
            },

            data:function () {
                return {
                    num:10,
                    isClicked:true
                }
            },

        }
    }
});
