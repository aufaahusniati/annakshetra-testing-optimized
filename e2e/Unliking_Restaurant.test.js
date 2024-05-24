Feature('Unliking restaurant');

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('Your Favorite Restaurant', '.content__heading');

  I.amOnPage('/');

  I.waitForElement('.restaurant_title', 10);
  I.click(locate('.restaurant_title').first());

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('Your Favorite Restaurant', '.content__heading');

  I.waitForElement('.restaurant_title', 10);
  I.click(locate('.restaurant_title').first());

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.restaurant-title');
});
