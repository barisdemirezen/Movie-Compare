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
    width: 80%;
    border: none;
    background: #2f1884;
    color: white;
    border-radius: 15px;
    font-size: 1.1rem;
    transition: 0.2s ease;
  }

  button:hover{
    cursor: pointer;
    background: #482ab4;
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