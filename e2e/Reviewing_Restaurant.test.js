Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('post a restaurant review', async ({ I }) => {
  const reviewText = 'E2E Post Review text';

  I.amOnPage('/');

  I.waitForElement('.restaurant_title', 10);
  I.seeElement('.restaurant_title');
  I.click(locate('.restaurant_title').first());

  I.waitForElement('#review-form', 10);
  I.seeElement('#review-form');
  I.fillField('#review-name', 'E2E Test Review');
  I.fillField('#review-content', reviewText);
  I.click('#submit-review');
  I.waitForElement('.review', 10);

  const lastReview = locate('.review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
});
