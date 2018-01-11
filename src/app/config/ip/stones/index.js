import {ip} from '../index';

const urls = {
  cardList: '3724/GET/card-list',
  wilds: '3724/GET/card-list'
}

for (let attr in urls) {
  urls[attr] = ip + urls[attr]
}

export default urls;
