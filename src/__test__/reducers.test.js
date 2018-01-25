import React from 'react';
import Enzyme from 'enzyme';
import uuid from 'uuid/v1';
import categoryReducer from '../reducer/categories';
import expenseReducer from '../reducer/expenses';



describe('reducer tests', () => {
  describe('category reducer tests', () => {

    let category = {name: 'Pebbles', createDate: new Date(), id: uuid()};
    let state =[];

    test('add a new category', () => {
      let action = {type: 'CATEGORY_CREATE', payload: category};
      state = categoryReducer(state, action);

      expect(state.length).toEqual(1);
      expect(state[0].name).toEqual('Pebbles');
    });


    test('update a category', () => {
      let newCategory = {name: 'updated'};

      state = categoryReducer(state, {
        type: 'CATEGORY_UPDATE',
        payload: {
          name: newCategory.name,
          createDate: new Date(),
          id: category.id,
        }
      });

      expect(state[0].name).toEqual('updated');
      expect(state.length).toEqual(1);
    });


    test('destroy a category', () => {
      let dog1 = {name: 'Dog1', budget: '100', expenses: {}, id: uuid()};
      let dog2 = {name: 'Dog2', budget: '100', expenses: {}, id: uuid()};

      state = [{...dog1}, {...dog2}];

      state = categoryReducer(state, {
        type: 'CATEGORY_DESTROY',
        payload: dog1
      });

      expect(state.length).toEqual(1);
      expect(state[0].name).toEqual('Dog2');
    });
  })



  describe('expense Reducer tests', () => {

    test('add a new expense', () => {
      let categoryID = uuid();
      let expenseObj = {
        name: 'shopping',
        cost: '100',
        id: uuid(),
        categoryID: categoryID
      };

      let state = {
        [categoryID]: expenseObj
      }

      state = expenseReducer(state, {
        type: 'EXPENSE_CREATE',
        payload: {
          name: 'shopping',
          cost: '100',
          id: uuid(),
          categoryID: categoryID
        }
      });

      expect(state[categoryID][0].name).toEqual('shopping');
      expect(state[categoryID][0].cost).toEqual('100');
    });
  })
})
