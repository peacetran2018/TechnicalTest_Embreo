function point(x, y) {
    this.x = x;
    this.y = y;
}

var findSolution = function (points) {
    var results = {};
    var max = 0;
    for (var x = 0; x < points.length; x++) {
        results = { "count": 0 };
        var start = 1;
        var marks = false;
        for (var i = 0, temp; i < points.length; i++) {
            if (points[i].x == points[x].x) {//if 2 elements in a point is equal then Yi and Yx
                if (points[i].y == points[x].y) { //if next 2 elements in a point is equal
                    for (var y in results) {
                        results[y]++;//increase count in results
                    }
                    max = marks ? max + 1 : max; //get max point if marks is true then max will be plus 1 and otherwise tak max
                    start++;
                }
                else {
                    results["count"]++;
                }
                max = results["count"] > max ? results["count"] : max;//the value of count in results greater than max then take value of count in result other wise take max
                continue;//continue for loop of i
            }
            temp = (points[i].y - points[x].y) / (points[i].x - points[x].x);//
            results[temp] ? (results[temp]++) : (results[temp] = start);//add element temp with value is current start in results.
            results[temp] > max ? (max = results[temp], marks = true) : null;//if results greater than current max then set max = results and set marks true
        }
    }
    return max;
}