export function createElement(paragraph) {
  const LIST = document.querySelector('.list');
  
  const element = document.querySelector('#paragraph-template').content.querySelector('.paragraph').cloneNode(true);
  const paragraphText = element.querySelector('.paragraph__text');

  paragraphText.textContent = paragraph;

  LIST.append(element);
}