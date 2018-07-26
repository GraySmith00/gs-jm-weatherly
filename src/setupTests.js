import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;

// class LocalStorage {
//   constructor() {
//     this.store = {};
//   }

//   getItem(key) {
//     return this.store[key];
//   }

//   setItem(key, string) {
//     this.store[key] = string;
//   }

//   clear() {
//     this.store = {};
//   }
// }

// global.localStorage = new LocalStorage;