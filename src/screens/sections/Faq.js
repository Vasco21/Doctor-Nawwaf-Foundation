import React from 'react';
import { Section, Container } from '../../Styles/global';

import FaqItem from './FaqItem';

const FAQS = [
  {
    title: 'What did Vasco Eddie say?',
    content: () => (
      <>
        Youth talking to youth about right path that leads to better future.
        Trained and certified youth speakers use the power of personal stories
        and education to inspire, engage, educate, 
        and equip young people to look out for themselves and their peers.
      </>
    ),
  },
  {
    title: 'Is the Organisation Right for Me?',
    content: () => (
      <>
        Are you requesting and trying to figure out which one is right for you?
        we will teach you good way of making suggestions!
      </>
    ),
  },
  {
    title: 'Become a Speaker of your own Future?',
    content: () => (
      <>
        Vasco Eddie put you at the centre of the self confidence revolution, 
        giving you the chance to educate and inspire young people in your community 
        and make change across the country.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq" accent>
    <Container>
      <h1 style={{ marginBottom: '3rem' }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
