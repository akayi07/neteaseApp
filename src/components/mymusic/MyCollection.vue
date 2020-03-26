<template>
    <section class="mylovemusic">
        <header>
            <img src="../../assets/mycollection/欧美励志只有奋笔疾书，才能逆风前行.jpg">
            <div class="info">
                <p>欧美励志//只有奋笔疾书，才能逆风前行</p>
                <div class="userinfo">
                    <img src="../../assets/mycollection/sfde.jpg">
                    <span class="username">桑菲尔德L</span>
                    <span class="createdtime">2019-10-13 创建</span>
                </div>
            </div>
        </header>
        <section class="musicLists">
            <div class="top">
                <span class="headertitle">
                    歌曲列表
                </span>
                <span class="number">5首歌</span>
            </div>
            <table cellpadding="10px">
                <tr class="thead">
                    <th title="" width="54px"></th>
                    <th title="歌曲标题" width="280px">歌曲标题</th>
                    <th title="时长" width="85px">时长</th>
                    <th title="歌手" width="85px">歌手</th>
                    <th title="专辑" width="86px">专辑</th>
                </tr>
                <tr>
                    <td title="1" @click="bofang(0)" class="iconfont iconbofang">1</td>
                    <td title="carry you" @click="bofang(0)" class="bofang">carry you</td>
                    <td title="04:29">04:29</td>
                    <td title="Ruelle / Fleurie">Ruelle / Fleurie</td>
                    <td title="Carry You">Carry You</td>
                </tr>
                <tr>
                    <td title="2" @click="bofang(1)" class="iconfont iconbofang">2</td>
                    <td title="Famous" @click="bofang(1)" class="bofang">Famous</td>
                    <td title="03:43">03:43</td>
                    <td title="Ivy Adara">Ivy Adara</td>
                    <td title="Famous">Famous</td>
                </tr>
                <tr>
                    <td title="3" @click="bofang(2)" class="iconfont iconbofang">3</td>
                    <td title="Beautiful People (feat. Khalid)" @click="bofang(2)" class="bofang">Beautiful People (feat. Khalid)</td>
                    <td title="03:17">03:17</td>
                    <td title="Ed Sheeran / Khalid">Ed Sheeran / Khalid</td>
                    <td title="No.6 Collaborations Project">No.6 Collaborations Project</td>
                </tr>
                <tr>
                    <td title="4" @click="bofang(3)" class="iconfont iconbofang">4</td>
                    <td title="Out of This World" @click="bofang(3)" class="bofang">Out of This World</td>
                    <td title="04:11">04:11</td>
                    <td title="Emblem3">
                        Emblem3
                    </td>
                    <td title="Waking Up">Waking Up</td>
                </tr>
                <tr>
                    <td title="5" @click="bofang(4)" class="iconfont iconbofang">5</td>
                    <td title="Home (Blaze U Remix)" @click="bofang(4)" class="bofang">Home (Blaze U Remix)</td>
                    <td title="02:18">02:18</td>
                    <td title="ThimLife / Blaze U">ThimLife / Blaze U</td>
                    <td title="Home (Blaze U Remix)">Home (Blaze U Remix)</td>
                </tr>
            </table>
        </section>
    </section>
</template>
<script>
export default {
    data(){
        return {
            musicLists: [
                {imgsrc: require('../../assets/mycollection/carry you.jpg'), songsrc: require('../../assets/music/Carry You.mp3'), name: 'Carry You', artist: 'Ruelle / Fleurie'},
                {imgsrc: require('../../assets/mycollection/Famous.jpg'), songsrc: require('../../assets/music/Famous.mp3'), name: 'Famous', artist: 'Ivy Adara'},
                {imgsrc: require('../../assets/mycollection/Beautiful People (feat. Khalid).jpg'), songsrc: require('../../assets/music/Beautiful People (feat. Khalid).mp3'), name: 'Beautiful People (feat. Khalid)', artist: 'Ed Sheeran / Khalid'},
                {imgsrc: require('../../assets/mycollection/Out of This World.jpg'), songsrc: require('../../assets/music/Out of This World.mp3'), name: 'Out of This World', artist: 'Emblem3'},
                {imgsrc: require('../../assets/mycollection/Home (Blaze U Remix).jpg'), songsrc: require('../../assets/music/Home (Blaze U Remix).mp3'), name: 'Home (Blaze U Remix)', artist: 'ThimLife / Blaze U'}
            ]
        }
    },
    methods: {
        bofang(index){
            this.$root.autoplay = true;
            this.$root.imgSrc = this.musicLists[index].imgsrc;
            this.$root.songSrc = this.musicLists[index].songsrc;
            this.$root.name = this.musicLists[index].name;
            this.$root.artist = this.musicLists[index].artist;
        }
    }
}
</script>
<style lang="less" scoped>
.mylovemusic {
    header {
        height: 208px;
        margin-left: 20px;
        margin-bottom: 20px;
        img {
            width: 208px;
            height: 208px;
            float: left;
        }
        div.info{
            display: inline-block;
            margin-left: 20px;
            position: relative;
            bottom: 20px;
            p {
                font-size: 20px;
            }
            div.userinfo {
                img {
                    width: 30px;
                    height: 30px;
                }
                span {
                    height: 30px;
                    line-height: 30px;                  
                    margin-left: 12px;
                    font-size: 12px;
                }
                span.username {
                    color: #0c73c2;
                }
                span.createdtime { 
                    color: #999;
                }
            }
        }

    }
    .musicLists {
        width: 730px;
        position: relative;
        left: -20px;
        div.top {
            border-bottom: 2px solid #C10D0C;
            padding-bottom: 8px;
            position: relative;
            .headertitle {
                font-size: 20px;
                font-weight: normal;
                display: inline-block;
                margin-left: 12px;
            }
            .number {
                font-size: 12px;
                color: #666;
                margin-left: 20px;
            }
        }
        table {
            table-layout: fixed;
            width: 730px;
            color: #333;
            font-size: 12px;
            border-collapse: collapse;
            border: 1px solid #d9d9d9;
            margin-bottom: 100px;  
            tr.thead {
                border: 1px solid #d9d9d9;
                text-align: left;
                color: #666;
                th {
                    background: #f8f8f8;
                    border-bottom: 1px solid #ccc;
                } 
            }
            tr {
                td, th {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }       
            }
            tr:nth-child(even) { 
                background: #f8f8f8;  
            }
            .iconbofang, .bofang {
                cursor: pointer;
            }
            
        }
    }
}
</style>