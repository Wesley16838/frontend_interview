# Display

> Specifies the display behavior of an element.

- Inline: like inline element so any height and width properties will have no effect.
- Block: like block element and start on a new line and could set up width, and height.
- flex: Display element as a block-level flex containter
- grid: Display element as a block-level grid containter
- talbe: let element behavior like <table> element

## Display: none VS visibility: hidden

1. visibility: hidden simply hides the element but it still occupy space and effect the layout
2. display: none removes the element from the normal layout flow (causes DOM reflow). It will not affect the layout of the document because it does not occupy space.

## Flex VS Grid

1. Flex
   - Be composed of Flex Container and Flex Items with each different property
     - For parent
       - Flex-direction: row, column
       - flex-wrap: nowrap, wrap, wrap-reverse
       - justify-content: center, space-between, space-around, space-evenly (main axis)
       - align-items: center, baseline, stretch (cross axis)
     - For children
       - flex-basis: initial length of a flexible item
       - flex-grow: Specifies how much the item will grow relative to the other flexible items inside same container.
       - flex-shrink: Specifies how the item will shrink relatvie to the other flexible items inside same container.
       - align-self: Overwrite the align-items value for specific flex items.
2. Grid
   - Be composed of Grid Container and Grid Items with each different property
   - For parent
   - grid-template-columns
   - grid-template-rows
   - grid-template-areas
   - grid-gap/grid-column-gap/grid-row-gap
   - For children:
     - grid-area: Gives an item a name so that it can be referenced by a template created with the grid-template-areas property.
     - grid-column-start/ grid-column-end/ grid-row-start/ grid-row-end: Determine the item's location to locate on the specific grid lines
3. Difference
   - Grid is Container-Based, Flexbox is Content-Based
     - In flexbox, size of item is defined inside the flex-item itself, whereas the size of items in grid layout is defined in grid container
   - Grid Has a “Gap” Property, Flexbox Doesn’t
   - Flexbox is One Dimensional, Grid is Two Dimensional
     - Flexbox need to decide row-based or column-base(flex-direction), whereas grid work column and row together!(grid-template-rows/columns)
   - CSS grid is for layout, Flexbox is for alignment, Grid help us build more complicated layout due to two dimention
     - Using flexbox when
       1. Small design to implement with few rows and columns
       2. You need to align elements
       3. You need a content-first design
     - Using grid when
       1. Complex design to implement
       2. have a gap between block elements
       3. Overlap elements
       4. A layout-first design
