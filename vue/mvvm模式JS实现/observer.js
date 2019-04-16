class Observer{
    constructor(data) {
        this.observer(data);
    }
    observer(data){ // data:1
        //要对这个data数据将原有的属性改成set和get的形式
        if(!data || typeof data !== 'object'){
            return;
        }
        // 要将数据一一劫持 先获取到data的key和value
        Object.keys(data).forEach(key=>{
            //劫持
            this.defineReactive(data,key,data[key]);
            this.observer(data[key]);//深度递归劫持
        });
    }
    //定义响应式
    defineReactive(obj,key,value){
        //在获取某个值的适合，想弹个框
        // obj.key=value;
        let that=this
        let dep = new Dep(); //(重要)每个变化的数据都会定义一个数组，这个数组可以存放所有更新的操作
        //定义属性
        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:true,
            get(){ //当取值时调用的方法
                // todo
                Dep.target&&dep.addSub(Dep.target)
                return value;
            },
            set(newValue){ //当给data属性中设置值得时候 更改获取的属性的值
                // todo
                if(newValue!=value){
                    //这里的this不是实例 vm.messsage=12221
                    that.observer(newValue);//如果是对象 继续劫持
                    value=newValue;
                    dep.notify();//通知所有人 数据更新了
                }
            }
        })
    }
}
//发布订阅
class Dep{
    constructor(params) {
        this.subs=[]
    }
    addSub(watcher){
        this.subs.push(watcher);
    }
    notify(){
        this.subs.forEach(watcher=>watcher.update());
    }
}