/*
 * All rights reserverd to Gilbert CAPUTO-CERNI.
 * This application is to use as that. Not modifications or partial code use are autorized.
 * If you want informations contact me at : manager-web@outlook.com
 */

class elementManager {
  constructor(tagName, tagType = "") {
    this.element = tagName;

    if (tagType === "") {
      this.element = document.querySelector(tagName);
    } else {
      this.element = document.createElement(tagType);
  }
  }

  getName() {
    return this.element;
  }

  getHtml() {
    return this.element.textContent;
  }

  getClass() {
    return this.element.classList;
  }

  setHtmlContent(strHtml) {
    this.element.innerHTML = strHtml;
  }

  setTxtContent(strTxt) {
    this.element.innerText = strTxt;
  }

  setAppendChild(childElement) {
    this.element.appendChild(childElement);
  }

//  setParent(parentEl) {
//    display(parentEl);
//    parentEl.appendChild(this.element);
//  }

  setClass(addClass) {
    this.element.setAttribute("class", addClass);
  }

  setNode(str) {
    return document.createTextNode(str);
  }

  queryAll() {
    document.querySelectorAll(this.element);
  }

  deleteElement(parentName) {
    document.parentName.removeChild(this.element);
  }

  clear() {
    this.element.innerHTML = "";
  }
}
