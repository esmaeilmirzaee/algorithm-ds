void main(List<String> args) {
  print(countChars('This is a piece   of a text!.'));
}

countChars(String input) {
  var result = {};
  input.toLowerCase().replaceAll(' ', '').split('').forEach((c) {
    if (result.keys.contains(c)) {
      result[c] += 1;
    } else {
      result[c] = 1;
    }
  });
  return result;
}
