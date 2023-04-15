<template>
    <div class="right" v-for="data in albert" :key="data.name">
        <h2>"{{ data.big_text }}"</h2>
        <h3>{{ data.small_text }}</h3>
        <h4>{{ data.name }}</h4>
        <p>{{ data.profession_full }}</p>
    </div>
</template>

<script>

export default {
    props: {
        albert: {
            type: Array,
            required: true
        }
    },
    mounted() {
        console.log(this.albert, "asd");
    },
}
</script>
<style lang="scss" scoped>
.right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 992px) {
        width: 100%;
    }
    h2 {
        font-weight: 600;
        font-size: 48px;
        line-height: 66px;
        color: var(--greyscale--black);
        @media screen and (max-width: 600px) {
            font-size: 32px;
            line-height: 52px;
        }
    }
    h3 {
        font-weight: 400;
        font-size: 18px;
        color: var(--greyscale--grey);
        line-height: 32px;
    }
    h4 {
        font-size: 24px;
        line-height: 35px;
        font-weight: 600;
        color: var(--main--blue);
    }
    p {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: var(--greyscale--grey);
    }
}
</style>