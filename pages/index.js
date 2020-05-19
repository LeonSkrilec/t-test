import React from 'react';
import PageLayout from '../layouts/PageLayout';
import HeroBanner from '../components/home/HeroBanner';
import Details from '../components/home/Details';
import OpenSourceCallout from '../components/home/OpenSourceCallout';
import Contact from '../components/home/Contact';

export default function index() {
  return (
    <PageLayout>
      <HeroBanner></HeroBanner>
      <Details></Details>
      <OpenSourceCallout></OpenSourceCallout>
      <Contact></Contact>
    </PageLayout>
  );
}
