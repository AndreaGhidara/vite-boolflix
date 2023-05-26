<script >
import { store } from '../data/store';

export default {
    name: "cardTitle",
    props:{
        title:String,
        originalTitle:String,
        language:String,
        vote:Number,
        description:String,
    },
    components: {

    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
        <div class="d-flex">
            <div class="card m-1" style="width: 18rem;">
                <img :src="imgPath" class=" img-fluid" alt="...">
            </div>
            <div class="card m-1" style="width: 18rem;">
                <h4>-{{title}} </h4>
                <h4>Titolo originale: {{ originalTitle }}</h4>
                <h5>Language: {{ language }} </h5>
                <p>Voto: {{ vote }}
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </p>
                <p class="description">Overview: {{ description }}</p>
            </div>
        </div>
</template>

<style scoped>
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .card{
        width: 18rem;
        height: 30rem;
        overflow: hidden;
    }
    .description{
        height: 40%;
        font-size: 15px;
    }
</style>
