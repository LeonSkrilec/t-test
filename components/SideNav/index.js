import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import items from './items';
export default function SideNav() {
  return (
    <List>
      {items.map(item => (
        <ListItem button key={item.url}>
          <Link href="/calculators/[...slug]" as={item.url}>
            <Typography component="a">{item.label}</Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
