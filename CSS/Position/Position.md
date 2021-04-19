# Position

## Position Property

> The Position property specific the type positioning method used for an element. There are five different position value

1. Static
   > Elements are positioned static by default which means not affected by the top, bottom, left, and right properties.
2. relative: means be -0sitioned to its normal position, which means the element stays in the same position even if the page is scrolled.Using Top, Left, Right, Bottom to position the element
3. fixed
4. absolute: Be positioned relative to the nearest element's parent. If it has no positioned ancestors, it will be positioned relative to the document body (Note: A "positioned" element is one whose position is anything except static.)
5. sticky: Toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

## Overlapping Elements

> The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
