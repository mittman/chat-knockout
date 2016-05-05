// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/* global ko: true */

var main = function () {
    "use strict";

    function Chat(data) {
       var self = this;
       self.comment = ko.observable(data);
    }

    function ChatViewModel() {
        var self = this;
        self.feedback = ko.observableArray([]);
        self.msg = ko.observable();

        self.addComment = function() {
            self.feedback.push(new Chat(self.msg()));
            self.msg("");
        };
    }

    ko.applyBindings(new ChatViewModel());
};

$(document).ready(main);
