'use strict';
//These are the hours the stores are open//
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//This is the  random nember generator//
function getRandomInt(customerMin, customerMax){
    var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
    return Math.floor(randomNumber);
}
//LITERAL OBJECTS-------------------------------------------------------------------------------------
// //Seattle store object//
// var seattleStore = {
//     store: 'Seattle',
//     customerMin: 23,
//     customerMax: 65,
//     customerAverage: 6.3,
//     salesPerHour: [],
//     //This function calculates customers per HR & sales per HR//
//     getHourlySales: function(){
//         //Go through hours per day
//         for (var i=0; i<hours.length; i++){
//             //Create a variable and call it
//             var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//             //Create new  variable for total cookies per HR = customers per HR * this. customer average.
//             var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
//             // Add the total cookies to the sales per HR array.
//             this.salesPerHour.push(totalCookiesPerHr);
//         }    
//     },
//     render: function(){
//         this.getHourlySales();
//         var total = 0;
//         var storesArticle = document.getElementById('stores');
//         var cityUl = document.createElement('ul');
//         var cityHeader = document.createElement('h1');
//         cityHeader.textContent = this.store;
//         cityUl.appendChild(cityHeader);

//     for(var i=0; i<hours.length; i++) {
//         var hourLi = document.createElement('li');
//         hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
//         cityUl.appendChild(hourLi);
//         }
//         for(var j=0; j<this.salesPerHour.length; j++){
//         total += this.salesPerHour[i];
//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Total ${total} cookies`
//     cityUl.appendChild(totalLi);
//     storesArticle.append(cityUl);
//     }
// }
// seattleStore.getHourlySales();
// seattleStore.render();

// //Tokyo store object//
// var tokyoStore = {
//     store: 'Tokyo',
//     customerMin: 23,
//     customerMax: 65,
//     customerAverage: 6.3,
//     salesPerHour: [],
//     //This function calculates customers per HR & sales per HR//
//     getHourlySales: function(){
//         //Go through hours per day
//         for (var i=0; i<hours.length; i++){
//             //Create a variable and call it
//             var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//             //Create new  variable for total cookies per HR = customers per HR * this. customer average.
//             var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
//             // Add the total cookies to the sales per HR array.
//             this.salesPerHour.push(totalCookiesPerHr);
//         }    
//     },
//     render: function(){
//         this.getHourlySales();
//         var total = 0;
//         var storesArticle = document.getElementById('stores');
//         var cityUl = document.createElement('ul');
//         var cityHeader = document.createElement('h1');
//         cityHeader.textContent = this.store;
//         cityUl.appendChild(cityHeader);

//     for(var i=0; i<hours.length; i++) {
//         var hourLi = document.createElement('li');
//         hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
//         cityUl.appendChild(hourLi);
//         }
//         for(var j=0; j<this.salesPerHour.length; j++){
//         total += this.salesPerHour[i];
//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Total ${total} cookies`
//     cityUl.appendChild(totalLi);
//     storesArticle.append(cityUl);
//     }
// }
// tokyoStore.getHourlySales();
// tokyoStore.render();


// //Dubai store object//
// var dubaiStore = {
//     store: 'Dubai',
//     customerMin: 23,
//     customerMax: 65,
//     customerAverage: 6.3,
//     salesPerHour: [],
//     //This function calculates customers per HR & sales per HR//
//     getHourlySales: function(){
//         //Go through hours per day
//         for (var i=0; i<hours.length; i++){
//             //Create a variable and call it
//             var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//             //Create new  variable for total cookies per HR = customers per HR * this. customer average.
//             var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
//             // Add the total cookies to the sales per HR array.
//             this.salesPerHour.push(totalCookiesPerHr);
//         }    
//     },
//     render: function(){
//         this.getHourlySales();
//         var total = 0;
//         var storesArticle = document.getElementById('stores');
//         var cityUl = document.createElement('ul');
//         var cityHeader = document.createElement('h1');
//         cityHeader.textContent = this.store;
//         cityUl.appendChild(cityHeader);

