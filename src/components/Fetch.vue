<template>
    <div id="main">
        <h1>My FFXIV character</h1>
        <div v-if="character">
            <img alt="Picture of my character" id="portrait" :src="character.Character.Portrait"/>
            <h2>{{ character.Character.Name }}</h2>
            <h3>Level {{ character.Character.ActiveClassJob.Level }} {{ character.Character.ActiveClassJob.UnlockedState.Name }}</h3>
            <dl v-if="jobs">
                <template v-for="job in jobs">
                    <dt :key="job.JobID">{{ job.Name }}:</dt>
                    <dd :key="job.JobID">{{ job.Level }}</dd>
                </template>
            </dl>
        </div>
        <div v-else>Not just yet&hellip;</div>
    </div>
</template>

<script>
export default {
    /* computed: {
        sortJobs() {
            return this.jobs = this.character.Character.ClassJobs
            console.log(this.jobs)
            }
    }, */
    created() {
        fetch('https://xivapi.com/character/22655123?private_key=2864ae3e5f2f45ddb08406bc1976e2ebcbfa41f182564e0788be9fe72605a0b1')
        .then((response) => response.json())
        .then((result) => {
            this.character = result
            // console.log(this.character.Character.ClassJobs)
        })
    },
    data() {
        return {
            character: {},
            jobs: []
        }
    },
    name: 'Fetch',
    watch: {
        character() {
            this.jobs = this.character.Character.ClassJobs
        }
    }
}
</script>

<style scoped>
#main {
    margin: auto;
    max-width: 60vw;
    text-align: left;
}
#portrait {
    float: right;
    max-height: 60vh;
}

dt {
    font-weight: bold;
}
</style>