<template>
<!--首页/推荐内容-->
    <el-container>
        <!--推荐内容正文-->
        <el-main>
            <section class="recommendation">
                <header>
                    <span>
                        热门推荐
                    </span>
                    <ul>
                        <li v-for="label in recLabels" :key="label.id">
                            <a :href="label.href">{{label.name}}</a>
                        </li>
                    </ul>
                </header>
            </section>
            <section class="newDisk">
            </section>
            <section class="rankingList">
            </section>
        </el-main>
        <!--推荐内容侧边栏-->
        <el-aside width="253px">
            Aside
        </el-aside>
    </el-container>
</template>
<script>
export default {
    data(){
        return {
            recLabels: [
                {id: '0', name: '华语', href: 'javascript:void(0)'},
                {id: '1', name: '流行', href: 'javascript:void(0)'},
                {id: '2', name: '摇滚', href: 'javascript:void(0)'},
                {id: '3', name: '民谣', href: 'javascript:void(0)'},
                {id: '4', name: '电子', href: 'javascript:void(0)'},
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .el-container {
        height: 1364.33px;

        .el-main {
            margin-left: 139.835px; 
            width: 730px;
            border: 1px solid #d3d3d3;
            height: 100%;
            header {
                list-style: none;
            }
        }
    
        .el-aside {
            margin-right: 139.835px;
            border: 1px solid #d3d3d3;
            height: 100%;
        }
    }
    
</style>