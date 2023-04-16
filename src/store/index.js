import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [
      {
        id: 1,
        name: 'Home',
        link: '/'
      },
      {
        id: 2,
        name: 'Menu',
        link: '/menu'
      },
      {
        id: 3,
        name: 'Trending',
        link: '/trending'
      },
      {
        id: 4,
        name: 'Settings',
        link: '/settings'
      }
    ],

    delices: [
      {
        id: 1,
        title: 'All',
        img: 'grilled.svg'
      },
      {
        id: 2,
        title: 'Burger',
        img: 'cartoon.svg'
      },
      {
        id: 3,
        title: 'Pizza',
        img: 'pizza.svg'
      },
      {
        id: 4,
        title: 'Salads',
        img: 'salad.svg'
      },
      {
        id: 5,
        title: 'Donut',
        img: 'donut.svg'
      },
      {
        id: 6,
        title: 'Drinks',
        img: 'drinks.svg'
      }
    ],

    dishes: [
      {
        id: 1,
        name: 'Burger Wanted',
        title: 'Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade',
        price: 29,
        ready: false,
        good: true,
        img: 'img1.svg'
      },
      {
        id: 2,
        name: 'Butter Chciken',
        title: 'Reis, Sous-vide Chicken, Penaut Satay, Babyspian',
        price: 56,
        better: true,
        ready: true,
        img: 'img2.svg'
      },
      {
        id: 3,
        name: 'Hi, Salmon',
        title: 'Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.',
        price: 69,
        ready: false,
        img: 'img3.svg'
      },
      {
        id: 4,
        name: 'Soup of the Day',
        title: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price: 24,
        ready: true,
        img: 'img4.svg'
      },
      {
        id: 5,
        name: 'Salmon Carpaccio & Citrus Dressing',
        title: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price: 35,
        ready: false,
        img: 'img5.svg'
      },
      {
        id: 6,
        name: 'Steak Tartare',
        title: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price: 48,
        best: true,
        ready: true,
        img: 'img6.svg'
      }
    ],

    menu: [
      {
        id: 1,
        type: 4,
        name: 'Burger Wanted',
        title: 'Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade',
        price: 29
      },
      {
        id: 2,
        type: 2,
        name: 'Butter Chciken',
        title: 'Reis, Sous-vide Chicken, Penaut Satay, Babyspian',
        price: 56
      },
      {
        id: 3,
        type: 2,
        name: 'Hi, Salmon',
        title: 'Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.',
        price: 69
      },
      {
        id: 4,
        type: 2,
        name: 'Lobster Bisque',
        title: 'Lorem, deren, trataro, filede, nerada',
        price: 18
      },
      {
        id: 5,
        type: 3,
        name: 'Bread barrel',
        title: 'Lorem, deren, trataro, filede, nerada',
        price: 12
      },
      {
        id: 6,
        type: 2,
        name: 'Crab Cake',
        title: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce',
        price: 26
      },
      {
        id: 7,
        type: 3,
        name: 'Caesar Selections',
        title: 'Lorem, deren, trataro, filede, nerada',
        price: 16
      },
      {
        id: 8,
        type: 4,
        name: 'Tuscan Grilled',
        title: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto',
        price: 42
      },
      {
        id: 9,
        type: 2,
        name: 'Mozzarella Stick',
        title: 'Lorem, deren, trataro, filede, nerada',
        price: 20
      },
      {
        id: 10,
        type: 3,
        name: 'Greek Salad',
        title: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives',
        price: 18
      },
      {
        id: 11,
        type: 3,
        name: 'Spinach Salad',
        title: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette',
        price: 24
      },
      {
        id: 12,
        type: 4,
        name: 'Lobster Roll',
        title: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll',
        price: 32
      },
      {
        id: 13,
        type: 2,
        name: 'Salmon Carpaccio & Citrus Dressing',
        title: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price: 35
      },
      {
        id: 14,
        type: 4,
        name: 'Steak Tartare',
        title: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.',
        price: 48
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
