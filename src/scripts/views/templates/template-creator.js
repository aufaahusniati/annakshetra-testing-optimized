import CONFIG from '../../globals/config';

function categoriesRestaurant(restaurant) {
  return restaurant.categories
    .map(
      (category) => `
      <li>${category.name}</li>
    `,
    )
    .join('');
}

function foodsRestaurant(restaurant) {
  return restaurant.menus.foods
    .map(
      (food) => `
      <li>${food.name}</li>
      `,
    )
    .join('');
}

function customerReviews(restaurant) {
  return restaurant.customerReviews
    .map(
      (reviews) => `
      <li class="review">
        <div class="name-review">${reviews.name}</div>
        <div class="date-review">${reviews.date}</div>
        <div class="description-review">"${reviews.review}"</div>
      </li>
      `,
    )
    .join('');
}

function drinksRestaurant(restaurant) {
  return restaurant.menus.drinks
    .map(
      (drink) => `
      <li>${drink.name}</li>
      `,
    )
    .join('');
}

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">Detail Restaurant</h2>
  <div class="restaurant__wrap">
    <picture>
      <source data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <img class="restaurant__poster lazyload"
          src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    </picture>
    <div class="restaurant__info">
      <h4>Restaurant</h4>
        <p>${restaurant.name}</p>
      <h4>Address</h4>
        <p>${restaurant.address}</p>
      <h4>City</h4>
        <p>${restaurant.city}</p>
      <h4>Rating</h4>
        <p>${restaurant.rating}</p>
    </div>
  </div>

  <div class="restaurant__overview">
      <p>${restaurant.description}</p>
  </div>

  <div class="restaurant-menu">
    <h4 class="restaurant-label">Categories</h4>
      <ul class="menus"> ${categoriesRestaurant(restaurant)}</ul>
    <h4 class="restaurant-label">Foods Menu</h4>
      <ul class="menus"> ${foodsRestaurant(restaurant)}</ul>
    <h4 class="restaurant-label">Drinks Menu</h4>
      <ul class="menus"> ${drinksRestaurant(restaurant)}</ul>
  </div>

  <div class="restaurant__overview">
  <h1 class="review-label">Customer Reviews</h1>
    <ul class="review-boxs"> ${customerReviews(restaurant)}</ul>
</div>

`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <picture>
      <source data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <img class="restaurant-item__header__poster lazyload"
          data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    </picture>
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant_title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
