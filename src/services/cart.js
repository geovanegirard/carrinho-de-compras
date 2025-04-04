//Ações do carrinho
//CASOS DE USO

// -> adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> calcular total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(),0);
    console.log(result);
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

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}