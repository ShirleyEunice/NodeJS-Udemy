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
                cb(JSON.parse(fileContent));
                // console.log(JSON.parse(fileContent), "Parse");
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