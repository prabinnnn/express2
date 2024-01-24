const passwordgenerate = (string) => {
  let count = 0;
  let newgenerated = "";

  for (let i = 0; i < string.length; i++) {
    const charCode = Math.floor(Math.random() * 26) + 65;
    newgenerated += String.fromCharCode(charCode);
    count++;
  }

  return newgenerated;
};

module.exports = { passwordgenerate };
