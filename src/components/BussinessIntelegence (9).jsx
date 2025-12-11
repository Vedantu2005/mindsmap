import React from "react";

const Page8 = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8f9fa",
        padding: "40px 20px",
      }}
    >
      {/* Container with max width to center content */}
      <div
        style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
      >
        {/* Heading Section */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Provide us with your industry-specific business requirements and
            initiate your BI project with us.
          </h1>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Working with Power BI implementation consultants, you’ll achieve:
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            justifyItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <img
              src="/BussinessIntelegence/page8-1.svg"
              alt="Reduced costs"
              style={{ marginBottom: "10px" }}
            />
            <p>Reduced costs</p>
          </div>
          <div>
            <img
              src="/BussinessIntelegence/page8-2.svg"
              alt="Increased profitability"
              style={{ marginBottom: "10px" }}
            />
            <p>Increased profitability</p>
          </div>
          <div>
            <img
              src="/BussinessIntelegence/page8-3.svg"
              alt="Improved efficiency"
              style={{ marginBottom: "10px" }}
            />
            <p>Improved efficiency</p>
          </div>
          <div>
            <img
              src="/BussinessIntelegence/page8-4.svg"
              alt="Better business decisions"
              style={{ marginBottom: "10px" }}
            />
            <p>Better business decisions</p>
          </div>
        </div>

        {/* CTA Section */}
        <div>
          <p
            style={{ marginBottom: "20px", fontSize: "1.1rem", color: "#333" }}
          >
            Need a business intelligence implementation solution?
          </p>
          <button
            style={{
              padding: "12px 28px",
              fontSize: "1rem",
              color: "blue", // Text color blue
              border: "1px solid blue", // Blue border
              borderRadius: "6px",
              background: "transparent", // No background
              cursor: "pointer",
            }}
          >
            Let’s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page8;
