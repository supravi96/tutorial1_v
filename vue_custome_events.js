Vue.component('buttoncounter', {
    template: '<button v-on:click = "displayLanguage(item)"><span style = "font-size:25px;">{{ item }}</span></button>',
    data: function () {
        return {
            counter: 0
        }
    },
    props: ['item'],
    methods: {
        displayLanguage: function (lng) {
            console.log(lng);
            this.$emit('showlanguage', lng);
        }
    }
});

var vm = new Vue({
    el: "#custom_events",
    data: {
        languageclicked: "",
        languages: ["Java", "PHP", "C++", "C", "Javascript", "C#", "Python", "HTML"]
    },
    methods: {
        languagedisp: function (a) {
            this.languageclicked = a;
        }
    }
});