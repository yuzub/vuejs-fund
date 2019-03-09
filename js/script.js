new Vue ({
    el: '#app',
    data: {
        state: true,
        inputName: '',
        names: [],
        showError: false,
        result: ''
    },
    methods: {
        addNameToList() {
            // console.log(this.names);
            if (this.validate(this.inputName)) {
                this.names.push(this.inputName);
                this.inputName = '';
                this.showError = false;
                console.log('its valid');
            } else {
                this.showError = true;
                console.log('its not valid');
            }
        },
        validate(value) {
            if (value !== '') {
                return true;
            } else {
                return false;
            }
        },
        showResults() {
            const rn = Math.floor(Math.random() * this.names.length);
            console.log(rn);
            const rand = this.names[rn];
            this.result = rand;
            this.state = false;

        },
        resetApp() {
            this.state = true;
            this.names = [];
            this.result = '';
        },
        removeName(ind) {
            this.names.splice(ind, 1);
        }
    }
});