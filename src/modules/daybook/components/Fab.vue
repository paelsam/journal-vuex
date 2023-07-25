<template>
    <button class="btn btn-primary">
        <li class="fa fa-2x"
        :class="icon"></li>
    </button>
</template>

<script>
export default {
    name: 'Fab',
    props: {
        icon: {
            type: String,
            required: false,
            default: 'fa-plus'
        }
    },
}
</script>

<style lang="scss" scoped>
button {
    border-radius: 100%;
    bottom: 20px;
    height: 5rem;
    position: fixed;
    right: 20px;
    width: 5rem;
}
</style>