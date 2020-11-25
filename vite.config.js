const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

export default {
  open: true,
  alias: {
    '/@/': resolve('./src'),
    '/pages/': resolve('./src/pages'),
    '/components/': resolve('./src/components'),
    '/assets/': resolve('./src/assets'),
    '/utils/': resolve('./src/utils'),
    '/requests/': resolve('./src/apis/requests'),
  }
}