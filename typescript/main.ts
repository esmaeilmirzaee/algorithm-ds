function countChars(str: string): Record<string, number> {
  let result: Record<string, number> = {};

  // change the lib inside the TypeScript config file to `es2021`, to prevent error of not finding `replaceAll()`
  str
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .forEach((c) => {
      if (result[c]) {
        result[c] += 1;
      } else {
        result[c] = 1;
      }
    });

  return result;
}

function main() {
  let res = countChars(
    "Hello, TypeScript/JavaScript and others. This is a  long long piece of text!..."
  );
  console.table(res);
}

main();
