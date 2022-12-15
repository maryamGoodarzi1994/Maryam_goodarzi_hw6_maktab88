function carMatch() {
  let carNum = +prompt("Enter the number of cars");
  if (typeof carNum !== "number") {
    console.log("invalid input!");
    return;
  }
  let carName = new Array(carNum);
  let carPlaces = new Array(300);
  let arrOfWinner = [];

  for (let i = 0; i < carNum; i++) {
    carName[i] = prompt(`Enter the car name  ${i + 1}  `);
  }

  carName = shuffledArray(carName);

  let objOfNameAndPlace = carName.map((item) => ({ item, place: 0 }));
  
  for (let i = 0; i < 300; i++) {
    carPlaces.fill("*");
    for (let j = 0; j < carNum; j++) {
      objOfNameAndPlace[j].place += Math.floor(Math.random() * 10) + 1;

      objOfNameAndPlace.forEach(function (value, index) {
        if (value.place === objOfNameAndPlace[j].place && index !== j) {
          value.place = 0;
        }
      });

      if (objOfNameAndPlace[j].place >= 300) {
        arrOfWinner.push(objOfNameAndPlace[j].item);
        objOfNameAndPlace.splice(j, 1);
        carNum = carNum - 1;
        continue;
      }

      carPlaces.splice(objOfNameAndPlace[j].place,1,objOfNameAndPlace[j].item);

    }
    console.log(carPlaces.join(""));
  }
  console.log("winner  is  " + arrOfWinner[0]);
}
function shuffledArray(arr) {
  if (!Array.isArray(arr)) {
    return "invalid input";
  }
  return arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

console.log(carMatch());
