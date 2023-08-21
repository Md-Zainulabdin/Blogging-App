export const validate =  (firstname, password, confirm_password) => {
    if (firstname.length < 3) {
        return "firstname should be atleast 3 character"
    }
    else if (password !== confirm_password) {
       return 'Password Not Matched'
    }
    else if (password.length > 8) {
        return 'Password contain at least 8 character'
    }
    else return undefined
}