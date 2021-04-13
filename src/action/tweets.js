import axios from "axios";

export const getTweets =async(maxId,screenName)=>{
    console.log(maxId,screenName)
    try {
const response =await axios.get(`http://localhost:2000/${screenName}`,{params:{
    max_id:maxId,
    screen_name:screenName
}});

return response.data;
        
    } catch (error) {
        console.log(error);
    }
}