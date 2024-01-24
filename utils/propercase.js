const propercase = (string) => {
  const word = string.split(" ");
  const newarr = word.map(
    (value) => value.charAt(0).toUpperString() + value.slice(1)
  );
  return newarr.join(" ");
};
module.exports = { propercase };
