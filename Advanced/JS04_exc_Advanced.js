const circle = document.getElementById('circle');
const message = document.getElementById('message');

// Function to handle mouseover event
function handleMouseOver() {
    message.textContent = 'You are in the circle';
}

// Function to handle mouseout event
function handleMouseOut() {
    message.textContent = 'You are outside of the circle';
}

// Function to handle click event
function handleClick() {
    document.body.style.backgroundColor = 'gray';
}

// Function to handle double click event
function handleDoubleClick() {
    document.body.style.backgroundColor = 'blue';
}

// Add event listeners to the circle
circle.addEventListener('mouseover', handleMouseOver);
circle.addEventListener('mouseout', handleMouseOut);
circle.addEventListener('click', handleClick);
circle.addEventListener('dblclick', handleDoubleClick);
