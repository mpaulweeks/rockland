# Scrape Research

rip the main photo image

```javascript
// eg https://www.facebook.com/rocklandhistory/photos/a.534233549973995/3694660297264622

Array.from(document.getElementsByTagName('img'))
  .filter(elm => elm.getAttribute('data-visualcompletion') === "media-vc-image")
  .map(elm => elm.src)[0];

```
