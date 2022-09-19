import { faker } from '@faker-js/faker';

const userinfo = {
  info: { id: 'spongebob_0223', name: 'SpongeBob' },
  list: [],
  url: {
    url: faker.image.cats(500, 500, true),
    profImgUrl: faker.image.cats(600, 600, true),
  },
  profile: {
    intro: faker.lorem.lines(),
    location: faker.address.cityName() + ', ' + faker.address.countryCode(),
    link: Math.round(Math.random()) ? faker.internet.domainName() : '',
    likes: [],
  },
  follows: {
    following: Math.round(Math.random() * 100),
    followers: Math.round(Math.random() * 100),
  },
  tweets: [],
};

export default userinfo;
