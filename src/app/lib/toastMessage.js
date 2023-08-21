import { toast } from "react-toastify";

export const errorMessage = (err) => {
    toast.error(err, { autoClose: 3000, position: "top-center" });
};

export const signUpMessage = (mess) => {
    toast.success(mess, { autoClose: 2000, position: "top-center", closeOnClick: true });
};