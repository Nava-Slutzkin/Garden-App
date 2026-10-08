import './App.css';

const flowers = [
  {
    code: "S-001",
    name: "סחלב סגול",
    colorPetal: "#8e24aa",
    colorCenter: "#ffd54f",
    colorStem: "#2e7d32",
  },
  {
    code: "S-002",
    name: "חמניה",
    colorPetal: "#ffb300",
    colorCenter: "#5d4037",
    colorStem: "#2e7d32",
  },
  {
    code: "S-003",
    name: "לבלוב ורוד",
    colorPetal: "#ec407a",
    colorCenter: "#fff176",
    colorStem: "#2e7d32",
  },
  {
    code: "S-004",
    name: "כלנית אדומה",
    colorPetal: "#ff3333",
    colorCenter: "#1a1a1a",
    colorStem: "#339933",
  },
  {
    code: "S-005",
    name: "צבעוני",
    colorPetal: "#ff5252",
    colorCenter: "#ffd54f",
    colorStem: "#2e7d32",
  },
  {
    code: "S-006",
    name: "נרקיס",
    colorPetal: "#ff9800",
    colorCenter: "#ff9800",
    colorStem: "#2e7d32",
  },
  {
    code: "S-007",
    name: "שושן צחור",
    colorPetal: "#4a148c",
    colorCenter: "#ffd54f",
    colorStem: "#2e7d32",
  },
];

export function Flower({ code, name, colorPetal, colorCenter, colorStem }) {

  const finalColorPetal = colorPetal || "#9c27b0";
  const finalColorCenter = colorCenter || "#ffeb3b";
  const finalColorStem = colorStem || "#2e7d32";

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

  const codeStyle = {
    margin: "4px 0 0",
    color: "#6b6375",
    fontSize: "0.8rem",
    letterSpacing: "0.08em",
  };

  const handleClick = () => {
    alert(`אני פרח מסוג ${name}, קוד ${code}`);
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
      <p style={codeStyle}>{code}</p>

      <svg width="120" height="150" viewBox="0 0 100 130" style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))" }}>
        {/* גבעול מפותל מעט */}
        <path
          d="M 50 65 Q 45 95 50 125"
          stroke={finalColorStem}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* עלים על הגבעול */}
        <path d="M 48 90 C 30 85 25 100 47 95" fill={finalColorStem} />
        <path d="M 51 100 C 70 95 75 110 52 105" fill={finalColorStem} />

        {/* 8 עלי כותרת מסודרים במעגל */}
        <g fill={finalColorPetal}>
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
        <circle cx="50" cy="45" r="11" fill={finalColorCenter} stroke="#ffffff" strokeWidth="2" />
      </svg>
    </div>
  );
}

function App() {
  return (
    <main className="header">
      <h1>הגינה שלי</h1>
      <img src="/public/image.png" alt="תמונה" className="fixed-bottom-left" />

      <section
        className="flower-gallery"
        aria-label="רשימת הפרחים בגינה"
      >
        {flowers.map((flower) => (
          <Flower key={flower.code} {...flower} />
        ))}
      </section>
    </main>
  );
}

export default App;