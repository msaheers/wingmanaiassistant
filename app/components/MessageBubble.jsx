import { marked } from "marked";

export default function MessageBubble({ role, content }) {
    const isUser = role === "user";
    const html = marked(content, { breaks: true });

    return (
        <div
            style={{
                textAlign: isUser ? "right" : "left",
                margin: "0.8rem 0",
            }}
        >
            <div
                style={{
                    display: "inline-block",
                    padding: "0.9rem 1.2rem",
                    borderRadius: "10px",
                    background: isUser ? "#00eaff" : "#1f2937",
                    color: isUser ? "#000" : "white",
                    maxWidth: "85%",
                    lineHeight: "1.6",
                    fontSize: "1rem",
                }}
            >
                <div
                    className="markdown-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}
