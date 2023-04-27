<template>
    <div class="main">
        <form action="payload" method="get">
            <Input placeholder="Name"/>
            <div class="email-phone">
                <Input placeholder="Email"/>
                <Input placeholder="Phone"/>
            </div>
            <select>
                <option value="">Position applied for</option>
                <option :value="data.position" v-for="data in positions">{{ data.position }}</option>
            </select>
            <Input placeholder="Portfolio link"/>
            <div class="file">
                <p>Upload your CV</p>
                <label for="file">
                    <img src="@/assets/icon/Drop.svg" alt="drop">
                    <p>Drag and drop your file here <br> Or <span>browse files</span></p>
                </label>
                <Input id="file" type="file"/>
            </div>
            <BlueButton>Submit</BlueButton>
        </form>
    </div>
</template>

<script>
import positions from "@/data/positions"
import Input from '@/ui-components/Input.vue';
export default {
    components: { Input },
    data() {
        return {
            positions: positions
        }
    },
}
</script>
<style lang="scss" scoped>
.main {
    width: 50%;
    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
        .email-phone {
            display: flex;
            flex-direction: row;
            gap: 25px;
        }
        select {
            width: 100%;
            height: 47px;
            // border: 1px solid #EDEDED;
            outline: none;
            padding: 20px;
            font-weight: 600;
            font-size: 14px;
            // color: var(--greyscale--grey);
        }
        .file {
            p {
                margin-bottom: 10px;
                color: var(--greyscale--grey);
            }
            label {
                cursor: pointer;
                width: 100%;
                border: 1px solid #EDEDED;
                padding: 20px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                gap: 10px;
                p {
                    line-height: 30px;
                    span {
                        color: var(--main--blue);
                    }
                }
            }
            input {
                display: none;
            }
        }
    }
}
</style>