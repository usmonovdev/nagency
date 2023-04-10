<template>
    <div class="service">
        <div class="border" v-for="service in services" :key="service.id">
            <img :src="service.photo" :alt="service.name">
            <h4>{{ service.name }}</h4>
            <p>{{ service.title }}</p>
            <div><span>Read More</span> <img src="@/assets/icon/arrow.svg" alt="arrow"></div>
        </div>
    </div>
</template>

<script>
import services from "@/data/services"
export default {
    data() {
        return {
            services: services
        }
    },
}
</script>

<style lang="scss" scoped>
.service {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }    
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }    
    .border {
        padding: 30px;
        border: 2px solid #E5EAF1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        transition: 200ms;
        img {
            width: 40px;
            margin-bottom: 10px;
        }
        h4 {
            font-weight: 600;
            font-size: 24px;
            color: var(--greyscale--black);
        }
        p {
            font-weight: 400;
            font-size: 18px;
            color: var(--greyscale--grey);
        }
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            span {
                color: var(--main--blue);
                font-size: 18px;
                font-weight: 400;
            }
            img {
                width: 24px;
                margin: 0;
            }
        }
        &:hover {
            background-color: #fff;
            border-color: #fff;
            box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.08);
        }
    }
}
</style>