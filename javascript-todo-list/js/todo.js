const addBtn = document.querySelector("#liveToastBtn")
const input = document.querySelector("#task")
const list = document.querySelector("#list")
const toastSucces = document.querySelector("#liveToast")
const toastUnSucces = document.querySelector("#liveToastErr")
let defaultLi = document.getElementsByTagName("li");


addBtn.addEventListener("click", newElement)
list.addEventListener("click", deleteElement)
list.addEventListener("click",checked)
let items=getStorage();

//sayfa içerisinin local storageden gelen bilgilerle dolmasını sağlar.
for (let i = 0; i < items.length; i++) {
    if (items[i] == null) {
        console.log("hatalı")
    } else {
        let li=document.createElement("li");
        li.innerHTML=items[i];
        let span = document.createElement("span");
        span.classList.add("close");
        span.innerHTML = "X";
        li.appendChild(span);
        list.appendChild(li);
        console.log("test");
        
    }
}

//list item içerisine item eklemeyi sağlar
function newElement(){
    if (input.value.trim()=="" || input.value.trim()==" "){
    $(".error").toast("show");
    }  
    else{
        let li=document.createElement("li");
        let span=document.createElement("span")
        li.innerHTML=input.value;
        span.innerHTML="X"
        span.classList.add("close");
        list.appendChild(li);
        li.appendChild(span);
        $(".success").toast("show"); 
        loadStorage(input.value);
        input.value=""
    }
}

//list item içerisinden item silmeyi sağlar.
function deleteElement(item){
    if(item.target.className=="close"){
        if(confirm("Are you Sure")){
            item.target.parentElement.remove();
            let deleteStr=item.target.parentElement.firstChild.textContent.trim();
            console.log(deleteStr);
            deleteStorage(deleteStr);
        }
    }
    
    
}

//tıklanan list itemin check yapılmasını yada kaldırılmasını sağlar.
function checked(item){
    item.target.classList.toggle("checked");

}

//local storageden eleman siler.
function deleteStorage(value){
    let values=getStorage();
    values.forEach((element,id) => {
        if(element==value){
            values.splice(id,1);
        }
        
    });
    localStorage.setItem("todo",JSON.stringify(values));
}

//local storage içerisine yeni eleman ekler.
function loadStorage(value){
    let values=getStorage()
    let temp;
    if(values==null){
        temp=[];
    }
    else{
        temp=[...values];
    }
    temp.push(value);
    localStorage.setItem("todo",JSON.stringify(temp));

}

//localstoragedeki değerleri döndürür.
function getStorage(){
    let values=JSON.parse(localStorage.getItem("todo"));
    return values;
}