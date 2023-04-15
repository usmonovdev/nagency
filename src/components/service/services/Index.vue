<template>
    <div class="service">
        <div class="title">
            <TitleName>
                Our Service
            </TitleName>
            <TitleInfo>
                What Can We Bring for You
            </TitleInfo>
        </div>
        <Service />
    </div>
</template>

<script>
import Service from "./Service.vue"
export default {
    name: "ServiceFirstIndex",
    components: { Service }   
}
</script>
<style lang="scss" scoped>
.service {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-align: center;
    }
}
</style>