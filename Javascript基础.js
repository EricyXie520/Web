/* 1.Javascript的引入方式和注释
 内部引入：
         <Script>xxx</Script>(在head中添加一个scrip标签)
         document.write("js的填充内容")
 外部引入：
         <sricpt src="js地址"></sricpt> 类似于css link引入方式
alert("页面弹出警告对话框")
    2.变量声明规范
     规范：
        1.变量名不能有关键字
        2.变量只包含四部分（下划线，字母，数字，￥组成）数字不能开头
        3.字母严格要求大小写，大写和小写所代表的含义不一样
     规范：
        1.起名要有意义
        2.遵守小驼峰命名法
    
        用let方式定义变量（es6：let，const）
         声明赋值结合：
         let name = “xxxx”;
        声明和赋值分开：
         let name；
         name = “xxxx”;
         console.log(xxxx);(打印)
        同时声明多个变量：
         let name=xxx，name2=xxxx;
         console.log(name,name1);

        命名规则
         Js中的变量是弱类型，可以保存所以类型的数据，级变量没有类型而值有类型
         let xd = "xxxx"
         xxxx绝定类型

         let xd = 18 ;
         console.log(typeof xd);------>输出变量类型
    3.解析过程和变量提升
        直接打印未声明的变量会报错
        console.log(a);
       
        声明被提升到最前
        console.log(a);---->undefined
        let a = 1 ;
        console.log(a);---->1
    4.基础类型数据
        基础类型
            原始类型（数据保存在栈内存里）
                基础类型：Number(数字类型),String（字符串类型）,Boolean（布尔值类型）,Underfined,Null,Symbol
            复杂类型（引用类型，数据保存在堆内存里，通常内存占据空间计较大，所以设计存放堆内存，在栈内存放的是地址）
                引用类型：对象:{} 数组:{} 函数:(){}
        声明定义

        字面量声明
        let num = 1;
        console.log(typeof num);  

        数字对象方式声明
        let xd = new Number(2);
        console.log(xd+3); //5
        数字方法

        整数判断
        console.log(Number.isInteger(1.3)); //false
        指定返回的小数位数 
        console.log((12.345).toFixed(2)); //12.35
        NaN-表示非数字值
        isNaN() //用来判断一个值是不是数字
        如果该值转换为number等于 NaN，则此函数返回 true

        注意：null, "" 两个值会被判断为数字，所以使用前应该屏蔽
        浮点精度

        js语言在浮点数计算时会有精度误差问题
        let xd = 0.1 + 0.2
        console.log(xd)// 结果：0.30000000000000004
        解决方式
        let xd = 0.1 + 0.2
        console.log(xd.toFixed(1))// 结果：0.3  
        
    5.JavaScript的对象基本形式
        let car{
            color:"red",
            height:1.8,
            suv:true
            start:function(){
                console.log("启动");
            },
            stop:function(){
                console.log("熄火")
            }，
            luntai：{1.2.3.4}，
                }；
        在对象里的函数叫方法（methods）
        对象里包含属性与值，属性的值可以是任意类型的

    6.JavaScript中常规操作(四种基本操作)
        let person={
        age:18,
        sex:"boy",    
        };
        let 增/改 {person.hoibby="eat";(向person中增加属性)“.”
        person.sex="girl";(修改对象中的值)用“.”}
        
        let 删 {delete person.age;(直接用delete删除)}

        let 查 {console.log(person.age);直接(对象.属性)
                console.log(person["sex"]);(使用方括号也可以查找相对属性的值)}
        console.log(person);
    
    7.对象中的方法怎么访问自己的属性
        通过this
        let perso={
        name:"张三",
        age:18,
        sex:"boy",
        sayHello:function(){
        console.log("我是"+person.name)；(console.log("我是"+this.name))
        }，
        speak:function(){
        this.sayHello();
        console.log("我正在说话")；
        }，
        };
        person.speak()；

    8.JavaScript中创建对象的几种方法
        对象字面量
            声明一个对象，赋值给一个变量
            let car = new Object();
            car.color="red";
            console.log(car);

            function Factory(color,height,suv){  (构造函数的函数名，前面要大写)
                this.color=color;
                this.height=height;
                this.suv=suv;
            }
            let car1 = new Factory("red",1.8,true);
            console.log(car1);
            let car2 = new Factory("blue",1.2,false)
            console.log(car2);

        构造函数
            object自定义构造函数(大驼峰)
            this指向的是对象的本身
            使用new实例化一个对象，就像工厂一样

    9.构造函数参数怎么写
        固定参数应用场景
            明确知道对象属性
            位置严格要求
        let Car(name,price,size){
            this.name;
            this.price;
            this.size;
        }

        let benc = new Car("benc",40w","big");
        console.log(benc);

        对象类型参数
            维护方便
            使用方便
        function Car(obj){
            this.name=obj.name;
            this.price=obj.price;
            this.size=obj.size;
        }
            let audi = new Car({size:"small",name:"audi",prize:"30w"});(传参简洁明了)
            console.log(audi);


        变量:使用const声明的变量称为常量
            当某个变量永远不会改变的时候，可以用const来声明
                const G = 8
                console.log(G)
            注：常量不允许重新赋值，声明的时候必修赋值（初始化）

        数据类型
            基本数据类型：number string boolean underfined null 
            引用数据类型：object

            Number-数字类型
                JavaScript是弱数据的一种语言
                只有我能赋值了才知道是什么类型
                与算术运算符一起使用
                + 加法
                - 减法
                * 乘法
                / 除法
                % 取余
                ++ 自增
                -- 自减
                NaN 非数字值(是粘性的，任何数与NaN运算都是NaN)
                isNaN() 判断是否是数字
                toFixed() 指定返回的小数位数
                let a = 1;
                let b = 2;
                console.log(a+b);---->3
                console.log(a-b);---->-1
                console.log(a*b);---->2
                console.log(a/b);---->0.5
                console.log(a%b);---->1
                console.log(a++);---->1
                console.log(a--);---->1
                console.log(++a);---->2
            求园的面积
            prompt("请输入半径")---->输入半径
            let r = prompt("请输入半径");
            let s = Math.PI * r * r;
            document.write("圆的面积是"+s);
        
        String-字符串类型
            通过单引号或双引号声明的数据都叫字符串，单引号和双引号没有区别，推荐使用单引号（变量不能加引号）
            字符串拼接
                let name = "张三";
                let age = 18;
                console.log(name+"今年"+age+"岁");
            字符串方法
                toUpperCase() 转换为大写
                toLowerCase() 转换为小写
                charAt() 获取指定位置的字符
                indexOf() 获取指定字符的位置
                slice() 截取字符串
                substr() 截取字符串
                split() 分割字符串
                let str = "hello world";
                console.log(str.toUpperCase());
                console.log(str.toLowerCase());
                console.log(str.charAt(0));
                console.log(str.indexOf("world"));
                console.log(str.slice(0,5));
                console.log(str.substr(0,5));
                console.log(str.split(" "));
            字符串模板
                let name = "张三";
                let age = 18;
                console.log(`${name}今年${age}岁`);重点！！！！！！！
            字符串输入
               let name = promot("请输入姓名");
               let age = prompt("请输入年龄");
               document.write(`大家好我叫${name}，我今年${age}岁了`); 
            
            字符串比较
                通过比较字符串的Unicode编码来比较字符串
                let a = "abc";
                let b = "bcd";
                console.log(a>b);---->false
                console.log(a<b);---->true
            字符串转数字
                parseInt() 转换为整数
                parseFloat() 转换为浮点数
                let str = "123";
                console.log(parseInt(str));
                console.log(parseFloat(str));
            数字转字符串
                let num = 123;
                console.log(num.toString());
            字符串拼接
                let a = "abc";
                let b = "bcd";
                console.log(a+b);---->abcbcd
            字符串长度
                let str = "hello world";
                console.log(str.length);

        Boolean-布尔值类型
            布尔值只有两个值，true和false
            用于判断条件
            let a = true;
            let b = false;
            console.log(a);
            console.log(b);
            console.log(1>2);---->false
            console.log(1<2);---->true
            console.log(1==2);---->false
            console.log(1!=2);---->true
            console.log(1>=2);---->false
            console.log(1<=2);---->true
            console.log(1===2);---->false
            console.log(1!==2);---->true
            console.log(1&&2);---->false
            console.log(1||2);---->true
            console.log(!1);---->false
            console.log(!2);---->true
            console.log(!!2);---->true
            console.log(!!0);---->false
            console.log(!!"");---->false
            console.log(!!"a");---->true
            console.log(!!null);---->false
            console.log(!!undefined);---->false
            console.log(!!NaN);---->false
            console.log(!!{});---->true
            console.log(!![]);---->true
            console.log(!!function(){});---->true
            console.log(!!window);---->true
            console.log(!!document);---->true

        Undefined-未定义类型(声明变量未赋值)
            未定义类型只有一个值，undefined
            用于判断变量是否被赋值
            let a;
            console.log(a);---->undefined
            let b = 1;
            console.log(b);---->1
            console.log(c);---->报错
            console.log(typeof c);---->undefined

        Null-空类型(尚未赋值的对象，先声明后赋值)(对象数据类型)
            空类型只有一个值，null
            用于判断变量是否为空
            let a = null;
            console.log(a);---->null
            console.log(null + 1);---->1
            console.log(null + "1");---->null1
            console.log(typeof a);---->object
            console.log(a==null);---->true
            console.log(a===null);---->true
            console.log(a==undefined);---->true
            console.log(a===undefined);---->false
            console.log(null==undefined);---->true
            console.log(null===undefined);---->false

        检测数据类型
            typeof() 检测数据类型
            let a = 1;
            let b = "hello";
            let c = true;
            let d = undefined;
            let e = null;
            let f = {};
            let g = [];
            let h = function(){};
            console.log(typeof a);---->number
            console.log(typeof b);---->string
            console.log(typeof c);---->boolean
            console.log(typeof d);---->undefined
            console.log(typeof e);---->object
            console.log(typeof f);---->object
            console.log(typeof g);---->object
            console.log(typeof h);---->function
       
       Symbol-唯一值类型(唯一值类型)
            Symbol是ES6新增的数据类型，表示唯一值
            Symbol的值是唯一的，可以用来作为对象的属性名
            let a = Symbol();
            let b = Symbol();
            console.log(a==b);---->false
            console.log(a===b);---->false
            let obj = {
                [a]:"hello",
                [b]:"world"
            }
            console.log(obj[a]);---->hello
            console.log(obj[b]);---->world
            console.log(obj);---->{Symbol(): "hello", Symbol(): "world"}
            console.log(obj[a]);---->hello
            console.log(obj[b]);---->world
            console.log(obj[Symbol()]);---->undefined

        Object-对象类型
            对象是一种复杂的数据类型，可以保存多个数据
            对象由多个键值对组成
            let obj = {
                name:"张三",
                age:18,
            }
            console.log(obj);
            console.log(obj.name);
            console.log(obj.age);

        Array-数组类型
            数组是一种特殊的对象，可以保存多个数据
            数组的键是数字，值是任意类型
            let arr = [1,2,3,4,5];
            console.log(arr);
            console.log(arr[0]);
            console.log(arr[1]);
            console.log(arr[2]);
            console.log(arr[3]);
            console.log(arr[4]);
            console.log(arr.length);
            console.log(arr[arr.length-1]);
            console.log(arr[arr.length-2]);
            console.log(arr[arr.length-3]);
            
        Function-函数类型
            函数是一种特殊的对象，可以保存多个数据
            函数的键是字符串，值是函数
            let fn = function(){
                console.log("hello");
            }
            console.log(fn);
            console.log(fn());
            console.log(fn.name);
            console.log(fn.length);
            console.log(fn.toString());
            console.log(fn.prototype);
            console.log(fn.prototype.constructor);

        数据类型转换
            强制转换
                Number() 转换为数字
                String() 转换为字符串
                Boolean() 转换为布尔值
                let a = "123";
                console.log(Number(a));
                console.log(String(a));
                console.log(Boolean(a));
            隐式转换
                + 字符串拼接
                - 数字运算
                * 数字运算
                / 数字运算
                % 数字运算
                let a = "123";
                let b = 1;
                console.log(a+b);
                console.log(a-b);
                console.log(a*b);
                console.log(a/b);
                console.log(a%b);
            自动转换
                let a = 1;
                let b = "1";
                console.log(a==b);
                console.log(a===b);
                console.log(a+b);
                console.log(a-b);
                console.log(a*b);
                console.log(a/b);
                console.log(a%b);
            NaN 非数字值
                NaN是一个特殊的数字，表示非数字值
                任何数与NaN运算都是NaN
                console.log(1+NaN);
                console.log(1-NaN);
                console.log(1*NaN);
                console.log(1/NaN);
                console.log(1%NaN);
            null 空值
                null是一个特殊的值，表示空值
                任何数与null运算都是null
                console.log(1+null);
                console.log(1-null);
                console.log(1*null);
                console.log(1/null);
                console.log(1%null);

        数据类型检测
            隐式转换
                + 字符串拼接
                - 数字运算
                * 数字运算
                / 数字运算
                % 数字运算
                let a = "123";
                let b = 1;
                console.log(a+b);
                console.log(a-b);
                console.log(a*b);
                console.log(a/b);
                console.log(a%b);
            自动转换
                let a = 1;
                let b = "1";
                console.log(a==b);
                console.log(a===b);
                console.log(a+b);
                console.log(a-b);
                console.log(a*b);
                console.log(a/b);
                console.log(a%b);
            显示转换
                Number() 转换为数字
                String() 转换为字符串
                Boolean() 转换为布尔值
                let a = "123";
                console.log(Number(a));---->123
                console.log(String(a));---->"123"
                console.log(Boolean(a));---->true


            typeof() 检测数据类型
            instanceof() 检测数据类型
            let a = 1;
            let b = "hello";
            let c = true;
            let d = undefined;
            let e = null;
            let f = {};
            let g = [];
            let h = function(){};
            console.log(typeof a);---->number
            console.log(typeof b);---->string
            console.log(typeof c);---->boolean
            console.log(typeof d);---->undefined
            console.log(typeof e);---->object
            console.log(typeof f);---->object
            console.log(typeof g);---->object
            console.log(typeof h);---->function



            
















 */ 