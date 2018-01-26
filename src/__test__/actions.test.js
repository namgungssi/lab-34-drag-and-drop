import React from 'react';
import Enzyme from 'enzyme';
import uuid from 'uuid/v1';
import {create, update, destroy} from '../action/category';

import {create as createExpense,
  update as updateExpense,
  insert as insertExpense,
  destroy as destroyExpense} from '../action/expense';


  describe('test category actions', () => {
    test('category add returns correct type and payload', ()=> {

      let category = {name: 'food', budget: '500'};
      let action = create(category);

      expect(action.type).toEqual('CATEGORY_CREATE');
      expect(action.payload.name).toEqual('food');
      expect(action.payload.budget).toEqual('500');
      expect(action.payload.id).not.toBe(undefined);
    });


    test('category update returns correct type and payload', ()=> {

      let category = {name: 'beverage', budget: '200'};
      let action = update(category);

      expect(action.type).toEqual('CATEGORY_UPDATE');
      expect(action.payload.name).toEqual('beverage');
      expect(action.payload.budget).toEqual('200');
    });


    test('category destroy returns correct type and categoryId', ()=> {

      let category = {name: 'tings', id: uuid()};
      let action = destroy(category.id);

      expect(action.type).toEqual('CATEGORY_DESTROY');
      expect(action.payload).toEqual(category.id);
    });
  })



  describe('test expense actions', () => {

    let dogID = uuid();
    let myExpense = {name: 'sports', cost: '200', id: uuid(), categoryID: dogID};

    test('expense add returns correct type and payload', ()=> {

      let action = createExpense(myExpense);

      expect(action.type).toEqual('EXPENSE_CREATE');
      expect(action.payload.name).toEqual('sports');
      expect(action.payload.cost).toEqual('200');
      expect(action.payload.id).not.toBe(undefined);
    });


    test('expense insert returns correct type and payload', ()=> {

      let newCategoryID = uuid();
      myExpense.categoryID = newCategoryID;

      let action = insertExpense(myExpense);

      expect(action.type).toEqual('EXPENSE_INSERT');
      expect(action.payload.name).toEqual('sports');
      expect(action.payload.cost).toEqual('200');
      expect(action.payload.id).not.toBe(undefined);
      expect(action.payload.categoryID).toEqual(myExpense.categoryID);
      expect(action.payload.categoryID).not.toEqual(dogID);
    });


    test('expense update returns correct type and payload', ()=> {

      let expense = {name: 'coke', cost: '10'};
      let action = updateExpense(expense);

      expect(action.type).toEqual('EXPENSE_UPDATE');
      expect(action.payload.name).toEqual('coke');
      expect(action.payload.cost).toEqual('10');
    });


    test('expense =estroy returns correct type and expense =', ()=> {

      let expense = {name: 'tings', cost: '200'};
      let action = destroyExpense(expense);

      expect(action.type).toEqual('EXPENSE_DESTROY');
      expect(action.payload.name).toEqual('tings');
      expect(action.payload.cost).toEqual('200');
    });
  })
