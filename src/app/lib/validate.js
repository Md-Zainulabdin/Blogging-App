import {  toast } from 'react-toastify';

export const validate =  (firstname, email, password, confirm_password) => {
    if (firstname.length > 3) {
        toast.error("firstname should be atleast 3 character")
    }
    else if (password !== confirm_password) {
       toast.error('Password Not Matched')
    }
    else if (password.length > 8) {
        toast.error('Password contain at least 8 character')
    }
    else return undefined
}