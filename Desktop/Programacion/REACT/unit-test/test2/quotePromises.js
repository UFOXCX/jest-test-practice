export const getQuote = () => {
    return new Promise((resolve) => {
    setTimeout(() => 
        resolve('testing async function')
    ),
        1000;
    
    })
};