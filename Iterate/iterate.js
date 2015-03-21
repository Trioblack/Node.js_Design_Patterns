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