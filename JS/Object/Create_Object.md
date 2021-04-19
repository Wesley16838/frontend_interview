# Method create object

1. Object Literal: access a property using the dot or the square notation
<<<<<<< HEAD
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
2. ‘new’ keyword: The new keyword to create object will inherit all the prototyope object properties.
> Create a constructor function and then use the ‘new’ keyword to get objects:
    ```javascript
        const person = new Object();
        person.firstName = 'testFirstName';
        person.lastName = 'testLastName';  
        // or
        function Person(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
        }
        const personOne = new Person('testFirstNameOne', 'testLastNameOne');
        const personTwo = new Person('testFirstNameTwo', 'testLastNameTwo');
    ```
3. Object.create() : Creates a new object, using an existing object as the prototype.
    ```javascript
        const orgObject = { company: 'ABC Corp' };
        const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

        console.log(employee); // { company: "ABC Corp" }
        console.log(employee.name); // "EmployeeOne"
    ```
4. Object.assign() : Take any number of objects as parameters. The first parameter is the object that it will create and return. The rest of the objects passed to it will be used to copy the properties into the new object.
    ```javascript
        const orgObject = { company: 'ABC Corp' }
        const carObject = { carName: 'Ford' }
        const employee = Object.assign({}, orgObject, carObject);
        console.log(employee); // { carName: "Ford", company: "ABC Corp" }
    ```
5. ES6 classes : 
    ```javascript
        class Person {
        constructor(fname, lname) {
            this.firstName = fname;
            this.lastName = lname;
        }
        }

        const person = new Person('testFirstName', 'testLastName');

        console.log(person.firstName); // testFirstName
        console.log(person.lastName); // testLastName
    ```
=======

   ```javascript
   const product = {
     name: "apple",
     category: "fruits",
     price: 1.99,
   };
   console.log(product.name);
   //"apple"

   console.log(product["name"]);
   //"apple"
   ```

2. Creating objects using the ‘new’ keyword required a constructor function
   - Using the ‘new’ keyword with’ in-built Object constructor function
     ```javascript
     const person = new Object();
     person.firstName = "testFirstName";
     person.lastName = "testLastName";
     ```
   - Using ‘new’ with user defined constructor function
     ```javascript
     function Person(fname, lname) {
       this.firstName = fname;
       this.lastName = lname;
     }
     const personOne = new Person("testFirstNameOne", "testLastNameOne");
     const personTwo = new Person("testFirstNameTwo", "testLastNameTwo");
     ```
3. Using Object.create() to create new objects

   > creates a new object, using an existing object as the prototype of the newly created object.

   ```javascript
   const orgObject = { company: "ABC Corp" };
   const employee = Object.create(orgObject, {
     name: { value: "EmployeeOne" },
   });

   console.log(employee); // { company: "ABC Corp" }
   console.log(employee.name); // "EmployeeOne"
   ```

4. Using Object.assign() to create new objects

   > Copy the values of all enumerable own properties from one or more source objects to a target object.

   ```javascript
   const orgObject = { company: "ABC Corp" };
   const carObject = { carName: "Ford" };
   const employee = Object.assign({}, orgObject, carObject);

   console.log(employee); // { carName: "Ford", company: "ABC Corp" }
   ```

5. Using ES6 classes to create objects

   ```javascript
   class Person {
     constructor(fname, lname) {
       this.firstName = fname;
       this.lastName = lname;
     }
   }

   const person = new Person("testFirstName", "testLastName");

   console.log(person.firstName); // testFirstName
   console.log(person.lastName); // testLastName
   ```
>>>>>>> c692859f1052a32b34d3c8a83fbb3fcc1d578062