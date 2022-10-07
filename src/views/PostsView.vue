
<template>
    <h4>Hello Posts</h4>
    <router-link to="/posts/new">New Post</router-link>
    <ul>
        <li 
            v-for="post in posts"
            :key="post.id"
        >
            <router-link
                :to="`/posts/${post.id}`"
            >
                {{post.title}}
            </router-link>
        </li>
    </ul>
    <router-view 
    :posts="posts"
    @createPost="createPost"
    ></router-view>
</template>

<script lang="ts"> 
import { usePosts } from '@/composable/usePosts'

import { defineComponent } from 'vue'
import {testPosts } from '@/composable/testPosts'

export default defineComponent({
    name: "PostsView",
    data(){
        return {
            posts: testPosts
        }
    },
    methods: {
        createPost(newPost: any){
            const idV = this.posts.length + 1
            this.posts.push({
                id: idV ,
                title: newPost.title,
                content: newPost.content,
                likes: 0,
                hashtags: []
            })

            this.$router.push(`/posts/${idV}`)
        }
    }
    
})
</script>