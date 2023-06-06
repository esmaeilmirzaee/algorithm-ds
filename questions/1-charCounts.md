# Number of characters inside a string variable

## Question

The question is as simple as count the number of characters inside a string variable.

```python
# sample output
{
  'a': 1,
  's': 4,
}
```

## Solution

1. In this sectin, we implement the most rudimentary algorithm to count the number of characters.

2. We can store the result inside the hash so our implementation could be smooth and space efficient.

3. In this implementation, we use all the available language specific functions and tricks to take advantage of the language.

### Steps

1. Define a new function to accept a string argument
2. Make it lower case; this can be optional and asked from the user by defining an argumente
3. Remove all the blank spaces; this can also be optional by defining a boolean argument
4. Traverse on the text character by character and check if the current character exists inside our final dictionary/object then we add to its value, otherwise, we add the current character to the final dictionary/object and assign 1 to it.

## Language specific Notes

3.1 Python

The implementation of the Python is simple and easy. There is nothing special about Python implementation.

3.2 TypeScript

> Property replaceAll doesn't exist on type 'string'. Do you need to change your target library. Try changing the compiler option to 'es2021' or later.

As the error indicates, the `replaceAll` function is available since `es2021`.

3.3 Go

3.4 Dart
