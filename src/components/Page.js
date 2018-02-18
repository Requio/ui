import React from 'react';

import styles from './Page.css';

const Page = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
);

export default Page
