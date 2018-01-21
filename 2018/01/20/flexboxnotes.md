# Box Model

```css
display: inline
```
* Occupies the height in the page, and therefore aligns horizontally
* *example*, text
```css
display: block
```
* Occupies the width of teh page, and therefore aligns vertically
* *example*, images
```css
display: inline-block
```
* applies inline properties to block elements so that they may be aligned horizontally
* *example*, allows two images to be placed next to each other on a page
***
## Floats
* Floats were introduced in CSS to try to better allow horizontal alignment and text wrapping
```css
float: left
```
>Aligns block element to the top left of its container. Neighboring text will wrap around the floated element. Any sibling elements with a left float will attempt to align just to the right of the previous left floated element, but will align to the left of the page directly below the left most floated elemnt of the previous row.
```CSS
float: right
```
> Will behave in the same manner as `float: left`, but rather aligning to the top right.
* associated with float...
```CSS
clear: left
clear: right
clear: both
```
> Indicates that the elemnt to which it is applied should ignore normal behavior when next to a floated element.
* *example*, allows the positioning of text under a floated element instead of the typical behavior of wrapping.
```css
margin
```
> Applies spacing to the outside of the element.
* *example*, providing space between two images so that they don't touch each other.
```css
padding
```
> Applies inward spacing ot the element.
* *example*, keeping text from touching the sides of its parent element.
```css
box-sizing: content-box
```
> The default for box-sizing. When applying a width and heigth to an element, the margin, border, and padding are then added to the overall height and widdth, resulting in a greater height and width than specified by the given height and width property.
* *example*, a div with a width and height of 100px, margin of 10px, border of 1px, and padding of 10px will have a final width and height of 142px.
```css
box-sizing: border-box
```
> Does not add border or padding to the height or width provided for the element, but only the margin.
* *example*, used for responsive design layouts. a div with a provided height and width of 100px, border of 1px, and padding of 10px will have a final width of 100px. Adding 10px of margine woudl amount to 120px.