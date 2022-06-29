// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-names-and-keywords
description: Test grandfathered characters of ID_Continue.
info: |
  Grandfathered characters (Other_ID_Start + Other_ID_Continue)
---*/
// Other_ID_Start (Unicode 4.0)
var a℘;
var a℮;
var a゛;
var a゜; // Other_ID_Start (Unicode 9.0)

var aᢅ;
var aᢆ; // Other_ID_Continue (Unicode 4.1)

var a፩;
var a፪;
var a፫;
var a፬;
var a፭;
var a፮;
var a፯;
var a፰;
var a፱; // Other_ID_Continue (Unicode 5.1)

var a·;
var a·; // Other_ID_Continue (Unicode 6.0)

var a᧚;