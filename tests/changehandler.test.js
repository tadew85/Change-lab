let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
test("amountDue is set based on an argument",function(){
    let vendingMachine = new ChangeHandler(105);
    expect(vendingMachine.amountDue).toBe(105);
})
test("amountDue is set but cash tendered is unaffected",function(){
    let vendingMachine = new ChangeHandler(100);
    expect(vendingMachine.cashTendered).toBe(0);
})
test("inserts a penny",function(){
    let vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(1);
})
test("inserts a nickel",function(){
    let vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("nickel");
    expect(vendingMachine.cashTendered).toBe(5);
})
test("inserts a dime",function(){
    let vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("dime");
    expect(vendingMachine.cashTendered).toBe(10);
})
test("inserts a quarter",function(){
    let vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.cashTendered).toBe(25);
})
test("calling function adds each time", function(){
    let vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(66);
})
test("Returns true if cashTendered more than amountDue", function(){
    let vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");

    expect(vendingMachine.isPaymentSufficient()).toBe(true);
})
test("Returns false if cashTendered is less than amountDue", function(){
    let vendingMachine = new ChangeHandler(130);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");

    expect(vendingMachine.isPaymentSufficient()).toBe(false);
})
test("Returns true if cashTendered is exactly equal to amountDue", function(){
    let vendingMachine = new ChangeHandler(130);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("nickel");

    expect(vendingMachine.isPaymentSufficient()).toBe(true);
})
test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function(){
    let vendingMachine = new ChangeHandler(100);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");

    expect(vendingMachine.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
})
test("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function(){
        let vendingMachine = new ChangeHandler(100);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        
    
        expect(vendingMachine.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});    

})
test("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function(){
    let vendingMachine = new ChangeHandler(100);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    

    expect(vendingMachine.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});    

})
test("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function(){
    let vendingMachine = new ChangeHandler(100);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    

    expect(vendingMachine.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});    

})

    // Set up a test below...
    test("The ChangeHandler class is defined.", function() {
        // Remember, you can arrange, act, and assert...start small
        expect(ChangeHandler).toBeDefined();
    });

});