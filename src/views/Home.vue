<template>
    <div id="main">
        <div id="left">
            <h1>My FFXIV character</h1>
            <h2>{{ character.Name }}</h2>
            <h3>Level {{ character.ActiveClassJob.Level }} {{ character.ActiveClassJob.UnlockedState.Name }}</h3>
            <div>
                <img alt="Picture of my character" id="portrait" :src="character.Portrait"/>
            </div>
        </div>
        <div id="right">    
            <ul v-if="jobs">
                <template v-for="job in jobs">
                    <li :key="job.JobID"><strong>{{ job.Name }}</strong>: {{ job.Level }}</li>    
                </template>
            </ul>
        </div>
        <!-- <div v-else>Not just yet&hellip;</div> -->
    </div>
</template>

<script>

// import Vue from 'vue'
import axios from 'axios'

// Vue.use(axios)

export default {
    created() {
        axios.get('https://xivapi.com/character/22655123?private_key=2864ae3e5f2f45ddb08406bc1976e2ebcbfa41f182564e0788be9fe72605a0b1')
        .then(function (response) {
            console.log(response.data.Character)
            this.character = response.data.Character
            console.log(this.character)
        })
        /* fetch('https://xivapi.com/character/22655123?private_key=2864ae3e5f2f45ddb08406bc1976e2ebcbfa41f182564e0788be9fe72605a0b1')
        .then((response) => response.json())
        .then((result) => {
            this.character = result
        }) */
    },
    data() {
        return {
            character: {},
            jobs: []
        }
    },
    name: 'Home',
    watch: {
        character() {
            this.jobs = this.character.ClassJobs
        }
    }
}
</script>

<style scoped>

#left, #right {
    text-align: left;
}

#main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    max-height: 100vh;
    width: 60vw;
}

#portrait {
    border-radius: 10px;
    max-height: 60vh;
}

li {
    line-height: 1.5em;
}

ul {
    background-color: lightblue;
    border-radius: 10px;
    list-style-type: none;
    margin: 0;
    padding: 10px;
}

</style>