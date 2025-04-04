//Ações do carrinho
//CASOS DE USO

// -> adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> calcular total
async function calculateTotal(userCart) {
    console.log("\nShopee cart TOTAL is: ");

    const result = userCart.reduce((total, item) => total + item.subtotal(),0);
    console.log(`🛒Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remover por quantidade - diminui 1 item
async function removeItem(userCart, index) {
    
}

async function displayCart(userCart) {
    console.log("\nShopee cart list: ");
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal = ${item.subtotal()}`);
    });
    
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}