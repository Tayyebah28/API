
let btn = document.querySelector("#btn");
btn.addEventListener('click', function(){
    let country = document.querySelector('#country').value;
    let res = fetch('http://api.weatherapi.com/v1/current.json?key=9fa56cb5bfd4410e8b7142903241912&q='+country);

res.then(function(test){
let r = test.json();
r.then(function(actualdata){
    console.log(actualdata);
    document.querySelector("#location").innerHTML = actualdata.location.name;
    document.querySelector("#temp").innerHTML = actualdata.current.temp_c;
    document.querySelector("#img").setAttribute('src', "https:" +actualdata.current.condition.icon);

})


console.log(test);
})


})

