var el = document.getElementById("..."); // start element
var a = findUpTag(el, "A"); // search <a ...>
if (a) console.log(a.id);

function findUpTag(el, tag) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.tagName === tag) return el;
  }
  return null;
}
