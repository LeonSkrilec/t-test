import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line react/display-name
const LinkButton = React.forwardRef(({ className, href, as, children }, ref) => (
  <Link href={href} as={as} ref={ref}>
    <a className={className}>{children}</a>
  </Link>
));

export default LinkButton;
