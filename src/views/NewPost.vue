<template>
    <h3> New Post</h3>
    <form @submit.prevent="submit">

        <input
            v-model="newPost.title"  
            placeholder="Title"
            type="text"
        />
        <br/>
        <textarea
            cols="50"
            rows="10"
            v-model="newPost.content"
        ></textarea>

        <button>Submit</button>

    </form>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NewPost",
    data(){
        return{
            newPost: {
                title: '',
                content: ''
            }
        }
    },
    methods: {
        submit(){
            this.$emit('CreatePost', {
                title: this.newPost.title,
                content: this.newPost.content
            })

        }
    },
})
</script>