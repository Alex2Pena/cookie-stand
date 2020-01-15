'use strict'
//These are the hours the stores are open//
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//This is the  random nember generator//
function getRandomInt(customerMin, customerMax){
    var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
    return Math.floor(randomNumber);
}

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





//CONSTRUCTOR FUNCTIONS//

// var myTable = document.getElementById('myTable');
// var coffeeArray = ['Latte', 'Mocha', 'Americano', 'Cappucino'];
// var coffeeTable = document.createElement('table');//creating the table
// var headerRow = document.createElement('tr');//creating the row within the table
// for(var i = 0; i < coffeeArray.length; i++){
//   var tableHeader = document.createElement('th');
//   tableHeader.textContent = coffeeArray[i]; //ask about this
//   headerRow.appendChild(tableHeader);
// }
// coffeeTable.appendChild(headerRow);
// for (var i = 0; i < 4; i++){
//   var row = document.createElement('tr');
//   // nested for loop begins
//   for(var j = 0; j < coffeeArray.length; j++){
//     var tableData = document.createElement('td');
//     tableData.textContent = Math.floor(getRandomInt(0, 100));
//     row.appendChild(tableData);
//   }
//   coffeeTable.appendChild(row);
// }
// myTable.appendChild(coffeeTable);
// seattleStore.render();
// function Coffee(size, type, price){
//   //set properties using this
//   this.size = size;
//   this.coffeeType = type;
//   this.potato = price;
//   this.temperature = 180;
//   this.ingredients = [];
//   this.generateHourSales = function(){
//     console.log('hello');
//   };
// }
// Coffee.prototype.render = function(){
//   //rendering logic goes here
// };
// //to Create an object using a constructor function
// //we INSTANTIATE the object using the construction function
// var anthonysLatte = new Coffee('Large', 'latte', 5 );
// console.log(anthonysLatte.size);
// anthonysLatte.render();

// =================== NEWLAB==================//

var storeLocations = [];
function SalmonCookies(storeName, customerMin, customerMax, customerAverage){
    this.hourlySales = [];
    this.dailyTotals = [];
    this.storeName = storeName;
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
    console.log(this.hourlySales);
}

var seattleStore = new SalmonCookies('Seattle', 23,65,6.3);
var tokyoStore = new SalmonCookies('Tokyo', 3,24,1.2);
var dubaiStore = new SalmonCookies('Dubai', 11,38,3.7);
var parisStore = new SalmonCookies('Paris', 20,38,2.3);
var limaStore = new SalmonCookies('Lima', 2,16,4.6);

// console.log(seattleStore);
storeLocations.push(seattleStore);
// console.log(storeLocations);
// console.log(storeLocations[0].hourlySales);

var myTable = document.createElementById(myTable);
var 
