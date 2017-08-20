define(['jquery', 'utils', 'template', 'uploadify'], function($, utils, template, uploadify) {
    var cs_id = utils.queryString().cs_id;
    $.ajax({
        url: '/api/course/picture',
        type: 'get',
        data: { cs_id: cs_id },
        success: function(info) {
            var htmlStr = template('tpl_add_step2', info.result);
            $('.steps').html(htmlStr);
            // 选择照片：
            $('#btnSelect').uploadify({
                'swf': '/views/public/assets/uploadify/uploadify.swf',
                'uploader': '/api/uploader/cover',
                'fileObjName': 'cs_cover_original',
                'formData': { cs_id: cs_id },
                'buttonText': '选择图片',
                'buttonClass': 'btn btn-success btn-sm',
                'width': 85,
                'height': 'auto',
                'onUploadSuccess': function(file, data, response) {
                    $('.preview img').attr('src', JSON.parse(data).result.path);
                    $('#btnJcrop').prop('disabled', false);
                }
            })
        }
    })

})