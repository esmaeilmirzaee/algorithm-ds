def count_chars(text):
    result = dict()
    for c in text.lower().replace(" ", ""):
        if result.get(c):
            result[c] += 1
        else:
            result[c] = 1

    return result


def main():
    print(
        count_chars("Hello, Python and others. This is a  long long piece of text!...")
    )


if __name__ == "__main__":
    main()
