import React from 'react';
import renderer from 'react-test-renderer';

import AddNew from '../components/ui/Contacts/AddNew';

it('renders ContactList correctly', () => {
  const tree = renderer.create(
    <AddNew />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
