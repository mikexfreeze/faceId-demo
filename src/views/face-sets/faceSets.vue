<template>
    <div class="container">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="display_name"
                    label="集合名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="faceset_token"
                    label="集合token"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="tags"
                    label="标签">
            </el-table-column>
            <el-table-column
                    prop="outer_id"
                    label="outer_id">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {GetFaceSets} from "./faceSetsApi"
export default {
    created(){
        GetFaceSets()
            .then((response)=>{
                this.tableData = response.data.facesets
            })
    },
    data(){
        return{
            tableData:[]
        }
    }
}
</script>