<template>
    <div class="main">
        <div class="box">
            <Left/>
            <Right/>
        </div>
    </div>
</template>

<script>
import Left from './Left.vue';
import Right from './Right.vue';

export default {
    name: "TeamThirdIndex",
    components: { Right, Left }
}
</script>
<style lang="scss" scoped>
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    .box {
        display: flex;
        flex-direction: row;
        gap: 30px;
        box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.08);
        border-radius: 10px;
        padding: 40px;
    }
}
</style>