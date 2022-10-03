function isDigit(s) {
  s = +s;
  if(isFinite(s) && s != '') {
    return true;
  } else {
    return false;
  }
}