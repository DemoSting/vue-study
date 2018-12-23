Vue.filter('food_price',function (price,type) {
    price = price || 0;
    type = type || '元';
    return price + type;
});

new Vue({
    el:'#app',
    data:{
        price:''
    }
});