/**
 * Created by Micheal Xiao on 2017/11/16.
 */
import axios from "axios"
import {DefaultData} from "@/utils/fetch"

export function GetFaceSetDetail() {
    let formData = new DefaultData();
    // formData.append("api_key", "IPsGmy_z_Am7HLpkCidE66V3YhorqMV-")
    formData.append("faceset_token", "85d70adc84c110dff0acba75cea40d84")

    return axios({
        method: 'post',
        url: 'https://api-cn.faceplusplus.com/facepp/v3/faceset/getdetail',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
    }).then((response)=>{
        console.log("获取集合detail接口")
        console.log(response)
        return response
    })
}
