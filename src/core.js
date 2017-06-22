// Main Raidy class
class Raidy {

    constructor(selector) {
        if(!r.isObject(selector)) selector = document.querySelectorAll(selector);
        else selector = [selector];
        this.object = selector;
        this.length = Object.keys(this.object).length;
        this.prepare();
        return this;
    }

    prepare() {
        new Attributes(this);
        new Events(this);
    }

}

// Main Raidy functions
function R(selector) {
    return new Raidy(selector);
}

let r = {};