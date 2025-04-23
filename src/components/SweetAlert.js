import Swal from "sweetalert2";

export const SwalAlert = ({ type, title, text, footer }) => {
    Swal.fire({
        icon: type,
        title: title || "Alerta",
        text: text || "",
        footer: footer || "",
    });
};