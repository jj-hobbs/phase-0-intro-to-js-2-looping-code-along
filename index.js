function countDown() {
    let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--);
}
}

// const cards = [[], "birthday"];

function writeCards(cards, type) {
    const messages = [];
    for (let i = 0; i < cards.length; i++) {
      console.log(`Thank you, ${cards[i]}, for the wonderful ${type} gift!`);
      messages.push(`Thank you, ${cards[i]}, for the wonderful ${type} gift!`)
    }
  
    return messages;
  }
  
//   writeCards(cards);