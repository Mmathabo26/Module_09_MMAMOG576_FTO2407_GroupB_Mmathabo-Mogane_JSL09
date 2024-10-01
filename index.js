fetch("https://images.unsplash.com/photo-1726502102615-07a77713dade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8")

.then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
    })