'use strict'
//These are the hours the stores are open//
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//This is the  random nember generator//
function getRandomInt(customerMin, customerMax){
    var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
    return Math.floor(randomNumber);
}

//Seattle store object//
var seattleStore = {
    store: 'Seattle',
    customerMin: 23,
    customerMax: 65,
    customerAverage: 6.3,
    salesPerHour: [],
    //This function calculates customers per HR & sales per HR//
    getHourlySales: function(){
        //Go through hours per day
        for (var i=0; i<hours.length; i++){
            //Create a variable and call it
            var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
            //Create new  variable for total cookies per HR = customers per HR * this. customer average.
            var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
            // Add the total cookies to the sales per HR array.
            this.salesPerHour.push(totalCookiesPerHr);
        }    
    },
    render: function(){
        this.getHourlySales();
        var total = 0;
        var storesArticle = document.getElementById('stores');
        var cityUl = document.createElement('ul');
        var cityHeader = document.createElement('h1');
        cityHeader.textContent = this.store;
        cityUl.appendChild(cityHeader);

    for(var i=0; i<hours.length; i++) {
        var hourLi = document.createElement('li');
        hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
        cityUl.appendChild(hourLi);
        }
        for(var j=0; j<this.salesPerHour.length; j++){
        total += this.salesPerHour[i];
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = `Total ${total} cookies`
    cityUl.appendChild(totalLi);
    storesArticle.append(cityUl);
    }
}
seattleStore.getHourlySales();
seattleStore.render();

//Tokyo store object//
var tokyoStore = {
    store: 'Tokyo',
    customerMin: 23,
    customerMax: 65,
    customerAverage: 6.3,
    salesPerHour: [],
    //This function calculates customers per HR & sales per HR//
    getHourlySales: function(){
        //Go through hours per day
        for (var i=0; i<hours.length; i++){
            //Create a variable and call it
            var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
            //Create new  variable for total cookies per HR = customers per HR * this. customer average.
            var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
            // Add the total cookies to the sales per HR array.
            this.salesPerHour.push(totalCookiesPerHr);
        }    
    },
    render: function(){
        this.getHourlySales();
        var total = 0;
        var storesArticle = document.getElementById('stores');
        var cityUl = document.createElement('ul');
        var cityHeader = document.createElement('h1');
        cityHeader.textContent = this.store;
        cityUl.appendChild(cityHeader);

    for(var i=0; i<hours.length; i++) {
        var hourLi = document.createElement('li');
        hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
        cityUl.appendChild(hourLi);
        }
        for(var j=0; j<this.salesPerHour.length; j++){
        total += this.salesPerHour[i];
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = `Total ${total} cookies`
    cityUl.appendChild(totalLi);
    storesArticle.append(cityUl);
    }
}
tokyoStore.getHourlySales();
tokyoStore.render();


//Dubai store object//
var dubaiStore = {
    store: 'Dubai',
    customerMin: 23,
    customerMax: 65,
    customerAverage: 6.3,
    salesPerHour: [],
    //This function calculates customers per HR & sales per HR//
    getHourlySales: function(){
        //Go through hours per day
        for (var i=0; i<hours.length; i++){
            //Create a variable and call it
            var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
            //Create new  variable for total cookies per HR = customers per HR * this. customer average.
            var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
            // Add the total cookies to the sales per HR array.
            this.salesPerHour.push(totalCookiesPerHr);
        }    
    },
    render: function(){
        this.getHourlySales();
        var total = 0;
        var storesArticle = document.getElementById('stores');
        var cityUl = document.createElement('ul');
        var cityHeader = document.createElement('h1');
        cityHeader.textContent = this.store;
        cityUl.appendChild(cityHeader);

    for(var i=0; i<hours.length; i++) {
        var hourLi = document.createElement('li');
        hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
        cityUl.appendChild(hourLi);
        }
        for(var j=0; j<this.salesPerHour.length; j++){
        total += this.salesPerHour[i];
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = `Total ${total} cookies`
    cityUl.appendChild(totalLi);
    storesArticle.append(cityUl);
    }
}
dubaiStore.getHourlySales();
dubaiStore.render();


//Paris store object//
var parisStore = {
    store: 'Paris',
    customerMin: 23,
    customerMax: 65,
    customerAverage: 6.3,
    salesPerHour: [],
    //This function calculates customers per HR & sales per HR//
    getHourlySales: function(){
        //Go through hours per day
        for (var i=0; i<hours.length; i++){
            //Create a variable and call it
            var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
            //Create new  variable for total cookies per HR = customers per HR * this. customer average.
            var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
            // Add the total cookies to the sales per HR array.
            this.salesPerHour.push(totalCookiesPerHr);
        }    
    },
    render: function(){
        this.getHourlySales();
        var total = 0;
        var storesArticle = document.getElementById('stores');
        var cityUl = document.createElement('ul');
        var cityHeader = document.createElement('h1');
        cityHeader.textContent = this.store;
        cityUl.appendChild(cityHeader);

    for(var i=0; i<hours.length; i++) {
        var hourLi = document.createElement('li');
        hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
        cityUl.appendChild(hourLi);
        }
        for(var j=0; j<this.salesPerHour.length; j++){
        total += this.salesPerHour[i];
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = `Total ${total} cookies`
    cityUl.appendChild(totalLi);
    storesArticle.append(cityUl);
    }
}
parisStore.getHourlySales();
parisStore.render();


//Lima store object//
var limaStore = {
    store: 'Lima',
    customerMin: 23,
    customerMax: 65,
    customerAverage: 6.3,
    salesPerHour: [],
    //This function calculates customers per HR & sales per HR//
    getHourlySales: function(){
        //Go through hours per day
        for (var i=0; i<hours.length; i++){
            //Create a variable and call it
            var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
            //Create new  variable for total cookies per HR = customers per HR * this. customer average.
            var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
            // Add the total cookies to the sales per HR array.
            this.salesPerHour.push(totalCookiesPerHr);
        }    
    },
    render: function(){
        this.getHourlySales();
        var total = 0;
        var storesArticle = document.getElementById('stores');
        var cityUl = document.createElement('ul');
        var cityHeader = document.createElement('h1');
        cityHeader.textContent = this.store;
        cityUl.appendChild(cityHeader);

    for(var i=0; i<hours.length; i++) {
        var hourLi = document.createElement('li');
        hourLi.textContent = `${hours[i]} ${this.salesPerHour[i]} cookies`;
        cityUl.appendChild(hourLi);
        }
        for(var j=0; j<this.salesPerHour.length; j++){
        total += this.salesPerHour[i];
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = `Total ${total} cookies`
    cityUl.appendChild(totalLi);
    storesArticle.append(cityUl);
    }
}
limaStore.getHourlySales();
limaStore.render();

