<template>
    <div class="main">
        <div class="title">
            <TitleName>
                What They Says
            </TitleName>
            <TitleInfo>
                There are also many large companies that collaborate with us
            </TitleInfo>
        </div>
        <div class="comments">
            <div v-for="data in data" class="box">
                <div class="left">
                    <img :src="data.image" :alt="data.name">
                </div>
                <div class="right">
                    <h1>{{ data.title }}</h1>
                    <p>{{ data.info }}</p>
                    <div class="bottom">
                        <div>
                            <p>{{ data.name }}</p>
                            <h3>{{ data.profession }}</h3>
                        </div>
                        <img src="@/assets/image/they_says/Logo.png" alt="logo">
                    </div>
                </div>
            </div>
        </div>
        <div class="questions">
            <Left/>
            <Right/>
        </div>
    </div>
</template>

<script>
import data from "@/data/they_says"
import Left from "../../home/testimonals/questions/Left.vue";
import Right from "../../home/testimonals/questions/Right.vue";
export default {
    name: "TestimonialFirstIndex",
    components: {
        Left, Right
    },
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

.main {
    display: flex;
    flex-direction: column;
    gap: 60px;
    .title {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        @media screen and (max-width: 992px) {
            width: 100%;
        }
    }
    .comments {
        display: flex;
        flex-direction: row;
        min-width: 100%;
        overflow: scroll;
        gap: 100px;
        .box {
            width: 1000px;
            display: flex;
            flex-direction: row;
            gap: 45px;
            @media screen and (max-width: 600px) {
                flex-direction: column;
            }
            .left {
                // width: 100%;
                img {
                    width: 250px;
                    border-radius: 24px;
                }
            }
            .right {
                width: 300px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                @media screen and (max-width: 600px) {
                    width: 400px;
                }
                p {
                    font-weight: 400;
                    font-size: 18px;
                    color: var(--greyscale--grey);
                    margin-bottom: 20px;
                    @media screen and (max-width: 600px) {
                        font-size: 18px;
                    }
                }
                h1 {
                    font-weight: 600;
                    font-size: 32px;
                    color: var(--greyscale--black);
                    @media screen and (max-width: 600px) {
                        font-size: 24px;
                    }
                }
                .bottom {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    p {
                        font-weight: 500;
                        font-size: 16px;
                        color: var(--main--blue);
                        margin-bottom: 2px;
                    }
                    h3 {
                        font-weight: 400;
                        font-size: 14px;
                        color: var(--greyscale--grey);
                    }
                    img {
                        width: 170px;
                        height: fit-content;
                    }
                }
            }
        }
    }
    .questions {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        @media screen and (max-width: 1200px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }
    }
}
</style>