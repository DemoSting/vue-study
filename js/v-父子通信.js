// 父子通信
Vue.component('user',{
    template:'<a href="\'/user/\' + username">@{{username}}</a>',
    props:['username'],
    methods:{}
});

new Vue({
    el:'#vue-基础'
});


Vue.component('adc',{
    template:'<a href="\'/user/\' + adcname">@{{adcname}}</a>',
    props:['adcname'],
    adcname:{}
});

new Vue({
    el:'#adc'
});