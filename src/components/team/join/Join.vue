<template>
    <div class="main">
        <div class="title">
            <TitleName>Let’s Join us</TitleName>
            <TitleInfo>Available Position</TitleInfo>
        </div>
        <div class="positions-box">
            <div v-for="data in position" class="position">
                <img :src="data.photo" :alt="data.position">
                <div>
                    <h2>{{ data.position }}</h2>
                    <p>{{ data.type }} / {{ data.time }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import position from "@/data/positions"
export default {
    name: "TeamSecondIndex",
    data() {
        return {
            position: position
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: column;
    gap: 50px;
    .title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        @media screen and (max-width: 768px) {
            align-items: center;
        }
    }
    .positions-box {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: space-between;
        justify-items: center;
        gap: 20px;
        @media screen and (max-width: 992px) {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 40px;
        }
        .position {
            width: 80%;
            height: 90px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            border-radius: 10px;
            background-color: #FEF3F5;
            &:nth-child(even) {
                transform: rotate(2deg);
            }
            &:nth-child(odd) {
                transform: rotate(-2deg);
            }
            img {
                widows: 40px;
            }
            h2 {
                font-size: 20px;
                font-weight: 600;
                color: var(--greyscale--black);
                margin-bottom: 8px;
            }
            p {
                font-size: 14px;
                font-weight: 400;
                color: var(--greyscale--grey);
            }
            @media screen and (max-width: 1200px) {
                width: 100%;
            }
            @media screen and (max-width: 992px) {
                width: 90%;
            }
        }
    }
}
</style>