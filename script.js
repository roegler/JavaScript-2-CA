function addCard(number) {
    console.log("adding card with number " + number);
    let isOdd = number % 2 != 0;
    console.log(isOdd);

    let card = `<div data-number="${number}" class="card ${isOdd ? 'green-card' : ''}">
        <p>This is a test card for Noroff it is number ${number}</p>
        <div class="divider"></div>
        <p>By Marie</p>
        <p><small>43 minutes ago</small></p>
        <button class="view-button" onclick="#">View on site</button>
        </div>`;

    let container = document.getElementById("card-container")
    container.innerHTML += card;
}

let numberOfCards = 9;
for (var i = 0; i < numberOfCards; i++) {
    addCard(i + 1);
}
