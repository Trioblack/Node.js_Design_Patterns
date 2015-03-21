Competitive race
================
Function to execute parallel tasks

How it works
============

```
var tasks = [
    function(cb) {
        console.log("f1");
        cb("f1 result");
    },
    function (cb) {
        console.log("f2");
        cb("f2 result");
    }
]

var results = parallel(tasks, function () {
    console.log("Parallel execution finished");
});

console.log(results);
```