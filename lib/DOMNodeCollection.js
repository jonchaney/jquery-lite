class DOMNodeCollection {
  constructor(node) {
    this.nodeCollection = node;
  }

  each(cb) {
    this.nodeCollection.forEach(cb);
  }

  html(string) {
    if (string) {
      for (let i = 0; i < this.nodeCollection.length; i++) {
        this.nodeCollection[i].innerHTML = string;
      }
    } else {
      return this.nodeCollection[0].innerHTML;
    }
  }

  empty() {
    for (let i = 0; i < this.nodeCollection.length; i++) {
      this.nodeCollection[i].innerHTML = "";
    }
  }

  append(children) {
    if (this.nodeCollection.length === 0) return;

    if (typeof children === 'object' &&
      !(children instanceof DOMNodeCollection)) {
        children = new DOMNodeCollection(children);
      }

    if (typeof children === 'string') {
      this.each(node => node.innerHTML += children);
    } else if (children instanceof DOMNodeCollection) {
      this.each(node => {
       children.each(childNode => {
         childNode.appendChild(childNode.cloneNode(true));
       });
     });
    }
    }

    addClass(newClass) {
      this.each(node => node.classList.add(newClass));
     }

    removeClass(newClass) {
      this.each(node => node.classList.remove(newClass));
     }

    attr(elem) {
      return this.nodeCollection[0].getAttribute(elem);
     }



}

// export default DOMNodeCollection;
module.exports = DOMNodeCollection;
