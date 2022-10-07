import { ref } from 'vue' 
import { testPosts } from "./testPosts";

export function usePosts(){
    const posts = ref(testPosts)

    const addPost = (post: any) => {
        posts.value.push(post)
    }

    return {
        posts,
        addPost
    }
}