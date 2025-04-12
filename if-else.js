let nilai = 40;

// console.log(nilai >= 50); // tergantung si nilainya bisa true atau false

if (nilai >= 80 && nilai <= 100) {
    nilai = 'A';
} else if (nilai >= 70 && nilai < 80) {
    nilai = 'B';
} else if(nilai >= 60 && nilai < 70) {
    nilai = 'C';
} else {
    nilai = 'D'
}

console.log(nilai);

nilai = 50;

// && semua kondisi harus terpenuhi, maka hasilnya true
// || salah satu kondisi harus terpenuhi, maka hasilnya true

let banding = nilai >= 80 && nilai <= 100; // antara true or false
console.log(banding, '&&'); // hasilnya false

let banding2 = nilai >= 80 || nilai <= 100; // antara true or false
console.log(banding2, '||'); // hasilnya true

let banding3 = nilai != 50; // tidak sama dengan
console.log(banding3, '!'); // hasilnya false

let number = 1;

if(number > 5) {
    if (number % 2 === 0) {
        console.log("lebih besar dari 5 dan genap");
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
} else {
    if (number % 2 === 0 ) {
        console.log("lebih kecil atau sama dengan dari 5 dan genap")
    } else {
        console.log("lebih kecil atau sama dengan dari 5 dan ganjil")
    }
}