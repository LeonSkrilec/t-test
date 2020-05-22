import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import calculators from '../calculators/settings';

export default function SideNav() {
  return (
    <List>
      {calculators.list.map(calculator => (
        <Link
          href={`${calculators.baseFolder}/[name]`}
          as={`${calculators.baseFolder}/${calculator.slug}`}
          key={calculator.slug}
        >
          <ListItem button>
            <Typography component="a">{calculator.title}</Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
