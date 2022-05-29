// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// let firstUserFavoriteColor = new Set();
function removeDuplicate(data){
    let dataTemp =  new Set();
    for (var i = 0; i < data.length; i++) {
        dataTemp.add(data[i]);
    }
    return dataTemp;
}

let dataFirstUserFavoriteColor = ["Yellow", "Pink", "White", "Purple"];

let firstUserFavoriteColor = removeDuplicate(dataFirstUserFavoriteColor);

let dataFirstUserFavoriteRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

let firstUserFavoriteRestaurant = removeDuplicate(dataFirstUserFavoriteRestaurant);

let dataSecondUserFavoriteColor = ["Blue", "Black", "Grey"];

let secondUserFavoriteColor = removeDuplicate(dataSecondUserFavoriteColor);

let dataSecondUserFavoriteRestaurant = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

let secondUserFavoriteRestaurant = removeDuplicate(dataSecondUserFavoriteRestaurant);


// console.log(firstUserFavoriteColor);
// console.log(firstUserFavoriteRestaurant);

const firstUser = {
    "name" : "Monica",
    "gender" : "Female",
    "age" : 17,
    "email" : "monica@dingdong.com",
    "favoriteColor" : firstUserFavoriteColor,
    "isHavePet" : true,
    "education" : [
        {
            "name" : "SD 01",
            "city" : "Jakarta",
            "graduate" : "2016"
        },
        {
            "name" : "SMP 02",
            "city" : "Jakarta",
            "graduate" : "2019"
        },
        {
            "name" : "SMA 03",
            "city" : "Tangerang",
            "graduate" : ""
        }
    ],
    "favoriteRestaurant" : firstUserFavoriteRestaurant,
};

// console.log(firstUser);
const secondUser = {
    "name" : "Wendy",
    "gender" : "Male",
    "age" : 23,
    "email" : "wendy@dingdong.com",
    "favoriteColor" : secondUserFavoriteColor,
    "isHavePet" : false,
    "education" : [
        {
            "name" : "SD 02",
            "city" : "Jakarta",
            "graduate" : "2010"
        },
        {
            "name" : "SMP 03",
            "city" : "Bogor",
            "graduate" : "2013"
        },
        {
            "name" : "SMA 01",
            "city" : "Surabaya",
            "graduate" : "2016"
        },
        {
            "name" : "Universitas Maju",
            "city" : "Tangerang",
            "graduate" : ""
        }
    ],
    "favoriteRestaurant" : secondUserFavoriteRestaurant,
};
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};