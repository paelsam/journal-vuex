<template>
    <div 
        class="entry-container mb-3 pointer"
        @click="$router.push({ name: 'entry', params: { id: 10 } })">
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Agosto</span>
            <span class="mx-1 fw-light">2023, Martes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis maiores reprehenderit vel debitis
            dolore, soluta laudantium harum cupiditate impedit, nesciunt libero quasi illum! Est esse hic quae harum
            cupiditate!
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: gray, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 80%;
    }
}


</style>