How it works
============

```
var links = [
    { url: "google.com" },
    { url: "facebook.com" }
];

iterateSeries(links, function (item) {
    console.log(item);
}, function () {
    console.log("end iteration");
});
```
