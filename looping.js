// while ()
// for ()

// let i = 5;

// while (i >= 5) {
//     console.log(i);
//     i++
// }

// dalam looping ada yang namanya arah, kiri itu pengurangan, kanan itu pertambahan
// hati hati akan infinity loop, atau loopnya tidak jalan

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let name = "bryan";

// ada yang namanya method length untuk tipe data string dan array
// method length mengembalikan nilai angka, total huruf yang ada pada string, atau total element yang ada pada array

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// pada tipe data string atau array di javascript, ada yang namanya indexing
// dimana index itu SUDAH PASTI berawal dari 0;

// console.log(name[0] + name[5]);

// diberikan kasus untuk membalikkan suatu kata, tanpa menggunakan method reverse

// let name = "agus"; // length 4, sedangkan index itu dari 0, a->0, g->1, u->2, s->3
// let result = "";

// for(let i = name.length - 1; i >= 0; i--) { // i = 4 - 1; 4 - 1 >= 0; i--
//     result += name[i]; //s => su => sug => suga
//     // ada perintah lagi
// }
// console.log(result);

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log(j);
//     }
//     console.log('');
// }
// console.log("selesai");

// kesimpulan looping sering bertemu dengan method length
// looping itu agar membuat code jadi lebih pendek
// looping itu agar membuat suatu proses menjadi dinamis

// let i = 0; // i adalah counternya

// while (i < 100) {
//     console.log(i);
//     i += 5; // disini counternya ditentukan besarnya berapa
// }

// let i = 0;

// // disini kita akan belajar menggabungkannya dengan if else
// while (i < 50) {
//     // disini kita akan mencari ganjil atau genap
//     if (i % 2 === 0) {
//         console.log(`${i} adalah genap`)
//     } else {
//         console.log(`${i} adalah ganjil`);
//     }
//     i++
// }

// simpelnya modulus operator adalah sisa bagi
// misal 3 / 2 hasilnya akan koma, dan kalau 3 % 2 hasilnya akan 1
// maka bisa dibilang apapun angkanya kalau di modulus apapun itu angkanya juga dan hasilnya adalah 0
// maka itu adalah kelipatannya
// contoh n % 3 === 0 // maka ini adalah kelipatan 3
// contoh n % 5 === 0 // maka ini adalah kelipatan 5
// contoh n % 2 === 0 // maka ini adalah kelipatan 2, dan 2 kebetulan bisa menentukan ganjil atau genap

// problem fizzbuzz
//jika i adalah kelipatan 3 maka tampilkan fizz
// jika i adalah kelipatan 5 maka tampilkan buzz
//jika i adalah kelipatan 3 dan sekaligus kelipatan 5 maka tampilkan FizzBuzz
// jika bukan kelipatan diatas maka tampilkan angka

// for (let i = 1; i < 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0 && i % 5 !== 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }
// }

//jika i adalah kelipatan 2 maka tampilkan ping
// jika i adalah kelipatan 3 maka tampilkan pong
//jika i adalah kelipatan 5 maka tampilkan boom 
// jika i adalah kelipatan 2 dan sekaligus kelipatan 3 dan 5 maka tampilkan PingPongBoom
// selain diatas maka tampilkan angka

// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
//         console.log("PingPongBoom");
//     } else if (i % 2 === 0 && i % 3 !==0) {
//         console.log('ping');
//     } else if (i % 3 === 0 && i % 2 !== 0) {
//         console.log('pong');
//     } else if (i % 7 === 0) {
//         console.log('boom');
//     } else {
//         console.log(i);
//     }
// }

// pada looping ada yang namanya break dan continue;
// break membuat loop berhenti sepenuhnya
// continue membuat loop skip di iterasi tertentu

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
}