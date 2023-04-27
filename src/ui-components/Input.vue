<template>
    <input type="text">
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
input {
    width: 100%;
    height: 47px;
    border: 1px solid #EDEDED;
    outline: none;
    padding: 20px;
    font-weight: 600;
    font-size: 14px;
    color: var(--greyscale--grey);
    &::placeholder {
        font-weight: 400;
    }
}
</style>