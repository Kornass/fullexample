const Products = require("../models/products.js");
const Categories = require("../models/categories");
const ObjectId = require("mongoose").Types.ObjectId;

const product_add = async (req, res) => {
  const { category, name, price, color, description } = req.body;
  try {
    const foundProd = await Products.findOne({ name: name });
    if (foundProd) {
      res.send(`Product ${name} already exists`);
    } else {
      const foundCategory = await Categories.findOne({ category: category });
      if (foundCategory) {
        console.log(foundCategory._id);
        await Products.create({
          category_id: new ObjectId(foundCategory._id),
          name: name,
          price: Number(price),
          color: color,
          description: description,
        });
        res.send(`Product ${name} added successfully!`);
      } else {
        const newCat = await Categories.create({ category });
        await Products.create({
          category: new ObjectId(newCat._id),
          name: name,
          price: Number(price),
          color: color,
          description: description,
        });
        res.send(
          `Category doesn't exist! I added new category ${category} with product ${name}`
        );
      }
    }
  } catch (error) {
    res.send(error);
  }
};

const product_delete = async (req, res) => {
  const { product } = req.body;
  const deleted = await Products.findOneAndRemove({ name: product.name }).catch(
    (err) => console.info(err)
  );
  return !deleted
    ? res.send({
        ok: true,
        data: `Product ${product.name} doesn't exist`,
      })
    : res.send({
        ok: true,
        data: `Product ${product.name} deleted successfully`,
      });
};

const product_update = async (req, res) => {
  const { old_product, new_product } = req.body;
  const product = await Products.findOneAndUpdate(
    { name: old_product.name },
    new_product
  ).catch((err) => console.info(err));
  if (product) {
    res.send({
      ok: true,
      data: `Product ${new_product.name} updated successfully`,
    });
  } else {
    res.send({
      ok: true,
      data: `Product ${old_product.name} doesn't exist`,
    });
  }
};

const product_product = async (req, res) => {
  const { product } = req.params;
  const found = await Products.findOne({ name: product });
  if (found) {
    res.send({
      ok: true,
      data: found,
    });
  } else {
    res.send({
      ok: true,
      data: `Product ${product} doesn't exist`,
    });
  }
};

const get_all = async (req, res) => {
  try {
    const response = await Products.find({});
    res.send(response);
  } catch (err) {
    console.info(err);
  }
};

module.exports = {
  product_add,
  get_all,
  product_update,
  product_delete,
  product_product,
};
