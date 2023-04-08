<template>
    <div class="home-right">
        <div class="team">
            <div v-for="data in team">
                <img :src="data.photo" :alt="data.name">
            </div>
        </div>
    </div>
</template>

<script>
import Albert from "@/assets/image/man-4.png"
import Samuel from "@/assets/image/man-6.png"
import Arthur from "@/assets/image/man-3.png"
import Henry from "@/assets/image/man-1.png"
import Lucas from "@/assets/image/man-2.png"
import Isabella from "@/assets/image/man-5.png"
export default {
    name: "Right",
    data() {
        return {
            team: [
                {
                    name: "Albert William",
                    profession: "Project Manager",
                    photo: `${Albert}`
                },
                {
                    name: "Samuel",
                    profession: "Mobile Developer",
                    photo: `${Samuel}`
                },
                {
                    name: "Arthur",
                    profession: "Web Developer",
                    photo: `${Arthur}`
                },
                {
                    name: "Henry",
                    profession: "Senior Web Developer",
                    photo: `${Henry}`
                },
                {
                    name: "Lucas",
                    profession: "Senior Mobile Developer",
                    photo: `${Lucas}`
                },
                {
                    name: "Isabella",
                    profession: "Senior Web Designer",
                    photo: `${Isabella}`
                },
            ]
        }
    },
    mounted() {
        console.log(this.team);
    },
}
</script>

<style lang="scss" scoped>
    .home-right {
        width: 50%;
        height: 500px;
        @media screen and (max-width: 992px) {
            display: none;
        }
        .team {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            img {
                width: 190px;
            }
        }
    }
</style>