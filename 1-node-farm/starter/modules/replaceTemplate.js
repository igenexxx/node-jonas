module.exports = (temp, product) => {
    return temp
        .replace(/{%PRODUCTNAME%}/g, product.productName)
        .replace(/{%IMAGE%}/g, product.image)
        .replace(/{%PRICE%}/g, product.price)
        .replace(/{%FROM%}/g, product.from)
        .replace(/{%NUTRIENTS%}/g, product.nutrients)
        .replace(/{%QUANTITY%}/g, product.quantity)
        .replace(/{%ID%}/g, product.id)
        .replace(/{%DESCRIPTION%}/g, product.description)
        .replace(/{%NOT_ORGANIC%}/g, product.organic ? 'organic' : 'not-organic');
};
