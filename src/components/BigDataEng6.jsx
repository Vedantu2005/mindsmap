import React from 'react';

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
    color: '#333', // Darker text for Azure title
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px',
    gap: '60px', // Space between items in a row
  },
  serviceItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '120px',
  },
  iconBox: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    color: 'white',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  blueIcon: {
    backgroundColor: '#0078D4', // Azure Blue
  },
  yellowIcon: {
    backgroundColor: '#FFB900', // Power BI Yellow
  },
  serviceName: {
    fontSize: '14px',
    color: '#000000',
    lineHeight: '1.2',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  seeMoreButton: {
    padding: '10px 20px',
    border: '1px solid #333', // Darker border for consistency
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
  }
};

const Page5 = () => {
  const row1Services = [
    { name: 'Data Factory', iconText: '🏭', type: 'blue' },
    { name: 'Data Catalog', iconText: '📚', type: 'blue' },
    { name: 'Event Hubs', iconText: '📊', type: 'blue' },
    { name: 'Azure IoT Hub', iconText: '🌐', type: 'blue' },
  ];

  const row2Services = [
    { name: 'Azure Data\nLake Storage', iconText: '🗄️', type: 'blue' },
    { name: 'Power BI', iconText: '📈', type: 'yellow' },
    { name: 'Azure Synapse\nAnalytics', iconText: '🧠', type: 'blue' },
    { name: 'Azure Machine\nLearning', iconText: '🧪', type: 'blue' },
  ];

  const ServiceComponent = ({ name, iconText, type }) => (
    <div style={styles.serviceItem}>
      <div style={{ ...styles.iconBox, ...(type === 'blue' ? styles.blueIcon : styles.yellowIcon) }}>
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
      <h1 style={styles.title}>Microsoft Azure</h1>

      {/* First Row of Services */}
      <div style={styles.row}>
        {row1Services.map((service, index) => (
          <ServiceComponent key={index} name={service.name} iconText={service.iconText} type={service.type} />
        ))}
      </div>

      {/* Second Row of Services */}
      <div style={styles.row}>
        {row2Services.map((service, index) => (
          <ServiceComponent key={index} name={service.name} iconText={service.iconText} type={service.type} />
        ))}
      </div>

      {/* See More Button */}
      <div style={styles.buttonContainer}>
        <button style={styles.seeMoreButton}>
          See More
        </button>
      </div>
    </div>
  );
};

export default Page5;