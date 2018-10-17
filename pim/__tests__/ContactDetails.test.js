import React from 'react';
import renderer from 'react-test-renderer';

import ContactDetails from '../components/ui/Contacts/ContactDetails';

it('renders contacts correctly', () => {
  const tree = renderer.create(
    <ContactDetails/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
