<template>
    <div class="data-box">
        <div v-for="data in projects" :key="data.id" class="project">
            <h1>{{ data.number }}</h1>
            <h2>{{ data.title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutThirdIndex",
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "Complate Projects",
                    number: 320
                },
                {
                    id: 2,
                    title: "Cooperation company",
                    number: 25
                },
                {
                    id: 3,
                    title: "Happy Clients",
                    number: 120
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.data-box {
    width: 100%;
    height: 250px;
    background-color: #FEF3F5;
    border-radius: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 60px;
        height: fit-content;
        padding: 50px 0;
    }
    .project {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
        h1 {
            font-weight: 600;
            font-size: 48px;
            color: var(--greyscale--black);
        }
        h2 {
            font-weight: 400;
            font-size: 18px;
            color: var(--greyscale--grey);
        }
    }
}
</style>