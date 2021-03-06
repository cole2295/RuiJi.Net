﻿requirejs.config({
    urlArgs: 'ver=1.0.0.0',
    baseUrl : "/misc",
    paths: {
        jquery: '/scripts/jquery-3.1.1.min',
        template: '/scripts/template-web',
        bootstrap: '/scripts/bootstrap-3.3.5/dist/js/bootstrap',
        bootstrapTable: '/scripts/bootstrap-table/bootstrap-table.min',
        bootstrapDialog: '/scripts/bootstrap3-dialog/js/bootstrap-dialog',
        'tabs': '/scripts/require-tabs/require.tabs',
        'tree': '/scripts/jstree/jstree.min',
        'sweetAlert': '/scripts/sweetalert/sweetalert.min',
    },
    map: {
        '*': {
            'css': '/scripts/css.min.js'
        }
    },
    shim: {
        'bootstrapTable': {
            exports: 'bootstrapTable',
            deps: ['bootstrap', 'css!/scripts/bootstrap-table/bootstrap-table.min.css']
        },
        'bootstrapDialog': {
            deps: ['bootstrap', 'css!/scripts/bootstrap3-dialog/css/bootstrap-dialog.min.css']
        },
        'tabs': {
            deps: ['css!/scripts/require-tabs/tabs.css', 'css!/fonts/font-awesome.min.css']
        },
        'tree': {
            deps: ['css!/scripts/jstree/themes/default/style.min.css','jquery']
        },
        'sweetAlert': {
            deps: ['css!/scripts/sweetalert/sweetalert.css']
        }
    }
});

require(['proto']);
require(['entry']);