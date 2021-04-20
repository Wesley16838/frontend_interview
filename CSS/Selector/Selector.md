# CSS Selector

> Selector are used to select the element

1. Universal selector: Select all elements on the page. Ex: \*{}
2. Element Selector: Select all elements which match selector. Ex. ul{}
3. ID Selector: Select any HTML element that match this unique ID attribute. Ex. #{}
4. Class Selector: Select more than one element which match this class name. Ex. .{}
5. Descendant Combinator: Select the elements which inside outer element. Ex. #container .box {}
6. Child Combinator: Select the element which targets immediate child elements. Ex. #container > .box {}
7. General Sibling Combinator: Select all element which are preceded by element1. Ex. h2 ~ p {}
8. Adjacent Sibling Combinator: Select element which is an immediate sibling!
9. Attribute Selector: Select elements which matches HTML attribute. Ex. input[type="text"] {}
10. Pseudo-class: Defined special state of element. Ex. a:hover
11. Pseudo-element: Defined specific part of element. Ex. a::after

## Class vs ID selectors

1. Class selector is a name started by full dot, and ID selector is a name started by hash charactor(#)
2. ID can be used to identify one element, whereas a class can be used to identify more than one.
   ID > CLASS > TYPE
