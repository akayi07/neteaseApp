<template>
<div>
    <ul class="topMenu">
        <li @click="toPage('/discover')">推荐</li>
        <li @click="toPage('/toplist')">排行榜</li>
        <li @click="toPage('/playlist')">歌单</li>
        <li @click="toPage('/djradio')">主播电台</li>
        <li @click="toPage('/artist')">歌手</li>
        <li @click="toPage('/album')">新碟上架</li>
    </ul>
    <router-view></router-view>
</div> 
</template>
<script>
export default {
    methods: {
        toPage(receiver){
            this.$router.push(receiver);
            var a = document.getElementById(receiver);
            var b = document.getElementsByClassName('top');
            b.style.backgroundColor = '#c20c0c';
            a.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        }
    }
}
</script>
<style lang="less" scoped>
ul {
    margin: 0;
    background: #c20c0c;
    padding-left: 280px;
    li {
        vertical-align: middle;
        display: inline-block;
        border-radius: 25px;
        margin: 5px auto;
        padding: 3px 14px;
        margin-right: 70px;
        font-size: 12px;
        color: #fff;
    }
    li:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, .3);
    }
}
</style>