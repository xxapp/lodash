var _ = function (context) {

}

_.chunk = function (array, size) {
  size = size || 1;
  if (size >= array.length) {
    return [array.slice()];
  }
  var chunkArray = [], i = 0, length = array.length;
  for (; i < length; i++) {
    var groupIndex = Math.floor(i / size);
    if (chunkArray[groupIndex] === void 0) {
      chunkArray[groupIndex] = [array[i]];
    } else {
      chunkArray[groupIndex].push(array[i]);
    }
  }
  return chunkArray;
}
