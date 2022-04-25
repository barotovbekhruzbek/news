<template>
    <div class="card">
        <img :src="img" :alt="title">
        <h3 class="title" @click="$emit('action')">  {{ title }}  </h3>
    </div>
</template>

<script>
export default {
    props: {
        img:{
            type:String,
            default:() => 'https://cdn.thexplorion.com/wp-content/uploads/2020/01/no-image.png  '
        },
        title: {
            type: String,
            required : true
        }
    }
}
</script>

 <style lang="scss" scoped>
    .card{
        width: 350px;
        height: 500px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            z-index: 1;
        }
    }
    img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }
    .title{
        position: absolute;
        left: 0;
        bottom: 0;
        cursor: pointer;
        width: 100%;
        z-index: 2;
        padding: 20px;
    }

    @media screen and (max-width: 480px) {

        .card{
            width: 450px;
            height: 500px; 
        }

}
</style>
