class Events {

    constructor(parent) {
        this.parent = parent;
        this.main();
        this.browser();
        this.remove();
    }

    main() {

        let parent = this.parent;

        // Register event
        parent.event = (event, callback, ...parameters) => {
            if(event === undefined && callback === undefined) return false;
            let result = [];
            if(callback === undefined) {
                r.loop(parent.object, element => {
                    element.dispatchEvent(new Event(event));
                    result.push(element[event]);
                });
                return result;
            }
            r.loop(parent.object, element => {
                function eventFunction() { callback(...parameters) }
                element.addEventListener(event, eventFunction);
                if(!('listeners' in element)) element.listeners = [];
                element.listeners.push({
                    event: event,
                    callback: eventFunction
                });
                result.push(element[event]);
            });
            return result;
        };

        // Remove event
        parent.removeEvent = event => {
            if(event === undefined) return false;
            r.loop(parent.object, element => {
                r.loop(element.listeners, listener => {
                    if(listener.event !== event) return false;
                    element.removeEventListener(event, listener.callback);
                });
            });
            return parent;
        };

    }

    browser() {

        let parent = this.parent;

        // Resize event
        parent.resize = (callback, ...parameters) => parent.event('resize', callback, ...parameters);

        // Scroll event
        parent.scroll = (callback, ...parameters) => parent.event('scroll', callback, ...parameters);

    }

    remove() {

        let parent = this.parent;

    }

}