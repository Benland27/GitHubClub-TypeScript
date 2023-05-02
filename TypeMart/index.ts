import products from './products';

const productName: string = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "4702 Elm St, Dreams, Nightmares";

const product = products.filter(product => { 
  return product.name === productName})[0];

if(Boolean(product.preOrder) === true){
  console.log(`We will send you a message when ${productName} is on the way!`)
}

if(Number(product.price) >= 25){
  shipping = 0
  console.log("We provide free shipping for this product!");
} else {
  shipping = 5;
}

if(shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`Productname: ${productName}. Shipping Address: ${shippingAddress}. Product Price: ${Number(product.price)}. Tax: ${taxTotal}. Shipping: ${shipping}. Total: ${total}.`);