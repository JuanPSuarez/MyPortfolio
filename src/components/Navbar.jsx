export default function Navbar() {
    
    return (
      <div style={styles.navbar} className="navbar">
        <button>Home</button>
        <button>Projects</button>
        <button>Contact</button> 
      </div>
    );
  }
  const styles = {
    navbar: {
      display: 'flex',
      width: '100%',
      height: '50px',
      position: 'fixed',
      top: '0',
      right: '0',
      justifyContent: 'space-evenly' 
    }
  }
  