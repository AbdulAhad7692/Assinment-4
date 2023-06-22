var cars={
    honda: {
        civic:{
            picture:'./images/honda/civic.jpg',
            model:'Honda Civic',
            state:'New',
            price:'PKR 860000'
        },
        city: {
            picture:'./images/honda/city.jpg',
            model:'Honda City',
            state:'New',
            price:'PKR 59,79ooo'
        },
        accord: {
            picture:'./images/honda/accord.jpg',
            model:'Honda Accord',
            state:'New',
            price:'PKR 1,55,00,000'
        },
        hrv: {
            picture:'./images/honda/HR-V suvs.jpg',
            model:'Honda HR-V',
            state:'New',
            price:'PKR 79,00,000'
        },
        crv: {
            picture:'./images/honda/CR-V suvs.jpg',
            model:'Honda CR-V',
            state:'New',
            price:'10,700,000'
        },
        pilot: {
            picture:'./images/honda/Pilot suvs.jpg',
            model:'Honda Pilot',
            state:'New',
            price:'61,29,000'
        }
    },
    toyota: {
       corolla: {
        picture:'./images/toyota/corolla.jpg',
        model:'Touota Corolla',
        state:'New',
        price:'77,99,000'
       },
       camry: {
        picture:'./images/toyota/camry.jpg',
        model:'Touota camry',
        state:'New',
        price:'5,38,59,000'
       },
       legender: {
        picture:'./images/toyota/legender suvs.jpg',
        model:'Touota Legender',
        state:'New',
        price:'2,10,89,000'
       },
       prius: {
        picture:'./images/toyota/prius.jpg',
        model:'Touota Prius',
        state:'New',
        price:'1,50,00,000'
       },
       suvs4runner: {
        picture:'./images/toyota/suvs 4runner.jpg',
        model:'Touota 4runner',
        state:'New',
        price:'1,42,69,950'
       },
       landcruiser: {
        picture:'./images/toyota/suvs land cruiser.jpg',
        model:'Toyota Lan Cruiser',
        state:'New',
        price:'130,000,000'
       }

    },
    suzuki: {
        cultus: {
            picture:'./images/suzuki/cultus.jpg',
            model:'Suzuki Cultus',
            state:'New',
            price:' 3,718,000'
        },
        grandvitara: {
            picture:'./images/suzuki/grand vitara.jpg',
            model:'Suzuki Grand Vitara',
            state:'New',
            price:'4,195,000'
        },
        jimnysuvs: {
            picture:'./images/suzuki/jimmy suvs.jpg',
            model:'Suzuki Jimny',
            state:'New',
            price:'3,990,000'
        },
        swift: {
            picture:'./images/suzuki/swift.jpg',
            model:'Suzuki Swift',
            state:'New',
            price:'4,256,000'
        },
        vitara: {
            picture:'./images/suzuki/vitara suvs.jpg',
            model:'Suzuki Vitara',
            state:'New',
            price:'4,195,000'
        },
        wagonr: {
            picture:'./images/suzuki/wagonr.jpg',
            model:'Suzuki Wagon r',
            state:'New',
            price:'3,214,000'
        }
    },
    kia: {
        forde: {
            picture:'./images/kia/Forde.jpg',
            model:'Kia Forte',
            state:'New',
            price:'5,515,670'
        },
        optima: {
            picture:'./images/kia/optima.jpg',
            model:'Kia Optima',
            state:'New',
            price:' 1,05,00000'
        },
        sorento: {
            picture:'./images/kia/sorento suvs.jpg',
            model:'Kia Sorento',
            state:'New',
            price:'10,400,000'
        },
        sportage: {
            picture:'./images/kia/sportage suvs.jpg',
            model:'Kia Sportage',
            state:'New',
            price:'7,050,000'
        },
        stinger: {
            picture:'./images/kia/stinger.jpg',
            model:'Kia Stinger',
            state:'New',
            price:'57,000,000'
        },
        telloride: {
            picture:'./images/kia/telluride suvs.png',
            model:'New',
            state:'Kia Telloride',
            price:'10,550,700'
        }
    },
    hyundai: {
        elantra:{
            picture:'./images/hyundai/Elantra.jpg',
            model:'New',
            state:'Hyundai Elantra',
            price:'7,130,000'
        },
        i30:{
            picture:'./images/hyundai/i30.jpg',
            model:'New',
            state:'Hyundai i30',
            price:' 4,104,000'
        },
        palisade:{
            picture:'./images/hyundai/palisade suvs.jpg',
            model:'New',
            state:'Hyundai Palisade',
            price:'13,782,100'
        },
        santa:{
            picture:'./images/hyundai/santa suvs.jpg',
            model:'New',
            state:'Hyundai Santa',
            price:' 18,500,000'
        },
        sonata:{
            picture:'./images/hyundai/sonata.jpg',
            model:'New',
            state:'Hyundai Sonata',
            price:' 10,329,000'
        },
        tucson:{
            picture:'./images/hyundai/Tucson suvs.jpg',
            model:'New',
            state:'Hyundai Tucson',
            price:' 8,230,000'
        }
    
    }
    
}
var body = document.querySelector('.details');
for(var key in cars){
    
    for(var key2 in cars[key]){
        var price=cars[key][key2].price;
        var model=cars[key][key2].model;
        var state=cars[key][key2].state;
        var picture=cars[key][key2].picture;

var a =` <div class="card">  
<img class="img" width="" src="${picture}" alt="">
<div class="text1"> 
<p class="card-text">Model : ${model}</p>
<p class="card-text">State : ${state}</p>
<p class="card-text">Price : ${price}</p>
<div class="btn2">`
body.innerHTML+=a

    }
}
var hon = document.getElementById('honda');
var toyo = document.getElementById('toyota');
var suz =document.getElementById('suzuki');
var ki = document.getElementById('kia');
var hyun = document.getElementById('hyundai');

