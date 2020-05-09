function convertBin2Dev(bin) {
  const binary = document
    .querySelector('input#bin')
    .value
  const decimal = parseInt(binary, 2)
  document.querySelector('input#dec').value = decimal
  return true
}
function checkBinary(number) {
  const rule = /^[0-1]+$/
  if (!number.match(rule)) {
    alert('Binary numbers only')
  }
}