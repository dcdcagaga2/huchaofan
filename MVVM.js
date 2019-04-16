class  Mvvm{
    // 构造器 先把可以用的操作挂载在实例上
    constructor(options) {
        this.$el=options.el;
        this.$data=options.data;
    // 如果有要编译的模板就开始编译
        if(this.$el)
        {
            //数据劫持 就是把对想的所有属性 改成get和set方法
            new Observer(this.$data);
            
            this.proxyData(this.$data);
            //用数据和元素进行编译
            new Compile(this.$el,this);
        }
    }
    proxyData(data){
        Object.keys(data).forEach(key=>{
            Object.defineProperty(this,key,{
                get(){
                    return data[key]
                },
                set(newValue){
                    data[key]=newValue
                }
            })
        })
    }
}