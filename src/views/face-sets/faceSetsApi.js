/**
 * Created by Micheal Xiao on 2017/11/16.
 */
import axios from "axios"

export function GetFaceSets() {
    let formData = new FormData();
    formData.append("api_key", "IPsGmy_z_Am7HLpkCidE66V3YhorqMV-")
    formData.append("api_secret", "snuKyJhyogbgjP1h4tIZLg8r_vwgbI2v")

    return axios({
        method: 'post',
        url: 'https://api-cn.faceplusplus.com/facepp/v3/faceset/getfacesets',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
    }).then((response)=>{
        console.log("获取集合接口")
        console.log(response)
        return response
    })
}
