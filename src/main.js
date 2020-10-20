export default {
    install(Vue){
        Vue.mixin({
            beforeCreate() {
                let options = this.$options
                const track = options.$track
                if(track) {
                    const trackOptions = typeof track === 'function' ? track.call(this) : track
                    const {$view,...moths} = trackOptions
                    const vm = this
                    vm.$on('hook:created',()=>{
                        if($view) {
                            try{
                                $view.call(this)  
                            }catch(e){
                                console.error(e)    
                            }
                        }   
                        Object.keys(moths).forEach(item =>{
                            if(vm[item]) {
                                const funm = vm[item]
                                vm[item] = (...args)=>{
                                    try{
                                        funm(...args)
                                    }catch(e){
                                        console.error(e)     
                                    }
                                    moths[item].call(this,...args)
                                }
                            } else {
                                vm[item] = moths[item]
                            }
                        })    
                    })
                }
            }
        })
    }
}