//     for(var i=0; i<hours.length; i++) {
//         var hourLi = document.createElement('li');
//         hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
//         cityUl.appendChild(hourLi);
//         }
//         for(var j=0; j<this.salesPerHour.length; j++){
//         total += this.salesPerHour[i];
//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Total ${total} cookies`
//     cityUl.appendChild(totalLi);
//     storesArticle.append(cityUl);
//     }
// }
// dubaiStore.getHourlySales();
// dubaiStore.render();


// //Paris store object//
// var parisStore = {
//     store: 'Paris',
//     customerMin: 23,
//     customerMax: 65,
//     customerAverage: 6.3,
//     salesPerHour: [],
//     //This function calculates customers per HR & sales per HR//
//     getHourlySales: function(){
//         //Go through hours per day
//         for (var i=0; i<hours.length; i++){
//             //Create a variable and call it
//             var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//             //Create new  variable for total cookies per HR = customers per HR * this. customer average.
//             var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
//             // Add the total cookies to the sales per HR array.
//             this.salesPerHour.push(totalCookiesPerHr);
//         }    
//     },
//     render: function(){
//         this.getHourlySales();
//         var total = 0;
//         var storesArticle = document.getElementById('stores');
//         var cityUl = document.createElement('ul');
//         var cityHeader = document.createElement('h1');
//         cityHeader.textContent = this.store;
//         cityUl.appendChild(cityHeader);

//     for(var i=0; i<hours.length; i++) {
//         var hourLi = document.createElement('li');
//         hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
//         cityUl.appendChild(hourLi);
//         }
//         for(var j=0; j<this.salesPerHour.length; j++){
//         total += this.salesPerHour[i];
//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Total ${total} cookies`
//     cityUl.appendChild(totalLi);
//     storesArticle.append(cityUl);
//     }
// }
// parisStore.getHourlySales();
// parisStore.render();


// //Lima store object//
// var limaStore = {
//     store: 'Lima',
//     customerMin: 23,
//     customerMax: 65,
//     customerAverage: 6.3,
//     salesPerHour: [],
//     //This function calculates customers per HR & sales per HR//
//     getHourlySales: function(){
//         //Go through hours per day
//         for (var i=0; i<hours.length; i++){
//             //Create a variable and call it
//             var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//             //Create new  variable for total cookies per HR = customers per HR * this. customer average.
//             var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
//             // Add the total cookies to the sales per HR array.
//             this.salesPerHour.push(totalCookiesPerHr);
//         }    
//     },
//     render: function(){
//         this.getHourlySales();
//         var total = 0;
//         var storesArticle = document.getElementById('stores');
//         var cityUl = document.createElement('ul');
//         var cityHeader = document.createElement('h1');
//         cityHeader.textContent = this.store;
//         cityUl.appendChild(cityHeader);

//     for(var i=0; i<hours.length; i++) {
//         var hourLi = document.createElement('li');
//         hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
//         cityUl.appendChild(hourLi);
//         }
//         for(var j=0; j<this.salesPerHour.length; j++){
//         total += this.salesPerHour[i];
//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Total ${total} cookies`
//     cityUl.appendChild(totalLi);
//     storesArticle.append(cityUl);
//     }
// }
// limaStore.getHourlySales();
// limaStore.render();

//===================LAB 07==================//
//Global Array
var storeLocations = [];

//CONSTRUCTOR FUNCTION----------------------------------------------------------------------------------
function SalmonCookies(storeName, customerMin, customerMax, customerAverage){
    this.storeName = storeName;
    this.hourlySales = [];
    this.dailyTotals = 0;
    this.customerMin = customerMin;
    this.customerMax = customerMax;
    this.customerAverage = customerAverage;

    for (var i=0; i<hours.length; i++){
        //Create a variable and call it
        var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
        //Create new  variable for total cookies per HR = customers per HR * this. customer average.
        var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
        // Add the total cookies to the sales per HR array.
        this.hourlySales.push(totalCookiesPerHr);
    }   
    for (var i=0; i<this.hourlySales.length; i++){
        this.dailyTotals += this.hourlySales[i];
        //Heres where you can also write this.dailyTotals += hourlySales[i]
    }
    // console.log(this.hourlySales);
}

