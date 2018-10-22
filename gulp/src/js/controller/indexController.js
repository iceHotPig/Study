// 第一： 配置依赖的路径
require.config({
  paths: {
    jquery: '/lib/jquery.min',
    api: '/js/server/api',
    tmpl: '/js/template/tmpl'
  }
});
// 第二：进行入口的处理
require(['jquery', 'api', 'tmpl'], function($, api, tmpl) {
  $(function() {
    $('#tt')
      .on('click', function() {
        api.getUser(function(data) {
          console.log(data);
          var html = tmpl('userlist', data);
          $('body').append(html).append(tmpl('user/add', data));
        });
      });
  });
});
