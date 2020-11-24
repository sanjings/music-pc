import { ajaxGet } from '../ajax';
import { GET_BANNERS } from './../url';

const getBannersRequest = (type: number) => {
  return ajaxGet(GET_BANNERS, type);
}

export {
  getBannersRequest
}