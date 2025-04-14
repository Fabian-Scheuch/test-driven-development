export function isValid(isbn13: string): boolean {

  const onlyNumbersIsbn = isbn13.replace(/[^0-9]/g, "");

  if (!/^\d{13}$/.test(onlyNumbersIsbn)) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < 12; i++) {
    const digit = parseInt(onlyNumbersIsbn[i], 10);
    if (i % 2 === 0) {
      sum += digit;
    } else {
      sum += digit * 3;
    }
  }

  const checkDigit = (10 - (sum % 10)) % 10;

  return checkDigit === parseInt(onlyNumbersIsbn[12], 10);
}
