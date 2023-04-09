import moment from "moment";
export default autoLogOutAfterTokenExpiry = (exp) => {
  const expDate = moment(new Date(exp * 1000));
  const currentDate = moment(new Date().toISOString());
  console.log("Token expiry at:", expDate.toDate());
  console.log("Current Date:", currentDate.toDate());
  if (expDate === currentDate) {
    return true;
  } else {
    return false;
  }
};
