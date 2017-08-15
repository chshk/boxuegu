define(['jquery', 'template', "bootstrap"], function($, template) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function(data) {
            if (data.code == 200) {
                // 用模板来渲染数据
                var htmlStr = template('tc_list_tpl', data);
                $("#tc_list_tBody").html(htmlStr);
            }
        }
    })

    $("#tc_list_tBody").on('click', 'a.check-info', function() {
        var id = $(this).parent().data('id');
        $.ajax({
            url: '/api/teacher/view',
            type: 'get',
            data: {
                tc_id: id,
            },
            success: function(res) {
                if (res.code == 200) {

                    var htmlStr = template("tc_info_tpl", res.result);
                    $("#teacherModal tbody").html(htmlStr);
                    $("#teacherModal").modal();
                }
            }
        })
    })
})