
const {Category}  = require('../models');

const categoryData = [
  {
        id: 1,
        category_name: 'Vegetables'
        // store_id: 1  
  },
  {
       id: 2,
         category_name: 'Fruits'
            // store_id: 2
    }
    ,
    {
        id: 3,
        category_name: 'Meats'
        // store_id: 3
    }
  ];
       
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
