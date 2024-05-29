const assert = require('assert');

/* eslint-disable no-undef */
Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  I.seeElement('.restaurant-item a');

  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('.restaurant__name'); // Update selector to match the correct element
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  I.click(locate('.restaurant-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant-item');
});
