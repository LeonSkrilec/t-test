import React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

export default function Page404() {
  return (
    <div>
      <h3>Ta stran ni bila najdena!</h3>
      <Link href="/" passHref>
        <Button component="a" variant="contained" color="primary">
          Na domačo stran
        </Button>
      </Link>
    </div>
  );
}
