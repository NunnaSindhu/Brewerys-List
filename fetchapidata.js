//Build the html Elements
document.body.innerHTML=`<div class="heading-container">
<h1>Brewerys List</h1>
<img src="https://static.thenounproject.com/png/1976045-200.png" alt="brew" class="icon" width="50px" height="50px" />
</div>
<div class="mainContainer">
    
</div>`;


const url="https://api.openbrewerydb.org/breweries";
const result=document.querySelector(".mainContainer");
const getData= async ()=>{
    try{
        const response= await fetch(url);
        const brewerys= await response.json();
      jsonData(brewerys);
}
catch(e){
    result.innerHTML =e;
  }}
  getData();
  function jsonData(brewerys){
    brewerys.forEach((obj)=>{
        result.innerHTML+=`
        <div class="container">
       <h4> Breweries Name:<span>${obj.name}</span></h4>
        <p> Breweries Type:<span>${obj.brewery_type} </span></p>
        <p> Breweries City:<span>${obj.city}</span></p>
        <p> Breweries State:<span>${obj.state}</span></p>
        <p> Breweries Country:<span>${obj.country}</span></p>
        <p> Breweries Website:<span>${obj.website_url}</span></p>
        <p> Breweries Phone:<span>${obj.phone}</span></p>
        </div>`
        
    });
}   