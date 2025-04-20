import React from 'react';
import './MenuCard.css';

const menuData = {
  Cocktails: [
    {
      name: 'Desi Mojito',
      price: '₹100',
      image: 'https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2017/01/Desi-Mojito-Feature.jpg?fit=862%2C719&ssl=1',
    },
    {
      name: 'Kala Khatta Twist',
      price: '₹150',
      image: 'https://hitkary.in/cdn/shop/files/AMAZONESHOPFRONT-07.jpg?v=1707467257',
    },
    {
      name: 'Masala Nimbu Pani',
      price: '₹100',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5phFAbF0tBF4-o2WTgiUHcxUNMpx_wGDvQA&s',
    },
    {
      name: 'Negroni',
      price: '₹200',
      image: 'https://cdn.shopify.com/s/files/1/0488/6642/7045/files/CP_Cocktail_Negroni_600x600.png?v=1648831385',
    },
    {
      name: 'Kaccha Aam Margarita',
      price: '₹190',
      image: 'https://spicecravings.com/wp-content/uploads/2022/05/Aam-Panna-LS.jpg',
    },
    {
      name: 'Coconut Punch',
      price: '₹200',
      image: 'https://www.marathonsandmotivation.com/wp-content/uploads/2021/06/Coconut_Punch_with_cinnamon_and_coconut_on_top.jpg',
    },
  ],

  Veg: [
    {
      name: 'Paneer Butter Masala',
      price: '₹200',
      image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/09/instant-pot-paneer-butter-masala-featured.jpg'
    },
    {
        name: 'Dal Tadka',
        price: '₹250',
        image: 'https://tse1.mm.bing.net/th?id=OIP.jzW7zWIxNmoRA5-GUysflwHaHa&pid=Api&P=0&h=180'
      },
      {
        name: 'Dal Makhani',
        price: '₹300',
        image: 'https://recipes.timesofindia.com/thumb/53097626.cms?imgsize=156015&width=800&height=800'
      },
      {
        name: 'Chole',
        price: '₹180',
        image: 'https://spicecravings.com/wp-content/uploads/2020/09/Punjabi-Chole-New-1-1024x1536.jpg'
      },
    {
      name: 'Veg Biryani',
      price: '₹180',
      image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg'
    },
    {
      name: 'Palak Paneer',
      price: '₹190',
      image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-featured.jpg'
    }
  ],
  'Non-Veg': [
    {
      name: 'Chicken Curry',
      price: '₹250',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg'
    },
    {
      name: 'Mutton Biryani',
      price: '₹300',
      image: 'https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg'
    },
    {
        name: 'Korma',
        price: '₹500',
        image: 'https://tse4.mm.bing.net/th?id=OIP.tHbelqYo-2v6vJCQzFaW0wHaI7&pid=Api&P=0&h=180'
      },
      {
        name: 'Fried Chicken',
        price: '₹250',
        image: 'https://lakegenevacountrymeats.com/wp-content/uploads/Fried-Chicken-Pieces-1.jpg'
      },
      {
        name: 'Chicken Leg Piece',
        price: '₹150',
        image: 'https://tse2.mm.bing.net/th?id=OIP.sPpJ8HyMaqza1E1PRTLSPAHaE8&pid=Api&P=0&h=180'
      },
    {
      name: 'Butter Chicken',
      price: '₹270',
      image: 'https://easychickenrecipes.com/wp-content/uploads/2019/11/butter-chicken-reshoot-6-of-8.jpg'
    }
  ],
  Beverages: [
    {
      name: 'Masala Chai',
      price: '₹40',
      image: 'https://tse4.mm.bing.net/th?id=OIP.1Jk7V5l69uDaxjrQVL7rnQHaLJ&pid=Api&P=0&h=180'
    },
    {
      name: 'Cold Coffee',
      price: '₹70',
      image: 'https://1.bp.blogspot.com/-ioodgOWTWHI/ThYLhhk6D_I/AAAAAAAAEXM/ykBxE70G4R8/s1600/coffee5.JPG'
    },
    {
        name: 'Cold Drink',
        price: '₹90',
        image: 'https://tse4.mm.bing.net/th?id=OIP.iBeMl0lJU0FAyzyLxIEpXgHaEK&pid=Api&P=0&h=180'
      },
      {
        name: 'Nimbu Paani',
        price: '₹50',
        image: 'https://tse2.mm.bing.net/th?id=OIP.ahx_ukvaUm0g32IG6EZQNAHaI_&pid=Api&P=0&h=180'
      },
      {
        name: 'Raita',
        price: '₹40',
        image: 'https://tse1.mm.bing.net/th?id=OIP.cuKBLKkeUDGrPPqC6mnuvgHaLH&pid=Api&P=0&h=180'
      },
    {
      name: 'Lassi',
      price: '₹60',
      image: 'https://tse2.mm.bing.net/th?id=OIP.7Hh_x0aTOCGqO_MYQCKbqAHaEK&pid=Api&P=0&h=180'
    }
  ],
  Sides: [
    {
      name: 'Naan',
      price: '₹30',
      image: 'https://tse2.mm.bing.net/th?id=OIP.KhgnCIjk3sFIj_2YMqDYWAHaHa&pid=Api&P=0&h=180'
    },
    {
      name: 'Roti',
      price: '₹20',
      image: 'https://tse4.mm.bing.net/th?id=OIP.JbleGxH0JNa1xHq8CeXI4gHaHa&pid=Api&P=0&h=180'
    },
    {
        name: 'Aloo Paratha',
        price: '₹60',
        image: 'https://tse3.mm.bing.net/th?id=OIP.OT8uWVMQMvxTGWviBVyCJgHaJA&pid=Api&P=0&h=180'
      },
      {
        name: 'Stuffed Naan',
        price: '₹40',
        image: 'https://tse4.mm.bing.net/th?id=OIP.rv7mNclmDRMnCwtmYjA08gHaHa&pid=Api&P=0&h=180'
      },
      {
        name: 'Missi Roti',
        price: '₹25',
        image: 'https://tse4.mm.bing.net/th?id=OIP.4ghU7rZQ3MiIda5dmlL-1QHaFP&pid=Api&P=0&h=180'
      },
    {
      name: 'Papad',
      price: '₹15',
      image: 'https://tse1.mm.bing.net/th?id=OIP.remTCGA4mxc_iO9KUk1gSwHaE8&pid=Api&P=0&h=180'
    }
  ],
  IceCreams: [
    {
      name: 'Kulfi',
      price: '₹60',
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Mithai/Kesar_Pista_Kulfi_Recipe_Indian_Ice_Cream-1-2_400.jpg',
    },
    {
      name: 'Rajbhog Ice Cream',
      price: '₹80',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/GA/ZK/WV/3180617/rajbhog-ice-cream-flavour.jpg',
    },
    {
      name: 'Mango Dolly',
      price: '₹50',
      image: 'https://cgs-cdn.sgp1.digitaloceanspaces.com/dairy-day/wp-content/uploads/2023/06/07150206/8906010910112-alphonso-mango-candy-3-1536x1152.jpg',
    },
    {
      name: 'Choco Bar',
      price: '₹40',
      image: 'https://gambhoimart.com/wp-content/uploads/2023/07/PhotoRoom-20230715_154530.png.webp',
    },
    {
      name: 'Cassata',
      price: '₹70',
      image: 'https://assets.unileversolutions.com/v1/1862830.png',
    },
    {
      name: 'Butter scotch',
      price: '₹100',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3n9_qjRgWF7OeIQ2_1EzX4pty3dvq41icA&s',
    }
  ],
  
};

const MenuCard = () => {
  return (
    <div className="menu-card">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {Object.entries(menuData).map(([category, items]) => (
          <div className="menu-section" key={category}>
            <h2>{category}</h2>
            <div className="menu-items">
              {items.map((item, index) => (
                <div className="menu-item" key={index}>
                  <img src={item.image} alt={item.name} className="menu-img" />
                  <div className="menu-info">
                    <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
