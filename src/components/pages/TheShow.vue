<template>
    <div>
        <!-- SHOW Page -->
        <h1>The Show Page</h1>
        <div v-if="coffee">
            <h1>{{ coffee.name }}</h1>
            <h1>{{ coffee.addOns }}</h1>
            <h1>{{ coffee.location }}</h1>
        </div>
        <!-- Router link to EDIT Page -->
        <router-link :to="`/edit/${coffee._id}`"><button>Edit this Coffee</button></router-link>
        <br>
        <!-- Button to DELTETE Coffee -->
        <button @click="deleteCoffee">Delete this Coffee</button>
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