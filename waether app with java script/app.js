function getdata(){
    let input = document.getElementById('inpt').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=93258f273388f826e0f302b9b5b2a620`)
    .then(function(e){
        return e.json();
    }).then(function(w){
        let {main,sys,wind,weather}=w
        let {temp,humidity,pressure}=main
        let status = weather[0]["main"]
        let {speed}=wind
        console.log(weather)
        document.getElementById('temp').innerText=`${Math.floor(temp-273.15)}°C`
        document.getElementById('city').innerText=input
        document.getElementById('hum').innerText=humidity+"%"
        document.getElementById('win').innerText=speed+"km"
        let icon =document.getElementById('icon')
        if(status=="Rain"){
            icon.innerHTML=' <i class="fa-duotone fa-solid fa-sun fa-xl" style="--fa-primary-color: #ad8800; --fa-secondary-color: #ad8800;"></i>'
        }
        else if(status=="Smoke"){
             icon.innerHTML='<i class="fa-solid fa-cloud fa-xl" style="color: #74C0FC;"></i>'
        }
        else if(status=="clear"){
            icon.innerHTML='<i class="fa-solid fa-cloud-sun fa-xl" style="color: #292929;"></i>'
        }
           else{
            icon.innerHTML='<i class="fa-solid fa-sun fa-spin fa-2xl"></i>'
           }
    })
}