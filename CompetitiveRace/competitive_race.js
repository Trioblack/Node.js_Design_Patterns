/**
 * Function to execute tasks in parallel
 */
function parallel(tasks, finalCallback) {
        
    var completed = 0;
    var results = [];
    
    tasks.forEach(function (task) {
        
        task(function (result) {
            
            if (result) {
                results.push(result);
            }

            if (++completed === tasks.length) {
                finalCallback(results);
            }

        });
                
    });

    return results;

}
