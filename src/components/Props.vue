<template>
    <div v-if="show">
        <img alt="Volvo Amazon - polisbil" src="../assets/polisbil.png"/>
    </div>
    <div v-else>
        <input @click="wtf()" type="button" value="wtf?"/>
    </div>
</template>

<script>

export default {
    data() {
        return {
            show: this.init
        }
    },
    name: 'Props',
    methods: {
        wtf() {
            this.show = true
        }
    },
    props: ['init']
}

</script>