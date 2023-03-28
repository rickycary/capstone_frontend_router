<template>
    <h1>The Coffee Page</h1>
    <router-link to="/new">Add a Coffee</router-link>
    <div v-if="coffees.length">
        <ul>
          <li v-for="coffee in coffees" :key="coffee.id">
            <router-link :to="`/coffee/${coffee.id}`"><h1>{{ coffee.name }}</h1></router-link>
            <h2>{{ coffee.addOns }}</h2>
            <h2>{{ coffee.location }}</h2>
            </li>
        </ul>
      </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      coffees: []
    }
  },

  // Axios Method
  // axios.post('https://coffee-backend.onrender.com/coffee', {
  //   name: coffee.name,
  //   addOns: coffee.addOns,
  //   locations: coffee.location,
  // })

  mounted() {
    fetch('https://coffee-backend.onrender.com/coffee')
      .then(response => response.json())
      .then(data => {
        this.coffees = data.map(coffee => ({
          id: coffee._id,
          name: coffee.name,
          addOns: coffee.addOns,
          location: coffee.location,
        })
        );
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
</script>

<style scoped>

</style>