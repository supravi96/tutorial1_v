var vm = new Vue({
    el: "#get_set_computed",
    data: {
        firstname: "Terry",
        lastname: "Ben"
    },
    methods: {

    },
    computed: {
        fullname: {
            get: function () {
                return this.firstname + " " + this.lastname;
            },
            set: function (name) {
                var fname = name.split(" ");
                this.firstname = fname[0];
                this.lastname = fname[1];
            }
        }
    }
});