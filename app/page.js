"use client";

import ChatBox from "./components/ChatBox.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

export default function Home() {
    return (
        <main
         style={{
            padding: "2rem",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
         }}
        >
            <img
  src="\logow.png"
  alt="Wingman Logo"
  style={{
    width: "100px",   // 🔥 perfect size
    height: "auto",
    display: "block",
    margin: "0 auto 1rem auto",
    objectFit: "contain",
  }}
/>


            <h1 style={{ fontsize: "2rem", color: "#00f5ff" }}>
                Wingman, Your AI Marketplace Assistant
            </h1>

            <p style={{ opacity: 0.8 }}>
                Ask Wingman to generate proposals, chat with clients, create gig descriptions,
                and optimize your freelancing workflow.
            </p>

            {/* CHAT UI */}
            <ChatBox />

            <h2 style={{ marginTop: "4rem", color: "#00eaff" }}>Saved Projects</h2>

            <div
             style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1.5rem",
                marginTop: "1rem"
             }}
            >
                <ProjectCard title="Brand Website" description="Client website" />
                <ProjectCard title="Logo Pack" description="Graphics bundle" />
            </div>
        </main>
    );
}