const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let buttonDom=document.querySelector(".btn-container");
let sectionDom=document.querySelector(".section-center")
console.log("deneme")

//gerekli butonlar eklendi.
addButton("All");
addButton("Korea");
addButton("Japan");
addButton("China");

//buton eklemeyi sağlayan fonksiyon.
function addButton(value){
  let btnTemp=document.createElement("btn");
  btnTemp.classList.add("btn","btn-outline-secondary","me-3");
  btnTemp.innerHTML=value;
  btnTemp.addEventListener("click",list_Product);
  buttonDom.appendChild(btnTemp);
}

//ürünleri eklemeyi sağlayan fonksiyon.
function productAdd(values){
  console.log("ürün ekleme");
  //ana div tanımlandı.
  let temp=document.createElement("div");
  temp.classList.add("col-6", "row","mt-2");
  //fotoğrafın gösterildiği div tanımlandı.
  let picture=document.createElement("div");
  picture.classList.add("col-3");
  //yemek başlığı ve bilgilerin bulunduğu div tanımlandı.
  let info=document.createElement("div");
  info.classList.add("col-9");
  //fotoğraf divinin içine eklenicek img tanımlandı ve gerekli atamalar yapıldı.
  let imgDom=document.createElement("img");
  imgDom.height=200 ;
  imgDom.src=values.img;
  imgDom.classList.add("w-100","float-start","border","border-4","border-dark","rounded-3")
  
  //info divi için başlık ve açıklama kısımları tanımlandı ve gerekli atamalar yapıldı.
  let titleDom=document.createElement("h3");
  titleDom.innerHTML=values.title;
  titleDom.classList.add("text-danger","border-bottom","border-dark");
  let span=document.createElement("span");
  span.classList.add("float-end");
  span.innerHTML=values.price;
  let pDom=document.createElement("p");
  pDom.innerHTML=values.desc;

  //Yapının hiyerarşisine göre section içerisi dolduruldu.
  titleDom.appendChild(span);
  picture.appendChild(imgDom);
  info.appendChild(titleDom);
  info.appendChild(pDom);
  temp.appendChild(picture);
  temp.appendChild(info);
  sectionDom.appendChild(temp);

}

//kategorilerine göre yeni menüler oluşturuldu.
const Korea_food = menu.filter(item=> item.category=="Korea");
console.log(Korea_food);
const Japan_food=menu.filter(item=>item.category=="Japan");
console.log(Japan_food);
const China_food=menu.filter(item=>item.category=="China");
console.log(China_food);


//tıklanan butonun innerHtml ine göre listelemeyi sağlar.
function list_Product(item){
  if(item.target.innerHTML=="Japan"){
    sectionDom.innerHTML="";
    
    for(let i=0;i<Japan_food.length;i++){
      productAdd(Japan_food[i]);
    }
  }

  if(item.target.innerHTML=="Korea"){
    sectionDom.innerHTML="";
    
    for(let i=0;i<Korea_food.length;i++){
      productAdd(Korea_food[i]);
    }
  }

  if(item.target.innerHTML=="China"){
    sectionDom.innerHTML="";
    
    for(let i=0;i<China_food.length;i++){
      productAdd(China_food[i]);
    }
  }

    if(item.target.innerHTML=="All"){
      sectionDom.innerHTML="";
      
      for(let i=0;i<menu.length;i++){
        productAdd(menu[i]);
      }
    }
}

//default olarak tüm menüyü listeler.
for(let i=0;i<menu.length;i++){
  productAdd(menu[i]);
}