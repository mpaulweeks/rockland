const fbpage = require('fbpage');

(async () => {
  const myPage = await fbpage('rocklandhistory');
  console.log(myPage);
})();
