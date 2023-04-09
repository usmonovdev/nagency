<template>
    <p>
       <slot></slot> 
    </p>
</template>
<script>
export default {
    name: "TitleName"
}
</script>
<style lang="scss" scoped>
p {
    color: var(--main--pink);
    font-size: 18px;
    font-weight: 500;
}
</style>