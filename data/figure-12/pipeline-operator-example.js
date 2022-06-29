let add    = y => x => x + y;
let double = z => z * 2;

let n = __ABS__("INTERVAL:[0, 99]"); // [0, 99]
let a = n |> add(1)   // [1, 100]
          |> double;  // [2, 200]
let b = n |> add(1n)  // TypeError: Number + BigInt
          |> unknown; // unreachable
