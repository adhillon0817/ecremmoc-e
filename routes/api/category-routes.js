const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  // Category.findAll()
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  // Category.findByPk( req.params.id)
});

router.post('/', (req, res) => {
  // create a new category

  // Category.create( req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  /** category.update( req.body, {
   * where: {id: req.params.id }
   * } )
   * */
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  // Category.destroy()
});

module.exports = router;
