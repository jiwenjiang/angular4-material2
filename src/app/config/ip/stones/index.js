import {ip} from '../index';

const urls = {
  cardList: '26550/card-list',
  wilds: '26550/cards'
}

for (let attr in urls) {
  urls[attr] = ip + urls[attr]
}

export default urls;
