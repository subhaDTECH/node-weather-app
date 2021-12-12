const submitBtn=document.getElementById("submitBtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");
const tarea=document.getElementById("textarea");
const suva=document.getElementById("suva");

const getInfo=async( event)=>{
    event.preventDefault();
    
    cityval=cityname.value;

    if(cityval==""){
        city_name.innerText="Plz Enter the city then search";
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=9435f8db7e19ccc6e44003f102c077e1`
            const response=await fetch(url);
            const data=await response.json();
            const arrdata=[data];
            // city_name.innerText=`${arrdata[0].name},${$arrdata[0].sys.country}`;
            temp.innerText=arrdata[0].main.temp+"  deg ";
            temp_status.innerText=arrdata[0].weather[0].main;
            suva.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
           
            console.log(data);
        }catch{
            city_name.innerText="Plz Enter city name properly";
        }
       
    }
}

submitBtn.addEventListener("click",getInfo);