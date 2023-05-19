function charCountr(str: string): Record<string, number> {
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
  console.log("1 Number of characters inside string input");
  let res = charCountr("1 Number of characters inside string input");
  console.table(res);
}

main();
