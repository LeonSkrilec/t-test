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
        <Link href="/calculators/[slug]" as={item.url} key={item.url}>
          <ListItem button>
            <Typography component="a">{item.label}</Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
