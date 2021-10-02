import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PBSubmit from './PBSubmit';

configure({ adapter: new Adapter() });

describe('<PBSubmit>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PBSubmit></PBSubmit>
    );
  });

  it('mounts without crashing', () => {
    wrapper.unmount();
  });
});
