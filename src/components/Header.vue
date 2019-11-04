<template>
    <div class="header">
        <router-link class="navBtn" to="/" tag="div">Home</router-link>
        <router-link class="navBtn" to="/if-example" tag="div">If</router-link>
        <router-link class="navBtn" to="/for-example" tag="div">For</router-link>
        <router-link class="navBtn" to="/btn-example" tag="div">Button</router-link>
        <router-link class="navBtn" to="/btn-example-with-methods" tag="div">Button 2</router-link>
        <router-link class="navBtn" to="/component-example" tag="div">Component</router-link>
        <router-link class="navBtn" to="/router-example" tag="div">Router</router-link>
        <router-link class="navBtn" to="/tp" tag="div">TP</router-link>
    </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
    .header{
        background-color: var(--main-dark-bg-color);
        color: var(--txt-inverse-color);
        font-size: 16px;
        display: flex;
    }
    
    .navBtn{
        margin: 15px;
    }

    .navBtn:hover{
        cursor: pointer;
    }
</style>