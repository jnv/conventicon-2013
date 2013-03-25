(function() {
    'use strict';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var end = new Date('1 Apr 2013 00:01:00');
    var target = document.getElementById('countdown');
    var timer;

    function showRemaining() {
        var now = new Date();
        var diff = end - now;
        if (diff < 0) {
            // handle expiry here..
            clearInterval(timer); // stop the timer from continuing ..

            return; // break out of the function so that we do not update the counters with negative values..
        }
        target.innerHTML = diff + getRandomInt(0, 50);
    }

    timer = setInterval(showRemaining, 100);

}());
