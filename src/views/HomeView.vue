<template>
  <div class="home">
    <h1>UzNewsHot.uz </h1>
    <div class="wrapper">
     <NewsCard 
     v-for="post in news"
     :key="post.id"
      :img="post.img"
      :title="post.title"
      @action ="$router.push({ name: 'About', params:{ id: post.id} })"

     />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import NewsCard from '../components/NewsCard.vue'
import newsArray from '../news.js'
export default {
  name: 'HomeView',
  components: {
   NewsCard
  },
  data() {
    return {
      news: newsArray
    }
  },
}
</script>

<style lang="scss" >
h1{
  text-align: center;
  margin:50px 0 ;
}
.wrapper{
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  width: 1400px;
  margin: 0 auto;
}
@media screen and (max-width: 480px) {

.wrapper{
  flex-direction: column;
  width: 440px;
  align-items: center;
 
  }
}

@media screen and (max-width: 400px) {

.wrapper{
  flex-direction: column;
  width: 400px;
  align-items: center;
 
  }
}
@media screen and (max-width: 800px) and (min-width: 481px) {

.wrapper{
  flex-direction: column;
  width: 700px;
  align-items: center;
 
  }
}



</style>