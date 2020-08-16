import React, { forwardRef } from 'react';

const Bubble = forwardRef(({ id, styles, src }, ref) => (
  <div ref={ref}>
    <img style={styles} src={src} alt={id} />
  </div>
));

export default Bubble;
