module.exports = (url) => {
  if (typeof (url) === 'string') {
    if (url.length === 0) { return null; }
    return true;
  }
  return null;
};
