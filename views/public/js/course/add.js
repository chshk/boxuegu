define(["jquery", 'form'], function($, form) {
    $('#btnCreate').on('click', function() {
        alert(999);
        $('form').ajaxSubmit({
            url: '/api/course/create',
            type: 'post',
            success: function(info) {
                if (info.code == 200) {
                    alert('提交成功');
                    location.href = '/views/course/basic?cs_id=' + info.result.cs_id;
                }
            }
        })
        return false;
    })

})