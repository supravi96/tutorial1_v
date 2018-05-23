// var vm = new Vue({
//     el: '#intro',
//     data: {
//         firstName: "Bob",
//         lastName: "Smith",
//         getFullName: function () {
//             return "Hello " + this.firstName + " " + this.lastName
//         }
//     }
// });

var _obj = {
    fname: "Raj",
    lname: "Singh"
};

// direct instance creation
var vm = new Vue({
    data: _obj
});
// console.log(vm.fname);
// console.log(vm.$data);
// console.log(vm.$data.fname);

// must use function when in Vue.extend()
var Component = Vue.extend({
    data: function () {
        return _obj
    }
});
var myComponentInstance = new Component();
// console.log(myComponentInstance.lname);
// console.log(myComponentInstance.$data);

var vm = new Vue({
    data: {
        a: 2
    },
    computed: {
        aSum: function () {
            return this.a + 2; //6 + 2 = 4
        },
        aSquare: {                   
            get: function () { 
                return this.a * this.a; //2 * 2 =4
            },
            set: function (v) {        // v= 3 3*2 =6
                this.a = v * 2;
            }
        }
    }
});

console.log(vm.aSquare);
vm.aSquare = 3;
console.log(vm.a);
console.log(vm.aSum);