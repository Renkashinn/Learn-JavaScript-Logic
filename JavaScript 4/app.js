// const fruits = ['Banana', 'Orange', 'Apple', 'Manggo'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Buah ${fruits[i]}`);
// }

// for (fruit of fruits) {
//     console.log(`Buah ${fruit}`);
// }

const studentScore = {
    Olivia: 20,
    Liam: 13,
    Emma: 40,
    Noah: 18,
    Amelia: 32,
    Oliver: 10,
    Ava: 11,
    Elijah: 21,
    Sophia: 14,
    Mateo: 22,
};

// for (let student in studentScore) {
//     console.log(`${student} memiliki skor ${studentScore[student]}`);
// }

let total = 0
let scores = Object.values(studentScore)
for(let score of scores) {
    total += score
}
console.log(total / scores.length)