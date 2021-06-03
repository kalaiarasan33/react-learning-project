package main

import (
	"fmt"
	"io/ioutil"

	"github.com/fsnotify/fsnotify"
)

func main() {
	filename := "file.txt"
	var action string
	var a bool

	w, _ := fsnotify.NewWatcher()

	go func() {
		for {
			events := <-w.Events
			if events.Op == fsnotify.Write {
				content, _ := ioutil.ReadFile(events.Name)
				fmt.Println(string(content))

			}
		}
	}()

	w.Add(filename)
	a = true
	for a {
		fmt.Scanln(&action)
		if action == "close" || action == "c" {
			a = false

		}
	}

}
