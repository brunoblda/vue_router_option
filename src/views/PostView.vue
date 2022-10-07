
<template>
    <h4> {{post.title}}</h4> 
    <p>
        {{post.content}}
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  IPost from '@/interfaces/IPost'
import { PropType } from 'vue'


export default defineComponent({
    name: "PostView",
    props: {
        posts:{
            type: [Object] ,
            default: ()=>{[]}
        }
    },
    computed: {
        post(){

        return this.posts.find((x: IPost) => x.id.toString() ===
         this.$route.params.id)
        }
    }
    
        

})
</script>
