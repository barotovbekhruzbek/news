<template>
     <div id="preloader">
      <div id="cube-loader">
        <div class="caption">
          <div class="cube-loader">
            <h1 class="site">News Site Welcome</h1>
          </div>
        </div>
      </div>


    </div>

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

  /*prelaoader*/
#preloader{
  align-items: center;
  display: flex;
  background: #2c3e50;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
}

html, body {
  height: 100%;
  
}

#cube-loader {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  width: 100%;
  position: fixed;
}

#cube-loader .caption {
  margin: 0 auto;
}

#cube-loader .caption .cube-loader h1 {
  animation: aylan linear 3s infinite;
  width: 500px;
  height: 400px;
}
@keyframes aylan  {
  from{
    transform: rotateY(0);
  }
  to{
    transform: rotateY(360deg);
  }

}

.site{
  color: #fff;
  font-size: 50px;
}

</style>