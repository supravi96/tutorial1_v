// var vm = new Vue({
//     el: "#classbinding",
//     data: {
//         title: "Class Binding",
//         isactive: true,
//         hasError: false
//     }
// });

var vm = new Vue({
    el: "#classbinding",
    data: {
        title: "Class Binding",
        infoclass: 'info',
        errorclass: 'displayError',
        isactive: false,
        hasError: true
    },
    components: {
        'newcomponent': {
            template: '<div class="info">component for class binding</div>'
        }
    }
});