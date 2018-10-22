/**
 *跟后台打交道的所有的api都在这里
 */
define(['jquery'], function($) {
  return {
    getUser: function(cb) {
      // 发送阿加西请求，后台返回的数据后，调用cb函数
      $.ajax({
        url: 'userlist.json',
        type: 'GET',
        data: '',
        datatype: 'json',
        success: cb
      });
    }
  };
});
