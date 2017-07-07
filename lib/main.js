const DOMNodeCollection = require('./DOMNodeCollection');

window.$l = (e) => {
  switch (typeof e) {
    case "string":
      return NodeList(e);
    case "function":
    case "object":
    default:
  }
  // console.log(typeof e);
  // return document.getElementsByTagName(e);
};

function NodeList(arg) {
  const nodeList = document.querySelectorAll(arg);
  const nodeArray = Array.from(nodeList);
  return new DOMNodeCollection(nodeArray);
}
