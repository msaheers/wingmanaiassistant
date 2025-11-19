export default function ProjectCard({ title, description }) {
    return (
        <div 
         style={{
            width: "200px",
            padding: "1rem",
            background: "#111827",
            borderRadius: "12px",
            boxShadow: "0 0 12px rgba(0, 255, 255, 0.2)",
         }}
        >
            <h3 style={{ color: "#00eaff" }}>{title}</h3>
            <p style={{ opacity: 0.8 }}>{description}</p>
            
        </div>
    );
}