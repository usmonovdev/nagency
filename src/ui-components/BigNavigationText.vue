<template>
    <h1>
        <slot></slot>
    </h1>
</template>
<script>
export default {
    name: "BigNavigationText"
}
</script>
<style lang="scss" scoped>
    h1 {
        text-align: center;
        font-weight: 600;
        font-size: 60px;
        color: var(--greyscale--black);
        margin-bottom: 30px;
    }
</style>