<template>
  <div class="about">
    <h1>This is an Film Basket!</h1>
    <div class="inner-container">
        <div class="movie-item" v-for="movie in responseMovies" :key="movie.id">
          <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path">
          <h1>{{movie.original_title}}</h1>
          <p>{{movie.overview}}</p>
        </div>        
      </div>
  </div>
</template>
<script>
export default {
  name: 'Compare',
  props:[
    'movies'
  ],
  data(){
    return {
      listMovies : this.movies,
      responseMovies: []
    } 
  },
  mounted() {
    for(let i = 0; i < this.listMovies.length ; i++)
    {
      fetch(`https://api.themoviedb.org/3/movie/${this.listMovies[i]}?api_key=${process.env.VUE_APP_ENV_APIKEY}`)
        .then((response) => response.json())
        .then((res) => this.responseMovies.push(res));
    }
  },
}
</script>
<style scoped>

.inner-container{
    margin-top: 2vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 25px;
    grid-row-gap: 50px;
  }

  .movie-item img{
    width: 100%;
    width: auto; 
    margin: auto;
    border-radius: 25px 25px 0 0;
  }

  .movie-item{
    text-align: center;
    border: 1px solid #cacaca;
    border-radius: 25px;
    transition: .2s ease;
  }
  .movie-item:hover{
    box-shadow: 0 0 5px 0px black;
  }
  .movie-item h1{
    padding: 0px 10px;
    font-size: 1.5rem;
  }
  .movie-item p{
    padding: 5px 10px;
  }
  .movie-item p{
    text-align: justify;
  }

</style>