function convertBin2Dev(bin) {
  const binary = document
    .querySelector('input#bin')
    .value
  const decimal = parseInt(binary, 2)
  document.querySelector('input#dec').value = decimal
  return true
}