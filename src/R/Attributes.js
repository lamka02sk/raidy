class Attributes {

    constructor(parent) {
        this.parent = parent;
        this.classList();
        this.attributes();
        this.dataset();
        this.properties();
    }

    classList() {

        let parent = this.parent;

        // Add class
        parent.addClass = (...classes) => {
            r.loop(parent.object, element => r.loop(classes, c => element.classList.add(c)));
            return parent;
        };

        // Remove class
        parent.removeClass = (...classes) => {
            if(classes === undefined || classes === []) {
                r.loop(parent.object, element => element.classList = []);
                return parent;
            }

            r.loop(parent.object, element => r.loop(classes, c => element.classList.remove(c)));
            return parent;
        };

        // Has class
        parent.hasClass = (...classes) => {
            let result = [];
            r.loop(parent.object, (element, index) => {
                result.push([]);
                r.loop(classes, c => result[index].push(element.classList.contains(c)));
            });
            return result;
        };

        // Toggle class
        parent.toggleClass = (...classes) => {
            r.loop(parent.object, element => r.loop(classes, c => element.classList.toggle(c)));
            return parent;
        };

        // Get class list
        parent.classList = () => {
            let result = [];
            r.loop(parent.object, element => result.push(element.classList));
            return result;
        };

    }

    attributes() {

        let parent = this.parent;

        // Set / Get attribute
        parent.attr = (name, value = undefined) => {
            if(value === undefined) {
                let result = [];
                r.loop(parent.object, element => result.push(element.getAttribute(name)));
                return result;
            }

            r.loop(parent.object, element => element.setAttribute(name, value));
            return parent;
        };

        // Set attributes
        parent.setAttr = (...attributes) => {
            r.loop(attributes, attribute => {
                if(r.arrayLen(attribute !== 2)) return false;
                r.loop(parent.object, element => element.setAttribute(attribute[0], attribute[1]));
            });
            return this;
        };

        // Remove attributes
        parent.removeAttr = (...attributes) => {
            r.loop(attributes, attribute => r.loop(parent.object, element => element.removeAttribute(attribute)));
            return this;
        };

    }

    dataset() {

        let parent = this.parent;

        // Set / Get data attribute
        parent.data = (name, value = undefined) => parent.attr('data' + name, value);

        // Set data attributes
        parent.setData = (...attributes) => {
            r.loop(attributes, attribute => {
                if(r.arrayLen(attribute !== 2)) return false;
                r.loop(parent.object, element => element.setAttribute('data-' + attribute[0], attribute[1]));
            });
            return this;
        };

        // Remove data attributes
        parent.removeData = (...attributes) => {
            r.loop(attributes, attribute => r.loop(parent.object, element => element.removeAttribute('data-' + attribute)));
            return this;
        };

    }

    properties() {

        let parent = this.parent;

        // Set / Get property
        parent.prop = (name, value = undefined) => {
            if(value === undefined) {
                let result = [];
                r.loop(parent.object, element => {
                    if(name in element) result.push(element[name]);
                    else result.push(undefined);
                });
                return result;
            }

            r.loop(parent.object, element => element[name] = value);
            return parent;
        };

        // Set properties
        parent.setProp = (...properties) => {
            r.loop(properties, property => {
                if(r.arrayLen(property !== 2)) return false;
                r.loop(parent.object, element => element[property[0]] = property[1]);
            });
            return this;
        };

        // Remove properties
        parent.removeProp = (...properties) => {
            r.loop(properties, property => r.loop(parent.object, element => delete element[property]));
            return this;
        };

    }

}