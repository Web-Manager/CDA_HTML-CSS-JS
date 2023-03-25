/* 
 * All rights reserverd to Gilbert CAPUTO-CERNI.
 * This application is to use as that. Not modifications or partial code use are autorized.
 * If you want informations contact me at : manager-web@outlook.com
 */

class elementManager {
  constructor (tagName) {
    this.element = tagName;
  }
  
  getName() {
    return this.element;
  }
  
  append(parentName) {
    document.parentName.appendChild(this.element);
  }
  
  create(parentName) {
    document.createElement(tagName);
  }
  
  delete(parentName) {
    document.parentName.removeChild(this.element);
  }
  
  query() {
//    display("Query selected");
    return document.querySelector(`this.element`);
//    return "Query asked";
  }
  
  queryAll() {
    document.querySelectorAll(this.element);
  }

  clear() {
    this.element.innerHTML = "";
  }
}
