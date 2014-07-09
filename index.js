/**
 * social-browser
 * https://github.com/alexnj/social-browser
 *
 * Copyright (c) 2014 Alex N. Jose
 * Licensed under the MIT license.
 */

/**
 * Return true if req is using Facebook native app WebView for browsing.
 *
 * @param  {String} html
 * @return {String}
 */

var agents = [
    {
        test: function(req) {
            var pattern = new RegExp(/FBAN\/FBIOS/);
            return pattern.test(req.headers["user-agent"]);
        },
        browser: {
            "name": "Facebook for iOS",
            "major": "facebook",
            "platform": "ios"
        }
    },
    {
        test: function(req) {
            var pattern = new RegExp(/Twitter for iPhone/);
            return pattern.test(req.headers["user-agent"]);
        },
        browser: {
            "name": "Twitter for iPhone",
            "major": "twitter",
            "platform": "ios"
        }
    },
    {
        test: function(req) {
            var pattern = new RegExp(/Macintosh.*Chrome/)
            return pattern.test(req.headers["user-agent"]);
        },
        browser: {
            "name": "Chrome for Macintosh",
            "major": "chrome",
            "platform": "osx"
        }
    }    
];


module.exports = {
    detect: function(req) {
        var i;
        for (i=0; i<agents.length; i++) {
            var routine = agents[i];
            if (agents[i].test(req) ) {
                return agents[i].browser;
            }
        }
        return false;
    }
};