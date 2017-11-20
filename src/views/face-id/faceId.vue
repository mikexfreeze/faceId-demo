<template>
    <div class="container">
        <div class="row">
            <div v-for="face in facesData" class="col-4">
                <b-card
                        :img-src="'static/faces/'+ face.imgUrl"
                        img-alt="Img"
                        img-top>
                    <p class="card-text">
                        {{face.confidence}}
                    </p>
                    <div slot="footer">
                        <small class="text-muted"></small>
                    </div>
                </b-card>
            </div>
        </div>
        <div class="text-center">
            <el-upload
                    class="btn btn-primary"
                    action="https://api-cn.faceplusplus.com/facepp/v3/detect"
                    :show-file-list="false"
                    :data="apiKeyData"
                    :http-request="handleUpload"
                    :on-change="handleFileChange"
            >
                上传图片进行识别
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="text-center">

            <img v-if="imageUrl" :src="imageUrl" class="avatar">

            <!--<button type="file" @change="handleFileChange" class="btn btn-primary btn-lg">上传照片</button>-->
            <!--<input type="file" @change="fileChange" class="btn btn-primary btn-lg" />-->
            <!--<img src="..." class="rounded" alt="...">-->
        </div>
    </div>

</template>

<script>
    import axios from "axios"
    import Fetch from "@/utils/fetch"
    import {DefaultData} from "@/utils/fetch"
    export default {
        data(){
            return {
                apiKeyData:{
                    api_secret:"snuKyJhyogbgjP1h4tIZLg8r_vwgbI2v",
                    api_key:"IPsGmy_z_Am7HLpkCidE66V3YhorqMV-",
                },
                facesData:[
                    {
                        imgUrl:"AB-1.jpg",
                        faceToken:"479d7384b7e3ae629d39a6c3844cc13f",
                        confidence:0,
                    },
                    {
                        imgUrl:"TangYang-1.jpg",
                        faceToken:"84d831383d711bf7168ce709f7b6b04c",
                        confidence:0,
                    },
                    {
                        imgUrl:"DLRB-1.jpg",
                        faceToken:"23eeb87a2f8826b4dc463da569f70422",
                        confidence:0,
                    },
                ],
                imageUrl:'',
            }
        },
        methods:{
            handleUpload(data){
//                console.log(data.file)
            },
            handleFileChange(file){
                let formData = new DefaultData();
                formData.append("image_file", file.raw)
                formData.append("faceset_token", "85d70adc84c110dff0acba75cea40d84")
                axios({
                    method: 'post',
                    url: 'https://api-cn.faceplusplus.com/facepp/v3/search',
                    data: formData,
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then((response)=>{
                    let res = response.data.results
                    console.log("分析结果")
                    console.log(res)
                    for (let [index,value] of this.facesData.entries()){
                        for (let v of res){
                            if(value.faceToken === v.face_token){
                                this.facesData[index].confidence = v.confidence
                            }else{
                                this.facesData[index].confidence = 0
                            }
                        }
                    }

                    this.imageUrl = URL.createObjectURL(file.raw)

                })
            }
            
//            handleFileChange(file){
//                console.log(file)
//                let formData = new DefaultData();
//                formData.append("image_file", file.raw)
//                console.log(formData)
//                axios({
//                    method: 'post',
//                    url: 'https://api-cn.faceplusplus.com/facepp/v3/detect',
//                    data: formData,
//                    headers: {'Content-Type': 'multipart/form-data'}
//                }).then((response)=>{
//                    console.log(response)
//                })
//            }
        }
    }
</script>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        /*font-size: 28px;*/
        /*color: #8c939d;*/
        /*width: 178px;*/
        /*height: 178px;*/
        /*line-height: 178px;*/
        text-align: center;
    }
    .avatar {
        /*width: 178px;*/
        /*height: 178px;*/
        display: block;
        margin: 10px auto;
    }
</style>