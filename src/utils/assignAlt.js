function assignAlt(str) {
  const regex = /([^/.]+)(?=\.\w+$)/i;
  const result = str.match(regex);
  return result ? result[0] : "image";
}

export default assignAlt;