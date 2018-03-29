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
console.log("adjList: ", adjList)