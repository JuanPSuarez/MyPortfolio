export default function Footer() {

    return (
      <div style={styles.footer}>
        <p>&copy; 2023 My Website</p>
      </div>
    )
  }

  const styles = {
    footer: {
      display: 'flex',
      width: '100%',
      height: '50px',
      position: 'fixed',
      bottom: '0',
      right: '0',
      justifyContent: 'center' 
    }
  }
