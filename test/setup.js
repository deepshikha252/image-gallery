import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import './support/jsdom'

configure({ adapter: new Adapter() });
