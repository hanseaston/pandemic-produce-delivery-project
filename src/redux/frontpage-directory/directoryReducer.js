const INITIAL_STATE = {
  sections: [
    {
      title: "vegetables",
      imageUrl: "https://i.ibb.co/2MT614z/veggie.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "fruit",
      imageUrl: "https://i.ibb.co/SPGs0r7/fruits.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "poultry",
      imageUrl: "https://i.ibb.co/QXPCqVv/meat.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "seafood",
      imageUrl: "https://i.ibb.co/Qv2ZTNC/seafood.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "dairys",
      imageUrl: "https://i.ibb.co/dWR8R6b/dairy.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
