import Swal from "sweetalert2";

export const MyAlert = (obj) =>
  Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-secondary",
    },
    buttonsStyling: false,
  }).fire({ ...obj, allowOutsideClick: false });
