const key = "it_spa_cart";

export const cartManager = {
  add(item, date) {
    const cart = localStorage.getItem(key);
    let content;
    if (cart === null) {
      let start = document.querySelector(".date input#start").value;
      let end = document.querySelector(".date input#start").value;
      content = {
        [item.name]: {
          price: item.price,
          quantity: 1,
          img: item.img,
          start: date.start,
          end: date.end,
        },
      };
    } else {
      content = JSON.parse(cart);

      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        Object.assign(content, {
          [item.name]: {
            price: item.price,
            quantity: 1,
            start: item.start,
            end: item.end,
          },
        });
      }
    }
    localStorage.setItem(key, JSON.stringify(content));
    //location.reload();
  },

  remove(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      let content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }
      localStorage.setItem(key, JSON.stringify(content));
      //location.reload();
    }
  },

  getAll() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      let content = JSON.parse(cart);

      return Object.entries(content).map((entry) => {

        const [name, value] = entry;

        return {
          name,
          ...value,
        };
      });
    }
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return "0.00";
    } else {
      const content = JSON.parse(cart);
      return Object.values(content)
        .reduce(
          (totalPrice, item) => totalPrice + item.quantity * item.price,
          0
        )
        .toFixed(2);
    }
  },
};
