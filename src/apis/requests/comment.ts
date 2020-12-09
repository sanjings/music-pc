import { ajaxGet } from '../ajax';
import { GET_COMMENT } from '../url';

/**
 * 请求评论数据
 */
const getCommentListRequest = (params) => {
  return ajaxGet(GET_COMMENT, params);
}

export {
  getCommentListRequest
}