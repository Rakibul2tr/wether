let image = document.getElementById('image');
let tempars = document.getElementById('tempers');
 let cityname = document.getElementById('cityname');
 let contryname = document.getElementById('contryname');
 let clouds = document.getElementById('clouds');
const inputfield = document.getElementById('inputfield');
const row = document.getElementById('row')
document.getElementById('searchbtn').addEventListener('click',function(){
    const inputval = inputfield.value;

if(inputval== ''){
    document.getElementById('emtytext').innerText='Pleas give a City Name';
    
}
let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputval}&units=metric&appid=bdb7aeaacc760b848a0337acfc0218d7`
fetch(url)
.then(res => res.json())
.then(data => getdat(data))

getdat = elements=>{
    if (elements.cod == '404'){
        document.getElementById('emtytext').innerText=elements.message;
        
    }
    // console.log(elements.weather[0].icon);
    console.log(elements.sys.country);
    const url = `http://openweathermap.org/img/wn/${elements.weather[0].icon}@2x.png`
    console.log(url);
    image.setAttribute('src',url);
    cityname.innerText=elements.name
    contryname.innerText=elements.sys.country
    tempars.innerText=elements.main.temp
    clouds.innerText=elements.weather[0].main
}
inputfield.value = '';
document.getElementById('emtytext').innerText='';
})
