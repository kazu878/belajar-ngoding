// cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// variabel bisa menampung tipe data string (text), integer/number, boolean, array, object

let nama = "Bryan"; // string
let umur = 22; // number
let apakahBenar = true; // boolean
let uang = 5000.5; // number juga namun dengan koma

// operator aritmatika

/*
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2); // 30
console.log(angka1 - angka2); // -10
console.log(angka1 * angka2); // 200
console.log(angka1 / angka2); // 0.5
console.log(angka1 % angka2); // 10

// belajar mengisi variabel

let penampungHasilOperatorAritmatika = angka1 + angka2; // 30
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2; // -10
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2; // 200
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2; // 0.5
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2; // 10
console.log(penampungHasilOperatorAritmatika);

*/

// string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstName = 'Agus';
let lastName = 'Setiawan';
let fullName = firstName + lastName;
console.log(fullName);
console.log(firstName + ' ' + lastName);
console.log(firstName - lastName); // NaN

// alur pembacaan code
// untuk membaca code harus membaca dari kiri ke kanan, dan atas ke bawah
// contoh

let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20
number = false;
console.log(number + 10); // 10

// kenapa false + 10 tetap menjadi 10, karena false = 0 dan true = 1
console.log(true + 10); // 11
console.log(true - 10); // -9

// membaca error
// jangan takut dengan error, justru harus takkut kalau tidak ada yang namanya error dalam pemrograman
// karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bisa bikin si programmer rada
// muak buat mencari errornya atau tata letak kesalahannya

// contoh error
const hewan = 'jerapah'
hewan = buaya;
console.log(hewan);