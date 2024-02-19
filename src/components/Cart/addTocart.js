
export const addToCart = (product) => {
    try {
        let data = JSON.parse(localStorage.getItem('setCart')) || [];
        let flag=true;
        data.map((value)=>{
            if(value.id===product.id){
                flag=false;
            }
        })
        
        data = [...data, {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail
        }];


        if(flag){
            localStorage.setItem('setCart', JSON.stringify(data));
        }
        
    } catch (error) {
        console.error("Error adding product to cart:", error);
    }
}


