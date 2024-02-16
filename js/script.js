// Your JS code here
//Selecting Elements

var subTypeElement=document.querySelector("#subscription");
var subDurationElement=document.querySelector("#months");
var result=document.querySelector(".result");
var subType="basic";
var subDuration=1;

//Creating Change Event Listeners
subTypeElement.addEventListener("change", function(e){

    subType = e.target.value;
    updateSubscriptionDiv();

} );
subDurationElement.addEventListener("change", function(e){
    subDuration=Number(e.target.value);
    updateSubscriptionDiv();
});
//Using a Function to Calculate the Cost

var  updateSubscriptionDiv= function(){
    var monthlyCost= 5;
    if (subType==="standard"){
        monthlyCost= 7;

    }
    else if (subType==="premium"){
        monthlyCost= 10;
    }
    var total= subDuration*monthlyCost;
    result.innerText=`You have chosen a ${subDuration} month ${subType} plan for $${total}.`;

}