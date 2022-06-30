let x = __ABS__("INTERVAL:[1, 2]");
let y = __ABS__("String");
let o = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});
o.subscribe(k => x *= k); // x: 6 or 12
o.subscribe(k => y += k); // y: a string ends with "123"
