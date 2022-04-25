<template>
  <div class="about">
     <img :src="post.img" :alt="post.title">
          <h1>{{ post.title }}</h1>
    <p>{{  post.desc }}</p>
    <button @click="$router.push({ name: 'home' })">Home Page</button>
  
  </div>
</template>


<script>

import newsArray from '../news.js'

export default {
    data() {
      return {
        news: newsArray,
        postId:this.$route.params.id
      }
    },
    computed: {
      post() {
        return this.news.find(post => post.id===this.postId)
      }
    }
}
</script>



<style lang="scss" scoped>
  .about{
    width: 800px;
    margin: 100px auto;
    div{
      margin-top: 500px;
    }
    img{
     
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  h1{
    font-size: 50px;
    margin: 50px 0;
  }
  p{
    font-size: 25px;
  }
  button{
    background: none;
    cursor: pointer;
    margin-top: 50px;
    border: none;
    font-size: 20px;
    color: aqua;
  }
  }


  @media screen and (max-width: 480px) {
    .about{
      width: 440px;
    }
  h1{
    font-size: 30px;
  }
  p{
    font-size: 18px;
  }
}

  @media screen and (max-width: 400px) {
    .about{
      width: 400px;
    }
  h1{
    font-size: 25px;
  }
  p{
    font-size: 16px;
  }
}

 @media screen and (max-width: 800px) {
    .about{
      width: 700px;
    }
  h1{
    font-size: 30px;
  }
  p{
    font-size: 18px;
  }
}
</style>
