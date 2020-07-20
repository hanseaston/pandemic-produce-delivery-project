export const convertDBFormatToReactFormat = (products) => {
  const transformedData = {
    vegetable: {
      routeName: "vegetable",
      id: 1,
      title: "Vegetables",
      items: [],
    },
    fruit: {
      routeName: "fruit",
      id: 2,
      title: "Fruits",
      items: [],
    },
    poultry: {
      routeName: "poultry",
      id: 3,
      title: "Poultry",
      items: [],
    },
    seafood: {
      routeName: "seafood",
      id: 4,
      title: "Seafood",
      items: [],
    },
    dairy: {
      routeName: "dairy",
      id: 5,
      title: "Dairy",
      items: [],
    },
  };

  products.forEach(({ name, description, imageUrl, _id, price, type }) => {
    if (!transformedData[type.toLowerCase()]) {
      throw new Error(
        "error in product type, does not match with any existing product types"
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
  console.log("After transformation, products are ", transformedData);
  return products;
};
