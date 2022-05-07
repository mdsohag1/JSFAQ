const normalPerson = {
    firstName: "ali",
    lastName: "abbas",
    sallery: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount, tips, tax){
        console.log(this)
        this.sallery = this.sallery - amount - tips - tax
        return this.sallery;
    }
}

const heroPerson = {
    firstName: "kuddus",
    lastName: "abdur",
    sallery: 10000
}
const billenPerson = {
    firstName: "kadir",
    lastName: "vai",
    sallery: 20000
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
// const billenBillCharge = normalPerson.chargeBill.bind(billenPerson)

// heroChargeBill(500);
// heroChargeBill(500);
// billenBillCharge(2000);
// billenBillCharge(1500);


normalPerson.chargeBill.call(heroPerson, 2000, 100, 10)
normalPerson.chargeBill.apply(billenPerson, [8000, 50, 5])


console.log(heroPerson.sallery)
console.log(billenPerson.sallery)
