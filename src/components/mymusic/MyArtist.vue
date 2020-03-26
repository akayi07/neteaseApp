<template>
<section class="myartist">
    <header>
        <span class="singer">
            我的歌手（17） 
        </span>
    </header>
     <ul class="singerlists">
        <li>
            <img src = "../../assets/myMusic/bdr.jpg">
            <p>
                <span class="artist">Bandari</span> <span class="chinese">班得瑞</span><br>
                <span class="works">35个专辑</span>
            </p>
        </li>
        <li>
            <img src="../../assets/myMusic/daoko.png">
            <p>
                <span class="artist">Two Steps From Hell</span><br>
                <span class="works">35个专辑</span><span class="works">9个MV</span>
            </p>
        </li>
        <li>
            <img src="../../assets/myMusic/tsfh.jpg">
            <p>
                <span class="artist">DAOKO</span><br>
                <span class="works">22个专辑</span><span class="works">18个MV</span>
            </p>
        </li>
        <li>
            <img src="../../assets/myMusic/ラムジ.jpg">
            <p>
                <span class="artist">ラムジ</span> <span class="chinese">Lambsey</span><br>
                <span class="works">11个专辑</span><span class="works">7个MV</span>
            </p>
        </li>
    </ul>
</section>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.myartist {
    margin-bottom: 200px;
    header {
        border-bottom: 2px solid #C10D0C;
        padding-bottom: 8px;
        .singer {
            font-size: 24px;
        }
    }
    .singerlists {
        padding: 0;
        margin: 0;
        list-style: none;
        li {
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
            position: relative;
            p {
                display: inline-block;
                margin-left: 10px;
                position: absolute;
                bottom: 25px;
                
                .artist {
                    color: #333;
                    font-size: 16px;
                }
                .chinese {
                    color: #999;
                    font-size: 12px;
                }
                .works {
                    display: inline-block;
                    color: #666;
                    font-size: 12px;
                    margin-top: 12px;
                    margin-right: 20px;
                }
            }
        }
    }

}
</style>