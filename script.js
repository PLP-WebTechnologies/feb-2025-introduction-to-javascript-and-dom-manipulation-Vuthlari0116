// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    document.getElementById('title').innerText = 'New Title';
    document.getElementById('art-description').innerText = 'This is a new description.';
});

// Modify CSS styles via JavaScript
document.getElementById('style-btn').addEventListener('click', () => {
    document.getElementById('art-description').style.color = 'red';
    document.getElementById('art-description').style.fontSize = '24px';
});

// Add an element when a button is clicked
document.getElementById('add-element-btn').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is a new element.';
    document.getElementById('art-container').appendChild(newElement);
});

// Remove an element when a button is clicked
document.getElementById('remove-element-btn').addEventListener('click', () => {
    const artContainer = document.getElementById('art-container');
    if (artContainer.children.length > 1) {
        artContainer.removeChild(artContainer.lastChild);
    }
});