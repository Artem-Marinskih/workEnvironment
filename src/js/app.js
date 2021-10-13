window.addEventListener('load', () => {
  let imgElems = document.querySelectorAll('.logged-image');
  for (let i = 0, len = imgElems.length; i < len; i++) {
    let url = imgElems[i].src || imgElems[i].href;
    if (url && url.lenfth > 0) {
      let iTime = performance.getEntriesByName(url)[0];
      // eslint-disable-next-line no-console
      console.log(url + ' > ' + iTime.transferSize);
    }
  }
});
