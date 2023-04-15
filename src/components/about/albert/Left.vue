<template>
    <div class="left">
        <div class="data" v-for="data in albert" :key="data.name">
            <img :src="data.photo" :alt="data.name">
            <div class="tooltip">
                <p class="name">{{ data.name }}</p>
                <p class="profession">{{ data.profession }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        albert: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 992px) {
        width: 100%;
    }
    .data {
        width: 328px;
        position: relative;
        display: flex;
        justify-content: center;
        transition: 100ms ease-out;
        box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.1);
        border-radius: 20px;
            &:hover {
                .tooltip {
                    display: flex;
                    transform: rotate(0deg);
                    transform: scale(1);
                    opacity: 1;
                }
            }
            img {
                width: 100%;
                border-radius: 20px;
                cursor: pointer;
            }
            .tooltip {
                transition: 400ms;
                width: 50%;
                padding: 12px 16px;
                background-color: var(--main--white);
                position: absolute;
                bottom: 20px;
                border-radius: 8px;
                display: flex;
                transform: scale(0.8);
                opacity: 0;
                align-items: center;
                flex-direction: column;
            .name {
                font-weight: 600;
                font-size: 14px;
                color: var(--greyscale--black);
                margin-bottom: 5px;
            }
            .profession {
                font-weight: 600;
                font-size: 14px;
                color: var(--greyscale--grey);
                white-space: nowrap;
            }
            &::before {
                content: "";
                width: 10px;
                height: 10px;
                background-color: var(--main--white);
                position: absolute;
                top: -5px;
                transform: rotate(45deg);
            }
        }
    }
}
</style>