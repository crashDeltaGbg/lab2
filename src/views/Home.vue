<template>
    <div id="main"> 
        <div id="top">
            <h1>Polisen i Göteborg</h1>
        </div>  
        <div id="body">
            <div id="left">
                <h2>Händelser</h2>
                <dl v-if="events">
                    <template v-for="event in events">
                        <dt :key="event.datetime"><strong>{{ event.type }}</strong>:&nbsp;{{ event.datetime }}</dt>
                        <dd :key="event.id">{{ event.summary }}<br/>
                        <a :href="event.url" target="_blank">mer&hellip;</a></dd> 
                    </template>
                </dl>
            </div>
            <div id="right">
                <h2>Länkar</h2>
                <p><a href="https://polisen.se/utsatt-for-brott/polisanmalan/" target="_blank">Anmäl brott eller förlust</a></p>
                <p><a href="https://polisen.se/kontakt/tipsa-polisen/tipsa-polisen-via-webben/" target="_blank">Tipsa polisen</a></p>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    created() {
        axios.get('https://polisen.se/api/events?locationname=Göteborg')
        .then(response => {
            // console.log(response.data)
            this.events = response.data
            // console.log(this.events)
        })
        /* fetch('https://xivapi.com/character/22655123?private_key=2864ae3e5f2f45ddb08406bc1976e2ebcbfa41f182564e0788be9fe72605a0b1')
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            this.character = result.Character
        }) */
    },
    data() {
        return {
            events: {},
        }
    },
    name: 'Home',
    /* watch: {
        character() {
            this.jobs = this.character.ClassJobs
        }
    } */
}
</script>

<style scoped>

#body {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

#left, #right {
    flex-grow: 1;
}

#left, #right, #top {
    text-align: left;
}

#main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    max-height: 100vh;
    width: 90vw;
}

#portrait {
    border-radius: 10px;
    max-height: 40vh;
}

dd {
    background-color: aliceblue;
}

dt, dd {
    line-height: 2em;
    max-width: 40em;
}

dl {
    /* background-color: lightblue; */
    border-radius: 10px;
    list-style-type: none;
    margin: 0;
    padding: 10px;
}

</style>