//Instances
var seattleStore = new SalmonCookies('Seattle', 23,65,6.3);
var tokyoStore = new SalmonCookies('Tokyo', 3,24,1.2);
var dubaiStore = new SalmonCookies('Dubai', 11,38,3.7);
var parisStore = new SalmonCookies('Paris', 20,38,2.3);
var limaStore = new SalmonCookies('Lima', 2,16,4.6);

//Push all instances to Global Array
storeLocations.push(seattleStore, tokyoStore, dubaiStore, parisStore, limaStore);

console.log(storeLocations);//--------------------------------------------------------------------
//------------LAB 8-------------------------------------------------------------------------------
var tableBody = document.getElementById('salesTable');

function renderHeader (){
    var headerRow = document.createElement('tr');
    var headerStore = document.createElement('th');
    headerStore.textContent = 'Locations';
    headerRow.appendChild(headerStore);
    tableBody.appendChild(headerRow);
    
    for (var i=0; i<hours.length; i++){
        var headerHours = document.createElement('th');
        headerHours.textContent = hours[i];
        headerRow.appendChild(headerHours);
    }
    var headerTotal = document.createElement('th');
    headerTotal.textContent = 'Store Total';
    headerRow.appendChild(headerTotal);
}

SalmonCookies.prototype.body = function(){
    var bodyRow = document.createElement('tr');
    tableBody.appendChild(bodyRow); 
    
    //Create Store name for each row
    var bodyStore = document.createElement('td');
    bodyStore.textContent = this.storeName;
    bodyRow.appendChild(bodyStore);
    
    //Created the Hours by looping through the hours array and rendering hourlySales
    for (var i=0; i<hours.length; i++){
        var bodyHours = document.createElement('td');
        bodyHours.textContent = this.hourlySales[i];
        bodyRow.appendChild(bodyHours);
    }
    
    //Grabbing Daily Total and rendering it at the end of the row.
    var bodyTotal = document.createElement('td');
    bodyTotal.textContent = this.dailyTotals;
    bodyRow.appendChild(bodyTotal);
}

function renderFooter (){
    var footerRow = document.createElement('tr');
    var footerStore = document.createElement('th');
    footerStore.textContent = 'Hourly Totals';
    footerRow.appendChild(footerStore);
    
    var grandTotal = 0;
    var totalHourlySales  = 0;
    for (var row=0; row<hours.length; row++){
        totalHourlySales = 0;
        for (var column=0; column<storeLocations.length; column++){
            totalHourlySales += storeLocations[column].hourlySales[row];
            grandTotal += storeLocations[column].hourlySales[row];
        }
        var totalHours = document.createElement('th');
        totalHours.textContent = totalHourlySales;
        footerRow.appendChild(totalHours);
    }
    var grandTotalSales = document.createElement('th');
    grandTotalSales.textContent = grandTotal;
    footerRow.appendChild(grandTotalSales);
    tableBody.appendChild(footerRow);
}
//---------------------------------Executable Code--------------------------------------------------
function render(){
    tableBody.innerHTML = null;
    renderHeader();
    for (var i=0; i<storeLocations.length; i++){
        storeLocations[i].body();
    }
    renderFooter();
}  
render();
//-------------------------------Lab 9 Forms & Events------------------------------------------------
// grab element from DOM
var form = document.getElementById('Store-Info');
// Assign event listener of type "submit" to form element 
//and passing in a function to run when the event is detected
form.addEventListener('submit', handleSubmit);
//
function handleSubmit(event){
    event.preventDefault();
    var name  = (event.target.storeName.value);
    var minCust =  parseInt(event.target.minimumCustomer.value);
    var maxCust =  parseInt(event.target.maxmumCustomer.value);
    var avgSales =  parseInt(event.target.averageCustomer.value);
    
    var newCookieStand = new SalmonCookies(name, minCust, maxCust, avgSales)
    console.log(newCookieStand);
    newCookieStand.body();
    render();
}
render();
























