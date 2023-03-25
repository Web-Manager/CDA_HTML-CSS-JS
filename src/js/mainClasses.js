/* 
 * All rights reserverd to Gilbert CAPUTO-CERNI.
 * This application is to use as that. Not modifications or partial code use are autorized.
 * If you want informations contact me at : manager-web@outlook.com
 */

class elementManager {
  constructor(tagName, tagType = "") {
    this.element = tagName;

    if (tagType === "") {
      display("Si tagType est vide : '" + this.element + "' * / * " + tagType);
      this.element = document.querySelector(tagName);
    } else {
      display("Si tagType n'est pas vide : '" + this.element + "' * / * " + tagType);
      this.element = document.createElement(tagType);
  }
  }

  getName() {
    return this.element;
  }

  append(parentName) {
    document.parentName.appendChild(this.element);
  }

  create(parentName) {
    document.createElement(this.element);
  }

  delete(parentName) {
    document.parentName.removeChild(this.element);
  }

  query() {
//    display("Query selected");
    return document.querySelector(this.element);
//    return "Query asked";
  }

  queryAll() {
    document.querySelectorAll(this.element);
  }

  clear() {
    display(this.element);
    this.element.innerHTML = "";
  }
}
