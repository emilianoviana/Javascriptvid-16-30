let tblmenu = [
    {
    idmenu : 1, 
    idkategori : 1, 
    menu : "anggur", 
    gambar : "anggur.jpg", 
    harga : 10000,
    },

    {
    idmenu : 2, 
    idkategori : 1, 
    menu : "Semangka", 
    gambar : "semangka.jpg", 
    harga : 10000,
    },

    {
    idmenu : 3, 
    idkategori : 2, 
    menu : "Ayam pok pok", 
    gambar : "ayampokpok.jpg", 
    harga : 20000,
    },

    {
    idmenu : 4, 
    idkategori : 2, 
    menu : "geprek", 
    gambar : "geprek.jpg", 
    harga : 25000,
    },

    {
    idmenu : 5, 
    idkategori : 3, 
    menu : "Es teh", 
    gambar : "esteh.jpg", 
    harga : 5000,
    },

    {
    idmenu : 6, 
    idkategori : 3, 
    menu : "Caramel Machiato", 
    gambar : "caramelmachiato.jpg", 
    harga : 15000,
    },
];

// let tampil = tblmenu.map(function (kolom) {
//     return `<div class="product-content">
//         <div class="image">
//             <img src="/images/${kolom.gambar}" alt="">
//         </div>
//         <div class="titel">
//             <h2>${kolom.menu}</h2>
//         </div>
//             <div class="harga">
//                 <h2>Rp. ${kolom.harga}</h2>
//             </div>
//         </div>`;
// });

// let isi = document.querySelector(".produk");
// isi.innerHTML = tampil;

// let btnbeli = document.querySelector(".btn-beli > button");
// btnbeli.onclick = function () {
//     console.log(btnbeli.dataset.id);
// };

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
                <div class="image">
                    <img src="/images/${kolom.gambar}" alt="">
                </div>
                <div class="titel">
                    <h2>${kolom.menu}</h2>
                </div>
                <div class="harga">
                    <h2>Rp. ${kolom.harga}</h2>
                    <div class="btn-beli">
                        <button data-idmenu=${kolom.idmenu}>Buy!</button>
                    </div>
                </div>
            </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;


//console.log(tampil);

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
};