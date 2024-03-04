export default function Footer() {

    const styles = {
      footer: {
        width: '100%',
        height: '100px',  
        background: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }
    }
  
    return (
      <div style={styles.footer}>
        <p>&copy; 2023 My Website</p>
      </div>
    )
  }
  