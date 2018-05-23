// Golbal component 
Vue.component('testcomponent', {
    template: '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h6>Custom Component created by <span id = "name">{{name}}</span></h6></div>',
    data: function () {
        return {
            name: "Ria"
        }
    },
    methods: {
        changename: function () {
            this.name = "Ben";
        },
        originalname: function () {
            this.name = "Ria";
        }
    }
});
var vm = new Vue({
    el: '#component_test'
});

//local component only for the resp vue instance
var vm1 = new Vue({
    el: '#component_test1'
    // ,
    // components: {
    //     'testcomponent': {
    //         template: '<div><h6>This is coming from component</h6></div>'
    //     }
    // }
});

var vm2 = new Vue({
    el: "#databinding",
    data: {
        view: 'component1'
    },
    components: {
        'component1': {
            template: '<div><span style = "font-size:25;color:red;">Dynamic Component</span></div>'
        }
    }
});