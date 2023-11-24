const Categories = require("../models/categories.js");
const Products = require("../models/products.js");

const category_add = async (req, res) => {
  const { category } = req.body;
  try {
    const found = await Categories.findOne({ category });
    if (found) {
      res.send(`Category ${category} already exist`);
    } else {
      await Categories.create({ category });
      res.send(`Category ${category} added successfully`);
    }
  } catch (err) {
    res.send(err);
  }
};

const category_delete = async (req, res) => {
  const { category } = req.body;
  try {
    const deleted = await Categories.findOneAndRemove({ category });
    if (deleted) {
      res.send({ ok: true, data: `Category ${category} deleted successfully` });
    } else {
      res.send({
        ok: true,
        data: `Category ${category} doesn't exist`,
      });
    }
  } catch (e) {
    res.send({ e });
  }
};

const category_update = async (req, res) => {
  const { old_category, new_category } = req.body;
  try {
    const updated = await Categories.findOneAndUpdate(
      { category: old_category },
      { category: new_category }
    );
    if (!updated) {
      res.send({ ok: true, data: `Category ${old_category} doesn't exist` });
    } else {
      res.send({
        ok: true,
        data: `Category ${new_category} updated successfully`,
      });
    }
  } catch (e) {
    res.send({ e });
  }
};

const category_categories = async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.send(categories);
  } catch (err) {
    console.info(err);
  }
};

const category_custom = async (req, res) => {
  const { category } = req.params;
  try {
    const cat  = await Categories.findOne({category})
    if(cat) {
      const products = await Products.find({ category_id:cat._id });
if(products.length < 1) {
  res.send("No products in this category!")
} else {
 res.send({ok:true, products:products}) 
}
    } else {
      res.send({ ok: true, data: `Category ${category} doesn't exist` });
    }
  } catch (err) {
    console.info(err);
  }
};

module.exports = {
  category_add,
  category_categories,
  category_custom,
  category_update,
  category_delete,
};
