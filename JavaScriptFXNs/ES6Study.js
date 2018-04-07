// ES6
var bob = {
    _eventDate:'Monday',
    _events: ['Code all day!'],
    printEvents() {
        this._events.forEach(e =>
        console.log(e + ' event is for ' + this.eventDate));
    }
}
// console.log(bob.printEvents())

// ES5
var eventList = {
    _eventDate: 'Monday',
    _events: ['Code all day!'],
    printEvents: function() {
        this._events.forEach(function (f) {
            return console.log(this._events);
        }, this);
    }
};
// console.log("EVENTLIST: ", eventList._eventDate)

//Exporting Modules 
// module.exports = 7;
// module.exports = {
//     x : 7
// };
// module.exports = function sample() { }
// export let name = 'Tim Paterson';
// export function sampleFun(x) {
//     return x + x 
// }


