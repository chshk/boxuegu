define(['jquery', 'template', 'region', 'uploadify', 'datepicker', 'datepickerzh', 'ckeditor'], function($, template, region, uploadify, datepicker, datepickerzh, CKEDITOR) {
    $.ajax({
        url: '/api/teacher/profile',
        type: 'get',
        success: function(info) {
            if (info.code == 200) {
                var htmlStr = template('profile_tpl', info.result);
                $(".settings").html(htmlStr);

                // 省市区三级联动;
                $('#region').region({
                    url: '/views/public/assets/jquery-region/region.json'
                });
                // 照片上传：
                $('#upfile').uploadify({
                    'swf': '/views/public/assets/uploadify/uploadify.swf',
                    'uploader': '/api/uploader/avatar', //提交的接口
                    'width': 120,
                    'height': 120,
                    'buttonText': '',
                    'fileObjName': 'tc_avatar', //上传到服务器的文件名，也就是当前的input标签的name属性值
                    'onUploadSuccess': function(file, data, response) {
                        // var obj = JSON.parse(data);
                        // // obj.result.path
                        //  // 图片上传成功之后，服务器会返回一个图片在服务器的地址
                        // $('.preview img').attr('src',obj.result.path);
                        $('.preview img').attr('src', JSON.parse(data).result.path);
                    }
                });

                // 日期插件：
                $('input[name=tc_join_date],input[name=tc_birthday]').datepicker({
                        format: 'yyyy/mm/dd',
                        language: 'zh-CN'
                    })
                    // 富文本：
                CKEDITOR.replace('introduce', {
                    toolbarGroups: [
                        { name: 'clipboard', groups: ['clipboard', 'undo'] },
                        { name: 'links' },
                        { name: 'document', groups: ['mode', 'document', 'doctools'] },
                        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] }
                    ]
                })
            }
        }
    })


})