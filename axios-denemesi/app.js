import axios from "axios";

async function getData(user_id){
    const { data : user } = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
    const { data : post } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);
    user.post=post

    return new Promise((resolve,reject)=>{
        resolve(user);
        reject("hata");
    })
}

export default getData;