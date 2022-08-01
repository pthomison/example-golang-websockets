package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/websocket"
	utils "github.com/pthomison/golang-utils"
	"github.com/spf13/cobra"
)

var (
	//go:embed web/*
	embeddedFiles embed.FS

	address string = "127.0.0.1:5050"

	upgrader = websocket.Upgrader{}

	rootCmd = &cobra.Command{
		Use:   "golang-websockets",
		Short: "golang-websockets",
		Run:   run,
	}
)

func main() {
	err := rootCmd.Execute()
	utils.Check(err)
}

func run(cmd *cobra.Command, args []string) {
	fmt.Println("--- golang-websockets ---")
	Server()
}

func Server() {
	web, err := fs.Sub(embeddedFiles, "web")
	utils.Check(err)

	http.Handle("/", http.FileServer(http.FS(web)))
	http.HandleFunc("/ws", WebSocketFunc)

	http.ListenAndServe(address, nil)
}

func WebSocketFunc(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	utils.Check(err)
	defer conn.Close()

	fmt.Println("connected")

	for {
		_, countdown_byte, err := conn.ReadMessage()
		// if client drops this err will be non-nil; ignoring seems to work for now
		if err != nil {
			return
		}

		countdown, err := strconv.Atoi(string(countdown_byte))
		utils.Check(err)

		for i := 0; i <= countdown; i++ {
			conn.WriteMessage(websocket.TextMessage, []byte(strconv.Itoa(countdown-i)))
			time.Sleep(1 * time.Second)
		}
	}
}
