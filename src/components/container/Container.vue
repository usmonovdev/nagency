<script>
    export default {
        name: "Container"
    }
</script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style>
    .container {
        width: 90vw;
        height: auto;
        margin: 0 auto;
    }
</style>