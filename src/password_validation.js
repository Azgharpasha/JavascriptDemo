/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/

module.exports = function checkPassword(password) {
    const minLength = 6;
    const maxLength = 20;
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
    const isValid =
      typeof password === 'string' &&
      password.length >= minLength &&
      password.length <= maxLength &&
      lowerCaseRegex.test(password) &&
      upperCaseRegex.test(password) &&
      digitRegex.test(password) &&
      symbolRegex.test(password);
  
    return isValid;
}
