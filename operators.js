var phones = [{
    mobile: "iphone",
    price : 100000,
    model : 12,
},
{
    mobile: "iphone",
    price : 1000000,
    model : 13,
},
{
    mobile: "samasung",
    price : 20000,
    model : 14,  
},
{
    mobile: "vivo",
    price : 1000000,
    model : 10,
}
];

var newPhones = phones.filter(function(element){
    return element.mobile == "iphone" && element.mobile == "samasung" || element.price > 85000;
    
});
console.log(newPhones);