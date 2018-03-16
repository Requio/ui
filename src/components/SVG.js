import React from 'react';
import classnames from 'classnames';

import styles from './SVG.css';

const SVG = ({ file, className, style }) => (
  <span className={classnames(styles.svg, className)} style={style} dangerouslySetInnerHTML={{ __html: file }} />
);

export default SVG;
