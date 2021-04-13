# 3 Ways to Check If an Object Has a Property in JavaScript

1. hasOwnProperty() method :　returns a boolean indicating whether object has a property
2. in operator：Check for properties existence in both 'own' and 'inherited' properties.
3. Comparing with undefined (P.S. undefined === undefined)

- hasOwnProperty vs in Property
    - hasOwnProperty() method and in operator is that the latter checks within own and inherited properties of the object.
    - Ex. 
        ```javascript
            const hero = {
                name: 'Batman'
            };
            hero.toString;
            hero.hasOwnProperty('toString');//false
            'toString' in hero;//true
        ```
    - Compare is not strict! For expamle:
        ```javascript
            const hero = {
                name: undefined
            };
            hero.name !== undefined; // => false
        ```