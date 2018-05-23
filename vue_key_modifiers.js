var vm = new Vue({
    el: "#keymodifiers",
    data: {
        name: "",
        styleobj: {
            width: "30%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
        }
    },
    methods: {
        showinputvalue: function (event) {
            this.name = event.target.value
        }
    }
});