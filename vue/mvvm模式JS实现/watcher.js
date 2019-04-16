// 观察者的目的就是给需要变化的那个元素增加一个观察者监听，当数据变化后执行对应的方法
class Watcher{
    constructor(vm,expr,cb) {
        this.vm=vm;
        this.expr=expr;
        this.cb=cb;
        //先获取一下老的值
        this.value=this.get();
    }
    getVal(vm,expr){//获取实例上对应的数据 可以与compile中的相同方抽离出来做公共类重用
        expr=expr.split('.');
        //reduce es5方法 将数组中所有的数字相加，或者所有字符串拼接，如果既有数字又有字符串就当作字符串拼接
        return expr.reduce((prev,next)=>{
            // console.log(prev)
            // console.log(next)
            return prev[next];
        }, vm.$data)
     }
    get(){
        Dep.target=this;
        let value= this.getVal(this.vm,this.expr);
        Dep.target=null
        return value;
    }
    //对外暴露的方法
    update(){
        let newValue=this.getVal(this.vm,this.expr);
        let oldValue=this.value;
        if(newValue!=oldValue){
            this.cb(newValue);
        }
    }
}
//用新值和老值进行比对时 如果发生变化 就调用更新方法
//vm.$data expr

