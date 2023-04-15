<template>
    <div>
        <div v-for="data in albert">
            <p>{{ data.name }}</p>
        </div>
    </div>
</template>

<script>
import Albert from "@/assets/image/man-4.png"
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
        }
    },
    mounted() {
        console.log(this.albert);
    }
}
</script>

<style lang="scss" scoped>
    
</style>