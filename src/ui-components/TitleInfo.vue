<template>
    <h2>
        <slot></slot>
    </h2>
</template>
<script>
export default {
    name: "TitleInfo"
}
</script>
<style lang="scss" scoped>
h2 {
    font-weight: 600;
    font-size: 48px;
    color: var(--greyscale-black);
    @media screen and (max-width: 600px) {
      font-size: 32px;
    }
}
</style>