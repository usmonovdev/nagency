<template>
    <div class="contact-box">
        <p>Contact us</p>
        <h1>We help you to grow your <br> business faster & easier.</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididun.</h3>
        <PinkButton>
            Contact Us
        </PinkButton>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .contact-box {
        width: 100%;
        position: relative;
        height: fit-content;
        background-color: var(--main--blue);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        padding: 40px;
        border-radius: 32px;
        color: var(--main--white);
        overflow: hidden;
        &::before {
            content: "";
            width: 700px;
            height: 700px;
            position: absolute;
            top: -350px;
            right: -350px;
            opacity: 0.1;
            border-radius: 50%;
            border: 80px solid var(--main--white);
        }
        p {
            font-weight: 500;
            font-size: 18px;
            text-align: center;
        }
        h1 {
            font-weight: 600;
            font-size: 48px;
            line-height: 66px;
            text-align: center;
            @media screen and (max-width: 600px) {
                font-size: 32px;
                line-height: 52px;
            }
        }
        h3 {
            font-weight: 400;
            font-size: 18px;
            text-align: center;
            line-height: 32px;
        }
    }
</style>