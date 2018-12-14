<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <!-- Create post here -->
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post._id"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        <p class="text">{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService.js";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>
