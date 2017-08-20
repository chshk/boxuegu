define(function() {
    var obj = {
        queryString: function() {
            var search = location.search;
            search = search.slice(1);
            var searchArr = search.split('&');
            var o = {};
            for (var i = 0; i < searchArr.length; i++) {
                var temp = searchArr[i].split('=');
                o[temp[0]] = temp[1];
            }
            return o;
        }
    }
    return obj;
})