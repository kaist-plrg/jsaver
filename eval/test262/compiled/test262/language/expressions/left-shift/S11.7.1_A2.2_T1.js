// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x << y uses [[Default Value]]
es5id: 11.7.1_A2.2_T1
description: If Type(value) is Object, evaluate ToPrimitive(value, Number)
---*/
//CHECK#1
if ({
  valueOf: function valueOf() {
    return 1;
  }
} << 1 !== 2) {
  $ERROR('#1: {valueOf: function() {return 1}} << 1 === 2. Actual: ' + ({
    valueOf: function valueOf() {
      return 1;
    }
  } << 1));
} //CHECK#2


if ({
  valueOf: function valueOf() {
    return 1;
  },
  toString: function toString() {
    return 0;
  }
} << 1 !== 2) {
  $ERROR('#2: {valueOf: function() {return 1}, toString: function() {return 0}} << 1 === 2. Actual: ' + ({
    valueOf: function valueOf() {
      return 1;
    },
    toString: function toString() {
      return 0;
    }
  } << 1));
} //CHECK#3


if ({
  valueOf: function valueOf() {
    return 1;
  },
  toString: function toString() {
    return {};
  }
} << 1 !== 2) {
  $ERROR('#3: {valueOf: function() {return 1}, toString: function() {return {}}} << 1 === 2. Actual: ' + ({
    valueOf: function valueOf() {
      return 1;
    },
    toString: function toString() {
      return {};
    }
  } << 1));
} //CHECK#4


try {
  if ({
    valueOf: function valueOf() {
      return 1;
    },
    toString: function toString() {
      throw "error";
    }
  } << 1 !== 2) {
    $ERROR('#4.1: {valueOf: function() {return 1}, toString: function() {throw "error"}} << 1 === 2. Actual: ' + ({
      valueOf: function valueOf() {
        return 1;
      },
      toString: function toString() {
        throw "error";
      }
    } << 1));
  }
} catch (e) {
  if (e === "error") {
    $ERROR('#4.2: {valueOf: function() {return 1}, toString: function() {throw "error"}} << 1 not throw "error"');
  } else {
    $ERROR('#4.3: {valueOf: function() {return 1}, toString: function() {throw "error"}} << 1 not throw Error. Actual: ' + e);
  }
} //CHECK#5


if (1 << {
  toString: function toString() {
    return 1;
  }
} !== 2) {
  $ERROR('#5: 1 << {toString: function() {return 1}} === 2. Actual: ' + (1 << {
    toString: function toString() {
      return 1;
    }
  }));
} //CHECK#6


if (1 << {
  valueOf: function valueOf() {
    return {};
  },
  toString: function toString() {
    return 1;
  }
} !== 2) {
  $ERROR('#6: 1 << {valueOf: function() {return {}}, toString: function() {return 1}} === 2. Actual: ' + (1 << {
    valueOf: function valueOf() {
      return {};
    },
    toString: function toString() {
      return 1;
    }
  }));
} //CHECK#7


try {
  1 << {
    valueOf: function valueOf() {
      throw "error";
    },
    toString: function toString() {
      return 1;
    }
  };
  $ERROR('#7.1: 1 << {valueOf: function() {throw "error"}, toString: function() {return 1}} throw "error". Actual: ' + (1 << {
    valueOf: function valueOf() {
      throw "error";
    },
    toString: function toString() {
      return 1;
    }
  }));
} catch (e) {
  if (e !== "error") {
    $ERROR('#7.2: 1 << {valueOf: function() {throw "error"}, toString: function() {return 1}} throw "error". Actual: ' + e);
  }
} //CHECK#8


try {
  1 << {
    valueOf: function valueOf() {
      return {};
    },
    toString: function toString() {
      return {};
    }
  };
  $ERROR('#8.1: 1 << {valueOf: function() {return {}}, toString: function() {return {}}} throw TypeError. Actual: ' + (1 << {
    valueOf: function valueOf() {
      return {};
    },
    toString: function toString() {
      return {};
    }
  }));
} catch (e) {
  if (e instanceof TypeError !== true) {
    $ERROR('#8.2: 1 << {valueOf: function() {return {}}, toString: function() {return {}}} throw TypeError. Actual: ' + e);
  }
}