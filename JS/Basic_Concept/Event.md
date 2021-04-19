# Event Propagation, Capturing, and Bubbling

## Propagation

> Propagation refers to how events travel through the Document Object Model (DOM) tree

## Event Bubbling

> Means the event travels from target which user triggered to the root

## Event Captureing

> Means the event travels from root to target

## Event.stopPropagation()

> Use Event.stopPropagation() to immediately stop the event from bubbling to its parent.

## Event Delegation

> Using Event Delegation to handle events due to event bubbling

```javascript
<!DOCKTYPE HTML>
<html>
  <head>
    <title>Event Delegation</title>
  </head>

  <body>
    <div class="container">
      <ul id="fruits">
        <li id="apple">Apple</li>
        <li id="banana">Banana</li>
        <li id="guavava">Guavava</li>
        <li id="greps">Greps</li>
        <li id="orange">Orange</li>
      </ul>
    </body>
  <script>

    // Bind an event listener to parents which is fruits.
    var apple = document.querySelector('#fruits');
    apple.addEventListener('click', (event) => {
      console.log(event.target.id + " clicked");
      alert(event.target.id + " clicked");
    });
  </script>
</html>
```
