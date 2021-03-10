<template>
  <div class="container">
      <input type="text" class="search-movie" v-model="querystring" @keyup="searchmovie()">
      <div class="loader" v-if="loading">
          <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif">
      </div>
      <div class="inner-container" v-else>
        <div class="movie-item" v-for="movie in movies" :key="movie.id">
          <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path">
          <h1>{{movie.original_title}}</h1>
          <p>{{movie.overview}}</p>
          <button class="addtolist" @click="addtolist(movie.id)">Add to compare</button>
        </div>        
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movies: [],
      querystring: '',
      loading : true
    }
  },
  methods: {
    addtolist (id) {
        this.$emit('addtolist', id);
    },
    searchall(){
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_ENV_APIKEY}`)
        .then((response) => response.json())
        .then((res) => {
          this.movies = res.results;
          this.loading = false;
          });
    },
    searchmovie(){
      if(this.querystring && this.querystring[0] != " ")
      {
        this.loading = true;
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.querystring}&api_key=${process.env.VUE_APP_ENV_APIKEY}`)
        .then((response) => response.json())
        .then((res) => {
          this.movies = res.results;
          this.loading = false;
          });
      }
      else
      {
        this.searchall();
      }
      
    }
  },
  mounted() {
    this.searchall();
  },
  name: 'PopularMovies'
}
</script>
<style scoped>

  .loader{
    width: 100%;
    display: grid;
    place-items: center;
  }

  button {
    padding: 10px 20px;
    background: #2f1884;
    color: white;
    border-radius: 25px;
    font-size: 1.1rem;
  }

  button:hover{
    cursor: pointer;
  }

  .search-movie{
    width: 100%;
    padding: 10px;
    border: 1px solid #cacaca;
    border-radius: 25px;
    box-shadow: 0 0 10 0 #cacaca;
  }

  .inner-container{
    margin-top: 2vh;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 25px;
    grid-row-gap: 50px;
  }

  .movie-item img{
    width: 100%;
    max-height: 400px;
    width: auto; 
    margin: auto;
  }

  .movie-item{
    text-align: center;
    border: 1px solid #cacaca;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 0 0 20px 0 black;
  }
  .movie-item p{
    text-align: justify;
  }
</style>