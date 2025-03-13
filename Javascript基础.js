/* 1.Javascript的引入方式和注释
 内部引入：
         <Script>xxx</Script>(在head中添加一个scrip标签)
         document.write("js的填充内容")
 外部引入：
         <sricpt src="js地址"></sricpt> 类似于css link引入方式

    2.变量声明
        用var方式定义变量（es6：let，const）
         声明赋值结合：
         var name = “xxxx”;
        声明和赋值分开：
         var name；
         name = “xxxx”;
         console.log(xxxx);(打印)
        同时声明多个变量：
         var name=xxx，name2=xxxx;
         console.log(name,name1);

        命名规则
         Js中的变量是弱类型，可以保存所以类型的数据，级变量没有类型而值有类型
         var xd = "xxxx"
         xxxx绝定类型

         var xd = 18 ;
         console.log(typeof xd);------>输出变量类型

    3.解析过程和变量提升
        直接打印未声明的变量会报错
        console.log(a);
       
        声明被提升到最前
        console.log(a);---->undefined
        var a = 1 ;
        console.log(a);---->1
    4.基础类型数据
        基础类型
            原始类型（数据保存在栈内存里）
                基础类型：Number(数字类型),String（字符串类型）,Boolean（布尔值类型）,Underfined,Null,Symbol
            复杂类型（引用类型，数据保存在堆内存里，通常内存占据空间计较大，所以设计存放堆内存，在栈内存放的是地址）
                引用类型：对象:{} 数组:{} 函数:(){}
        声明定义

        字面量声明
        var num = 1;
        console.log(typeof num);  

        数字对象方式声明
        var xd = new Number(2);
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
        var xd = 0.1 + 0.2
        console.log(xd)// 结果：0.30000000000000004
        解决方式
        var xd = 0.1 + 0.2
        console.log(xd.toFixed(1))// 结果：0.3  
        
    5.JavaScript的对象基本形式
        var car{
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
        var person={
        age:18,
        sex:"boy",    
        };
        var 增/改 {person.hoibby="eat";(向person中增加属性)“.”
        person.sex="girl";(修改对象中的值)用“.”}
        
        var 删 {delete person.age;(直接用delete删除)}

        var 查 {console.log(person.age);直接(对象.属性)
                console.log(person["sex"]);(使用方括号也可以查找相对属性的值)}
        console.log(person);
    
    7.对象中的方法怎么访问自己的属性
        通过this
        var perso={
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
            var car = new Object();
            car.color="red";
            console.log(car);

            function Factory(color,height,suv){  (构造函数的函数名，前面要大写)
                this.color=color;
                this.height=height;
                this.suv=suv;
            }
            var car1 = new Factory("red",1.8,true);
            console.log(car1);
            var car2 = new Factory("blue",1.2,false)
            console.log(car2);

        构造函数
            object自定义构造函数(大驼峰)
            this指向的是对象的本身
            使用new实例化一个对象，就像工厂一样

    9.构造函数参数怎么写
        固定参数应用场景
            明确知道对象属性
            位置严格要求
        var Car(name,price,size){
            this.name;
            this.price;
            this.size;
        }

        var benc = new Car("benc",40w","big");
        console.log(benc);

        对象类型参数
            维护方便
            使用方便
        function Car(obj){
            this.name=obj.name;
            this.price=obj.price;
            this.size=obj.size;
        }
            var audi = new Car({size:"small",name:"audi",prize:"30w"});(传参简洁明了)
            console.log(audi);

 */ 