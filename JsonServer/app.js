//使用mockjs模拟生成数据c
const Mock = require('mockjs');
module.exports = () =>{
    let data = Mock.mock({
        'course|217':[
            {
                //属性 id是一个自赠数，起始值为1，每次层架一个。
                "id|+1":1000,
                course_name: '@title(5,10)',
                author:'@name',
                college:'@title(6)',
                'category_id|1-6': 1
            }
            
        ],
        'course_category|6':[
            {
                "id|+1":1,
                "pid":-1,
                cName:"@title(4)"
            
            }
        ]
    });
    //返回的data会作为json-server的数据
    return data;    
}
