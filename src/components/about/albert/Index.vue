<template>
    <div class="albert-page">
        <Left :albert="albert" />
        <Right :albert="albert" />
    </div>
</template>

<script>
import Albert from "@/assets/image/man-4.png"
import Left from "./Left.vue";
import Right from "./Right.vue";
export default {
    name: "AboutSecondIndex",
    data() {
        return {
            albert: [
                {
                    name: "Albert William",
                    photo: Albert,
                    profession: "Project Manager",
                    profession_full: "Project Manager / CEO",
                    big_text: "Maximize Your Reach with Marketing - Unlock Your Business's Growth Potential!",
                    small_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam, quis nostrud exercitation dolore magna"
                }
            ]
        };
    },
    mounted() {
        console.log(this.albert);
    },
    components: { Left, Right }
}
</script>

<style lang="scss" scoped>
.albert-page {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
</style>