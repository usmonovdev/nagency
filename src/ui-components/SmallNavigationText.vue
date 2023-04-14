<template>
    <p>
        <slot></slot>
    </p>
</template>
<script>
export default {
    name: "SmallNavigationText"
}
</script>
<style lang="scss" scoped>
    p {
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: var(--greyscale--grey);
    }
</style>