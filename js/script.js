// Your JS code here
//Selecting Elements

var subTypeElement=document.querySelector("#subscription");
var subDurationElement=document.querSelector("#months");
var result=document.querSelector(".result");
var subType="basic";
var subDuration=1;

//Creating Change Event Listeners
subTypeElement.addEventListener("change", function(e){

    subType = e.target.value;
    console.log*(subType);

} );