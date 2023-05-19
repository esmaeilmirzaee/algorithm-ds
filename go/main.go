package main

import (
	"fmt"
	"strings"
)

func countChars(text string) map[string]int {
	var result = make(map[string]int)
	text = strings.ToLower(text)
	text = strings.ReplaceAll(text, " ", "")
	for _, c := range text {
		if _, ok := result[string(c)]; ok {
			result[string(c)] += 1
		} else {
			result[string(c)] = 1
		}
	}
	return result
}

func main() {
	fmt.Println(countChars("Hello, Go"))
}
