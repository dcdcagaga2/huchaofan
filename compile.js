 class Compile{
    constructor(el,vm) {
        // 如果有元素节点就使用如果没有就取默认的
        this.el=this.isElementNode(el)?el:document.querySelector(el);
        this.vm=vm;
        if(this.el){
            //如果这个元素能取到 才开始编译
            //1.先把当前dom放入内存中 fragment文档碎片中 （内存中）
            let fragment = this.node2fragment(this.el);
            //2.编译提取=>想要的元素节点 "v-model"和文本节点"{{}}"
            this.compile(fragment)
            //3.把编译好的fragment在塞回到页面里去
            this.el.appendChild(fragment);
        }
    }
    // 辅助方法
    //当前节点类型是否为节点
    isElementNode(node){
        return node.nodeType === 1;
    }
    //是否包含指令函数关键字
    isDirective(name){
        return name.includes('v-');
    }
    // 核心方法
    compileElement(node){
        //带v-model
        let attrs=node.attributes;
        Array.from(attrs).forEach(attr=>{
            //判断属性名字是否包含v-
            let attrname=attr.name;
            if(this.isDirective(attrname)){
                //取到对应的值放到节点中
                let expr = attr.value
                // let type = attr.name.slice(2)
                let [,type] = attr.name.split('-')
                // console.log(type)
                //node this.vm.$data expr
                //todo ............. v-model v-on v
                CompileUtil[type](node,this.vm,expr)

            }
        })
    }
    compileText(node){
        // 带{{asd}asd}
        let expr = node.textContent;//取文本的内容
        let reg=/\{\{([^}]+)\}\}/g;  //{{a}} {{b}} {{c}}
        if(reg.test(expr)){
            // node this.$data text
            // todo ...............
            CompileUtil['text'](node,this.vm,expr)
        }
        // console.log(text);
    }
    compile(fragment){//需要递归分解内存DOM中的所有节点与文本
        let childNodes = fragment.childNodes
        Array.from(childNodes).forEach(node=>{
            if(this.isElementNode(node)){
                //是元素节点，还需要继续递归深入的检查
                //这里需要编译元素
                // console.log('element',node)
                this.compileElement(node)
                this.compile(node)
            }else{
                //文本节点
                //这里需要编译文本
                console.log('text',node)
                this.compileText(node)
            }
        })
    }
    node2fragment(el){//将el中的内容全部放到内存中
        //文档碎片 内存中的dom节点
        let fragment=document.createDocumentFragment();
        let firstChild;
        while(firstChild=el.firstChild)
        {
            fragment.appendChild(firstChild);
        }
        return fragment;//内存中的节点
    }


 }

 CompileUtil = {
     getVal(vm,expr){//获取实例上对应的数据
        
        expr=expr.split('.');
        //reduce es5方法 将数组中所有的数字相加，或者所有字符串拼接，如果既有数字又有字符串就当作字符串拼接
        return expr.reduce((prev,next)=>{
            // console.log(prev)
            // console.log(next)
            return prev[next];
        }, vm.$data)
     },
     getTextVal(vm, expr){ //获取编译文本后的结果
        return expr.replace(/\{\{([^}]+)\}\}/g,(...arguments)=>{
            return this.getVal(vm, arguments[1]);
        })
     },
     text(node,vm,expr){ //文本处理 文本编译时取到值更新视图
        let updateFn=this.updater['textUpdater'];
        // vm.$data[expr];  //vm.
        let value= this.getTextVal(vm,expr)
        // let value= expr.replace(/\{\{([^}]+)\}\}/g,(...arguments)=>{
        //     return this.getVal(vm, arguments[1]);
        // })
        expr.replace(/\{\{([^}]+)\}\}/g,(...arguments) => {
            new Watcher(vm,arguments[1],(newValue)=>{
                //（重要）如果数据变化了，文本节点需要重新获取依赖的属性更新文本的内容
                updateFn && updateFn(node,this.getTextVal(vm,expr));
            })
        })
        updateFn && updateFn(node, value)
     },
     setVal(vm,expr,value){ //[message,a]
        expr=expr.split('.');
        //收敛
        return expr.reduce((prev,next,currentIndex)=>{
            if(currentIndex===expr.length-1){
                return prev[next]=value;
            }
            return prev[next]
        },vm.$data)
     },
     model(node,vm,expr){ //输入框处理 元素编译时取到值更新视图
        let updateFn=this.updater['modelUpdater'];
        //这里应该加一个监控watcher 数据变化了 应该调用这个watch的callback
        new Watcher(vm,expr,(newValue)=>{
            // 当值变化后需要调用cb 将新的值传递过来
            updateFn && updateFn(node,this.getVal(vm,expr))
        });
        node.addEventListener('input',(e)=>{
            let newValue= e.target.value;
            this.setVal(vm,expr,newValue)
        })
        // vm.$data[expr];  //vm.
        updateFn && updateFn(node,this.getVal(vm,expr))
     },
     updater:{
         // 文本更新
         textUpdater(node,value){
            node.textContent = value
         },
         // 输入框更新
         modelUpdater(node,value){
            node.value = value
         }
     }

 }