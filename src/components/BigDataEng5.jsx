import React from 'react';

// Inline CSS for demonstration. In a real project, you'd use a CSS file or a library like Tailwind/Styled-Components.
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'normal',
    marginBottom: '40px',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // ✅ allows wrapping on small screens
    marginBottom: '60px',
    gap: '40px', // slightly reduced for better responsiveness
  },
  serviceItem: {
    display: 'flex', // ✅ changed from column to row
    flexDirection: 'row', // ✅ logo + name in same line
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    width: '220px', // ✅ wider for text beside icon
    gap: '12px', // ✅ space between icon and text
  },
  iconBox: {
    width: '60px',
    height: '60px',
    backgroundColor: '#ff9900',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '30px',
    fontWeight: 'bold',
    flexShrink: 0, // prevents icon from shrinking
  },
  serviceName: {
    fontSize: '14px',
    color: '#000000',
    lineHeight: '1.3',
    wordWrap: 'break-word',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  seeMoreButton: {
    padding: '10px 20px',
    border: '1px solid #000000',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#000000',
  }
};

const Page4 = () => {
  const row1Services = [
    { name: 'AWS Lake\nFormation', iconText: '🌊' },
    { name: 'AWS Glue', iconText: '⚙️' },
    { name: 'Amazon EMR', iconText: '🔬' },
    { name: 'Amazon\nRedshift', iconText: '🧱' },
  ];

  const row2Services = [
    { name: 'Amazon\nDynamoDB', iconText: '💾' },
    { name: 'Amazon\nAthena', iconText: '🔍' },
    { name: 'AWS IoT Core', iconText: '☁️' },
    { name: 'AWS IoT\nGreengrass', iconText: '⚓' },
  ];

  const ServiceComponent = ({ name, iconText }) => (
    <div style={styles.serviceItem}>
      <div style={styles.iconBox}>
        <span>{iconText}</span>
      </div>
      <span style={styles.serviceName}>
        {name.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index === 0 && name.includes('\n') && <br />}
          </React.Fragment>
        ))}
      </span>
    </div>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Amazon AWS</h1>

      {/* First Row of Services */}
      <div style={styles.row}>
        {row1Services.map((service, index) => (
          <ServiceComponent key={index} name={service.name} iconText={service.iconText} />
        ))}
      </div>

      {/* Second Row of Services */}
      <div style={styles.row}>
        {row2Services.map((service, index) => (
          <ServiceComponent key={index} name={service.name} iconText={service.iconText} />
        ))}
      </div>

      {/* See More Button */}
      <div style={styles.buttonContainer}>
        <button style={styles.seeMoreButton}>See More</button>
      </div>
    </div>
  );
};

export default function BigDataEng5() {
  return <div>{/* placeholder component: bigDataEng (5) */}</div>
}
