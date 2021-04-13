# Method create object
1. Object Literal: access a property using the dot or the square notation
    ``` javascript
        const product = {
        name: 'apple',
        category: 'fruits',
        price: 1.99
        }
        console.log(product.name);
        //"apple"

        console.log(product["name"]);
        //"apple"
    ```
2. Object.create: The newly create object will inherit all the prototyope object properties.