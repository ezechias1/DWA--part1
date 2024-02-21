const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

//   Filter out products with names longer than 5 characters:
//   

  const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);


// Convert string prices to numbers, remove products without prices, and calculate combined price:

const combinedPrice = products
  .filter(product => product.price !== '' && !isNaN(product.price))
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce((acc, product) => acc + product.price, 0);

console.log(combinedPrice);


// Concatenate all product names:

const concatenatedNames = products.reduce((acc, product, index) => {
    if (index === products.length - 1) {
      return acc + product.product;
    } else {
      return acc + product.product + ", ";
    }
  }, "");
  
  console.log(concatenatedNames);

  


// Calculate highest and lowest-priced items:

  const highestAndLowest = products.reduce((acc, product) => {
    if (parseFloat(product.price) > parseFloat(acc.highest.price)) {
      acc.highest = product;
    }
    if (parseFloat(product.price) < parseFloat(acc.lowest.price)) {
      acc.lowest = product;
    }
    return acc;
  }, { highest: products[0], lowest: products[0] });
  
  console.log(`Highest: ${highestAndLowest.highest.product}. Lowest: ${highestAndLowest.lowest.product}.`);
  
//   Recreate the object with modified keys using Object.entries and reduce:

  const recreatedProducts = Object.entries(products).reduce((acc, [index, product]) => {
    const { product: productName, price: productPrice } = product;
    acc[index] = { name: productName, cost: productPrice };
    return acc;
  }, []);
  
  console.log(recreatedProducts);
  