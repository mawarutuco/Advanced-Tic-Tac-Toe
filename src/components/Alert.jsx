import Swal from "sweetalert2"

const MyAlert = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-primary",
    cancelButton: "btn btn-secondary",
  },
  buttonsStyling: false,
});

export default MyAlert;
