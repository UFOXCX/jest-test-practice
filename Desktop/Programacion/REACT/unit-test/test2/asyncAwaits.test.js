import { getQuote } from "./asyncAwaits.js";




 test('get quote', async () => { 
  const quote = await getQuote();
  expect(quote).toBe('testing async function');
  
});