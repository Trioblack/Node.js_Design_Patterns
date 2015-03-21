/**
 * Function that iterates on async tasks
 */
function iterateSeries(collection, iteratorCallback, finalCallback) {

    function iterate(index) {
        if (index === collection.length) {
            return finalCallback();
        }
        var item = collection[index];
        
        iteratorCallback(item);
        
        iterate(index + 1);
    }

}