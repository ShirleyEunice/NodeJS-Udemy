// const products = [];
const fs = require('fs');
const path = require('path');


const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json');
const getProductsFromFile=(cb) =>{
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                return cb([]);
            }else{
                const products = JSON.parse(fileContent);
                let updatedProducts = products;
                let shouldPersistProducts = false;

                updatedProducts = products.map(product => {
                    if (product.id) {
                        return product;
                    }

                    shouldPersistProducts = true;
                    return {
                        ...product,
                        id: Math.random().toString()
                    };
                });

                if (shouldPersistProducts) {
                    fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                        console.log(err);
                    });
                }

                cb(updatedProducts);
            }
        });
}

module.exports = class Product {
    constructor(title, imgUrl, description, price){
        this.title = title;
        this.imgUrl = imgUrl;
        this.description = description;
        this.price = price;
    }

    //Create a store and fetch
    save(){
        this.id = Math.random().toString();
        // products.push(this);
        getProductsFromFile(products =>{
             products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
                
            })
        });
    }


    // Fetch all products
    static fetchAll(cb){
        getProductsFromFile(cb);
    }

    //Fetch product by id
    static findById(id, cb){
        getProductsFromFile(products =>{
            const product = products.find(p => p.id === id);
            cb(product);
        })
    }
}