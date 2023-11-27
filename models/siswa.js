const mongoose = require('mongoose')

const siswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis']
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama']
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas']
    },
    nama_orangtua: {
        type: String,
        required: [true, 'Silahkan isikan nama orangtua']
    },
    no_hp: {
        type: String,
        required: [true, 'Silahkan isikan no hp']
    },
})

module.exports = mongoose.model('Siswa',siswaSchema)