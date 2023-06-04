void main(List<String> args) {
  print(countChars('This is a piece   of a text!.'));
}

Map<String, int> countChars(String input) {
  Map<String, int> result = {};
  input.toLowerCase().replaceAll(' ', '').split('').forEach((c) {
    if (result.keys.contains(c)) {
      result.addEntries(<String, int>{c: result[c]! + 1}.entries);
    } else {
      result[c] = 1;
    }
  });
  return result;
}
