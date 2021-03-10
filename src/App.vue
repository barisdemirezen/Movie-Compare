<template>
  <div>
    <div class="navbar">
      <ul>
        <li><router-link class="link" to='/'>Home</router-link></li>
        <li><router-link class="link" to="/compare">Film Basket</router-link></li>
        <li class="link basket">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
          <div>{{listItems.length}}</div>
        </li>
      </ul>
    </div>
    <div class="container">
      <router-view @addtolist="addtolist" :movies="listItems"></router-view>
    </div>
  </div>
</template>
<script>

export default {
  components: {},
  data(){
    return {
      listItems : [],
    }
  },
  methods: {
    addtolist (value) {
      console.log("App vue: " + value);
      for(let i = 0; i <= this.listItems.length; i++)
      {
        if(!this.listItems.includes(value))
        {
          this.listItems.push(value);
        }
      }
    }
  },
}
</script>
<style>
  body, html{
    margin: 0;
    overflow-x: hidden;
  }
  div{
    font-family: 'Poppins';
    margin: 0;

  }
  .navbar {
    background: #2f1884;
    width: 100vw;
    margin-bottom: 2vh;
  }
  .navbar ul{
    display: flex;
    align-items: center;
    list-style: none;
    padding: 20px 0px;
    margin: 0;
  }
  .link{
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 20px;
  }
  .container{
    width: 80vw;
    margin: auto;
  }
  .basket {
    margin-left: auto;
    margin-right: 3vw;
    
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .basket div{
    font-size: 1.5rem;
    padding: 0 15px;
  }
  .basket svg{
    width: 2vw;
  }
  .basket:hover{
    cursor: pointer;
  }
</style>