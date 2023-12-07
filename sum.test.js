const theSum=require("./sum");
//test(name,fm,timeout)
//it(name,fm,timeout)
describe("Check Te numbers sum Total",()=>{

    test("if 0",() => {
        expect(theSum()).toBe(0);
    });
    test("Return the number",() => {
        expect(theSum(10)).toBe(10);
    });
    
    test("Return n1 + n2",() => {
        expect(theSum(15,25)).toBe(40);
    });
    test("Return n1 + n2",() => {
        expect(theSum(10,20,30)).toBe(60);
    });
    test("Return the sum",() => {
        expect(theSum(10,20,30,40,50,100)).toBe(250);
    });
});






