var vm = new Vue({
    el: "#events",
    data: {
        num1: 100,
        num2: 200,
        total: '',
        styleobj: {
            width: "100px",
            height: "100px",
            backgroundColor: "red"
        }
    },
    methods: {
        displaynumbers: function (event) {
            return this.total = this.num1 + this.num2;
        },
        changecolor: function () {
            this.styleobj.backgroundColor = "green";
        },
        originalcolor: function () {
            this.styleobj.backgroundColor = "red";
        }
    }
});

var vm1 = new Vue({
    el: "#eventidentifiers",
    data: {
        num1: 0,
        num2: 0,
        styleobj: {
            backgroundColor: '#2196F3!important',
            cursor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
        },
        styleobj1: {
            color: '#4CAF50',
            marginLeft: '20px',
            fontSize: '30px'
        }
    },
    methods: {
        buttonclickedonce: function () {
            this.num1++;
        },
        buttonclicked: function () {
            this.num2++;
        },
        clickme: function () {
            alert("Anchor tag is clicked");
        }
    }
});
methods