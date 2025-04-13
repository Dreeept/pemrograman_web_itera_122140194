// ========================
// INISIALISASI
// ========================
const body = document.body;
const tanggalElemen = document.getElementById("tanggal-waktu");
const cuacaElemen = document.getElementById("cuaca");
const jadwalList = document.getElementById("jadwal-hari-ini");
const tugasList = document.getElementById("tugas-list");

// ========================
// TANGGAL & WAKTU SEKARANG
// ========================
const updateTanggalWaktu = () => {
  const now = new Date();
  const formatted = now.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  tanggalElemen.textContent = formatted;
};
setInterval(updateTanggalWaktu, 1000);
updateTanggalWaktu();

// ========================
// CLASS DATA
// ========================
class Jadwal {
  constructor(matkul, waktu) {
    this.matkul = matkul;
    this.waktu = waktu;
  }
}

class Tugas {
  constructor(nama, deadline) {
    this.nama = nama;
    this.deadline = deadline;
  }
}

// ========================
// JADWAL KULIAH
// ========================
const simpanJadwal = (data) =>
  localStorage.setItem("jadwal", JSON.stringify(data));
const loadJadwal = () => JSON.parse(localStorage.getItem("jadwal")) || [];

const renderJadwal = () => {
  const jadwal = loadJadwal();
  jadwalList.innerHTML = "";

  jadwal.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="flex justify-between items-start gap-4 w-full">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-x-4 flex-wrap sm:flex-nowrap">
            <p class="text-black font-semibold text-lg whitespace-nowrap">${item.waktu}</p>
            <p class="text-gray-800 font-medium break-words break-all w-full sm:w-auto overflow-wrap break-word">
              ${item.matkul}
            </p>
          </div>
        </div>
        <button class="text-red-500 opacity-50 hover:opacity-100 hover:text-red-700 transition-all duration-200">❌</button>
      </div>
    `;

    li.className =
      "bg-transparent p-3 rounded shadow-sm hover:shadow-md transition duration-200 w-full list-none";

    // Event listener hapus
    const hapusBtn = li.querySelector("button");
    hapusBtn.onclick = () => {
      const updated = jadwal.filter((_, i) => i !== index);
      simpanJadwal(updated);
      renderJadwal();
    };

    jadwalList.appendChild(li);
  });
};

const tambahJadwal = () => {
  const matkul = document.getElementById("mata-kuliah").value;
  const waktu = document.getElementById("waktu-kuliah").value;

  // Cek jika hanya mata kuliah yang diisi
  if (matkul && !waktu) {
    alert("Mohon isi waktunya");
    return;
  }

  // Cek jika hanya waktu yang diisi
  if (!matkul && waktu) {
    alert("Mohon masukkan nama mata kuliah");
    return;
  }

  // Cek jika kedua input kosong
  if (!matkul || !waktu) {
    alert("Tolong isi nama mata kuliah dan waktu!");
    return;
  }

  const jadwal = loadJadwal();
  const jadwalBaru = new Jadwal(matkul, waktu);
  jadwal.push(jadwalBaru);
  simpanJadwal(jadwal);
  renderJadwal();

  resetInput("mata-kuliah", "waktu-kuliah");
};

renderJadwal();

// ========================
// DAFTAR TUGAS
// ========================
const simpanTugas = (data) =>
  localStorage.setItem("tugas", JSON.stringify(data));
const loadTugas = () => JSON.parse(localStorage.getItem("tugas")) || [];

const renderTugas = () => {
  const tugas = loadTugas();
  tugasList.innerHTML = "";

  tugas.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="flex justify-between items-center gap-4 w-full">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-x-4 flex-wrap sm:flex-nowrap">
            <p class="text-black font-semibold text-lg whitespace-nowrap">Deadline: ${item.deadline}</p>
            <p class="text-gray-800 font-medium break-words break-all w-full sm:w-auto overflow-wrap break-word">
              ${item.nama}
            </p>
          </div>
        </div>
        <button class="text-red-500 opacity-50 hover:opacity-100 hover:text-red-700 transition-all duration-200">❌</button>
      </div>
    `;

    li.className =
      "bg-transparent p-3 rounded shadow-sm hover:shadow-md transition duration-200 w-full list-none";

    const hapusBtn = li.querySelector("button");
    hapusBtn.onclick = () => {
      const updated = tugas.filter((_, i) => i !== index);
      simpanTugas(updated);
      renderTugas();
    };

    tugasList.appendChild(li);
  });
};

const tambahTugas = () => {
  const nama = document.getElementById("nama-tugas").value;
  const deadline = document.getElementById("deadline-tugas").value;

  // Cek jika hanya nama tugas yang diisi
  if (nama && !deadline) {
    alert("Mohon isi deadlinenya");
    return;
  }

  // Cek jika hanya waktu yang diisi
  if (!nama && deadline) {
    alert("Mohon masukkan nama nama tugas");
    return;
  }

  // Cek jika kedua input kosong
  if (!nama || !deadline) {
    alert("Tolong isi nama nama tugas dan deadlinenya!");
    return;
  }

  const tugas = loadTugas();
  const tugasBaru = new Tugas(nama, deadline);
  tugas.push(tugasBaru);
  simpanTugas(tugas);
  renderTugas();

  resetInput("nama-tugas", "deadline-tugas");
};

renderTugas();

// ========================
// CUACA
// ========================
const getCuaca = async () => {
  const apiKey = "b5665c67664639879e01c6c25715bb68";
  const lat = -5.43;
  const lon = 105.27;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=id`
    );
    const data = await res.json();
    const temp = data.main.temp;
    const kondisi = data.weather[0].description;
    const icon = data.weather[0].icon;
    const kota = data.name;

    cuacaElemen.innerHTML = `
        <div class="flex items-center gap-2">
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="cuaca" class="w-8 h-8" />
          <span>${kota}: ${temp}°C, ${kondisi}</span>
        </div>
      `;
  } catch (err) {
    cuacaElemen.textContent = "Gagal memuat cuaca";
  }
};

getCuaca();

// ========================
// UTILITAS
// ========================
const resetInput = (...ids) => {
  ids.forEach((id) => (document.getElementById(id).value = ""));
};
