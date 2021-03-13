<template>
  <div class="about">
    <FilmPreview/>
    <FilmDetailGrid style="margin-top:2vh;" />
  </div>
</template>
<script>

import  FilmPreview  from "../components/FilmPreview";
import  FilmDetailGrid  from "../components/FilmDetailGrid";
export default {
  name: 'Compare',
  data(){
    return {

    } 
  },
  components:{
    FilmPreview,
    FilmDetailGrid
  }
}
</script>
<style scoped>

</style>