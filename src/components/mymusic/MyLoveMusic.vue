<template>
    <section class="mylovemusic">
        <header>
            <img src="../../assets/myMusic/favoratel.jpg">
            <div class="info">
                <p>我喜欢的音乐</p>
                <div class="userinfo">
                    <img src="../../assets/avatar.png">
                    <span class="username">username</span>
                    <span class="createdtime">2015-02-17 创建</span>
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
                    <td title="DEJA VU Wek (EXTENDED MIX)" @click="bofang(0)" class="bofang">DEJA VU Wek (EXTENDED MIX)</td>
                    <td title="04:22">04:22</td>
                    <td title="Dave Rodgers">Dave Rodgers</td>
                    <td title="DEJA VU">DEJA VU</td>
                </tr>
                <tr>
                    <td title="2" @click="bofang(1)" class="iconfont iconbofang">2</td>
                    <td title="Sound of Silence" @click="bofang(1)" class="bofang">Sound of Silence</td>
                    <td title="03:04">03:04</td>
                    <td title="Paul Simon">Paul Simon</td>
                    <td title="The Paul Simon Songbook">The Paul Simon Songbook</td>
                </tr>
                <tr>
                    <td title="3" @click="bofang(2)" class="iconfont iconbofang">3</td>
                    <td title="Resuscitated Hope" @click="bofang(2)" class="bofang">Resuscitated Hope</td>
                    <td title="04:57">04:57</td>
                    <td title="コミネリサ">コミネリサ</td>
                    <td title="Resuscitated Hope/unity">Resuscitated Hope/unity</td>
                </tr>
                <tr>
                    <td title="4" @click="bofang(3)" class="iconfont iconbofang">4</td>
                    <td title="L'Internationale" @click="bofang(3)" class="bofang">L'Internationale</td>
                    <td title="03:50">03:50</td>
                    <td title="State Russian Academic Orchestra / State Russian Academic Choir">
                        State Russian Academic Orchestra / State Russian Academic Choir
                    </td>
                    <td title="An Anthology of Soviet Songs">An Anthology of Soviet Songs</td>
                </tr>
                <tr>
                    <td title="5" @click="bofang(4)" class="iconfont iconbofang">5</td>
                    <td title="American Pie" @click="bofang(4)" class="bofang">American Pie</td>
                    <td title="08:33">08:33</td>
                    <td title="Don McLean">Don McLean</td>
                    <td title="American Pie">American Pie</td>
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
                {imgsrc: require('../../assets/myMusic/DEJA VU.jpg'), songsrc: require('../../assets/music/DEJA VU.mp3'), name: 'DEJA VU Wek (EXTENDED MIX)', artist: 'Dave Rodgers'},
                {imgsrc: require('../../assets/myMusic/Sound of Silence.jpg'), songsrc: require('../../assets/music/Sound of Silence.mp3'), name: 'Sound of Silence', artist: 'Paul Simon'},
                {imgsrc: require('../../assets/myMusic/Resuscitated Hope.jpg'), songsrc: require('../../assets/music/Resuscitated Hope.mp3'), name: 'Resuscitated Hope', artist: 'コミネリサ'},
                {imgsrc: require('../../assets/myMusic/L\'Internationale.jpg'), songsrc: require('../../assets/music/L\'Internationale.mp3'), name: 'L\'Internationale', artist: 'State Russian Academic Orchestra / State Russian Academic Choir'},
                {imgsrc: require('../../assets/myMusic/American Pie.jpg'), songsrc: require('../../assets/music/American Pie.mp3'), name: 'American Pie', artist: 'Don McLean'}
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