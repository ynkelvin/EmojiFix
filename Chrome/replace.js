var css = ".emoji-small-loaded .emoji {  background-image: url('"+chrome.extension.getURL('images/d80a3fdced298fcbff1f850e74b3e687.png')+"');}.emoji-large-loaded .k .emoji {  background-image: url('"+chrome.extension.getURL('images/1a4a846f5fc7397877db9231c84b94d7.jpg')+"');}",
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);