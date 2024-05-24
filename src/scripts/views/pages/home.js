import restaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <hero-bar></hero-bar>
    <highlight-bar></highlight-bar>
    <div class="explore">
      <h1 class="explore_label">Explore Restaurants</h1>
      <hr style="width: 30%; border: 3px solid #de9d7e; margin: auto" />
    </div>
    <div id="restaurants" class="restaurants">
    `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.home();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
