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
        // 教师列表查看功能：
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
        // 教师列表注销与启用功能：
    $("#tc_list_tBody").on("click", "a.btn-handle", function() {
        var _this = $(this);
        $.ajax({
            url: '/api/teacher/handle',
            type: 'post',
            data: {
                tc_id: $(this).parent().attr('data-id'),
                tc_status: $(this).attr('data-status')
            },
            success: function(res) {
                if (res.code == 200) {
                    if (res.result.tc_status == 1) {
                        _this.text('启 用')
                    } else {
                        _this.text('注 销')
                    }
                    _this.attr('data-status', res.result.tc_status);
                }
            }
        })
    })
})