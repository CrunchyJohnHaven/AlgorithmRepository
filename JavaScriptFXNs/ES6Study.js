var bob = {
    _eventDate:'Monday',
    _events: ['Code all day!'],
    printEvents() {
        this._events.forEach(e =>
        console.log(e + ' event is for ' + this.eventDate));
    }
}
console.log(bob.printEvents())

var eventList = {
    _eventDate: 'Monday',
    _events: ['Code all day!'],
    printEvents: function() {
        this._events.forEach(function (f) {
            return console.log(this._events);
        }, this);
    }
};
console.log("EVENTLIST: ", eventList._eventDate)