let cars = ['Farrari', 'Audi', 'Ford', 'Chevy'] 

console.log(cars[0], cars[2])

// console.log(cars[2]) // 'Ford'

// console.log(cars.length) // 4

let ourCars = [{
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey',
}, {
    brond: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55_000,
}] 
console.log(ourCars[1].miles)

const {miles, year} = ourCars[0]
const age= 2022 - year
const mileage = miles / age
console.log(mileage + ' miles per year')

if(mileage < 10000) {
    console.log('this is a low milage car.')
} else {
    console.log('this is not a low mileage car')
}

  (mileage < 10000) ? console.log('this is a low mileage car.')
   : console.log('this is not a low mileage car.') 



 const isIt = (mileage < 10000) ? 'is a' : 'is not a'

