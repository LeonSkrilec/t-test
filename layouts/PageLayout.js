import React from 'react';
import PageHeader from '../components/PageHeader';

export default function PageLayout(props) {
  return (
    <>
      <PageHeader></PageHeader>
      {props.children}
    </>
  );
}
