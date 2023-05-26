<script>

import AppHeader from './components/AppHeader.vue';
import CardFilm from './components/CardFilm.vue';

import {store} from './data/store'

export default {
  components: {
    AppHeader,
    CardFilm
},
  data() {
    return {
      store,
      loading: false,
    }
  },
  methods: {
    
  },
  mounted() {
    store.callApi();
    console.log(store.apiCallTvSeries);
  },
}
</script>

<template>
  <AppHeader />

  <div class="container-fluid bg-black d-flex flex-wrap p-5 p-0">
    <!-- <div v-if="store.movieSearched && store.movieSearched[15] && store.movieSearched[15].poster_path !== null">
      Non è null
    </div>

    <div v-else>
      è null
    </div> -->

    <!-- <span v-for="film in store.movieSearched">
    <CardFilm v-if="film.poster_path !== null"
    :imgPath="store.imgApiPath + film.poster_path"
    :title="film.title"
    :originalTitle="film.original_title"
    :language="film.original_language"
    :vote="film.vote_average"
    :description="film.overview"
    />
    <CardFilm v-else
    :imgPath="'https://m.media-amazon.com/images/I/617m4SsVIzL._AC_SX425_.jpg'"
    :title="film.title"
    :originalTitle="film.original_title"
    :language="film.original_language"
    :vote="film.vote_average"
    :description="film.overview"
    />
    </span> -->

    <CardFilm v-for="film in store.movieSearched" 
    :imgPath="film.poster_path"
    :title="film.title"
    :originalTitle="film.original_title"
    :language="film.original_language"
    :vote="film.vote_average"
    :description="film.overview"
    />
  </div>

</template>

<!--  -->

<style scoped>

</style>
