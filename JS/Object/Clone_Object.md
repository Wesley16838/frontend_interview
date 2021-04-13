# Ways to Clone Objects in JavaScript
1. Shallow clone
    - Using Spread
    ```javascript
        const food = { beef: '🥩', bacon: '🥓' };
        const cloneFood = { ...food };
    ```
    - Using Object.assign
    ```javascript
        const food = { beef: '🥩', bacon: '🥓' };
        const cloneFood = Object.assign({}, food);
    ```
2. Deep clone
    - Using JSON: JSON.stringify convert object or value to a JSON string and The JSON.parse() method parses a string and returns a JavaScript object.
        - Issues
            a. Only work with Number and String and Object literal without function or Symbol properties.
                
    ```javascript
        const cloneFood = JSON.parse(JSON.stringify(food));
    ```
    - Using lodash
    ```javascript
        const cloneFood = _.cloneDeep(food)
    ```
    - Lodash DeepClone vs JSON
        - JSON.stringify/parse only work with Number and String and Object literal without function or Symbol properties.
        - deepClone work with all types, function and Symbol are copied by reference.