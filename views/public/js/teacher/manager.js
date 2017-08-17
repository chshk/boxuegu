define(['jquery', 'template'], function($, tempplate) {
    var search = location.search;
    search = search.slice(1);
    var searchArr = search.split('&');
    var o = {};
    for (var i = 0; i < searchArr.length; i++) {
        var temp = searchArr[i].split('=');
        o[temp[0]] = temp[1];
    }
    $.ajax({
        url: '/api/teacher/edit',
        type: 'get',
        data: { tc_id: o.tc_id },
        success: function(res) {
            if (res.code == 200) {
                res.result.title = '讲师编辑';
                res.result.saveBtnText = '保存'
                var htmlStr = template('tc_edit_tpl', res.result);
                $('.teacher').html(htmlStr);
            }
        }
    })
})