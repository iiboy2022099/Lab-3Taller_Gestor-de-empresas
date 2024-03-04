import mongoose from "mongoose";

const EmpresaSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        required: [true, "The name is required"]
    },
    categoriaEmpresarial: {
        type: String,
        required: [true, "The business category is required"]
    },
    nivelImpacto: {
        type: String,
        required: [true, "The impact level is required"]
    },
    
    añosTrayectoria: {
        type: Number,
        required: [true, "Years of trajectory is required"]
    },
    datosClaves: {
        type: String,
        required: [true, "Key data is required"]
    },
    correo: {
        type: String,
        required: [true, "Email is mandatory"],
        unique: true,
    },
    estado: {
        type: Boolean,
        default: true,
    },
});
export default mongoose.model('Empresa', EmpresaSchema);