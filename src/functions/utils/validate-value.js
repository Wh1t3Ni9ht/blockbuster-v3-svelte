function validateValue(value = "", compareValues = []) {
  if (!compareValues.includes(value)) {
    return false;
  }

  return true;
}

export default validateValue;
