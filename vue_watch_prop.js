var vm = new Vue({
    el: "#watch_prop",
    data: {
        kilometers: 0,
        meters: 0
    },
    methods: {

    },
    computed: {

    },
    watch: {
        kilometers: function (val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters: function (val) {
            this.meters = val;
            this.kilometers = val / 1000;
        }
    }
});