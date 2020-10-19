# vue-track-ve
add vue component extra created hook and methods event

vue组件添加额外的created 钩子 和额外的方法 以用来单独的处理页面访问和点击事件

在手动埋点上报的需求里隔离具体的业务

### 使用方法 ###
```
npm i vue-track-ve -s
```
引入
```
import Vue from 'vue'
import VueTrackVe from 'vue-track-ve'
Vue.use(VueTrackVe)
```



组件内
```
export default {
    track:{
        $view(){

        },
        onHandle(){

        }
    }
}
```

ts

```
@Component({
    track:{ 
      $view(){
        
      },
      onHandle(){
        
      }
    }
})
```


说明:
track 对象 内$view 和 created 钩子相同

其他为methods 内的函数,比如

onHandle 其实就是methods 内的onHandle,但是onHandle只是点击事件的函数,不要在这里处理业务逻辑