'use strict';
require.config({
  paths: {
    jquery: '/lib/jquery.min',
    api: '/js/server/api-1a8736947b',
    tmpl: '/js/template/tmpl-531bed3166'
  }
});

require(['jquery', 'api', 'tmpl'], function(i, e, n) {
  i(function() {
    i('#tt').on('click', function() {
      e.getUser(function(e) {
        console.log(e);
        var t = n('userlist', e);
        i('body').append(t).append(n('user/add', e));
      });
    });
  });
});
