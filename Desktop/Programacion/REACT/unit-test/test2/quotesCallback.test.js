import { getQuote } from "./quotesCallback";

//callbacks
//promesas
//async

 test('get quote', (done) => { 
    getQuote((quote)=>{
        expect(quote).toBe(
            'testing async function'
        );
        done(); 

    });

    

});