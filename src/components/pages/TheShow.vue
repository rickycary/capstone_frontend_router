<template>
    <div class="mainShow">
        <!-- SHOW Page -->
        <h1 class="text">The Show Page</h1>
        <div v-if="coffee">
            <h1 class="text">{{ coffee.name }}</h1>
            <h1 class="text">{{ coffee.addOns }}</h1>
            <h1 class="text">{{ coffee.location }}</h1>
        </div>
        <!-- Router link to EDIT Page -->
        <div class="button">
        <router-link :to="`/edit/${coffee._id}`"><button class="text">Edit this Coffee</button></router-link>
        <!-- Button to DELTETE Coffee -->
        <button @click="deleteCoffee" class="text">Delete this Coffee</button>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'coffeeShowPage',
    data() {
        return {
            coffee: null
        };
    },
    // Pulls data for show page
    created() {
        const id = this.$route.params.id;
        fetch(`https://coffee-backend.onrender.com/coffee/${id}`)
        .then(response => response.json())
        .then(data => {
            this.coffee = data;
        })
    },
    // Delete Coffee Route
    methods: {
        deleteCoffee() {
            const id = this.$route.params.id;
            // Message to delete the coffee from your current list
            if (confirm("Are you sure you want to delete this coffee from your list?")) {
                fetch(`https://coffee-backend.onrender.com/coffee/${id}`, {
                    method: 'DELETE'
                })
                // Redirects to main Coffee page after DELETE
                .then(response => {
                    if (response.ok) {
                        this.$router.push("/coffee/");
                    } else {
                        throw new Error("Error");
                    }
                })
            }
        }
    }
}
</script>


<style>

a {
  text-align: center;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 3px solid #1a037e;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

.mainShow {
    margin: 5px;
    padding: 3px;
    border-radius: 4px;
    font-size: 18px;
}

</style>