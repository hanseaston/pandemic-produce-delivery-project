export const convertDBFormatToReactFormat = (products) => {
  // Hard coded values for initialization
  // Because we know there are only 5 categories in the product shop
  // Might need to change it and store it in database in the future
  // But it's good for now
  const transformedData = {
    vegetable: {
      id: 1,
      title: "Vegetables",
      items: [],
    },
    fruit: {
      id: 2,
      title: "Fruits",
      items: [],
    },
    poultry: {
      id: 3,
      title: "Poultry",
      items: [],
    },
    seafood: {
      id: 4,
      title: "Seafood",
      items: [],
    },
    dairy: {
      id: 5,
      title: "Dairy",
      items: [],
    },
  };

  products.forEach(({ name, description, imageUrl, _id, price, type }) => {
    // If type is not found in the database, throw err.
    if (!transformedData[type.toLowerCase()]) {
      throw new Error(
        `error in product type ${type.toLowerCase()} - does not match with any existing product types`
      );
    } else {
      transformedData[type.toLowerCase()]["items"].push({
        id: _id,
        name,
        description,
        imageUrl,
        price,
      });
    }
  });
  // console.log("After transformation, products are ", transformedData);
  return transformedData;
};
