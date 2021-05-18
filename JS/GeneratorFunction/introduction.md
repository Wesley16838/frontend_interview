# Generator

1. Generators are functions which can be paused and later re-entered.
2. Using (\*)asterisk to declare the generator function, which returns a Generator object.
3. Next & Yield
   - when "next" is called, the function is executed until meet the first yield and return value of the yield operator
   - A yield , which causes the generator to once again pause and return the generator's new value
