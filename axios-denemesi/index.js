import getData from "./app.js";

getData(1).then((user,post)=>console.log(user,post))
.catch((e)=>console.log(e));