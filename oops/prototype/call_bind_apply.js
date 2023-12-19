const car = {
    name: 'car',
    color: 'black',
    getDetails(brand, seats){
        console.log
        (`
        This is a ${this.color} ${this.name} of ${brand} company.
        It has ${seats} seats.
        `);
    }
};
const bus = {
    name: 'bus',
    color: 'blue'
}

car.getDetails("Audi", 4);

car.getDetails.call(bus,'Star', 50);
car.getDetails.apply(bus, ['Golld', 50]);

const veh1 = car.getDetails.bind(bus);
veh1('silver', 20);
veh1('bronze', 20);