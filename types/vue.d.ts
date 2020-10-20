import Vue from 'vue'

declare module 'vue/types/options' {
    type trackObj = {
        $view: ()=> never,
        [x:string] :()=> never
    }
    interface ComponentOptions<V extends Vue> {
        $track?: ()=>trackObj | trackObj
    }
}