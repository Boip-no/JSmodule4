fetch ("https://jsonplaceholder.typicode.com/todos")
    .then(result => result.json())
  .then((res) => {
    createCards(res);
})
.catch(err => console.log(err))

function createCards(result) {
	console.log(result);
}

for (var i = 0; i < createCards.length; i++) {
 createCards[i]name
}
