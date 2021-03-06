// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator !x uses [[Default Value]]
es5id: 11.4.9_A2.2_T1
description: If Type(value) is Object, return false
---*/
//CHECK#1
var object = {
  valueOf: function valueOf() {
    return 1;
  }
};

if (!object !== false) {
  $ERROR('#1: var object = {valueOf: function() {return 1}}; !object === false. Actual: ' + !object);
} //CHECK#2


var object = {
  valueOf: function valueOf() {
    return 1;
  },
  toString: function toString() {
    return 0;
  }
};

if (!object !== false) {
  $ERROR('#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; !object === false. Actual: ' + !object);
} //CHECK#3


var object = {
  valueOf: function valueOf() {
    return 1;
  },
  toString: function toString() {
    return {};
  }
};

if (!object !== false) {
  $ERROR('#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; !object === false. Actual: ' + !object);
} //CHECK#4


var object = {
  valueOf: function valueOf() {
    return 1;
  },
  toString: function toString() {
    throw "error";
  }
};

if (!object !== false) {
  $ERROR('#4: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; !object === false. Actual: ' + !object);
} //CHECK#5


var object = {
  toString: function toString() {
    return 1;
  }
};

if (!object !== false) {
  $ERROR('#5: var object = {toString: function() {return 1}}; !object === false. Actual: ' + !object);
} //CHECK#6


var object = {
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    return 1;
  }
};

if (!object !== false) {
  $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; !object === false. Actual: ' + !object);
} //CHECK#7


var object = {
  valueOf: function valueOf() {
    throw "error";
  },
  toString: function toString() {
    return 1;
  }
};

if (!object !== false) {
  $ERROR('#7: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; !object === false. Actual: ' + !object);
} //CHECK#8


var object = {
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    return {};
  }
};

if (!object !== false) {
  $ERROR('#8: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; !object === false. Actual: ' + !object);
}