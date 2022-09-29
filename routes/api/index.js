const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);



Product.belongsTo(Category, {
    foreignKey: categoryRoutes
});

Category.hasMany(Models, {
    foreignKey: 
});

Product.belongsTo(ProductTag, {
    foreignKey: productRoutes
});

Tag.belongsTo(Product, {
    foreignKey: productRoutes
});

Product.belongsToMany(Tag, {
    foreignKey: tagRoutes
})
module.exports = router;
