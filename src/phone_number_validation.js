/*

The checkPhoneNumber() function should accept phoneNumber as input and check if it is valid.

The provided phoneNumber is a valid phoneNumber if its value matches with any of the pattern suggested below:


+1 0999999999, 
+1 099-999-9999, 
+1 (099)-999-9999, 
  +1 (099)9999999, 
  +1 099 999 9999, 
  +1 099 999-9999, 
  +1 (099) 999-9999, 
  +1 099.999.9999
  +10999999999, 
  +1099-999-9999, 
  +1(099)-999-9999, 
  +1(099)9999999, 
  +1099 999 9999, 
  +1099 999-9999, 
  +1(099) 999-9999, 
  +1099.999.9999
  
  The function should return true if validation criteria is satisfied else should return false.
  
  Use Regular Expression to perform validation check.

*/

module.exports = function checkPhoneNumber(phoneNumber) {
  const patterns = [
    /^\+1\s\d{10}$/,
    /^\+1\s\d{3}-\d{3}-\d{4}$/,
    /^\+1\s\(\d{3}\)-\d{3}-\d{4}$/,
    /^\+\d{1}\s\(\d{3}\)\d{7}$/,
    /^\+1\s\d{3}\s\d{3}\s\d{4}$/,
    /^\+1\s\d{3}\s\d{3}-\d{4}$/,
    /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/,
    /^\+1\s\d{3}\.\d{3}\.\d{4}$/,
    /^\+\d{11}$/,
    /^\+\d{3}-\d{3}-\d{4}$/,
    /^\+1\(\d{3}\)-\d{3}-\d{4}$/,
    /^\+1\(\d{3}\)\d{7}$/,
    /^\+\d{3}\s\d{3}\s\d{4}$/,
    /^\+\d{3}\s\d{3}-\d{4}$/,
    /^\+1\(\d{3}\)\s\d{3}-\d{4}$/,
    /^\+\d{3}\.\d{3}\.\d{4}$/
  ];

  const isValid = patterns.some(pattern => pattern.test(phoneNumber));

  return isValid;
}