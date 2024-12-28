// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//     console.log(element);
// }
// angka.forEach(print);

// angka.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//     },
// ];

// animes.forEach(function (anime) {
//     console.log(`${anime.title} - ${anime.rating}/100`);
// });

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function (num) {
//     return num * 2;
// });

// const animeList = animes.map(function (anime) {
//     return anime.title.toUpperCase();
// });

// function perpangkatan(x) {
//     return x * x;
// }
// const hasil = perpangkatan(5);

// const hasil = function (x) {
//     return x * x;
// };

// const perpangkatan = (x) => {
//     return x * x;
// };

// const perpangkatan = () => {
//     return Math.floor(Math.random() * 1000) + 1;
// };

// const random = () => (
//     Math.floor(Math.random() * 1000) + 1
// )

// const add = (a, b) => a + b

// console.log('Halo...');
// setTimeout(() => {
//     console.log('masih di sana gak?');
// }, 5000);
// console.log('saya pergi ya..')

// const interval = setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaBaru = angka.filter((n) => {
//     return n < 5;
// });

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2011,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animes.filter((anime) => anime.rating >= 85)
//     .map((anime) => anime.title);

// const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
// const animeBaru = animes.filter((anime) => anime.year > 2010);

// const passGrade = [80, 85, 70, 90, 93, 77];
// const isGraduate = passGrade.every((score) => score >= 75);

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2011,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const isAnimeListNew = animes.some((anime) => anime.year > 2020);

// const examScore = [80, 85, 70, 90, 93, 77];
// let total = 0;
// for (let score of examScore) {
//     total += score;
// }

// const total = examScore.reduce((total, score) => {
//     return total + score;
// });

// const animes = [
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Attact on Titan',
//         rating: 92,
//         year: 2013,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2011,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const lowAmine = animes.reduce((lowAmine, currAnime) => {
//     console.log(lowAmine, currAnime)
//     if (currAnime.rating < lowAmine.rating) {
//         return currAnime;
//     }
//     return lowAmine
// });

// const person = {
//     firstName: 'Fai',
//     lastName: 'Azka',
//     fullName: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },
//     panggilNanti: function () {
//         setTimeout(function () {
//             console.log(this.firstName);
//         }, 3000);
//     },
// };

// function lemparDadu(sisi = 6) {
//     return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name, msg = 'Selamat bekerja') {
//     console.log(`${name} ${msg}`)
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// const campuran = [...nama, ...angka];

// const user = {
//     name: 'Fai',
//     email: 'fai@doe.com',
// };

// const credential = {
//     password: 'password',
//     token: 1892074029,
// };

// const userBaru = { ...user, ...credential};

// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// };

// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix', 'Gerard', 'Huey'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`Medali emas diraih: ${gold}`);
//     console.log(`Medali silver diraih: ${silver}`);
//     console.log(`Medali bronze diraih: ${bronze}`);
//     console.log(`Peserta lainnya: ${sisa}`);
// };

// const [gold, silver, bronze] = nama;

// const user = {
//     name: 'Fai',
//     email: 'fai@doe.com',
// };

// const { name: nama, email, phone = '254342598' } = user;

// const user = {
//     name: 'Fai',
//     email: 'fai@doe.com',
//     role: 'Admin',
// };

// const userAndRole = ({ name, role }) => {
//     return `${name} ${role}`;
// };

const animes = [
    {
        title: 'Attact on Titan',
        rating: 90,
        year: 2013,
    },
    {
        title: 'One Piece',
        rating: 89,
        year: 1999,
    },
    {
        title: 'Bleach',
        rating: 82,
        year: 2004,
    },
    {
        title: 'Hunter x Hunter',
        rating: 90,
        year: 2011,
    },
    {
        title: 'Naruto',
        rating: 84,
        year: 2002,
    },
];

const anime = animes.map(({ title, year, rating }) => {
    return `${title} (${year}) rating ${rating}`;
});
