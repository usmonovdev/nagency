<template>
    <div class="main">
        <form action="payload" method="get">
            <Input/>
            <div>
                <Input/>
                <Input placeholder="name"/>
            </div>
        </form>
    </div>
</template>

<script>
import Input from '@/ui-components/Input.vue';
export default {
    components: { Input }
}
</script>
<style lang="scss" scoped>
.main {
    width: 50%;
}
</style>