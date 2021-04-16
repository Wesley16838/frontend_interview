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
       - flex-grow:
