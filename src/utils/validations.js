export const isValidEmail = email => {
  var isValid = true;
  var msg = '';
  // eslint-disable-next-line no-useless-escape
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === '') {
    msg = 'Email should not be blank.';
  } else if (reg.test(email) === false) {
    msg = 'Please enter a valid Email Id.';
  }
  if (msg !== '') {
    isValid = false;
  }
  return isValid;
};

export const checkRequiredField = (type, value, priorValue) => {
  let message = '';
  switch (type) {
    case 'email':
      if (value === '') {
        message = 'Please enter email address.';
      } else {
        message = '';
      }
      break;
    case 'password':
      if (value === '') {
        message = 'Please enter password.';
      } else {
        message = '';
      }
      break;
    case 'cpassword':
      if (value === '') {
        message = 'Please enter confirm password.';
      } else if (priorValue !== value) {
        message = 'Password and confirm passwrod does not matched.';
      } else {
        message = '';
      }
      break;
  }
  return message;
};
export const isValidPhoneNumber = number => {
  var pattern = new RegExp(/^[0-9\b]+$/);
  let msg = '';
  if (!pattern.test(number)) {
    msg = 'Please enter only number.';
  } else if (number.length !== 10) {
    msg = 'Please enter valid phone number.';
  }
  return msg;
};
