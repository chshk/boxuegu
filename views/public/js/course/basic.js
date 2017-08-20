define(['jquery', 'template', 'utils', 'form', 'CKEDITOR'], function($, template, utils, form, CKEDITOR) {
    var cs_id = utils.queryString().cs_id;
    $.ajax({
            url: '/api/course/basic',
            type: 'get',
            data: { cs_id: cs_id },
            success: function(info) {
                if (info.code == 200) {
                    var htmlStr = template('tpl_tc_basic', info.result);
                    $('.steps').html(htmlStr);
                }
            }
        })
        //保存按钮：
    $('.steps').on('click', '.btnSave', function() {
        $('form').ajaxSubmit({
            url: '/api/course/update/basic',
            type: 'post',
            success: function(info) {
                if (info.code == 200) {
                    alert('保存成功。。。');
                    location.href = '/views/course/add_step2?cs_id=' + info.result.cs_id;
                }
            }
        })
        return false;
    })
})