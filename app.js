// .Global Assignments
// .
// .
//These are  the hours the stores are open//
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//This is the  random nember generator//
function getRandomInt(customerMin, customerMax){
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
}
console.log(getRandomInt(23,65));

function totalSalesCalc(salesPerCustomer){
    for (i=0; i<hours.length; i++);
    return 
    console.log (total);
}
// .
// .
//Seattle store object//
seattleStore = {
    store: 'Seattle',
    customerMin: 23,
    customerMax: 65,
    customerAverage: 6.3,

//This function calculates customers per HR & sales per HR//
hourlySales: function(){
    var customersPerHour = [];
    var salesPerCustomer = [];

    for (i=0; i<hours.length; i++){
        customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
    }    
    for (i=0; i<hours.length; i++){
        salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
    }
    console.log(customersPerHour);
    console.log(salesPerCustomer);
    }
    ,
totalSales: function(){
    for (i=0; i<salesPerCustomer.length; i++);
    var total = salesPerCustomer.push
    console.log (total);
    }
}
seattleStore.hourlySales();
seattleStore.totalSales();
// .
// .
//Tokyo store object//
tokyoStore = {
    store:'Tokyo',
    customerMin: 3,
    customerMax: 24,
    customerAverage: 1.2,

//This function calculates customers per HR & sales per HR//
hourlySales: function(){

var customersPerHour = [];
var salesPerCustomer = [];

    for (i=0; i<hours.length; i++){
        customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
    }    
    for (i=0; i<hours.length; i++){
        salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
    }
    console.log(customersPerHour);
    console.log(salesPerCustomer);
    }
}
// tokyoStore.hourlySales();
// // .
// // .
// //Dubai store object//
// dubaiStore = {
//     store:'Dubai',
//     customerMin: 11,
//     customerMax: 38,
//     customerAverage: 3.7,

// hourlySales: function(){
// var customersPerHour = [];
// var salesPerCustomer = [];

//     for (i=0; i<hours.length; i++){
//         customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
//     }    
//     for (i=0; i<hours.length; i++){
//         salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
//     }
//     console.log(customersPerHour);
//     console.log(salesPerCustomer);
//     }
// }
// dubaiStore.hourlySales();
// //.
// //.
// //Paris store object
// parisStore = {
//     store:'Paris',
//     customerMin: 20,
//     customerMax: 38,
//     customerAverage: 2.3,

// hourlySales: function(){
//     var customersPerHour = [];
//     var salesPerCustomer = [];
    
//         for (i=0; i<hours.length; i++){
//             customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
//         }    
//         for (i=0; i<hours.length; i++){
//             salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
//         }
//         console.log(customersPerHour);
//         console.log(salesPerCustomer);
//         }
// }
// parisStore.hourlySales();
// //.
// //.
// //Lima store object
// limaStore = {
//     store:'Lima',
//     customerMin: 2,
//     customerMax: 16,
//     customerAverage: 2.3,

// hourlySales: function(){
//     var customersPerHour = [];
//     var salesPerCustomer = [];
    
//         for (i=0; i<hours.length; i++){
//             customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
//         }    
//         for (i=0; i<hours.length; i++){
//             salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
//         }
//         console.log(customersPerHour);
//         console.log(salesPerCustomer);
//         }
// }
// limaStore.hourlySales();

