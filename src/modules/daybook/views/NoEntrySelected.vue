<template>
    <div>
        <h1>
            No hay nada seleccionado
        </h1>
    </div>

    <Fab />
</template>


<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>

div {
    display: flex;
    justify-content: center;
    height: 100%;

    h1 {
        align-self: center;
    }
}


</style>