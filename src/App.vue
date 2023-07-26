<script>

import AppHeader from './components/AppHeader.vue';
import CardFilm from './components/CardFilm.vue';
import FilmHome from './components/FilmHome.vue';
import PopularMovie from './components/PopularMovie.vue';
import PopularSeries from './components/PopularSeries.vue';
import SeriesHome from './components/SeriesHome.vue'
import Jumbotron from './components/Jumbotron.vue';

import {store} from './data/store'

export default {
  components: {
    AppHeader,
    CardFilm,
    FilmHome,
    SeriesHome,
    PopularMovie,
    PopularSeries,
    Jumbotron,
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
    
  },
}
</script>

<template>
  <AppHeader />
  <Jumbotron />
  <div v-if="store.popular">
    <PopularMovie />
    <PopularSeries />
  </div>
  <div v-else>
    <FilmHome v-if="store.movie" />
    <SeriesHome v-else />
  </div>
</template>


<style scoped>

</style>
