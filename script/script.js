//Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado 
//no console do seu navegador.

//1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números 
// contidos dentro do array [20, 13, 50, 36, 97].
const numbers = [20, 13, 50, 36, 97];

const sumNumber = numbers.reduce((somaTotal, proximoNumero) =>{
  return somaTotal+ proximoNumero
},0)
console.log(sumNumber)


function sumNumbers(array) {
  return;}
// console.log(sumNumbers(numbers));


//2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os 
// elementos desse array e retorne o valor total de todos os produtos do carrinho.
const totalProduct = products.reduce((somaTotal, proximoNumero) =>{
 return somaTotal + proximoNumero.price
}, 0)
console.log(totalProduct)


function totalProducts(array) {
  return;}
// console.log(totalProducts(products));


//3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que 
// filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
const sizeGGProducts = products.filter((produtos) =>{
  return produtos.size === "GG"
});
console.log(sizeGGProducts)

const totalProductSize = sizeGGProducts.reduce((somaTotal, proximoNumero) =>{
  return somaTotal+ proximoNumero.price
}, 0)
console.log(totalProductSize)



function totalProductsSize(array) {
  return;}
// console.log(totalProductsSize(products));


//DESAFIO
//4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no 
// preço deles. Após isso, some o valor total desses produtos.

const productsInSale = products.filter((produtos) =>{
  return produtos.sale
})
console.log(productsInSale)

const saleProductsPrice = productsInSale.map((produtos)=>{
  return produtos.price/2
})
console.log(saleProductsPrice)

const totalPriceSileProducts = saleProductsPrice.reduce((somaTotal, proximoNumero) =>{
  return somaTotal + proximoNumero
}, 0)
console.log(totalPriceSileProducts)


