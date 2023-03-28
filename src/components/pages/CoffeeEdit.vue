<template>
    <div class="mainCoffee">
      <h1>Edit</h1>
      <form @submit.prevent="createCoffee">
          <label for="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            v-model="coffeeName"><br/>

          <label for="addOns">Add Ons:</label>
          <input 
            type="text" 
            name="addOns" 
            v-model="coffeeAddOns"><br/>

          <label for="location">Location:</label>
          <input 
            type="text" 
            name="location" 
            v-model="coffeeLocation"><br/>

        <button type="submit">Edit</button>
      </form>
    </div>
</template>

<script></script>