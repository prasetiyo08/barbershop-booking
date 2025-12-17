import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    capster: "",
    hari: "",
    tanggal: "",
    jam: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simpan ke Firestore
      await addDoc(collection(db, "bookings"), formData);
      alert("Booking Berhasil! Terima kasih.");
      setFormData({
        nama: "",
        telepon: "",
        capster: "",
        hari: "",
        tanggal: "",
        jam: "",
      }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Terjadi kesalahan, coba lagi.");
    }
    setLoading(false);
  };

  return (
    <div className="booking-card">
      <h1>Barbershop Booking</h1>
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          marginBottom: "20px",
        }}
      >
        Classic Cuts & Shaves
      </p>

      <form onSubmit={handleSubmit}>
        <label>Nama Lengkap</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
          placeholder="Masukan nama anda..."
        />

        <label>Nomor Telepon (WhatsApp)</label>
        {/* type="tel" akan memunculkan keyboard angka di Android/iOS */}
        <input
          type="tel"
          name="telepon"
          value={formData.telepon}
          onChange={handleChange}
          required
          placeholder="08..."
        />

        <label>Pilih Capster</label>
        <select
          name="capster"
          value={formData.capster}
          onChange={handleChange}
          required
        >
          <option value="">-- Pilih Capster --</option>
          <option value="Andi">Andi (Senior)</option>
          <option value="Budi">Budi (Junior)</option>
          <option value="Citra">Citra (Stylist)</option>
        </select>

        {/* Tambahkan style/class untuk layout responsive */}
        <div className="date-group" style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label>Hari</label>
            <select
              name="hari"
              value={formData.hari}
              onChange={handleChange}
              required
            >
              <option value="">- Hari -</option>
              <option value="Senin">Senin</option>
              <option value="Selasa">Selasa</option>
              <option value="Rabu">Rabu</option>
              <option value="Kamis">Kamis</option>
              <option value="Jumat">Jumat</option>
              <option value="Sabtu">Sabtu</option>
              <option value="Minggu">Minggu</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>Tanggal</label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Jam Booking</label>
        <input
          type="time"
          name="jam"
          value={formData.jam}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Menyimpan..." : "BOOKING SEKARANG"}
        </button>
      </form>
    </div>
  );
}

export default App;
