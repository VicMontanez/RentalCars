var rentalName = "Victor's Car Rentals";

var carTypes = ["Sedans", "SUV", "Trucks", "Vans"];
var carPrices = [250, 350, 400, 450];

var availableRentalCars = [["Accord", "Maxima", "Jetta", "Fusion"],["Rav 4", "Pathfinder", "Compass"],["F-150","Yukon"],["Carvan"]];

var bookedCars = [[],[],[],[]];

function bookSedan() {
    bookedCars[0].push(availableRentalCars[0].pop());
}

function bookSUV() {
    bookedCars[1].push(availableRentalCars[1].pop());
}

function bookTruck() {
    bookedCars[2].push(availableRentalCars[2].pop());
}

function bookVan() {
    bookedCars[3].push(availableRentalCars[3].pop());
}

function salesReport() {
    var totalCarSales = 0;
    for (var i = 0; i < bookedCars.length; i++) {
        totalCarSales += bookedCars[i].length * carPrices[i];
    }
    return totalCarSales; 
    
} 