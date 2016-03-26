

var Observer = (function(slice){
  function bind(event, fn) {
    var events = this.events = this.events || {};

    if(events[event] && events[event].length) return;
    events[event] = events[event] || [];
    events[event].push(fn);

    return this;
  }
  function one(event, fn) {
    this.bind(event, function fnc(){
      fn.apply(this, sclice.call(arguments));
      this.unbind(event, fnc);
    });
  }
  function unbind(event, fn) {
    var events = this.events;
    if (!events) return;
    if(event in events){
      events[event].splice(events[event].indexOf(fn), 1);
      if(!events[event].length)
        delete events[event];
    }
  }
  function trigger(event){
    var events = this.events,
        flag;

    if(!events || !(event in events)) return;
    for (var i = 0; i < events[event].length; i++) {
      flag = events[event][i].apply(this, slice.call(arguments, 1));
    }
    return flag;
  }

  return function(){
    this.subscribe = this.on = bind;
    this.unsubscribe = this.off = unbind;
    this.trigger = this.publish = trigger;
    this.one = one;

    return this;
  };
})([].slice);
