import { faker } from '@faker-js/faker';
import tweeterData from './twitterData.json';

const Data = [];
for (let i = 0; i < 18; i++) {
  const data = {};

  const url = faker.image.cats(300, 300, true);
  const profImgUrl = faker.image.cats(600, 600, true);
  data.url = { url, profImgUrl };
  const intro = faker.lorem.lines();
  const location =
    faker.address.cityName() + ', ' + faker.address.countryCode();
  const link = Math.round(Math.random()) ? faker.internet.domainName() : '';
  data.profile = { intro, location, link };
  const followers = faker.datatype.number();
  const following = faker.datatype.number();
  data.follows = { followers, following };
  const date = faker.date.past();
  const name = faker.random.words();
  const firstname = name.substring(0, name.indexOf(' '));
  const lastname = name.substring(name.indexOf(' ') + 1);
  const id = faker.internet.userName(
    firstname.length > 0 ? firstname : lastname,
    firstname.length > 0 ? lastname : firstname
  );
  data.info = { date, name, id };
  const replyCount = faker.datatype.number({ max: 20 });
  const retweetCount = faker.datatype.number({ max: faker.datatype.number() });
  const heartCount = faker.datatype.number({ max: faker.datatype.number() });
  data.activities = { replyCount, retweetCount, heartCount };
  data.content = tweeterData.data[i].text;
  Data.push(data);
}

Data.sort(function (a, b) {
  return b.info.date - a.info.date;
});
// Data.map((data) => console.log(data))
const mockData = { data: Data };
export default mockData;
