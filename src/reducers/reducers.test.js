import sweetReducer, { addSweet } from './sweet';
import savoryReducer, { addSavory } from './savory';

describe('sweet reducer', () => {

  it('should create add action', () => {
    const action = addSweet({name:'Snickers'});
    expect(action.type).toBe('Sweet/ADD');
  });

  it('should create add sweet', () => {
    const action = addSweet({name:'Snickers'});
    const state = sweetReducer({sweets: []}, action);
    expect(state.sweets.length).toBe(1);

  });
});

describe('savory reducer', () => {

  it('should create add action', () => {
    const action = addSavory({name:'Foi Gras'});
    expect(action.type).toBe('Savory/ADD');
  });

  it('should add savory', () => {
    const action = addSavory({name:'Foi Gras'});
    const state = savoryReducer({savories: []}, action);
    expect(state.savories.length).toBe(1);

  });
});