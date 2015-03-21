/**
 * Function that iterates on async tasks
 * Should be inside the "tasks" function
 */
function iterate(index) {
    if (index === tasks.length) {
        return finish();
    }
    var task = tasks[index];
    task(function () {
        iterate(index + 1);
    });
}

function finish() {
    // iteration completed...
}

iterate(0);

/* A more generalized version. */

/**
 * On this version we pass a collection, a function to be executed on each
 * item and a final function to be executed when the iteration finished.
 */
function iterate(collection, iteratorCallback, finalCallback) {
    Object.keys(collection).forEach(element, key, array) {
        var item = collection[element];
        iteratorCallback(item);
    }
    finalCallback();
}