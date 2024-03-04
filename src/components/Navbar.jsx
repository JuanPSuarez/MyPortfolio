export default function Navbar() {
    
    return (
      <div style={styles.navbar} className="navbar">
        <button style={{backgroundColor: 'blue', color: 'white'}}>Home</button>
        <button style={{backgroundColor: 'green', color: 'white'}}>About</button>
        <button style={{backgroundColor: 'red', color: 'white'}}>Contact</button> 
      </div>
    );
  }
  const styles = {
    navbar: {
      display: 'flex',
      width: '100%',
      height: '50px',
      alignItems: 'center',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '10px',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '1',
      overflow: 'hidden',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
      alignSelf: 'center',
      flex: '1',
      justifyContent: 'space-evenly' 
    }
  }
  