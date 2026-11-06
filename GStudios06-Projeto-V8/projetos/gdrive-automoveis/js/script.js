const cars=[
{brand:"Volkswagen",model:"T-Cross Highline",year:2024,km:"28.400 km",gear:"Automático",price:129990,img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Volkswagen_T-Cross_IMG_4873.jpg"},
{brand:"Chevrolet",model:"Onix Premier",year:2023,km:"31.200 km",gear:"Automático",price:89990,img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Chevrolet_Onix_010.jpg"},
{brand:"Toyota",model:"Corolla XEi",year:2022,km:"42.800 km",gear:"Automático",price:119990,img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota_Corolla_IMG_6391.JPG"},
{brand:"Jeep",model:"Compass Longitude",year:2024,km:"18.700 km",gear:"Automático",price:149990,img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Jeep_Compass_101139.jpg"},
{brand:"Renault",model:"Duster Iconic",year:2024,km:"22.100 km",gear:"Automático",price:104990,img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Renault_Duster.jpg"},
{brand:"Volkswagen",model:"Polo Highline",year:2023,km:"26.900 km",gear:"Manual",price:79990,img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Volkswagen_polo.jpg"}
];
const list=document.querySelector("#cars"),empty=document.querySelector("#empty"),search=document.querySelector("#search"),brand=document.querySelector("#brand"),gear=document.querySelector("#gear"),max=document.querySelector("#maxPrice");
const money=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
function render(){
 const q=search.value.toLowerCase().trim(), b=brand.value,g=gear.value,m=Number(max.value||Infinity);
 const filtered=cars.filter(c=>(!q||(c.brand+" "+c.model).toLowerCase().includes(q))&&(!b||c.brand===b)&&(!g||c.gear===g)&&c.price<=m);
 list.innerHTML=filtered.map(c=>`<article class="car-card">
 <div class="car-photo"><img src="${c.img}" alt="${c.brand} ${c.model}" loading="lazy"><span class="car-year">${c.year}</span></div>
 <div class="car-body"><h3>${c.brand} ${c.model}</h3><div class="meta"><span>${c.km}</span><span>•</span><span>${c.gear}</span></div><div class="price">${money(c.price)}</div><button onclick="contactCar('${c.brand} ${c.model}')">Tenho interesse →</button></div>
 </article>`).join("");
 empty.style.display=filtered.length?"none":"block";
}
function contactCar(name){
 const msg=encodeURIComponent(`Olá! Vi o ${name} no site da GDrive Automóveis e gostaria de receber mais informações.`);
 window.open(`https://wa.me/5547991586945?text=${msg}`,"_blank")
}
[search,brand,gear,max].forEach(e=>e.addEventListener("input",render));render();
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
