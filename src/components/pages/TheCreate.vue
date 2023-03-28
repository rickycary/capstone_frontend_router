<template>
    <div>
        <h1>Add a Coffee</h1>
        <form @submit.prevent="addCoffee">
            <!-- <label for="name">Name:</label> -->
            <input type="text" name="name" placeholder="Name of Coffee" v-model="coffeeName">
            <br>
            <!-- <label for="addOns">Add Ons: </label> -->
            <input type="text" name="addOns" placeholder="Add Ons" v-model="coffeeAddOns">
            <br>
            <!-- <label for="location">Location: </label> -->
            <input type="text" name="location" placeholder="Coffee Shop Name" v-model="coffeeLocation">
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>