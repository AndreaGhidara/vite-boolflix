<script>
import { store } from '../data/store';
import CardFilm from './CardFilm.vue';

export default {
    name: "PopularMovie",
    components: {
        CardFilm
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="bg-black p-4 ContentBox">
        <h1 class="text-white">Popular Movie</h1>
        <div class="filmHome d-flex">
            <CardFilm v-for="film in store.popularMovie" :imgPath="film.poster_path" :title="film.title"
                :originalTitle="film.original_title" :language="film.original_language" :vote="film.vote_average"
                :description="film.overview" />
        </div>
    </div>
</template>

<style scoped>
.ContentBox{
    width: 100vw;
    overflow-x: auto;
}

</style>
