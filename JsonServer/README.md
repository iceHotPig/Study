cnt

```shell
    #json-server 详解
    #JSON-Server 是一个node模块，运行express服务器，你可以指定json文件作为api的数据源。
```

```shell
    #安装json-server
    $ npm install -g json-server
```

```shell
    #启动json-server
    #json-server 可以直接把一个json文件托管成一个具备全RESful风格的API，并且支持跨域，jsonp，路由定制，数据快照baocun等功能的web服务器。
    #在文件的根目录中使用,用json-server +文件的形式对文件进行托管；
    $ json-server  db.json
```

```shell
    #把json文件托管成一个web服务器是加 --watch ；
    #设置端口号 --port；
    $ json-server --watch --port 5300 db.json
```

```shell
    #开发阶段使用mockjs
    $ npm i -D mockjs
```

```shell
    #json-server 的查询过滤分页请求
    #按id取数据的方式   http://localhost:3400/course/1001   或者是http://localhost:3400/course？id=1001;
    #取第1页到10这个中间段的数据  http://localhost:3400/course?_page=1&limit=10；
    #按照id的降序排列 http://localhost:3400/course?_sort=id&_order=desc
```

```shell
    #json-server 自定义路由 ，设置请求地址的格式。
```