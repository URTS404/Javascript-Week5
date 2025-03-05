function prosesSalam() {
    let jam = parseInt(document.getElementById("jamInput").value);
    let hasil = "Selamat Tidur"; 

    if (jam >= 6 && jam <= 10) hasil = "Selamat Pagi";
    else if (jam >= 11 && jam <= 14) hasil = "Selamat Siang";
    else if (jam >= 15 && jam <= 17) hasil = "Selamat Sore";
    else if (jam >= 18 && jam <= 22) hasil = "Selamat Malam";

    document.getElementById("hasilSalam").innerText = hasil;
}

function hitungLuasDanKeliling() {
    let pilihan = document.getElementById("pilihanHitung").value;
    let panjang = parseFloat(document.getElementById("panjang").value);
    let lebar = parseFloat(document.getElementById("lebar").value);

    let hasil = (pilihan === "luas") ? panjang * lebar : 2 * (panjang + lebar);
    document.getElementById("hasilHitung").innerText = `${pilihan.charAt(0).toUpperCase() + pilihan.slice(1)}: ${hasil}`;
}

function tampilkanGanjil() {
    let batas = parseInt(document.getElementById("batasGanjil").value);
    let hasil = [];
    for (let i = 1; i <= batas; i += 2) hasil.push(i);
    document.getElementById("hasilGanjil").innerText = hasil.join(", ");
}

function tampilkanGenap() {
    let batas = parseInt(document.getElementById("batasGenap").value);
    let hasil = [];
    for (let i = 2; i <= batas; i += 2) hasil.push(i);
    document.getElementById("hasilGenap").innerText = hasil.join(", ");
}

function cekPrima(angka) {
    if (angka < 2) return false;
    for (let i = 2; i <= Math.sqrt(angka); i++) if (angka % i === 0) return false;
    return true;
}

function tampilkanPrima() {
    let batas = parseInt(document.getElementById("batasPrima").value);
    let hasil = [];
    for (let i = 2; i <= batas; i++) if (cekPrima(i)) hasil.push(i);
    document.getElementById("hasilPrima").innerText = hasil.join(", ");
}

function tampilkanGrafik() {
    let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
    let hasil = "";

    for (let h of hari) {
        let jumlah = parseInt(prompt(`Masukkan jumlah mahasiswa hadir pada hari ${h}:`));
        hasil += `${h}: ${"x".repeat(jumlah)}\n`;
    }

    document.getElementById("hasilGrafik").innerText = hasil;
}

function resetSemua() {
    document.querySelectorAll("p, pre").forEach(el => el.innerText = "");
    document.querySelectorAll("input").forEach(el => el.value = "");
}