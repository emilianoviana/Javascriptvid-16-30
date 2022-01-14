let coba = function () {
    return "COBA FUNCTION";
}

let buah = ['apel','mangga','jeruk',10,coba(),
    (tes =() => "HASIL RETUR ARROW FUNCTION"),
    function name() {
        return "AYO NONTON VLOG AKU";
    }
];

console.log(buah);

console.log(buah[0]);

for (let i in buah) {
    console.log(buah[i]);
    
}

console.log(buah[5]());

console.log(buah[6]());