/**
 * Function that executes function asynchronously on a
 * given collection
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
    iterate(0);

}
