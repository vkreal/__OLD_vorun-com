// CODE TO TEST SHARE PERSISTENT
(function () {

    var FB_appID = 162081927218617;
    var ROOT_URL = 'https://vorun.azurewebsites.net/a/';

    PubSub.subscribe('/share/level/', window, function (args) {
        var callback = args['callback'];
        var levelJson = args['levelJson'];
        var sharedId = args['sharedId'];

        // web share to facebook
        var obj = {
            redirect_uri: ROOT_URL,
            app_id: FB_appID,
            //method: 'feed',
            link: ROOT_URL + "?sharedId=" + sharedId,
            name: 'Monkey Sling',
            display: 'touch',
            //caption: 'I just tried this level in Monkey Sling.',
            description: 'Can you solve it? Click on the link to open Monkey Sling and get the banana!'
        };

        var feed = 'https://www.facebook.com/dialog/feed?';
        var sb = [];
        for (var key in obj) {
            sb.push(key);
            sb.push('=');
            sb.push(encodeURIComponent(obj[key]));
            sb.push('&');
        }
        window.open(feed + sb.join(''));

        //https://www.facebook.com/dialog/feed?app_id=162081927218617&redirect_uri=https://vorun.azurewebsites.net/a/&display=touch&description=description&link=https%3A%2F%2Fvorun.azurewebsites.net%2Fa%2F%3FsharedId%3D37&name=Monkey%20Sling


        //function callback(response) {
        //    //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        //}

        //FB.ui(obj, callback);

        //var serv = new SharedLevelService();
        //serv.addOrUpdateSharedLevel(sharedId, JSON.stringify(levelJson), function (response, sender) {
        //    callback(response.result);
        //});
    });

    PubSub.subscribe('/share/get/', window, function (args) {
        var callback = args['callback'];
        var sharedId = args['sharedId'];

        if (typeof SHARED_LEVEL_DEF !== 'undefined') {
            callback(SHARED_LEVEL_DEF, null);
        }

        //var serv = new SharedLevelService();
        //serv.getSharedLevel(sharedId, function (response, sender) {
        //    callback(JSON.parse(response.result), response);
        //});
    });
    
    document.addEventListener("DOMContentLoaded", function () {

        var div = document.createElement('div');
        div.id = 'fb-root';
        document.body.appendChild(div);

        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "//connect.facebook.net/en_US/all.js";
        document.getElementsByTagName('head')[0].appendChild(s);

        s.onload = function (e) {
            if (this.readyState == "complete") {
                FB.init({ appId: FB_appID, status: true, cookie: true });
            }
        };
    }, false);

})();