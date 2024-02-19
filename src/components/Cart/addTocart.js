export const addToCart = (product) => {
    try {
        let data = JSON.parse(localStorage.getItem('setCart')) || [];
        let flag = data.some(value => value.id === product.id);
        
        if (!flag) {
            data.push({
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            });
            localStorage.setItem('setCart', JSON.stringify(data));
        }
    } catch (error) {
        console.error("Error adding product to cart:", error);
    }
}
