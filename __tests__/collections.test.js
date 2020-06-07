'use strict';
require('@code-fellows/supergoose');

const catModel = require('../lib/models/categories/categories.collection');
const proModel = require('../lib/models/products/products.collection');

describe('CRUD tests', ()=> {
  const categoryObject = {
    name: 'wallet',
    display_name: 'Wallet',
    description: 'leather collection',
  };
  const productObject = {
    category: 'shoes',
    name: 'long boots',
    display_name: 'Long Boots',
    description: 'leather boots',
  };

  it('can create and get all categories', ()=> {
    return catModel.create(categoryObject).then(()=> {
      return catModel.get().then(data=> {
        Object.keys(categoryObject).forEach(key => {
          expect(data[0][key]).toEqual(categoryObject[key]);
        });           
      });
    });
  });
  it('can create and get one category', ()=> {
    return catModel.create(categoryObject).then((result)=> {
      return catModel.get(result._id).then(data=> {
        Object.keys(categoryObject).forEach(key => {
          expect(data[0][key]).toEqual(categoryObject[key]);
        });           
      });
    });
  });
  it('can update a category', ()=> {
    const editedcategoryObject = {
      name: 'Editedwallet',
      display_name: 'EditedWallet',
      description: 'Editedleather collection',
    };
    return catModel.create(categoryObject).then((result)=> {
      return catModel.update(result._id, editedcategoryObject).then((data)=>{
        return catModel.get(result._id).then(data=> {
          Object.keys(categoryObject).forEach(key => {
            expect(data[0][key]).toEqual(editedcategoryObject[key]);
          });           
        });
      });
    });
  });
  it('can delete a category', ()=> {


  });
  it('can get all products', ()=> {
    return proModel.create(productObject).then(()=> {
      return proModel.get().then(data=> {
        Object.keys(productObject).forEach(key => {
          expect(data[0][key]).toEqual(productObject[key]);
        });           
      });
    });
  });
  it('can get one product', ()=> {
    return proModel.create(productObject).then((result)=> {
      return proModel.get(result._id).then(data=> {
        Object.keys(productObject).forEach(key => {
          expect(data[0][key]).toEqual(productObject[key]);
        });           
      });
    });  
  });
  it('can update a product', ()=> {
    const editedProductObject = {
      category: 'Editedshoes',
      name: 'Editedlong boots',
      display_name: 'EditedLong Boots',
      description: 'leather boots',
    };
    return proModel.create(productObject).then((result)=> {
      return proModel.update(result._id, editedProductObject).then(()=>{
        return proModel.get(result._id).then(data=> {
          Object.keys(productObject).forEach(key => {
            expect(data[0][key]).toEqual(editedProductObject[key]);
          });           
        });
      });
    });  
  });
  it('can delete a product', ()=> {
    return proModel.create(productObject).then((result)=> {
      return proModel.delete(result._id).then(()=>{
        return proModel.get().then(data=> {
          data.forEach(res => {
            expect(res._id).not.toEqual(result._id);
          });           
        });
      });
    });  
  });
});