import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import calculators from '../calculators/settings';
import { useRouter } from 'next/router';

export default function SideNav(props) {
  const router = useRouter();

  return (
    <List>
      {calculators.list.map(calculator => (
        <Link
          href={`${calculators.baseFolder}/[name]`}
          as={`${calculators.baseFolder}/${calculator.slug}`}
          key={calculator.slug}
        >
          <ListItem button selected={router.asPath.includes(calculator.slug) ? true : false}>
            <Typography component="a">{calculator.title}</Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
