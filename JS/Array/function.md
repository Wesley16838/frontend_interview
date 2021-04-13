# Array Functions

1. map, filter, reduce : These methods will return a new array with all (or some) values of the original one
   a. Map() : forEach vs map

   ```javascript
   // map execute provided function on every element and return a new array
   var officersIds = officers.map(function (officer) {
     return officer.id;
   });
   ```

   ```javascript
   // forEach will allow a callback function to mutate the current array (do not return anything!).
   var officersIds = [];
   officers.forEach(function (officer) {
     officersIds.push(officer.id);
   });
   ```

   b. Reduce(): Executes a reducer function (that you provide) on each element of the array to reduce it to a single value

   ```javascript
   const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0); // initial value

   //Flattening an Array Using Reduce

   const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
   function flattenArray(data) {
     // our initial value this time is a blank array
     const initialValue = [];

     // call reduce on our data
     return data.reduce((total, value) => {
       // if the value is an array then recursively call reduce
       // if the value is not an array then just concat our value
       // concat => join two arrays
       return total.concat(Array.isArray(value) ? flattenArray(value) : value);
     }, initialValue);

     //Change object structure
     const pokemon = [
       { name: "charmander", type: "fire" },
       { name: "squirtle", type: "water" },
       { name: "bulbasaur", type: "grass" },
     ];
     // to
     const pokemonModified = {
       charmander: { type: "fire" },
       squirtle: { type: "water" },
       bulbasaur: { type: "grass" },
     };
     const getMapFromArray = (data) =>
       data.reduce((acc, item) => {
         // add object key to our object i.e. charmander: { type: 'water' }
         acc[item.name] = { type: item.type };
         return acc;
       }, {});
   }
   ```

   c. Filter(): Filter array with provided condition. Basically, if the callback function returns true, the current element will be in the resulting array. If it returns false, it won’t be.

   ```javascript
   var rebels = pilots.filter(function (pilot) {
     return pilot.faction === "Rebels";
   });
   ```

2. some(), every(), find()
   a. some(): executes the callback function once for each element present in the array until it finds the one where callback returns a truthy value

   ```javascript
   const listHasPilots = operatives.some((operative) => operative.pilot); //
   ```

   b. every(): check if every value of the array matches your condition by using .every(), will return true only if every occurence match.

   c. find(): it finds what you’re looking for and will return the first value that corresponds to the passed condition. (Use .filter() instead of .find() if you need a list of all matches)

   ```javascript
   const firstPilot = operatives.find((operative) => operative.pilot);
   ```
