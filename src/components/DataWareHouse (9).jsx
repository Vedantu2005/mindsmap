import React from "react";

const steps = [
  {
    title: "Discovery",
    bullets: [
      "Requirement definition",
      "DWH architecture analysis",
      "Approach selection",
    ],
  },
  {
    title: "Conceptualization",
    bullets: [
      "Project scope / Deliverables",
      "Technology selection",
      "Risk analysis",
    ],
  },
  {
    title: "Design and Development",
    bullets: [
      "Data source analysis",
      "Architecture design",
      "ETL / ELT testing",
    ],
  },
  {
    title: "Launch",
    bullets: ["Data migration", "Acceptance tests", "Training sessions"],
  },
  {
    title: "Solution Maintenance",
    bullets: ["Performance tuning", "User support", "ETL / ELT optimization"],
  },
];

const Page8 = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8f9fa",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        Data Warehouse Project Implementation Steps
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "auto",
          color: "#333",
          marginBottom: "40px",
          lineHeight: "1.6",
        }}
      >
        Our team of business analysts, engineers, and project managers will help
        you accelerate your data initiatives by covering each aspect of solution
        ideation, development, and support.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // allows items to wrap on smaller screens
          justifyContent: "center",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.title}
            style={{
              textAlign: "center",
              flex: "1 1 220px", // flex-grow, flex-shrink, flex-basis
              maxWidth: "220px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                background: "#eef7fb",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                margin: "auto",
                marginBottom: "10px",
                boxShadow: "0 0 8px #bae1f7",
              }}
            />
            <h3
              style={{
                color: "#93c6e7",
                fontWeight: "bold",
                fontSize: "1.25rem",
                marginBottom: "16px",
              }}
            >
              {step.title}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "#555",
                fontSize: "1rem",
              }}
            >
              {step.bullets.map((text) => (
                <li key={text} style={{ marginBottom: "8px" }}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page8;
