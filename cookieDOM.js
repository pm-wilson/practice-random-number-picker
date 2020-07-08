export function removeElement(elementId) {
  const removeThis = document.getElementById(elementId);

  removeThis.classList.add("hidden");
}

export function addElement(elementId) {
  const addThis = document.getElementById(elementId);

  addThis.classList.remove("hidden");
}

export function updateElementText(element, text) {
  element.textContent = text;
}