for(var key in cars){
    console.log(key)
}
hon.addEventListener('click',function(){
    let hondaCars=cars.honda;
    body.innerHTML=''
    for(var key in hondaCars){

        model=hondaCars[key].model;
        state=hondaCars[key].state;
        price=hondaCars[key].price;
        picture=hondaCars[key].picture; 

        a =` <div class="card">  
<img class="img" width="" src="${picture}" alt="">
<div class="text1"> 
<p class="card-text">Model : ${model}</p>
<p class="card-text">State : ${state}</p>
<p class="card-text">Price : ${price}</p>`
console.log(a)
body.innerHTML+=a
    }
})
toyo.addEventListener('click',function(){
    let toyotacars=cars.toyota
    body.innerHTML=''

    for(var key in toyotacars){
      model=toyotacars[key].model;
      state=toyotacars[key].state;
      picture=toyotacars[key].picture;
      price=toyotacars[key].price;


     a =`<div class="card">  
     <img class="img" width="" src="${picture}" alt="">
     <div class="text1"> 
     <p class="card-text">Model : ${model}</p>
     <p class="card-text">State : ${state}</p>
     <p class="card-text">Price : ${price}</p>`
     console.log(a)
     body.innerHTML+=a
      
    }
})
suz.addEventListener('click',function(){
    let suzukicars=cars.suzuki;
    body.innerHTML=''

    for(var key in suzukicars){
        model=suzukicars[key].model;
        state=suzukicars[key].state;
        picture=suzukicars[key].picture;
        price=suzukicars[key].price;

        a =`<div class="card">  
        <img class="img" width="" src="${picture}" alt="">
        <div class="text1"> 
        <p class="card-text">Model : ${model}</p>
        <p class="card-text">State : ${state}</p>
        <p class="card-text">Price : ${price}</p>`
        console.log(a)
        body.innerHTML+=a
    }
})
ki.addEventListener('click',function(){
    let kiacars=cars.kia;
    body.innerHTML=''

    for(var key in kiacars){
        model=kiacars[key].model;
        state=kiacars[key].state;
        picture=kiacars[key].picture;
        price=kiacars[key].price;

        a = `<div class="card">  
        <img class="img" width="" src="${picture}" alt="">
        <div class="text1"> 
        <p class="card-text">Model : ${model}</p>
        <p class="card-text">State : ${state}</p>
        <p class="card-text">Price : ${price}</p>`
        console.log(a)
        body.innerHTML+=a
    }
})
hyun.addEventListener('click',function(){
    let hyundaicars=cars.hyundai;
    body.innerHTML=''

    for(var key in hyundaicars){
        model=hyundaicars[key].model;
        state=hyundaicars[key].state;
        picture=hyundaicars[key].picture;
        price=hyundaicars[key].price;

        a = `<div class="card">  
        <img class="img" width="" src="${picture}" alt="">
        <div class="text1"> 
        <p class="card-text">Model : ${model}</p>
        <p class="card-text">State : ${state}</p>
        <p class="card-text">Price : ${price}</p>`
        console.log(a)
        body.innerHTML+=a
    }
})