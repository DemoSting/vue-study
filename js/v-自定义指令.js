Vue.directive('pin',function (el,binding) {
    var bind = binding.value;
    var position = binding.modifiers;

    if(bind){
        el.style.position = 'fixed';
        for(var key in position){
            if(position[key]){
                el.style[key] = "20px";
            }
        }
    }else{
        el.style.position='static';
    }
});

new Vue({
    el:'#app',
    data:{
        card1:{
            binded:false
        },
        card2:{
            binded:false
        }
    }
});