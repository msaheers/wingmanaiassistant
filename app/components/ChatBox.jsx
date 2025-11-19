"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    async function sendMessage() {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);

        const res = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ message: input }),
        });

        const data = await res.json();

        const aiMessage = { role: "assistant", content: data.reply };
        setMessages((prev) => [...prev, aiMessage]);

        setInput("");
    }

    return (
        <div style={{ marginTop: "2.5rem" }}>
            <div
             style={{
                background: "#111827",
                padding: "1rem",
                borderRadius: "10px",
                minHeight: "220px",
             }}
            >
             {messages.map((msg, i) => (
                <MessageBubble key={i}
                role={msg.role}
                content={msg.content}
                />
             ))}
            </div>

            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                <input 
                 value={input}
                 onChange={ (e) => setInput(e.target.value)}
                 placeholder="Ask Wingman anything..."
                 style={{
                    flex: 1,
                    padding: "0.8rem",
                    borderRadius: "8px",
                    background: "#1f2937",
                    border: "1px solid #374151",
                    color: "white"
                 }}
                 />
                 <button
                  onClick={sendMessage}
                  style={{
                    padding: "0.8rem 1.2rem",
                    borderRadius: "8px",
                    background: "#00eaff",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  >
                    Send
                  </button>
            </div>
        </div>
    );
}