import React from 'react';
import styles from './ContentFooter.module.css'; // Importiere das CSS-Modul

function ContentFooter() {
    return (
      <>
        <div className={styles.content}>
          {/* Hier ist der Content, der im `div` angezeigt wird */}
          <p>Hier ist der Content</p>
        </div>
        <footer className={styles.footer}>
          {/* Hier ist der Footer */}
          <p>Hier ist der Footer</p>
        </footer>
      </>
    );
  }
  
  export default ContentFooter;
  