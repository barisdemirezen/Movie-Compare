<template>
  <div>
    <div class="navbar">
      <ul>
        <li><router-link class="link" to='/'>Home</router-link></li>
        <li><router-link class="link" to="/compare">Film Basket</router-link></li>
        <li class="link basket">Basket: {{listItems.length}}</li>
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
  }
</style>