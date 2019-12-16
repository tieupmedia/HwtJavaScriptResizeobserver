/*
 * HWT JavaScript resizeObserver v0.0.1
 *
 * Copyright 2019, Heiko Westermann (hwt)
 * mailto: hwt3@gmx.de
 *
 * Add
 * resizeObserver(function() {
 *  functionName();
 * }); 
 * to your 'DOMContentLoaded' event listener to use the resize observer.
 */

function resizeObserver(resizeCallback, resizeRefreshTime, resizeOffsetX) {
    "use strict";

    resizeCallback = resizeCallback || function () {};
    resizeRefreshTime = resizeRefreshTime || 200;
    resizeOffsetX = resizeOffsetX || 5;

    var resizeDelay, resizeHandler;
    var lastWindowWidth = document.body.clientWidth;
    var newWindowWidth;

    resizeHandler = function () {
        newWindowWidth = document.body.clientWidth;

        if ( (newWindowWidth !== lastWindowWidth) && (Math.abs(newWindowWidth-lastWindowWidth) > resizeOffsetX) )  {
            window.clearTimeout(resizeDelay);
            resizeDelay = window.setTimeout(function () {
                lastWindowWidth = newWindowWidth;
                resizeCallback.call(this);
            }, resizeRefreshTime);
        }
    };

    window.addEventListener('resize', resizeHandler, true);
}