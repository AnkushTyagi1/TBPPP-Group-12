import images from './images';
const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹1450',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹1000',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹900',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹550',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹290',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹500',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹250',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹300',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹190',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹300',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

// const foodItems = [
//   {
//     id: 1,
//     title: 'Paneer Tikka',
//     category: 'veg',
//     price: '₹180',
//     description: 'Grilled paneer cubes with spices',
//     image: 'https://source.unsplash.com/300x200/?paneer'
//   },
//   {
//     id: 2,
//     title: 'Chicken Biryani',
//     category: 'non-veg',
//     price: '₹220',
//     description: 'Aromatic basmati rice with chicken',
//     image: 'https://source.unsplash.com/300x200/?biryani'
//   },
//   {
//     id: 3,
//     title: 'Lemonade',
//     category: 'beverages',
//     price: '₹60',
//     description: 'Freshly squeezed lemon juice with mint',
//     image: 'https://source.unsplash.com/300x200/?lemonade'
//   },
//   {
//     id: 4,
//     title: 'French Fries',
//     category: 'sides',
//     price: '₹80',
//     description: 'Crispy golden fries with ketchup',
//     image: 'https://source.unsplash.com/300x200/?fries'
//   },
//   {
//     id: 5,
//     title: 'Veg Manchurian',
//     category: 'veg',
//     price: '₹160',
//     description: 'Spicy Indo-Chinese veg balls in sauce',
//     image: 'https://source.unsplash.com/300x200/?manchurian'
//   },
//   {
//     id: 6,
//     title: 'Butter Chicken',
//     category: 'non-veg',
//     price: '₹250',
//     description: 'Creamy tomato-based chicken curry',
//     image: 'https://source.unsplash.com/300x200/?butter-chicken'
//   }
// ];

const menuData = {wines, cocktails, awards};

export default menuData;
