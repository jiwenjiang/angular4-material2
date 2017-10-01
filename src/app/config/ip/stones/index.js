import {ip} from '../index';

const urls = {
  cardList: '26550/card-list'
}

for (let attr in urls) {
  urls[attr] = ip + urls[attr]
}

export default urls;
