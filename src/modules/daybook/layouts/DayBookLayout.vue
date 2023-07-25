<template>
    <Navbar />
    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <RouterView />
        </div>
    </div>
</template>

<script>
// Hacer las importaciones con el defineAsyncComponent
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router';

export default {
    components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue"))
    }
}
</script>