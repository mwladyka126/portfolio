import React from 'react';
import { shallow } from 'enzyme';
import { ProjectBoxComponent } from './ProjectBox';

describe('Component ProjectBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProjectBoxComponent />);
    expect(component).toBeTruthy();
  });
});
