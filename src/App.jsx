import './App.css'

function App() {
  return (
    <div className="header">
        <h1>הגינה שלי</h1>
        <img src="/public/image.png" alt="תמונה" className="fixed-bottom-left" />
    </div>
  )
}

export function Flower({ 
  name = "ורד", 
  colorPetal = "#e91e63", 
  colorStem = "#2e7d32" 
}) {
  // הגדרת עיצובים בתוך הפונקציה
  const cardStyle = {
    width: "200px",
    padding: "20px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
    border: "1px solid #f0f0f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    fontFamily: "system-ui, sans-serif"
  };

  const petalStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: colorPetal,
    boxShadow: `0 0 12px ${colorPetal}80`,
    transition: "all 0.3s ease"
  };

  const stemStyle = {
    width: "6px",
    height: "60px",
    backgroundColor: colorStem,
    borderRadius: "3px",
    marginTop: "-4px"
  };

  const captionStyle = {
  color: colorStem,
  backgroundColor: colorPetal,
  borderRadius: "999px",
  padding: "6px 18px",
};

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: 0, color: "#2c3e50", fontSize: "1.2rem" }}>
        {name}
      </h3>

      {/* איור ויזואלי פשוט של הפרח */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={petalStyle} title="עלי כותרת" />
        <div style={stemStyle} title="גבעול" />
      </div>
    </div>
  );
}



export default App
