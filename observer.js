function Obs() {
    this.addSubscriber = function (event, callback) {

        var len = this.subscribers.length;
        var subscriberFound = false;
        for (var i = 0; i < len; i++) {
            if (this.subscribers[i].cb == callback && this.subscribers[i].evt == event) {
                subscriberFound = true;
                break;
            }
        }

        if (callback == undefined || callback == null || !$.isFunction(callback) || event == undefined || event == null) {
            console.log('Unable to add subscriber: event="' + event + '", callback="' + callback + '"');
        }
        if (!subscriberFound) this.subscribers.push({evt: event, cb: callback});

        this.notify = function (event) {
            var i = 0,
                len = this.subscribers.length;
            for (; i < len; i++) {
                if (this.subscribers[i].evt == event)
                    this.subscribers[i].cb();
            }
        };

        this.notifyAll = function () {
            console.log(this.subscribers);
            var i = 0,
                len = this.subscribers.length;
            for (; i < len; i++) {
                this.subscribers[i].cb();
            }
        }
    }
}