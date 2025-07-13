import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaPlusCircle, FaTrashAlt, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const API_URL = `${process.env.REACT_APP_API_URL}/destinasi`;

const Admin = () => {
    const formRef = useRef(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
    const [destinations, setDestinations] = useState([]);
    const [form, setForm] = useState({
        id: null,
        title: "",
        description: "",
        location: "",
        picture: "",
        category: "",
        fasilitas: [],
    });
    const [fasilitasInput, setFasilitasInput] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(API_URL);
            setDestinations(res.data.data);
        } catch (err) {
            console.error("Gagal fetch:", err);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddFasilitas = () => {
        if (fasilitasInput.trim()) {
            setForm({
                ...form,
                fasilitas: [...form.fasilitas, { nama_fasilitas: fasilitasInput }],
            });
            setFasilitasInput("");
        }
    };

    const handleDeleteFasilitas = (index) => {
        const updated = [...form.fasilitas];
        updated.splice(index, 1);
        setForm({ ...form, fasilitas: updated });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (form.id) {
                await axios.put(`${API_URL}/${form.id}`, form);
                toast.success("Destinasi berhasil diupdate!");
            } else {
                await axios.post(API_URL, form);
                toast.success("Destinasi berhasil ditambahkan!");
            }
            fetchData();
            setForm({
                id: null,
                title: "",
                description: "",
                location: "",
                picture: "",
                category: "",
                fasilitas: [],
            });
        } catch (err) {
            console.error("Gagal submit:", err);
            toast.error("Terjadi kesalahan saat menyimpan data.");
        }
    };

    const handleEdit = (item) => {
        setForm({ ...item });
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`${API_URL}/${confirmDeleteId}`);
            fetchData();
            toast.success("Data berhasil dihapus");
        } catch (err) {
            console.error("Gagal delete:", err);
            toast.error("Gagal menghapus data");
        } finally {
            setConfirmDeleteId(null);
        }
    };
    return (
        <>
            <Navbar />

            <div className="p-6 max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Manajemen Destinasi</h2>
                    <button
                        onClick={() => {
                            setForm({
                                id: null,
                                title: "",
                                description: "",
                                location: "",
                                picture: "",
                                category: "",
                                fasilitas: [],
                            });
                            setFasilitasInput("");
                            setTimeout(() => {
                                formRef.current?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                    >
                        <FaPlusCircle className="text-sm" />
                        <span>Tambah</span>
                    </button>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10 bg-white p-6 rounded-xl shadow"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-1">Judul</label>
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Contoh: Wisata Air Selo Tirto"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Lokasi</label>
                        <input
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="Contoh: Jl. Pahlawan No.123"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">URL Gambar</label>
                        <input
                            name="picture"
                            value={form.picture}
                            onChange={handleChange}
                            placeholder="https://example.com/gambar.jpg"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Kategori</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Pilih Kategori</option>
                            <option value="culinary">Culinary</option>
                            <option value="nature">Nature</option>
                            <option value="landmark">Landmark</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold mb-1">Deskripsi</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Deskripsi lengkap destinasi..."
                            className="w-full p-2.5 border border-gray-300 rounded-lg min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold mb-2">Fasilitas</label>
                        <div className="flex flex-col sm:flex-row gap-3 mb-3">
                            <input
                                type="text"
                                value={fasilitasInput}
                                onChange={(e) => setFasilitasInput(e.target.value)}
                                placeholder="Nama fasilitas (contoh: Mushola)"
                                className="flex-1 p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={handleAddFasilitas}
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                            >
                                <FaPlusCircle className="text-lg" />
                                <span className="hidden sm:inline">Tambah</span>
                            </button>
                        </div>
                        <div className="space-y-1">
                            {form.fasilitas.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between bg-gray-100 p-2 rounded-lg text-sm"
                                >
                                    <span>{f.nama_fasilitas}</span>
                                    <button
                                        onClick={() => handleDeleteFasilitas(i)}
                                        className="text-red-500 hover:text-red-700 transition"
                                    >
                                        <FaTrashAlt className="text-base" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-semibold py-2.5 rounded-lg hover:bg-green-700 transition"
                        >
                            {form.id ? "Update" : "Tambah"} Destinasi
                        </button>
                    </div>
                </form>

                <h3 className="text-xl font-semibold mb-4">Daftar Destinasi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {destinations.map((d) => (
                        <div
                            key={d.id}
                            className="relative h-60 rounded-xl overflow-hidden shadow-md group"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${d.picture})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                            <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-start">
                                <h3 className="text-white text-lg font-bold drop-shadow">{d.title}</h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(d)}
                                        className="text-white hover:text-yellow-300 transition"
                                        title="Edit"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => setConfirmDeleteId(d.id)}
                                        className="text-white hover:text-red-400 transition"
                                        title="Hapus"
                                    >
                                        <FaTrashAlt />
                                    </button>

                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-sm text-white">
                                <div className="capitalize">{d.category}</div>
                                <div className="text-xs">{d.location}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {confirmDeleteId && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
                            <h3 className="text-lg font-semibold mb-4">Konfirmasi Hapus</h3>
                            <p className="text-gray-700 mb-6">Apakah kamu yakin ingin menghapus destinasi ini?</p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setConfirmDeleteId(null)}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <Footer />

        </>
    );
};

export default Admin;