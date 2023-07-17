const hbsToPositiveNumberRegisterHelper = (number) => {
  if (number < 0) {
    number = number * -1
  }
  return number
}
module.exports = hbsToPositiveNumberRegisterHelper
