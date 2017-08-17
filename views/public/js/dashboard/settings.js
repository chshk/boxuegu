define(['jquery', 'template', 'region'], function($, template, region) {
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
                // 
            }
        }
    })


})