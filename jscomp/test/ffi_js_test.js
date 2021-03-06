'use strict';

var Block = require("../../lib/js/block");
var Mt    = require("./mt");

var keys = ( function (x){return Object.keys(x)});


  function $$high_order(x){
   return function(y,z){
      return x + y + z 
   }
  }

;

var suites = [/* [] */0];

var test_id = [0];

function eq(loc, param) {
  var y = param[1];
  var x = param[0];
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* :: */[
    /* tuple */[
      loc + (" id " + test_id[0]),
      function () {
        return /* Eq */Block.__(0, [
                  x,
                  y
                ]);
      }
    ],
    suites[0]
  ];
  return /* () */0;
}

var int_config = {
  hi: 3,
  low: 32
};

var string_config = {
  hi: 3,
  low: "32"
};

eq('File "ffi_js_test.ml", line 33, characters 5-12', /* tuple */[
      6,
      $$high_order(1)(2, 3)
    ]);

var same_type_000 = /* :: */[
  int_config,
  /* :: */[
    {
      hi: 3,
      low: 32
    },
    /* [] */0
  ]
];

var same_type_001 = /* :: */[
  string_config,
  /* :: */[
    {
      hi: 3,
      low: "32"
    },
    /* [] */0
  ]
];

var same_type = /* tuple */[
  same_type_000,
  same_type_001
];

var v_obj = {
  hi: function () {
    console.log("hei");
    return /* () */0;
  }
};

eq('File "ffi_js_test.ml", line 44, characters 5-12', /* tuple */[
      Object.keys(int_config).length,
      2
    ]);

eq('File "ffi_js_test.ml", line 45, characters 5-12', /* tuple */[
      Object.keys(string_config).length,
      2
    ]);

eq('File "ffi_js_test.ml", line 46, characters 5-12', /* tuple */[
      Object.keys(v_obj).indexOf("hi_x"),
      -1
    ]);

eq('File "ffi_js_test.ml", line 47, characters 5-12', /* tuple */[
      Object.keys(v_obj).indexOf("hi"),
      0
    ]);

var u = [3];

var side_effect_config = (u[0] = u[0] + 1 | 0, {
    hi: 3,
    low: 32
  });

eq('File "ffi_js_test.ml", line 54, characters 5-12', /* tuple */[
      u[0],
      4
    ]);

function vv(z) {
  return z.hh();
}

function v(z) {
  return z.ff();
}

function vvv(z) {
  return z.ff_pipe();
}

function vvvv(z) {
  return z.ff_pipe2();
}

Mt.from_pair_suites("ffi_js_test.ml", suites[0]);

exports.keys               = keys;
exports.suites             = suites;
exports.test_id            = test_id;
exports.eq                 = eq;
exports.int_config         = int_config;
exports.string_config      = string_config;
exports.same_type          = same_type;
exports.v_obj              = v_obj;
exports.u                  = u;
exports.side_effect_config = side_effect_config;
exports.vv                 = vv;
exports.v                  = v;
exports.vvv                = vvv;
exports.vvvv               = vvvv;
/* keys Not a pure module */
