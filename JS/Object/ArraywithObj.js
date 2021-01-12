let product = [
  { p_Name: "Check Shirt", size: 42, price: 400, brand: "polo" },
  { p_Name: "Plain Shirt", size: 40, price: 600, brand: "AJIO" },
  { p_Name: "Check Shirt", size: 38, price: 800, brand: "Wrangler" },
  { p_Name: "Check Shirt", size: 44, price: 1200, brand: "NetPlay" },
  { p_Name: "Check Shirt -2", size: 42, price: 400, brand: "polo" },
  { p_Name: "Plain Shirt -2", size: 40, price: 600, brand: "AJIO" },
  { p_Name: "Check Shirt-2", size: 38, price: 800, brand: "Wrangler" },
  { p_Name: "Check Shirt-2", size: 44, price: 1200, brand: "NetPlay" },
];
for (let i = 0; i < product.length - 1; i++) {
  if (product[i].size == 40) console.log(product[i]);
}

// console.log(product);
// console.log(product[0].price);

//print the product , price below 400 inr
//print only brand Polo product only?
//print/display product, only size:40
