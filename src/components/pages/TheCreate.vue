<template>
    <div class="mainCoffee">
      <!-- Form to create a new coffee -->
      <h1>Add a New Coffee</h1>
      <form @submit.prevent="createCoffee">
        <!-- Coffee Name -->
          <label for="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            v-model="coffeeName"><br/>
        <!-- Coffee Add ons -->
          <label for="addOns">Add Ons:</label>
          <input 
            type="text" 
            name="addOns" 
            v-model="coffeeAddOns"><br/>
        <!-- Coffee Locations -->
          <label for="location">Location:</label>
          <input 
            type="text" 
            name="location" 
            v-model="coffeeLocation"><br/>
        <!-- Submit Button -->
        <button type="submit">Create</button>
      </form>
    </div>
</template>
  
<script>
// import axios from 'axios'

  export default {
  data() {
    return {
      coffeeName: '', coffeeAddOns: '', coffeeLocation: '', coffees: []
    }
  },
  methods: {
    createCoffee() {
      fetch('https://coffee-backend.onrender.com/coffee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.coffeeName,
          addOns: this.coffeeAddOns,
          location: this.coffeeLocation,
        })
      })
      .then(response => response.json())
      .then(data => {
        // Clears the form fields
        this.coffeeName = '';
        this.coffeeAddOns = '';
        this.coffeeLocation = '';
        
        this.coffees.push(data);
        // Redirect route back to coffee page
        this.$router.push('/coffee/');
      })
      .then((response) => {
          if (response.ok) {
        // Redirects route back to coffe page 
            this.$router.push(`/coffee/`);
          } else {
            throw new Error("Error creating coffee.");
          }
        })
    }
  }
}
</script>

<style>

</style>