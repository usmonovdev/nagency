<template>
    <div>
        <div class="title">
            <TitleName>
                What They Says
            </TitleName>
            <TitleInfo>
                There are also many large companies that collaborate with us
            </TitleInfo>
        </div>
    </div>
</template>

<script>
import data from "@/data/they_says"
export default {
    name: "TestimonialFirstIndex",
    data() {
        return {
            data: data
        }
    },
    mounted() {
        console.log(this.data);
    },
}
</script>

<style lang="scss" scoped>
.title {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 992px) {
        width: 100%;
    }
}
</style>