import Swal from "sweetalert2";

export async function confirmDelete() {
  const result =
    await Swal.fire({
      title: "Delete?",
      text: "Cannot be undone",
      icon: "warning",
      showCancelButton: true,
    });

  return result.isConfirmed;
}