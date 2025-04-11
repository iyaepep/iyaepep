function formatRupiah(angka) {
    return angka.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

document.addEventListener("DOMContentLoaded", () => {
    const hargaInput = document.getElementById("harga");
    const diskonInput = document.getElementById("diskon");
    const form = document.getElementById("diskonForm");
    const hasil = document.getElementById("hasil");

    // Reset input dan hasil saat halaman dimuat
    hargaInput.value = "";
    diskonInput.value = "";
    hasil.innerHTML = "";

    hargaInput.addEventListener("input", () => {
        hargaInput.value = formatRupiah(hargaInput.value);
    });

    
    diskonInput.addEventListener("input", () => {
        diskonInput.value = diskonInput.value.replace(/\D/g, "");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let harga = parseInt(hargaInput.value.replace(/\./g, "")) || 0;
        let diskon = parseFloat(diskonInput.value);

        hasil.innerHTML = "";
        if (harga <= 0) return hasil.innerHTML = '<p style="color:red;">Harga tidak boleh kosong atau 0!</p>';
        if (isNaN(diskon) || diskon < 0 || diskon > 100) return;

        const diskonHarga = (harga * diskon) / 100;
        const total = harga - diskonHarga;

        hasil.innerHTML = `
            <div class="result">
                <p>Harga Awal: Rp ${harga.toLocaleString("id-ID")}</p>
                <p>Harga Diskon: Rp ${diskonHarga.toLocaleString("id-ID")}</p>
                <p><b>Total: Rp ${total.toLocaleString("id-ID")}</b></p>
            </div>
        `;
    });
});
            