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






 */ 