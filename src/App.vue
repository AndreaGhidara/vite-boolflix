<script>

import AppHeader from './components/AppHeader.vue';

import {store} from './data/store'

export default {
  components: {
    AppHeader
},
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    
  },
  mounted() {
    console.log(store.callApi());
    
  },
}
</script>

<template>
  <AppHeader />

</template>

<style scoped>

</style>
