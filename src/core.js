// Main Raidy class
class Raidy {

    constructor(selector) {
        this.object = document.querySelectorAll(selector);
        this.length = Object.keys(this.object).length;
        this.prepare();
        return this;
    }

    prepare() {
        new Attributes(this);
    }

}

// Main Raidy functions
function R(selector) {
    return new Raidy(selector);
}

let r = {};