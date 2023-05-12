document.getElementById('loadData').addEventListener('click', loadData);

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error:', error));
}

function displayData(data) {
    const dataDiv = document.getElementById('data');
    data.forEach(item => {
        dataDiv.innerHTML += `<p>${item.title}</p>`;
    });
}
