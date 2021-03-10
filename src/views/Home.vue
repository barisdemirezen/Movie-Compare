<template>
  <div class="home">
    <PopularMovies @addtolist="addtolist"/>
  </div>
</template>

<script>

import PopularMovies from '@/components/PopularMovies.vue'

export default {
  name: 'Home',
  components: {
    PopularMovies
  },
  methods: {
    addtolist (value) {
      console.log("home: " + value);
      this.$emit('addtolist', value);
    }
  },
}
</script>
