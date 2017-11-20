<template>
    <div class="container">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="index"
                    label="序号"
                    width="180">

            </el-table-column>
            <el-table-column
                    prop="faceset_token"
                    label="face-token"
                    width="180">
                <template slot-scope="scope">
                    {{scope.row}}
                </template>
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
import {GetFaceSetDetail} from "./faceSetManageApi"
export default {
    created(){
        GetFaceSetDetail()
            .then((response)=>{
                this.tableData = response.data.face_tokens
            })
    },
    data(){
        return{
            tableData:[]
        }
    }
}
</script>