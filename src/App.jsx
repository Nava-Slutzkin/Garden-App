import './App.css';

export function Flower({ 
  name = "ורד סגול", 
  colorPetal = "#9c27b0", // צבע עלי הכותרת
  colorCenter = "#ffeb3b", // צבע מרכז הפרח
  colorStem = "#2e7d32"    // צבע הגבעול והעלים
}) {

  // עיצוב הכרטיסייה בגווני סגול תואמים ל-CSS
  const cardStyle = {
    width: "220px",
    padding: "24px 20px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #a78cc1 0%, #f3e5f5 100%)",
    border: "1px solid #874d91",
    boxShadow: "0 10px 20px rgba(125, 16, 185, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    fontFamily: "system-ui, sans-serif",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };

  const titleStyle = {
    margin: 0,
    color: "#5c097d", 
    fontSize: "1.3rem",
    fontWeight: "600",
  };

  const handleClick = () => {
    alert(`אני פרח מסוג ${name}`);
  };

  return (
    <div 
      style={cardStyle} 
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 15px 30px rgba(125, 16, 185, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(125, 16, 185, 0.1)";
      }}
    >
      <h3 style={titleStyle}>{name}</h3>

      {/* איור SVG מפורט של פרח עם עלי כותרת, מרכז, גבעול ועלים */}
      <svg width="120" height="150" viewBox="0 0 100 130" style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))" }}>
        {/* גבעול מפותל מעט */}
        <path 
          d="M 50 65 Q 45 95 50 125" 
          stroke={colorStem} 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round" 
        />

        {/* עלים על הגבעול */}
        <path d="M 48 90 C 30 85 25 100 47 95" fill={colorStem} />
        <path d="M 51 100 C 70 95 75 110 52 105" fill={colorStem} />

        {/* 8 עלי כותרת מסודרים במעגל */}
        <g fill={colorPetal}>
          <ellipse cx="50" cy="30" rx="9" ry="18" />
          <ellipse cx="50" cy="30" rx="9" ry="18" transform="rotate(45 50 45)" />
          <ellipse cx="50" cy="30" rx="9" ry="18" transform="rotate(90 50 45)" />
          <ellipse cx="50" cy="30" rx="9" ry="18" transform="rotate(135 50 45)" />
          <ellipse cx="50" cy="30" rx="9" ry="18" transform="rotate(180 50 45)" />
          <ellipse cx="50" cy="30" rx="9" ry="18" transform="rotate(225 50 45)" />
          <ellipse cx="50" cy="30" rx="9" ry="18" transform="rotate(270 50 45)" />
          <ellipse cx="50" cy="30" rx="9" ry="18" transform="rotate(315 50 45)" />
        </g>

        {/* מרכז הפרח */}
        <circle cx="50" cy="45" r="11" fill={colorCenter} stroke="#ffffff" strokeWidth="2" />
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="header">
        <h1>הגינה שלי</h1>
        <img src="/public/image.png" alt="תמונה" className="fixed-bottom-left" />

        {/* תצוגת מופעים של הפרחים */}
        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          padding: '20px', 
          flexWrap: 'wrap', 
          justifyContent: 'center' 
        }}>
          <Flower name="סחלב סגול" colorPetal="#8e24aa" colorCenter="#ffd54f" />
          <Flower name="חמניה" colorPetal="#ffb300" colorCenter="#5d4037" />
          <Flower name="לבלוב ורוד" colorPetal="#ec407a" colorCenter="#fff176" />
        </div>
    </div>
  );
}

export default App;