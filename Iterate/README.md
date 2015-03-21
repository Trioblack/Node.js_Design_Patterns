How it works
============

```
function spiderLinks(currentUrl, body, nesting, callback) {
  if(nesting === 0) {
    return process.nextTick(callback);
  }
  var links = utilities.getPageLinks(currentUrl, body);
  function iterate(index) {
    if(index === links.length) {
      return callback();
    }
   
    spider(links[index], nesting - 1, function(err) {
      if(err) {
        return callback(err);
      }
      iterate(index + 1);
    });
  }
  iterate(0);
}
```
