<template>
    <div class="nav">
        <div class="logo"><img src="@/assets/home/logo.png" alt=""></div>
        <ul>
            <router-link to="/home" class="li" style="text-decoration: none;">首页</router-link>
            <router-link to="/medieco" class="li" style="text-decoration: none;">医咖会</router-link>
        </ul>
        <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
ul a li {
    list-style:none;
}
ul a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
html {
    font-family: sans-serif;
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html, body, #app {
    padding: 0;
    margin: 0;
    min-width: 100%;
    min-height: 100%;
}

.nav {
    width:1180px;
    height:51px;
    line-height:51px;
    margin-left: 20px;
    padding-left: 30px;
}
.nav ul {
    float: right;
    line-height:51px;
    padding-right:200px;
}
.nav ul .li{
    float: left;
    padding-right:70px;
    color:#fff;
    cursor: pointer;
    font-size: 20px;
}
.nav .logo {
    float:left;
    width:143px;
    height:46px;
}
.nav .logo img {
    width: 100%;
    height: 100%;
}
</style>