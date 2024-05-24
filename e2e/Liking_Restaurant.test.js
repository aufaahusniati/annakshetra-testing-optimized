const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.content__heading');
  I.see('Your Favorite Restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Your Favorite Restaurant', '.content__heading');

  I.amOnPage('/');

  I.seeElement('.restaurant_title a');

  I.waitForElement('.restaurant_title', 5);
  const firstRestaurant = locate('.restaurant_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant_title', 5);
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
