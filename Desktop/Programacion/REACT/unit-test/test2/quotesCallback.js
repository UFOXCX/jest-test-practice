export const getQuote = (cb) => {
    setTimeout(() => {return cb('testing async function')}),1000;
    
};