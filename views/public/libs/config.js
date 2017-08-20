require.config({
    baseUrl: '/views/public',
    paths: {
        'jquery': 'assets/jquery/jquery',
        'cookie': 'assets/jquery-cookie/jquery.cookie',
        'bootstrap': 'assets/bootstrap/js/bootstrap.min',
        'template': 'assets/artTemplate/template',
        'nprogress': 'assets/nprogress/nprogress',
        'uploadify': 'assets/uploadify/jquery.uploadify',
        'datepicker': 'assets/bootstrap-datepicker/js/bootstrap-datepicker',
        'datepickerzh': 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        'region': 'assets/jquery-region/jquery.region',
        'form': 'assets/jquery-form/jquery.form',
        'utils': 'libs/utils',
        'ckeditor': 'assets/ckeditor/ckeditor',
        'common': 'js/dashboard/common',
        'login': 'js/dashboard/login'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        uploadify: {
            deps: ['jquery']
        },
        datepickerzh: {
            deps: ['jquery']
        },
        ckeditor: {
            exports: 'CKEDITOR'
        }
    }
});
require(['common']);