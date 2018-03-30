var adjList = {
    "A": ["B"],
    "B": ["A","C"],
    "C": ["B", "D"],
    "D": ["C", "I"],
    "E": ["B","F"],
    "F": ["E", "G"],
    "G": ["F", "H"],
    "H": ["G", "I"],
    "I": ["D", "H"]
}
var origin = "A"
var destination = "D"
function breadthFirstSearch(origin, destination, adjList) {
    var queue = [];
    queue.push(origin)
    var neighbors = []
    var stack = []
    var tracker = {}
    tracker[origin] = [0, null]
    while(!(destination in tracker) && (queue.length != 0)){
        var hotseat = queue.shift();
        for(a = 0; a < adjList[hotseat].length; a++) {
            neighbors.push(adjList[hotseat][a])
        }
        for (var i = 0; i < neighbors.length; i++) {
            if(!(neighbors[i] in tracker)) {
                tracker[neighbors[i]] = [tracker[hotseat][0]+1, hotseat]
                queue.push(neighbors[i])
                if(neighbors[i] == destination) {
                    break
                }
            }

        }
    }
    if(destination in tracker){
        return(["true", tracker])
        }
    else {
        return([false, tracker])
        }
}

var breadth = breadthFirstSearch(origin, destination, adjList)
console.log(breadth)
