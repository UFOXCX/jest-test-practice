import { getQuote } from "./quotePromises.js";




 test('get quote', () => { 
  return expect(getQuote()).resolves.toBe(
    'testing async function'
  )  
});