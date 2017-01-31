'use strict';var $JSCompiler_prototypeAlias$$, $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$57$$, $property$jscomp$4$$, $descriptor$jscomp$1$$) {
  if ($descriptor$jscomp$1$$.get || $descriptor$jscomp$1$$.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  $target$jscomp$57$$ != Array.prototype && $target$jscomp$57$$ != Object.prototype && ($target$jscomp$57$$[$property$jscomp$4$$] = $descriptor$jscomp$1$$.value);
}, $$jscomp$global$$ = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, $$jscomp$initSymbol$$ = function $$$jscomp$initSymbol$$$() {
  $$jscomp$initSymbol$$ = function $$$jscomp$initSymbol$$$() {
  };
  $$jscomp$global$$.Symbol || ($$jscomp$global$$.Symbol = $$jscomp$Symbol$$);
}, $$jscomp$symbolCounter_$$ = 0, $$jscomp$Symbol$$ = function $$$jscomp$Symbol$$$($opt_description$jscomp$1$$) {
  return "jscomp_symbol_" + ($opt_description$jscomp$1$$ || "") + $$jscomp$symbolCounter_$$++;
}, $$jscomp$initSymbolIterator$$ = function $$$jscomp$initSymbolIterator$$$() {
  $$jscomp$initSymbol$$();
  var $symbolIterator$$ = $$jscomp$global$$.Symbol.iterator;
  $symbolIterator$$ || ($symbolIterator$$ = $$jscomp$global$$.Symbol.iterator = $$jscomp$global$$.Symbol("iterator"));
  "function" != typeof Array.prototype[$symbolIterator$$] && $$jscomp$defineProperty$$(Array.prototype, $symbolIterator$$, {configurable:!0, writable:!0, value:function() {
    return $$jscomp$arrayIterator$$(this);
  }});
  $$jscomp$initSymbolIterator$$ = function $$$jscomp$initSymbolIterator$$$() {
  };
}, $$jscomp$arrayIterator$$ = function $$$jscomp$arrayIterator$$$($array$jscomp$4$$) {
  var $index$jscomp$46$$ = 0;
  return $$jscomp$iteratorPrototype$$(function() {
    return $index$jscomp$46$$ < $array$jscomp$4$$.length ? {done:!1, value:$array$jscomp$4$$[$index$jscomp$46$$++]} : {done:!0};
  });
}, $$jscomp$iteratorPrototype$$ = function $$$jscomp$iteratorPrototype$$$($iterator$jscomp$6_next$$) {
  $$jscomp$initSymbolIterator$$();
  $iterator$jscomp$6_next$$ = {next:$iterator$jscomp$6_next$$};
  $iterator$jscomp$6_next$$[$$jscomp$global$$.Symbol.iterator] = function $$iterator$jscomp$6_next$$$$$jscomp$global$$$Symbol$iterator$() {
    return this;
  };
  return $iterator$jscomp$6_next$$;
}, $$jscomp$makeIterator$$ = function $$$jscomp$makeIterator$$$($iterable$jscomp$2$$) {
  $$jscomp$initSymbolIterator$$();
  var $iteratorFunction$$ = $iterable$jscomp$2$$[Symbol.iterator];
  return $iteratorFunction$$ ? $iteratorFunction$$.call($iterable$jscomp$2$$) : $$jscomp$arrayIterator$$($iterable$jscomp$2$$);
}, $$jscomp$checkStringArgs$$ = function $$$jscomp$checkStringArgs$$$($thisArg$jscomp$1$$, $arg$jscomp$6$$, $func$jscomp$3$$) {
  if (null == $thisArg$jscomp$1$$) {
    throw new TypeError("The 'this' value for String.prototype." + $func$jscomp$3$$ + " must not be null or undefined");
  }
  if ($arg$jscomp$6$$ instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + $func$jscomp$3$$ + " must not be a regular expression");
  }
  return $thisArg$jscomp$1$$ + "";
}, $$jscomp$polyfill$$ = function $$$jscomp$polyfill$$$($property$jscomp$5_split_target$jscomp$58$$, $impl_polyfill$$) {
  if ($impl_polyfill$$) {
    var $obj$jscomp$25$$ = $$jscomp$global$$;
    $property$jscomp$5_split_target$jscomp$58$$ = $property$jscomp$5_split_target$jscomp$58$$.split(".");
    for (var $i$jscomp$3_orig$$ = 0;$i$jscomp$3_orig$$ < $property$jscomp$5_split_target$jscomp$58$$.length - 1;$i$jscomp$3_orig$$++) {
      var $key$jscomp$24$$ = $property$jscomp$5_split_target$jscomp$58$$[$i$jscomp$3_orig$$];
      $key$jscomp$24$$ in $obj$jscomp$25$$ || ($obj$jscomp$25$$[$key$jscomp$24$$] = {});
      $obj$jscomp$25$$ = $obj$jscomp$25$$[$key$jscomp$24$$];
    }
    $property$jscomp$5_split_target$jscomp$58$$ = $property$jscomp$5_split_target$jscomp$58$$[$property$jscomp$5_split_target$jscomp$58$$.length - 1];
    $i$jscomp$3_orig$$ = $obj$jscomp$25$$[$property$jscomp$5_split_target$jscomp$58$$];
    $impl_polyfill$$ = $impl_polyfill$$($i$jscomp$3_orig$$);
    $impl_polyfill$$ != $i$jscomp$3_orig$$ && null != $impl_polyfill$$ && $$jscomp$defineProperty$$($obj$jscomp$25$$, $property$jscomp$5_split_target$jscomp$58$$, {configurable:!0, writable:!0, value:$impl_polyfill$$});
  }
};
$$jscomp$polyfill$$("String.prototype.endsWith", function($orig$jscomp$4$$) {
  return $orig$jscomp$4$$ ? $orig$jscomp$4$$ : function($orig$jscomp$4$$, $i$jscomp$5_opt_position$jscomp$3$$) {
    var $searchString$jscomp$3$$ = $$jscomp$checkStringArgs$$(this, $orig$jscomp$4$$, "endsWith");
    $orig$jscomp$4$$ += "";
    void 0 === $i$jscomp$5_opt_position$jscomp$3$$ && ($i$jscomp$5_opt_position$jscomp$3$$ = $searchString$jscomp$3$$.length);
    $i$jscomp$5_opt_position$jscomp$3$$ = Math.max(0, Math.min($i$jscomp$5_opt_position$jscomp$3$$ | 0, $searchString$jscomp$3$$.length));
    for (var $j$$ = $orig$jscomp$4$$.length;0 < $j$$ && 0 < $i$jscomp$5_opt_position$jscomp$3$$;) {
      if ($searchString$jscomp$3$$[--$i$jscomp$5_opt_position$jscomp$3$$] != $orig$jscomp$4$$[--$j$$]) {
        return !1;
      }
    }
    return 0 >= $j$$;
  };
});
$$jscomp$polyfill$$("String.prototype.startsWith", function($orig$jscomp$5$$) {
  return $orig$jscomp$5$$ ? $orig$jscomp$5$$ : function($orig$jscomp$5$$, $i$jscomp$6_opt_position$jscomp$4$$) {
    var $searchString$jscomp$4$$ = $$jscomp$checkStringArgs$$(this, $orig$jscomp$5$$, "startsWith");
    $orig$jscomp$5$$ += "";
    var $strLen$$ = $searchString$jscomp$4$$.length, $searchLen$$ = $orig$jscomp$5$$.length;
    $i$jscomp$6_opt_position$jscomp$4$$ = Math.max(0, Math.min($i$jscomp$6_opt_position$jscomp$4$$ | 0, $searchString$jscomp$4$$.length));
    for (var $j$jscomp$1$$ = 0;$j$jscomp$1$$ < $searchLen$$ && $i$jscomp$6_opt_position$jscomp$4$$ < $strLen$$;) {
      if ($searchString$jscomp$4$$[$i$jscomp$6_opt_position$jscomp$4$$++] != $orig$jscomp$5$$[$j$jscomp$1$$++]) {
        return !1;
      }
    }
    return $j$jscomp$1$$ >= $searchLen$$;
  };
});
var $goog$$ = $goog$$ || {}, $goog$global$$ = this, $goog$isDef$$ = function $$goog$isDef$$$($val$$) {
  return void 0 !== $val$$;
}, $goog$nullFunction$$ = function $$goog$nullFunction$$$() {
}, $goog$addSingletonGetter$$ = function $$goog$addSingletonGetter$$$($ctor$$) {
  $ctor$$.$instance_$ = void 0;
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ ? $ctor$$.$instance_$ : $ctor$$.$instance_$ = new $ctor$$;
  };
}, $goog$typeOf$$ = function $$goog$typeOf$$$($value$jscomp$72$$) {
  var $s$jscomp$2$$ = typeof $value$jscomp$72$$;
  if ("object" == $s$jscomp$2$$) {
    if ($value$jscomp$72$$) {
      if ($value$jscomp$72$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$72$$ instanceof Object) {
        return $s$jscomp$2$$;
      }
      var $className$jscomp$1$$ = Object.prototype.toString.call($value$jscomp$72$$);
      if ("[object Window]" == $className$jscomp$1$$) {
        return "object";
      }
      if ("[object Array]" == $className$jscomp$1$$ || "number" == typeof $value$jscomp$72$$.length && "undefined" != typeof $value$jscomp$72$$.splice && "undefined" != typeof $value$jscomp$72$$.propertyIsEnumerable && !$value$jscomp$72$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$jscomp$1$$ || "undefined" != typeof $value$jscomp$72$$.call && "undefined" != typeof $value$jscomp$72$$.propertyIsEnumerable && !$value$jscomp$72$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$2$$ && "undefined" == typeof $value$jscomp$72$$.call) {
      return "object";
    }
  }
  return $s$jscomp$2$$;
}, $goog$isArray$$ = function $$goog$isArray$$$($val$jscomp$3$$) {
  return "array" == $goog$typeOf$$($val$jscomp$3$$);
}, $goog$isArrayLike$$ = function $$goog$isArrayLike$$$($val$jscomp$4$$) {
  var $type$jscomp$103$$ = $goog$typeOf$$($val$jscomp$4$$);
  return "array" == $type$jscomp$103$$ || "object" == $type$jscomp$103$$ && "number" == typeof $val$jscomp$4$$.length;
}, $goog$isString$$ = function $$goog$isString$$$($val$jscomp$6$$) {
  return "string" == typeof $val$jscomp$6$$;
}, $goog$isNumber$$ = function $$goog$isNumber$$$($val$jscomp$8$$) {
  return "number" == typeof $val$jscomp$8$$;
}, $goog$isFunction$$ = function $$goog$isFunction$$$($val$jscomp$9$$) {
  return "function" == $goog$typeOf$$($val$jscomp$9$$);
}, $goog$isObject$$ = function $$goog$isObject$$$($val$jscomp$10$$) {
  var $type$jscomp$104$$ = typeof $val$jscomp$10$$;
  return "object" == $type$jscomp$104$$ && null != $val$jscomp$10$$ || "function" == $type$jscomp$104$$;
}, $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0, $goog$bindNative_$$ = function $$goog$bindNative_$$$($fn$jscomp$1$$, $selfObj$jscomp$1$$, $var_args$jscomp$45$$) {
  return $fn$jscomp$1$$.call.apply($fn$jscomp$1$$.bind, arguments);
}, $goog$bindJs_$$ = function $$goog$bindJs_$$$($fn$jscomp$2$$, $selfObj$jscomp$2$$, $var_args$jscomp$46$$) {
  if (!$fn$jscomp$2$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $var_args$jscomp$46$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($var_args$jscomp$46$$, $boundArgs$$);
      return $fn$jscomp$2$$.apply($selfObj$jscomp$2$$, $var_args$jscomp$46$$);
    };
  }
  return function() {
    return $fn$jscomp$2$$.apply($selfObj$jscomp$2$$, arguments);
  };
}, $goog$bind$$ = function $$goog$bind$$$($fn$jscomp$3$$, $selfObj$jscomp$3$$, $var_args$jscomp$47$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}, $goog$partial$$ = function $$goog$partial$$$($fn$jscomp$4$$, $var_args$jscomp$48$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $var_args$jscomp$48$$ = $args$$.slice();
    $var_args$jscomp$48$$.push.apply($var_args$jscomp$48$$, arguments);
    return $fn$jscomp$4$$.apply(this, $var_args$jscomp$48$$);
  };
}, $goog$now$$ = Date.now || function() {
  return +new Date;
}, $goog$exportSymbol$$ = function $$goog$exportSymbol$$$($parts$jscomp$inline_65_publicPath$$, $object$$) {
  $parts$jscomp$inline_65_publicPath$$ = $parts$jscomp$inline_65_publicPath$$.split(".");
  var $cur$jscomp$inline_66$$ = $goog$global$$;
  $parts$jscomp$inline_65_publicPath$$[0] in $cur$jscomp$inline_66$$ || !$cur$jscomp$inline_66$$.execScript || $cur$jscomp$inline_66$$.execScript("var " + $parts$jscomp$inline_65_publicPath$$[0]);
  for (var $part$jscomp$inline_67$$;$parts$jscomp$inline_65_publicPath$$.length && ($part$jscomp$inline_67$$ = $parts$jscomp$inline_65_publicPath$$.shift());) {
    !$parts$jscomp$inline_65_publicPath$$.length && $goog$isDef$$($object$$) ? $cur$jscomp$inline_66$$[$part$jscomp$inline_67$$] = $object$$ : $cur$jscomp$inline_66$$[$part$jscomp$inline_67$$] && Object.prototype.hasOwnProperty.call($cur$jscomp$inline_66$$, $part$jscomp$inline_67$$) ? $cur$jscomp$inline_66$$ = $cur$jscomp$inline_66$$[$part$jscomp$inline_67$$] : $cur$jscomp$inline_66$$ = $cur$jscomp$inline_66$$[$part$jscomp$inline_67$$] = {};
  }
}, $goog$inherits$$ = function $$goog$inherits$$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$;
  $childCtor$$.$base$ = function $$childCtor$$$$base$$($childCtor$$, $tempCtor$$, $var_args$jscomp$49$$) {
    for (var $me$$ = Array(arguments.length - 2), $methodName$$ = 2;$methodName$$ < arguments.length;$methodName$$++) {
      $me$$[$methodName$$ - 2] = arguments[$methodName$$];
    }
    return $parentCtor$$.prototype[$tempCtor$$].apply($childCtor$$, $me$$);
  };
};
var $goog$debug$Error$$ = function $$goog$debug$Error$$$($opt_msg$$) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, $goog$debug$Error$$);
  } else {
    var $stack$$ = Error().stack;
    $stack$$ && (this.stack = $stack$$);
  }
  $opt_msg$$ && (this.message = String($opt_msg$$));
};
$goog$inherits$$($goog$debug$Error$$, Error);
$goog$debug$Error$$.prototype.name = "CustomError";
var $goog$string$subs$$ = function $$goog$string$subs$$$($str$jscomp$14$$, $var_args$jscomp$51$$) {
  for (var $splitParts$$ = $str$jscomp$14$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
}, $goog$string$trim$$ = String.prototype.trim ? function($str$jscomp$28$$) {
  return $str$jscomp$28$$.trim();
} : function($str$jscomp$29$$) {
  return $str$jscomp$29$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, $goog$string$caseInsensitiveCompare$$ = function $$goog$string$caseInsensitiveCompare$$$($str1$jscomp$1_test1$$, $str2$jscomp$1_test2$$) {
  $str1$jscomp$1_test1$$ = String($str1$jscomp$1_test1$$).toLowerCase();
  $str2$jscomp$1_test2$$ = String($str2$jscomp$1_test2$$).toLowerCase();
  return $str1$jscomp$1_test1$$ < $str2$jscomp$1_test2$$ ? -1 : $str1$jscomp$1_test1$$ == $str2$jscomp$1_test2$$ ? 0 : 1;
}, $goog$string$getRandomString$$ = function $$goog$string$getRandomString$$$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36);
}, $goog$string$compareVersions$$ = function $$goog$string$compareVersions$$$($v1Subs_version1$$, $v2Subs_version2$$) {
  var $order$$ = 0;
  $v1Subs_version1$$ = $goog$string$trim$$(String($v1Subs_version1$$)).split(".");
  $v2Subs_version2$$ = $goog$string$trim$$(String($v2Subs_version2$$)).split(".");
  for (var $subCount$$ = Math.max($v1Subs_version1$$.length, $v2Subs_version2$$.length), $subIdx$$ = 0;0 == $order$$ && $subIdx$$ < $subCount$$;$subIdx$$++) {
    var $v1Comp_v1Sub$$ = $v1Subs_version1$$[$subIdx$$] || "", $v2Comp_v2Sub$$ = $v2Subs_version2$$[$subIdx$$] || "";
    do {
      $v1Comp_v1Sub$$ = /(\d*)(\D*)(.*)/.exec($v1Comp_v1Sub$$) || ["", "", "", ""];
      $v2Comp_v2Sub$$ = /(\d*)(\D*)(.*)/.exec($v2Comp_v2Sub$$) || ["", "", "", ""];
      if (0 == $v1Comp_v1Sub$$[0].length && 0 == $v2Comp_v2Sub$$[0].length) {
        break;
      }
      $order$$ = $goog$string$compareElements_$$(0 == $v1Comp_v1Sub$$[1].length ? 0 : parseInt($v1Comp_v1Sub$$[1], 10), 0 == $v2Comp_v2Sub$$[1].length ? 0 : parseInt($v2Comp_v2Sub$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp_v1Sub$$[2].length, 0 == $v2Comp_v2Sub$$[2].length) || $goog$string$compareElements_$$($v1Comp_v1Sub$$[2], $v2Comp_v2Sub$$[2]);
      $v1Comp_v1Sub$$ = $v1Comp_v1Sub$$[3];
      $v2Comp_v2Sub$$ = $v2Comp_v2Sub$$[3];
    } while (0 == $order$$);
  }
  return $order$$;
}, $goog$string$compareElements_$$ = function $$goog$string$compareElements_$$$($left$jscomp$4$$, $right$jscomp$3$$) {
  return $left$jscomp$4$$ < $right$jscomp$3$$ ? -1 : $left$jscomp$4$$ > $right$jscomp$3$$ ? 1 : 0;
};
var $goog$asserts$AssertionError$$ = function $$goog$asserts$AssertionError$$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
};
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
$goog$asserts$AssertionError$$.prototype.name = "AssertionError";
var $goog$asserts$fail$$ = function $$goog$asserts$fail$$$($opt_message$jscomp$9$$, $var_args$jscomp$54$$) {
  throw new $goog$asserts$AssertionError$$("Failure" + ($opt_message$jscomp$9$$ ? ": " + $opt_message$jscomp$9$$ : ""), Array.prototype.slice.call(arguments, 1));
}, $goog$asserts$assertBoolean$$ = function $$goog$asserts$assertBoolean$$$($value$jscomp$80$$, $opt_message$jscomp$15$$, $var_args$jscomp$60$$) {
  if ("boolean" != typeof $value$jscomp$80$$) {
    var $args$jscomp$inline_74_defaultArgs$jscomp$inline_69$$ = [$goog$typeOf$$($value$jscomp$80$$), $value$jscomp$80$$], $message$jscomp$inline_73$$ = "Assertion failed";
    $opt_message$jscomp$15$$ ? ($message$jscomp$inline_73$$ += ": " + $opt_message$jscomp$15$$, $args$jscomp$inline_74_defaultArgs$jscomp$inline_69$$ = Array.prototype.slice.call(arguments, 2)) : $message$jscomp$inline_73$$ += ": Expected boolean but got %s: %s.";
    throw new $goog$asserts$AssertionError$$("" + $message$jscomp$inline_73$$, $args$jscomp$inline_74_defaultArgs$jscomp$inline_69$$ || []);
  }
};
var $goog$array$indexOf$$ = Array.prototype.indexOf ? function($arr$jscomp$8$$, $obj$jscomp$32$$, $opt_fromIndex$jscomp$10$$) {
  return Array.prototype.indexOf.call($arr$jscomp$8$$, $obj$jscomp$32$$, $opt_fromIndex$jscomp$10$$);
} : function($arr$jscomp$9$$, $obj$jscomp$33$$, $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$) {
  $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$ = null == $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$ ? 0 : 0 > $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$ ? Math.max(0, $arr$jscomp$9$$.length + $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$) : $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$;
  if ($goog$isString$$($arr$jscomp$9$$)) {
    return $goog$isString$$($obj$jscomp$33$$) && 1 == $obj$jscomp$33$$.length ? $arr$jscomp$9$$.indexOf($obj$jscomp$33$$, $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$) : -1;
  }
  for (;$fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$ < $arr$jscomp$9$$.length;$fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$++) {
    if ($fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$ in $arr$jscomp$9$$ && $arr$jscomp$9$$[$fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$] === $obj$jscomp$33$$) {
      return $fromIndex_i$jscomp$23_opt_fromIndex$jscomp$11$$;
    }
  }
  return -1;
}, $goog$array$lastIndexOf$$ = Array.prototype.lastIndexOf ? function($arr$jscomp$10$$, $obj$jscomp$34$$, $opt_fromIndex$jscomp$12$$) {
  return Array.prototype.lastIndexOf.call($arr$jscomp$10$$, $obj$jscomp$34$$, null == $opt_fromIndex$jscomp$12$$ ? $arr$jscomp$10$$.length - 1 : $opt_fromIndex$jscomp$12$$);
} : function($arr$jscomp$11$$, $obj$jscomp$35$$, $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$) {
  $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$ = null == $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$ ? $arr$jscomp$11$$.length - 1 : $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$;
  0 > $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$ && ($fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$ = Math.max(0, $arr$jscomp$11$$.length + $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$));
  if ($goog$isString$$($arr$jscomp$11$$)) {
    return $goog$isString$$($obj$jscomp$35$$) && 1 == $obj$jscomp$35$$.length ? $arr$jscomp$11$$.lastIndexOf($obj$jscomp$35$$, $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$) : -1;
  }
  for (;0 <= $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$;$fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$--) {
    if ($fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$ in $arr$jscomp$11$$ && $arr$jscomp$11$$[$fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$] === $obj$jscomp$35$$) {
      return $fromIndex$jscomp$2_i$jscomp$24_opt_fromIndex$jscomp$13$$;
    }
  }
  return -1;
}, $goog$array$forEach$$ = Array.prototype.forEach ? function($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$2$$) {
  Array.prototype.forEach.call($arr$jscomp$12$$, $f$jscomp$1$$, $opt_obj$jscomp$2$$);
} : function($arr$jscomp$13$$, $f$jscomp$2$$, $opt_obj$jscomp$3$$) {
  for (var $l$jscomp$2$$ = $arr$jscomp$13$$.length, $arr2$$ = $goog$isString$$($arr$jscomp$13$$) ? $arr$jscomp$13$$.split("") : $arr$jscomp$13$$, $i$jscomp$25$$ = 0;$i$jscomp$25$$ < $l$jscomp$2$$;$i$jscomp$25$$++) {
    $i$jscomp$25$$ in $arr2$$ && $f$jscomp$2$$.call($opt_obj$jscomp$3$$, $arr2$$[$i$jscomp$25$$], $i$jscomp$25$$, $arr$jscomp$13$$);
  }
}, $goog$array$map$$ = Array.prototype.map ? function($arr$jscomp$17$$, $f$jscomp$6$$, $opt_obj$jscomp$7$$) {
  return Array.prototype.map.call($arr$jscomp$17$$, $f$jscomp$6$$, $opt_obj$jscomp$7$$);
} : function($arr$jscomp$18$$, $f$jscomp$7$$, $opt_obj$jscomp$8$$) {
  for (var $l$jscomp$5$$ = $arr$jscomp$18$$.length, $res$jscomp$1$$ = Array($l$jscomp$5$$), $arr2$jscomp$3$$ = $goog$isString$$($arr$jscomp$18$$) ? $arr$jscomp$18$$.split("") : $arr$jscomp$18$$, $i$jscomp$28$$ = 0;$i$jscomp$28$$ < $l$jscomp$5$$;$i$jscomp$28$$++) {
    $i$jscomp$28$$ in $arr2$jscomp$3$$ && ($res$jscomp$1$$[$i$jscomp$28$$] = $f$jscomp$7$$.call($opt_obj$jscomp$8$$, $arr2$jscomp$3$$[$i$jscomp$28$$], $i$jscomp$28$$, $arr$jscomp$18$$));
  }
  return $res$jscomp$1$$;
}, $goog$array$find$$ = function $$goog$array$find$$$($arr$jscomp$29$$, $f$jscomp$17_i$jscomp$31$$) {
  a: {
    for (var $l$jscomp$inline_80$$ = $arr$jscomp$29$$.length, $arr2$jscomp$inline_81$$ = $goog$isString$$($arr$jscomp$29$$) ? $arr$jscomp$29$$.split("") : $arr$jscomp$29$$, $i$jscomp$inline_82$$ = 0;$i$jscomp$inline_82$$ < $l$jscomp$inline_80$$;$i$jscomp$inline_82$$++) {
      if ($i$jscomp$inline_82$$ in $arr2$jscomp$inline_81$$ && $f$jscomp$17_i$jscomp$31$$.call(void 0, $arr2$jscomp$inline_81$$[$i$jscomp$inline_82$$], $i$jscomp$inline_82$$, $arr$jscomp$29$$)) {
        $f$jscomp$17_i$jscomp$31$$ = $i$jscomp$inline_82$$;
        break a;
      }
    }
    $f$jscomp$17_i$jscomp$31$$ = -1;
  }
  return 0 > $f$jscomp$17_i$jscomp$31$$ ? null : $goog$isString$$($arr$jscomp$29$$) ? $arr$jscomp$29$$.charAt($f$jscomp$17_i$jscomp$31$$) : $arr$jscomp$29$$[$f$jscomp$17_i$jscomp$31$$];
}, $goog$array$clear$$ = function $$goog$array$clear$$$($arr$jscomp$35$$) {
  if (!$goog$isArray$$($arr$jscomp$35$$)) {
    for (var $i$jscomp$35$$ = $arr$jscomp$35$$.length - 1;0 <= $i$jscomp$35$$;$i$jscomp$35$$--) {
      delete $arr$jscomp$35$$[$i$jscomp$35$$];
    }
  }
  $arr$jscomp$35$$.length = 0;
}, $goog$array$remove$$ = function $$goog$array$remove$$$($arr$jscomp$40$$, $i$jscomp$37_obj$jscomp$40$$) {
  $i$jscomp$37_obj$jscomp$40$$ = $goog$array$indexOf$$($arr$jscomp$40$$, $i$jscomp$37_obj$jscomp$40$$);
  var $rv$jscomp$1$$;
  ($rv$jscomp$1$$ = 0 <= $i$jscomp$37_obj$jscomp$40$$) && $goog$array$removeAt$$($arr$jscomp$40$$, $i$jscomp$37_obj$jscomp$40$$);
  return $rv$jscomp$1$$;
}, $goog$array$removeAt$$ = function $$goog$array$removeAt$$$($arr$jscomp$42$$, $i$jscomp$39$$) {
  Array.prototype.splice.call($arr$jscomp$42$$, $i$jscomp$39$$, 1);
}, $goog$array$concat$$ = function $$goog$array$concat$$$($var_args$jscomp$63$$) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
}, $goog$array$join$$ = function $$goog$array$join$$$($var_args$jscomp$64$$) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
}, $goog$array$toArray$$ = function $$goog$array$toArray$$$($object$jscomp$2$$) {
  var $length$jscomp$19$$ = $object$jscomp$2$$.length;
  if (0 < $length$jscomp$19$$) {
    for (var $rv$jscomp$2$$ = Array($length$jscomp$19$$), $i$jscomp$41$$ = 0;$i$jscomp$41$$ < $length$jscomp$19$$;$i$jscomp$41$$++) {
      $rv$jscomp$2$$[$i$jscomp$41$$] = $object$jscomp$2$$[$i$jscomp$41$$];
    }
    return $rv$jscomp$2$$;
  }
  return [];
}, $goog$array$extend$$ = function $$goog$array$extend$$$($arr1$$, $var_args$jscomp$65$$) {
  for (var $i$jscomp$42$$ = 1;$i$jscomp$42$$ < arguments.length;$i$jscomp$42$$++) {
    var $arr2$jscomp$8$$ = arguments[$i$jscomp$42$$];
    if ($goog$isArrayLike$$($arr2$jscomp$8$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$jscomp$8$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$jscomp$4$$ = 0;$j$jscomp$4$$ < $len2$$;$j$jscomp$4$$++) {
        $arr1$$[$len1$$ + $j$jscomp$4$$] = $arr2$jscomp$8$$[$j$jscomp$4$$];
      }
    } else {
      $arr1$$.push($arr2$jscomp$8$$);
    }
  }
}, $goog$array$splice$$ = function $$goog$array$splice$$$($arr$jscomp$45$$, $index$jscomp$53$$, $howMany$$, $var_args$jscomp$66$$) {
  Array.prototype.splice.apply($arr$jscomp$45$$, $goog$array$slice$$(arguments, 1));
}, $goog$array$slice$$ = function $$goog$array$slice$$$($arr$jscomp$46$$, $start$jscomp$9$$, $opt_end$jscomp$10$$) {
  return 2 >= arguments.length ? Array.prototype.slice.call($arr$jscomp$46$$, $start$jscomp$9$$) : Array.prototype.slice.call($arr$jscomp$46$$, $start$jscomp$9$$, $opt_end$jscomp$10$$);
}, $goog$array$defaultCompare$$ = function $$goog$array$defaultCompare$$$($a$jscomp$5$$, $b$jscomp$4$$) {
  return $a$jscomp$5$$ > $b$jscomp$4$$ ? 1 : $a$jscomp$5$$ < $b$jscomp$4$$ ? -1 : 0;
};
var $goog$object$forEach$$ = function $$goog$object$forEach$$$($obj$jscomp$43$$, $f$jscomp$24$$, $opt_obj$jscomp$28$$) {
  for (var $key$jscomp$32$$ in $obj$jscomp$43$$) {
    $f$jscomp$24$$.call($opt_obj$jscomp$28$$, $obj$jscomp$43$$[$key$jscomp$32$$], $key$jscomp$32$$, $obj$jscomp$43$$);
  }
}, $goog$object$some$$ = function $$goog$object$some$$$($obj$jscomp$46$$, $f$jscomp$27$$) {
  for (var $key$jscomp$35$$ in $obj$jscomp$46$$) {
    if ($f$jscomp$27$$.call(void 0, $obj$jscomp$46$$[$key$jscomp$35$$], $key$jscomp$35$$, $obj$jscomp$46$$)) {
      return !0;
    }
  }
  return !1;
}, $goog$object$getValues$$ = function $$goog$object$getValues$$$($obj$jscomp$52$$) {
  var $res$jscomp$4$$ = [], $i$jscomp$53$$ = 0, $key$jscomp$40$$;
  for ($key$jscomp$40$$ in $obj$jscomp$52$$) {
    $res$jscomp$4$$[$i$jscomp$53$$++] = $obj$jscomp$52$$[$key$jscomp$40$$];
  }
  return $res$jscomp$4$$;
}, $goog$object$getKeys$$ = function $$goog$object$getKeys$$$($obj$jscomp$53$$) {
  var $res$jscomp$5$$ = [], $i$jscomp$54$$ = 0, $key$jscomp$41$$;
  for ($key$jscomp$41$$ in $obj$jscomp$53$$) {
    $res$jscomp$5$$[$i$jscomp$54$$++] = $key$jscomp$41$$;
  }
  return $res$jscomp$5$$;
}, $goog$object$setIfUndefined$$ = function $$goog$object$setIfUndefined$$$($obj$jscomp$65$$, $key$jscomp$51$$, $value$jscomp$90$$) {
  $key$jscomp$51$$ in $obj$jscomp$65$$ || ($obj$jscomp$65$$[$key$jscomp$51$$] = $value$jscomp$90$$);
}, $goog$object$clone$$ = function $$goog$object$clone$$$($obj$jscomp$67$$) {
  var $res$jscomp$6$$ = {}, $key$jscomp$53$$;
  for ($key$jscomp$53$$ in $obj$jscomp$67$$) {
    $res$jscomp$6$$[$key$jscomp$53$$] = $obj$jscomp$67$$[$key$jscomp$53$$];
  }
  return $res$jscomp$6$$;
}, $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), $goog$object$extend$$ = function $$goog$object$extend$$$($target$jscomp$62$$, $var_args$jscomp$70$$) {
  for (var $key$jscomp$56$$, $source$jscomp$13$$, $i$jscomp$57$$ = 1;$i$jscomp$57$$ < arguments.length;$i$jscomp$57$$++) {
    $source$jscomp$13$$ = arguments[$i$jscomp$57$$];
    for ($key$jscomp$56$$ in $source$jscomp$13$$) {
      $target$jscomp$62$$[$key$jscomp$56$$] = $source$jscomp$13$$[$key$jscomp$56$$];
    }
    for (var $j$jscomp$7$$ = 0;$j$jscomp$7$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$jscomp$7$$++) {
      $key$jscomp$56$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$jscomp$7$$], Object.prototype.hasOwnProperty.call($source$jscomp$13$$, $key$jscomp$56$$) && ($target$jscomp$62$$[$key$jscomp$56$$] = $source$jscomp$13$$[$key$jscomp$56$$]);
    }
  }
};
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$jscomp$inline_84$$ = $goog$global$$.navigator;
  if ($navigator$jscomp$inline_84$$) {
    var $userAgent$jscomp$inline_85$$ = $navigator$jscomp$inline_84$$.userAgent;
    if ($userAgent$jscomp$inline_85$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$jscomp$inline_85$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
var $goog$labs$userAgent$util$matchUserAgent$$ = function $$goog$labs$userAgent$util$matchUserAgent$$$($str$jscomp$73$$) {
  return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$jscomp$73$$);
};
var $goog$labs$userAgent$browser$matchChrome_$$ = function $$goog$labs$userAgent$browser$matchChrome_$$$() {
  return ($goog$labs$userAgent$util$matchUserAgent$$("Chrome") || $goog$labs$userAgent$util$matchUserAgent$$("CriOS")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge");
};
var $goog$iter$StopIteration$$ = "StopIteration" in $goog$global$$ ? $goog$global$$.StopIteration : {message:"StopIteration", stack:""}, $goog$iter$Iterator$$ = function $$goog$iter$Iterator$$$() {
};
$goog$iter$Iterator$$.prototype.next = function $$goog$iter$Iterator$$$$next$() {
  throw $goog$iter$StopIteration$$;
};
$goog$iter$Iterator$$.prototype.$__iterator__$ = function $$goog$iter$Iterator$$$$$__iterator__$$() {
  return this;
};
var $goog$iter$toIterator$$ = function $$goog$iter$toIterator$$$($iterable$jscomp$3$$) {
  if ($iterable$jscomp$3$$ instanceof $goog$iter$Iterator$$) {
    return $iterable$jscomp$3$$;
  }
  if ("function" == typeof $iterable$jscomp$3$$.$__iterator__$) {
    return $iterable$jscomp$3$$.$__iterator__$(!1);
  }
  if ($goog$isArrayLike$$($iterable$jscomp$3$$)) {
    var $i$jscomp$71$$ = 0, $newIter$$ = new $goog$iter$Iterator$$;
    $newIter$$.next = function $$newIter$$$next$() {
      for (;;) {
        if ($i$jscomp$71$$ >= $iterable$jscomp$3$$.length) {
          throw $goog$iter$StopIteration$$;
        }
        if ($i$jscomp$71$$ in $iterable$jscomp$3$$) {
          return $iterable$jscomp$3$$[$i$jscomp$71$$++];
        }
        $i$jscomp$71$$++;
      }
    };
    return $newIter$$;
  }
  throw Error("Not implemented");
}, $goog$iter$forEach$$ = function $$goog$iter$forEach$$$($iterable$jscomp$4$$, $f$jscomp$39$$) {
  if ($goog$isArrayLike$$($iterable$jscomp$4$$)) {
    try {
      $goog$array$forEach$$($iterable$jscomp$4$$, $f$jscomp$39$$, void 0);
    } catch ($ex$jscomp$1$$) {
      if ($ex$jscomp$1$$ !== $goog$iter$StopIteration$$) {
        throw $ex$jscomp$1$$;
      }
    }
  } else {
    $iterable$jscomp$4$$ = $goog$iter$toIterator$$($iterable$jscomp$4$$);
    try {
      for (;;) {
        $f$jscomp$39$$.call(void 0, $iterable$jscomp$4$$.next(), void 0, $iterable$jscomp$4$$);
      }
    } catch ($ex$0$$) {
      if ($ex$0$$ !== $goog$iter$StopIteration$$) {
        throw $ex$0$$;
      }
    }
  }
}, $goog$iter$reduce$$ = function $$goog$iter$reduce$$$($iterable$jscomp$9$$, $f$jscomp$43$$) {
  var $rval$jscomp$2$$ = null;
  $goog$iter$forEach$$($iterable$jscomp$9$$, function($iterable$jscomp$9$$) {
    $rval$jscomp$2$$ = $f$jscomp$43$$.call(void 0, $rval$jscomp$2$$, $iterable$jscomp$9$$);
  });
  return $rval$jscomp$2$$;
}, $goog$iter$every$$ = function $$goog$iter$every$$$($iterable$jscomp$11$$, $f$jscomp$45$$) {
  $iterable$jscomp$11$$ = $goog$iter$toIterator$$($iterable$jscomp$11$$);
  try {
    for (;;) {
      if (!$f$jscomp$45$$.call(void 0, $iterable$jscomp$11$$.next(), void 0, $iterable$jscomp$11$$)) {
        return !1;
      }
    }
  } catch ($ex$jscomp$3$$) {
    if ($ex$jscomp$3$$ !== $goog$iter$StopIteration$$) {
      throw $ex$jscomp$3$$;
    }
  }
  return !0;
};
var $goog$structs$Map$$ = function $$goog$structs$Map$$$($opt_map$$, $var_args$jscomp$95$$) {
  this.$b$ = {};
  this.$a$ = [];
  this.$f$ = this.$c$ = 0;
  var $argLength$jscomp$2_keys$jscomp$inline_95$$ = arguments.length;
  if (1 < $argLength$jscomp$2_keys$jscomp$inline_95$$) {
    if ($argLength$jscomp$2_keys$jscomp$inline_95$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$jscomp$73_values$jscomp$inline_96$$ = 0;$i$jscomp$73_values$jscomp$inline_96$$ < $argLength$jscomp$2_keys$jscomp$inline_95$$;$i$jscomp$73_values$jscomp$inline_96$$ += 2) {
      this.set(arguments[$i$jscomp$73_values$jscomp$inline_96$$], arguments[$i$jscomp$73_values$jscomp$inline_96$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      $opt_map$$ instanceof $goog$structs$Map$$ ? ($argLength$jscomp$2_keys$jscomp$inline_95$$ = $opt_map$$.$getKeys$(), $i$jscomp$73_values$jscomp$inline_96$$ = $opt_map$$.$getValues$()) : ($argLength$jscomp$2_keys$jscomp$inline_95$$ = $goog$object$getKeys$$($opt_map$$), $i$jscomp$73_values$jscomp$inline_96$$ = $goog$object$getValues$$($opt_map$$));
      for (var $i$jscomp$inline_97$$ = 0;$i$jscomp$inline_97$$ < $argLength$jscomp$2_keys$jscomp$inline_95$$.length;$i$jscomp$inline_97$$++) {
        this.set($argLength$jscomp$2_keys$jscomp$inline_95$$[$i$jscomp$inline_97$$], $i$jscomp$73_values$jscomp$inline_96$$[$i$jscomp$inline_97$$]);
      }
    }
  }
};
$goog$structs$Map$$.prototype.$getCount$ = function $$goog$structs$Map$$$$$getCount$$() {
  return this.$c$;
};
$goog$structs$Map$$.prototype.$getValues$ = function $$goog$structs$Map$$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$jscomp$9$$ = [], $i$jscomp$74$$ = 0;$i$jscomp$74$$ < this.$a$.length;$i$jscomp$74$$++) {
    $rv$jscomp$9$$.push(this.$b$[this.$a$[$i$jscomp$74$$]]);
  }
  return $rv$jscomp$9$$;
};
$goog$structs$Map$$.prototype.$getKeys$ = function $$goog$structs$Map$$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$a$.concat();
};
var $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$ = function $$JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$$($JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$self$$, $key$jscomp$60$$) {
  return $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$self$$.$b$, $key$jscomp$60$$);
};
$goog$structs$Map$$.prototype.clear = function $$goog$structs$Map$$$$clear$() {
  this.$b$ = {};
  this.$f$ = this.$c$ = this.$a$.length = 0;
};
$goog$structs$Map$$.prototype.remove = function $$goog$structs$Map$$$$remove$($key$jscomp$63$$) {
  return $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$63$$) ? (delete this.$b$[$key$jscomp$63$$], this.$c$--, this.$f$++, this.$a$.length > 2 * this.$c$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), !0) : !1;
};
var $JSCompiler_StaticMethods_cleanupKeysArray_$$ = function $$JSCompiler_StaticMethods_cleanupKeysArray_$$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    for (var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      var $key$jscomp$64$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$b$, $key$jscomp$64$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$64$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$c$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length) {
    for (var $seen$jscomp$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length;) {
      $key$jscomp$64$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$jscomp$2$$, $key$jscomp$64$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$[$destIndex$$++] = $key$jscomp$64$$, $seen$jscomp$2$$[$key$jscomp$64$$] = 1), $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$a$.length = $destIndex$$;
  }
};
$goog$structs$Map$$.prototype.get = function $$goog$structs$Map$$$$get$($key$jscomp$65$$, $opt_val$jscomp$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$65$$) ? this.$b$[$key$jscomp$65$$] : $opt_val$jscomp$1$$;
};
$goog$structs$Map$$.prototype.set = function $$goog$structs$Map$$$$set$($key$jscomp$66$$, $value$jscomp$102$$) {
  $goog$structs$Map$hasKey_$$(this.$b$, $key$jscomp$66$$) || (this.$c$++, this.$a$.push($key$jscomp$66$$), this.$f$++);
  this.$b$[$key$jscomp$66$$] = $value$jscomp$102$$;
};
$goog$structs$Map$$.prototype.forEach = function $$goog$structs$Map$$$$forEach$($f$jscomp$49$$, $opt_obj$jscomp$43$$) {
  for (var $keys$jscomp$5$$ = this.$getKeys$(), $i$jscomp$78$$ = 0;$i$jscomp$78$$ < $keys$jscomp$5$$.length;$i$jscomp$78$$++) {
    var $key$jscomp$67$$ = $keys$jscomp$5$$[$i$jscomp$78$$], $value$jscomp$103$$ = this.get($key$jscomp$67$$);
    $f$jscomp$49$$.call($opt_obj$jscomp$43$$, $value$jscomp$103$$, $key$jscomp$67$$, this);
  }
};
$goog$structs$Map$$.prototype.$__iterator__$ = function $$goog$structs$Map$$$$$__iterator__$$($opt_keys$jscomp$1$$) {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  var $i$jscomp$81$$ = 0, $version$jscomp$9$$ = this.$f$, $selfObj$jscomp$4$$ = this, $newIter$jscomp$5$$ = new $goog$iter$Iterator$$;
  $newIter$jscomp$5$$.next = function $$newIter$jscomp$5$$$next$() {
    if ($version$jscomp$9$$ != $selfObj$jscomp$4$$.$f$) {
      throw Error("The map has changed since the iterator was created");
    }
    if ($i$jscomp$81$$ >= $selfObj$jscomp$4$$.$a$.length) {
      throw $goog$iter$StopIteration$$;
    }
    var $newIter$jscomp$5$$ = $selfObj$jscomp$4$$.$a$[$i$jscomp$81$$++];
    return $opt_keys$jscomp$1$$ ? $newIter$jscomp$5$$ : $selfObj$jscomp$4$$.$b$[$newIter$jscomp$5$$];
  };
  return $newIter$jscomp$5$$;
};
var $goog$structs$Map$hasKey_$$ = function $$goog$structs$Map$hasKey_$$$($obj$jscomp$75$$, $key$jscomp$71$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$75$$, $key$jscomp$71$$);
};
var $goog$structs$getValues$$ = function $$goog$structs$getValues$$$($col$jscomp$1$$) {
  if ($col$jscomp$1$$.$getValues$ && "function" == typeof $col$jscomp$1$$.$getValues$) {
    return $col$jscomp$1$$.$getValues$();
  }
  if ($goog$isString$$($col$jscomp$1$$)) {
    return $col$jscomp$1$$.split("");
  }
  if ($goog$isArrayLike$$($col$jscomp$1$$)) {
    for (var $rv$jscomp$10$$ = [], $l$jscomp$12$$ = $col$jscomp$1$$.length, $i$jscomp$82$$ = 0;$i$jscomp$82$$ < $l$jscomp$12$$;$i$jscomp$82$$++) {
      $rv$jscomp$10$$.push($col$jscomp$1$$[$i$jscomp$82$$]);
    }
    return $rv$jscomp$10$$;
  }
  return $goog$object$getValues$$($col$jscomp$1$$);
}, $goog$structs$forEach$$ = function $$goog$structs$forEach$$$($col$jscomp$6$$, $f$jscomp$50$$) {
  if ($col$jscomp$6$$.forEach && "function" == typeof $col$jscomp$6$$.forEach) {
    $col$jscomp$6$$.forEach($f$jscomp$50$$, void 0);
  } else {
    if ($goog$isArrayLike$$($col$jscomp$6$$) || $goog$isString$$($col$jscomp$6$$)) {
      $goog$array$forEach$$($col$jscomp$6$$, $f$jscomp$50$$, void 0);
    } else {
      var $keys$jscomp$6_rv$jscomp$inline_100$$;
      if ($col$jscomp$6$$.$getKeys$ && "function" == typeof $col$jscomp$6$$.$getKeys$) {
        $keys$jscomp$6_rv$jscomp$inline_100$$ = $col$jscomp$6$$.$getKeys$();
      } else {
        if ($col$jscomp$6$$.$getValues$ && "function" == typeof $col$jscomp$6$$.$getValues$) {
          $keys$jscomp$6_rv$jscomp$inline_100$$ = void 0;
        } else {
          if ($goog$isArrayLike$$($col$jscomp$6$$) || $goog$isString$$($col$jscomp$6$$)) {
            $keys$jscomp$6_rv$jscomp$inline_100$$ = [];
            for (var $l$jscomp$inline_101_values$jscomp$6$$ = $col$jscomp$6$$.length, $i$jscomp$inline_102_l$jscomp$14$$ = 0;$i$jscomp$inline_102_l$jscomp$14$$ < $l$jscomp$inline_101_values$jscomp$6$$;$i$jscomp$inline_102_l$jscomp$14$$++) {
              $keys$jscomp$6_rv$jscomp$inline_100$$.push($i$jscomp$inline_102_l$jscomp$14$$);
            }
          } else {
            $keys$jscomp$6_rv$jscomp$inline_100$$ = $goog$object$getKeys$$($col$jscomp$6$$);
          }
        }
      }
      for (var $l$jscomp$inline_101_values$jscomp$6$$ = $goog$structs$getValues$$($col$jscomp$6$$), $i$jscomp$inline_102_l$jscomp$14$$ = $l$jscomp$inline_101_values$jscomp$6$$.length, $i$jscomp$84$$ = 0;$i$jscomp$84$$ < $i$jscomp$inline_102_l$jscomp$14$$;$i$jscomp$84$$++) {
        $f$jscomp$50$$.call(void 0, $l$jscomp$inline_101_values$jscomp$6$$[$i$jscomp$84$$], $keys$jscomp$6_rv$jscomp$inline_100$$ && $keys$jscomp$6_rv$jscomp$inline_100$$[$i$jscomp$84$$], $col$jscomp$6$$);
      }
    }
  }
};
var $goog$structs$Set$$ = function $$goog$structs$Set$$$($opt_values$jscomp$1_values$jscomp$inline_106$$) {
  this.$a$ = new $goog$structs$Map$$;
  if ($opt_values$jscomp$1_values$jscomp$inline_106$$) {
    $opt_values$jscomp$1_values$jscomp$inline_106$$ = $goog$structs$getValues$$($opt_values$jscomp$1_values$jscomp$inline_106$$);
    for (var $l$jscomp$inline_107$$ = $opt_values$jscomp$1_values$jscomp$inline_106$$.length, $i$jscomp$inline_108$$ = 0;$i$jscomp$inline_108$$ < $l$jscomp$inline_107$$;$i$jscomp$inline_108$$++) {
      $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$(this, $opt_values$jscomp$1_values$jscomp$inline_106$$[$i$jscomp$inline_108$$]);
    }
  }
}, $goog$structs$Set$getKey_$$ = function $$goog$structs$Set$getKey_$$$($val$jscomp$34$$) {
  var $type$jscomp$108$$ = typeof $val$jscomp$34$$;
  return "object" == $type$jscomp$108$$ && $val$jscomp$34$$ || "function" == $type$jscomp$108$$ ? "o" + ($val$jscomp$34$$[$goog$UID_PROPERTY_$$] || ($val$jscomp$34$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)) : $type$jscomp$108$$.substr(0, 1) + $val$jscomp$34$$;
};
$goog$structs$Set$$.prototype.$getCount$ = function $$goog$structs$Set$$$$$getCount$$() {
  return this.$a$.$getCount$();
};
var $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$ = function $$JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$$($JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$self$$, $element$jscomp$11$$) {
  $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$self$$.$a$.set($goog$structs$Set$getKey_$$($element$jscomp$11$$), $element$jscomp$11$$);
};
$goog$structs$Set$$.prototype.removeAll = function $$goog$structs$Set$$$$removeAll$($col$jscomp$12_values$jscomp$12$$) {
  $col$jscomp$12_values$jscomp$12$$ = $goog$structs$getValues$$($col$jscomp$12_values$jscomp$12$$);
  for (var $l$jscomp$20$$ = $col$jscomp$12_values$jscomp$12$$.length, $i$jscomp$90$$ = 0;$i$jscomp$90$$ < $l$jscomp$20$$;$i$jscomp$90$$++) {
    this.remove($col$jscomp$12_values$jscomp$12$$[$i$jscomp$90$$]);
  }
};
$goog$structs$Set$$.prototype.remove = function $$goog$structs$Set$$$$remove$($element$jscomp$12$$) {
  return this.$a$.remove($goog$structs$Set$getKey_$$($element$jscomp$12$$));
};
$goog$structs$Set$$.prototype.clear = function $$goog$structs$Set$$$$clear$() {
  this.$a$.clear();
};
$goog$structs$Set$$.prototype.contains = function $$goog$structs$Set$$$$contains$($element$jscomp$13$$) {
  return $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.$a$, $goog$structs$Set$getKey_$$($element$jscomp$13$$));
};
var $JSCompiler_StaticMethods_difference$$ = function $$JSCompiler_StaticMethods_difference$$$($JSCompiler_StaticMethods_difference$self_result$jscomp$16$$, $col$jscomp$15$$) {
  $JSCompiler_StaticMethods_difference$self_result$jscomp$16$$ = new $goog$structs$Set$$($JSCompiler_StaticMethods_difference$self_result$jscomp$16$$);
  $JSCompiler_StaticMethods_difference$self_result$jscomp$16$$.removeAll($col$jscomp$15$$);
  return $JSCompiler_StaticMethods_difference$self_result$jscomp$16$$;
};
$goog$structs$Set$$.prototype.$getValues$ = function $$goog$structs$Set$$$$$getValues$$() {
  return this.$a$.$getValues$();
};
$goog$structs$Set$$.prototype.$__iterator__$ = function $$goog$structs$Set$$$$$__iterator__$$() {
  return this.$a$.$__iterator__$(!1);
};
var $goog$labs$userAgent$platform$isIphone$$ = function $$goog$labs$userAgent$platform$isIphone$$$() {
  return $goog$labs$userAgent$util$matchUserAgent$$("iPhone") && !$goog$labs$userAgent$util$matchUserAgent$$("iPod") && !$goog$labs$userAgent$util$matchUserAgent$$("iPad");
};
var $goog$reflect$sinkValue$$ = function $$goog$reflect$sinkValue$$$($x$jscomp$72$$) {
  $goog$reflect$sinkValue$$[" "]($x$jscomp$72$$);
  return $x$jscomp$72$$;
};
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
var $goog$reflect$cache$$ = function $$goog$reflect$cache$$$($key$jscomp$73$$, $valueFn$$) {
  var $cacheObj$$ = $goog$userAgent$isVersionOrHigherCache_$$;
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $key$jscomp$73$$) ? $cacheObj$$[$key$jscomp$73$$] : $cacheObj$$[$key$jscomp$73$$] = $valueFn$$($key$jscomp$73$$);
};
var $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera"), $goog$userAgent$IE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE"), $goog$userAgent$EDGE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !(-1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge")) && 
!($goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE")) && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$WEBKIT$$ = -1 != $goog$labs$userAgent$util$userAgent_$$.toLowerCase().indexOf("webkit") && !$goog$labs$userAgent$util$matchUserAgent$$("Edge"), $goog$userAgent$getDocumentMode_$$ = function $$goog$userAgent$getDocumentMode_$$$() {
  var $doc$jscomp$5$$ = $goog$global$$.document;
  return $doc$jscomp$5$$ ? $doc$jscomp$5$$.documentMode : void 0;
}, $JSCompiler_inline_result$jscomp$14$$;
a: {
  var $version$jscomp$inline_110$$ = "", $arr$jscomp$inline_111$$ = function() {
    var $userAgent$jscomp$5$$ = $goog$labs$userAgent$util$userAgent_$$;
    if ($goog$userAgent$GECKO$$) {
      return /rv\:([^\);]+)(\)|;)/.exec($userAgent$jscomp$5$$);
    }
    if ($goog$userAgent$EDGE$$) {
      return /Edge\/([\d\.]+)/.exec($userAgent$jscomp$5$$);
    }
    if ($goog$userAgent$IE$$) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$jscomp$5$$);
    }
    if ($goog$userAgent$WEBKIT$$) {
      return /WebKit\/(\S+)/.exec($userAgent$jscomp$5$$);
    }
    if ($goog$userAgent$OPERA$$) {
      return /(?:Version)[ \/]?(\S+)/.exec($userAgent$jscomp$5$$);
    }
  }();
  $arr$jscomp$inline_111$$ && ($version$jscomp$inline_110$$ = $arr$jscomp$inline_111$$ ? $arr$jscomp$inline_111$$[1] : "");
  if ($goog$userAgent$IE$$) {
    var $docMode$jscomp$inline_112$$ = $goog$userAgent$getDocumentMode_$$();
    if (null != $docMode$jscomp$inline_112$$ && $docMode$jscomp$inline_112$$ > parseFloat($version$jscomp$inline_110$$)) {
      $JSCompiler_inline_result$jscomp$14$$ = String($docMode$jscomp$inline_112$$);
      break a;
    }
  }
  $JSCompiler_inline_result$jscomp$14$$ = $version$jscomp$inline_110$$;
}
var $goog$userAgent$VERSION$$ = $JSCompiler_inline_result$jscomp$14$$, $goog$userAgent$isVersionOrHigherCache_$$ = {}, $goog$userAgent$isVersionOrHigher$$ = function $$goog$userAgent$isVersionOrHigher$$$($version$jscomp$14$$) {
  return $goog$reflect$cache$$($version$jscomp$14$$, function() {
    return 0 <= $goog$string$compareVersions$$($goog$userAgent$VERSION$$, $version$jscomp$14$$);
  });
}, $JSCompiler_inline_result$jscomp$15$$;
var $doc$jscomp$inline_114$$ = $goog$global$$.document;
$JSCompiler_inline_result$jscomp$15$$ = $doc$jscomp$inline_114$$ && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$jscomp$inline_114$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5) : void 0;
var $goog$debug$LogRecord$$ = function $$goog$debug$LogRecord$$$($level$jscomp$8$$, $msg$jscomp$1$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  this.reset($level$jscomp$8$$, $msg$jscomp$1$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$);
};
$goog$debug$LogRecord$$.prototype.$a$ = null;
var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
$goog$debug$LogRecord$$.prototype.reset = function $$goog$debug$LogRecord$$$$reset$($level$jscomp$9$$, $msg$jscomp$2$$, $loggerName$jscomp$1$$, $opt_time$jscomp$1$$, $opt_sequenceNumber$jscomp$1$$) {
  "number" == typeof $opt_sequenceNumber$jscomp$1$$ || $goog$debug$LogRecord$nextSequenceNumber_$$++;
  this.$time_$ = $opt_time$jscomp$1$$ || $goog$now$$();
  this.$b$ = $level$jscomp$9$$;
  this.$c$ = $msg$jscomp$2$$;
  this.$loggerName_$ = $loggerName$jscomp$1$$;
  delete this.$a$;
};
$goog$debug$LogRecord$$.prototype.$getLevel$ = function $$goog$debug$LogRecord$$$$$getLevel$$() {
  return this.$b$;
};
$goog$debug$LogRecord$$.prototype.getMessage = function $$goog$debug$LogRecord$$$$getMessage$() {
  return this.$c$;
};
var $goog$debug$Logger$$ = function $$goog$debug$Logger$$$($name$jscomp$78$$) {
  this.$g$ = $name$jscomp$78$$;
  this.$a$ = this.$f$ = this.$b$ = this.$c$ = null;
}, $goog$debug$Logger$Level$$ = function $$goog$debug$Logger$Level$$$($name$jscomp$79$$, $value$jscomp$108$$) {
  this.name = $name$jscomp$79$$;
  this.value = $value$jscomp$108$$;
};
$goog$debug$Logger$Level$$.prototype.toString = function $$goog$debug$Logger$Level$$$$toString$() {
  return this.name;
};
var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1000), $goog$debug$Logger$Level$WARNING$$ = new $goog$debug$Logger$Level$$("WARNING", 900), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700), $goog$debug$Logger$Level$FINE$$ = new $goog$debug$Logger$Level$$("FINE", 500), $JSCompiler_StaticMethods_addHandler$$ = function $$JSCompiler_StaticMethods_addHandler$$$($handler$jscomp$3$$) {
  var $JSCompiler_StaticMethods_addHandler$self$$;
  $goog$debug$LogManager$initialize$$();
  $JSCompiler_StaticMethods_addHandler$self$$ = $goog$debug$LogManager$rootLogger_$$;
  $JSCompiler_StaticMethods_addHandler$self$$.$a$ || ($JSCompiler_StaticMethods_addHandler$self$$.$a$ = []);
  $JSCompiler_StaticMethods_addHandler$self$$.$a$.push($handler$jscomp$3$$);
};
$goog$debug$Logger$$.prototype.getChildren = function $$goog$debug$Logger$$$$getChildren$() {
  this.$f$ || (this.$f$ = {});
  return this.$f$;
};
$goog$debug$Logger$$.prototype.$getLevel$ = function $$goog$debug$Logger$$$$$getLevel$$() {
  return this.$b$;
};
var $JSCompiler_StaticMethods_getEffectiveLevel$$ = function $$JSCompiler_StaticMethods_getEffectiveLevel$$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$b$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$b$;
  }
  if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$c$) {
    return $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$c$);
  }
  $goog$asserts$fail$$("Root logger has no level set.");
  return null;
};
$goog$debug$Logger$$.prototype.log = function $$goog$debug$Logger$$$$log$($level$jscomp$16_logRecord$jscomp$inline_121$$, $msg$jscomp$6$$, $opt_exception$$) {
  $level$jscomp$16_logRecord$jscomp$inline_121$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value && ($goog$isFunction$$($msg$jscomp$6$$) && ($msg$jscomp$6$$ = $msg$jscomp$6$$()), $level$jscomp$16_logRecord$jscomp$inline_121$$ = new $goog$debug$LogRecord$$($level$jscomp$16_logRecord$jscomp$inline_121$$, String($msg$jscomp$6$$), this.$g$), $opt_exception$$ && ($level$jscomp$16_logRecord$jscomp$inline_121$$.$a$ = $opt_exception$$), $JSCompiler_StaticMethods_doLogRecord_$$(this, $level$jscomp$16_logRecord$jscomp$inline_121$$));
};
$goog$debug$Logger$$.prototype.logRecord = function $$goog$debug$Logger$$$$logRecord$($logRecord$jscomp$1$$) {
  $logRecord$jscomp$1$$.$getLevel$().value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value && $JSCompiler_StaticMethods_doLogRecord_$$(this, $logRecord$jscomp$1$$);
};
var $JSCompiler_StaticMethods_doLogRecord_$$ = function $$JSCompiler_StaticMethods_doLogRecord_$$$($JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$64$$, $logRecord$jscomp$2$$) {
  var $handler$jscomp$inline_131_msg$jscomp$inline_126$$ = "log:" + $logRecord$jscomp$2$$.getMessage();
  $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($handler$jscomp$inline_131_msg$jscomp$inline_126$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($handler$jscomp$inline_131_msg$jscomp$inline_126$$));
  for ($goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($handler$jscomp$inline_131_msg$jscomp$inline_126$$);$JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$64$$;) {
    var $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_128$$ = $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$64$$, $logRecord$jscomp$inline_129$$ = $logRecord$jscomp$2$$;
    if ($JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_128$$.$a$) {
      for (var $i$jscomp$inline_130$$ = 0;$handler$jscomp$inline_131_msg$jscomp$inline_126$$ = $JSCompiler_StaticMethods_callPublish_$self$jscomp$inline_128$$.$a$[$i$jscomp$inline_130$$];$i$jscomp$inline_130$$++) {
        $handler$jscomp$inline_131_msg$jscomp$inline_126$$($logRecord$jscomp$inline_129$$);
      }
    }
    $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$64$$ = $JSCompiler_StaticMethods_doLogRecord_$self_target$jscomp$64$$.$c$;
  }
}, $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = null, $goog$debug$LogManager$initialize$$ = function $$goog$debug$LogManager$initialize$$$() {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$b$ = $goog$debug$Logger$Level$CONFIG$$);
}, $goog$debug$LogManager$getLogger$$ = function $$goog$debug$LogManager$getLogger$$$($name$jscomp$83$$) {
  $goog$debug$LogManager$initialize$$();
  var $JSCompiler_temp$jscomp$20_logger$jscomp$inline_137$$;
  if (!($JSCompiler_temp$jscomp$20_logger$jscomp$inline_137$$ = $goog$debug$LogManager$loggers_$$[$name$jscomp$83$$])) {
    $JSCompiler_temp$jscomp$20_logger$jscomp$inline_137$$ = new $goog$debug$Logger$$($name$jscomp$83$$);
    var $lastDotIndex$jscomp$inline_138_parentLogger$jscomp$inline_140$$ = $name$jscomp$83$$.lastIndexOf("."), $leafName$jscomp$inline_139$$ = $name$jscomp$83$$.substr($lastDotIndex$jscomp$inline_138_parentLogger$jscomp$inline_140$$ + 1), $lastDotIndex$jscomp$inline_138_parentLogger$jscomp$inline_140$$ = $goog$debug$LogManager$getLogger$$($name$jscomp$83$$.substr(0, $lastDotIndex$jscomp$inline_138_parentLogger$jscomp$inline_140$$));
    $lastDotIndex$jscomp$inline_138_parentLogger$jscomp$inline_140$$.getChildren()[$leafName$jscomp$inline_139$$] = $JSCompiler_temp$jscomp$20_logger$jscomp$inline_137$$;
    $JSCompiler_temp$jscomp$20_logger$jscomp$inline_137$$.$c$ = $lastDotIndex$jscomp$inline_138_parentLogger$jscomp$inline_140$$;
    $goog$debug$LogManager$loggers_$$[$name$jscomp$83$$] = $JSCompiler_temp$jscomp$20_logger$jscomp$inline_137$$;
  }
  return $JSCompiler_temp$jscomp$20_logger$jscomp$inline_137$$;
};
var $goog$debug$RelativeTimeProvider$$ = function $$goog$debug$RelativeTimeProvider$$$() {
  this.$a$ = $goog$now$$();
};
new $goog$debug$RelativeTimeProvider$$;
$goog$debug$RelativeTimeProvider$$.prototype.set = function $$goog$debug$RelativeTimeProvider$$$$set$($timeStamp$$) {
  this.$a$ = $timeStamp$$;
};
$goog$debug$RelativeTimeProvider$$.prototype.reset = function $$goog$debug$RelativeTimeProvider$$$$reset$() {
  this.set($goog$now$$());
};
$goog$debug$RelativeTimeProvider$$.prototype.get = function $$goog$debug$RelativeTimeProvider$$$$get$() {
  return this.$a$;
};
var $goog$log$log$$ = function $$goog$log$log$$$($logger$jscomp$6$$, $level$jscomp$18$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$) {
  $logger$jscomp$6$$ && $logger$jscomp$6$$.log($level$jscomp$18$$, $msg$jscomp$16$$, $opt_exception$jscomp$10$$);
}, $goog$log$fine$$ = function $$goog$log$fine$$$($logger$jscomp$10$$, $msg$jscomp$20$$) {
  $logger$jscomp$10$$ && $logger$jscomp$10$$.log($goog$debug$Logger$Level$FINE$$, $msg$jscomp$20$$, void 0);
};
var $goog$async$FreeList$$ = function $$goog$async$FreeList$$$($create$$, $reset$$, $limit$jscomp$1$$) {
  this.$g$ = $limit$jscomp$1$$;
  this.$c$ = $create$$;
  this.$f$ = $reset$$;
  this.$b$ = 0;
  this.$a$ = null;
};
$goog$async$FreeList$$.prototype.get = function $$goog$async$FreeList$$$$get$() {
  var $item$jscomp$1$$;
  0 < this.$b$ ? (this.$b$--, $item$jscomp$1$$ = this.$a$, this.$a$ = $item$jscomp$1$$.next, $item$jscomp$1$$.next = null) : $item$jscomp$1$$ = this.$c$();
  return $item$jscomp$1$$;
};
var $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$ = function $$JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$$($JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$, $item$jscomp$2$$) {
  $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$f$($item$jscomp$2$$);
  $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$b$ < $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$g$ && ($JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$b$++, $item$jscomp$2$$.next = $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$a$, $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$self$$.$a$ = $item$jscomp$2$$);
};
var $goog$async$throwException$$ = function $$goog$async$throwException$$$($exception$jscomp$3$$) {
  $goog$global$$.setTimeout(function() {
    throw $exception$jscomp$3$$;
  }, 0);
}, $goog$async$nextTick$setImmediate_$$, $goog$async$nextTick$getSetImmediateEmulator_$$ = function $$goog$async$nextTick$getSetImmediateEmulator_$$$() {
  var $Channel$$ = $goog$global$$.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && !$goog$labs$userAgent$util$matchUserAgent$$("Presto") && ($Channel$$ = function $$Channel$$$() {
    var $Channel$$ = document.createElement("IFRAME");
    $Channel$$.style.display = "none";
    $Channel$$.src = "";
    document.documentElement.appendChild($Channel$$);
    var $channel$jscomp$3$$ = $Channel$$.contentWindow, $Channel$$ = $channel$jscomp$3$$.document;
    $Channel$$.open();
    $Channel$$.write("");
    $Channel$$.close();
    var $head$$ = "callImmediate" + Math.random(), $tail$$ = "file:" == $channel$jscomp$3$$.location.protocol ? "*" : $channel$jscomp$3$$.location.protocol + "//" + $channel$jscomp$3$$.location.host, $Channel$$ = $goog$bind$$(function($Channel$$) {
      if (("*" == $tail$$ || $Channel$$.origin == $tail$$) && $Channel$$.data == $head$$) {
        this.port1.onmessage();
      }
    }, this);
    $channel$jscomp$3$$.addEventListener("message", $Channel$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $channel$jscomp$3$$.postMessage($head$$, $tail$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && !$goog$labs$userAgent$util$matchUserAgent$$("Trident") && !$goog$labs$userAgent$util$matchUserAgent$$("MSIE")) {
    var $channel$jscomp$3$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
    $channel$jscomp$3$$.port1.onmessage = function $$channel$jscomp$3$$$port1$onmessage$() {
      if ($goog$isDef$$($head$$.next)) {
        $head$$ = $head$$.next;
        var $Channel$$ = $head$$.$cb$;
        $head$$.$cb$ = null;
        $Channel$$();
      }
    };
    return function($Channel$$) {
      $tail$$.next = {$cb$:$Channel$$};
      $tail$$ = $tail$$.next;
      $channel$jscomp$3$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function($Channel$$) {
    var $channel$jscomp$3$$ = document.createElement("SCRIPT");
    $channel$jscomp$3$$.onreadystatechange = function $$channel$jscomp$3$$$onreadystatechange$() {
      $channel$jscomp$3$$.onreadystatechange = null;
      $channel$jscomp$3$$.parentNode.removeChild($channel$jscomp$3$$);
      $channel$jscomp$3$$ = null;
      $Channel$$();
      $Channel$$ = null;
    };
    document.documentElement.appendChild($channel$jscomp$3$$);
  } : function($Channel$$) {
    $goog$global$$.setTimeout($Channel$$, 0);
  };
};
var $goog$async$WorkQueue$$ = function $$goog$async$WorkQueue$$$() {
  this.$b$ = this.$a$ = null;
}, $goog$async$WorkQueue$freelist_$$ = new $goog$async$FreeList$$(function() {
  return new $goog$async$WorkItem$$;
}, function($item$jscomp$3$$) {
  $item$jscomp$3$$.reset();
}, 100);
$goog$async$WorkQueue$$.prototype.remove = function $$goog$async$WorkQueue$$$$remove$() {
  var $item$jscomp$5$$ = null;
  this.$a$ && ($item$jscomp$5$$ = this.$a$, this.$a$ = this.$a$.next, this.$a$ || (this.$b$ = null), $item$jscomp$5$$.next = null);
  return $item$jscomp$5$$;
};
var $goog$async$WorkItem$$ = function $$goog$async$WorkItem$$$() {
  this.next = this.$b$ = this.$a$ = null;
};
$goog$async$WorkItem$$.prototype.set = function $$goog$async$WorkItem$$$$set$($fn$jscomp$14$$, $scope$jscomp$1$$) {
  this.$a$ = $fn$jscomp$14$$;
  this.$b$ = $scope$jscomp$1$$;
  this.next = null;
};
$goog$async$WorkItem$$.prototype.reset = function $$goog$async$WorkItem$$$$reset$() {
  this.next = this.$b$ = this.$a$ = null;
};
var $goog$async$run$$ = function $$goog$async$run$$$($callback$jscomp$392$$, $opt_context$jscomp$6$$) {
  $goog$async$run$schedule_$$ || $goog$async$run$initializeRunner_$$();
  $goog$async$run$workQueueScheduled_$$ || ($goog$async$run$schedule_$$(), $goog$async$run$workQueueScheduled_$$ = !0);
  var $JSCompiler_StaticMethods_goog_async_WorkQueue_prototype$add$self$jscomp$inline_154$$ = $goog$async$run$workQueue_$$, $item$jscomp$inline_155$$ = $goog$async$WorkQueue$freelist_$$.get();
  $item$jscomp$inline_155$$.set($callback$jscomp$392$$, $opt_context$jscomp$6$$);
  $JSCompiler_StaticMethods_goog_async_WorkQueue_prototype$add$self$jscomp$inline_154$$.$b$ ? $JSCompiler_StaticMethods_goog_async_WorkQueue_prototype$add$self$jscomp$inline_154$$.$b$.next = $item$jscomp$inline_155$$ : $JSCompiler_StaticMethods_goog_async_WorkQueue_prototype$add$self$jscomp$inline_154$$.$a$ = $item$jscomp$inline_155$$;
  $JSCompiler_StaticMethods_goog_async_WorkQueue_prototype$add$self$jscomp$inline_154$$.$b$ = $item$jscomp$inline_155$$;
}, $goog$async$run$schedule_$$, $goog$async$run$initializeRunner_$$ = function $$goog$async$run$initializeRunner_$$$() {
  if (-1 != String($goog$global$$.Promise).indexOf("[native code]")) {
    var $promise$$ = $goog$global$$.Promise.resolve(void 0);
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      $promise$$.then($goog$async$run$processWorkQueue$$);
    };
  } else {
    $goog$async$run$schedule_$$ = function $$goog$async$run$schedule_$$$() {
      var $promise$$ = $goog$async$run$processWorkQueue$$;
      !$goog$isFunction$$($goog$global$$.setImmediate) || $goog$global$$.Window && $goog$global$$.Window.prototype && !$goog$labs$userAgent$util$matchUserAgent$$("Edge") && $goog$global$$.Window.prototype.setImmediate == $goog$global$$.setImmediate ? ($goog$async$nextTick$setImmediate_$$ || ($goog$async$nextTick$setImmediate_$$ = $goog$async$nextTick$getSetImmediateEmulator_$$()), $goog$async$nextTick$setImmediate_$$($promise$$)) : $goog$global$$.setImmediate($promise$$);
    };
  }
}, $goog$async$run$workQueueScheduled_$$ = !1, $goog$async$run$workQueue_$$ = new $goog$async$WorkQueue$$, $goog$async$run$processWorkQueue$$ = function $$goog$async$run$processWorkQueue$$$() {
  for (var $item$jscomp$7$$;$item$jscomp$7$$ = $goog$async$run$workQueue_$$.remove();) {
    try {
      $item$jscomp$7$$.$a$.call($item$jscomp$7$$.$b$);
    } catch ($e$jscomp$20$$) {
      $goog$async$throwException$$($e$jscomp$20$$);
    }
    $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$($goog$async$WorkQueue$freelist_$$, $item$jscomp$7$$);
  }
  $goog$async$run$workQueueScheduled_$$ = !1;
};
var $goog$Promise$$ = function $$goog$Promise$$$($resolver$jscomp$2$$, $opt_context$jscomp$8$$) {
  this.$a$ = 0;
  this.$i$ = void 0;
  this.$f$ = this.$b$ = this.$c$ = null;
  this.$g$ = this.$h$ = !1;
  if ($resolver$jscomp$2$$ != $goog$nullFunction$$) {
    try {
      var $self$jscomp$1$$ = this;
      $resolver$jscomp$2$$.call($opt_context$jscomp$8$$, function($resolver$jscomp$2$$) {
        $JSCompiler_StaticMethods_resolve_$$($self$jscomp$1$$, 2, $resolver$jscomp$2$$);
      }, function($resolver$jscomp$2$$) {
        if (!($resolver$jscomp$2$$ instanceof $goog$Promise$CancellationError$$)) {
          try {
            if ($resolver$jscomp$2$$ instanceof Error) {
              throw $resolver$jscomp$2$$;
            }
            throw Error("Promise rejected.");
          } catch ($e$jscomp$22$$) {
          }
        }
        $JSCompiler_StaticMethods_resolve_$$($self$jscomp$1$$, 3, $resolver$jscomp$2$$);
      });
    } catch ($e$jscomp$23$$) {
      $JSCompiler_StaticMethods_resolve_$$(this, 3, $e$jscomp$23$$);
    }
  }
}, $goog$Promise$CallbackEntry_$$ = function $$goog$Promise$CallbackEntry_$$$() {
  this.next = this.context = this.$b$ = this.$f$ = this.$a$ = null;
  this.$c$ = !1;
};
$goog$Promise$CallbackEntry_$$.prototype.reset = function $$goog$Promise$CallbackEntry_$$$$reset$() {
  this.context = this.$b$ = this.$f$ = this.$a$ = null;
  this.$c$ = !1;
};
var $goog$Promise$freelist_$$ = new $goog$async$FreeList$$(function() {
  return new $goog$Promise$CallbackEntry_$$;
}, function($item$jscomp$8$$) {
  $item$jscomp$8$$.reset();
}, 100), $goog$Promise$getCallbackEntry_$$ = function $$goog$Promise$getCallbackEntry_$$$($onFulfilled$$, $onRejected$jscomp$1$$, $context$$) {
  var $entry$jscomp$4$$ = $goog$Promise$freelist_$$.get();
  $entry$jscomp$4$$.$f$ = $onFulfilled$$;
  $entry$jscomp$4$$.$b$ = $onRejected$jscomp$1$$;
  $entry$jscomp$4$$.context = $context$$;
  return $entry$jscomp$4$$;
}, $goog$Promise$resolve$$ = function $$goog$Promise$resolve$$$($opt_value$jscomp$8$$) {
  if ($opt_value$jscomp$8$$ instanceof $goog$Promise$$) {
    return $opt_value$jscomp$8$$;
  }
  var $promise$jscomp$1$$ = new $goog$Promise$$($goog$nullFunction$$);
  $JSCompiler_StaticMethods_resolve_$$($promise$jscomp$1$$, 2, $opt_value$jscomp$8$$);
  return $promise$jscomp$1$$;
}, $goog$Promise$reject$$ = function $$goog$Promise$reject$$$($opt_reason$jscomp$1$$) {
  return new $goog$Promise$$(function($resolve$$, $reject$$) {
    $reject$$($opt_reason$jscomp$1$$);
  });
}, $goog$Promise$resolveThen_$$ = function $$goog$Promise$resolveThen_$$$($value$jscomp$111$$, $onFulfilled$jscomp$1$$, $onRejected$jscomp$2$$) {
  $goog$Promise$maybeThen_$$($value$jscomp$111$$, $onFulfilled$jscomp$1$$, $onRejected$jscomp$2$$, null) || $goog$async$run$$($goog$partial$$($onFulfilled$jscomp$1$$, $value$jscomp$111$$));
}, $goog$Promise$all$$ = function $$goog$Promise$all$$$($promises$jscomp$1$$) {
  return new $goog$Promise$$(function($resolve$jscomp$2$$, $reject$jscomp$2$$) {
    var $toFulfill$$ = $promises$jscomp$1$$.length, $values$jscomp$14$$ = [];
    if ($toFulfill$$) {
      for (var $onFulfill$$ = function $$onFulfill$$$($promises$jscomp$1$$, $reject$jscomp$2$$) {
        $toFulfill$$--;
        $values$jscomp$14$$[$promises$jscomp$1$$] = $reject$jscomp$2$$;
        0 == $toFulfill$$ && $resolve$jscomp$2$$($values$jscomp$14$$);
      }, $onReject$$ = function $$onReject$$$($promises$jscomp$1$$) {
        $reject$jscomp$2$$($promises$jscomp$1$$);
      }, $i$jscomp$104$$ = 0, $promise$jscomp$3$$;$i$jscomp$104$$ < $promises$jscomp$1$$.length;$i$jscomp$104$$++) {
        $promise$jscomp$3$$ = $promises$jscomp$1$$[$i$jscomp$104$$], $goog$Promise$resolveThen_$$($promise$jscomp$3$$, $goog$partial$$($onFulfill$$, $i$jscomp$104$$), $onReject$$);
      }
    } else {
      $resolve$jscomp$2$$($values$jscomp$14$$);
    }
  });
}, $goog$Promise$withResolver$$ = function $$goog$Promise$withResolver$$$() {
  var $resolve$jscomp$5$$, $reject$jscomp$5$$, $promise$jscomp$6$$ = new $goog$Promise$$(function($promise$jscomp$6$$, $rj$$) {
    $resolve$jscomp$5$$ = $promise$jscomp$6$$;
    $reject$jscomp$5$$ = $rj$$;
  });
  return new $goog$Promise$Resolver_$$($promise$jscomp$6$$, $resolve$jscomp$5$$, $reject$jscomp$5$$);
};
$goog$Promise$$.prototype.then = function $$goog$Promise$$$$then$($opt_onFulfilled$jscomp$3$$, $opt_onRejected$jscomp$3$$, $opt_context$jscomp$9$$) {
  return $JSCompiler_StaticMethods_addChildPromise_$$(this, $goog$isFunction$$($opt_onFulfilled$jscomp$3$$) ? $opt_onFulfilled$jscomp$3$$ : null, $goog$isFunction$$($opt_onRejected$jscomp$3$$) ? $opt_onRejected$jscomp$3$$ : null, $opt_context$jscomp$9$$);
};
$goog$Promise$$.prototype.then = $goog$Promise$$.prototype.then;
$goog$Promise$$.prototype.$goog_Thenable = !0;
var $JSCompiler_StaticMethods_thenAlways$$ = function $$JSCompiler_StaticMethods_thenAlways$$$($JSCompiler_StaticMethods_thenAlways$self$$, $entry$jscomp$6_onSettled$jscomp$1$$) {
  $entry$jscomp$6_onSettled$jscomp$1$$ = $goog$Promise$getCallbackEntry_$$($entry$jscomp$6_onSettled$jscomp$1$$, $entry$jscomp$6_onSettled$jscomp$1$$, void 0);
  $entry$jscomp$6_onSettled$jscomp$1$$.$c$ = !0;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_thenAlways$self$$, $entry$jscomp$6_onSettled$jscomp$1$$);
  return $JSCompiler_StaticMethods_thenAlways$self$$;
}, $JSCompiler_StaticMethods_thenCatch$$ = function $$JSCompiler_StaticMethods_thenCatch$$$($JSCompiler_StaticMethods_thenCatch$self$$, $onRejected$jscomp$3$$, $opt_context$jscomp$12$$) {
  return $JSCompiler_StaticMethods_addChildPromise_$$($JSCompiler_StaticMethods_thenCatch$self$$, null, $onRejected$jscomp$3$$, $opt_context$jscomp$12$$);
};
$goog$Promise$$.prototype.cancel = function $$goog$Promise$$$$cancel$($opt_message$jscomp$19$$) {
  0 == this.$a$ && $goog$async$run$$(function() {
    var $err$jscomp$9$$ = new $goog$Promise$CancellationError$$($opt_message$jscomp$19$$);
    $JSCompiler_StaticMethods_cancelInternal_$$(this, $err$jscomp$9$$);
  }, this);
};
var $JSCompiler_StaticMethods_cancelInternal_$$ = function $$JSCompiler_StaticMethods_cancelInternal_$$$($JSCompiler_StaticMethods_cancelInternal_$self$$, $err$jscomp$10$$) {
  if (0 == $JSCompiler_StaticMethods_cancelInternal_$self$$.$a$) {
    if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$c$) {
      var $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$ = $JSCompiler_StaticMethods_cancelInternal_$self$$.$c$;
      if ($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$.$b$) {
        for (var $childCount$jscomp$inline_169_previous$jscomp$inline_993$$ = 0, $childEntry$jscomp$inline_170$$ = null, $beforeChildEntry$jscomp$inline_171$$ = null, $entry$jscomp$inline_172$$ = $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$.$b$;$entry$jscomp$inline_172$$ && ($entry$jscomp$inline_172$$.$c$ || ($childCount$jscomp$inline_169_previous$jscomp$inline_993$$++, $entry$jscomp$inline_172$$.$a$ == $JSCompiler_StaticMethods_cancelInternal_$self$$ && ($childEntry$jscomp$inline_170$$ = 
        $entry$jscomp$inline_172$$), !($childEntry$jscomp$inline_170$$ && 1 < $childCount$jscomp$inline_169_previous$jscomp$inline_993$$)));$entry$jscomp$inline_172$$ = $entry$jscomp$inline_172$$.next) {
          $childEntry$jscomp$inline_170$$ || ($beforeChildEntry$jscomp$inline_171$$ = $entry$jscomp$inline_172$$);
        }
        $childEntry$jscomp$inline_170$$ && (0 == $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$.$a$ && 1 == $childCount$jscomp$inline_169_previous$jscomp$inline_993$$ ? $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$, $err$jscomp$10$$) : ($beforeChildEntry$jscomp$inline_171$$ ? ($childCount$jscomp$inline_169_previous$jscomp$inline_993$$ = $beforeChildEntry$jscomp$inline_171$$, $childCount$jscomp$inline_169_previous$jscomp$inline_993$$.next == 
        $JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$.$f$ && ($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$.$f$ = $childCount$jscomp$inline_169_previous$jscomp$inline_993$$), $childCount$jscomp$inline_169_previous$jscomp$inline_993$$.next = $childCount$jscomp$inline_169_previous$jscomp$inline_993$$.next.next) : $JSCompiler_StaticMethods_popEntry_$$($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$), $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_cancelChild_$self$jscomp$inline_166$$, 
        $childEntry$jscomp$inline_170$$, 3, $err$jscomp$10$$)));
      }
      $JSCompiler_StaticMethods_cancelInternal_$self$$.$c$ = null;
    } else {
      $JSCompiler_StaticMethods_resolve_$$($JSCompiler_StaticMethods_cancelInternal_$self$$, 3, $err$jscomp$10$$);
    }
  }
}, $JSCompiler_StaticMethods_addCallbackEntry_$$ = function $$JSCompiler_StaticMethods_addCallbackEntry_$$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$, $callbackEntry$$) {
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$b$ || 2 != $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$a$ && 3 != $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$a$ || $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$);
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$f$ ? $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$f$.next = $callbackEntry$$ : $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$b$ = $callbackEntry$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$f$ = $callbackEntry$$;
}, $JSCompiler_StaticMethods_addChildPromise_$$ = function $$JSCompiler_StaticMethods_addChildPromise_$$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $onFulfilled$jscomp$2$$, $onRejected$jscomp$4$$, $opt_context$jscomp$13$$) {
  var $callbackEntry$jscomp$1$$ = $goog$Promise$getCallbackEntry_$$(null, null, null);
  $callbackEntry$jscomp$1$$.$a$ = new $goog$Promise$$(function($JSCompiler_StaticMethods_addChildPromise_$self$$, $reject$jscomp$6$$) {
    $callbackEntry$jscomp$1$$.$f$ = $onFulfilled$jscomp$2$$ ? function($onRejected$jscomp$4$$) {
      try {
        var $callbackEntry$jscomp$1$$ = $onFulfilled$jscomp$2$$.call($opt_context$jscomp$13$$, $onRejected$jscomp$4$$);
        $JSCompiler_StaticMethods_addChildPromise_$self$$($callbackEntry$jscomp$1$$);
      } catch ($err$jscomp$12$$) {
        $reject$jscomp$6$$($err$jscomp$12$$);
      }
    } : $JSCompiler_StaticMethods_addChildPromise_$self$$;
    $callbackEntry$jscomp$1$$.$b$ = $onRejected$jscomp$4$$ ? function($onFulfilled$jscomp$2$$) {
      try {
        var $callbackEntry$jscomp$1$$ = $onRejected$jscomp$4$$.call($opt_context$jscomp$13$$, $onFulfilled$jscomp$2$$);
        !$goog$isDef$$($callbackEntry$jscomp$1$$) && $onFulfilled$jscomp$2$$ instanceof $goog$Promise$CancellationError$$ ? $reject$jscomp$6$$($onFulfilled$jscomp$2$$) : $JSCompiler_StaticMethods_addChildPromise_$self$$($callbackEntry$jscomp$1$$);
      } catch ($err$jscomp$13$$) {
        $reject$jscomp$6$$($err$jscomp$13$$);
      }
    } : $reject$jscomp$6$$;
  });
  $callbackEntry$jscomp$1$$.$a$.$c$ = $JSCompiler_StaticMethods_addChildPromise_$self$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $callbackEntry$jscomp$1$$);
  return $callbackEntry$jscomp$1$$.$a$;
};
$goog$Promise$$.prototype.$l$ = function $$goog$Promise$$$$$l$$($value$jscomp$115$$) {
  this.$a$ = 0;
  $JSCompiler_StaticMethods_resolve_$$(this, 2, $value$jscomp$115$$);
};
$goog$Promise$$.prototype.$m$ = function $$goog$Promise$$$$$m$$($reason$jscomp$9$$) {
  this.$a$ = 0;
  $JSCompiler_StaticMethods_resolve_$$(this, 3, $reason$jscomp$9$$);
};
var $JSCompiler_StaticMethods_resolve_$$ = function $$JSCompiler_StaticMethods_resolve_$$$($JSCompiler_StaticMethods_resolve_$self$$, $state$jscomp$2$$, $x$jscomp$76$$) {
  0 == $JSCompiler_StaticMethods_resolve_$self$$.$a$ && ($JSCompiler_StaticMethods_resolve_$self$$ === $x$jscomp$76$$ && ($state$jscomp$2$$ = 3, $x$jscomp$76$$ = new TypeError("Promise cannot resolve to itself")), $JSCompiler_StaticMethods_resolve_$self$$.$a$ = 1, $goog$Promise$maybeThen_$$($x$jscomp$76$$, $JSCompiler_StaticMethods_resolve_$self$$.$l$, $JSCompiler_StaticMethods_resolve_$self$$.$m$, $JSCompiler_StaticMethods_resolve_$self$$) || ($JSCompiler_StaticMethods_resolve_$self$$.$i$ = $x$jscomp$76$$, 
  $JSCompiler_StaticMethods_resolve_$self$$.$a$ = $state$jscomp$2$$, $JSCompiler_StaticMethods_resolve_$self$$.$c$ = null, $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_resolve_$self$$), 3 != $state$jscomp$2$$ || $x$jscomp$76$$ instanceof $goog$Promise$CancellationError$$ || $goog$Promise$addUnhandledRejection_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$jscomp$76$$)));
}, $goog$Promise$maybeThen_$$ = function $$goog$Promise$maybeThen_$$$($value$jscomp$116$$, $onFulfilled$jscomp$3$$, $onRejected$jscomp$5$$, $context$jscomp$1$$) {
  if ($value$jscomp$116$$ instanceof $goog$Promise$$) {
    return $JSCompiler_StaticMethods_addCallbackEntry_$$($value$jscomp$116$$, $goog$Promise$getCallbackEntry_$$($onFulfilled$jscomp$3$$ || $goog$nullFunction$$, $onRejected$jscomp$5$$ || null, $context$jscomp$1$$)), !0;
  }
  var $JSCompiler_inline_result$jscomp$21$$;
  if ($value$jscomp$116$$) {
    try {
      $JSCompiler_inline_result$jscomp$21$$ = !!$value$jscomp$116$$.$goog_Thenable;
    } catch ($e$jscomp$inline_183$$) {
      $JSCompiler_inline_result$jscomp$21$$ = !1;
    }
  } else {
    $JSCompiler_inline_result$jscomp$21$$ = !1;
  }
  if ($JSCompiler_inline_result$jscomp$21$$) {
    return $value$jscomp$116$$.then($onFulfilled$jscomp$3$$, $onRejected$jscomp$5$$, $context$jscomp$1$$), !0;
  }
  if ($goog$isObject$$($value$jscomp$116$$)) {
    try {
      var $then$$ = $value$jscomp$116$$.then;
      if ($goog$isFunction$$($then$$)) {
        return $goog$Promise$tryThen_$$($value$jscomp$116$$, $then$$, $onFulfilled$jscomp$3$$, $onRejected$jscomp$5$$, $context$jscomp$1$$), !0;
      }
    } catch ($e$jscomp$24$$) {
      return $onRejected$jscomp$5$$.call($context$jscomp$1$$, $e$jscomp$24$$), !0;
    }
  }
  return !1;
}, $goog$Promise$tryThen_$$ = function $$goog$Promise$tryThen_$$$($thenable$$, $then$jscomp$1$$, $onFulfilled$jscomp$4$$, $onRejected$jscomp$6$$, $context$jscomp$2$$) {
  var $called$jscomp$1$$ = !1, $resolve$jscomp$7$$ = function $$resolve$jscomp$7$$$($thenable$$) {
    $called$jscomp$1$$ || ($called$jscomp$1$$ = !0, $onFulfilled$jscomp$4$$.call($context$jscomp$2$$, $thenable$$));
  }, $reject$jscomp$7$$ = function $$reject$jscomp$7$$$($thenable$$) {
    $called$jscomp$1$$ || ($called$jscomp$1$$ = !0, $onRejected$jscomp$6$$.call($context$jscomp$2$$, $thenable$$));
  };
  try {
    $then$jscomp$1$$.call($thenable$$, $resolve$jscomp$7$$, $reject$jscomp$7$$);
  } catch ($e$jscomp$25$$) {
    $reject$jscomp$7$$($e$jscomp$25$$);
  }
}, $JSCompiler_StaticMethods_scheduleCallbacks_$$ = function $$JSCompiler_StaticMethods_scheduleCallbacks_$$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$) {
  $JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$h$ || ($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$h$ = !0, $goog$async$run$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$j$, $JSCompiler_StaticMethods_scheduleCallbacks_$self$$));
}, $JSCompiler_StaticMethods_popEntry_$$ = function $$JSCompiler_StaticMethods_popEntry_$$$($JSCompiler_StaticMethods_popEntry_$self$$) {
  var $entry$jscomp$9$$ = null;
  $JSCompiler_StaticMethods_popEntry_$self$$.$b$ && ($entry$jscomp$9$$ = $JSCompiler_StaticMethods_popEntry_$self$$.$b$, $JSCompiler_StaticMethods_popEntry_$self$$.$b$ = $entry$jscomp$9$$.next, $entry$jscomp$9$$.next = null);
  $JSCompiler_StaticMethods_popEntry_$self$$.$b$ || ($JSCompiler_StaticMethods_popEntry_$self$$.$f$ = null);
  return $entry$jscomp$9$$;
};
$goog$Promise$$.prototype.$j$ = function $$goog$Promise$$$$$j$$() {
  for (var $entry$jscomp$10$$;$entry$jscomp$10$$ = $JSCompiler_StaticMethods_popEntry_$$(this);) {
    $JSCompiler_StaticMethods_executeCallback_$$(this, $entry$jscomp$10$$, this.$a$, this.$i$);
  }
  this.$h$ = !1;
};
var $JSCompiler_StaticMethods_executeCallback_$$ = function $$JSCompiler_StaticMethods_executeCallback_$$$($JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_186$$, $callbackEntry$jscomp$2$$, $state$jscomp$3$$, $result$jscomp$20$$) {
  if (3 == $state$jscomp$3$$ && $callbackEntry$jscomp$2$$.$b$ && !$callbackEntry$jscomp$2$$.$c$) {
    for (;$JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_186$$ && $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_186$$.$g$;$JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_186$$ = $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_186$$.$c$) {
      $JSCompiler_StaticMethods_executeCallback_$self_p$jscomp$inline_186$$.$g$ = !1;
    }
  }
  if ($callbackEntry$jscomp$2$$.$a$) {
    $callbackEntry$jscomp$2$$.$a$.$c$ = null, $goog$Promise$invokeCallback_$$($callbackEntry$jscomp$2$$, $state$jscomp$3$$, $result$jscomp$20$$);
  } else {
    try {
      $callbackEntry$jscomp$2$$.$c$ ? $callbackEntry$jscomp$2$$.$f$.call($callbackEntry$jscomp$2$$.context) : $goog$Promise$invokeCallback_$$($callbackEntry$jscomp$2$$, $state$jscomp$3$$, $result$jscomp$20$$);
    } catch ($err$jscomp$14$$) {
      $goog$Promise$handleRejection_$$.call(null, $err$jscomp$14$$);
    }
  }
  $JSCompiler_StaticMethods_goog_async_FreeList_prototype$put$$($goog$Promise$freelist_$$, $callbackEntry$jscomp$2$$);
}, $goog$Promise$invokeCallback_$$ = function $$goog$Promise$invokeCallback_$$$($callbackEntry$jscomp$3$$, $state$jscomp$4$$, $result$jscomp$21$$) {
  2 == $state$jscomp$4$$ ? $callbackEntry$jscomp$3$$.$f$.call($callbackEntry$jscomp$3$$.context, $result$jscomp$21$$) : $callbackEntry$jscomp$3$$.$b$ && $callbackEntry$jscomp$3$$.$b$.call($callbackEntry$jscomp$3$$.context, $result$jscomp$21$$);
}, $goog$Promise$addUnhandledRejection_$$ = function $$goog$Promise$addUnhandledRejection_$$$($promise$jscomp$8$$, $reason$jscomp$11$$) {
  $promise$jscomp$8$$.$g$ = !0;
  $goog$async$run$$(function() {
    $promise$jscomp$8$$.$g$ && $goog$Promise$handleRejection_$$.call(null, $reason$jscomp$11$$);
  });
}, $goog$Promise$handleRejection_$$ = $goog$async$throwException$$, $goog$Promise$CancellationError$$ = function $$goog$Promise$CancellationError$$$($opt_message$jscomp$20$$) {
  $goog$debug$Error$$.call(this, $opt_message$jscomp$20$$);
};
$goog$inherits$$($goog$Promise$CancellationError$$, $goog$debug$Error$$);
$goog$Promise$CancellationError$$.prototype.name = "cancel";
var $goog$Promise$Resolver_$$ = function $$goog$Promise$Resolver_$$$($promise$jscomp$9$$, $resolve$jscomp$8$$, $reject$jscomp$8$$) {
  this.$a$ = $promise$jscomp$9$$;
  this.$b$ = $resolve$jscomp$8$$;
  this.$c$ = $reject$jscomp$8$$;
};
var $castApp$log$anonymizeString$$ = function $$castApp$log$anonymizeString$$$($str$jscomp$80$$) {
  return $JSCompiler_StaticMethods_anonymizeString$$($castApp$log$Manager_$$.$getInstance$(), $str$jscomp$80$$);
}, $castApp$log$fine$$ = function $$castApp$log$fine$$$($logger$jscomp$11$$, $var_args$jscomp$96$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$11$$, $goog$debug$Logger$Level$FINE$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$info$$ = function $$castApp$log$info$$$($logger$jscomp$12$$, $var_args$jscomp$97$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$12$$, $goog$debug$Logger$Level$INFO$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$warning$$ = function $$castApp$log$warning$$$($logger$jscomp$13$$, $var_args$jscomp$98$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$13$$, $goog$debug$Logger$Level$WARNING$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$error$$ = function $$castApp$log$error$$$($logger$jscomp$14$$, $var_args$jscomp$99$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$14$$, $goog$debug$Logger$Level$SEVERE$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 1)));
}, $castApp$log$infoWithCause$$ = function $$castApp$log$infoWithCause$$$($logger$jscomp$16$$, $exception$jscomp$5$$, $var_args$jscomp$101$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$16$$, $goog$debug$Logger$Level$INFO$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 2)), $exception$jscomp$5$$);
}, $castApp$log$warningWithCause$$ = function $$castApp$log$warningWithCause$$$($logger$jscomp$17$$, $exception$jscomp$6$$, $var_args$jscomp$102$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$17$$, $goog$debug$Logger$Level$WARNING$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 2)), $exception$jscomp$6$$);
}, $castApp$log$errorWithCause$$ = function $$castApp$log$errorWithCause$$$($logger$jscomp$18$$, $exception$jscomp$7$$, $var_args$jscomp$103$$) {
  $castApp$log$Manager_$$.$getInstance$().log($logger$jscomp$18$$, $goog$debug$Logger$Level$SEVERE$$, $castApp$log$joinMessageParts$$($goog$array$slice$$(arguments, 2)), $exception$jscomp$7$$);
}, $castApp$log$joinMessageParts$$ = function $$castApp$log$joinMessageParts$$$($stringSources$$) {
  return $goog$Promise$all$$($stringSources$$.map($castApp$log$getMessageString_$$)).then(function($stringSources$$) {
    return $stringSources$$.join("");
  });
}, $castApp$log$getMessageString_$$ = function $$castApp$log$getMessageString_$$$($source$jscomp$14$$) {
  var $promise$jscomp$10$$ = null, $promise$jscomp$10$$ = "string" === typeof $source$jscomp$14$$ ? $goog$Promise$resolve$$($source$jscomp$14$$) : "function" === typeof $source$jscomp$14$$ ? $castApp$log$getMessageString_$$($source$jscomp$14$$()) : $source$jscomp$14$$, $timeoutId$$ = setTimeout(function() {
    return $promise$jscomp$10$$.cancel();
  }, 5000);
  return $JSCompiler_StaticMethods_thenAlways$$($promise$jscomp$10$$, function() {
    return clearTimeout($timeoutId$$);
  });
}, $castApp$log$Logger$$ = function $$castApp$log$Logger$$$($googLogger$$) {
  this.$a$ = $googLogger$$;
}, $castApp$log$getLogger$$ = function $$castApp$log$getLogger$$$($googLogger$jscomp$1_name$jscomp$86$$) {
  return ($googLogger$jscomp$1_name$jscomp$86$$ = $goog$debug$LogManager$getLogger$$("castApp." + $googLogger$jscomp$1_name$jscomp$86$$)) ? new $castApp$log$Logger$$($googLogger$jscomp$1_name$jscomp$86$$) : null;
}, $castApp$log$Manager_$$ = function $$castApp$log$Manager_$$$() {
  this.$a$ = [];
  this.$c$ = this.$b$ = null;
}, $JSCompiler_StaticMethods_initAnonymizer$$ = function $$JSCompiler_StaticMethods_initAnonymizer$$$($JSCompiler_StaticMethods_initAnonymizer$self$$, $crypto$jscomp$1$$, $salt$jscomp$1$$) {
  $crypto$jscomp$1$$.importKey("raw", $salt$jscomp$1$$, {name:"HMAC", hash:{name:"SHA-256"}}, !1, ["sign"]).then(function($salt$jscomp$1$$) {
    $JSCompiler_StaticMethods_initAnonymizer$self$$.$b$ = $crypto$jscomp$1$$;
    $JSCompiler_StaticMethods_initAnonymizer$self$$.$c$ = $salt$jscomp$1$$;
  });
};
$castApp$log$Manager_$$.prototype.log = function $$castApp$log$Manager_$$$$log$($logger$jscomp$19$$, $level$jscomp$19$$, $logArgsPromise_msgPromise$$, $opt_exception$jscomp$15$$) {
  500 <= this.$a$.length || ($logArgsPromise_msgPromise$$ = $logArgsPromise_msgPromise$$.then(function($logArgsPromise_msgPromise$$) {
    return [$logger$jscomp$19$$.$a$, $level$jscomp$19$$, $logArgsPromise_msgPromise$$, $opt_exception$jscomp$15$$];
  }), this.$a$.push($logArgsPromise_msgPromise$$), 1 === this.$a$.length && $JSCompiler_StaticMethods_waitForNextLogArgs_$$(this));
};
var $JSCompiler_StaticMethods_waitForNextLogArgs_$$ = function $$JSCompiler_StaticMethods_waitForNextLogArgs_$$$($JSCompiler_StaticMethods_waitForNextLogArgs_$self$$) {
  0 < $JSCompiler_StaticMethods_waitForNextLogArgs_$self$$.$a$.length && $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_waitForNextLogArgs_$self$$.$a$[0].then(function($JSCompiler_StaticMethods_waitForNextLogArgs_$self$$) {
    return $goog$log$log$$.apply(null, $JSCompiler_StaticMethods_waitForNextLogArgs_$self$$);
  }), function() {
    $JSCompiler_StaticMethods_waitForNextLogArgs_$self$$.$a$.shift();
    $JSCompiler_StaticMethods_waitForNextLogArgs_$$($JSCompiler_StaticMethods_waitForNextLogArgs_$self$$);
  });
}, $JSCompiler_StaticMethods_anonymizeString$$ = function $$JSCompiler_StaticMethods_anonymizeString$$$($JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$, $str$jscomp$81$$) {
  if (!$JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$b$ || !$JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$c$) {
    return $goog$Promise$resolve$$("*****");
  }
  for (var $strLen$jscomp$1$$ = $str$jscomp$81$$.length, $utf16Array$$ = new Uint16Array($strLen$jscomp$1$$), $i$jscomp$108$$ = 0;$i$jscomp$108$$ < $strLen$jscomp$1$$;++$i$jscomp$108$$) {
    $utf16Array$$[$i$jscomp$108$$] = $str$jscomp$81$$.charCodeAt($i$jscomp$108$$);
  }
  $JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$ = $JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$b$.sign({name:"HMAC"}, $JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.$c$, $utf16Array$$.buffer).then(function($JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$) {
    var $str$jscomp$81$$ = "";
    (new Uint8Array($JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$)).slice(0, 8).forEach(function($JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$) {
      $str$jscomp$81$$ += $JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$.toString(16);
    });
    return $str$jscomp$81$$;
  });
  return $goog$Promise$resolve$$($JSCompiler_StaticMethods_anonymizeString$self_cryptoPromise$$);
};
$goog$addSingletonGetter$$($castApp$log$Manager_$$);
var $castApp$protocol$Message$$ = function $$castApp$protocol$Message$$$($type$jscomp$110$$) {
  this.type = $type$jscomp$110$$;
};
$goog$exportSymbol$$("castApp.protocol.Message", $castApp$protocol$Message$$);
var $castApp$protocol$Request$$ = function $$castApp$protocol$Request$$$($type$jscomp$111$$) {
  this.type = $type$jscomp$111$$;
  this.requestId = $goog$string$getRandomString$$();
};
$goog$inherits$$($castApp$protocol$Request$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.Request", $castApp$protocol$Request$$);
var $castApp$protocol$Response$$ = function $$castApp$protocol$Response$$$($type$jscomp$112$$, $request$jscomp$7$$) {
  this.type = $type$jscomp$112$$;
  this.responseTo = $request$jscomp$7$$.requestId;
};
$goog$inherits$$($castApp$protocol$Response$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.Response", $castApp$protocol$Response$$);
var $castApp$protocol$Error$$ = function $$castApp$protocol$Error$$$($request$jscomp$8$$, $opt_errorName$$) {
  $castApp$protocol$Response$$.call(this, "Error", $request$jscomp$8$$);
  this.errorName = $opt_errorName$$ || "err-unknown";
};
$goog$inherits$$($castApp$protocol$Error$$, $castApp$protocol$Response$$);
$goog$exportSymbol$$("castApp.protocol.Error", $castApp$protocol$Error$$);
var $castApp$protocol$Handshake$$ = function $$castApp$protocol$Handshake$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Handshake", $castApp$protocol$Handshake$$);
var $castApp$protocol$Handshake$Request$$ = function $$castApp$protocol$Handshake$Request$$$() {
  $castApp$protocol$Request$$.call(this, "Handshake.Request");
  this.coreVersion = 6;
};
$goog$inherits$$($castApp$protocol$Handshake$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$Handshake$$.Request = $castApp$protocol$Handshake$Request$$;
var $castApp$protocol$Handshake$Response$$ = function $$castApp$protocol$Handshake$Response$$$($request$jscomp$9$$) {
  $castApp$protocol$Response$$.call(this, "Handshake.Response", $request$jscomp$9$$);
  this.version = 6;
  this.latestVersion = void 0;
};
$goog$inherits$$($castApp$protocol$Handshake$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$Handshake$$.Response = $castApp$protocol$Handshake$Response$$;
var $castApp$protocol$Handshake$UiVersionNotSupported$$ = function $$castApp$protocol$Handshake$UiVersionNotSupported$$$($request$jscomp$10$$, $latestVersion$$) {
  $castApp$protocol$Response$$.call(this, "Handshake.UiVersionNotSupported", $request$jscomp$10$$);
  this.latestVersion = $latestVersion$$;
};
$goog$inherits$$($castApp$protocol$Handshake$UiVersionNotSupported$$, $castApp$protocol$Response$$);
$castApp$protocol$Handshake$$.UiVersionNotSupported = $castApp$protocol$Handshake$UiVersionNotSupported$$;
var $castApp$protocol$SetSimpleState$$ = function $$castApp$protocol$SetSimpleState$$$($state$jscomp$5$$) {
  this.type = "SetSimpleState";
  this.state = $state$jscomp$5$$;
};
$goog$inherits$$($castApp$protocol$SetSimpleState$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.SetSimpleState", $castApp$protocol$SetSimpleState$$);
var $castApp$protocol$ModalDialog$$ = function $$castApp$protocol$ModalDialog$$$() {
};
$goog$exportSymbol$$("castApp.protocol.ModalDialog", $castApp$protocol$ModalDialog$$);
var $castApp$protocol$ModalDialog$Request$$ = function $$castApp$protocol$ModalDialog$Request$$$($dialogId$$) {
  $castApp$protocol$Request$$.call(this, "ModalDialog.Request");
  this.dialogId = $dialogId$$;
};
$goog$inherits$$($castApp$protocol$ModalDialog$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$ModalDialog$$.Request = $castApp$protocol$ModalDialog$Request$$;
var $castApp$protocol$ModalDialog$Response$$ = function $$castApp$protocol$ModalDialog$Response$$$($request$jscomp$11$$, $button$$) {
  $castApp$protocol$Response$$.call(this, "ModalDialog.Response", $request$jscomp$11$$);
  this.button = $button$$;
};
$goog$inherits$$($castApp$protocol$ModalDialog$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$ModalDialog$$.Response = $castApp$protocol$ModalDialog$Response$$;
var $castApp$protocol$MessageWithDeviceType$$ = function $$castApp$protocol$MessageWithDeviceType$$$($messageType$$, $deviceType$$) {
  this.type = $messageType$$;
  this.deviceType = $deviceType$$;
};
$goog$inherits$$($castApp$protocol$MessageWithDeviceType$$, $castApp$protocol$Message$$);
$goog$exportSymbol$$("castApp.protocol.MessageWithDeviceType", $castApp$protocol$MessageWithDeviceType$$);
var $castApp$protocol$DeviceDiscovery$$ = function $$castApp$protocol$DeviceDiscovery$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DeviceDiscovery", $castApp$protocol$DeviceDiscovery$$);
var $castApp$protocol$DeviceDiscovery$ShowScanner$$ = function $$castApp$protocol$DeviceDiscovery$ShowScanner$$$($showTips$$) {
  this.type = "DeviceDiscovery.ShowScanner";
  this.showTips = $showTips$$;
};
$goog$inherits$$($castApp$protocol$DeviceDiscovery$ShowScanner$$, $castApp$protocol$Message$$);
$castApp$protocol$DeviceDiscovery$$.ShowScanner = $castApp$protocol$DeviceDiscovery$ShowScanner$$;
var $castApp$protocol$SetupStart$$ = function $$castApp$protocol$SetupStart$$$() {
};
$goog$exportSymbol$$("castApp.protocol.SetupStart", $castApp$protocol$SetupStart$$);
var $castApp$protocol$SetupStart$ShowDevice$$ = function $$castApp$protocol$SetupStart$ShowDevice$$$($state$jscomp$6$$, $deviceType$jscomp$1$$, $deviceName$$) {
  this.type = "SetupStart.ShowDevice";
  this.state = $state$jscomp$6$$;
  this.deviceType = $deviceType$jscomp$1$$;
  this.deviceName = $deviceName$$;
  this.analyticsOptIn = this.otherDevicesExist = !1;
};
$goog$inherits$$($castApp$protocol$SetupStart$ShowDevice$$, $castApp$protocol$Message$$);
$castApp$protocol$SetupStart$$.ShowDevice = $castApp$protocol$SetupStart$ShowDevice$$;
var $castApp$protocol$SetupStart$TosAccepted$$ = function $$castApp$protocol$SetupStart$TosAccepted$$$($analyticsOptIn$$) {
  this.type = "SetupStart.TosAccepted";
  this.analyticsOptIn = $analyticsOptIn$$;
};
$goog$inherits$$($castApp$protocol$SetupStart$TosAccepted$$, $castApp$protocol$Message$$);
$castApp$protocol$SetupStart$$.TosAccepted = $castApp$protocol$SetupStart$TosAccepted$$;
var $castApp$protocol$WiFiSwitching$$ = function $$castApp$protocol$WiFiSwitching$$$() {
};
$goog$exportSymbol$$("castApp.protocol.WiFiSwitching", $castApp$protocol$WiFiSwitching$$);
var $castApp$protocol$WiFiSwitching$ConnectHotSpot$$ = function $$castApp$protocol$WiFiSwitching$ConnectHotSpot$$$($state$jscomp$7$$, $deviceName$jscomp$1$$, $ssid$jscomp$1$$) {
  this.type = "WiFiSwitching.ConnectHotSpot";
  this.state = $state$jscomp$7$$;
  this.deviceName = $deviceName$jscomp$1$$;
  this.ssid = $ssid$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$WiFiSwitching$ConnectHotSpot$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiSwitching$$.ConnectHotSpot = $castApp$protocol$WiFiSwitching$ConnectHotSpot$$;
var $castApp$protocol$WiFiSwitching$ReconnectWiFi$$ = function $$castApp$protocol$WiFiSwitching$ReconnectWiFi$$$($state$jscomp$8$$, $ssid$jscomp$2$$) {
  this.type = "WiFiSwitching.ReconnectWiFi";
  this.state = $state$jscomp$8$$;
  this.ssid = $ssid$jscomp$2$$;
};
$goog$inherits$$($castApp$protocol$WiFiSwitching$ReconnectWiFi$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiSwitching$$.ReconnectWiFi = $castApp$protocol$WiFiSwitching$ReconnectWiFi$$;
var $castApp$protocol$CodeConfirmation$$ = function $$castApp$protocol$CodeConfirmation$$$() {
};
$goog$exportSymbol$$("castApp.protocol.CodeConfirmation", $castApp$protocol$CodeConfirmation$$);
var $castApp$protocol$CodeConfirmation$Request$$ = function $$castApp$protocol$CodeConfirmation$Request$$$($code$jscomp$5$$) {
  $castApp$protocol$Request$$.call(this, "CodeConfirmation.Request");
  this.code = $code$jscomp$5$$;
};
$goog$inherits$$($castApp$protocol$CodeConfirmation$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$CodeConfirmation$$.Request = $castApp$protocol$CodeConfirmation$Request$$;
var $castApp$protocol$CodeConfirmation$Response$$ = function $$castApp$protocol$CodeConfirmation$Response$$$($request$jscomp$12$$, $confirmed$$) {
  $castApp$protocol$Response$$.call(this, "CodeConfirmation.Response", $request$jscomp$12$$);
  this.confirmed = $confirmed$$;
};
$goog$inherits$$($castApp$protocol$CodeConfirmation$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$CodeConfirmation$$.Response = $castApp$protocol$CodeConfirmation$Response$$;
var $castApp$protocol$AudioConfirmation$$ = function $$castApp$protocol$AudioConfirmation$$$() {
};
$goog$exportSymbol$$("castApp.protocol.AudioConfirmation", $castApp$protocol$AudioConfirmation$$);
var $castApp$protocol$AudioConfirmation$PromptUser$$ = function $$castApp$protocol$AudioConfirmation$PromptUser$$$($state$jscomp$9$$) {
  this.type = "AudioConfirmation.PromptUser";
  this.state = $state$jscomp$9$$;
};
$goog$inherits$$($castApp$protocol$AudioConfirmation$PromptUser$$, $castApp$protocol$Message$$);
$castApp$protocol$AudioConfirmation$$.PromptUser = $castApp$protocol$AudioConfirmation$PromptUser$$;
var $castApp$protocol$AudioConfirmation$UserAction$$ = function $$castApp$protocol$AudioConfirmation$UserAction$$$($action$$) {
  this.type = "AudioConfirmation.UserAction";
  this.action = $action$$;
};
$goog$inherits$$($castApp$protocol$AudioConfirmation$UserAction$$, $castApp$protocol$Message$$);
$castApp$protocol$AudioConfirmation$$.UserAction = $castApp$protocol$AudioConfirmation$UserAction$$;
var $castApp$protocol$DeviceConfig$$ = function $$castApp$protocol$DeviceConfig$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DeviceConfig", $castApp$protocol$DeviceConfig$$);
var $castApp$protocol$DeviceConfig$Request$$ = function $$castApp$protocol$DeviceConfig$Request$$$($deviceType$jscomp$2$$, $name$jscomp$87$$, $country$$) {
  $castApp$protocol$Request$$.call(this, "DeviceConfig.Request");
  this.deviceType = $deviceType$jscomp$2$$;
  this.name = $name$jscomp$87$$;
  this.country = $country$$;
};
$goog$inherits$$($castApp$protocol$DeviceConfig$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$DeviceConfig$$.Request = $castApp$protocol$DeviceConfig$Request$$;
var $castApp$protocol$DeviceConfig$Response$$ = function $$castApp$protocol$DeviceConfig$Response$$$($request$jscomp$13$$, $name$jscomp$88$$, $country$jscomp$1$$) {
  $castApp$protocol$Response$$.call(this, "DeviceConfig.Response", $request$jscomp$13$$);
  this.name = $name$jscomp$88$$;
  this.country = $country$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$DeviceConfig$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$DeviceConfig$$.Response = $castApp$protocol$DeviceConfig$Response$$;
var $castApp$protocol$WiFiConfig$$ = function $$castApp$protocol$WiFiConfig$$$() {
};
$goog$exportSymbol$$("castApp.protocol.WiFiConfig", $castApp$protocol$WiFiConfig$$);
var $castApp$protocol$WiFiConfig$Network$$ = function $$castApp$protocol$WiFiConfig$Network$$$($id$jscomp$36$$, $ssid$jscomp$3$$, $security$$) {
  this.id = $id$jscomp$36$$;
  this.ssid = $ssid$jscomp$3$$;
  this.security = $security$$;
};
$castApp$protocol$WiFiConfig$$.Network = $castApp$protocol$WiFiConfig$Network$$;
var $castApp$protocol$WiFiConfig$Show$$ = function $$castApp$protocol$WiFiConfig$Show$$$($state$jscomp$10$$, $deviceType$jscomp$3$$, $networks$$, $selectedNetwork$$) {
  this.type = "WiFiConfig.Show";
  this.state = $state$jscomp$10$$;
  this.deviceType = $deviceType$jscomp$3$$;
  this.networks = $networks$$;
  this.selectedNetwork = $selectedNetwork$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$Show$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.Show = $castApp$protocol$WiFiConfig$Show$$;
var $castApp$protocol$WiFiConfig$UpdateNetworks$$ = function $$castApp$protocol$WiFiConfig$UpdateNetworks$$$($networks$jscomp$1$$) {
  this.type = "WiFiConfig.UpdateNetworks";
  this.networks = $networks$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$UpdateNetworks$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.UpdateNetworks = $castApp$protocol$WiFiConfig$UpdateNetworks$$;
var $castApp$protocol$WiFiConfig$Connect$$ = function $$castApp$protocol$WiFiConfig$Connect$$$($network$$, $password$$) {
  this.type = "WiFiConfig.Connect";
  this.network = $network$$;
  this.password = $password$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$Connect$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.Connect = $castApp$protocol$WiFiConfig$Connect$$;
var $castApp$protocol$WiFiConfig$Retry$$ = function $$castApp$protocol$WiFiConfig$Retry$$$($network$jscomp$1$$) {
  this.type = "WiFiConfig.Retry";
  this.network = $network$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$WiFiConfig$Retry$$, $castApp$protocol$Message$$);
$castApp$protocol$WiFiConfig$$.Retry = $castApp$protocol$WiFiConfig$Retry$$;
var $castApp$protocol$Features$$ = function $$castApp$protocol$Features$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Features", $castApp$protocol$Features$$);
var $castApp$protocol$Features$DeviceSettings$$ = function $$castApp$protocol$Features$DeviceSettings$$$() {
};
$castApp$protocol$Features$$.DeviceSettings = $castApp$protocol$Features$DeviceSettings$$;
var $castApp$protocol$Features$Device$$ = function $$castApp$protocol$Features$Device$$$() {
  this.supportsDisplay = this.supportsSetup = !1;
};
$castApp$protocol$Features$$.Device = $castApp$protocol$Features$Device$$;
var $castApp$protocol$Devices$$ = function $$castApp$protocol$Devices$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Devices", $castApp$protocol$Devices$$);
var $castApp$protocol$Devices$DeviceProperties$$ = function $$castApp$protocol$Devices$DeviceProperties$$$($id$jscomp$37$$, $type$jscomp$113$$, $displayName$$) {
  this.id = $id$jscomp$37$$;
  this.type = $type$jscomp$113$$;
  this.displayName = $displayName$$;
};
$castApp$protocol$Devices$$.DeviceProperties = $castApp$protocol$Devices$DeviceProperties$$;
var $castApp$protocol$Devices$Show$$ = function $$castApp$protocol$Devices$Show$$$($devices$jscomp$1$$, $opt_deviceName$$) {
  this.type = "Devices.Show";
  this.devices = $devices$jscomp$1$$;
  this.deviceName = $opt_deviceName$$;
};
$goog$inherits$$($castApp$protocol$Devices$Show$$, $castApp$protocol$Message$$);
$castApp$protocol$Devices$$.Show = $castApp$protocol$Devices$Show$$;
var $castApp$protocol$Devices$UserAction$$ = function $$castApp$protocol$Devices$UserAction$$$($device$jscomp$3$$, $action$jscomp$1$$) {
  this.type = "Devices.UserAction";
  this.device = $device$jscomp$3$$;
  this.action = $action$jscomp$1$$;
};
$goog$inherits$$($castApp$protocol$Devices$UserAction$$, $castApp$protocol$Message$$);
$castApp$protocol$Devices$$.UserAction = $castApp$protocol$Devices$UserAction$$;
var $castApp$protocol$DeviceSettings$$ = function $$castApp$protocol$DeviceSettings$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DeviceSettings", $castApp$protocol$DeviceSettings$$);
var $castApp$protocol$DeviceSettings$Locale$$ = function $$castApp$protocol$DeviceSettings$Locale$$$($localeId$$, $displayString$$) {
  this.localeId = $localeId$$;
  this.displayString = $displayString$$;
};
$castApp$protocol$DeviceSettings$$.Locale = $castApp$protocol$DeviceSettings$Locale$$;
var $castApp$protocol$DeviceSettings$TimeZone$$ = function $$castApp$protocol$DeviceSettings$TimeZone$$$($timeZoneId$$, $displayString$jscomp$1$$, $offset$jscomp$14$$) {
  this.timeZoneId = $timeZoneId$$;
  this.displayString = $displayString$jscomp$1$$;
  this.offset = $offset$jscomp$14$$;
};
$castApp$protocol$DeviceSettings$$.TimeZone = $castApp$protocol$DeviceSettings$TimeZone$$;
var $castApp$protocol$DeviceSettings$Show$$ = function $$castApp$protocol$DeviceSettings$Show$$$($state$jscomp$11$$, $features$jscomp$2$$, $settings$$) {
  this.type = "DeviceSettings.Show";
  this.state = $state$jscomp$11$$;
  this.features = $features$jscomp$2$$;
  this.deviceType = $settings$$.deviceType;
  this.name = $settings$$.name;
  this.ssid = $settings$$.ssid;
  this.timeZoneId = $settings$$.timeZoneId;
  this.supportedTimeZones = $settings$$.supportedTimeZones;
  this.timeFormat = $settings$$.timeFormat;
  this.localeId = $settings$$.localeId;
  this.supportedLocales = $settings$$.supportedLocales;
  this.statsOptIn = $settings$$.statsOptIn;
  this.firmwareVersion = $settings$$.firmwareVersion;
  this.countryCode = $settings$$.countryCode;
  this.macAddress = $settings$$.macAddress;
  this.ipAddress = $settings$$.ipAddress;
};
$goog$inherits$$($castApp$protocol$DeviceSettings$Show$$, $castApp$protocol$Message$$);
$castApp$protocol$DeviceSettings$$.Show = $castApp$protocol$DeviceSettings$Show$$;
var $castApp$protocol$DeviceSettings$Apply$$ = function $$castApp$protocol$DeviceSettings$Apply$$$($settings$jscomp$1$$) {
  this.type = "DeviceSettings.Apply";
  this.name = $settings$jscomp$1$$.name;
  this.timeZoneId = $settings$jscomp$1$$.timeZoneId;
  this.timeFormat = $settings$jscomp$1$$.timeFormat;
  this.localeId = $settings$jscomp$1$$.localeId;
  this.statsOptIn = $settings$jscomp$1$$.statsOptIn;
};
$goog$inherits$$($castApp$protocol$DeviceSettings$Apply$$, $castApp$protocol$Message$$);
$castApp$protocol$DeviceSettings$$.Apply = $castApp$protocol$DeviceSettings$Apply$$;
var $castApp$protocol$DetectCountry$$ = function $$castApp$protocol$DetectCountry$$$() {
};
$goog$exportSymbol$$("castApp.protocol.DetectCountry", $castApp$protocol$DetectCountry$$);
var $castApp$protocol$DetectCountry$Request$$ = function $$castApp$protocol$DetectCountry$Request$$$() {
  $castApp$protocol$Request$$.call(this, "DetectCountry.Request");
};
$goog$inherits$$($castApp$protocol$DetectCountry$Request$$, $castApp$protocol$Request$$);
$castApp$protocol$DetectCountry$$.Request = $castApp$protocol$DetectCountry$Request$$;
var $castApp$protocol$DetectCountry$Response$$ = function $$castApp$protocol$DetectCountry$Response$$$($request$jscomp$14$$, $countryCode$$) {
  $castApp$protocol$Response$$.call(this, "DetectCountry.Response", $request$jscomp$14$$);
  this.countryCode = $countryCode$$;
};
$goog$inherits$$($castApp$protocol$DetectCountry$Response$$, $castApp$protocol$Response$$);
$castApp$protocol$DetectCountry$$.Response = $castApp$protocol$DetectCountry$Response$$;
var $castApp$protocol$Offers$$ = function $$castApp$protocol$Offers$$$() {
};
$goog$exportSymbol$$("castApp.protocol.Offers", $castApp$protocol$Offers$$);
var $castApp$protocol$Offers$Scan$$ = function $$castApp$protocol$Offers$Scan$$$() {
  this.type = "Offers.Scan";
  this.scanId = $goog$string$getRandomString$$();
};
$goog$inherits$$($castApp$protocol$Offers$Scan$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.Scan = $castApp$protocol$Offers$Scan$$;
var $castApp$protocol$Offers$Device$$ = function $$castApp$protocol$Offers$Device$$$($token$jscomp$4$$, $displayName$jscomp$1$$, $deviceType$jscomp$4$$, $ssdpUdn$$) {
  this.token = $token$jscomp$4$$;
  this.displayName = $displayName$jscomp$1$$;
  this.deviceType = $deviceType$jscomp$4$$;
  this.ssdpUdn = $ssdpUdn$$;
};
$castApp$protocol$Offers$$.Device = $castApp$protocol$Offers$Device$$;
var $castApp$protocol$Offers$ScanResults$$ = function $$castApp$protocol$Offers$ScanResults$$$($scanId$$, $devices$jscomp$2$$, $scanComplete$$) {
  this.type = "Offers.ScanResults";
  this.scanId = $scanId$$;
  this.devices = $devices$jscomp$2$$;
  this.scanComplete = $scanComplete$$;
};
$goog$inherits$$($castApp$protocol$Offers$ScanResults$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.ScanResults = $castApp$protocol$Offers$ScanResults$$;
var $castApp$protocol$Offers$Redeem$$ = function $$castApp$protocol$Offers$Redeem$$$($url$jscomp$35$$) {
  this.type = "Offers.Redeem";
  this.url = $url$jscomp$35$$;
};
$goog$inherits$$($castApp$protocol$Offers$Redeem$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.Redeem = $castApp$protocol$Offers$Redeem$$;
var $castApp$protocol$Offers$AnalyticsEvent$$ = function $$castApp$protocol$Offers$AnalyticsEvent$$$($eventType$jscomp$3$$, $opt_offerId$$) {
  this.type = "Offers.AnalyticsEvent";
  this.eventType = $eventType$jscomp$3$$;
  this.offerId = $opt_offerId$$;
};
$goog$inherits$$($castApp$protocol$Offers$AnalyticsEvent$$, $castApp$protocol$Message$$);
$castApp$protocol$Offers$$.AnalyticsEvent = $castApp$protocol$Offers$AnalyticsEvent$$;
var $goog$math$Integer$$ = function $$goog$math$Integer$$$($bits$$, $sign$$) {
  this.$b$ = [];
  this.$a$ = $sign$$;
  for (var $top$jscomp$3$$ = !0, $i$jscomp$109$$ = $bits$$.length - 1;0 <= $i$jscomp$109$$;$i$jscomp$109$$--) {
    var $val$jscomp$35$$ = $bits$$[$i$jscomp$109$$] | 0;
    $top$jscomp$3$$ && $val$jscomp$35$$ == $sign$$ || (this.$b$[$i$jscomp$109$$] = $val$jscomp$35$$, $top$jscomp$3$$ = !1);
  }
}, $goog$math$Integer$IntCache_$$ = {}, $goog$math$Integer$fromInt$$ = function $$goog$math$Integer$fromInt$$$($value$jscomp$118$$) {
  if (-128 <= $value$jscomp$118$$ && 128 > $value$jscomp$118$$) {
    var $cachedObj_obj$jscomp$80$$ = $goog$math$Integer$IntCache_$$[$value$jscomp$118$$];
    if ($cachedObj_obj$jscomp$80$$) {
      return $cachedObj_obj$jscomp$80$$;
    }
  }
  $cachedObj_obj$jscomp$80$$ = new $goog$math$Integer$$([$value$jscomp$118$$ | 0], 0 > $value$jscomp$118$$ ? -1 : 0);
  -128 <= $value$jscomp$118$$ && 128 > $value$jscomp$118$$ && ($goog$math$Integer$IntCache_$$[$value$jscomp$118$$] = $cachedObj_obj$jscomp$80$$);
  return $cachedObj_obj$jscomp$80$$;
}, $goog$math$Integer$fromNumber$$ = function $$goog$math$Integer$fromNumber$$$($value$jscomp$119$$) {
  if (isNaN($value$jscomp$119$$) || !isFinite($value$jscomp$119$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if (0 > $value$jscomp$119$$) {
    return $JSCompiler_StaticMethods_negate$$($goog$math$Integer$fromNumber$$(-$value$jscomp$119$$));
  }
  for (var $bits$jscomp$1$$ = [], $pow$$ = 1, $i$jscomp$110$$ = 0;$value$jscomp$119$$ >= $pow$$;$i$jscomp$110$$++) {
    $bits$jscomp$1$$[$i$jscomp$110$$] = $value$jscomp$119$$ / $pow$$ | 0, $pow$$ *= 4294967296;
  }
  return new $goog$math$Integer$$($bits$jscomp$1$$, 0);
}, $goog$math$Integer$fromString$$ = function $$goog$math$Integer$fromString$$$($str$jscomp$82$$, $opt_radix$jscomp$1_radix$jscomp$1$$) {
  if (0 == $str$jscomp$82$$.length) {
    throw Error("number format error: empty string");
  }
  $opt_radix$jscomp$1_radix$jscomp$1$$ = $opt_radix$jscomp$1_radix$jscomp$1$$ || 10;
  if (2 > $opt_radix$jscomp$1_radix$jscomp$1$$ || 36 < $opt_radix$jscomp$1_radix$jscomp$1$$) {
    throw Error("radix out of range: " + $opt_radix$jscomp$1_radix$jscomp$1$$);
  }
  if ("-" == $str$jscomp$82$$.charAt(0)) {
    return $JSCompiler_StaticMethods_negate$$($goog$math$Integer$fromString$$($str$jscomp$82$$.substring(1), $opt_radix$jscomp$1_radix$jscomp$1$$));
  }
  if (0 <= $str$jscomp$82$$.indexOf("-")) {
    throw Error('number format error: interior "-" character');
  }
  for (var $radixToPower$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$1_radix$jscomp$1$$, 8)), $result$jscomp$23$$ = $goog$math$Integer$ZERO$$, $i$jscomp$111$$ = 0;$i$jscomp$111$$ < $str$jscomp$82$$.length;$i$jscomp$111$$ += 8) {
    var $power_size$jscomp$12$$ = Math.min(8, $str$jscomp$82$$.length - $i$jscomp$111$$), $value$jscomp$120$$ = parseInt($str$jscomp$82$$.substring($i$jscomp$111$$, $i$jscomp$111$$ + $power_size$jscomp$12$$), $opt_radix$jscomp$1_radix$jscomp$1$$);
    8 > $power_size$jscomp$12$$ ? ($power_size$jscomp$12$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$1_radix$jscomp$1$$, $power_size$jscomp$12$$)), $result$jscomp$23$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($result$jscomp$23$$, $power_size$jscomp$12$$), $goog$math$Integer$fromNumber$$($value$jscomp$120$$))) : ($result$jscomp$23$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($result$jscomp$23$$, 
    $radixToPower$$), $result$jscomp$23$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$($result$jscomp$23$$, $goog$math$Integer$fromNumber$$($value$jscomp$120$$)));
  }
  return $result$jscomp$23$$;
}, $goog$math$Integer$ZERO$$ = $goog$math$Integer$fromInt$$(0), $goog$math$Integer$ONE$$ = $goog$math$Integer$fromInt$$(1), $goog$math$Integer$TWO_PWR_24_$$ = $goog$math$Integer$fromInt$$(16777216), $JSCompiler_StaticMethods_toNumber$$ = function $$JSCompiler_StaticMethods_toNumber$$$($JSCompiler_StaticMethods_toNumber$self$$) {
  if (-1 == $JSCompiler_StaticMethods_toNumber$self$$.$a$) {
    return -$JSCompiler_StaticMethods_toNumber$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_toNumber$self$$));
  }
  for (var $val$jscomp$36$$ = 0, $pow$jscomp$1$$ = 1, $i$jscomp$112$$ = 0;$i$jscomp$112$$ < $JSCompiler_StaticMethods_toNumber$self$$.$b$.length;$i$jscomp$112$$++) {
    $val$jscomp$36$$ += $JSCompiler_StaticMethods_getBitsUnsigned$$($JSCompiler_StaticMethods_toNumber$self$$, $i$jscomp$112$$) * $pow$jscomp$1$$, $pow$jscomp$1$$ *= 4294967296;
  }
  return $val$jscomp$36$$;
};
$goog$math$Integer$$.prototype.toString = function $$goog$math$Integer$$$$toString$($opt_radix$jscomp$2_radix$jscomp$2$$) {
  $opt_radix$jscomp$2_radix$jscomp$2$$ = $opt_radix$jscomp$2_radix$jscomp$2$$ || 10;
  if (2 > $opt_radix$jscomp$2_radix$jscomp$2$$ || 36 < $opt_radix$jscomp$2_radix$jscomp$2$$) {
    throw Error("radix out of range: " + $opt_radix$jscomp$2_radix$jscomp$2$$);
  }
  if ($JSCompiler_StaticMethods_isZero$$(this)) {
    return "0";
  }
  if (-1 == this.$a$) {
    return "-" + $JSCompiler_StaticMethods_negate$$(this).toString($opt_radix$jscomp$2_radix$jscomp$2$$);
  }
  for (var $radixToPower$jscomp$1$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$2_radix$jscomp$2$$, 6)), $JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$ = this, $result$jscomp$24$$ = "";;) {
    var $remDiv$$ = $JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$, $radixToPower$jscomp$1$$), $JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$, $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($remDiv$$, $radixToPower$jscomp$1$$)), $digits$$ = ((0 < $JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$.$b$.length ? 
    $JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$.$b$[0] : $JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$.$a$) >>> 0).toString($opt_radix$jscomp$2_radix$jscomp$2$$), $JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$ = $remDiv$$;
    if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_384_rem$$)) {
      return $digits$$ + $result$jscomp$24$$;
    }
    for (;6 > $digits$$.length;) {
      $digits$$ = "0" + $digits$$;
    }
    $result$jscomp$24$$ = "" + $digits$$ + $result$jscomp$24$$;
  }
};
var $JSCompiler_StaticMethods_getBits$$ = function $$JSCompiler_StaticMethods_getBits$$$($JSCompiler_StaticMethods_getBits$self$$, $index$jscomp$63$$) {
  return 0 > $index$jscomp$63$$ ? 0 : $index$jscomp$63$$ < $JSCompiler_StaticMethods_getBits$self$$.$b$.length ? $JSCompiler_StaticMethods_getBits$self$$.$b$[$index$jscomp$63$$] : $JSCompiler_StaticMethods_getBits$self$$.$a$;
}, $JSCompiler_StaticMethods_getBitsUnsigned$$ = function $$JSCompiler_StaticMethods_getBitsUnsigned$$$($JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$37$$, $index$jscomp$64$$) {
  $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$37$$ = $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$37$$, $index$jscomp$64$$);
  return 0 <= $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$37$$ ? $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$37$$ : 4294967296 + $JSCompiler_StaticMethods_getBitsUnsigned$self_val$jscomp$37$$;
}, $JSCompiler_StaticMethods_isZero$$ = function $$JSCompiler_StaticMethods_isZero$$$($JSCompiler_StaticMethods_isZero$self$$) {
  if (0 != $JSCompiler_StaticMethods_isZero$self$$.$a$) {
    return !1;
  }
  for (var $i$jscomp$113$$ = 0;$i$jscomp$113$$ < $JSCompiler_StaticMethods_isZero$self$$.$b$.length;$i$jscomp$113$$++) {
    if (0 != $JSCompiler_StaticMethods_isZero$self$$.$b$[$i$jscomp$113$$]) {
      return !1;
    }
  }
  return !0;
}, $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$ = function $$JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$, $other$jscomp$10$$) {
  $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$, $other$jscomp$10$$);
  return -1 == $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$.$a$ ? -1 : $JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$self_diff$$) ? 0 : 1;
}, $JSCompiler_StaticMethods_negate$$ = function $$JSCompiler_StaticMethods_negate$$$($JSCompiler_StaticMethods_negate$self_JSCompiler_inline_result$jscomp$25$$) {
  for (var $len$jscomp$inline_387$$ = $JSCompiler_StaticMethods_negate$self_JSCompiler_inline_result$jscomp$25$$.$b$.length, $arr$jscomp$inline_388$$ = [], $i$jscomp$inline_389$$ = 0;$i$jscomp$inline_389$$ < $len$jscomp$inline_387$$;$i$jscomp$inline_389$$++) {
    $arr$jscomp$inline_388$$[$i$jscomp$inline_389$$] = ~$JSCompiler_StaticMethods_negate$self_JSCompiler_inline_result$jscomp$25$$.$b$[$i$jscomp$inline_389$$];
  }
  $JSCompiler_StaticMethods_negate$self_JSCompiler_inline_result$jscomp$25$$ = new $goog$math$Integer$$($arr$jscomp$inline_388$$, ~$JSCompiler_StaticMethods_negate$self_JSCompiler_inline_result$jscomp$25$$.$a$);
  return $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$($JSCompiler_StaticMethods_negate$self_JSCompiler_inline_result$jscomp$25$$, $goog$math$Integer$ONE$$);
}, $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$ = function $$JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$add$self$$, $other$jscomp$11$$) {
  for (var $len$jscomp$2$$ = Math.max($JSCompiler_StaticMethods_goog_math_Integer_prototype$add$self$$.$b$.length, $other$jscomp$11$$.$b$.length), $arr$jscomp$72$$ = [], $carry$$ = 0, $i$jscomp$116$$ = 0;$i$jscomp$116$$ <= $len$jscomp$2$$;$i$jscomp$116$$++) {
    var $c0$$ = $carry$$ + ($JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$add$self$$, $i$jscomp$116$$) & 65535) + ($JSCompiler_StaticMethods_getBits$$($other$jscomp$11$$, $i$jscomp$116$$) & 65535), $c1$$ = ($c0$$ >>> 16) + ($JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$add$self$$, $i$jscomp$116$$) >>> 16) + ($JSCompiler_StaticMethods_getBits$$($other$jscomp$11$$, $i$jscomp$116$$) >>> 16), $carry$$ = $c1$$ >>> 
    16, $c0$$ = $c0$$ & 65535, $c1$$ = $c1$$ & 65535;
    $arr$jscomp$72$$[$i$jscomp$116$$] = $c1$$ << 16 | $c0$$;
  }
  return new $goog$math$Integer$$($arr$jscomp$72$$, $arr$jscomp$72$$[$arr$jscomp$72$$.length - 1] & -2147483648 ? -1 : 0);
}, $JSCompiler_StaticMethods_subtract$$ = function $$JSCompiler_StaticMethods_subtract$$$($JSCompiler_StaticMethods_subtract$self$$, $other$jscomp$12$$) {
  return $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$($JSCompiler_StaticMethods_subtract$self$$, $JSCompiler_StaticMethods_negate$$($other$jscomp$12$$));
}, $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$ = function $$JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $other$jscomp$13$$) {
  if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$) || $JSCompiler_StaticMethods_isZero$$($other$jscomp$13$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if (-1 == $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$.$a$) {
    return -1 == $other$jscomp$13$$.$a$ ? $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$), $JSCompiler_StaticMethods_negate$$($other$jscomp$13$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$), $other$jscomp$13$$));
  }
  if (-1 == $other$jscomp$13$$.$a$) {
    return $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $JSCompiler_StaticMethods_negate$$($other$jscomp$13$$)));
  }
  if (0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $goog$math$Integer$TWO_PWR_24_$$) && 0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($other$jscomp$13$$, $goog$math$Integer$TWO_PWR_24_$$)) {
    return $goog$math$Integer$fromNumber$$($JSCompiler_StaticMethods_toNumber$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$) * $JSCompiler_StaticMethods_toNumber$$($other$jscomp$13$$));
  }
  for (var $len$jscomp$3$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$.$b$.length + $other$jscomp$13$$.$b$.length, $arr$jscomp$73$$ = [], $i$jscomp$117$$ = 0;$i$jscomp$117$$ < 2 * $len$jscomp$3$$;$i$jscomp$117$$++) {
    $arr$jscomp$73$$[$i$jscomp$117$$] = 0;
  }
  for ($i$jscomp$117$$ = 0;$i$jscomp$117$$ < $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$.$b$.length;$i$jscomp$117$$++) {
    for (var $j$jscomp$9$$ = 0;$j$jscomp$9$$ < $other$jscomp$13$$.$b$.length;$j$jscomp$9$$++) {
      var $a1$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $i$jscomp$117$$) >>> 16, $a0$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$self$$, $i$jscomp$117$$) & 65535, $b1$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($other$jscomp$13$$, $j$jscomp$9$$) >>> 16, $b0$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($other$jscomp$13$$, $j$jscomp$9$$) & 65535;
      $arr$jscomp$73$$[2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$] += $a0$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$73$$, 2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$);
      $arr$jscomp$73$$[2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$ + 1] += $a1$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$73$$, 2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$ + 1);
      $arr$jscomp$73$$[2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$ + 1] += $a0$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$73$$, 2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$ + 1);
      $arr$jscomp$73$$[2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$ + 2] += $a1$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$73$$, 2 * $i$jscomp$117$$ + 2 * $j$jscomp$9$$ + 2);
    }
  }
  for ($i$jscomp$117$$ = 0;$i$jscomp$117$$ < $len$jscomp$3$$;$i$jscomp$117$$++) {
    $arr$jscomp$73$$[$i$jscomp$117$$] = $arr$jscomp$73$$[2 * $i$jscomp$117$$ + 1] << 16 | $arr$jscomp$73$$[2 * $i$jscomp$117$$];
  }
  for ($i$jscomp$117$$ = $len$jscomp$3$$;$i$jscomp$117$$ < 2 * $len$jscomp$3$$;$i$jscomp$117$$++) {
    $arr$jscomp$73$$[$i$jscomp$117$$] = 0;
  }
  return new $goog$math$Integer$$($arr$jscomp$73$$, 0);
}, $goog$math$Integer$carry16_$$ = function $$goog$math$Integer$carry16_$$$($bits$jscomp$4$$, $index$jscomp$65$$) {
  for (;($bits$jscomp$4$$[$index$jscomp$65$$] & 65535) != $bits$jscomp$4$$[$index$jscomp$65$$];) {
    $bits$jscomp$4$$[$index$jscomp$65$$ + 1] += $bits$jscomp$4$$[$index$jscomp$65$$] >>> 16, $bits$jscomp$4$$[$index$jscomp$65$$] &= 65535, $index$jscomp$65$$++;
  }
}, $JSCompiler_StaticMethods_divide$$ = function $$JSCompiler_StaticMethods_divide$$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$, $multiple$jscomp$inline_394_other$jscomp$15$$) {
  if ($JSCompiler_StaticMethods_isZero$$($multiple$jscomp$inline_394_other$jscomp$15$$)) {
    throw Error("division by zero");
  }
  if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if (-1 == $JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$.$a$) {
    return -1 == $multiple$jscomp$inline_394_other$jscomp$15$$.$a$ ? $JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$), $JSCompiler_StaticMethods_negate$$($multiple$jscomp$inline_394_other$jscomp$15$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$), $multiple$jscomp$inline_394_other$jscomp$15$$));
  }
  if (-1 == $multiple$jscomp$inline_394_other$jscomp$15$$.$a$) {
    return $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$, $JSCompiler_StaticMethods_negate$$($multiple$jscomp$inline_394_other$jscomp$15$$)));
  }
  if (30 < $JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$.$b$.length) {
    if (-1 == $JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$.$a$ || -1 == $multiple$jscomp$inline_394_other$jscomp$15$$.$a$) {
      throw Error("slowDivide_ only works with positive integers.");
    }
    for (var $res$jscomp$8_twoPower$jscomp$inline_393$$ = $goog$math$Integer$ONE$$;0 >= $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($multiple$jscomp$inline_394_other$jscomp$15$$, $JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$);) {
      $res$jscomp$8_twoPower$jscomp$inline_393$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($res$jscomp$8_twoPower$jscomp$inline_393$$, 1), $multiple$jscomp$inline_394_other$jscomp$15$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($multiple$jscomp$inline_394_other$jscomp$15$$, 1);
    }
    var $approx_res$jscomp$inline_395$$ = $JSCompiler_StaticMethods_shiftRight$$($res$jscomp$8_twoPower$jscomp$inline_393$$, 1), $delta$jscomp$1_log2_total$jscomp$inline_396$$ = $JSCompiler_StaticMethods_shiftRight$$($multiple$jscomp$inline_394_other$jscomp$15$$, 1), $approxRes_total2$jscomp$inline_397$$;
    $multiple$jscomp$inline_394_other$jscomp$15$$ = $JSCompiler_StaticMethods_shiftRight$$($multiple$jscomp$inline_394_other$jscomp$15$$, 2);
    for ($res$jscomp$8_twoPower$jscomp$inline_393$$ = $JSCompiler_StaticMethods_shiftRight$$($res$jscomp$8_twoPower$jscomp$inline_393$$, 2);!$JSCompiler_StaticMethods_isZero$$($multiple$jscomp$inline_394_other$jscomp$15$$);) {
      $approxRes_total2$jscomp$inline_397$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$($delta$jscomp$1_log2_total$jscomp$inline_396$$, $multiple$jscomp$inline_394_other$jscomp$15$$), 0 >= $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($approxRes_total2$jscomp$inline_397$$, $JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$) && ($approx_res$jscomp$inline_395$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$($approx_res$jscomp$inline_395$$, $res$jscomp$8_twoPower$jscomp$inline_393$$), 
      $delta$jscomp$1_log2_total$jscomp$inline_396$$ = $approxRes_total2$jscomp$inline_397$$), $multiple$jscomp$inline_394_other$jscomp$15$$ = $JSCompiler_StaticMethods_shiftRight$$($multiple$jscomp$inline_394_other$jscomp$15$$, 1), $res$jscomp$8_twoPower$jscomp$inline_393$$ = $JSCompiler_StaticMethods_shiftRight$$($res$jscomp$8_twoPower$jscomp$inline_393$$, 1);
    }
    return $approx_res$jscomp$inline_395$$;
  }
  for ($res$jscomp$8_twoPower$jscomp$inline_393$$ = $goog$math$Integer$ZERO$$;0 <= $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$, $multiple$jscomp$inline_394_other$jscomp$15$$);) {
    $approx_res$jscomp$inline_395$$ = Math.max(1, Math.floor($JSCompiler_StaticMethods_toNumber$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$) / $JSCompiler_StaticMethods_toNumber$$($multiple$jscomp$inline_394_other$jscomp$15$$)));
    $delta$jscomp$1_log2_total$jscomp$inline_396$$ = Math.ceil(Math.log($approx_res$jscomp$inline_395$$) / Math.LN2);
    $delta$jscomp$1_log2_total$jscomp$inline_396$$ = 48 >= $delta$jscomp$1_log2_total$jscomp$inline_396$$ ? 1 : Math.pow(2, $delta$jscomp$1_log2_total$jscomp$inline_396$$ - 48);
    $approxRes_total2$jscomp$inline_397$$ = $goog$math$Integer$fromNumber$$($approx_res$jscomp$inline_395$$);
    for (var $approxRem$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($approxRes_total2$jscomp$inline_397$$, $multiple$jscomp$inline_394_other$jscomp$15$$);-1 == $approxRem$$.$a$ || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($approxRem$$, $JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$);) {
      $approx_res$jscomp$inline_395$$ -= $delta$jscomp$1_log2_total$jscomp$inline_396$$, $approxRes_total2$jscomp$inline_397$$ = $goog$math$Integer$fromNumber$$($approx_res$jscomp$inline_395$$), $approxRem$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$multiply$$($approxRes_total2$jscomp$inline_397$$, $multiple$jscomp$inline_394_other$jscomp$15$$);
    }
    $JSCompiler_StaticMethods_isZero$$($approxRes_total2$jscomp$inline_397$$) && ($approxRes_total2$jscomp$inline_397$$ = $goog$math$Integer$ONE$$);
    $res$jscomp$8_twoPower$jscomp$inline_393$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$add$$($res$jscomp$8_twoPower$jscomp$inline_393$$, $approxRes_total2$jscomp$inline_397$$);
    $JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_divide$self_rem$jscomp$1$$, $approxRem$$);
  }
  return $res$jscomp$8_twoPower$jscomp$inline_393$$;
}, $JSCompiler_StaticMethods_or$$ = function $$JSCompiler_StaticMethods_or$$$($JSCompiler_StaticMethods_or$self$$, $other$jscomp$18$$) {
  for (var $len$jscomp$6$$ = Math.max($JSCompiler_StaticMethods_or$self$$.$b$.length, $other$jscomp$18$$.$b$.length), $arr$jscomp$76$$ = [], $i$jscomp$120$$ = 0;$i$jscomp$120$$ < $len$jscomp$6$$;$i$jscomp$120$$++) {
    $arr$jscomp$76$$[$i$jscomp$120$$] = $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_or$self$$, $i$jscomp$120$$) | $JSCompiler_StaticMethods_getBits$$($other$jscomp$18$$, $i$jscomp$120$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$76$$, $JSCompiler_StaticMethods_or$self$$.$a$ | $other$jscomp$18$$.$a$);
}, $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$ = function $$JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, $bit_delta_numBits$jscomp$1$$) {
  var $arr_delta$$ = $bit_delta_numBits$jscomp$1$$ >> 5;
  $bit_delta_numBits$jscomp$1$$ %= 32;
  for (var $len$jscomp$8$$ = $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$.$b$.length + $arr_delta$$ + (0 < $bit_delta_numBits$jscomp$1$$ ? 1 : 0), $arr$jscomp$78$$ = [], $i$jscomp$122$$ = 0;$i$jscomp$122$$ < $len$jscomp$8$$;$i$jscomp$122$$++) {
    $arr$jscomp$78$$[$i$jscomp$122$$] = 0 < $bit_delta_numBits$jscomp$1$$ ? $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, $i$jscomp$122$$ - $arr_delta$$) << $bit_delta_numBits$jscomp$1$$ | $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, $i$jscomp$122$$ - $arr_delta$$ - 1) >>> 32 - $bit_delta_numBits$jscomp$1$$ : $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$, 
    $i$jscomp$122$$ - $arr_delta$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$78$$, $JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$self$$.$a$);
}, $JSCompiler_StaticMethods_shiftRight$$ = function $$JSCompiler_StaticMethods_shiftRight$$$($JSCompiler_StaticMethods_shiftRight$self$$, $bit_delta$jscomp$1_numBits$jscomp$2$$) {
  var $arr_delta$jscomp$1$$ = $bit_delta$jscomp$1_numBits$jscomp$2$$ >> 5;
  $bit_delta$jscomp$1_numBits$jscomp$2$$ %= 32;
  for (var $len$jscomp$9$$ = $JSCompiler_StaticMethods_shiftRight$self$$.$b$.length - $arr_delta$jscomp$1$$, $arr$jscomp$79$$ = [], $i$jscomp$123$$ = 0;$i$jscomp$123$$ < $len$jscomp$9$$;$i$jscomp$123$$++) {
    $arr$jscomp$79$$[$i$jscomp$123$$] = 0 < $bit_delta$jscomp$1_numBits$jscomp$2$$ ? $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_shiftRight$self$$, $i$jscomp$123$$ + $arr_delta$jscomp$1$$) >>> $bit_delta$jscomp$1_numBits$jscomp$2$$ | $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_shiftRight$self$$, $i$jscomp$123$$ + $arr_delta$jscomp$1$$ + 1) << 32 - $bit_delta$jscomp$1_numBits$jscomp$2$$ : $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_shiftRight$self$$, 
    $i$jscomp$123$$ + $arr_delta$jscomp$1$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$79$$, $JSCompiler_StaticMethods_shiftRight$self$$.$a$);
};
var $goog$net$IpAddress$$ = function $$goog$net$IpAddress$$$($address$jscomp$6$$) {
  this.$a$ = $address$jscomp$6$$;
}, $goog$net$IpAddress$fromString$$ = function $$goog$net$IpAddress$fromString$$$($address$jscomp$7$$) {
  try {
    return -1 != $address$jscomp$7$$.indexOf(":") ? new $goog$net$Ipv6Address$$($address$jscomp$7$$) : new $goog$net$Ipv4Address$$($address$jscomp$7$$);
  } catch ($e$jscomp$26$$) {
    return null;
  }
}, $goog$net$Ipv4Address$$ = function $$goog$net$Ipv4Address$$$($address$jscomp$9$$) {
  this.$b$ = null;
  var $ip$$ = $goog$math$Integer$ZERO$$;
  if ($address$jscomp$9$$ instanceof $goog$math$Integer$$) {
    if (0 != $address$jscomp$9$$.$a$ || 0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$9$$, $goog$math$Integer$ZERO$$) || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$9$$, $goog$net$Ipv4Address$MAX_ADDRESS_$$)) {
      throw Error("The address does not look like an IPv4.");
    }
    $ip$$ = $goog$object$clone$$($address$jscomp$9$$);
  } else {
    if (!$goog$net$Ipv4Address$REGEX_$$.test($address$jscomp$9$$)) {
      throw Error($address$jscomp$9$$ + " does not look like an IPv4 address.");
    }
    var $octets$$ = $address$jscomp$9$$.split(".");
    if (4 != $octets$$.length) {
      throw Error($address$jscomp$9$$ + " does not look like an IPv4 address.");
    }
    for (var $i$jscomp$124$$ = 0;$i$jscomp$124$$ < $octets$$.length;$i$jscomp$124$$++) {
      var $intOctet_parsedOctet_str$jscomp$inline_399$$;
      $intOctet_parsedOctet_str$jscomp$inline_399$$ = $octets$$[$i$jscomp$124$$];
      var $num$jscomp$inline_400$$ = Number($intOctet_parsedOctet_str$jscomp$inline_399$$);
      $intOctet_parsedOctet_str$jscomp$inline_399$$ = 0 == $num$jscomp$inline_400$$ && /^[\s\xa0]*$/.test($intOctet_parsedOctet_str$jscomp$inline_399$$) ? NaN : $num$jscomp$inline_400$$;
      if (isNaN($intOctet_parsedOctet_str$jscomp$inline_399$$) || 0 > $intOctet_parsedOctet_str$jscomp$inline_399$$ || 255 < $intOctet_parsedOctet_str$jscomp$inline_399$$ || 1 != $octets$$[$i$jscomp$124$$].length && 0 == $octets$$[$i$jscomp$124$$].lastIndexOf("0", 0)) {
        throw Error("In " + $address$jscomp$9$$ + ", octet " + $i$jscomp$124$$ + " is not valid");
      }
      $intOctet_parsedOctet_str$jscomp$inline_399$$ = $goog$math$Integer$fromNumber$$($intOctet_parsedOctet_str$jscomp$inline_399$$);
      $ip$$ = $JSCompiler_StaticMethods_or$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($ip$$, 8), $intOctet_parsedOctet_str$jscomp$inline_399$$);
    }
  }
  this.$a$ = $ip$$;
};
$goog$inherits$$($goog$net$Ipv4Address$$, $goog$net$IpAddress$$);
var $goog$net$Ipv4Address$REGEX_$$ = /^[0-9.]*$/, $goog$net$Ipv4Address$MAX_ADDRESS_$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($goog$math$Integer$ONE$$, 32), $goog$math$Integer$ONE$$);
$goog$net$Ipv4Address$$.prototype.toString = function $$goog$net$Ipv4Address$$$$toString$() {
  if (this.$b$) {
    return this.$b$;
  }
  for (var $ip$jscomp$1$$ = $JSCompiler_StaticMethods_getBitsUnsigned$$(this.$a$, 0), $octets$jscomp$1$$ = [], $i$jscomp$125$$ = 3;0 <= $i$jscomp$125$$;$i$jscomp$125$$--) {
    $octets$jscomp$1$$[$i$jscomp$125$$] = String($ip$jscomp$1$$ & 255), $ip$jscomp$1$$ >>>= 8;
  }
  return this.$b$ = $octets$jscomp$1$$.join(".");
};
var $goog$net$Ipv6Address$$ = function $$goog$net$Ipv6Address$$$($address$jscomp$10_bits$jscomp$inline_405$$) {
  this.$b$ = null;
  var $ip$jscomp$2$$ = $goog$math$Integer$ZERO$$;
  if ($address$jscomp$10_bits$jscomp$inline_405$$ instanceof $goog$math$Integer$$) {
    if (0 != $address$jscomp$10_bits$jscomp$inline_405$$.$a$ || 0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$10_bits$jscomp$inline_405$$, $goog$math$Integer$ZERO$$) || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($address$jscomp$10_bits$jscomp$inline_405$$, $goog$net$Ipv6Address$MAX_ADDRESS_$$)) {
      throw Error("The address does not look like a valid IPv6.");
    }
    $ip$jscomp$2$$ = $goog$object$clone$$($address$jscomp$10_bits$jscomp$inline_405$$);
  } else {
    if (!$goog$net$Ipv6Address$REGEX_$$.test($address$jscomp$10_bits$jscomp$inline_405$$)) {
      throw Error($address$jscomp$10_bits$jscomp$inline_405$$ + " is not a valid IPv6 address.");
    }
    var $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$ = $address$jscomp$10_bits$jscomp$inline_405$$.split(":");
    if (-1 != $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$[$JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length - 1].indexOf(".")) {
      $address$jscomp$10_bits$jscomp$inline_405$$ = $JSCompiler_StaticMethods_getBitsUnsigned$$($goog$object$clone$$((new $goog$net$Ipv4Address$$($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$[$JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length - 1])).$a$), 0);
      var $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$ = [];
      $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$.push(($address$jscomp$10_bits$jscomp$inline_405$$ >>> 16 & 65535).toString(16));
      $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$.push(($address$jscomp$10_bits$jscomp$inline_405$$ & 65535).toString(16));
      $goog$array$removeAt$$($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$, $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length - 1);
      $goog$array$extend$$($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$, $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$);
      $address$jscomp$10_bits$jscomp$inline_405$$ = $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.join(":");
    }
    $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$ = $address$jscomp$10_bits$jscomp$inline_405$$.split("::");
    if (2 < $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$.length || 1 == $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$.length && 8 != $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length) {
      throw Error($address$jscomp$10_bits$jscomp$inline_405$$ + " is not a valid IPv6 address.");
    }
    if (1 < $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$.length) {
      $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$ = $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$[0].split(":");
      $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$ = $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$[1].split(":");
      1 == $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length && "" == $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$[0] && ($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$ = []);
      1 == $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$.length && "" == $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$[0] && ($hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$ = []);
      var $gap$jscomp$inline_411_parsedHextet$$ = 8 - ($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length + $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$.length);
      if (1 > $gap$jscomp$inline_411_parsedHextet$$) {
        $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$ = [];
      } else {
        for (var $array$jscomp$inline_996$$ = [], $i$jscomp$inline_997$$ = 0;$i$jscomp$inline_997$$ < $gap$jscomp$inline_411_parsedHextet$$;$i$jscomp$inline_997$$++) {
          $array$jscomp$inline_996$$[$i$jscomp$inline_997$$] = "0";
        }
        $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$ = $goog$array$join$$($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$, $array$jscomp$inline_996$$, $hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$);
      }
    }
    if (8 != $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length) {
      throw Error($address$jscomp$10_bits$jscomp$inline_405$$ + " is not a valid IPv6 address");
    }
    for ($hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$ = 0;$hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$ < $JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$.length;$hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$++) {
      $gap$jscomp$inline_411_parsedHextet$$ = $goog$math$Integer$fromString$$($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$[$hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$], 16);
      if (0 > $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($gap$jscomp$inline_411_parsedHextet$$, $goog$math$Integer$ZERO$$) || 0 < $JSCompiler_StaticMethods_goog_math_Integer_prototype$compare$$($gap$jscomp$inline_411_parsedHextet$$, $goog$net$Ipv6Address$MAX_HEXTET_VALUE_$$)) {
        throw Error($JSCompiler_temp$jscomp$26_JSCompiler_temp$jscomp$943_basePart$jscomp$inline_409_ipArr_splitColon$$[$hextets$jscomp$inline_406_i$jscomp$126_secondPart$jscomp$inline_410_splitDoubleColon$$] + " in " + $address$jscomp$10_bits$jscomp$inline_405$$ + " is not a valid hextet.");
      }
      $ip$jscomp$2$$ = $JSCompiler_StaticMethods_or$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($ip$jscomp$2$$, 16), $gap$jscomp$inline_411_parsedHextet$$);
    }
  }
  this.$a$ = $ip$jscomp$2$$;
};
$goog$inherits$$($goog$net$Ipv6Address$$, $goog$net$IpAddress$$);
var $goog$net$Ipv6Address$REGEX_$$ = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/, $goog$net$Ipv6Address$MAX_HEXTET_VALUE_$$ = $goog$math$Integer$fromInt$$(65535), $goog$net$Ipv6Address$MAX_ADDRESS_$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_goog_math_Integer_prototype$shiftLeft$$($goog$math$Integer$ONE$$, 128), $goog$math$Integer$ONE$$);
$goog$net$Ipv6Address$$.prototype.toString = function $$goog$net$Ipv6Address$$$$toString$() {
  if (this.$b$) {
    return this.$b$;
  }
  for (var $hextets$jscomp$inline_415_outputArr$$ = [], $bestStart$jscomp$inline_416_i$jscomp$127$$ = 3;0 <= $bestStart$jscomp$inline_416_i$jscomp$127$$;$bestStart$jscomp$inline_416_i$jscomp$127$$--) {
    var $bits$jscomp$5_start$jscomp$inline_417$$ = $JSCompiler_StaticMethods_getBitsUnsigned$$(this.$a$, $bestStart$jscomp$inline_416_i$jscomp$127$$), $bestSize$jscomp$inline_418_secondHextet$$ = $bits$jscomp$5_start$jscomp$inline_417$$ & 65535;
    $hextets$jscomp$inline_415_outputArr$$.push(($bits$jscomp$5_start$jscomp$inline_417$$ >>> 16).toString(16));
    $hextets$jscomp$inline_415_outputArr$$.push($bestSize$jscomp$inline_418_secondHextet$$.toString(16));
  }
  for (var $bits$jscomp$5_start$jscomp$inline_417$$ = $bestStart$jscomp$inline_416_i$jscomp$127$$ = -1, $size$jscomp$inline_419$$ = $bestSize$jscomp$inline_418_secondHextet$$ = 0, $i$jscomp$inline_420$$ = 0;$i$jscomp$inline_420$$ < $hextets$jscomp$inline_415_outputArr$$.length;$i$jscomp$inline_420$$++) {
    "0" == $hextets$jscomp$inline_415_outputArr$$[$i$jscomp$inline_420$$] ? ($size$jscomp$inline_419$$++, -1 == $bits$jscomp$5_start$jscomp$inline_417$$ && ($bits$jscomp$5_start$jscomp$inline_417$$ = $i$jscomp$inline_420$$), $size$jscomp$inline_419$$ > $bestSize$jscomp$inline_418_secondHextet$$ && ($bestSize$jscomp$inline_418_secondHextet$$ = $size$jscomp$inline_419$$, $bestStart$jscomp$inline_416_i$jscomp$127$$ = $bits$jscomp$5_start$jscomp$inline_417$$)) : ($bits$jscomp$5_start$jscomp$inline_417$$ = 
    -1, $size$jscomp$inline_419$$ = 0);
  }
  0 < $bestSize$jscomp$inline_418_secondHextet$$ && ($bestStart$jscomp$inline_416_i$jscomp$127$$ + $bestSize$jscomp$inline_418_secondHextet$$ == $hextets$jscomp$inline_415_outputArr$$.length && $hextets$jscomp$inline_415_outputArr$$.push(""), $hextets$jscomp$inline_415_outputArr$$.splice($bestStart$jscomp$inline_416_i$jscomp$127$$, $bestSize$jscomp$inline_418_secondHextet$$, ""), 0 == $bestStart$jscomp$inline_416_i$jscomp$127$$ && ($hextets$jscomp$inline_415_outputArr$$ = [""].concat($hextets$jscomp$inline_415_outputArr$$)));
  return this.$b$ = $hextets$jscomp$inline_415_outputArr$$.join(":");
};
var $goog$uri$utils$splitRe_$$ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, $goog$uri$utils$parseQueryData$$ = function $$goog$uri$utils$parseQueryData$$$($encodedQuery_pairs$jscomp$1$$, $callback$jscomp$393$$) {
  if ($encodedQuery_pairs$jscomp$1$$) {
    $encodedQuery_pairs$jscomp$1$$ = $encodedQuery_pairs$jscomp$1$$.split("&");
    for (var $i$jscomp$129$$ = 0;$i$jscomp$129$$ < $encodedQuery_pairs$jscomp$1$$.length;$i$jscomp$129$$++) {
      var $indexOfEquals$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$129$$].indexOf("="), $name$jscomp$89$$, $value$jscomp$121$$ = null;
      0 <= $indexOfEquals$$ ? ($name$jscomp$89$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$129$$].substring(0, $indexOfEquals$$), $value$jscomp$121$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$129$$].substring($indexOfEquals$$ + 1)) : $name$jscomp$89$$ = $encodedQuery_pairs$jscomp$1$$[$i$jscomp$129$$];
      $callback$jscomp$393$$($name$jscomp$89$$, $value$jscomp$121$$ ? decodeURIComponent($value$jscomp$121$$.replace(/\+/g, " ")) : "");
    }
  }
};
var $goog$Uri$$ = function $$goog$Uri$$$($opt_uri$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$) {
  this.$f$ = this.$j$ = this.$c$ = "";
  this.$h$ = null;
  this.$g$ = this.$b$ = "";
  this.$a$ = !1;
  var $m_rv$jscomp$inline_431$$;
  $opt_uri$$ instanceof $goog$Uri$$ ? (this.$a$ = $goog$isDef$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$) ? $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$ : $opt_uri$$.$a$, $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$c$), this.$j$ = $opt_uri$$.$j$, this.$f$ = $opt_uri$$.$f$, $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$h$), this.$b$ = $opt_uri$$.$b$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$ = 
  $opt_uri$$.$i$, $m_rv$jscomp$inline_431$$ = new $goog$Uri$QueryData$$, $m_rv$jscomp$inline_431$$.$c$ = $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$.$c$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$.$a$ && ($m_rv$jscomp$inline_431$$.$a$ = new $goog$structs$Map$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$.$a$), $m_rv$jscomp$inline_431$$.$b$ = 
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$.$b$), $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_431$$), this.$g$ = $opt_uri$$.$g$) : $opt_uri$$ && ($m_rv$jscomp$inline_431$$ = String($opt_uri$$).match($goog$uri$utils$splitRe_$$)) ? (this.$a$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$, $JSCompiler_StaticMethods_setScheme$$(this, $m_rv$jscomp$inline_431$$[1] || 
  "", !0), this.$j$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_431$$[2] || ""), this.$f$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_431$$[3] || "", !0), $JSCompiler_StaticMethods_setPort$$(this, $m_rv$jscomp$inline_431$$[4]), this.$b$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_431$$[5] || "", !0), $JSCompiler_StaticMethods_setQueryData$$(this, $m_rv$jscomp$inline_431$$[6] || "", !0), this.$g$ = $goog$Uri$decodeOrEmpty_$$($m_rv$jscomp$inline_431$$[7] || "")) : (this.$a$ = !!$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$clone$self$jscomp$inline_430_opt_ignoreCase$$, 
  this.$i$ = new $goog$Uri$QueryData$$(null, 0, this.$a$));
};
$goog$Uri$$.prototype.toString = function $$goog$Uri$$$$toString$() {
  var $out$jscomp$1$$ = [], $scheme$jscomp$3_userInfo$$ = this.$c$;
  $scheme$jscomp$3_userInfo$$ && $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$3_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), ":");
  var $domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$ = this.$f$;
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$ || "file" == $scheme$jscomp$3_userInfo$$) {
    $out$jscomp$1$$.push("//"), ($scheme$jscomp$3_userInfo$$ = this.$j$) && $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$3_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), "@"), $out$jscomp$1$$.push(encodeURIComponent(String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$ = this.$h$, null != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$ && 
    $out$jscomp$1$$.push(":", String($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$));
  }
  if ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$ = this.$b$) {
    this.$f$ && "/" != $domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$.charAt(0) && $out$jscomp$1$$.push("/"), $out$jscomp$1$$.push($goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$, "/" == $domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$, !0));
  }
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$ = this.$i$.toString()) && $out$jscomp$1$$.push("?", $domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$);
  ($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$ = this.$g$) && $out$jscomp$1$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$1_path$jscomp$18_port$jscomp$4_query$jscomp$6$$, $goog$Uri$reDisallowedInFragment_$$));
  return $out$jscomp$1$$.join("");
};
var $JSCompiler_StaticMethods_setScheme$$ = function $$JSCompiler_StaticMethods_setScheme$$$($JSCompiler_StaticMethods_setScheme$self$$, $newScheme$$, $opt_decode$$) {
  $JSCompiler_StaticMethods_setScheme$self$$.$c$ = $opt_decode$$ ? $goog$Uri$decodeOrEmpty_$$($newScheme$$, !0) : $newScheme$$;
  $JSCompiler_StaticMethods_setScheme$self$$.$c$ && ($JSCompiler_StaticMethods_setScheme$self$$.$c$ = $JSCompiler_StaticMethods_setScheme$self$$.$c$.replace(/:$/, ""));
}, $JSCompiler_StaticMethods_setPort$$ = function $$JSCompiler_StaticMethods_setPort$$$($JSCompiler_StaticMethods_setPort$self$$, $newPort$$) {
  if ($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if (isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    $JSCompiler_StaticMethods_setPort$self$$.$h$ = $newPort$$;
  } else {
    $JSCompiler_StaticMethods_setPort$self$$.$h$ = null;
  }
}, $JSCompiler_StaticMethods_setQueryData$$ = function $$JSCompiler_StaticMethods_setQueryData$$$($JSCompiler_StaticMethods_setQueryData$self$$, $queryData$$, $opt_decode$jscomp$4$$) {
  $queryData$$ instanceof $goog$Uri$QueryData$$ ? ($JSCompiler_StaticMethods_setQueryData$self$$.$i$ = $queryData$$, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$($JSCompiler_StaticMethods_setQueryData$self$$.$i$, $JSCompiler_StaticMethods_setQueryData$self$$.$a$)) : ($opt_decode$jscomp$4$$ || ($queryData$$ = $goog$Uri$encodeSpecialChars_$$($queryData$$, $goog$Uri$reDisallowedInQuery_$$)), $JSCompiler_StaticMethods_setQueryData$self$$.$i$ = new $goog$Uri$QueryData$$($queryData$$, 
  0, $JSCompiler_StaticMethods_setQueryData$self$$.$a$));
}, $goog$Uri$parse$$ = function $$goog$Uri$parse$$$($uri$jscomp$43$$) {
  return $uri$jscomp$43$$ instanceof $goog$Uri$$ ? new $goog$Uri$$($uri$jscomp$43$$) : new $goog$Uri$$($uri$jscomp$43$$, void 0);
}, $goog$Uri$decodeOrEmpty_$$ = function $$goog$Uri$decodeOrEmpty_$$$($val$jscomp$39$$, $opt_preserveReserved$jscomp$1$$) {
  return $val$jscomp$39$$ ? $opt_preserveReserved$jscomp$1$$ ? decodeURI($val$jscomp$39$$.replace(/%25/g, "%2525")) : decodeURIComponent($val$jscomp$39$$) : "";
}, $goog$Uri$encodeSpecialChars_$$ = function $$goog$Uri$encodeSpecialChars_$$$($encoded_unescapedPart$$, $extra$$, $opt_removeDoubleEncoding$$) {
  return $goog$isString$$($encoded_unescapedPart$$) ? ($encoded_unescapedPart$$ = encodeURI($encoded_unescapedPart$$).replace($extra$$, $goog$Uri$encodeChar_$$), $opt_removeDoubleEncoding$$ && ($encoded_unescapedPart$$ = $encoded_unescapedPart$$.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $encoded_unescapedPart$$) : null;
}, $goog$Uri$encodeChar_$$ = function $$goog$Uri$encodeChar_$$$($ch$jscomp$3_n$jscomp$9$$) {
  $ch$jscomp$3_n$jscomp$9$$ = $ch$jscomp$3_n$jscomp$9$$.charCodeAt(0);
  return "%" + ($ch$jscomp$3_n$jscomp$9$$ >> 4 & 15).toString(16) + ($ch$jscomp$3_n$jscomp$9$$ & 15).toString(16);
}, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[\#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[\#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[\#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g, $goog$Uri$QueryData$$ = function $$goog$Uri$QueryData$$$($opt_query$jscomp$1$$, $opt_uri$jscomp$1$$, $opt_ignoreCase$jscomp$3$$) {
  this.$b$ = this.$a$ = null;
  this.$c$ = $opt_query$jscomp$1$$ || null;
  this.$f$ = !!$opt_ignoreCase$jscomp$3$$;
}, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$ = function $$JSCompiler_StaticMethods_ensureKeyMapInitialized_$$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$ || ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$ = new $goog$structs$Map$$, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$b$ = 0, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$ && $goog$uri$utils$parseQueryData$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$, function($key$jscomp$inline_450_name$jscomp$91$$, $value$jscomp$125$$) {
    $key$jscomp$inline_450_name$jscomp$91$$ = decodeURIComponent($key$jscomp$inline_450_name$jscomp$91$$.replace(/\+/g, " "));
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$);
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$c$ = null;
    $key$jscomp$inline_450_name$jscomp$91$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$, $key$jscomp$inline_450_name$jscomp$91$$);
    var $values$jscomp$inline_452$$ = $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$.get($key$jscomp$inline_450_name$jscomp$91$$);
    $values$jscomp$inline_452$$ || $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$a$.set($key$jscomp$inline_450_name$jscomp$91$$, $values$jscomp$inline_452$$ = []);
    $values$jscomp$inline_452$$.push($value$jscomp$125$$);
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$b$ += 1;
  }));
};
$goog$Uri$QueryData$$.prototype.$getCount$ = function $$goog$Uri$QueryData$$$$$getCount$$() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  return this.$b$;
};
$goog$Uri$QueryData$$.prototype.remove = function $$goog$Uri$QueryData$$$$remove$($key$jscomp$82$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  $key$jscomp$82$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$82$$);
  return $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.$a$, $key$jscomp$82$$) ? (this.$c$ = null, this.$b$ -= this.$a$.get($key$jscomp$82$$).length, this.$a$.remove($key$jscomp$82$$)) : !1;
};
$goog$Uri$QueryData$$.prototype.clear = function $$goog$Uri$QueryData$$$$clear$() {
  this.$a$ = this.$c$ = null;
  this.$b$ = 0;
};
var $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$ = function $$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$83$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$);
  $key$jscomp$83$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$, $key$jscomp$83$$);
  return $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$self$$.$a$, $key$jscomp$83$$);
};
$JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype;
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  for (var $vals$jscomp$1$$ = this.$a$.$getValues$(), $keys$jscomp$13$$ = this.$a$.$getKeys$(), $rv$jscomp$14$$ = [], $i$jscomp$133$$ = 0;$i$jscomp$133$$ < $keys$jscomp$13$$.length;$i$jscomp$133$$++) {
    for (var $val$jscomp$40$$ = $vals$jscomp$1$$[$i$jscomp$133$$], $j$jscomp$11$$ = 0;$j$jscomp$11$$ < $val$jscomp$40$$.length;$j$jscomp$11$$++) {
      $rv$jscomp$14$$.push($keys$jscomp$13$$[$i$jscomp$133$$]);
    }
  }
  return $rv$jscomp$14$$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$($opt_key$jscomp$1_values$jscomp$19$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  var $rv$jscomp$15$$ = [];
  if ($goog$isString$$($opt_key$jscomp$1_values$jscomp$19$$)) {
    $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $opt_key$jscomp$1_values$jscomp$19$$) && ($rv$jscomp$15$$ = $goog$array$concat$$($rv$jscomp$15$$, this.$a$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$jscomp$1_values$jscomp$19$$))));
  } else {
    $opt_key$jscomp$1_values$jscomp$19$$ = this.$a$.$getValues$();
    for (var $i$jscomp$134$$ = 0;$i$jscomp$134$$ < $opt_key$jscomp$1_values$jscomp$19$$.length;$i$jscomp$134$$++) {
      $rv$jscomp$15$$ = $goog$array$concat$$($rv$jscomp$15$$, $opt_key$jscomp$1_values$jscomp$19$$[$i$jscomp$134$$]);
    }
  }
  return $rv$jscomp$15$$;
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$jscomp$84$$, $value$jscomp$129$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$c$ = null;
  $key$jscomp$84$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$84$$);
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$containsKey$$(this, $key$jscomp$84$$) && (this.$b$ -= this.$a$.get($key$jscomp$84$$).length);
  this.$a$.set($key$jscomp$84$$, [$value$jscomp$129$$]);
  this.$b$ += 1;
  return this;
};
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$jscomp$85_values$jscomp$20$$, $opt_default$$) {
  $key$jscomp$85_values$jscomp$20$$ = $key$jscomp$85_values$jscomp$20$$ ? this.$getValues$($key$jscomp$85_values$jscomp$20$$) : [];
  return 0 < $key$jscomp$85_values$jscomp$20$$.length ? String($key$jscomp$85_values$jscomp$20$$[0]) : $opt_default$$;
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  if (this.$c$) {
    return this.$c$;
  }
  if (!this.$a$) {
    return "";
  }
  for (var $sb$jscomp$6$$ = [], $keys$jscomp$14$$ = this.$a$.$getKeys$(), $i$jscomp$135$$ = 0;$i$jscomp$135$$ < $keys$jscomp$14$$.length;$i$jscomp$135$$++) {
    for (var $key$jscomp$87_val$jscomp$41$$ = $keys$jscomp$14$$[$i$jscomp$135$$], $encodedKey$$ = encodeURIComponent(String($key$jscomp$87_val$jscomp$41$$)), $key$jscomp$87_val$jscomp$41$$ = this.$getValues$($key$jscomp$87_val$jscomp$41$$), $j$jscomp$12$$ = 0;$j$jscomp$12$$ < $key$jscomp$87_val$jscomp$41$$.length;$j$jscomp$12$$++) {
      var $param$jscomp$3$$ = $encodedKey$$;
      "" !== $key$jscomp$87_val$jscomp$41$$[$j$jscomp$12$$] && ($param$jscomp$3$$ += "=" + encodeURIComponent(String($key$jscomp$87_val$jscomp$41$$[$j$jscomp$12$$])));
      $sb$jscomp$6$$.push($param$jscomp$3$$);
    }
  }
  return this.$c$ = $sb$jscomp$6$$.join("&");
};
var $JSCompiler_StaticMethods_getKeyName_$$ = function $$JSCompiler_StaticMethods_getKeyName_$$$($JSCompiler_StaticMethods_getKeyName_$self$$, $arg$jscomp$9_keyName$$) {
  $arg$jscomp$9_keyName$$ = String($arg$jscomp$9_keyName$$);
  $JSCompiler_StaticMethods_getKeyName_$self$$.$f$ && ($arg$jscomp$9_keyName$$ = $arg$jscomp$9_keyName$$.toLowerCase());
  return $arg$jscomp$9_keyName$$;
}, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$ = function $$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$, $ignoreCase$jscomp$1$$) {
  $ignoreCase$jscomp$1$$ && !$JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$f$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$), $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$c$ = null, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$a$.forEach(function($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$, 
  $ignoreCase$jscomp$1$$) {
    var $value$jscomp$131$$ = $ignoreCase$jscomp$1$$.toLowerCase();
    $ignoreCase$jscomp$1$$ != $value$jscomp$131$$ && (this.remove($ignoreCase$jscomp$1$$), this.remove($value$jscomp$131$$), 0 < $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.length && (this.$c$ = null, this.$a$.set($JSCompiler_StaticMethods_getKeyName_$$(this, $value$jscomp$131$$), $goog$array$toArray$$($JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$)), this.$b$ += $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.length));
  }, $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$));
  $JSCompiler_StaticMethods_goog_Uri_QueryData_prototype$setIgnoreCase$self$$.$f$ = $ignoreCase$jscomp$1$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ConfiguredNetworkMsg", function($ssid$jscomp$4$$, $wpa_auth$$, $wpa_cipher$$, $wpa_id$$) {
  this.ssid = $ssid$jscomp$4$$;
  this.wpa_auth = $wpa_auth$$;
  this.wpa_cipher = $wpa_cipher$$;
  this.wpa_id = $wpa_id$$;
});
var $castApp$core$setupApi$ConnectWiFiMsg$$ = function $$castApp$core$setupApi$ConnectWiFiMsg$$$($ssid$jscomp$5$$, $wpa_auth$jscomp$1$$) {
  this.ssid = $ssid$jscomp$5$$;
  this.wpa_auth = $wpa_auth$jscomp$1$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ConnectWiFiMsg", $castApp$core$setupApi$ConnectWiFiMsg$$);
var $castApp$core$setupApi$EurekaInfoMsg34Base$$ = function $$castApp$core$setupApi$EurekaInfoMsg34Base$$$($version$jscomp$16$$, $name$jscomp$92$$, $build_version$$, $has_update$$, $ssdp_udn$$, $mac_address$$, $connected$$, $ssid$jscomp$6$$, $wpa_state$$, $setup_state$$, $wpa_configured$$) {
  this.version = $version$jscomp$16$$;
  this.name = $name$jscomp$92$$;
  this.build_version = $build_version$$;
  this.has_update = $has_update$$;
  this.ssdp_udn = $ssdp_udn$$;
  this.mac_address = $mac_address$$;
  this.connected = $connected$$;
  this.ssid = $ssid$jscomp$6$$;
  this.wpa_state = $wpa_state$$;
  this.setup_state = $setup_state$$;
  this.wpa_configured = $wpa_configured$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsg34Base", $castApp$core$setupApi$EurekaInfoMsg34Base$$);
var $castApp$core$setupApi$EurekaInfoMsgV3$$ = function $$castApp$core$setupApi$EurekaInfoMsgV3$$$($name$jscomp$93$$, $build_version$jscomp$1$$, $has_update$jscomp$1$$, $ssdp_udn$jscomp$1$$, $mac_address$jscomp$1$$, $connected$jscomp$1$$, $ssid$jscomp$7$$, $wpa_state$jscomp$1$$, $setup_state$jscomp$1$$, $wpa_configured$jscomp$1$$) {
  $castApp$core$setupApi$EurekaInfoMsg34Base$$.call(this, 3, $name$jscomp$93$$, $build_version$jscomp$1$$, $has_update$jscomp$1$$, $ssdp_udn$jscomp$1$$, $mac_address$jscomp$1$$, $connected$jscomp$1$$, $ssid$jscomp$7$$, $wpa_state$jscomp$1$$, $setup_state$jscomp$1$$, $wpa_configured$jscomp$1$$);
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV3$$, $castApp$core$setupApi$EurekaInfoMsg34Base$$);
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsgV3", $castApp$core$setupApi$EurekaInfoMsgV3$$);
$castApp$core$setupApi$EurekaInfoMsgV3$$.Location = function $$castApp$core$setupApi$EurekaInfoMsgV3$$$Location$($latitude$$, $longitude$$) {
  this.latitude = $latitude$$;
  this.longitude = $longitude$$;
};
var $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$ = function $$castApp$core$setupApi$EurekaInfoMsgV3$Sign$$$($certificate$jscomp$2$$, $nonce$$, $signed_data$$) {
  this.certificate = $certificate$jscomp$2$$;
  this.nonce = $nonce$$;
  this.signed_data = $signed_data$$;
};
$castApp$core$setupApi$EurekaInfoMsgV3$$.Sign = $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$;
var $castApp$core$setupApi$EurekaInfoMsgV3$Detail$$ = function $$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV3$$.Detail = $castApp$core$setupApi$EurekaInfoMsgV3$Detail$$;
$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$.Timezone = function $$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$$Timezone$($display_string$$, $offset$jscomp$15$$) {
  this.display_string = $display_string$$;
  this.offset = $offset$jscomp$15$$;
};
$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$.Locale = function $$castApp$core$setupApi$EurekaInfoMsgV3$Detail$$$Locale$($display_string$jscomp$1$$) {
  this.display_string = $display_string$jscomp$1$$;
};
var $castApp$core$setupApi$EurekaInfoMsgV4$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$$$($version$jscomp$17$$, $name$jscomp$94$$, $build_version$jscomp$2$$, $has_update$jscomp$2$$, $ssdp_udn$jscomp$2$$, $mac_address$jscomp$2$$, $connected$jscomp$2$$, $ssid$jscomp$8$$, $wpa_state$jscomp$2$$, $setup_state$jscomp$2$$, $wpa_configured$jscomp$2$$, $uptime$$) {
  $castApp$core$setupApi$EurekaInfoMsg34Base$$.call(this, $version$jscomp$17$$, $name$jscomp$94$$, $build_version$jscomp$2$$, $has_update$jscomp$2$$, $ssdp_udn$jscomp$2$$, $mac_address$jscomp$2$$, $connected$jscomp$2$$, $ssid$jscomp$8$$, $wpa_state$jscomp$2$$, $setup_state$jscomp$2$$, $wpa_configured$jscomp$2$$);
  this.uptime = $uptime$$;
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV4$$, $castApp$core$setupApi$EurekaInfoMsg34Base$$);
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsgV4", $castApp$core$setupApi$EurekaInfoMsgV4$$);
var $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$ = function $$castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$$($obj$jscomp$83$$) {
  $goog$object$setIfUndefined$$($obj$jscomp$83$$, "locale", "en-US");
  $goog$object$setIfUndefined$$($obj$jscomp$83$$, "debug_build", !1);
  $goog$object$setIfUndefined$$($obj$jscomp$83$$, "update_only_build", !1);
  $goog$object$setIfUndefined$$($obj$jscomp$83$$, "ethernet_connected", !1);
  $goog$object$setIfUndefined$$($obj$jscomp$83$$, "tos_accepted", !0);
  $goog$object$setIfUndefined$$($obj$jscomp$83$$, "time_format", 0);
  $goog$object$setIfUndefined$$($obj$jscomp$83$$, "hdmi_control", !0);
  $goog$isString$$($obj$jscomp$83$$.hotspot_bssid) || ($obj$jscomp$83$$.mac_address && 5 <= $obj$jscomp$83$$.mac_address.length ? $obj$jscomp$83$$.hotspot_bssid = "00:1A:11:FF:" + $obj$jscomp$83$$.mac_address.substr($obj$jscomp$83$$.mac_address.length - 5) : $goog$asserts$fail$$("Eureka Info mac_address too short"));
  if ($obj$jscomp$83$$.opt_in) {
    var $obj$jscomp$inline_478$$ = $obj$jscomp$83$$.opt_in;
    $goog$object$setIfUndefined$$($obj$jscomp$inline_478$$, "crash", !0);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_478$$, "stats", !0);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_478$$, "device_id", !1);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_478$$, "location", !1);
    $goog$object$setIfUndefined$$($obj$jscomp$inline_478$$, "opencast", !1);
  }
  return $obj$jscomp$83$$;
};
$castApp$core$setupApi$EurekaInfoMsgV4$$.SetupStats = function $$castApp$core$setupApi$EurekaInfoMsgV4$$$SetupStats$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV4$Location$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$Location$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV4$$.Location = $castApp$core$setupApi$EurekaInfoMsgV4$Location$$;
var $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV4$$.OptIn = $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$;
var $castApp$core$setupApi$EurekaInfoMsgV4$Sign$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$Sign$$$($certificate$jscomp$3$$, $nonce$jscomp$1$$, $signed_data$jscomp$1$$) {
  $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$.call(this, $certificate$jscomp$3$$, $nonce$jscomp$1$$, $signed_data$jscomp$1$$);
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV4$Sign$$, $castApp$core$setupApi$EurekaInfoMsgV3$Sign$$);
$castApp$core$setupApi$EurekaInfoMsgV4$$.Sign = $castApp$core$setupApi$EurekaInfoMsgV4$Sign$$;
var $castApp$core$setupApi$EurekaInfoMsgV4$Detail$$ = function $$castApp$core$setupApi$EurekaInfoMsgV4$Detail$$$($icon_list$$) {
  this.manufacturer = "Google Inc.";
  this.model_name = "Eureka Dongle";
  this.icon_list = $icon_list$$;
};
$goog$inherits$$($castApp$core$setupApi$EurekaInfoMsgV4$Detail$$, $castApp$core$setupApi$EurekaInfoMsgV3$Detail$$);
$castApp$core$setupApi$EurekaInfoMsgV4$$.Detail = $castApp$core$setupApi$EurekaInfoMsgV4$Detail$$;
$castApp$core$setupApi$EurekaInfoMsgV4$Detail$$.Icon = function $$castApp$core$setupApi$EurekaInfoMsgV4$Detail$$$Icon$($width$jscomp$13$$, $height$jscomp$12$$, $depth$jscomp$2$$, $url$jscomp$36$$) {
  this.mimetype = "image/png";
  this.width = $width$jscomp$13$$;
  this.height = $height$jscomp$12$$;
  this.depth = $depth$jscomp$2$$;
  this.url = $url$jscomp$36$$;
};
var $castApp$core$setupApi$EurekaInfoMsgV7$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$() {
};
$goog$exportSymbol$$("castApp.core.setupApi.EurekaInfoMsgV7", $castApp$core$setupApi$EurekaInfoMsgV7$$);
var $castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$ = function $$castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$$($obj$jscomp$85$$) {
  if ($obj$jscomp$85$$.device_info) {
    var $obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$ = $obj$jscomp$85$$.device_info;
    !$obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$.hotspot_bssid && $obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$.mac_address && ($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$.hotspot_bssid = "00:1A:11:FF:" + $obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$.mac_address.substr($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$.mac_address.length - 5));
    $obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$.capabilities && ($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$ = $obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$.capabilities, $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, "display_supported", !0), $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, "wifi_supported", !0), $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, 
    "wifi_regulatory_domain_locked", !1), $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, "hotspot_supported", !0), $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, "ble_supported", !1), $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, "multizone_supported", !1));
  }
  $obj$jscomp$85$$.net && $goog$object$setIfUndefined$$($obj$jscomp$85$$.net, "ethernet_connected", !1);
  $obj$jscomp$85$$.setup && $goog$object$setIfUndefined$$($obj$jscomp$85$$.setup, "tos_accepted", !0);
  $obj$jscomp$85$$.settings && ($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$ = $obj$jscomp$85$$.settings, $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, "time_format", 1), $goog$object$setIfUndefined$$($obj$jscomp$inline_1013_obj$jscomp$inline_504_obj$jscomp$inline_510$$, "locale", "en-US"));
  return $obj$jscomp$85$$;
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.BuildInfo = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$BuildInfo$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.DeviceInfo = $castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$;
$castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$.Capabilities = function $$castApp$core$setupApi$EurekaInfoMsgV7$DeviceInfo$$$Capabilities$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.OtaStatus = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$OtaStatus$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Net = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$Net$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.WiFi = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$WiFi$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV7$Setup$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$Setup$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Setup = $castApp$core$setupApi$EurekaInfoMsgV7$Setup$$;
$castApp$core$setupApi$EurekaInfoMsgV7$Setup$$.Stats = function $$castApp$core$setupApi$EurekaInfoMsgV7$Setup$$$Stats$() {
};
var $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$Settings$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Settings = $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$;
var $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$ = function $$castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.OptIn = $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$;
$castApp$core$setupApi$EurekaInfoMsgV7$$.OpenCast = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$OpenCast$() {
};
$castApp$core$setupApi$EurekaInfoMsgV7$$.Multizone = function $$castApp$core$setupApi$EurekaInfoMsgV7$$$Multizone$() {
};
var $castApp$core$setupApi$ForgetWiFiMsg$$ = function $$castApp$core$setupApi$ForgetWiFiMsg$$$($wpa_id$jscomp$1$$) {
  this.wpa_id = $wpa_id$jscomp$1$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ForgetWiFiMsg", $castApp$core$setupApi$ForgetWiFiMsg$$);
$goog$exportSymbol$$("castApp.core.setupApi.GetAppDeviceIdRequestMsg", function($app_id$$) {
  this.app_id = $app_id$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.GetAppDeviceIdResponseMsg", function($app_device_id$$, $certificate$jscomp$4$$, $signed_data$jscomp$2$$) {
  this.app_device_id = $app_device_id$$;
  this.certificate = $certificate$jscomp$4$$;
  this.signed_data = $signed_data$jscomp$2$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.OfferMsg", function($token$jscomp$5$$) {
  this.token = $token$jscomp$5$$;
});
var $castApp$core$setupApi$PlaySoundRequestMsg$$ = function $$castApp$core$setupApi$PlaySoundRequestMsg$$$($soundId$$) {
  this.sound_id = $soundId$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.PlaySoundRequestMsg", $castApp$core$setupApi$PlaySoundRequestMsg$$);
$goog$exportSymbol$$("castApp.core.setupApi.PlaySoundResponseMsg", function($volume$$, $duration$jscomp$1$$) {
  this.volume = $volume$$;
  this.duration = $duration$jscomp$1$$;
});
var $castApp$core$setupApi$RebootMsg$$ = function $$castApp$core$setupApi$RebootMsg$$$($params$jscomp$3$$) {
  this.params = $params$jscomp$3$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.RebootMsg", $castApp$core$setupApi$RebootMsg$$);
var $castApp$core$setupApi$ScanResultMsgBase$$ = function $$castApp$core$setupApi$ScanResultMsgBase$$$($ssid$jscomp$9$$, $wpa_auth$jscomp$2$$, $wpa_cipher$jscomp$1$$, $bssid$$, $signal_level$$) {
  this.ssid = $ssid$jscomp$9$$;
  this.wpa_auth = $wpa_auth$jscomp$2$$;
  this.wpa_cipher = $wpa_cipher$jscomp$1$$;
  this.bssid = $bssid$$;
  this.signal_level = $signal_level$$;
};
$goog$exportSymbol$$("castApp.core.setupApi.ScanResultMsgBase", $castApp$core$setupApi$ScanResultMsgBase$$);
var $castApp$core$setupApi$ScanResultMsgV7$$ = function $$castApp$core$setupApi$ScanResultMsgV7$$$($ssid$jscomp$10$$, $wpa_auth$jscomp$3$$, $wpa_cipher$jscomp$2$$, $bssid$jscomp$1$$, $signal_level$jscomp$1$$, $ap_list$$) {
  $castApp$core$setupApi$ScanResultMsgBase$$.call(this, $ssid$jscomp$10$$, $wpa_auth$jscomp$3$$, $wpa_cipher$jscomp$2$$, $bssid$jscomp$1$$, $signal_level$jscomp$1$$);
  this.ap_list = $ap_list$$;
};
$goog$inherits$$($castApp$core$setupApi$ScanResultMsgV7$$, $castApp$core$setupApi$ScanResultMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.ScanResultMsgV7", $castApp$core$setupApi$ScanResultMsgV7$$);
$castApp$core$setupApi$ScanResultMsgV7$$.Ap = function $$castApp$core$setupApi$ScanResultMsgV7$$$Ap$($bssid$jscomp$2$$, $signal_level$jscomp$2$$, $frequency$$) {
  this.bssid = $bssid$jscomp$2$$;
  this.signal_level = $signal_level$jscomp$2$$;
  this.frequency = $frequency$$;
};
var $castApp$core$setupApi$SaveWiFiRequestMsg$$ = function $$castApp$core$setupApi$SaveWiFiRequestMsg$$$() {
};
$goog$exportSymbol$$("castApp.core.setupApi.SaveWiFiRequestMsg", $castApp$core$setupApi$SaveWiFiRequestMsg$$);
$goog$exportSymbol$$("castApp.core.setupApi.SaveWiFiResponseMsg", function($setup_state$jscomp$3$$) {
  this.setup_state = $setup_state$jscomp$3$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.SendLogReportRequestMsg", function($uuid$jscomp$3$$) {
  this.uuid = $uuid$jscomp$3$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.SendLogReportResponseMsg", function($crash_report_id$$) {
  this.crash_report_id = $crash_report_id$$;
});
var $castApp$core$setupApi$SetEurekaInfoMsgBase$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgBase$$$() {
};
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgBase", $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
var $castApp$core$setupApi$SetEurekaInfoMsgV3$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgV3$$$() {
};
$goog$inherits$$($castApp$core$setupApi$SetEurekaInfoMsgV3$$, $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgV3", $castApp$core$setupApi$SetEurekaInfoMsgV3$$);
var $castApp$core$setupApi$SetEurekaInfoMsgV4$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgV4$$$() {
};
$goog$inherits$$($castApp$core$setupApi$SetEurekaInfoMsgV4$$, $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgV4", $castApp$core$setupApi$SetEurekaInfoMsgV4$$);
var $castApp$core$setupApi$SetEurekaInfoMsgV7$$ = function $$castApp$core$setupApi$SetEurekaInfoMsgV7$$$() {
};
$goog$inherits$$($castApp$core$setupApi$SetEurekaInfoMsgV7$$, $castApp$core$setupApi$SetEurekaInfoMsgBase$$);
$goog$exportSymbol$$("castApp.core.setupApi.SetEurekaInfoMsgV7", $castApp$core$setupApi$SetEurekaInfoMsgV7$$);
$goog$exportSymbol$$("castApp.core.setupApi.SupportedLocale", function($locale$$, $display_string$jscomp$2$$) {
  this.locale = $locale$$;
  this.display_string = $display_string$jscomp$2$$;
});
$goog$exportSymbol$$("castApp.core.setupApi.SupportedTimeZone", function($timezone$$, $display_string$jscomp$3$$, $offset$jscomp$16$$) {
  this.timezone = $timezone$$;
  this.display_string = $display_string$jscomp$3$$;
  this.offset = $offset$jscomp$16$$;
});
var $castApp$core$storage$SetupSession$$ = function $$castApp$core$storage$SetupSession$$$($id$jscomp$38$$) {
  this.id = $id$jscomp$38$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupSession", $castApp$core$storage$SetupSession$$);
var $castApp$core$storage$CommonSetupState$$ = function $$castApp$core$storage$CommonSetupState$$$() {
};
$goog$exportSymbol$$("castApp.core.storage.CommonSetupState", $castApp$core$storage$CommonSetupState$$);
var $castApp$core$storage$DeviceToSetUp$$ = function $$castApp$core$storage$DeviceToSetUp$$$($initParams$$) {
  this.type = $initParams$$.type;
  this.name = $initParams$$.name;
  this.bssid = $initParams$$.bssid;
  this.ssid = $initParams$$.ssid;
  this.ipAddress = $initParams$$.ipAddress;
};
$goog$exportSymbol$$("castApp.core.storage.DeviceToSetUp", $castApp$core$storage$DeviceToSetUp$$);
var $castApp$core$storage$SetupApiClientState$$ = function $$castApp$core$storage$SetupApiClientState$$$($deviceIpAddress$$) {
  this.deviceIpAddress = $deviceIpAddress$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupApiClientState", $castApp$core$storage$SetupApiClientState$$);
var $castApp$core$storage$ConnectWiFiState$$ = function $$castApp$core$storage$ConnectWiFiState$$$($msg$jscomp$22$$) {
  this.msg = $msg$jscomp$22$$;
};
$goog$exportSymbol$$("castApp.core.storage.ConnectWiFiState", $castApp$core$storage$ConnectWiFiState$$);
$goog$exportSymbol$$("castApp.core.storage.EurekaInfoState", function($setupApiVersion$$, $name$jscomp$95$$, $setupState$$, $ssdpUdn$jscomp$1$$, $deviceType$jscomp$5$$, $features$jscomp$3$$, $ethernetConnected$$, $tosAccepted$$) {
  this.setupApiVersion = $setupApiVersion$$;
  this.name = $name$jscomp$95$$;
  this.setupState = $setupState$$;
  this.ssdpUdn = $ssdpUdn$jscomp$1$$;
  this.deviceType = $deviceType$jscomp$5$$;
  this.features = $features$jscomp$3$$;
  this.ethernetConnected = $ethernetConnected$$;
  this.tosAccepted = $tosAccepted$$;
});
var $castApp$core$storage$VerificationState$$ = function $$castApp$core$storage$VerificationState$$$($timeStamp$jscomp$1$$, $verificationProperties$$) {
  this.timeStamp = $timeStamp$jscomp$1$$;
  this.verificationProperties = $verificationProperties$$;
};
$goog$exportSymbol$$("castApp.core.storage.VerificationState", $castApp$core$storage$VerificationState$$);
var $castApp$core$storage$SetupState$$ = function $$castApp$core$storage$SetupState$$$($type$jscomp$114$$) {
  this.type = $type$jscomp$114$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupState", $castApp$core$storage$SetupState$$);
var $castApp$core$storage$SetupStateCollection$$ = function $$castApp$core$storage$SetupStateCollection$$$($current$jscomp$2$$, $all$jscomp$2$$) {
  this.all = $all$jscomp$2$$;
  this.current = $current$jscomp$2$$;
};
$goog$exportSymbol$$("castApp.core.storage.SetupStateCollection", $castApp$core$storage$SetupStateCollection$$);
var $castApp$core$storage$ShortTermDeviceState$$ = function $$castApp$core$storage$ShortTermDeviceState$$$($type$jscomp$115$$, $time$jscomp$2$$, $deviceId$jscomp$4$$) {
  this.type = $type$jscomp$115$$;
  this.time = $time$jscomp$2$$;
  this.deviceId = $deviceId$jscomp$4$$;
}, $castApp$core$storage$readAllSetupSessions$$ = function $$castApp$core$storage$readAllSetupSessions$$$($storage$jscomp$3$$) {
  for (var $result$jscomp$26$$ = [], $i$jscomp$137$$ = 0, $l$jscomp$21$$ = $storage$jscomp$3$$.length;$i$jscomp$137$$ < $l$jscomp$21$$;++$i$jscomp$137$$) {
    var $key$jscomp$91_storageKey$jscomp$inline_565$$ = $storage$jscomp$3$$.key($i$jscomp$137$$);
    if ($key$jscomp$91_storageKey$jscomp$inline_565$$ && 0 == $key$jscomp$91_storageKey$jscomp$inline_565$$.lastIndexOf("setupSession_", 0)) {
      var $session$$;
      a: {
        var $storage$jscomp$inline_564$$ = $storage$jscomp$3$$, $sessionData$jscomp$inline_566$$ = $storage$jscomp$inline_564$$.getItem($key$jscomp$91_storageKey$jscomp$inline_565$$);
        if ($sessionData$jscomp$inline_566$$) {
          try {
            $session$$ = JSON.parse($sessionData$jscomp$inline_566$$);
            break a;
          } catch ($e$jscomp$inline_567$$) {
            $storage$jscomp$inline_564$$.removeItem($key$jscomp$91_storageKey$jscomp$inline_565$$);
          }
        }
        $session$$ = null;
      }
      $session$$ && $result$jscomp$26$$.push($session$$);
    }
  }
  return $result$jscomp$26$$;
}, $castApp$core$storage$removeStaleSetupSessions$$ = function $$castApp$core$storage$removeStaleSetupSessions$$$() {
  var $cutoffTime$$ = $goog$now$$() - 432E5;
  $castApp$core$storage$readAllSetupSessions$$(window.localStorage).forEach(function($session$jscomp$1$$) {
    (!$session$jscomp$1$$.timestamp || $session$jscomp$1$$.timestamp < $cutoffTime$$) && window.localStorage.removeItem("setupSession_" + $session$jscomp$1$$.id);
  });
}, $castApp$core$storage$writeSetupSession$$ = function $$castApp$core$storage$writeSetupSession$$$($storage$jscomp$6$$, $session$jscomp$3$$) {
  $session$jscomp$3$$.timestamp = $goog$now$$();
  $storage$jscomp$6$$.setItem("setupSession_" + $session$jscomp$3$$.id, JSON.stringify($session$jscomp$3$$));
}, $castApp$core$storage$removeSetupSession$$ = function $$castApp$core$storage$removeSetupSession$$$($storage$jscomp$7$$, $session$jscomp$4$$) {
  $storage$jscomp$7$$.removeItem("setupSession_" + $session$jscomp$4$$.id);
}, $castApp$core$storage$readShortTermDeviceState$$ = function $$castApp$core$storage$readShortTermDeviceState$$$($storage$jscomp$10$$) {
  var $data$jscomp$43$$ = $storage$jscomp$10$$.getItem("setupDeviceState");
  if ($data$jscomp$43$$) {
    try {
      return JSON.parse($data$jscomp$43$$);
    } catch ($e$jscomp$29$$) {
      $storage$jscomp$10$$.removeItem("setupDeviceState");
    }
  }
  return [];
}, $castApp$core$storage$writeShortTermDeviceState$$ = function $$castApp$core$storage$writeShortTermDeviceState$$$($storage$jscomp$11$$, $data$jscomp$44$$) {
  0 === $data$jscomp$44$$.length ? $storage$jscomp$11$$.removeItem("setupDeviceState") : $storage$jscomp$11$$.setItem("setupDeviceState", JSON.stringify($data$jscomp$44$$));
}, $castApp$core$storage$readAutoNetworkSwitchingFlag$$ = function $$castApp$core$storage$readAutoNetworkSwitchingFlag$$$($storage$jscomp$12$$) {
  return "false" === $storage$jscomp$12$$.getItem("setupAutoNetworkSwitching") ? !1 : !0;
}, $castApp$core$storage$writeAnalyticsOptIn$$ = function $$castApp$core$storage$writeAnalyticsOptIn$$$($storage$jscomp$15$$, $value$jscomp$136$$) {
  1 === $value$jscomp$136$$ ? $storage$jscomp$15$$.removeItem("castApp.analyticsOptIn") : $storage$jscomp$15$$.setItem("castApp.analyticsOptIn", $value$jscomp$136$$.toString());
}, $castApp$core$storage$readLogSalt$$ = function $$castApp$core$storage$readLogSalt$$$($storage$jscomp$16$$, $getRandomValues$$) {
  var $hexString_newSalt$$ = $storage$jscomp$16$$.getItem("castApp.logSalt");
  if ($hexString_newSalt$$) {
    try {
      var $byteValues$$ = $hexString_newSalt$$.match(/.{1,2}/g).map(function($storage$jscomp$16$$) {
        $storage$jscomp$16$$ = Number.parseInt($storage$jscomp$16$$, 16);
        if (isNaN($storage$jscomp$16$$)) {
          throw Error();
        }
        return $storage$jscomp$16$$;
      });
      return (new Uint8Array($byteValues$$)).buffer;
    } catch ($e$jscomp$30$$) {
      $storage$jscomp$16$$.removeItem("castApp.logSalt");
    }
  }
  $hexString_newSalt$$ = new Uint8Array(new ArrayBuffer(32));
  $getRandomValues$$($hexString_newSalt$$);
  try {
    var $newSaltHexString$$ = "";
    $hexString_newSalt$$.forEach(function($storage$jscomp$16$$) {
      $newSaltHexString$$ += $storage$jscomp$16$$.toString(16);
    });
    $storage$jscomp$16$$.setItem("castApp.logSalt", $newSaltHexString$$);
  } catch ($e$2$$) {
  }
  return $hexString_newSalt$$.buffer;
};
var $castApp$core$Analytics$$ = function $$castApp$core$Analytics$$$() {
}, $castApp$core$NullAnalytics$$ = function $$castApp$core$NullAnalytics$$$() {
};
$goog$inherits$$($castApp$core$NullAnalytics$$, $castApp$core$Analytics$$);
$castApp$core$NullAnalytics$$.prototype.$b$ = function $$castApp$core$NullAnalytics$$$$$b$$() {
};
$castApp$core$NullAnalytics$$.prototype.$f$ = function $$castApp$core$NullAnalytics$$$$$f$$() {
};
$castApp$core$NullAnalytics$$.prototype.$a$ = function $$castApp$core$NullAnalytics$$$$$a$$() {
  return $goog$Promise$resolve$$(3);
};
$castApp$core$NullAnalytics$$.prototype.$h$ = function $$castApp$core$NullAnalytics$$$$$h$$() {
};
var $castApp$core$UmaAnalytics$$ = function $$castApp$core$UmaAnalytics$$$($localStorage$jscomp$1$$) {
  this.$g$ = chrome.metricsPrivate;
  this.$c$ = $localStorage$jscomp$1$$;
};
$goog$inherits$$($castApp$core$UmaAnalytics$$, $castApp$core$Analytics$$);
var $castApp$core$UmaAnalytics$logger_$$ = $castApp$log$getLogger$$("core.UmaAnalytics");
$castApp$core$UmaAnalytics$$.prototype.$b$ = function $$castApp$core$UmaAnalytics$$$$$b$$($eventType$jscomp$5_userActionName$$) {
  $eventType$jscomp$5_userActionName$$ = "Cast.Chrome.App." + $eventType$jscomp$5_userActionName$$.toString();
  $castApp$log$info$$($castApp$core$UmaAnalytics$logger_$$, "recordUserAction(" + $eventType$jscomp$5_userActionName$$ + ")");
  this.$g$.recordUserAction($eventType$jscomp$5_userActionName$$);
};
$castApp$core$UmaAnalytics$$.prototype.$f$ = function $$castApp$core$UmaAnalytics$$$$$f$$($event$jscomp$4$$) {
  var $eventTypeStr_userActionName$jscomp$1$$;
  switch($event$jscomp$4$$.eventType) {
    case 1:
      $eventTypeStr_userActionName$jscomp$1$$ = "List";
      break;
    case 2:
      $eventTypeStr_userActionName$jscomp$1$$ = "View";
      break;
    case 3:
      $eventTypeStr_userActionName$jscomp$1$$ = "Redeem";
      break;
    default:
      $castApp$log$warning$$($castApp$core$UmaAnalytics$logger_$$, "Ignoring unknown event type: " + $event$jscomp$4$$.eventType);
      return;
  }
  $eventTypeStr_userActionName$jscomp$1$$ = "Cast.Chrome.App.Offers." + $eventTypeStr_userActionName$jscomp$1$$;
  if ($goog$isDef$$($event$jscomp$4$$.offerId)) {
    if (!$goog$isNumber$$($event$jscomp$4$$.offerId) || 0 > $event$jscomp$4$$.offerId) {
      $castApp$log$warning$$($castApp$core$UmaAnalytics$logger_$$, "Ignoring invalid offer ID: " + $event$jscomp$4$$.offerId);
      return;
    }
    $eventTypeStr_userActionName$jscomp$1$$ += "." + $event$jscomp$4$$.offerId;
  }
  this.$g$.recordUserAction($eventTypeStr_userActionName$jscomp$1$$);
};
$castApp$core$UmaAnalytics$$.prototype.$a$ = function $$castApp$core$UmaAnalytics$$$$$a$$() {
  var $value$jscomp$inline_570$$ = parseInt(this.$c$.getItem("castApp.analyticsOptIn"), 10);
  if (isNaN($value$jscomp$inline_570$$) || 1 > $value$jscomp$inline_570$$ || 3 < $value$jscomp$inline_570$$) {
    $value$jscomp$inline_570$$ = 1;
  }
  return $goog$Promise$resolve$$($value$jscomp$inline_570$$);
};
$castApp$core$UmaAnalytics$$.prototype.$h$ = function $$castApp$core$UmaAnalytics$$$$$h$$($optedIn$jscomp$1$$) {
  $optedIn$jscomp$1$$ ? ($castApp$core$storage$writeAnalyticsOptIn$$(this.$c$, 2), this.$b$(1)) : ($castApp$core$storage$writeAnalyticsOptIn$$(this.$c$, 3), this.$b$(2));
};
var $goog$Disposable$$ = function $$goog$Disposable$$$() {
  this.$h$ = this.$h$;
  this.$v$ = this.$v$;
};
$goog$Disposable$$.prototype.$h$ = !1;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  this.$h$ || (this.$h$ = !0, this.$disposeInternal$());
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if (this.$v$) {
    for (;this.$v$.length;) {
      this.$v$.shift()();
    }
  }
};
var $goog$events$Event$$ = function $$goog$events$Event$$$($type$jscomp$116$$, $opt_target$jscomp$2$$) {
  this.type = $type$jscomp$116$$;
  this.$b$ = this.$c$ = $opt_target$jscomp$2$$;
  this.$returnValue_$ = !0;
};
$goog$events$Event$$.prototype.$f$ = function $$goog$events$Event$$$$$f$$() {
  this.$returnValue_$ = !1;
};
var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || 9 <= Number($JSCompiler_inline_result$jscomp$15$$), $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersionOrHigher$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersionOrHigher$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
var $goog$events$BrowserEvent$$ = function $$goog$events$BrowserEvent$$$($opt_e$$, $opt_currentTarget_relatedTarget$jscomp$inline_576$$) {
  $goog$events$Event$$.call(this, $opt_e$$ ? $opt_e$$.type : "");
  this.$b$ = this.$c$ = null;
  this.button = 0;
  this.$a$ = this.state = null;
  if ($opt_e$$) {
    this.type = $opt_e$$.type;
    this.$c$ = $opt_e$$.target || $opt_e$$.srcElement;
    this.$b$ = $opt_currentTarget_relatedTarget$jscomp$inline_576$$;
    if (($opt_currentTarget_relatedTarget$jscomp$inline_576$$ = $opt_e$$.relatedTarget) && $goog$userAgent$GECKO$$) {
      try {
        $goog$reflect$sinkValue$$($opt_currentTarget_relatedTarget$jscomp$inline_576$$.nodeName);
      } catch ($e$jscomp$inline_1016$$) {
      }
    }
    this.button = $opt_e$$.button;
    this.state = $opt_e$$.state;
    this.$a$ = $opt_e$$;
    $opt_e$$.defaultPrevented && this.$f$();
  }
};
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
$goog$events$BrowserEvent$$.prototype.$f$ = function $$goog$events$BrowserEvent$$$$$f$$() {
  $goog$events$BrowserEvent$$.$superClass_$.$f$.call(this);
  var $be$$ = this.$a$;
  if ($be$$.preventDefault) {
    $be$$.preventDefault();
  } else {
    if ($be$$.returnValue = !1, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if ($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1;
        }
      } catch ($ex$jscomp$7$$) {
      }
    }
  }
};
var $goog$events$Listenable$IMPLEMENTED_BY_PROP$$ = "closure_listenable_" + (1e6 * Math.random() | 0), $goog$events$Listenable$isImplementedBy$$ = function $$goog$events$Listenable$isImplementedBy$$$($obj$jscomp$96$$) {
  return !(!$obj$jscomp$96$$ || !$obj$jscomp$96$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]);
}, $goog$events$ListenableKey$counter_$$ = 0;
var $goog$events$Listener$$ = function $$goog$events$Listener$$$($listener$jscomp$74$$, $src$jscomp$13$$, $type$jscomp$118$$, $capture$$, $opt_handler$$) {
  this.listener = $listener$jscomp$74$$;
  this.proxy = null;
  this.src = $src$jscomp$13$$;
  this.type = $type$jscomp$118$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$goog_events_ListenableKey_prototype$key$ = ++$goog$events$ListenableKey$counter_$$;
  this.removed = this.$callOnce$ = !1;
}, $JSCompiler_StaticMethods_markAsRemoved$$ = function $$JSCompiler_StaticMethods_markAsRemoved$$$($JSCompiler_StaticMethods_markAsRemoved$self$$) {
  $JSCompiler_StaticMethods_markAsRemoved$self$$.removed = !0;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.listener = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.proxy = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.src = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$handler$ = null;
};
var $goog$events$ListenerMap$$ = function $$goog$events$ListenerMap$$$($src$jscomp$14$$) {
  this.src = $src$jscomp$14$$;
  this.$a$ = {};
  this.$b$ = 0;
}, $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$$ = function $$JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$$$($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$, $listenerArray_type$jscomp$120$$, $listener$jscomp$75$$, $callOnce$$, $opt_useCapture$jscomp$40$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$jscomp$120$$.toString();
  $listenerArray_type$jscomp$120$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$.$a$[$typeStr$$];
  $listenerArray_type$jscomp$120$$ || ($listenerArray_type$jscomp$120$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$.$a$[$typeStr$$] = [], $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$.$b$++);
  var $index$jscomp$67$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray_type$jscomp$120$$, $listener$jscomp$75$$, $opt_useCapture$jscomp$40$$, $opt_listenerScope$$);
  -1 < $index$jscomp$67$$ ? ($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$ = $listenerArray_type$jscomp$120$$[$index$jscomp$67$$], $callOnce$$ || ($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$.$callOnce$ = !1)) : ($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$ = new $goog$events$Listener$$($listener$jscomp$75$$, $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$.src, 
  $typeStr$$, !!$opt_useCapture$jscomp$40$$, $opt_listenerScope$$), $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$jscomp$120$$.push($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$));
  return $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$self_listenerObj$$;
};
$goog$events$ListenerMap$$.prototype.remove = function $$goog$events$ListenerMap$$$$remove$($type$jscomp$121_typeStr$jscomp$1$$, $index$jscomp$68_listener$jscomp$76$$, $opt_useCapture$jscomp$41$$, $opt_listenerScope$jscomp$1$$) {
  $type$jscomp$121_typeStr$jscomp$1$$ = $type$jscomp$121_typeStr$jscomp$1$$.toString();
  if (!($type$jscomp$121_typeStr$jscomp$1$$ in this.$a$)) {
    return !1;
  }
  var $listenerArray$jscomp$1$$ = this.$a$[$type$jscomp$121_typeStr$jscomp$1$$];
  $index$jscomp$68_listener$jscomp$76$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$jscomp$1$$, $index$jscomp$68_listener$jscomp$76$$, $opt_useCapture$jscomp$41$$, $opt_listenerScope$jscomp$1$$);
  return -1 < $index$jscomp$68_listener$jscomp$76$$ ? ($JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$jscomp$1$$[$index$jscomp$68_listener$jscomp$76$$]), $goog$array$removeAt$$($listenerArray$jscomp$1$$, $index$jscomp$68_listener$jscomp$76$$), 0 == $listenerArray$jscomp$1$$.length && (delete this.$a$[$type$jscomp$121_typeStr$jscomp$1$$], this.$b$--), !0) : !1;
};
var $JSCompiler_StaticMethods_removeByKey$$ = function $$JSCompiler_StaticMethods_removeByKey$$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$jscomp$77$$) {
  var $type$jscomp$122$$ = $listener$jscomp$77$$.type;
  $type$jscomp$122$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$a$ && $goog$array$remove$$($JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$jscomp$122$$], $listener$jscomp$77$$) && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$jscomp$77$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$jscomp$122$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$a$[$type$jscomp$122$$], $JSCompiler_StaticMethods_removeByKey$self$$.$b$--));
};
$goog$events$ListenerMap$$.prototype.removeAll = function $$goog$events$ListenerMap$$$$removeAll$($opt_type$jscomp$8_typeStr$jscomp$2$$) {
  $opt_type$jscomp$8_typeStr$jscomp$2$$ = $opt_type$jscomp$8_typeStr$jscomp$2$$ && $opt_type$jscomp$8_typeStr$jscomp$2$$.toString();
  var $count$jscomp$14$$ = 0, $type$jscomp$123$$;
  for ($type$jscomp$123$$ in this.$a$) {
    if (!$opt_type$jscomp$8_typeStr$jscomp$2$$ || $type$jscomp$123$$ == $opt_type$jscomp$8_typeStr$jscomp$2$$) {
      for (var $listenerArray$jscomp$2$$ = this.$a$[$type$jscomp$123$$], $i$jscomp$139$$ = 0;$i$jscomp$139$$ < $listenerArray$jscomp$2$$.length;$i$jscomp$139$$++) {
        ++$count$jscomp$14$$, $JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$jscomp$2$$[$i$jscomp$139$$]);
      }
      delete this.$a$[$type$jscomp$123$$];
      this.$b$--;
    }
  }
  return $count$jscomp$14$$;
};
var $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$ = function $$JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$$($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$, $i$jscomp$141_type$jscomp$125$$, $listener$jscomp$78$$, $capture$jscomp$2$$, $opt_listenerScope$jscomp$2$$) {
  $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$.$a$[$i$jscomp$141_type$jscomp$125$$.toString()];
  $i$jscomp$141_type$jscomp$125$$ = -1;
  $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$ && ($i$jscomp$141_type$jscomp$125$$ = $goog$events$ListenerMap$findListenerIndex_$$($JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$, $listener$jscomp$78$$, $capture$jscomp$2$$, $opt_listenerScope$jscomp$2$$));
  return -1 < $i$jscomp$141_type$jscomp$125$$ ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$self_listenerArray$jscomp$4$$[$i$jscomp$141_type$jscomp$125$$] : null;
};
$goog$events$ListenerMap$$.prototype.hasListener = function $$goog$events$ListenerMap$$$$hasListener$($opt_type$jscomp$9$$, $opt_capture$$) {
  var $hasType$$ = $goog$isDef$$($opt_type$jscomp$9$$), $typeStr$jscomp$3$$ = $hasType$$ ? $opt_type$jscomp$9$$.toString() : "", $hasCapture$$ = $goog$isDef$$($opt_capture$$);
  return $goog$object$some$$(this.$a$, function($opt_type$jscomp$9$$) {
    for (var $listenerArray$jscomp$5$$ = 0;$listenerArray$jscomp$5$$ < $opt_type$jscomp$9$$.length;++$listenerArray$jscomp$5$$) {
      if (!($hasType$$ && $opt_type$jscomp$9$$[$listenerArray$jscomp$5$$].type != $typeStr$jscomp$3$$ || $hasCapture$$ && $opt_type$jscomp$9$$[$listenerArray$jscomp$5$$].capture != $opt_capture$$)) {
        return !0;
      }
    }
    return !1;
  });
};
var $goog$events$ListenerMap$findListenerIndex_$$ = function $$goog$events$ListenerMap$findListenerIndex_$$$($listenerArray$jscomp$6$$, $listener$jscomp$79$$, $opt_useCapture$jscomp$42$$, $opt_listenerScope$jscomp$3$$) {
  for (var $i$jscomp$143$$ = 0;$i$jscomp$143$$ < $listenerArray$jscomp$6$$.length;++$i$jscomp$143$$) {
    var $listenerObj$jscomp$3$$ = $listenerArray$jscomp$6$$[$i$jscomp$143$$];
    if (!$listenerObj$jscomp$3$$.removed && $listenerObj$jscomp$3$$.listener == $listener$jscomp$79$$ && $listenerObj$jscomp$3$$.capture == !!$opt_useCapture$jscomp$42$$ && $listenerObj$jscomp$3$$.$handler$ == $opt_listenerScope$jscomp$3$$) {
      return $i$jscomp$143$$;
    }
  }
  return -1;
};
var $goog$events$LISTENER_MAP_PROP_$$ = "closure_lm_" + (1e6 * Math.random() | 0), $goog$events$onStringMap_$$ = {}, $goog$events$listenerCountEstimate_$$ = 0, $goog$events$listen$$ = function $$goog$events$listen$$$($src$jscomp$15$$, $type$jscomp$127$$, $listener$jscomp$80$$, $opt_capt$$, $opt_handler$jscomp$1$$) {
  if ($goog$isArray$$($type$jscomp$127$$)) {
    for (var $i$jscomp$144$$ = 0;$i$jscomp$144$$ < $type$jscomp$127$$.length;$i$jscomp$144$$++) {
      $goog$events$listen$$($src$jscomp$15$$, $type$jscomp$127$$[$i$jscomp$144$$], $listener$jscomp$80$$, $opt_capt$$, $opt_handler$jscomp$1$$);
    }
    return null;
  }
  $listener$jscomp$80$$ = $goog$events$wrapListener$$($listener$jscomp$80$$);
  return $goog$events$Listenable$isImplementedBy$$($src$jscomp$15$$) ? $src$jscomp$15$$.listen($type$jscomp$127$$, $listener$jscomp$80$$, $opt_capt$$, $opt_handler$jscomp$1$$) : $goog$events$listen_$$($src$jscomp$15$$, $type$jscomp$127$$, $listener$jscomp$80$$, !1, $opt_capt$$, $opt_handler$jscomp$1$$);
}, $goog$events$listen_$$ = function $$goog$events$listen_$$$($src$jscomp$16$$, $type$jscomp$128$$, $listener$jscomp$81_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$1$$, $opt_capt$jscomp$1$$, $opt_handler$jscomp$2$$) {
  if (!$type$jscomp$128$$) {
    throw Error("Invalid event type");
  }
  var $capture$jscomp$3$$ = !!$opt_capt$jscomp$1$$, $listenerMap$$ = $goog$events$getListenerMap_$$($src$jscomp$16$$);
  $listenerMap$$ || ($src$jscomp$16$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerMap$$ = new $goog$events$ListenerMap$$($src$jscomp$16$$));
  $listener$jscomp$81_listenerObj$jscomp$4$$ = $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$$($listenerMap$$, $type$jscomp$128$$, $listener$jscomp$81_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$1$$, $opt_capt$jscomp$1$$, $opt_handler$jscomp$2$$);
  if ($listener$jscomp$81_listenerObj$jscomp$4$$.proxy) {
    return $listener$jscomp$81_listenerObj$jscomp$4$$;
  }
  $callOnce$jscomp$1_proxy$jscomp$1$$ = $goog$events$getProxy$$();
  $listener$jscomp$81_listenerObj$jscomp$4$$.proxy = $callOnce$jscomp$1_proxy$jscomp$1$$;
  $callOnce$jscomp$1_proxy$jscomp$1$$.src = $src$jscomp$16$$;
  $callOnce$jscomp$1_proxy$jscomp$1$$.listener = $listener$jscomp$81_listenerObj$jscomp$4$$;
  if ($src$jscomp$16$$.addEventListener) {
    $src$jscomp$16$$.addEventListener($type$jscomp$128$$.toString(), $callOnce$jscomp$1_proxy$jscomp$1$$, $capture$jscomp$3$$);
  } else {
    if ($src$jscomp$16$$.attachEvent) {
      $src$jscomp$16$$.attachEvent($goog$events$getOnString_$$($type$jscomp$128$$.toString()), $callOnce$jscomp$1_proxy$jscomp$1$$);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  $goog$events$listenerCountEstimate_$$++;
  return $listener$jscomp$81_listenerObj$jscomp$4$$;
}, $goog$events$getProxy$$ = function $$goog$events$getProxy$$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$jscomp$55$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$jscomp$55$$.src, $f$jscomp$55$$.listener, $eventObject$$);
  } : function($eventObject$jscomp$1_v$jscomp$1$$) {
    $eventObject$jscomp$1_v$jscomp$1$$ = $proxyCallbackFunction$$.call($f$jscomp$55$$.src, $f$jscomp$55$$.listener, $eventObject$jscomp$1_v$jscomp$1$$);
    if (!$eventObject$jscomp$1_v$jscomp$1$$) {
      return $eventObject$jscomp$1_v$jscomp$1$$;
    }
  };
  return $f$jscomp$55$$;
}, $goog$events$listenOnce$$ = function $$goog$events$listenOnce$$$($src$jscomp$17$$, $type$jscomp$129$$, $listener$jscomp$82$$, $opt_capt$jscomp$2$$, $opt_handler$jscomp$3$$) {
  if ($goog$isArray$$($type$jscomp$129$$)) {
    for (var $i$jscomp$145$$ = 0;$i$jscomp$145$$ < $type$jscomp$129$$.length;$i$jscomp$145$$++) {
      $goog$events$listenOnce$$($src$jscomp$17$$, $type$jscomp$129$$[$i$jscomp$145$$], $listener$jscomp$82$$, $opt_capt$jscomp$2$$, $opt_handler$jscomp$3$$);
    }
  } else {
    $listener$jscomp$82$$ = $goog$events$wrapListener$$($listener$jscomp$82$$), $goog$events$Listenable$isImplementedBy$$($src$jscomp$17$$) ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$$($src$jscomp$17$$.$c$, String($type$jscomp$129$$), $listener$jscomp$82$$, !0, $opt_capt$jscomp$2$$, $opt_handler$jscomp$3$$) : $goog$events$listen_$$($src$jscomp$17$$, $type$jscomp$129$$, $listener$jscomp$82$$, !0, $opt_capt$jscomp$2$$, $opt_handler$jscomp$3$$);
  }
}, $goog$events$unlisten$$ = function $$goog$events$unlisten$$$($listenerMap$jscomp$1_src$jscomp$19$$, $listenerObj$jscomp$5_type$jscomp$130$$, $listener$jscomp$84$$, $opt_capt$jscomp$4$$, $opt_handler$jscomp$5$$) {
  if ($goog$isArray$$($listenerObj$jscomp$5_type$jscomp$130$$)) {
    for (var $i$jscomp$146$$ = 0;$i$jscomp$146$$ < $listenerObj$jscomp$5_type$jscomp$130$$.length;$i$jscomp$146$$++) {
      $goog$events$unlisten$$($listenerMap$jscomp$1_src$jscomp$19$$, $listenerObj$jscomp$5_type$jscomp$130$$[$i$jscomp$146$$], $listener$jscomp$84$$, $opt_capt$jscomp$4$$, $opt_handler$jscomp$5$$);
    }
  } else {
    $listener$jscomp$84$$ = $goog$events$wrapListener$$($listener$jscomp$84$$), $goog$events$Listenable$isImplementedBy$$($listenerMap$jscomp$1_src$jscomp$19$$) ? $listenerMap$jscomp$1_src$jscomp$19$$.$unlisten$($listenerObj$jscomp$5_type$jscomp$130$$, $listener$jscomp$84$$, $opt_capt$jscomp$4$$, $opt_handler$jscomp$5$$) : $listenerMap$jscomp$1_src$jscomp$19$$ && ($listenerMap$jscomp$1_src$jscomp$19$$ = $goog$events$getListenerMap_$$($listenerMap$jscomp$1_src$jscomp$19$$)) && ($listenerObj$jscomp$5_type$jscomp$130$$ = 
    $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$jscomp$1_src$jscomp$19$$, $listenerObj$jscomp$5_type$jscomp$130$$, $listener$jscomp$84$$, !!$opt_capt$jscomp$4$$, $opt_handler$jscomp$5$$)) && $goog$events$unlistenByKey$$($listenerObj$jscomp$5_type$jscomp$130$$);
  }
}, $goog$events$unlistenByKey$$ = function $$goog$events$unlistenByKey$$$($key$jscomp$92$$) {
  if (!$goog$isNumber$$($key$jscomp$92$$) && $key$jscomp$92$$ && !$key$jscomp$92$$.removed) {
    var $src$jscomp$20$$ = $key$jscomp$92$$.src;
    if ($goog$events$Listenable$isImplementedBy$$($src$jscomp$20$$)) {
      $JSCompiler_StaticMethods_removeByKey$$($src$jscomp$20$$.$c$, $key$jscomp$92$$);
    } else {
      var $listenerMap$jscomp$2_type$jscomp$131$$ = $key$jscomp$92$$.type, $proxy$jscomp$2$$ = $key$jscomp$92$$.proxy;
      $src$jscomp$20$$.removeEventListener ? $src$jscomp$20$$.removeEventListener($listenerMap$jscomp$2_type$jscomp$131$$, $proxy$jscomp$2$$, $key$jscomp$92$$.capture) : $src$jscomp$20$$.detachEvent && $src$jscomp$20$$.detachEvent($goog$events$getOnString_$$($listenerMap$jscomp$2_type$jscomp$131$$), $proxy$jscomp$2$$);
      $goog$events$listenerCountEstimate_$$--;
      ($listenerMap$jscomp$2_type$jscomp$131$$ = $goog$events$getListenerMap_$$($src$jscomp$20$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$jscomp$2_type$jscomp$131$$, $key$jscomp$92$$), 0 == $listenerMap$jscomp$2_type$jscomp$131$$.$b$ && ($listenerMap$jscomp$2_type$jscomp$131$$.src = null, $src$jscomp$20$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$jscomp$92$$);
    }
  }
}, $goog$events$getOnString_$$ = function $$goog$events$getOnString_$$$($type$jscomp$135$$) {
  return $type$jscomp$135$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$jscomp$135$$] : $goog$events$onStringMap_$$[$type$jscomp$135$$] = "on" + $type$jscomp$135$$;
}, $goog$events$fireListeners_$$ = function $$goog$events$fireListeners_$$$($i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$, $listenerArray$jscomp$7_type$jscomp$137$$, $capture$jscomp$8$$, $eventObject$jscomp$3$$) {
  var $retval$$ = !0;
  if ($i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$ = $goog$events$getListenerMap_$$($i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$)) {
    if ($listenerArray$jscomp$7_type$jscomp$137$$ = $i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$.$a$[$listenerArray$jscomp$7_type$jscomp$137$$.toString()]) {
      for ($listenerArray$jscomp$7_type$jscomp$137$$ = $listenerArray$jscomp$7_type$jscomp$137$$.concat(), $i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$ = 0;$i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$ < $listenerArray$jscomp$7_type$jscomp$137$$.length;$i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$++) {
        var $listener$jscomp$88_result$jscomp$27$$ = $listenerArray$jscomp$7_type$jscomp$137$$[$i$jscomp$148_listenerMap$jscomp$7_obj$jscomp$101$$];
        $listener$jscomp$88_result$jscomp$27$$ && $listener$jscomp$88_result$jscomp$27$$.capture == $capture$jscomp$8$$ && !$listener$jscomp$88_result$jscomp$27$$.removed && ($listener$jscomp$88_result$jscomp$27$$ = $goog$events$fireListener$$($listener$jscomp$88_result$jscomp$27$$, $eventObject$jscomp$3$$), $retval$$ = $retval$$ && !1 !== $listener$jscomp$88_result$jscomp$27$$);
      }
    }
  }
  return $retval$$;
}, $goog$events$fireListener$$ = function $$goog$events$fireListener$$$($listener$jscomp$89$$, $eventObject$jscomp$4$$) {
  var $listenerFn$$ = $listener$jscomp$89$$.listener, $listenerHandler$$ = $listener$jscomp$89$$.$handler$ || $listener$jscomp$89$$.src;
  $listener$jscomp$89$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$jscomp$89$$);
  return $listenerFn$$.call($listenerHandler$$, $eventObject$jscomp$4$$);
}, $goog$events$handleBrowserEvent_$$ = function $$goog$events$handleBrowserEvent_$$$($listener$jscomp$90_type$jscomp$138$$, $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$) {
  if ($listener$jscomp$90_type$jscomp$138$$.removed) {
    return !0;
  }
  if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    if (!$JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$) {
      a: {
        $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$ = ["window", "event"];
        for (var $cur$jscomp$inline_581_retval$jscomp$1$$ = $goog$global$$, $ancestors_ieEvent_part$jscomp$inline_582$$;$ancestors_ieEvent_part$jscomp$inline_582$$ = $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$.shift();) {
          if (null != $cur$jscomp$inline_581_retval$jscomp$1$$[$ancestors_ieEvent_part$jscomp$inline_582$$]) {
            $cur$jscomp$inline_581_retval$jscomp$1$$ = $cur$jscomp$inline_581_retval$jscomp$1$$[$ancestors_ieEvent_part$jscomp$inline_582$$];
          } else {
            $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$ = null;
            break a;
          }
        }
        $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$ = $cur$jscomp$inline_581_retval$jscomp$1$$;
      }
    }
    $ancestors_ieEvent_part$jscomp$inline_582$$ = $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$;
    $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$ = new $goog$events$BrowserEvent$$($ancestors_ieEvent_part$jscomp$inline_582$$, this);
    $cur$jscomp$inline_581_retval$jscomp$1$$ = !0;
    if (!(0 > $ancestors_ieEvent_part$jscomp$inline_582$$.keyCode || void 0 != $ancestors_ieEvent_part$jscomp$inline_582$$.returnValue)) {
      a: {
        var $i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ = !1;
        if (0 == $ancestors_ieEvent_part$jscomp$inline_582$$.keyCode) {
          try {
            $ancestors_ieEvent_part$jscomp$inline_582$$.keyCode = -1;
            break a;
          } catch ($ex$jscomp$inline_586$$) {
            $i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ = !0;
          }
        }
        if ($i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ || void 0 == $ancestors_ieEvent_part$jscomp$inline_582$$.returnValue) {
          $ancestors_ieEvent_part$jscomp$inline_582$$.returnValue = !0;
        }
      }
      $ancestors_ieEvent_part$jscomp$inline_582$$ = [];
      for ($i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ = $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$.$b$;$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$;$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ = $i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$.parentNode) {
        $ancestors_ieEvent_part$jscomp$inline_582$$.push($i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$);
      }
      $listener$jscomp$90_type$jscomp$138$$ = $listener$jscomp$90_type$jscomp$138$$.type;
      for ($i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ = $ancestors_ieEvent_part$jscomp$inline_582$$.length - 1;0 <= $i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$;$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$--) {
        $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$.$b$ = $ancestors_ieEvent_part$jscomp$inline_582$$[$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$];
        var $result$jscomp$28$$ = $goog$events$fireListeners_$$($ancestors_ieEvent_part$jscomp$inline_582$$[$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$], $listener$jscomp$90_type$jscomp$138$$, !0, $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$), $cur$jscomp$inline_581_retval$jscomp$1$$ = $cur$jscomp$inline_581_retval$jscomp$1$$ && $result$jscomp$28$$;
      }
      for ($i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ = 0;$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$ < $ancestors_ieEvent_part$jscomp$inline_582$$.length;$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$++) {
        $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$.$b$ = $ancestors_ieEvent_part$jscomp$inline_582$$[$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$], $result$jscomp$28$$ = $goog$events$fireListeners_$$($ancestors_ieEvent_part$jscomp$inline_582$$[$i$jscomp$149_parent$jscomp$3_useReturnValue$jscomp$inline_585$$], $listener$jscomp$90_type$jscomp$138$$, !1, $JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$), $cur$jscomp$inline_581_retval$jscomp$1$$ = 
        $cur$jscomp$inline_581_retval$jscomp$1$$ && $result$jscomp$28$$;
      }
    }
    return $cur$jscomp$inline_581_retval$jscomp$1$$;
  }
  return $goog$events$fireListener$$($listener$jscomp$90_type$jscomp$138$$, new $goog$events$BrowserEvent$$($JSCompiler_temp$jscomp$5_evt$jscomp$25_opt_evt_parts$jscomp$inline_580$$, this));
}, $goog$events$getListenerMap_$$ = function $$goog$events$getListenerMap_$$$($listenerMap$jscomp$8_src$jscomp$24$$) {
  $listenerMap$jscomp$8_src$jscomp$24$$ = $listenerMap$jscomp$8_src$jscomp$24$$[$goog$events$LISTENER_MAP_PROP_$$];
  return $listenerMap$jscomp$8_src$jscomp$24$$ instanceof $goog$events$ListenerMap$$ ? $listenerMap$jscomp$8_src$jscomp$24$$ : null;
}, $goog$events$LISTENER_WRAPPER_PROP_$$ = "__closure_events_fn_" + (1e9 * Math.random() >>> 0), $goog$events$wrapListener$$ = function $$goog$events$wrapListener$$$($listener$jscomp$91$$) {
  if ($goog$isFunction$$($listener$jscomp$91$$)) {
    return $listener$jscomp$91$$;
  }
  $listener$jscomp$91$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$jscomp$91$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function $$listener$jscomp$91$$$$goog$events$LISTENER_WRAPPER_PROP_$$$($e$jscomp$38$$) {
    return $listener$jscomp$91$$.handleEvent($e$jscomp$38$$);
  });
  return $listener$jscomp$91$$[$goog$events$LISTENER_WRAPPER_PROP_$$];
};
var $goog$events$EventTarget$$ = function $$goog$events$EventTarget$$$() {
  $goog$Disposable$$.call(this);
  this.$c$ = new $goog$events$ListenerMap$$(this);
  this.$K$ = this;
  this.$G$ = null;
};
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$goog$events$EventTarget$$.prototype[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] = !0;
$goog$events$EventTarget$$.prototype.removeEventListener = function $$goog$events$EventTarget$$$$removeEventListener$($type$jscomp$140$$, $handler$jscomp$11$$, $opt_capture$jscomp$3$$, $opt_handlerScope$jscomp$1$$) {
  $goog$events$unlisten$$(this, $type$jscomp$140$$, $handler$jscomp$11$$, $opt_capture$jscomp$3$$, $opt_handlerScope$jscomp$1$$);
};
var $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$ = function $$JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$$($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$, $e$jscomp$39_e$jscomp$inline_591$$) {
  var $ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$, $ancestor_type$jscomp$inline_593$$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$.$G$;
  if ($ancestor_type$jscomp$inline_593$$) {
    for ($ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$ = [];$ancestor_type$jscomp$inline_593$$;$ancestor_type$jscomp$inline_593$$ = $ancestor_type$jscomp$inline_593$$.$G$) {
      $ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$.push($ancestor_type$jscomp$inline_593$$);
    }
  }
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$.$K$;
  $ancestor_type$jscomp$inline_593$$ = $e$jscomp$39_e$jscomp$inline_591$$.type || $e$jscomp$39_e$jscomp$inline_591$$;
  if ($goog$isString$$($e$jscomp$39_e$jscomp$inline_591$$)) {
    $e$jscomp$39_e$jscomp$inline_591$$ = new $goog$events$Event$$($e$jscomp$39_e$jscomp$inline_591$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$);
  } else {
    if ($e$jscomp$39_e$jscomp$inline_591$$ instanceof $goog$events$Event$$) {
      $e$jscomp$39_e$jscomp$inline_591$$.$c$ = $e$jscomp$39_e$jscomp$inline_591$$.$c$ || $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$;
    } else {
      var $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$ = $e$jscomp$39_e$jscomp$inline_591$$;
      $e$jscomp$39_e$jscomp$inline_591$$ = new $goog$events$Event$$($ancestor_type$jscomp$inline_593$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$);
      $goog$object$extend$$($e$jscomp$39_e$jscomp$inline_591$$, $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$);
    }
  }
  var $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$ = !0, $currentTarget$jscomp$inline_596$$;
  if ($ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$) {
    for (var $i$jscomp$inline_597$$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$.length - 1;0 <= $i$jscomp$inline_597$$;$i$jscomp$inline_597$$--) {
      $currentTarget$jscomp$inline_596$$ = $e$jscomp$39_e$jscomp$inline_591$$.$b$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$[$i$jscomp$inline_597$$], $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_596$$, $ancestor_type$jscomp$inline_593$$, !0, $e$jscomp$39_e$jscomp$inline_591$$) && $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$;
    }
  }
  $currentTarget$jscomp$inline_596$$ = $e$jscomp$39_e$jscomp$inline_591$$.$b$ = $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$self_target$jscomp$inline_590$$;
  $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_596$$, $ancestor_type$jscomp$inline_593$$, !0, $e$jscomp$39_e$jscomp$inline_591$$) && $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$;
  $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_596$$, $ancestor_type$jscomp$inline_593$$, !1, $e$jscomp$39_e$jscomp$inline_591$$) && $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$;
  if ($ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$) {
    for ($i$jscomp$inline_597$$ = 0;$i$jscomp$inline_597$$ < $ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$.length;$i$jscomp$inline_597$$++) {
      $currentTarget$jscomp$inline_596$$ = $e$jscomp$39_e$jscomp$inline_591$$.$b$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_592$$[$i$jscomp$inline_597$$], $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_596$$, $ancestor_type$jscomp$inline_593$$, !1, $e$jscomp$39_e$jscomp$inline_591$$) && $oldEvent$jscomp$inline_594_rv$jscomp$inline_595$$;
    }
  }
};
$goog$events$EventTarget$$.prototype.$disposeInternal$ = function $$goog$events$EventTarget$$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  this.$c$ && this.$c$.removeAll(void 0);
  this.$G$ = null;
};
$goog$events$EventTarget$$.prototype.listen = function $$goog$events$EventTarget$$$$listen$($type$jscomp$141$$, $listener$jscomp$92$$, $opt_useCapture$jscomp$43$$, $opt_listenerScope$jscomp$4$$) {
  return $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$add$$(this.$c$, String($type$jscomp$141$$), $listener$jscomp$92$$, !1, $opt_useCapture$jscomp$43$$, $opt_listenerScope$jscomp$4$$);
};
$goog$events$EventTarget$$.prototype.$unlisten$ = function $$goog$events$EventTarget$$$$$unlisten$$($type$jscomp$143$$, $listener$jscomp$94$$, $opt_useCapture$jscomp$45$$, $opt_listenerScope$jscomp$6$$) {
  return this.$c$.remove(String($type$jscomp$143$$), $listener$jscomp$94$$, $opt_useCapture$jscomp$45$$, $opt_listenerScope$jscomp$6$$);
};
var $JSCompiler_StaticMethods_fireListeners$$ = function $$JSCompiler_StaticMethods_fireListeners$$$($JSCompiler_StaticMethods_fireListeners$self$$, $listenerArray$jscomp$8_type$jscomp$144$$, $capture$jscomp$9$$, $eventObject$jscomp$5$$) {
  $listenerArray$jscomp$8_type$jscomp$144$$ = $JSCompiler_StaticMethods_fireListeners$self$$.$c$.$a$[String($listenerArray$jscomp$8_type$jscomp$144$$)];
  if (!$listenerArray$jscomp$8_type$jscomp$144$$) {
    return !0;
  }
  $listenerArray$jscomp$8_type$jscomp$144$$ = $listenerArray$jscomp$8_type$jscomp$144$$.concat();
  for (var $rv$jscomp$18$$ = !0, $i$jscomp$150$$ = 0;$i$jscomp$150$$ < $listenerArray$jscomp$8_type$jscomp$144$$.length;++$i$jscomp$150$$) {
    var $listener$jscomp$95$$ = $listenerArray$jscomp$8_type$jscomp$144$$[$i$jscomp$150$$];
    if ($listener$jscomp$95$$ && !$listener$jscomp$95$$.removed && $listener$jscomp$95$$.capture == $capture$jscomp$9$$) {
      var $listenerFn$jscomp$1$$ = $listener$jscomp$95$$.listener, $listenerHandler$jscomp$1$$ = $listener$jscomp$95$$.$handler$ || $listener$jscomp$95$$.src;
      $listener$jscomp$95$$.$callOnce$ && $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_fireListeners$self$$.$c$, $listener$jscomp$95$$);
      $rv$jscomp$18$$ = !1 !== $listenerFn$jscomp$1$$.call($listenerHandler$jscomp$1$$, $eventObject$jscomp$5$$) && $rv$jscomp$18$$;
    }
  }
  return $rv$jscomp$18$$ && 0 != $eventObject$jscomp$5$$.$returnValue_$;
};
$goog$events$EventTarget$$.prototype.hasListener = function $$goog$events$EventTarget$$$$hasListener$($opt_type$jscomp$13$$, $opt_capture$jscomp$4$$) {
  return this.$c$.hasListener($goog$isDef$$($opt_type$jscomp$13$$) ? String($opt_type$jscomp$13$$) : void 0, $opt_capture$jscomp$4$$);
};
var $castApp$TimeoutError$$ = function $$castApp$TimeoutError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$TimeoutError$$, $goog$debug$Error$$);
$castApp$TimeoutError$$.prototype.name = "httpTimeout";
var $castApp$utils$logger_$$ = $castApp$log$getLogger$$("utils"), $castApp$utils$waitForEvent$$ = function $$castApp$utils$waitForEvent$$$($eventTarget$$, $eventType$jscomp$6$$) {
  var $resolver$jscomp$3$$ = $goog$Promise$withResolver$$(), $listener$jscomp$97$$ = function $$listener$jscomp$97$$$($eventTarget$$) {
    $resolver$jscomp$3$$.$b$($eventTarget$$);
  };
  $eventTarget$$.listen($eventType$jscomp$6$$, $listener$jscomp$97$$);
  return $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$3$$.$a$, function() {
    $eventTarget$$.$unlisten$($eventType$jscomp$6$$, $listener$jscomp$97$$);
  });
}, $castApp$utils$rethrowIfCancellationError$$ = function $$castApp$utils$rethrowIfCancellationError$$$($err$jscomp$17$$) {
  if ($err$jscomp$17$$ instanceof $goog$Promise$CancellationError$$) {
    throw $err$jscomp$17$$;
  }
}, $castApp$utils$logError$$ = function $$castApp$utils$logError$$$($logger$jscomp$20$$, $msg$jscomp$23$$, $err$jscomp$18$$) {
  $castApp$log$error$$($logger$jscomp$20$$, $msg$jscomp$23$$);
  $err$jscomp$18$$ instanceof Error ? $castApp$log$error$$($logger$jscomp$20$$, $err$jscomp$18$$.stack) : $castApp$log$error$$($logger$jscomp$20$$, String($err$jscomp$18$$));
}, $castApp$utils$setPromiseExpiration$$ = function $$castApp$utils$setPromiseExpiration$$$($promise$jscomp$11$$, $timeout$jscomp$3$$, $opt_timeoutMessage$$) {
  var $timeoutId$jscomp$1$$ = setTimeout(function() {
    $castApp$log$info$$($castApp$utils$logger_$$, $opt_timeoutMessage$$ || "Waited more than " + $timeout$jscomp$3$$ + "ms, timing out.");
    $promise$jscomp$11$$.cancel();
  }, $timeout$jscomp$3$$);
  $JSCompiler_StaticMethods_thenAlways$$($promise$jscomp$11$$, function() {
    clearTimeout($timeoutId$jscomp$1$$);
    $timeoutId$jscomp$1$$ = null;
  });
  return $promise$jscomp$11$$;
}, $castApp$utils$createExpiringResolver$$ = function $$castApp$utils$createExpiringResolver$$$() {
  var $resolver$jscomp$4$$ = $goog$Promise$withResolver$$();
  $castApp$utils$setPromiseExpiration$$($resolver$jscomp$4$$.$a$, 2000, "Waited more than 2000 ms for session, timing out.");
  return $resolver$jscomp$4$$;
};
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= Number($JSCompiler_inline_result$jscomp$15$$) || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
if ($goog$userAgent$IE$$ && $goog$userAgent$IE$$) {
  try {
    new ActiveXObject("MSXML2.DOMDocument");
  } catch ($e$jscomp$inline_1018$$) {
  }
}
;var $castApp$core$ChromeRuntimeLastError$$ = function $$castApp$core$ChromeRuntimeLastError$$$($opt_msg$jscomp$1$$) {
  $goog$debug$Error$$.call(this, $opt_msg$jscomp$1$$);
};
$goog$inherits$$($castApp$core$ChromeRuntimeLastError$$, $goog$debug$Error$$);
$castApp$core$ChromeRuntimeLastError$$.prototype.name = "chrome.runtime.lastError";
var $castApp$core$NetworkingPrivateApi$$ = function $$castApp$core$NetworkingPrivateApi$$$($onNetworksChanged$$, $onNetworkListChanged$$) {
  this.onNetworksChanged = $onNetworksChanged$$;
  this.onNetworkListChanged = $onNetworkListChanged$$;
};
$goog$exportSymbol$$("castApp.core.NetworkingPrivateApi.WiFiProperties", function() {
});
$goog$exportSymbol$$("castApp.core.NetworkingPrivateApi.NetworkProperties", function() {
});
var $castApp$core$utils$EUREKA_BSSID_RANGES$$ = [[0xfa8fca000000, 0xfa8fcaffffff], [111971074048, 111971139583]], $castApp$core$utils$DEVICE_TYPE_MAPPER_$$ = new function($mappingData$$) {
  this.$b$ = new $goog$structs$Map$$;
  this.$a$ = new $goog$structs$Map$$;
  for (var $dataLength$$ = $mappingData$$.length, $i$jscomp$152$$ = 0;$i$jscomp$152$$ < $dataLength$$;++$i$jscomp$152$$) {
    this.$b$.set($mappingData$$[$i$jscomp$152$$], $mappingData$$[$i$jscomp$152$$ + 1]), this.$a$.set($mappingData$$[$i$jscomp$152$$ + 1], $mappingData$$[$i$jscomp$152$$]);
  }
}(["a", 4, "b", 2, "c", 3, "d", 5, "e", 6, "f", 1, "g", 7, "h", 8, "i", 9, "j", 10, "k", 11, "l", 12, "m", 13]), $castApp$core$utils$SETUP_DEVICE_WHITELIST_$$ = new $goog$structs$Set$$("bcamde".split("")), $castApp$core$utils$DISPLAY_NOT_SUPPORTED_BY_DEFAULT_$$ = new $goog$structs$Set$$("adghjkl".split("")), $castApp$core$utils$DEVICE_SETTINGS_WHITELIST_$$ = new $goog$structs$Set$$("bcamde".split("")), $castApp$core$utils$REBOOT_SUPPORTED_BY_DEFAULT_$$ = new $goog$structs$Set$$(["b", "c", "a", "m"]), 
$castApp$core$utils$FDR_SUPPORTED_BY_DEFAULT_$$ = new $goog$structs$Set$$(["b", "c", "a", "m"]), $castApp$core$utils$OTHER_LICENSES_NOT_SUPPORTED_$$ = new $goog$structs$Set$$(["d"]);
$castApp$log$getLogger$$("core.utils");
var $castApp$core$utils$getBssidNumberFromString$$ = function $$castApp$core$utils$getBssidNumberFromString$$$($JSCompiler_inline_result$jscomp$8_bssidString$$) {
  if (!/^([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}$/.test($JSCompiler_inline_result$jscomp$8_bssidString$$)) {
    return $goog$asserts$fail$$("Bad BSSID string."), NaN;
  }
  var $JSCompiler_temp_const$jscomp$7$$ = parseInt, $JSCompiler_temp_const$jscomp$940_re$jscomp$inline_604$$ = RegExp, $JSCompiler_inline_result$jscomp$941$$;
  $JSCompiler_inline_result$jscomp$941$$ = ":".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  $JSCompiler_temp_const$jscomp$940_re$jscomp$inline_604$$ = new $JSCompiler_temp_const$jscomp$940_re$jscomp$inline_604$$($JSCompiler_inline_result$jscomp$941$$, "g");
  $JSCompiler_inline_result$jscomp$8_bssidString$$ = $JSCompiler_inline_result$jscomp$8_bssidString$$.replace($JSCompiler_temp_const$jscomp$940_re$jscomp$inline_604$$, "");
  return $JSCompiler_temp_const$jscomp$7$$($JSCompiler_inline_result$jscomp$8_bssidString$$, 16);
}, $castApp$core$utils$bssidsMatch$$ = function $$castApp$core$utils$bssidsMatch$$$($bssid1$$, $bssid2$$) {
  return !(!$bssid1$$ || !$bssid2$$ || 0 !== $goog$string$caseInsensitiveCompare$$($bssid1$$, $bssid2$$));
}, $castApp$core$utils$isEurekaHotSpotBssid$$ = function $$castApp$core$utils$isEurekaHotSpotBssid$$$($bssid$jscomp$3$$) {
  var $value$jscomp$139$$ = $castApp$core$utils$getBssidNumberFromString$$($bssid$jscomp$3$$);
  return !!$goog$array$find$$($castApp$core$utils$EUREKA_BSSID_RANGES$$, function($bssid$jscomp$3$$) {
    return $value$jscomp$139$$ >= $bssid$jscomp$3$$[0] && $value$jscomp$139$$ <= $bssid$jscomp$3$$[1];
  });
}, $castApp$core$utils$isEurekaHotSpot$$ = function $$castApp$core$utils$isEurekaHotSpot$$$($network$jscomp$2$$) {
  return !$network$jscomp$2$$.WiFi || !$network$jscomp$2$$.WiFi.BSSID || $network$jscomp$2$$.WiFi.Security && "None" !== $network$jscomp$2$$.WiFi.Security || !$castApp$core$utils$isEurekaHotSpotBssid$$($network$jscomp$2$$.WiFi.BSSID) ? !1 : $castApp$core$utils$SETUP_DEVICE_WHITELIST_$$.contains($castApp$core$utils$parseCastDeviceSsid$$($network$jscomp$2$$.WiFi.SSID || "").type);
}, $castApp$core$utils$parseCastDeviceSsid$$ = function $$castApp$core$utils$parseCastDeviceSsid$$$($ssid$jscomp$11$$) {
  var $regexResult$$ = /^(.*)\.([^\.]*)$/.exec($ssid$jscomp$11$$), $parsedSuffix$$ = null;
  return $regexResult$$ && 3 === $regexResult$$.length && ($parsedSuffix$$ = $castApp$core$utils$parseSsidSuffix$$($regexResult$$[2])) ? {name:$regexResult$$[1], type:$parsedSuffix$$.type, subtype:$parsedSuffix$$.subtype} : {name:$ssid$jscomp$11$$, type:"c", subtype:null};
}, $castApp$core$utils$parseSsidSuffix$$ = function $$castApp$core$utils$parseSsidSuffix$$$($regexResult$jscomp$1_ssidSuffix$$) {
  $regexResult$jscomp$1_ssidSuffix$$ = /^([a-m])(\d{0,3})$/.exec($regexResult$jscomp$1_ssidSuffix$$);
  if (!$regexResult$jscomp$1_ssidSuffix$$ || 3 !== $regexResult$jscomp$1_ssidSuffix$$.length) {
    return null;
  }
  var $subtype$$ = parseInt($regexResult$jscomp$1_ssidSuffix$$[2], 10);
  return {type:$regexResult$jscomp$1_ssidSuffix$$[1], subtype:isNaN($subtype$$) ? null : $subtype$$};
}, $castApp$core$utils$createFeatures$$ = function $$castApp$core$utils$createFeatures$$$($deviceType$jscomp$6$$, $opt_capabilities$$) {
  var $features$jscomp$4$$ = new $castApp$protocol$Features$Device$$;
  $features$jscomp$4$$.supportsSetup = $castApp$core$utils$SETUP_DEVICE_WHITELIST_$$.contains($deviceType$jscomp$6$$);
  $opt_capabilities$$ && !1 === $opt_capabilities$$.setup_supported && ($features$jscomp$4$$.supportsSetup = !1);
  $features$jscomp$4$$.supportsDisplay = !$castApp$core$utils$DISPLAY_NOT_SUPPORTED_BY_DEFAULT_$$.contains($deviceType$jscomp$6$$);
  $opt_capabilities$$ && void 0 !== $opt_capabilities$$.display_supported && ($features$jscomp$4$$.supportsDisplay = !!$opt_capabilities$$.display_supported);
  if ($castApp$core$utils$DEVICE_SETTINGS_WHITELIST_$$.contains($deviceType$jscomp$6$$)) {
    var $settings$jscomp$2$$ = $features$jscomp$4$$.deviceSettings = new $castApp$protocol$Features$DeviceSettings$$;
    $settings$jscomp$2$$.supportsForgetWiFi = !0;
    $opt_capabilities$$ && !1 === $opt_capabilities$$.wifi_supported && ($settings$jscomp$2$$.supportsForgetWiFi = !1);
    $features$jscomp$4$$.supportsSetup || ($settings$jscomp$2$$.supportsForgetWiFi = !1);
    $settings$jscomp$2$$.supportsReboot = $castApp$core$utils$REBOOT_SUPPORTED_BY_DEFAULT_$$.contains($deviceType$jscomp$6$$);
    $opt_capabilities$$ && void 0 !== $opt_capabilities$$.reboot_supported && ($settings$jscomp$2$$.supportsReboot = !!$opt_capabilities$$.reboot_supported);
    $settings$jscomp$2$$.supportsFdr = $castApp$core$utils$FDR_SUPPORTED_BY_DEFAULT_$$.contains($deviceType$jscomp$6$$);
    $opt_capabilities$$ && void 0 !== $opt_capabilities$$.fdr_supported && ($settings$jscomp$2$$.supportsFdr = !!$opt_capabilities$$.fdr_supported);
    $features$jscomp$4$$.supportsSetup || ($settings$jscomp$2$$.supportsFdr = !1);
    $settings$jscomp$2$$.supportsDataCollectionToggle = !0;
    $opt_capabilities$$ && void 0 !== $opt_capabilities$$.stats_supported && ($settings$jscomp$2$$.supportsDataCollectionToggle = !!$opt_capabilities$$.stats_supported);
    $settings$jscomp$2$$.supportsTimeFormatChange = !0;
    $features$jscomp$4$$.supportsDisplay || ($settings$jscomp$2$$.supportsTimeFormatChange = !1);
    $settings$jscomp$2$$.supportsOtherLicenses = !$castApp$core$utils$OTHER_LICENSES_NOT_SUPPORTED_$$.contains($deviceType$jscomp$6$$);
  }
  return $features$jscomp$4$$;
}, $castApp$core$utils$getProtocolDeviceType$$ = function $$castApp$core$utils$getProtocolDeviceType$$$($setupApiDeviceType$$) {
  return $castApp$core$utils$DEVICE_TYPE_MAPPER_$$.$b$.get($setupApiDeviceType$$) || 3;
}, $castApp$core$utils$getProtocolSecurity$$ = function $$castApp$core$utils$getProtocolSecurity$$$($setupApiSecurity$$) {
  switch($setupApiSecurity$$) {
    case 0:
    case 1:
      return 2;
    case 2:
    case 3:
    case 4:
      return 3;
    case 5:
    case 6:
      return 4;
    case 7:
    case 8:
      return 5;
  }
  $goog$asserts$fail$$("Unrecognized setupApi.WpaAuth: " + $setupApiSecurity$$);
  return 2;
}, $castApp$core$utils$getSetupApiSecurity$$ = function $$castApp$core$utils$getSetupApiSecurity$$$($protocolSecurity$$) {
  switch($protocolSecurity$$) {
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 5;
    case 5:
      return 7;
  }
  $goog$asserts$fail$$("Unrecognized protocol.WiFiConfig.Security: " + $protocolSecurity$$);
  return 0;
}, $castApp$core$utils$getProtocolPlayerState$$ = function $$castApp$core$utils$getProtocolPlayerState$$$($castSdkPlayerState$$) {
  switch($castSdkPlayerState$$) {
    case chrome.cast.media.PlayerState.IDLE:
      return 1;
    case chrome.cast.media.PlayerState.PLAYING:
      return 2;
    case chrome.cast.media.PlayerState.PAUSED:
      return 3;
    case chrome.cast.media.PlayerState.BUFFERING:
      return 4;
  }
  $goog$asserts$fail$$("Unrecognized player state" + $castSdkPlayerState$$);
  return 1;
}, $castApp$core$utils$getProtocolSessionStatus$$ = function $$castApp$core$utils$getProtocolSessionStatus$$$($castSdkSessionStatus$$) {
  switch($castSdkSessionStatus$$) {
    case chrome.cast.SessionStatus.CONNECTED:
      return 1;
    case chrome.cast.SessionStatus.DISCONNECTED:
      return 2;
    case chrome.cast.SessionStatus.STOPPED:
      return 3;
  }
  $goog$asserts$fail$$("Unrecognized chrome.cast.SessionStatus: " + $castSdkSessionStatus$$);
  return 2;
}, $castApp$core$utils$createWiFiConfigUiMessage$$ = function $$castApp$core$utils$createWiFiConfigUiMessage$$$($connectWiFi$$, $deviceType$jscomp$7_result$jscomp$30$$) {
  var $state$jscomp$12$$ = 2;
  1 === $connectWiFi$$.$a$ ? $state$jscomp$12$$ = 3 : 2 === $connectWiFi$$.$a$ && ($state$jscomp$12$$ = 4);
  $deviceType$jscomp$7_result$jscomp$30$$ = new $castApp$protocol$WiFiConfig$Show$$($state$jscomp$12$$, $deviceType$jscomp$7_result$jscomp$30$$, [], null);
  $deviceType$jscomp$7_result$jscomp$30$$.selectedNetwork = new $castApp$protocol$WiFiConfig$Network$$($connectWiFi$$.$b$ || null, $connectWiFi$$.msg.ssid, $castApp$core$utils$getProtocolSecurity$$($connectWiFi$$.msg.wpa_auth));
  $connectWiFi$$.$b$ && $deviceType$jscomp$7_result$jscomp$30$$.networks.push($deviceType$jscomp$7_result$jscomp$30$$.selectedNetwork);
  return $deviceType$jscomp$7_result$jscomp$30$$;
}, $castApp$core$utils$createSetEurekaInfoMessage$$ = function $$castApp$core$utils$createSetEurekaInfoMessage$$$($setupApiVersion$jscomp$1_v4_v7$$, $deviceName$jscomp$2$$, $analyticsOptIn$jscomp$1_v3$$) {
  switch($setupApiVersion$jscomp$1_v4_v7$$) {
    case 3:
      return $analyticsOptIn$jscomp$1_v3$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV3$$, $analyticsOptIn$jscomp$1_v3$$.name = $deviceName$jscomp$2$$, $analyticsOptIn$jscomp$1_v3$$;
    case 4:
    case 5:
    case 6:
      return $setupApiVersion$jscomp$1_v4_v7$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV4$$, $setupApiVersion$jscomp$1_v4_v7$$.name = $deviceName$jscomp$2$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in.crash = $setupApiVersion$jscomp$1_v4_v7$$.opt_in.stats = $analyticsOptIn$jscomp$1_v3$$, $setupApiVersion$jscomp$1_v4_v7$$;
    default:
      return $setupApiVersion$jscomp$1_v4_v7$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV7$$, $setupApiVersion$jscomp$1_v4_v7$$.name = $deviceName$jscomp$2$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$, $setupApiVersion$jscomp$1_v4_v7$$.opt_in.stats = $analyticsOptIn$jscomp$1_v3$$, $setupApiVersion$jscomp$1_v4_v7$$;
  }
}, $castApp$core$utils$isBackdropAppId$$ = function $$castApp$core$utils$isBackdropAppId$$$($appId$$) {
  return "E8C28D3C" == $appId$$ || "00000000-0000-0000-0000-000000000000" == $appId$$;
};
var $castApp$core$CastSdk$$ = function $$castApp$core$CastSdk$$$() {
}, $castApp$core$CastSdkImpl$$ = function $$castApp$core$CastSdkImpl$$$() {
  this.$b$ = {};
  this.$a$ = {};
  $castApp$core$CastSdkImpl$castSdkPromise_$$ || ($castApp$core$CastSdkImpl$castSdkPromise_$$ = new $goog$Promise$$(function($resolve$jscomp$9$$, $reject$jscomp$9$$) {
    window.__onGCastApiAvailable = function($s$jscomp$19$$, $err$jscomp$19$$) {
      $s$jscomp$19$$ ? $resolve$jscomp$9$$() : ($castApp$log$errorWithCause$$($castApp$core$CastSdkImpl$logger_$$, $err$jscomp$19$$, "Cast SDK failed to load."), $reject$jscomp$9$$());
    }.bind(this);
    var $s$jscomp$19$$ = document.createElement("script");
    $s$jscomp$19$$.setAttribute("src", chrome.extension.getURL("cast_sender.js"));
    document.head.appendChild($s$jscomp$19$$);
  }.bind(this)));
};
$goog$inherits$$($castApp$core$CastSdkImpl$$, $castApp$core$CastSdk$$);
var $castApp$core$CastSdkImpl$logger_$$ = $castApp$log$getLogger$$("core.CastSdkImpl"), $castApp$core$CastSdkImpl$castSdkPromise_$$ = null, $JSCompiler_StaticMethods_requestSessionAndContext$$ = function $$JSCompiler_StaticMethods_requestSessionAndContext$$$($JSCompiler_StaticMethods_requestSessionAndContext$self$$, $appId$jscomp$2$$, $sessionId$jscomp$6$$) {
  return $castApp$core$CastSdkImpl$castSdkPromise_$$.then(function() {
    var $JSCompiler_StaticMethods_requestSessionAndContext$self$$ = $appId$jscomp$2$$ + $sessionId$jscomp$6$$, $existingResolver_resolver$jscomp$7$$ = this.$b$[$JSCompiler_StaticMethods_requestSessionAndContext$self$$];
    if ($existingResolver_resolver$jscomp$7$$) {
      return $castApp$log$info$$($castApp$core$CastSdkImpl$logger_$$, "Already requested session for appId: " + $appId$jscomp$2$$ + " and sessionId: " + $sessionId$jscomp$6$$ + "."), $existingResolver_resolver$jscomp$7$$.$a$;
    }
    $existingResolver_resolver$jscomp$7$$ = $castApp$utils$createExpiringResolver$$();
    this.$b$[$JSCompiler_StaticMethods_requestSessionAndContext$self$$] = $existingResolver_resolver$jscomp$7$$;
    var $apiConfig_apiContext_sessionRequest$$ = this.$a$[$JSCompiler_StaticMethods_requestSessionAndContext$self$$];
    $apiConfig_apiContext_sessionRequest$$ ? $goog$asserts$fail$$() : ($apiConfig_apiContext_sessionRequest$$ = new chrome.cast.SessionRequest($appId$jscomp$2$$), $apiConfig_apiContext_sessionRequest$$ = new chrome.cast.ApiConfig($apiConfig_apiContext_sessionRequest$$, this.$c$.bind(this), $goog$nullFunction$$, chrome.cast.AutoJoinPolicy.CUSTOM_CONTROLLER_SCOPED), $apiConfig_apiContext_sessionRequest$$.invisibleSender = !$castApp$core$utils$isBackdropAppId$$($appId$jscomp$2$$), $apiConfig_apiContext_sessionRequest$$ = 
    chrome.cast.initializeWithContext($apiConfig_apiContext_sessionRequest$$, $goog$nullFunction$$, function($JSCompiler_StaticMethods_requestSessionAndContext$self$$) {
      $castApp$log$warningWithCause$$($castApp$core$CastSdkImpl$logger_$$, $JSCompiler_StaticMethods_requestSessionAndContext$self$$, "Call to request session by id failed ");
    }.bind(this)), this.$a$[$JSCompiler_StaticMethods_requestSessionAndContext$self$$] = $apiConfig_apiContext_sessionRequest$$);
    $castApp$log$fine$$($castApp$core$CastSdkImpl$logger_$$, "Requesting session for appId: " + $appId$jscomp$2$$ + " and sessionID: " + $sessionId$jscomp$6$$);
    chrome.cast.requestSessionByIdWithContext($apiConfig_apiContext_sessionRequest$$, $sessionId$jscomp$6$$);
    return $existingResolver_resolver$jscomp$7$$.$a$;
  }.bind($JSCompiler_StaticMethods_requestSessionAndContext$self$$));
};
$castApp$core$CastSdkImpl$$.prototype.$c$ = function $$castApp$core$CastSdkImpl$$$$$c$$($session$jscomp$5$$) {
  var $key$jscomp$98$$ = $session$jscomp$5$$.appId + $session$jscomp$5$$.sessionId, $resolver$jscomp$8$$ = this.$b$[$key$jscomp$98$$];
  $resolver$jscomp$8$$ ? $resolver$jscomp$8$$.$b$({session:$session$jscomp$5$$, context:this.$a$[$key$jscomp$98$$]}) : $castApp$log$warning$$($castApp$core$CastSdkImpl$logger_$$, "Received session afterpromise timed out appId: " + $session$jscomp$5$$.appId + "sessionId: " + $session$jscomp$5$$.sessionId);
};
var $castApp$core$ChromeNetworkingPrivate_$$ = function $$castApp$core$ChromeNetworkingPrivate_$$$() {
  $castApp$core$NetworkingPrivateApi$$.call(this, chrome.networkingPrivate.onNetworksChanged, chrome.networkingPrivate.onNetworkListChanged);
};
$goog$inherits$$($castApp$core$ChromeNetworkingPrivate_$$, $castApp$core$NetworkingPrivateApi$$);
$goog$addSingletonGetter$$($castApp$core$ChromeNetworkingPrivate_$$);
var $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$ = function $$castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$$($resolver$jscomp$9$$) {
  return chrome.runtime.lastError ? ($resolver$jscomp$9$$.$c$(new $castApp$core$ChromeRuntimeLastError$$(chrome.runtime.lastError.message)), !0) : !1;
};
$JSCompiler_prototypeAlias$$ = $castApp$core$ChromeNetworkingPrivate_$$.prototype;
$JSCompiler_prototypeAlias$$.getNetworks = function $$JSCompiler_prototypeAlias$$$getNetworks$($filter$jscomp$5$$) {
  var $resolver$jscomp$10$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.getNetworks($filter$jscomp$5$$, function($filter$jscomp$5$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$10$$) || $resolver$jscomp$10$$.$b$($filter$jscomp$5$$);
  });
  return $resolver$jscomp$10$$.$a$;
};
$JSCompiler_prototypeAlias$$.getProperties = function $$JSCompiler_prototypeAlias$$$getProperties$($guid$jscomp$10$$) {
  var $resolver$jscomp$11$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.getProperties($guid$jscomp$10$$, function($guid$jscomp$10$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$11$$) || $resolver$jscomp$11$$.$b$($guid$jscomp$10$$);
  });
  return $resolver$jscomp$11$$.$a$;
};
$JSCompiler_prototypeAlias$$.requestNetworkScan = function $$JSCompiler_prototypeAlias$$$requestNetworkScan$() {
  chrome.networkingPrivate.requestNetworkScan();
};
$JSCompiler_prototypeAlias$$.startConnect = function $$JSCompiler_prototypeAlias$$$startConnect$($guid$jscomp$11$$) {
  var $resolver$jscomp$12$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.startConnect($guid$jscomp$11$$, function() {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$12$$) || $resolver$jscomp$12$$.$b$();
  });
  return $resolver$jscomp$12$$.$a$;
};
$JSCompiler_prototypeAlias$$.startDisconnect = function $$JSCompiler_prototypeAlias$$$startDisconnect$($guid$jscomp$12$$) {
  var $resolver$jscomp$13$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.startDisconnect($guid$jscomp$12$$, function() {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$13$$) || $resolver$jscomp$13$$.$b$();
  });
  return $resolver$jscomp$13$$.$a$;
};
$JSCompiler_prototypeAlias$$.verifyDestination = function $$JSCompiler_prototypeAlias$$$verifyDestination$($verificationInfo$jscomp$3$$) {
  var $resolver$jscomp$14$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.verifyDestination($verificationInfo$jscomp$3$$, function($verificationInfo$jscomp$3$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$14$$) || ($goog$asserts$assertBoolean$$($verificationInfo$jscomp$3$$), $resolver$jscomp$14$$.$b$($verificationInfo$jscomp$3$$));
  });
  return $resolver$jscomp$14$$.$a$;
};
$JSCompiler_prototypeAlias$$.verifyAndEncryptData = function $$JSCompiler_prototypeAlias$$$verifyAndEncryptData$($verificationInfo$jscomp$4$$, $data$jscomp$45$$) {
  var $resolver$jscomp$15$$ = $goog$Promise$withResolver$$();
  chrome.networkingPrivate.verifyAndEncryptData($verificationInfo$jscomp$4$$, $data$jscomp$45$$, function($verificationInfo$jscomp$4$$) {
    $castApp$core$ChromeNetworkingPrivate_$rejectOnError_$$($resolver$jscomp$15$$) || $resolver$jscomp$15$$.$b$($verificationInfo$jscomp$4$$);
  });
  return $resolver$jscomp$15$$.$a$;
};
var $castApp$AsyncTaskManager$$ = function $$castApp$AsyncTaskManager$$$() {
  this.$a$ = new $goog$structs$Set$$;
}, $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$ = function $$JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$$($JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$self$$, $task$$) {
  $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$($JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$self$$.$a$, $task$$);
  return $JSCompiler_StaticMethods_thenAlways$$($task$$, function() {
    this.$a$.remove($task$$);
  }.bind($JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$self$$));
}, $JSCompiler_StaticMethods_cancelPendingTasks$$ = function $$JSCompiler_StaticMethods_cancelPendingTasks$$$($JSCompiler_StaticMethods_cancelPendingTasks$self$$) {
  if (0 == $JSCompiler_StaticMethods_cancelPendingTasks$self$$.$a$.$a$.$c$) {
    return $goog$Promise$resolve$$();
  }
  var $tasksToCancel$$ = $JSCompiler_StaticMethods_cancelPendingTasks$self$$.$a$;
  $JSCompiler_StaticMethods_cancelPendingTasks$self$$.$a$ = new $goog$structs$Set$$;
  var $promise$jscomp$12$$ = new $goog$Promise$$(function($JSCompiler_StaticMethods_cancelPendingTasks$self$$) {
    $goog$iter$forEach$$($tasksToCancel$$, function($promise$jscomp$12$$) {
      $JSCompiler_StaticMethods_thenAlways$$($promise$jscomp$12$$, function() {
        $tasksToCancel$$.remove($promise$jscomp$12$$) && 0 == $tasksToCancel$$.$a$.$c$ && $JSCompiler_StaticMethods_cancelPendingTasks$self$$();
      });
      $promise$jscomp$12$$.cancel();
    });
  });
  $JSCompiler_StaticMethods_thenAlways$$($promise$jscomp$12$$, function() {
    this.$a$.$getCount$() && $castApp$log$warning$$(this.$b$, this.$a$.$getCount$() + " new tasks pending after cleanup.");
  }.bind($JSCompiler_StaticMethods_cancelPendingTasks$self$$));
  return $promise$jscomp$12$$;
};
$castApp$AsyncTaskManager$$.prototype.$b$ = $castApp$log$getLogger$$("AsyncTaskManager");
var $castApp$StartStoppable$$ = function $$castApp$StartStoppable$$$($startCallback$$, $opt_resetCallback$$) {
  this.$g$ = $startCallback$$;
  this.$f$ = $opt_resetCallback$$;
  this.$c$ = new $castApp$AsyncTaskManager$$;
  this.$b$ = new $goog$events$EventTarget$$;
  this.$a$ = "stopped";
};
$JSCompiler_prototypeAlias$$ = $castApp$StartStoppable$$.prototype;
$JSCompiler_prototypeAlias$$.$castApp_StartStoppable_prototype$logger_$ = $castApp$log$getLogger$$("StartStoppable");
$JSCompiler_prototypeAlias$$.getState = function $$JSCompiler_prototypeAlias$$$getState$() {
  return this.$a$;
};
$JSCompiler_prototypeAlias$$.$castApp_StartStoppable_prototype$updateState_$ = function $$JSCompiler_prototypeAlias$$$$castApp_StartStoppable_prototype$updateState_$$($newState$$) {
  $newState$$ !== this.$a$ && (this.$a$ = $newState$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$b$, $newState$$), $castApp$log$fine$$(this.$castApp_StartStoppable_prototype$logger_$, "New state: " + $newState$$));
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  switch(this.$a$) {
    case "stopped":
    case "stopping":
      return this.restart();
    case "starting":
    case "stoppingStartPending":
      return $JSCompiler_StaticMethods_createCancelableStartPromise_$$(this);
    case "started":
      return $goog$Promise$resolve$$();
    default:
      return $goog$asserts$fail$$("Unknown state: " + this.$a$), $goog$Promise$resolve$$();
  }
};
$JSCompiler_prototypeAlias$$.restart = function $$JSCompiler_prototypeAlias$$$restart$() {
  switch(this.$a$) {
    case "starting":
    case "started":
      this.$castApp_StartStoppable_prototype$updateState_$("stoppingStartPending");
      $JSCompiler_StaticMethods_runStopCommand_$$(this);
      break;
    case "stopping":
      this.$castApp_StartStoppable_prototype$updateState_$("stoppingStartPending");
      break;
    case "stoppingStartPending":
      break;
    case "stopped":
      this.$castApp_StartStoppable_prototype$updateState_$("starting");
      $JSCompiler_StaticMethods_runStartCommand_$$(this);
      break;
    default:
      $goog$asserts$fail$$("Unknown state: " + this.$a$);
  }
  return $JSCompiler_StaticMethods_createCancelableStartPromise_$$(this);
};
var $JSCompiler_StaticMethods_createCancelableStartPromise_$$ = function $$JSCompiler_StaticMethods_createCancelableStartPromise_$$$($JSCompiler_StaticMethods_createCancelableStartPromise_$self$$) {
  var $waitingTasks$$ = new $castApp$AsyncTaskManager$$;
  return $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$(new $goog$Promise$$(function($JSCompiler_StaticMethods_createCancelableStartPromise_$self$$, $reject$jscomp$10$$) {
    $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($waitingTasks$$, $castApp$utils$waitForEvent$$(this.$b$, "started")).then(function() {
      $JSCompiler_StaticMethods_createCancelableStartPromise_$self$$();
    });
    $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($waitingTasks$$, $castApp$utils$waitForEvent$$(this.$b$, "stopped")).then(function() {
      $reject$jscomp$10$$();
    });
  }.bind($JSCompiler_StaticMethods_createCancelableStartPromise_$self$$)), function($JSCompiler_StaticMethods_createCancelableStartPromise_$self$$) {
    $JSCompiler_StaticMethods_createCancelableStartPromise_$self$$ instanceof $goog$Promise$CancellationError$$ && this.stop();
    throw $JSCompiler_StaticMethods_createCancelableStartPromise_$self$$;
  }, $JSCompiler_StaticMethods_createCancelableStartPromise_$self$$), function() {
    $JSCompiler_StaticMethods_cancelPendingTasks$$($waitingTasks$$);
  });
};
$castApp$StartStoppable$$.prototype.stop = function $$castApp$StartStoppable$$$$stop$() {
  if ("stopped" === this.$a$) {
    return $goog$Promise$resolve$$();
  }
  var $prevState$$ = this.$a$;
  this.$castApp_StartStoppable_prototype$updateState_$("stopping");
  "starting" !== $prevState$$ && "started" !== $prevState$$ || $JSCompiler_StaticMethods_runStopCommand_$$(this);
  return $castApp$utils$waitForEvent$$(this.$b$, "stopped");
};
var $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$ = function $$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$, $task$jscomp$2$$) {
  if ("starting" === $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$.$a$ || "started" === $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$.$a$) {
    return $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$self$$.$c$, $task$jscomp$2$$), $task$jscomp$2$$;
  }
  $task$jscomp$2$$.cancel();
  return $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
}, $JSCompiler_StaticMethods_waitUntilStarted$$ = function $$JSCompiler_StaticMethods_waitUntilStarted$$$($JSCompiler_StaticMethods_waitUntilStarted$self$$) {
  return "started" === $JSCompiler_StaticMethods_waitUntilStarted$self$$.$a$ ? $goog$Promise$resolve$$() : $castApp$utils$waitForEvent$$($JSCompiler_StaticMethods_waitUntilStarted$self$$.$b$, "started");
}, $JSCompiler_StaticMethods_runStopCommand_$$ = function $$JSCompiler_StaticMethods_runStopCommand_$$$($JSCompiler_StaticMethods_runStopCommand_$self$$) {
  $JSCompiler_StaticMethods_cancelPendingTasks$$($JSCompiler_StaticMethods_runStopCommand_$self$$.$c$).then(function() {
    try {
      if (this.$f$) {
        return this.$f$();
      }
    } catch ($err$jscomp$22$$) {
      $castApp$utils$logError$$(this.$castApp_StartStoppable_prototype$logger_$, "Exception in reset callback.", $err$jscomp$22$$);
    }
  }.bind($JSCompiler_StaticMethods_runStopCommand_$self$$)).then(function() {
    "stoppingStartPending" === this.$a$ ? (this.$castApp_StartStoppable_prototype$updateState_$("starting"), $JSCompiler_StaticMethods_runStartCommand_$$(this)) : this.$castApp_StartStoppable_prototype$updateState_$("stopped");
  }.bind($JSCompiler_StaticMethods_runStopCommand_$self$$));
}, $JSCompiler_StaticMethods_runStartCommand_$$ = function $$JSCompiler_StaticMethods_runStartCommand_$$$($JSCompiler_StaticMethods_runStartCommand_$self$$) {
  var $startCallbackPromise$$ = null;
  try {
    $startCallbackPromise$$ = $JSCompiler_StaticMethods_runStartCommand_$self$$.$g$();
  } catch ($err$jscomp$23$$) {
    $castApp$utils$logError$$($JSCompiler_StaticMethods_runStartCommand_$self$$.$castApp_StartStoppable_prototype$logger_$, "Exception in reset callback.", $err$jscomp$23$$), $startCallbackPromise$$ = $goog$Promise$reject$$($err$jscomp$23$$);
  }
  "starting" !== $JSCompiler_StaticMethods_runStartCommand_$self$$.$a$ ? $startCallbackPromise$$.cancel() : $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($JSCompiler_StaticMethods_runStartCommand_$self$$.$c$, $startCallbackPromise$$).then($JSCompiler_StaticMethods_runStartCommand_$self$$.$castApp_StartStoppable_prototype$updateState_$.bind($JSCompiler_StaticMethods_runStartCommand_$self$$, "started")), function($JSCompiler_StaticMethods_runStartCommand_$self$$) {
    $castApp$utils$logError$$(this.$castApp_StartStoppable_prototype$logger_$, "Exception in start callback.", $JSCompiler_StaticMethods_runStartCommand_$self$$);
    this.stop();
  }.bind($JSCompiler_StaticMethods_runStartCommand_$self$$));
};
var $goog$Timer$callOnce$$ = function $$goog$Timer$callOnce$$$($listener$jscomp$101$$, $opt_delay$jscomp$2$$, $opt_handler$jscomp$8$$) {
  if ($goog$isFunction$$($listener$jscomp$101$$)) {
    $opt_handler$jscomp$8$$ && ($listener$jscomp$101$$ = $goog$bind$$($listener$jscomp$101$$, $opt_handler$jscomp$8$$));
  } else {
    if ($listener$jscomp$101$$ && "function" == typeof $listener$jscomp$101$$.handleEvent) {
      $listener$jscomp$101$$ = $goog$bind$$($listener$jscomp$101$$.handleEvent, $listener$jscomp$101$$);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < Number($opt_delay$jscomp$2$$) ? -1 : $goog$global$$.setTimeout($listener$jscomp$101$$, $opt_delay$jscomp$2$$ || 0);
}, $goog$Timer$promise$$ = function $$goog$Timer$promise$$$($delay$$) {
  var $timerKey$$ = null;
  return $JSCompiler_StaticMethods_thenCatch$$(new $goog$Promise$$(function($resolve$jscomp$12$$, $reject$jscomp$11$$) {
    $timerKey$$ = $goog$Timer$callOnce$$(function() {
      $resolve$jscomp$12$$(void 0);
    }, $delay$$);
    -1 == $timerKey$$ && $reject$jscomp$11$$(Error("Failed to schedule timer."));
  }), function($delay$$) {
    $goog$global$$.clearTimeout($timerKey$$);
    throw $delay$$;
  });
};
var $castApp$anonymizeProtocolMessage$$ = function $$castApp$anonymizeProtocolMessage$$$($rawMsg$$) {
  $$jscomp$scope$messageAnonymizers_$$ || ($$jscomp$scope$messageAnonymizers_$$ = new $goog$structs$Map$$("SetupStart.ShowDevice", $$jscomp$scope$anonymizeSetupStartShowDeviceMessage_$$, "WiFiSwitching.ConnectHotSpot", $$jscomp$scope$anonymizeWiFiSwitchingConnectHotSpotMessage_$$, "WiFiSwitching.ReconnectWiFi", $$jscomp$scope$anonymizeWiFiSwitchingReconnectWiFiMessage_$$, "CodeConfirmation.Request", $$jscomp$scope$anonymizeCodeConfirmationRequestMessage_$$, "DeviceConfig.Request", $$jscomp$scope$anonymizeDeviceConfigRequestMessage_$$, 
  "DeviceConfig.Response", $$jscomp$scope$anonymizeDeviceConfigResponseMessage_$$, "WiFiConfig.Show", $$jscomp$scope$anonymizeWiFiConfigShowMessage_$$, "WiFiConfig.UpdateNetworks", $$jscomp$scope$anonymizeWiFiConfigUpdateNetworksMessage_$$, "WiFiConfig.Connect", $$jscomp$scope$anonymizeWiFiConfigConnectMessage_$$, "WiFiConfig.Retry", $$jscomp$scope$anonymizeWiFiConfigRetryMessage_$$, "Devices.Show", $$jscomp$scope$anonymizeDevicesShowMessage_$$, "Devices.UserAction", $$jscomp$scope$anonymizeDevicesUserActionMessage_$$, 
  "DeviceSettings.Show", $$jscomp$scope$anonymizeDeviceSettingsShowMessage_$$, "DeviceSettings.Apply", $$jscomp$scope$anonymizeDeviceSettingsApplyMessage_$$), "Error Handshake.Request Handshake.Response Handshake.UiVersionNotSupported OfflineUiReady SetupSessionTakeoverConfirmed SetSimpleState ModalDialog.Request ModalDialog.Response ShowGenericSetupError DeviceDiscovery.ShowScanner DeviceDiscovery.NotFound SetupStart.Proceed SetupStart.TosAccepted WiFiSwitching.Proceed WiFiSwitching.RetryConnection BadDeviceAck CodeConfirmation.Response AudioConfirmation.PromptUser AudioConfirmation.UserAction WiFiConfig.ErrorAck OtaUpdate.Pending OtaUpdate.Done OtaUpdate.Proceed DeviceSettings.Reboot DeviceSettings.FactoryReset DeviceSettings.ForgetWiFi DeviceSettings.Exit RestartSetup GoToDeviceList DetectCountry.Request DetectCountry.Response Offers.Show Offers.Scan Offers.ScanResults Offers.Redeem Offers.AnalyticsEvent".split(" ").forEach(function($rawMsg$$) {
    $$jscomp$scope$messageAnonymizers_$$.set($rawMsg$$, function($rawMsg$$) {
      return $goog$Promise$resolve$$($rawMsg$$);
    });
  }));
  return $$jscomp$scope$messageAnonymizers_$$.get($rawMsg$$.type)($rawMsg$$).then(function($rawMsg$$) {
    return JSON.stringify($rawMsg$$);
  });
}, $$jscomp$scope$messageAnonymizers_$$ = null, $$jscomp$scope$anonymizeSetupStartShowDeviceMessage_$$ = function $$$jscomp$scope$anonymizeSetupStartShowDeviceMessage_$$$($rawMsg$jscomp$1$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$1$$.deviceName).then(function($anonymizedDeviceName_ret$jscomp$4$$) {
    $anonymizedDeviceName_ret$jscomp$4$$ = new $castApp$protocol$SetupStart$ShowDevice$$($rawMsg$jscomp$1$$.state, $rawMsg$jscomp$1$$.deviceType, $anonymizedDeviceName_ret$jscomp$4$$);
    $anonymizedDeviceName_ret$jscomp$4$$.otherDevicesExist = $rawMsg$jscomp$1$$.otherDevicesExist;
    $anonymizedDeviceName_ret$jscomp$4$$.analyticsOptIn = $rawMsg$jscomp$1$$.analyticsOptIn;
    return $anonymizedDeviceName_ret$jscomp$4$$;
  });
}, $$jscomp$scope$anonymizeWiFiSwitchingConnectHotSpotMessage_$$ = function $$$jscomp$scope$anonymizeWiFiSwitchingConnectHotSpotMessage_$$$($rawMsg$jscomp$2$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($rawMsg$jscomp$2$$.deviceName), $castApp$log$anonymizeString$$($rawMsg$jscomp$2$$.ssid)]).then(function($scrubbedStrings$$) {
    return new $castApp$protocol$WiFiSwitching$ConnectHotSpot$$($rawMsg$jscomp$2$$.state, $scrubbedStrings$$[0], $scrubbedStrings$$[1]);
  });
}, $$jscomp$scope$anonymizeWiFiSwitchingReconnectWiFiMessage_$$ = function $$$jscomp$scope$anonymizeWiFiSwitchingReconnectWiFiMessage_$$$($rawMsg$jscomp$3$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$3$$.ssid).then(function($anonymizedSsid$$) {
    return new $castApp$protocol$WiFiSwitching$ReconnectWiFi$$($rawMsg$jscomp$3$$.state, $anonymizedSsid$$);
  });
}, $$jscomp$scope$anonymizeCodeConfirmationRequestMessage_$$ = function $$$jscomp$scope$anonymizeCodeConfirmationRequestMessage_$$$($rawMsg$jscomp$4$$) {
  return $goog$Promise$all$$($rawMsg$jscomp$4$$.code.map($castApp$log$anonymizeString$$)).then(function($rawMsg$jscomp$4$$) {
    return new $castApp$protocol$CodeConfirmation$Request$$($rawMsg$jscomp$4$$);
  });
}, $$jscomp$scope$anonymizeDeviceConfigRequestMessage_$$ = function $$$jscomp$scope$anonymizeDeviceConfigRequestMessage_$$$($rawMsg$jscomp$5$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$5$$.name).then(function($anonymizedName$$) {
    return new $castApp$protocol$DeviceConfig$Request$$($rawMsg$jscomp$5$$.deviceType, $anonymizedName$$, $rawMsg$jscomp$5$$.country);
  });
}, $$jscomp$scope$anonymizeDeviceConfigResponseMessage_$$ = function $$$jscomp$scope$anonymizeDeviceConfigResponseMessage_$$$($rawMsg$jscomp$6$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$6$$.name).then(function($anonymizedName$jscomp$1$$) {
    return {requestId:$rawMsg$jscomp$6$$.responseTo, name:$anonymizedName$jscomp$1$$, $a$:$rawMsg$jscomp$6$$.country};
  });
}, $$jscomp$scope$anonymizeWiFiConfigNetwork_$$ = function $$$jscomp$scope$anonymizeWiFiConfigNetwork_$$$($network$jscomp$3$$) {
  return $goog$Promise$all$$([$network$jscomp$3$$.id ? $castApp$log$anonymizeString$$($network$jscomp$3$$.id) : null, $castApp$log$anonymizeString$$($network$jscomp$3$$.ssid)]).then(function($anonymized_anonymizedId$$) {
    var $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$ = $$jscomp$makeIterator$$($anonymized_anonymizedId$$);
    $anonymized_anonymizedId$$ = $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$.next().value;
    $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$ = $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$.next().value;
    return new $castApp$protocol$WiFiConfig$Network$$($anonymized_anonymizedId$$, $$jscomp$destructuring$var0_anonymizedSsid$jscomp$1$$, $network$jscomp$3$$.security);
  });
}, $$jscomp$scope$anonymizeWiFiConfigShowMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigShowMessage_$$$($rawMsg$jscomp$7$$) {
  return $goog$Promise$all$$([$goog$Promise$all$$($rawMsg$jscomp$7$$.networks.map($$jscomp$scope$anonymizeWiFiConfigNetwork_$$)), $rawMsg$jscomp$7$$.selectedNetwork ? $$jscomp$scope$anonymizeWiFiConfigNetwork_$$($rawMsg$jscomp$7$$.selectedNetwork) : null]).then(function($anonymizedNetworks_anonymizedResults$$) {
    var $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$ = $$jscomp$makeIterator$$($anonymizedNetworks_anonymizedResults$$);
    $anonymizedNetworks_anonymizedResults$$ = $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$.next().value;
    $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$ = $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$.next().value;
    return new $castApp$protocol$WiFiConfig$Show$$($rawMsg$jscomp$7$$.state, $rawMsg$jscomp$7$$.deviceType, $anonymizedNetworks_anonymizedResults$$, $$jscomp$destructuring$var1_anonymizedSelectedNetwork$$);
  });
}, $$jscomp$scope$anonymizeWiFiConfigUpdateNetworksMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigUpdateNetworksMessage_$$$($rawMsg$jscomp$8$$) {
  return $goog$Promise$all$$($rawMsg$jscomp$8$$.networks.map($$jscomp$scope$anonymizeWiFiConfigNetwork_$$)).then(function($rawMsg$jscomp$8$$) {
    return new $castApp$protocol$WiFiConfig$UpdateNetworks$$($rawMsg$jscomp$8$$);
  });
}, $$jscomp$scope$anonymizeWiFiConfigConnectMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigConnectMessage_$$$($rawMsg$jscomp$9$$) {
  return $$jscomp$scope$anonymizeWiFiConfigNetwork_$$($rawMsg$jscomp$9$$.network).then(function($rawMsg$jscomp$9$$) {
    return new $castApp$protocol$WiFiConfig$Connect$$($rawMsg$jscomp$9$$, "********");
  });
}, $$jscomp$scope$anonymizeWiFiConfigRetryMessage_$$ = function $$$jscomp$scope$anonymizeWiFiConfigRetryMessage_$$$($rawMsg$jscomp$10$$) {
  return $$jscomp$scope$anonymizeWiFiConfigNetwork_$$($rawMsg$jscomp$10$$.network).then(function($rawMsg$jscomp$10$$) {
    return new $castApp$protocol$WiFiConfig$Retry$$($rawMsg$jscomp$10$$);
  });
}, $$jscomp$scope$anonymizeDeviceProperties_$$ = function $$$jscomp$scope$anonymizeDeviceProperties_$$$($props$jscomp$1$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($props$jscomp$1$$.id), $castApp$log$anonymizeString$$($props$jscomp$1$$.displayName)]).then(function($anonymized$jscomp$1_anonymizedId$jscomp$1$$) {
    var $$jscomp$destructuring$var2_anonymizedDisplayName$$ = $$jscomp$makeIterator$$($anonymized$jscomp$1_anonymizedId$jscomp$1$$);
    $anonymized$jscomp$1_anonymizedId$jscomp$1$$ = $$jscomp$destructuring$var2_anonymizedDisplayName$$.next().value;
    var $$jscomp$destructuring$var2_anonymizedDisplayName$$ = $$jscomp$destructuring$var2_anonymizedDisplayName$$.next().value, $ret$jscomp$5$$ = $goog$object$clone$$($props$jscomp$1$$);
    $ret$jscomp$5$$.id = $anonymized$jscomp$1_anonymizedId$jscomp$1$$;
    $ret$jscomp$5$$.displayName = $$jscomp$destructuring$var2_anonymizedDisplayName$$;
    return $ret$jscomp$5$$;
  });
}, $$jscomp$scope$anonymizeDevicesShowMessage_$$ = function $$$jscomp$scope$anonymizeDevicesShowMessage_$$$($rawMsg$jscomp$11$$) {
  return $goog$Promise$all$$([$goog$Promise$all$$($rawMsg$jscomp$11$$.devices.map($$jscomp$scope$anonymizeDeviceProperties_$$)), $rawMsg$jscomp$11$$.deviceName ? $castApp$log$anonymizeString$$($rawMsg$jscomp$11$$.deviceName) : void 0]).then(function($rawMsg$jscomp$11$$) {
    var $anonymizedDevices_anonymizedResults$jscomp$1$$ = $$jscomp$makeIterator$$($rawMsg$jscomp$11$$);
    $rawMsg$jscomp$11$$ = $anonymizedDevices_anonymizedResults$jscomp$1$$.next().value;
    $anonymizedDevices_anonymizedResults$jscomp$1$$ = $anonymizedDevices_anonymizedResults$jscomp$1$$.next().value;
    return new $castApp$protocol$Devices$Show$$($rawMsg$jscomp$11$$, $anonymizedDevices_anonymizedResults$jscomp$1$$);
  });
}, $$jscomp$scope$anonymizeDevicesUserActionMessage_$$ = function $$$jscomp$scope$anonymizeDevicesUserActionMessage_$$$($rawMsg$jscomp$12$$) {
  return $$jscomp$scope$anonymizeDeviceProperties_$$($rawMsg$jscomp$12$$.device).then(function($anonymizedDevice$$) {
    return new $castApp$protocol$Devices$UserAction$$($anonymizedDevice$$, $rawMsg$jscomp$12$$.action);
  });
}, $$jscomp$scope$anonymizeDeviceSettingsShowMessage_$$ = function $$$jscomp$scope$anonymizeDeviceSettingsShowMessage_$$$($rawMsg$jscomp$13$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.name), $castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.ssid || ""), $castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.macAddress), $castApp$log$anonymizeString$$($rawMsg$jscomp$13$$.ipAddress)]).then(function($anonymized$jscomp$2_anonymizedName$jscomp$2$$) {
    var $$jscomp$destructuring$var4_anonymizedIpAddress$$ = $$jscomp$makeIterator$$($anonymized$jscomp$2_anonymizedName$jscomp$2$$);
    $anonymized$jscomp$2_anonymizedName$jscomp$2$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value;
    var $anonymizedSsid$jscomp$2$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value, $anonymizedMacAddress$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value, $$jscomp$destructuring$var4_anonymizedIpAddress$$ = $$jscomp$destructuring$var4_anonymizedIpAddress$$.next().value;
    return new $castApp$protocol$DeviceSettings$Show$$($rawMsg$jscomp$13$$.state, $rawMsg$jscomp$13$$.features, {deviceType:$rawMsg$jscomp$13$$.deviceType, name:$anonymized$jscomp$2_anonymizedName$jscomp$2$$, ssid:$rawMsg$jscomp$13$$.ssid ? $anonymizedSsid$jscomp$2$$ : null, timeZoneId:$rawMsg$jscomp$13$$.timeZoneId, supportedTimeZones:$rawMsg$jscomp$13$$.supportedTimeZones, timeFormat:$rawMsg$jscomp$13$$.timeFormat, localeId:$rawMsg$jscomp$13$$.localeId, supportedLocales:$rawMsg$jscomp$13$$.supportedLocales, 
    statsOptIn:$rawMsg$jscomp$13$$.statsOptIn, firmwareVersion:$rawMsg$jscomp$13$$.firmwareVersion, countryCode:$rawMsg$jscomp$13$$.countryCode, macAddress:$anonymizedMacAddress$$, ipAddress:$$jscomp$destructuring$var4_anonymizedIpAddress$$});
  });
}, $$jscomp$scope$anonymizeDeviceSettingsApplyMessage_$$ = function $$$jscomp$scope$anonymizeDeviceSettingsApplyMessage_$$$($rawMsg$jscomp$14$$) {
  return $castApp$log$anonymizeString$$($rawMsg$jscomp$14$$.name).then(function($anonymizedName$jscomp$3$$) {
    var $ret$jscomp$6$$ = new $castApp$protocol$DeviceSettings$Apply$$($rawMsg$jscomp$14$$);
    $ret$jscomp$6$$.name = $anonymizedName$jscomp$3$$;
    return $ret$jscomp$6$$;
  });
};
var $castApp$Messenger$$ = function $$castApp$Messenger$$$() {
  this.$a$ = {};
  this.$b$ = {};
  this.$c$ = new $goog$structs$Set$$;
}, $castApp$Messenger$logger_$$ = $castApp$log$getLogger$$("Messenger");
$castApp$Messenger$$.prototype.sendMessage = function $$castApp$Messenger$$$$sendMessage$($message$jscomp$29$$) {
  $message$jscomp$29$$.responseTo ? this.$c$.contains($message$jscomp$29$$.responseTo) ? (this.$c$.remove($message$jscomp$29$$.responseTo), $JSCompiler_StaticMethods_sendRawMessage$$(this, $message$jscomp$29$$)) : $goog$asserts$fail$$("Response to a request that is not pending.") : $JSCompiler_StaticMethods_sendRawMessage$$(this, $message$jscomp$29$$);
};
$castApp$Messenger$$.prototype.sendRequest = function $$castApp$Messenger$$$$sendRequest$($requestMsg$$, $opt_timeout$jscomp$1$$) {
  var $responseResolver$$ = $goog$Promise$withResolver$$();
  this.$a$[$requestMsg$$.requestId] = {$resolver$:$responseResolver$$, $timeoutId$:$opt_timeout$jscomp$1$$ ? setTimeout($goog$bind$$(this.$i$, this, $requestMsg$$.requestId), $opt_timeout$jscomp$1$$) : null};
  $JSCompiler_StaticMethods_sendRawMessage$$(this, $requestMsg$$);
  return $responseResolver$$.$a$;
};
$castApp$Messenger$$.prototype.$i$ = function $$castApp$Messenger$$$$$i$$($requestId$jscomp$1$$) {
  $requestId$jscomp$1$$ in this.$a$ && (this.$a$[$requestId$jscomp$1$$].$resolver$.$a$.cancel(), delete this.$a$[$requestId$jscomp$1$$]);
};
$castApp$Messenger$$.prototype.addListener = function $$castApp$Messenger$$$$addListener$($messageType$jscomp$1$$, $listener$jscomp$102$$) {
  var $listeners$jscomp$1$$ = this.$b$[$messageType$jscomp$1$$];
  $listeners$jscomp$1$$ || ($listeners$jscomp$1$$ = this.$b$[$messageType$jscomp$1$$] = new $goog$structs$Set$$);
  $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$($listeners$jscomp$1$$, $listener$jscomp$102$$);
};
var $JSCompiler_StaticMethods_waitForMessage$$ = function $$JSCompiler_StaticMethods_waitForMessage$$$($JSCompiler_StaticMethods_waitForMessage$self$$, $type$jscomp$148$$) {
  var $resolver$jscomp$16$$ = $goog$Promise$withResolver$$(), $oneTimeListener$$ = $goog$bind$$(function($JSCompiler_StaticMethods_waitForMessage$self$$) {
    $resolver$jscomp$16$$.$b$($JSCompiler_StaticMethods_waitForMessage$self$$);
  }, $JSCompiler_StaticMethods_waitForMessage$self$$);
  $JSCompiler_StaticMethods_waitForMessage$self$$.addListener($type$jscomp$148$$, $oneTimeListener$$);
  return $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$16$$.$a$, function() {
    this.removeListener($type$jscomp$148$$, $oneTimeListener$$);
  }.bind($JSCompiler_StaticMethods_waitForMessage$self$$));
};
$castApp$Messenger$$.prototype.removeListener = function $$castApp$Messenger$$$$removeListener$($listeners$jscomp$2_messageType$jscomp$2$$, $callback$jscomp$395$$) {
  ($listeners$jscomp$2_messageType$jscomp$2$$ = this.$b$[$listeners$jscomp$2_messageType$jscomp$2$$]) && $listeners$jscomp$2_messageType$jscomp$2$$.remove($callback$jscomp$395$$);
};
var $JSCompiler_StaticMethods_handleRawMessage$$ = function $$JSCompiler_StaticMethods_handleRawMessage$$$($JSCompiler_StaticMethods_handleRawMessage$self$$, $rawMessage$$) {
  if ($rawMessage$$.requestId) {
    $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$($JSCompiler_StaticMethods_handleRawMessage$self$$.$c$, $rawMessage$$.requestId);
  } else {
    if ($rawMessage$$.responseTo) {
      var $requestStruct$$ = $JSCompiler_StaticMethods_handleRawMessage$self$$.$a$[$rawMessage$$.responseTo];
      $requestStruct$$ ? (delete $JSCompiler_StaticMethods_handleRawMessage$self$$.$a$[$rawMessage$$.responseTo], null !== $requestStruct$$.$timeoutId$ && clearTimeout($requestStruct$$.$timeoutId$), $rawMessage$$ instanceof $castApp$protocol$Error$$ ? $requestStruct$$.$resolver$.$c$($rawMessage$$) : $requestStruct$$.$resolver$.$b$($rawMessage$$)) : $castApp$log$warning$$($castApp$Messenger$logger_$$, "Orphaned response message: type=" + $rawMessage$$.type + " id=" + $rawMessage$$.responseTo);
    }
  }
  var $listeners$jscomp$3$$ = $JSCompiler_StaticMethods_handleRawMessage$self$$.$b$[$rawMessage$$.type];
  $listeners$jscomp$3$$ && $listeners$jscomp$3$$.$getValues$().forEach(function($JSCompiler_StaticMethods_handleRawMessage$self$$) {
    $listeners$jscomp$3$$.contains($JSCompiler_StaticMethods_handleRawMessage$self$$) && $JSCompiler_StaticMethods_handleRawMessage$self$$($rawMessage$$);
  });
};
var $castApp$WindowMessenger$$ = function $$castApp$WindowMessenger$$$($thisWindow$$, $remoteWindowOrCb$$, $remoteWindowOrigin$$, $opt_originViolationCallback$$, $opt_logScrubbingCallback$$) {
  $castApp$Messenger$$.call(this);
  this.$g$ = "object" === typeof $remoteWindowOrCb$$ ? $remoteWindowOrCb$$ : null;
  this.$j$ = "function" === typeof $remoteWindowOrCb$$ ? $remoteWindowOrCb$$ : null;
  this.$f$ = $remoteWindowOrigin$$;
  this.$m$ = $opt_originViolationCallback$$ || $goog$nullFunction$$;
  this.$h$ = $opt_logScrubbingCallback$$ || function($thisWindow$$) {
    return $goog$Promise$resolve$$(JSON.stringify($thisWindow$$));
  };
  $thisWindow$$.addEventListener("message", this.$l$.bind(this));
};
$goog$inherits$$($castApp$WindowMessenger$$, $castApp$Messenger$$);
var $castApp$WindowMessenger$logger_$$ = $castApp$log$getLogger$$("core.Messenger");
$castApp$WindowMessenger$$.prototype.$l$ = function $$castApp$WindowMessenger$$$$$l$$($message$jscomp$32$$) {
  $message$jscomp$32$$.origin === this.$f$ ? ($castApp$log$info$$($castApp$WindowMessenger$logger_$$, "In: ", this.$h$($message$jscomp$32$$.data)), $JSCompiler_StaticMethods_handleRawMessage$$(this, $message$jscomp$32$$.data)) : ($castApp$log$error$$($castApp$WindowMessenger$logger_$$, "Origin check failed - ignoring message. Expected: " + this.$f$ + " Received: " + $message$jscomp$32$$.origin), this.$m$());
};
var $JSCompiler_StaticMethods_sendRawMessage$$ = function $$JSCompiler_StaticMethods_sendRawMessage$$$($JSCompiler_StaticMethods_sendRawMessage$self$$, $message$jscomp$33$$) {
  $castApp$log$info$$($castApp$WindowMessenger$logger_$$, "Out: ", $JSCompiler_StaticMethods_sendRawMessage$self$$.$h$($message$jscomp$33$$));
  $JSCompiler_StaticMethods_sendRawMessage$self$$.$g$ = $JSCompiler_StaticMethods_sendRawMessage$self$$.$g$ || $JSCompiler_StaticMethods_sendRawMessage$self$$.$j$();
  $JSCompiler_StaticMethods_sendRawMessage$self$$.$g$.postMessage($message$jscomp$33$$, $JSCompiler_StaticMethods_sendRawMessage$self$$.$f$);
};
var $castApp$core$WebView$$ = function $$castApp$core$WebView$$$($coreWindow$$, $uiOrigin$$, $start$jscomp$14$$, $reset$jscomp$1$$) {
  this.$f$ = new $goog$events$EventTarget$$;
  this.$h$ = new $castApp$StartStoppable$$($start$jscomp$14$$, $reset$jscomp$1$$);
  this.$c$ = $coreWindow$$;
  this.$w$ = $uiOrigin$$ + "/v6";
  this.$v$ = $uiOrigin$$;
  this.$g$ = [];
}, $castApp$core$WebView$RedirectEvent$$ = function $$castApp$core$WebView$RedirectEvent$$$() {
  $goog$events$Event$$.call(this, "redirect");
};
$goog$inherits$$($castApp$core$WebView$RedirectEvent$$, $goog$events$Event$$);
$castApp$core$WebView$$.prototype.start = function $$castApp$core$WebView$$$$start$() {
  return this.$h$.start().then(this.$o$.bind(this));
};
$castApp$core$WebView$$.prototype.stop = function $$castApp$core$WebView$$$$stop$() {
  return this.$h$.stop();
};
$castApp$core$WebView$$.prototype.$j$ = function $$castApp$core$WebView$$$$$j$$($url$jscomp$47$$) {
  0 <= $goog$array$indexOf$$(this.$g$, $url$jscomp$47$$) || this.$g$.push($url$jscomp$47$$);
};
var $castApp$core$WebViewImpl$$ = function $$castApp$core$WebViewImpl$$$($coreWindow$jscomp$1$$) {
  var $uiOrigin$jscomp$1$$ = $coreWindow$jscomp$1$$.localStorage.getItem("castApp.uiOrigin") || "https://chromecast-setup-staging.sandbox.google.com";
  $castApp$core$WebView$$.call(this, $coreWindow$jscomp$1$$, $uiOrigin$jscomp$1$$, this.$m$.bind(this), this.$l$.bind(this));
  this.$a$ = this.$b$ = null;
  this.$i$ = [["newwindow", this.$u$.bind(this)], ["loadredirect", this.$s$.bind(this)]];
};
$goog$inherits$$($castApp$core$WebViewImpl$$, $castApp$core$WebView$$);
var $castApp$core$WebViewImpl$START_ABORTING_EVENTS_$$ = ["exit", "loadabort", "unresponsive"], $castApp$core$WebViewImpl$logger_$$ = $castApp$log$getLogger$$("core.WebViewImpl");
$castApp$core$WebViewImpl$$.prototype.$o$ = function $$castApp$core$WebViewImpl$$$$$o$$() {
  return this.$a$;
};
var $JSCompiler_StaticMethods_applyFocusBugWorkaround_$$ = function $$JSCompiler_StaticMethods_applyFocusBugWorkaround_$$$($JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$) {
  var $interval$jscomp$4$$ = setInterval(function() {
    document.activeElement === this.$b$ ? clearInterval($interval$jscomp$4$$) : this.$b$.focus();
  }.bind($JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$), 20);
  window.addEventListener("focus", $JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$.$b$.focus.bind($JSCompiler_StaticMethods_applyFocusBugWorkaround_$self$$.$b$), !0);
};
$castApp$core$WebViewImpl$$.prototype.$m$ = function $$castApp$core$WebViewImpl$$$$$m$$() {
  var $self$jscomp$3$$ = this, $resolver$jscomp$17$$ = $goog$Promise$withResolver$$(), $reject$jscomp$12$$ = $resolver$jscomp$17$$.$c$.bind($resolver$jscomp$17$$), $webview$$ = $self$jscomp$3$$.$c$.document.querySelector("#cast-app-ui");
  $webview$$ || ($webview$$ = $self$jscomp$3$$.$c$.document.createElement("webview"), $webview$$.setAttribute("id", "cast-app-ui"), $webview$$.setAttribute("src", $self$jscomp$3$$.$w$));
  $castApp$core$WebViewImpl$START_ABORTING_EVENTS_$$.forEach(function($self$jscomp$3$$) {
    $webview$$.addEventListener($self$jscomp$3$$, $reject$jscomp$12$$);
  });
  var $resolve$jscomp$13$$ = function $$resolve$jscomp$13$$$() {
    var $reject$jscomp$12$$ = $webview$$.contentWindow;
    $self$jscomp$3$$.$b$ = $webview$$;
    $self$jscomp$3$$.$a$ = new $castApp$WindowMessenger$$($self$jscomp$3$$.$c$, $reject$jscomp$12$$, $self$jscomp$3$$.$v$, function() {
      $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($self$jscomp$3$$.$f$, new $goog$events$Event$$("originViolation"));
    }, $castApp$anonymizeProtocolMessage$$);
    $resolver$jscomp$17$$.$b$();
    $JSCompiler_StaticMethods_applyFocusBugWorkaround_$$($self$jscomp$3$$);
  };
  $webview$$.addEventListener("contentload", $resolve$jscomp$13$$);
  $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$17$$.$a$, function() {
    $castApp$core$WebViewImpl$START_ABORTING_EVENTS_$$.forEach(function($self$jscomp$3$$) {
      $webview$$.removeEventListener($self$jscomp$3$$, $reject$jscomp$12$$);
    });
    $webview$$.removeEventListener("contentload", $resolve$jscomp$13$$);
  });
  $self$jscomp$3$$.$i$.forEach(function($self$jscomp$3$$) {
    $webview$$.addEventListener.apply($webview$$, $self$jscomp$3$$);
  });
  $webview$$.parentElement || $self$jscomp$3$$.$c$.document.body.appendChild($webview$$);
  $self$jscomp$3$$.$b$ = $webview$$;
  return $resolver$jscomp$17$$.$a$;
};
$castApp$core$WebViewImpl$$.prototype.$l$ = function $$castApp$core$WebViewImpl$$$$$l$$() {
  this.$a$ = null;
  if (this.$b$ && this.$b$.parentElement) {
    var $webview$jscomp$1$$ = this.$b$;
    this.$b$ = null;
    $webview$jscomp$1$$.parentElement.removeChild($webview$jscomp$1$$);
    this.$i$.forEach(function($params$jscomp$5$$) {
      $webview$jscomp$1$$.removeEventListener.apply($webview$jscomp$1$$, $params$jscomp$5$$);
    });
  }
  return $goog$Promise$resolve$$();
};
$castApp$core$WebViewImpl$$.prototype.$s$ = function $$castApp$core$WebViewImpl$$$$$s$$() {
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$f$, new $castApp$core$WebView$RedirectEvent$$);
};
$castApp$core$WebViewImpl$$.prototype.$u$ = function $$castApp$core$WebViewImpl$$$$$u$$($event$jscomp$9$$) {
  var $targetUrl$$ = $event$jscomp$9$$.targetUrl, $disposition$$ = $event$jscomp$9$$.windowOpenDisposition, $allowedUrl_parsedUrl$$ = $goog$Uri$parse$$($targetUrl$$), $isForegroundTab_scheme$jscomp$4$$ = $allowedUrl_parsedUrl$$.$c$, $domain$jscomp$3$$ = $allowedUrl_parsedUrl$$.$f$, $allowedUrl_parsedUrl$$ = "https" === $isForegroundTab_scheme$jscomp$4$$ && ("www.google.com" === $domain$jscomp$3$$ || "support.google.com" === $domain$jscomp$3$$ || "chromecast.com" === $domain$jscomp$3$$) || "http" === 
  $isForegroundTab_scheme$jscomp$4$$ && $goog$net$IpAddress$fromString$$($domain$jscomp$3$$) && 8008 === $allowedUrl_parsedUrl$$.$h$ && "/setup/NOTICE.html.gz" === $allowedUrl_parsedUrl$$.$b$;
  !$allowedUrl_parsedUrl$$ && 0 <= $goog$array$indexOf$$(this.$g$, $targetUrl$$) && ($allowedUrl_parsedUrl$$ = !0);
  $isForegroundTab_scheme$jscomp$4$$ = "new_foreground_tab" === $disposition$$;
  $allowedUrl_parsedUrl$$ && ($isForegroundTab_scheme$jscomp$4$$ || "new_background_tab" === $disposition$$) ? chrome.tabs.create({url:$targetUrl$$, active:$isForegroundTab_scheme$jscomp$4$$}) : $castApp$log$warning$$($castApp$core$WebViewImpl$logger_$$, "New window request denied. Target URL: " + $event$jscomp$9$$.targetUrl);
  $event$jscomp$9$$.window.discard();
};
var $castApp$core$DeviceManagerEnvironment$$ = function $$castApp$core$DeviceManagerEnvironment$$$($win$jscomp$9$$, $ui$$, $http$$, $goToSetupPage$$, $goToDevicesPage$$, $goToDeviceSettingsPage$$, $reload$$, $castSdk$$, $webview$jscomp$2$$, $getBrowserUiLanguage$$, $deviceMonitor$$) {
  this.$b$ = $ui$$;
  this.$g$ = $http$$;
  this.$f$ = $win$jscomp$9$$.localStorage;
  this.$l$ = $goToSetupPage$$;
  this.$c$ = $goToDevicesPage$$;
  this.$m$ = $webview$jscomp$2$$;
  this.$j$ = $goToDeviceSettingsPage$$;
  this.reload = $reload$$;
  this.$i$ = $castSdk$$;
  this.$h$ = $getBrowserUiLanguage$$;
  this.$a$ = $deviceMonitor$$;
};
var $goog$math$ExponentialBackoff$$ = function $$goog$math$ExponentialBackoff$$$($initialValue$$, $maxValue$$, $opt_randomFactor$$, $opt_backoffFactor$$) {
  this.$c$ = $initialValue$$;
  this.$f$ = $maxValue$$;
  this.$a$ = this.$b$ = $initialValue$$;
  this.$g$ = $opt_randomFactor$$ || 0;
  this.$h$ = $opt_backoffFactor$$ || 2;
};
$goog$math$ExponentialBackoff$$.prototype.reset = function $$goog$math$ExponentialBackoff$$$$reset$() {
  this.$a$ = this.$b$ = this.$c$;
};
var $JSCompiler_StaticMethods_backoff$$ = function $$JSCompiler_StaticMethods_backoff$$$($JSCompiler_StaticMethods_backoff$self$$) {
  $JSCompiler_StaticMethods_backoff$self$$.$a$ = Math.min($JSCompiler_StaticMethods_backoff$self$$.$f$, $JSCompiler_StaticMethods_backoff$self$$.$a$ * $JSCompiler_StaticMethods_backoff$self$$.$h$);
  $JSCompiler_StaticMethods_backoff$self$$.$b$ = Math.min($JSCompiler_StaticMethods_backoff$self$$.$f$, $JSCompiler_StaticMethods_backoff$self$$.$a$ + ($JSCompiler_StaticMethods_backoff$self$$.$g$ ? Math.round($JSCompiler_StaticMethods_backoff$self$$.$g$ * (Math.random() - 0.5) * 2 * $JSCompiler_StaticMethods_backoff$self$$.$a$) : 0));
};
var $castApp$eventPage$Message$$ = function $$castApp$eventPage$Message$$$($subtype$jscomp$1$$, $opt_devices$$) {
  this.type = "cast_app";
  this.originId = window["castApp.eventPage.Message.OriginID"] || void 0;
  this.subtype = $subtype$jscomp$1$$;
  this.devices = $opt_devices$$;
  this.logRecord = this.deviceJustSetUp = void 0;
};
$goog$exportSymbol$$("castApp.eventPage.Message", $castApp$eventPage$Message$$);
$castApp$eventPage$Message$$.DeviceData = function $$castApp$eventPage$Message$$$DeviceData$($ipAddress$jscomp$2$$, $appId$jscomp$3$$, $sessionId$jscomp$7$$) {
  this.ipAddress = $ipAddress$jscomp$2$$;
  this.appId = $appId$jscomp$3$$;
  this.sessionId = $sessionId$jscomp$7$$;
};
var $castApp$eventPage$Message$DeviceJustSetUp$$ = function $$castApp$eventPage$Message$DeviceJustSetUp$$$($ipAddress$jscomp$3$$, $name$jscomp$99$$, $udn$jscomp$1$$, $opt_modelName$$) {
  this.ipAddress = $ipAddress$jscomp$3$$;
  this.name = $name$jscomp$99$$;
  this.udn = $udn$jscomp$1$$;
  this.modelName = $opt_modelName$$;
};
$castApp$eventPage$Message$$.DeviceJustSetUp = $castApp$eventPage$Message$DeviceJustSetUp$$;
var $castApp$eventPage$Message$DeviceCapabilities$$ = function $$castApp$eventPage$Message$DeviceCapabilities$$$() {
};
$castApp$eventPage$Message$$.DeviceCapabilities = $castApp$eventPage$Message$DeviceCapabilities$$;
var $castApp$eventPage$Message$LogRecord$$ = function $$castApp$eventPage$Message$LogRecord$$$($levelValue$$, $msg$jscomp$39$$, $loggerName$jscomp$6$$, $time$jscomp$3$$) {
  this.levelValue = $levelValue$$;
  this.msg = $msg$jscomp$39$$;
  this.loggerName = $loggerName$jscomp$6$$;
  this.time = $time$jscomp$3$$;
};
$castApp$eventPage$Message$$.LogRecord = $castApp$eventPage$Message$LogRecord$$;
var $castApp$core$anonymizeEventPageMessage$$ = function $$castApp$core$anonymizeEventPageMessage$$$($rawMsg$jscomp$15$$) {
  return $rawMsg$jscomp$15$$.devices || $rawMsg$jscomp$15$$.deviceJustSetUp ? $goog$Promise$all$$([$rawMsg$jscomp$15$$.devices ? $$jscomp$scope$anonymizeDevices_$$($rawMsg$jscomp$15$$.devices) : void 0, $rawMsg$jscomp$15$$.deviceJustSetUp ? $$jscomp$scope$anonymizeDeviceJustSetUp_$$($rawMsg$jscomp$15$$.deviceJustSetUp) : void 0]).then(function($anonymized$jscomp$3_anonymizedDevices$jscomp$1$$) {
    var $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$ = $$jscomp$makeIterator$$($anonymized$jscomp$3_anonymizedDevices$jscomp$1$$);
    $anonymized$jscomp$3_anonymizedDevices$jscomp$1$$ = $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$.next().value;
    var $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$ = $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$.next().value, $anonymizedMsg$$ = $goog$object$clone$$($rawMsg$jscomp$15$$);
    $anonymizedMsg$$.devices = $anonymized$jscomp$3_anonymizedDevices$jscomp$1$$;
    $anonymizedMsg$$.deviceJustSetUp = $$jscomp$destructuring$var5_anonymizedDeviceJustSetUp$$;
    return JSON.stringify($anonymizedMsg$$);
  }) : $goog$Promise$resolve$$(JSON.stringify($rawMsg$jscomp$15$$));
}, $$jscomp$scope$anonymizeDevices_$$ = function $$$jscomp$scope$anonymizeDevices_$$$($devices$jscomp$3$$) {
  return $goog$Promise$all$$($devices$jscomp$3$$.map(function($devices$jscomp$3$$) {
    return $castApp$log$anonymizeString$$($devices$jscomp$3$$.ipAddress).then(function($deviceData$$) {
      var $anonymizedIpAddress$jscomp$1$$ = $goog$object$clone$$($devices$jscomp$3$$);
      $anonymizedIpAddress$jscomp$1$$.ipAddress = $deviceData$$;
      return $anonymizedIpAddress$jscomp$1$$;
    });
  }));
}, $$jscomp$scope$anonymizeDeviceJustSetUp_$$ = function $$$jscomp$scope$anonymizeDeviceJustSetUp_$$$($deviceJustSetUp$$) {
  return $goog$Promise$all$$([$castApp$log$anonymizeString$$($deviceJustSetUp$$.ipAddress), $castApp$log$anonymizeString$$($deviceJustSetUp$$.name), $castApp$log$anonymizeString$$($deviceJustSetUp$$.udn)]).then(function($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$) {
    var $$jscomp$destructuring$var6_anonymizedUdn$$ = $$jscomp$makeIterator$$($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$);
    $anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$ = $$jscomp$destructuring$var6_anonymizedUdn$$.next().value;
    var $anonymizedName$jscomp$4$$ = $$jscomp$destructuring$var6_anonymizedUdn$$.next().value, $$jscomp$destructuring$var6_anonymizedUdn$$ = $$jscomp$destructuring$var6_anonymizedUdn$$.next().value;
    $anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$ = new $castApp$eventPage$Message$DeviceJustSetUp$$($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$, $anonymizedName$jscomp$4$$, $$jscomp$destructuring$var6_anonymizedUdn$$, $deviceJustSetUp$$.modelName);
    $deviceJustSetUp$$.capabilities && ($anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$.capabilities = $deviceJustSetUp$$.capabilities);
    return $anonymized$jscomp$4_anonymizedIpAddress$jscomp$2_retVal$jscomp$3$$;
  });
};
var $castApp$eventPage$Client$$ = function $$castApp$eventPage$Client$$$() {
  $goog$events$EventTarget$$.call(this);
};
$goog$inherits$$($castApp$eventPage$Client$$, $goog$events$EventTarget$$);
var $castApp$eventPage$Client$Event$$ = function $$castApp$eventPage$Client$Event$$$($msg$jscomp$41$$) {
  $goog$events$Event$$.call(this, $msg$jscomp$41$$.subtype);
  this.msg = $msg$jscomp$41$$;
};
$goog$inherits$$($castApp$eventPage$Client$Event$$, $goog$events$Event$$);
var $castApp$eventPage$ChromeClient$$ = function $$castApp$eventPage$ChromeClient$$$() {
  this.$b$ = new $goog$math$ExponentialBackoff$$(100, 6E4);
  this.$f$ = null;
  $goog$events$EventTarget$$.call(this);
};
$goog$inherits$$($castApp$eventPage$ChromeClient$$, $castApp$eventPage$Client$$);
var $castApp$eventPage$ChromeClient$logger_$$ = $castApp$log$getLogger$$("eventPage.ChromeClient"), $castApp$eventPage$ChromeClient$startPromise_$$ = null;
$castApp$eventPage$ChromeClient$$.prototype.start = function $$castApp$eventPage$ChromeClient$$$$start$() {
  var $$jscomp$this$jscomp$2$$ = this;
  $castApp$eventPage$ChromeClient$startPromise_$$ || (chrome.runtime.onMessage.addListener(this.$g$.bind(this)), $castApp$eventPage$ChromeClient$startPromise_$$ = $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_thenAlways$$(new $goog$Promise$$(function($resolve$jscomp$14$$, $reject$jscomp$13$$) {
    chrome.runtime.getBackgroundPage(function() {
      chrome.runtime.lastError ? $reject$jscomp$13$$(new $castApp$core$ChromeRuntimeLastError$$(chrome.runtime.lastError.message)) : (window["castApp.eventPage.Message.OriginID"] = $goog$string$getRandomString$$(), $$jscomp$this$jscomp$2$$.$a$(), $castApp$utils$waitForEvent$$($$jscomp$this$jscomp$2$$, "serviceReady").then(function() {
        $JSCompiler_StaticMethods_startSendingLogsToEventPage_$$($$jscomp$this$jscomp$2$$);
        $resolve$jscomp$14$$();
      }, $reject$jscomp$13$$));
    });
  }), function() {
    clearTimeout($$jscomp$this$jscomp$2$$.$f$);
  }), function($$jscomp$this$jscomp$2$$) {
    $$jscomp$this$jscomp$2$$ instanceof $goog$Promise$CancellationError$$ ? $castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "Start canceled.") : $castApp$log$errorWithCause$$($castApp$eventPage$ChromeClient$logger_$$, $$jscomp$this$jscomp$2$$, "Failed to start.");
    throw $$jscomp$this$jscomp$2$$;
  }));
  return $castApp$eventPage$ChromeClient$startPromise_$$;
};
$castApp$eventPage$ChromeClient$$.prototype.$a$ = function $$castApp$eventPage$ChromeClient$$$$$a$$() {
  $castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "requestServiceCheck_");
  $JSCompiler_StaticMethods_sendMessageNow_$$("serviceCheck");
  this.$f$ = setTimeout(this.$a$.bind(this), this.$b$.$b$);
  $JSCompiler_StaticMethods_backoff$$(this.$b$);
};
$castApp$eventPage$ChromeClient$$.prototype.sendMessage = function $$castApp$eventPage$ChromeClient$$$$sendMessage$($subTypeOrMessage$$) {
  return this.start().then(function() {
    $JSCompiler_StaticMethods_sendMessageNow_$$($subTypeOrMessage$$);
  });
};
var $JSCompiler_StaticMethods_sendMessageNow_$$ = function $$JSCompiler_StaticMethods_sendMessageNow_$$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$) {
  $msg$jscomp$42_subTypeOrMessage$jscomp$1$$ = $goog$isObject$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$) ? $msg$jscomp$42_subTypeOrMessage$jscomp$1$$ : new $castApp$eventPage$Message$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$);
  "logRecord" !== $msg$jscomp$42_subTypeOrMessage$jscomp$1$$.subtype && $castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "Out: ", $castApp$core$anonymizeEventPageMessage$$($msg$jscomp$42_subTypeOrMessage$jscomp$1$$));
  chrome.runtime.sendMessage($msg$jscomp$42_subTypeOrMessage$jscomp$1$$);
}, $JSCompiler_StaticMethods_startDeviceMonitor$$ = function $$JSCompiler_StaticMethods_startDeviceMonitor$$$($JSCompiler_StaticMethods_startDeviceMonitor$self$$) {
  $JSCompiler_StaticMethods_startDeviceMonitor$self$$.sendMessage("startDeviceMonitor");
};
$castApp$eventPage$ChromeClient$$.prototype.$g$ = function $$castApp$eventPage$ChromeClient$$$$$g$$($rawMsg$jscomp$16$$) {
  "object" === typeof $rawMsg$jscomp$16$$ && "cast_app" === $rawMsg$jscomp$16$$.type && "logRecord" !== $rawMsg$jscomp$16$$.subtype && ($castApp$log$info$$($castApp$eventPage$ChromeClient$logger_$$, "In: ", $castApp$core$anonymizeEventPageMessage$$($rawMsg$jscomp$16$$)), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $castApp$eventPage$Client$Event$$($rawMsg$jscomp$16$$)));
  return !1;
};
var $JSCompiler_StaticMethods_startSendingLogsToEventPage_$$ = function $$JSCompiler_StaticMethods_startSendingLogsToEventPage_$$$($JSCompiler_StaticMethods_startSendingLogsToEventPage_$self$$) {
  $JSCompiler_StaticMethods_addHandler$$(function($logRecord$jscomp$11$$) {
    var $msg$jscomp$43$$ = new $castApp$eventPage$Message$$("logRecord");
    $msg$jscomp$43$$.logRecord = new $castApp$eventPage$Message$LogRecord$$($logRecord$jscomp$11$$.$getLevel$().value, $logRecord$jscomp$11$$.getMessage(), $logRecord$jscomp$11$$.$loggerName_$, $logRecord$jscomp$11$$.$time_$);
    $JSCompiler_StaticMethods_startSendingLogsToEventPage_$self$$.sendMessage($msg$jscomp$43$$);
  });
};
var $goog$locale$getLanguageSubTag$$ = function $$goog$locale$getLanguageSubTag$$$($languageCode_result$jscomp$33$$) {
  return ($languageCode_result$jscomp$33$$ = $languageCode_result$jscomp$33$$.match(/^\w{2,3}([-_]|$)/)) ? $languageCode_result$jscomp$33$$[0].replace(/[_-]/g, "") : "";
}, $goog$locale$getRegionSubTag$$ = function $$goog$locale$getRegionSubTag$$$($languageCode$jscomp$1_result$jscomp$34$$) {
  return ($languageCode$jscomp$1_result$jscomp$34$$ = $languageCode$jscomp$1_result$jscomp$34$$.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/)) ? $languageCode$jscomp$1_result$jscomp$34$$[0].replace(/[_-]/g, "") : "";
};
var $goog$userAgent$product$FIREFOX$$ = $goog$labs$userAgent$util$matchUserAgent$$("Firefox"), $goog$userAgent$product$IPHONE$$ = $goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPod"), $goog$userAgent$product$IPAD$$ = $goog$labs$userAgent$util$matchUserAgent$$("iPad"), $goog$userAgent$product$ANDROID$$ = $goog$labs$userAgent$util$matchUserAgent$$("Android") && !($goog$labs$userAgent$browser$matchChrome_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Firefox") || 
$goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("Silk")), $goog$userAgent$product$CHROME$$ = $goog$labs$userAgent$browser$matchChrome_$$(), $goog$userAgent$product$SAFARI$$ = $goog$labs$userAgent$util$matchUserAgent$$("Safari") && !($goog$labs$userAgent$browser$matchChrome_$$() || $goog$labs$userAgent$util$matchUserAgent$$("Coast") || $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("Edge") || $goog$labs$userAgent$util$matchUserAgent$$("Silk") || 
$goog$labs$userAgent$util$matchUserAgent$$("Android")) && !($goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod"));
var $goog$userAgent$product$getFirstRegExpGroup_$$ = function $$goog$userAgent$product$getFirstRegExpGroup_$$$($arr$jscomp$81_re$jscomp$3$$) {
  return ($arr$jscomp$81_re$jscomp$3$$ = $arr$jscomp$81_re$jscomp$3$$.exec($goog$labs$userAgent$util$userAgent_$$)) ? $arr$jscomp$81_re$jscomp$3$$[1] : "";
}, $goog$userAgent$product$VERSION$$ = function() {
  if ($goog$userAgent$product$FIREFOX$$) {
    return $goog$userAgent$product$getFirstRegExpGroup_$$(/Firefox\/([0-9.]+)/);
  }
  if ($goog$userAgent$IE$$ || $goog$userAgent$EDGE$$ || $goog$userAgent$OPERA$$) {
    return $goog$userAgent$VERSION$$;
  }
  if ($goog$userAgent$product$CHROME$$) {
    return $goog$userAgent$product$getFirstRegExpGroup_$$(/Chrome\/([0-9.]+)/);
  }
  if ($goog$userAgent$product$SAFARI$$ && !($goog$labs$userAgent$platform$isIphone$$() || $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("iPod"))) {
    return $goog$userAgent$product$getFirstRegExpGroup_$$(/Version\/([0-9.]+)/);
  }
  if ($goog$userAgent$product$IPHONE$$ || $goog$userAgent$product$IPAD$$) {
    var $arr$jscomp$80_version$jscomp$18$$ = /Version\/(\S+).*Mobile\/(\S+)/.exec($goog$labs$userAgent$util$userAgent_$$);
    if ($arr$jscomp$80_version$jscomp$18$$) {
      return $arr$jscomp$80_version$jscomp$18$$[1] + "." + $arr$jscomp$80_version$jscomp$18$$[2];
    }
  } else {
    if ($goog$userAgent$product$ANDROID$$) {
      return ($arr$jscomp$80_version$jscomp$18$$ = $goog$userAgent$product$getFirstRegExpGroup_$$(/Android\s+([0-9.]+)/)) ? $arr$jscomp$80_version$jscomp$18$$ : $goog$userAgent$product$getFirstRegExpGroup_$$(/Version\/([0-9.]+)/);
    }
  }
  return "";
}();
var $goog$crypt$base64$byteToCharMap_$$ = null, $goog$crypt$base64$charToByteMap_$$ = null, $goog$crypt$base64$decodeStringToByteArray$$ = function $$goog$crypt$base64$decodeStringToByteArray$$$($input$jscomp$11$$) {
  var $output$jscomp$6$$ = [];
  $goog$crypt$base64$decodeStringInternal_$$($input$jscomp$11$$, function pushByte$jscomp$1($input$jscomp$11$$) {
    $output$jscomp$6$$.push($input$jscomp$11$$);
  });
  return $output$jscomp$6$$;
}, $goog$crypt$base64$decodeStringInternal_$$ = function $$goog$crypt$base64$decodeStringInternal_$$$($input$jscomp$13$$, $pushByte$jscomp$3$$) {
  function $getByte$$($pushByte$jscomp$3$$) {
    for (;$nextCharIndex$$ < $input$jscomp$13$$.length;) {
      var $getByte$$ = $input$jscomp$13$$.charAt($nextCharIndex$$++), $byte1$jscomp$1$$ = $goog$crypt$base64$charToByteMap_$$[$getByte$$];
      if (null != $byte1$jscomp$1$$) {
        return $byte1$jscomp$1$$;
      }
      if (!/^[\s\xa0]*$/.test($getByte$$)) {
        throw Error("Unknown base64 encoding at char: " + $getByte$$);
      }
    }
    return $pushByte$jscomp$3$$;
  }
  $goog$crypt$base64$init_$$();
  for (var $nextCharIndex$$ = 0;;) {
    var $byte1$jscomp$1$$ = $getByte$$(-1), $byte2$jscomp$1$$ = $getByte$$(0), $byte3$jscomp$1$$ = $getByte$$(64), $byte4$$ = $getByte$$(64);
    if (64 === $byte4$$ && -1 === $byte1$jscomp$1$$) {
      break;
    }
    $pushByte$jscomp$3$$($byte1$jscomp$1$$ << 2 | $byte2$jscomp$1$$ >> 4);
    64 != $byte3$jscomp$1$$ && ($pushByte$jscomp$3$$($byte2$jscomp$1$$ << 4 & 240 | $byte3$jscomp$1$$ >> 2), 64 != $byte4$$ && $pushByte$jscomp$3$$($byte3$jscomp$1$$ << 6 & 192 | $byte4$$));
  }
}, $goog$crypt$base64$init_$$ = function $$goog$crypt$base64$init_$$$() {
  if (!$goog$crypt$base64$byteToCharMap_$$) {
    $goog$crypt$base64$byteToCharMap_$$ = {};
    $goog$crypt$base64$charToByteMap_$$ = {};
    for (var $i$jscomp$165$$ = 0;65 > $i$jscomp$165$$;$i$jscomp$165$$++) {
      $goog$crypt$base64$byteToCharMap_$$[$i$jscomp$165$$] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt($i$jscomp$165$$), $goog$crypt$base64$charToByteMap_$$[$goog$crypt$base64$byteToCharMap_$$[$i$jscomp$165$$]] = $i$jscomp$165$$, 62 <= $i$jscomp$165$$ && ($goog$crypt$base64$charToByteMap_$$["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt($i$jscomp$165$$)] = $i$jscomp$165$$);
    }
  }
};
var $goog$crypt$Hash$$ = function $$goog$crypt$Hash$$$() {
  this.$b$ = -1;
};
var $goog$crypt$Sha1$$ = function $$goog$crypt$Sha1$$$() {
  this.$b$ = 64;
  this.$a$ = [];
  this.$h$ = [];
  this.$i$ = [];
  this.$f$ = [];
  this.$f$[0] = 128;
  for (var $i$jscomp$166$$ = 1;$i$jscomp$166$$ < this.$b$;++$i$jscomp$166$$) {
    this.$f$[$i$jscomp$166$$] = 0;
  }
  this.$g$ = this.$c$ = 0;
  this.reset();
};
$goog$inherits$$($goog$crypt$Sha1$$, $goog$crypt$Hash$$);
$goog$crypt$Sha1$$.prototype.reset = function $$goog$crypt$Sha1$$$$reset$() {
  this.$a$[0] = 1732584193;
  this.$a$[1] = 4023233417;
  this.$a$[2] = 2562383102;
  this.$a$[3] = 271733878;
  this.$a$[4] = 3285377520;
  this.$g$ = this.$c$ = 0;
};
var $JSCompiler_StaticMethods_compress_$$ = function $$JSCompiler_StaticMethods_compress_$$$($JSCompiler_StaticMethods_compress_$self$$, $a$jscomp$24_buf$jscomp$4$$, $b$jscomp$24_opt_offset$jscomp$2$$) {
  $b$jscomp$24_opt_offset$jscomp$2$$ || ($b$jscomp$24_opt_offset$jscomp$2$$ = 0);
  var $W$$ = $JSCompiler_StaticMethods_compress_$self$$.$i$;
  if ($goog$isString$$($a$jscomp$24_buf$jscomp$4$$)) {
    for (var $i$jscomp$167$$ = 0;16 > $i$jscomp$167$$;$i$jscomp$167$$++) {
      $W$$[$i$jscomp$167$$] = $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$2$$) << 24 | $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$2$$ + 1) << 16 | $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$2$$ + 2) << 8 | $a$jscomp$24_buf$jscomp$4$$.charCodeAt($b$jscomp$24_opt_offset$jscomp$2$$ + 3), $b$jscomp$24_opt_offset$jscomp$2$$ += 4;
    }
  } else {
    for ($i$jscomp$167$$ = 0;16 > $i$jscomp$167$$;$i$jscomp$167$$++) {
      $W$$[$i$jscomp$167$$] = $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$2$$] << 24 | $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$2$$ + 1] << 16 | $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$2$$ + 2] << 8 | $a$jscomp$24_buf$jscomp$4$$[$b$jscomp$24_opt_offset$jscomp$2$$ + 3], $b$jscomp$24_opt_offset$jscomp$2$$ += 4;
    }
  }
  for ($i$jscomp$167$$ = 16;80 > $i$jscomp$167$$;$i$jscomp$167$$++) {
    var $f$jscomp$56_t$$ = $W$$[$i$jscomp$167$$ - 3] ^ $W$$[$i$jscomp$167$$ - 8] ^ $W$$[$i$jscomp$167$$ - 14] ^ $W$$[$i$jscomp$167$$ - 16];
    $W$$[$i$jscomp$167$$] = ($f$jscomp$56_t$$ << 1 | $f$jscomp$56_t$$ >>> 31) & 4294967295;
  }
  $a$jscomp$24_buf$jscomp$4$$ = $JSCompiler_StaticMethods_compress_$self$$.$a$[0];
  $b$jscomp$24_opt_offset$jscomp$2$$ = $JSCompiler_StaticMethods_compress_$self$$.$a$[1];
  for (var $c$jscomp$6$$ = $JSCompiler_StaticMethods_compress_$self$$.$a$[2], $d$jscomp$1$$ = $JSCompiler_StaticMethods_compress_$self$$.$a$[3], $e$jscomp$45$$ = $JSCompiler_StaticMethods_compress_$self$$.$a$[4], $k$jscomp$1$$, $i$jscomp$167$$ = 0;80 > $i$jscomp$167$$;$i$jscomp$167$$++) {
    40 > $i$jscomp$167$$ ? 20 > $i$jscomp$167$$ ? ($f$jscomp$56_t$$ = $d$jscomp$1$$ ^ $b$jscomp$24_opt_offset$jscomp$2$$ & ($c$jscomp$6$$ ^ $d$jscomp$1$$), $k$jscomp$1$$ = 1518500249) : ($f$jscomp$56_t$$ = $b$jscomp$24_opt_offset$jscomp$2$$ ^ $c$jscomp$6$$ ^ $d$jscomp$1$$, $k$jscomp$1$$ = 1859775393) : 60 > $i$jscomp$167$$ ? ($f$jscomp$56_t$$ = $b$jscomp$24_opt_offset$jscomp$2$$ & $c$jscomp$6$$ | $d$jscomp$1$$ & ($b$jscomp$24_opt_offset$jscomp$2$$ | $c$jscomp$6$$), $k$jscomp$1$$ = 2400959708) : ($f$jscomp$56_t$$ = 
    $b$jscomp$24_opt_offset$jscomp$2$$ ^ $c$jscomp$6$$ ^ $d$jscomp$1$$, $k$jscomp$1$$ = 3395469782), $f$jscomp$56_t$$ = ($a$jscomp$24_buf$jscomp$4$$ << 5 | $a$jscomp$24_buf$jscomp$4$$ >>> 27) + $f$jscomp$56_t$$ + $e$jscomp$45$$ + $k$jscomp$1$$ + $W$$[$i$jscomp$167$$] & 4294967295, $e$jscomp$45$$ = $d$jscomp$1$$, $d$jscomp$1$$ = $c$jscomp$6$$, $c$jscomp$6$$ = ($b$jscomp$24_opt_offset$jscomp$2$$ << 30 | $b$jscomp$24_opt_offset$jscomp$2$$ >>> 2) & 4294967295, $b$jscomp$24_opt_offset$jscomp$2$$ = $a$jscomp$24_buf$jscomp$4$$, 
    $a$jscomp$24_buf$jscomp$4$$ = $f$jscomp$56_t$$;
  }
  $JSCompiler_StaticMethods_compress_$self$$.$a$[0] = $JSCompiler_StaticMethods_compress_$self$$.$a$[0] + $a$jscomp$24_buf$jscomp$4$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$a$[1] = $JSCompiler_StaticMethods_compress_$self$$.$a$[1] + $b$jscomp$24_opt_offset$jscomp$2$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$a$[2] = $JSCompiler_StaticMethods_compress_$self$$.$a$[2] + $c$jscomp$6$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$a$[3] = $JSCompiler_StaticMethods_compress_$self$$.$a$[3] + $d$jscomp$1$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$a$[4] = $JSCompiler_StaticMethods_compress_$self$$.$a$[4] + $e$jscomp$45$$ & 4294967295;
};
$goog$crypt$Sha1$$.prototype.update = function $$goog$crypt$Sha1$$$$update$($bytes$jscomp$2$$, $opt_length$jscomp$11$$) {
  if (null != $bytes$jscomp$2$$) {
    $goog$isDef$$($opt_length$jscomp$11$$) || ($opt_length$jscomp$11$$ = $bytes$jscomp$2$$.length);
    for (var $lengthMinusBlock$$ = $opt_length$jscomp$11$$ - this.$b$, $n$jscomp$10$$ = 0, $buf$jscomp$5$$ = this.$h$, $inbuf$$ = this.$c$;$n$jscomp$10$$ < $opt_length$jscomp$11$$;) {
      if (0 == $inbuf$$) {
        for (;$n$jscomp$10$$ <= $lengthMinusBlock$$;) {
          $JSCompiler_StaticMethods_compress_$$(this, $bytes$jscomp$2$$, $n$jscomp$10$$), $n$jscomp$10$$ += this.$b$;
        }
      }
      if ($goog$isString$$($bytes$jscomp$2$$)) {
        for (;$n$jscomp$10$$ < $opt_length$jscomp$11$$;) {
          if ($buf$jscomp$5$$[$inbuf$$] = $bytes$jscomp$2$$.charCodeAt($n$jscomp$10$$), ++$inbuf$$, ++$n$jscomp$10$$, $inbuf$$ == this.$b$) {
            $JSCompiler_StaticMethods_compress_$$(this, $buf$jscomp$5$$);
            $inbuf$$ = 0;
            break;
          }
        }
      } else {
        for (;$n$jscomp$10$$ < $opt_length$jscomp$11$$;) {
          if ($buf$jscomp$5$$[$inbuf$$] = $bytes$jscomp$2$$[$n$jscomp$10$$], ++$inbuf$$, ++$n$jscomp$10$$, $inbuf$$ == this.$b$) {
            $JSCompiler_StaticMethods_compress_$$(this, $buf$jscomp$5$$);
            $inbuf$$ = 0;
            break;
          }
        }
      }
    }
    this.$c$ = $inbuf$$;
    this.$g$ += $opt_length$jscomp$11$$;
  }
};
var $castApp$core$PinGenerator$logger_$$ = $castApp$log$getLogger$$("cv.PinGenerator"), $castApp$core$PinGenerator$getLengthInfoForBlock_$$ = function $$castApp$core$PinGenerator$getLengthInfoForBlock_$$$($cert$$, $start$jscomp$15$$) {
  if ($start$jscomp$15$$ + 1 >= $cert$$.length) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Length byte out of certificate bounds: at " + $start$jscomp$15$$ + "; cert length: " + $cert$$.length), null;
  }
  if (!($cert$$[$start$jscomp$15$$ + 1] & 128)) {
    return {length:$cert$$[$start$jscomp$15$$ + 1], $lengthBytesCount$:1};
  }
  var $lengthBytesCount$$ = $cert$$[$start$jscomp$15$$ + 1] & 127;
  if ($start$jscomp$15$$ + $lengthBytesCount$$ + 1 >= $cert$$.length) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Length info out of certificate bounds at: " + $start$jscomp$15$$ + " length bytes count: " + $lengthBytesCount$$ + "; certificate length: " + $cert$$.length), null;
  }
  if (2 < $lengthBytesCount$$) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Block length over 16 bits not allowed; at " + $start$jscomp$15$$), null;
  }
  for (var $length$jscomp$27$$ = 0, $i$jscomp$169$$ = 2;$i$jscomp$169$$ <= $lengthBytesCount$$ + 1;$i$jscomp$169$$++) {
    $length$jscomp$27$$ = $length$jscomp$27$$ << 8 | $cert$$[$start$jscomp$15$$ + $i$jscomp$169$$];
  }
  return {length:$length$jscomp$27$$, $lengthBytesCount$:$lengthBytesCount$$ + 1};
}, $castApp$core$PinGenerator$extractInfoFromDerCertificate_$$ = function $$castApp$core$PinGenerator$extractInfoFromDerCertificate_$$$($cert$jscomp$1$$) {
  var $instructions$$ = [{action:"step", code:48, optional:!1}, {action:"step", code:48, optional:!1}, {action:"skip", code:160, optional:!0}, {action:"skip", code:2, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"return", code:48, optional:!1}], $start$jscomp$16$$ = 0, $step$jscomp$3$$ = -1;
  if (65535 < $cert$jscomp$1$$.length) {
    return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Certificate too long: " + $cert$jscomp$1$$.length), null;
  }
  for (;$instructions$$.length;) {
    var $current$jscomp$3$$ = $instructions$$.shift();
    $step$jscomp$3$$++;
    $castApp$log$info$$($castApp$core$PinGenerator$logger_$$, "step: " + $step$jscomp$3$$ + ", start: " + $start$jscomp$16$$);
    if ($cert$jscomp$1$$[$start$jscomp$16$$] != $current$jscomp$3$$.code) {
      if ($current$jscomp$3$$.optional) {
        $castApp$log$warning$$($castApp$core$PinGenerator$logger_$$, "Skipping instruction " + $current$jscomp$3$$.code + " at step " + $step$jscomp$3$$);
        continue;
      }
      $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Expected certificate byte cert[" + $start$jscomp$16$$ + "] to be " + $current$jscomp$3$$.code + ", but found " + $cert$jscomp$1$$[$start$jscomp$16$$] + " at step " + $step$jscomp$3$$ + " instead.");
      return null;
    }
    var $lengthInfo$$ = $castApp$core$PinGenerator$getLengthInfoForBlock_$$($cert$jscomp$1$$, $start$jscomp$16$$);
    if (!$lengthInfo$$) {
      return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Invalid certificate block length at step " + $step$jscomp$3$$), null;
    }
    var $end$jscomp$5$$ = $start$jscomp$16$$ + $lengthInfo$$.length + $lengthInfo$$.$lengthBytesCount$;
    if ($end$jscomp$5$$ >= $cert$jscomp$1$$.length) {
      return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "The certificate data block at " + $start$jscomp$16$$ + " does not fit the certificate size."), null;
    }
    switch($current$jscomp$3$$.action) {
      case "step":
        $start$jscomp$16$$ += $lengthInfo$$.$lengthBytesCount$ + 1;
        continue;
      case "skip":
        $start$jscomp$16$$ = $end$jscomp$5$$ + 1;
        continue;
      case "return":
        return $goog$array$slice$$($cert$jscomp$1$$, $start$jscomp$16$$, $end$jscomp$5$$ + 1);
      default:
        return $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Invalid certificate parsing intstruction: " + $current$jscomp$3$$.action), null;
    }
  }
  $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Incomplete certificate parsing instructions");
  return null;
}, $castApp$core$PinGenerator$spanToAlpha_$$ = function $$castApp$core$PinGenerator$spanToAlpha_$$$($c$jscomp$7_span$$) {
  for (var $length$jscomp$28$$ = $c$jscomp$7_span$$.length, $residue$$ = 0, $i$jscomp$170$$ = 0;$i$jscomp$170$$ < $length$jscomp$28$$ - 1;$i$jscomp$170$$++) {
    $residue$$ += $c$jscomp$7_span$$[$i$jscomp$170$$];
  }
  $residue$$ = ($c$jscomp$7_span$$[$length$jscomp$28$$ - 1] + 16 * $residue$$) % 24;
  $c$jscomp$7_span$$ = 65 + $residue$$;
  73 <= $c$jscomp$7_span$$ && $c$jscomp$7_span$$++;
  79 <= $c$jscomp$7_span$$ && $c$jscomp$7_span$$++;
  return String.fromCharCode($c$jscomp$7_span$$);
}, $castApp$core$PinGenerator$spanToDigit_$$ = function $$castApp$core$PinGenerator$spanToDigit_$$$($span$jscomp$1$$) {
  return String.fromCharCode(50 + $span$jscomp$1$$[$span$jscomp$1$$.length - 1] % 8);
}, $castApp$core$PinGenerator$xorSpans_$$ = function $$castApp$core$PinGenerator$xorSpans_$$$($bytes$jscomp$3$$, $start1$$) {
  for (var $result$jscomp$38$$ = [], $i$jscomp$171$$ = 0;4 > $i$jscomp$171$$;$i$jscomp$171$$++) {
    $result$jscomp$38$$[$i$jscomp$171$$] = $bytes$jscomp$3$$[$start1$$ + $i$jscomp$171$$] ^ $bytes$jscomp$3$$[16 + $i$jscomp$171$$];
  }
  return $result$jscomp$38$$;
};
var $castApp$core$DeviceVerifier$$ = function $$castApp$core$DeviceVerifier$$$($eurekaInfo$$) {
  this.$a$ = $eurekaInfo$$;
}, $castApp$core$DeviceVerifier$logger$$ = $castApp$log$getLogger$$("core.DeviceVerifier"), $JSCompiler_StaticMethods_verifyImpl_$$ = function $$JSCompiler_StaticMethods_verifyImpl_$$$($JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$, $networkingApi$jscomp$2$$, $nonce$jscomp$3$$, $hotSpotProps$jscomp$1$$) {
  if (!$JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.$f$($hotSpotProps$jscomp$1$$)) {
    return $castApp$log$info$$($castApp$core$DeviceVerifier$logger$$, "SSID or BSSID mismatch."), $goog$Promise$reject$$();
  }
  var $verificationProperties$jscomp$1$$ = $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.$b$($hotSpotProps$jscomp$1$$.bssid);
  if (!$verificationProperties$jscomp$1$$) {
    return $castApp$log$info$$($castApp$core$DeviceVerifier$logger$$, "Some of the required verification properties are missing."), $goog$Promise$reject$$();
  }
  if (!$JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.$c$($nonce$jscomp$3$$)) {
    return $castApp$log$info$$($castApp$core$DeviceVerifier$logger$$, "Nonce mismatch."), $goog$Promise$reject$$();
  }
  $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$ = $networkingApi$jscomp$2$$.verifyDestination($verificationProperties$jscomp$1$$);
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$, function($JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$) {
    $castApp$log$infoWithCause$$($castApp$core$DeviceVerifier$logger$$, $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$, "chrome.networkingPrivate.verifyDestination failed.");
  });
  return $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.then(function($JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$) {
    if (!$JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$) {
      return $goog$Promise$reject$$();
    }
    $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$ = new $castApp$core$storage$VerificationState$$((new Date).getTime(), $verificationProperties$jscomp$1$$);
    var $networkingApi$jscomp$2$$;
    var $nonce$jscomp$3$$ = $verificationProperties$jscomp$1$$.certificate.replace(/[\r\n]/g, ""), $nonce$jscomp$3$$ = $nonce$jscomp$3$$.replace("-----BEGIN CERTIFICATE-----", ""), $nonce$jscomp$3$$ = $nonce$jscomp$3$$.replace("-----END CERTIFICATE-----", "");
    try {
      $networkingApi$jscomp$2$$ = $goog$crypt$base64$decodeStringToByteArray$$($nonce$jscomp$3$$);
    } catch ($exception$jscomp$inline_1024$$) {
      $castApp$log$error$$($castApp$core$PinGenerator$logger_$$, "Failed to convert the certificate from PEM to DER format"), $networkingApi$jscomp$2$$ = null;
    }
    if ($networkingApi$jscomp$2$$) {
      if ($nonce$jscomp$3$$ = $castApp$core$PinGenerator$extractInfoFromDerCertificate_$$($networkingApi$jscomp$2$$)) {
        $networkingApi$jscomp$2$$ = new $goog$crypt$Sha1$$;
        $networkingApi$jscomp$2$$.update($nonce$jscomp$3$$);
        var $nonce$jscomp$3$$ = [], $hotSpotProps$jscomp$1$$ = 8 * $networkingApi$jscomp$2$$.$g$;
        56 > $networkingApi$jscomp$2$$.$c$ ? $networkingApi$jscomp$2$$.update($networkingApi$jscomp$2$$.$f$, 56 - $networkingApi$jscomp$2$$.$c$) : $networkingApi$jscomp$2$$.update($networkingApi$jscomp$2$$.$f$, $networkingApi$jscomp$2$$.$b$ - ($networkingApi$jscomp$2$$.$c$ - 56));
        for (var $result$jscomp$39_success$$ = $networkingApi$jscomp$2$$.$b$ - 1;56 <= $result$jscomp$39_success$$;$result$jscomp$39_success$$--) {
          $networkingApi$jscomp$2$$.$h$[$result$jscomp$39_success$$] = $hotSpotProps$jscomp$1$$ & 255, $hotSpotProps$jscomp$1$$ /= 256;
        }
        $JSCompiler_StaticMethods_compress_$$($networkingApi$jscomp$2$$, $networkingApi$jscomp$2$$.$h$);
        for ($result$jscomp$39_success$$ = $hotSpotProps$jscomp$1$$ = 0;5 > $result$jscomp$39_success$$;$result$jscomp$39_success$$++) {
          for (var $j$jscomp$inline_1032$$ = 24;0 <= $j$jscomp$inline_1032$$;$j$jscomp$inline_1032$$ -= 8) {
            $nonce$jscomp$3$$[$hotSpotProps$jscomp$1$$] = $networkingApi$jscomp$2$$.$a$[$result$jscomp$39_success$$] >> $j$jscomp$inline_1032$$ & 255, ++$hotSpotProps$jscomp$1$$;
          }
        }
        $nonce$jscomp$3$$ ? ($networkingApi$jscomp$2$$ = [], $networkingApi$jscomp$2$$[0] = $castApp$core$PinGenerator$spanToAlpha_$$($castApp$core$PinGenerator$xorSpans_$$($nonce$jscomp$3$$, 0)), $networkingApi$jscomp$2$$[1] = $castApp$core$PinGenerator$spanToDigit_$$($castApp$core$PinGenerator$xorSpans_$$($nonce$jscomp$3$$, 4)), $networkingApi$jscomp$2$$[2] = $castApp$core$PinGenerator$spanToAlpha_$$($castApp$core$PinGenerator$xorSpans_$$($nonce$jscomp$3$$, 8)), $networkingApi$jscomp$2$$[3] = $castApp$core$PinGenerator$spanToDigit_$$($castApp$core$PinGenerator$xorSpans_$$($nonce$jscomp$3$$, 
        12))) : $networkingApi$jscomp$2$$ = null;
      } else {
        $networkingApi$jscomp$2$$ = null;
      }
    } else {
      $networkingApi$jscomp$2$$ = null;
    }
    if (!$networkingApi$jscomp$2$$) {
      return $castApp$log$warning$$($castApp$core$DeviceVerifier$logger$$, "Failed to generate device pin."), $goog$Promise$reject$$();
    }
    $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$.pin = $networkingApi$jscomp$2$$;
    return $JSCompiler_StaticMethods_verifyImpl_$self_verifyDestinationPromise$$;
  });
}, $$jscomp$scope$DeviceVerifierV3_$$ = function $$$jscomp$scope$DeviceVerifierV3_$$$($eurekaInfo$jscomp$2$$) {
  this.$a$ = $eurekaInfo$jscomp$2$$;
};
$goog$inherits$$($$jscomp$scope$DeviceVerifierV3_$$, $castApp$core$DeviceVerifier$$);
$$jscomp$scope$DeviceVerifierV3_$$.prototype.$f$ = function $$$jscomp$scope$DeviceVerifierV3_$$$$$f$$($clientHotSpot$$) {
  return $clientHotSpot$$.ssid === this.$a$.name;
};
$$jscomp$scope$DeviceVerifierV3_$$.prototype.$c$ = function $$$jscomp$scope$DeviceVerifierV3_$$$$$c$$() {
  return !0;
};
$$jscomp$scope$DeviceVerifierV3_$$.prototype.$b$ = function $$$jscomp$scope$DeviceVerifierV3_$$$$$b$$($bssid$jscomp$4$$) {
  var $eurekaInfo$jscomp$3$$ = this.$a$, $result$jscomp$40$$ = {};
  if (!($eurekaInfo$jscomp$3$$.public_key && $eurekaInfo$jscomp$3$$.ssdp_udn && $eurekaInfo$jscomp$3$$.name && $eurekaInfo$jscomp$3$$.sign && $eurekaInfo$jscomp$3$$.sign.certificate && $eurekaInfo$jscomp$3$$.sign.nonce && $eurekaInfo$jscomp$3$$.sign.signed_data)) {
    return null;
  }
  $result$jscomp$40$$.certificate = $eurekaInfo$jscomp$3$$.sign.certificate;
  $result$jscomp$40$$.publicKey = $eurekaInfo$jscomp$3$$.public_key;
  $result$jscomp$40$$.nonce = $eurekaInfo$jscomp$3$$.sign.nonce;
  $result$jscomp$40$$.signedData = $eurekaInfo$jscomp$3$$.sign.signed_data;
  $result$jscomp$40$$.deviceSerial = $eurekaInfo$jscomp$3$$.ssdp_udn;
  $result$jscomp$40$$.deviceSsid = $eurekaInfo$jscomp$3$$.name;
  $result$jscomp$40$$.deviceBssid = $bssid$jscomp$4$$;
  return $result$jscomp$40$$;
};
var $$jscomp$scope$DeviceVerifierV456_$$ = function $$$jscomp$scope$DeviceVerifierV456_$$$($eurekaInfo$jscomp$4$$) {
  this.$a$ = $eurekaInfo$jscomp$4$$;
};
$goog$inherits$$($$jscomp$scope$DeviceVerifierV456_$$, $castApp$core$DeviceVerifier$$);
$$jscomp$scope$DeviceVerifierV456_$$.prototype.$f$ = function $$$jscomp$scope$DeviceVerifierV456_$$$$$f$$($clientHotSpot$jscomp$1$$) {
  var $eurekaInfoBssid$$ = this.$a$.hotspot_bssid.toLowerCase();
  return $clientHotSpot$jscomp$1$$.ssid === this.$a$.name && $clientHotSpot$jscomp$1$$.bssid.toLowerCase() === $eurekaInfoBssid$$;
};
$$jscomp$scope$DeviceVerifierV456_$$.prototype.$c$ = function $$$jscomp$scope$DeviceVerifierV456_$$$$$c$$($clientNonce$jscomp$1$$) {
  return !(!this.$a$.sign || this.$a$.sign.nonce !== $clientNonce$jscomp$1$$);
};
$$jscomp$scope$DeviceVerifierV456_$$.prototype.$b$ = function $$$jscomp$scope$DeviceVerifierV456_$$$$$b$$() {
  var $eurekaInfo$jscomp$5$$ = this.$a$, $result$jscomp$41$$ = {};
  if (!($eurekaInfo$jscomp$5$$.public_key && $eurekaInfo$jscomp$5$$.ssdp_udn && $eurekaInfo$jscomp$5$$.name && $eurekaInfo$jscomp$5$$.sign && $eurekaInfo$jscomp$5$$.sign.certificate && $eurekaInfo$jscomp$5$$.sign.nonce && $eurekaInfo$jscomp$5$$.sign.signed_data && $eurekaInfo$jscomp$5$$.hotspot_bssid)) {
    return null;
  }
  $result$jscomp$41$$.certificate = $eurekaInfo$jscomp$5$$.sign.certificate;
  $result$jscomp$41$$.publicKey = $eurekaInfo$jscomp$5$$.public_key;
  $result$jscomp$41$$.nonce = $eurekaInfo$jscomp$5$$.sign.nonce;
  $result$jscomp$41$$.signedData = $eurekaInfo$jscomp$5$$.sign.signed_data;
  $result$jscomp$41$$.deviceSerial = $eurekaInfo$jscomp$5$$.ssdp_udn;
  $result$jscomp$41$$.deviceSsid = $eurekaInfo$jscomp$5$$.name;
  $result$jscomp$41$$.deviceBssid = $eurekaInfo$jscomp$5$$.hotspot_bssid;
  $eurekaInfo$jscomp$5$$.sign.intermediate_certs && 0 <= $goog$string$compareVersions$$($goog$userAgent$product$VERSION$$, 42) && ($result$jscomp$41$$.intermediateCertificates = $eurekaInfo$jscomp$5$$.sign.intermediate_certs);
  return $result$jscomp$41$$;
};
var $$jscomp$scope$DeviceVerifierV7_$$ = function $$$jscomp$scope$DeviceVerifierV7_$$$($eurekaInfo$jscomp$6$$) {
  this.$a$ = $eurekaInfo$jscomp$6$$;
};
$goog$inherits$$($$jscomp$scope$DeviceVerifierV7_$$, $castApp$core$DeviceVerifier$$);
$$jscomp$scope$DeviceVerifierV7_$$.prototype.$f$ = function $$$jscomp$scope$DeviceVerifierV7_$$$$$f$$($clientHotSpot$jscomp$2$$) {
  var $eurekaInfo$jscomp$7$$ = this.$a$;
  if (!$eurekaInfo$jscomp$7$$.name || !$eurekaInfo$jscomp$7$$.device_info || !$eurekaInfo$jscomp$7$$.device_info.hotspot_bssid) {
    return !1;
  }
  var $eurekaInfoSsid$$ = $eurekaInfo$jscomp$7$$.name;
  $eurekaInfo$jscomp$7$$.setup && $eurekaInfo$jscomp$7$$.setup.ssid_suffix && "c" !== $eurekaInfo$jscomp$7$$.setup.ssid_suffix && ($eurekaInfoSsid$$ += "." + $eurekaInfo$jscomp$7$$.setup.ssid_suffix);
  return $clientHotSpot$jscomp$2$$.ssid === $eurekaInfoSsid$$ && $castApp$core$utils$bssidsMatch$$($eurekaInfo$jscomp$7$$.device_info.hotspot_bssid, $clientHotSpot$jscomp$2$$.bssid);
};
$$jscomp$scope$DeviceVerifierV7_$$.prototype.$c$ = function $$$jscomp$scope$DeviceVerifierV7_$$$$$c$$($clientNonce$jscomp$2$$) {
  return !(!this.$a$.sign || this.$a$.sign.nonce !== $clientNonce$jscomp$2$$);
};
$$jscomp$scope$DeviceVerifierV7_$$.prototype.$b$ = function $$$jscomp$scope$DeviceVerifierV7_$$$$$b$$() {
  var $eurekaInfo$jscomp$8$$ = this.$a$, $result$jscomp$42$$ = {};
  if (!($eurekaInfo$jscomp$8$$.name && $eurekaInfo$jscomp$8$$.device_info && $eurekaInfo$jscomp$8$$.device_info.public_key && $eurekaInfo$jscomp$8$$.device_info.ssdp_udn && $eurekaInfo$jscomp$8$$.device_info.hotspot_bssid && $eurekaInfo$jscomp$8$$.sign && $eurekaInfo$jscomp$8$$.sign.certificate && $eurekaInfo$jscomp$8$$.sign.nonce && $eurekaInfo$jscomp$8$$.sign.signed_data)) {
    return null;
  }
  $result$jscomp$42$$.certificate = $eurekaInfo$jscomp$8$$.sign.certificate;
  $result$jscomp$42$$.publicKey = $eurekaInfo$jscomp$8$$.device_info.public_key;
  $result$jscomp$42$$.nonce = $eurekaInfo$jscomp$8$$.sign.nonce;
  $result$jscomp$42$$.signedData = $eurekaInfo$jscomp$8$$.sign.signed_data;
  $result$jscomp$42$$.deviceSerial = $eurekaInfo$jscomp$8$$.device_info.ssdp_udn;
  $result$jscomp$42$$.deviceSsid = $eurekaInfo$jscomp$8$$.name;
  $result$jscomp$42$$.deviceBssid = $eurekaInfo$jscomp$8$$.device_info.hotspot_bssid;
  $eurekaInfo$jscomp$8$$.sign.intermediate_certs && 0 <= $goog$string$compareVersions$$($goog$userAgent$product$VERSION$$, 42) && ($result$jscomp$42$$.intermediateCertificates = $eurekaInfo$jscomp$8$$.sign.intermediate_certs);
  return $result$jscomp$42$$;
};
var $goog$json$Serializer$$ = function $$goog$json$Serializer$$$() {
  this.$a$ = $jspb$Message$serializeSpecialNumbers_$$;
}, $JSCompiler_StaticMethods_serializeInternal$$ = function $$JSCompiler_StaticMethods_serializeInternal$$$($JSCompiler_StaticMethods_serializeInternal$self$$, $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$, $sb$jscomp$8$$) {
  if (null == $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$) {
    $sb$jscomp$8$$.push("null");
  } else {
    if ("object" == typeof $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$) {
      if ($goog$isArray$$($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$)) {
        var $arr$jscomp$inline_645_key$jscomp$inline_656$$ = $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$;
        $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$ = $arr$jscomp$inline_645_key$jscomp$inline_656$$.length;
        $sb$jscomp$8$$.push("[");
        for (var $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$ = "", $i$jscomp$inline_649_sep$jscomp$inline_655$$ = 0;$i$jscomp$inline_649_sep$jscomp$inline_655$$ < $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$;$i$jscomp$inline_649_sep$jscomp$inline_655$$++) {
          $sb$jscomp$8$$.push($sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$), $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$ = $arr$jscomp$inline_645_key$jscomp$inline_656$$[$i$jscomp$inline_649_sep$jscomp$inline_655$$], $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $JSCompiler_StaticMethods_serializeInternal$self$$.$a$ ? $JSCompiler_StaticMethods_serializeInternal$self$$.$a$.call($arr$jscomp$inline_645_key$jscomp$inline_656$$, 
          String($i$jscomp$inline_649_sep$jscomp$inline_655$$), $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$) : $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$, $sb$jscomp$8$$), $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$ = ",";
        }
        $sb$jscomp$8$$.push("]");
        return;
      }
      if ($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$ instanceof String || $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$ instanceof Number || $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$ instanceof Boolean) {
        $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$ = $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$.valueOf();
      } else {
        $sb$jscomp$8$$.push("{");
        $i$jscomp$inline_649_sep$jscomp$inline_655$$ = "";
        for ($arr$jscomp$inline_645_key$jscomp$inline_656$$ in $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$) {
          Object.prototype.hasOwnProperty.call($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$, $arr$jscomp$inline_645_key$jscomp$inline_656$$) && ($sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$ = $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$[$arr$jscomp$inline_645_key$jscomp$inline_656$$], "function" != typeof $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$ && ($sb$jscomp$8$$.push($i$jscomp$inline_649_sep$jscomp$inline_655$$), 
          $JSCompiler_StaticMethods_serializeString_$$($arr$jscomp$inline_645_key$jscomp$inline_656$$, $sb$jscomp$8$$), $sb$jscomp$8$$.push(":"), $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $JSCompiler_StaticMethods_serializeInternal$self$$.$a$ ? $JSCompiler_StaticMethods_serializeInternal$self$$.$a$.call($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$, $arr$jscomp$inline_645_key$jscomp$inline_656$$, $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$) : 
          $sep$jscomp$inline_648_value$jscomp$inline_650_value$jscomp$inline_657$$, $sb$jscomp$8$$), $i$jscomp$inline_649_sep$jscomp$inline_655$$ = ","));
        }
        $sb$jscomp$8$$.push("}");
        return;
      }
    }
    switch(typeof $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$) {
      case "string":
        $JSCompiler_StaticMethods_serializeString_$$($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$, $sb$jscomp$8$$);
        break;
      case "number":
        $sb$jscomp$8$$.push(isFinite($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$) && !isNaN($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$) ? String($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$) : "null");
        break;
      case "boolean":
        $sb$jscomp$8$$.push(String($l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$));
        break;
      case "function":
        $sb$jscomp$8$$.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof $l$jscomp$inline_647_obj$jscomp$inline_653_object$jscomp$9$$);
    }
  }
}, $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, $JSCompiler_StaticMethods_serializeString_$$ = function $$JSCompiler_StaticMethods_serializeString_$$$($s$jscomp$23$$, $sb$jscomp$9$$) {
  $sb$jscomp$9$$.push('"', $s$jscomp$23$$.replace($goog$json$Serializer$charsToReplace_$$, function($s$jscomp$23$$) {
    var $sb$jscomp$9$$ = $goog$json$Serializer$charToJsonCharCache_$$[$s$jscomp$23$$];
    $sb$jscomp$9$$ || ($sb$jscomp$9$$ = "\\u" + ($s$jscomp$23$$.charCodeAt(0) | 65536).toString(16).substr(1), $goog$json$Serializer$charToJsonCharCache_$$[$s$jscomp$23$$] = $sb$jscomp$9$$);
    return $sb$jscomp$9$$;
  }), '"');
};
var $goog$net$XmlHttpFactory$$ = function $$goog$net$XmlHttpFactory$$$() {
};
$goog$net$XmlHttpFactory$$.prototype.$a$ = null;
var $JSCompiler_StaticMethods_getOptions$$ = function $$JSCompiler_StaticMethods_getOptions$$$($JSCompiler_StaticMethods_getOptions$self$$) {
  var $JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$;
  ($JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$ = $JSCompiler_StaticMethods_getOptions$self$$.$a$) || ($JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$ = {}, $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_getOptions$self$$) && ($JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$[0] = !0, $JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$[1] = !0), $JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$ = $JSCompiler_StaticMethods_getOptions$self$$.$a$ = $JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$);
  return $JSCompiler_temp$jscomp$40_options$jscomp$inline_663$$;
};
var $goog$net$XmlHttp$factory_$$, $goog$net$DefaultXmlHttpFactory$$ = function $$goog$net$DefaultXmlHttpFactory$$$() {
};
$goog$inherits$$($goog$net$DefaultXmlHttpFactory$$, $goog$net$XmlHttpFactory$$);
var $JSCompiler_StaticMethods_createInstance$$ = function $$JSCompiler_StaticMethods_createInstance$$$($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$) {
  return ($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$ = $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$)) ? new ActiveXObject($JSCompiler_StaticMethods_createInstance$self_progId$jscomp$1$$) : new XMLHttpRequest;
}, $JSCompiler_StaticMethods_getProgId_$$ = function $$JSCompiler_StaticMethods_getProgId_$$$($JSCompiler_StaticMethods_getProgId_$self$$) {
  if (!$JSCompiler_StaticMethods_getProgId_$self$$.$b$ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$jscomp$173$$ = 0;$i$jscomp$173$$ < $ACTIVE_X_IDENTS$$.length;$i$jscomp$173$$++) {
      var $candidate$jscomp$1$$ = $ACTIVE_X_IDENTS$$[$i$jscomp$173$$];
      try {
        return new ActiveXObject($candidate$jscomp$1$$), $JSCompiler_StaticMethods_getProgId_$self$$.$b$ = $candidate$jscomp$1$$;
      } catch ($e$jscomp$46$$) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return $JSCompiler_StaticMethods_getProgId_$self$$.$b$;
};
$goog$net$XmlHttp$factory_$$ = new $goog$net$DefaultXmlHttpFactory$$;
var $goog$net$XhrIo$$ = function $$goog$net$XhrIo$$$($opt_xmlHttpFactory$$) {
  $goog$events$EventTarget$$.call(this);
  this.headers = new $goog$structs$Map$$;
  this.$C$ = $opt_xmlHttpFactory$$ || null;
  this.$f$ = !1;
  this.$B$ = this.$a$ = null;
  this.$I$ = this.$u$ = "";
  this.$j$ = 0;
  this.$m$ = "";
  this.$g$ = this.$F$ = this.$s$ = this.$D$ = !1;
  this.$i$ = 0;
  this.$w$ = null;
  this.$o$ = "";
  this.$A$ = this.$l$ = !1;
};
$goog$inherits$$($goog$net$XhrIo$$, $goog$events$EventTarget$$);
$goog$net$XhrIo$$.prototype.$b$ = $goog$debug$LogManager$getLogger$$("goog.net.XhrIo");
var $goog$net$XhrIo$HTTP_SCHEME_PATTERN$$ = /^https?$/i, $goog$net$XhrIo$METHODS_WITH_FORM_DATA$$ = ["POST", "PUT"];
$goog$net$XhrIo$$.prototype.$getResponseType$ = function $$goog$net$XhrIo$$$$$getResponseType$$() {
  return this.$o$;
};
$goog$net$XhrIo$$.prototype.$getWithCredentials$ = function $$goog$net$XhrIo$$$$$getWithCredentials$$() {
  return this.$l$;
};
$goog$net$XhrIo$$.prototype.send = function $$goog$net$XhrIo$$$$send$($content$jscomp$6_url$jscomp$51$$, $method$jscomp$3_opt_method$jscomp$1$$, $contentIsFormData_opt_content$jscomp$6$$, $contentTypeKey_opt_headers$jscomp$1$$) {
  if (this.$a$) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$u$ + "; newUri=" + $content$jscomp$6_url$jscomp$51$$);
  }
  $method$jscomp$3_opt_method$jscomp$1$$ = $method$jscomp$3_opt_method$jscomp$1$$ ? $method$jscomp$3_opt_method$jscomp$1$$.toUpperCase() : "GET";
  this.$u$ = $content$jscomp$6_url$jscomp$51$$;
  this.$m$ = "";
  this.$j$ = 0;
  this.$I$ = $method$jscomp$3_opt_method$jscomp$1$$;
  this.$D$ = !1;
  this.$f$ = !0;
  this.$a$ = this.$C$ ? $JSCompiler_StaticMethods_createInstance$$(this.$C$) : $JSCompiler_StaticMethods_createInstance$$($goog$net$XmlHttp$factory_$$);
  this.$B$ = this.$C$ ? $JSCompiler_StaticMethods_getOptions$$(this.$C$) : $JSCompiler_StaticMethods_getOptions$$($goog$net$XmlHttp$factory_$$);
  this.$a$.onreadystatechange = $goog$bind$$(this.$J$, this);
  try {
    $goog$log$fine$$(this.$b$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Opening Xhr")), this.$F$ = !0, this.$a$.open($method$jscomp$3_opt_method$jscomp$1$$, String($content$jscomp$6_url$jscomp$51$$), !0), this.$F$ = !1;
  } catch ($err$jscomp$27$$) {
    $goog$log$fine$$(this.$b$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Error opening Xhr: " + $err$jscomp$27$$.message));
    $JSCompiler_StaticMethods_error_$$(this, $err$jscomp$27$$);
    return;
  }
  $content$jscomp$6_url$jscomp$51$$ = $contentIsFormData_opt_content$jscomp$6$$ || "";
  var $headers$$ = new $goog$structs$Map$$(this.headers);
  $contentTypeKey_opt_headers$jscomp$1$$ && $goog$structs$forEach$$($contentTypeKey_opt_headers$jscomp$1$$, function($content$jscomp$6_url$jscomp$51$$, $method$jscomp$3_opt_method$jscomp$1$$) {
    $headers$$.set($method$jscomp$3_opt_method$jscomp$1$$, $content$jscomp$6_url$jscomp$51$$);
  });
  $contentTypeKey_opt_headers$jscomp$1$$ = $goog$array$find$$($headers$$.$getKeys$(), $goog$net$XhrIo$isContentTypeHeader_$$);
  $contentIsFormData_opt_content$jscomp$6$$ = $goog$global$$.FormData && $content$jscomp$6_url$jscomp$51$$ instanceof $goog$global$$.FormData;
  !(0 <= $goog$array$indexOf$$($goog$net$XhrIo$METHODS_WITH_FORM_DATA$$, $method$jscomp$3_opt_method$jscomp$1$$)) || $contentTypeKey_opt_headers$jscomp$1$$ || $contentIsFormData_opt_content$jscomp$6$$ || $headers$$.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  $headers$$.forEach(function($content$jscomp$6_url$jscomp$51$$, $method$jscomp$3_opt_method$jscomp$1$$) {
    this.$a$.setRequestHeader($method$jscomp$3_opt_method$jscomp$1$$, $content$jscomp$6_url$jscomp$51$$);
  }, this);
  this.$o$ && (this.$a$.responseType = this.$o$);
  "withCredentials" in this.$a$ && this.$a$.withCredentials !== this.$l$ && (this.$a$.withCredentials = this.$l$);
  try {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$(this), 0 < this.$i$ && (this.$A$ = $goog$net$XhrIo$shouldUseXhr2Timeout_$$(this.$a$), $goog$log$fine$$(this.$b$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Will abort after " + this.$i$ + "ms if incomplete, xhr2 " + this.$A$)), this.$A$ ? (this.$a$.timeout = this.$i$, this.$a$.ontimeout = $goog$bind$$(this.$H$, this)) : this.$w$ = $goog$Timer$callOnce$$(this.$H$, this.$i$, this)), $goog$log$fine$$(this.$b$, $JSCompiler_StaticMethods_formatMsg_$$(this, 
    "Sending request")), this.$s$ = !0, this.$a$.send($content$jscomp$6_url$jscomp$51$$), this.$s$ = !1;
  } catch ($err$3$$) {
    $goog$log$fine$$(this.$b$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Send error: " + $err$3$$.message)), $JSCompiler_StaticMethods_error_$$(this, $err$3$$);
  }
};
var $goog$net$XhrIo$shouldUseXhr2Timeout_$$ = function $$goog$net$XhrIo$shouldUseXhr2Timeout_$$$($xhr$jscomp$1$$) {
  return $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$(9) && $goog$isNumber$$($xhr$jscomp$1$$.timeout) && $goog$isDef$$($xhr$jscomp$1$$.ontimeout);
}, $goog$net$XhrIo$isContentTypeHeader_$$ = function $$goog$net$XhrIo$isContentTypeHeader_$$$($header$jscomp$4$$) {
  return "content-type" == $header$jscomp$4$$.toLowerCase();
};
$goog$net$XhrIo$$.prototype.$H$ = function $$goog$net$XhrIo$$$$$H$$() {
  "undefined" != typeof $goog$$ && this.$a$ && (this.$m$ = "Timed out after " + this.$i$ + "ms, aborting", this.$j$ = 8, $goog$log$fine$$(this.$b$, $JSCompiler_StaticMethods_formatMsg_$$(this, this.$m$)), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "timeout"), this.abort(8));
};
var $JSCompiler_StaticMethods_error_$$ = function $$JSCompiler_StaticMethods_error_$$$($JSCompiler_StaticMethods_error_$self$$, $err$jscomp$28$$) {
  $JSCompiler_StaticMethods_error_$self$$.$f$ = !1;
  $JSCompiler_StaticMethods_error_$self$$.$a$ && ($JSCompiler_StaticMethods_error_$self$$.$g$ = !0, $JSCompiler_StaticMethods_error_$self$$.$a$.abort(), $JSCompiler_StaticMethods_error_$self$$.$g$ = !1);
  $JSCompiler_StaticMethods_error_$self$$.$m$ = $err$jscomp$28$$;
  $JSCompiler_StaticMethods_error_$self$$.$j$ = 5;
  $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_error_$self$$);
  $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_error_$self$$);
}, $JSCompiler_StaticMethods_dispatchErrors_$$ = function $$JSCompiler_StaticMethods_dispatchErrors_$$$($JSCompiler_StaticMethods_dispatchErrors_$self$$) {
  $JSCompiler_StaticMethods_dispatchErrors_$self$$.$D$ || ($JSCompiler_StaticMethods_dispatchErrors_$self$$.$D$ = !0, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "error"));
};
$goog$net$XhrIo$$.prototype.abort = function $$goog$net$XhrIo$$$$abort$($opt_failureCode$$) {
  this.$a$ && this.$f$ && ($goog$log$fine$$(this.$b$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Aborting")), this.$f$ = !1, this.$g$ = !0, this.$a$.abort(), this.$g$ = !1, this.$j$ = $opt_failureCode$$ || 7, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, "abort"), $JSCompiler_StaticMethods_cleanUpXhr_$$(this));
};
$goog$net$XhrIo$$.prototype.$disposeInternal$ = function $$goog$net$XhrIo$$$$$disposeInternal$$() {
  this.$a$ && (this.$f$ && (this.$f$ = !1, this.$g$ = !0, this.$a$.abort(), this.$g$ = !1), $JSCompiler_StaticMethods_cleanUpXhr_$$(this, !0));
  $goog$net$XhrIo$$.$superClass_$.$disposeInternal$.call(this);
};
$goog$net$XhrIo$$.prototype.$J$ = function $$goog$net$XhrIo$$$$$J$$() {
  this.$h$ || (this.$F$ || this.$s$ || this.$g$ ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this) : this.$L$());
};
$goog$net$XhrIo$$.prototype.$L$ = function $$goog$net$XhrIo$$$$$L$$() {
  $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this);
};
var $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$ = function $$JSCompiler_StaticMethods_onReadyStateChangeHelper_$$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) {
  if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$f$ && "undefined" != typeof $goog$$) {
    if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$B$[1] && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) && 2 == $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.getStatus()) {
      $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$b$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Local request error detected and ignored"));
    } else {
      if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$s$ && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
        $goog$Timer$callOnce$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$J$, 0, $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
      } else {
        if ($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "readystatechange"), 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
          $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$b$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Request complete"));
          $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$f$ = !1;
          try {
            if ($JSCompiler_StaticMethods_isSuccess$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
              $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "complete"), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "success");
            } else {
              $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$j$ = 6;
              var $JSCompiler_inline_result$jscomp$48$$;
              try {
                $JSCompiler_inline_result$jscomp$48$$ = 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$a$.statusText : "";
              } catch ($e$jscomp$inline_671$$) {
                $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$b$, "Can not get status: " + $e$jscomp$inline_671$$.message), $JSCompiler_inline_result$jscomp$48$$ = "";
              }
              $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$m$ = $JSCompiler_inline_result$jscomp$48$$ + " [" + $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.getStatus() + "]";
              $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
            }
          } finally {
            $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
          }
        }
      }
    }
  }
}, $JSCompiler_StaticMethods_cleanUpXhr_$$ = function $$JSCompiler_StaticMethods_cleanUpXhr_$$$($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$, $opt_fromDispose$$) {
  if ($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$.$a$) {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$);
    var $xhr$jscomp$2$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$.$a$, $clearedOnReadyStateChange$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$.$B$[0] ? $goog$nullFunction$$ : null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$.$a$ = null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$.$B$ = null;
    $opt_fromDispose$$ || $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$, "ready");
    try {
      $xhr$jscomp$2$$.onreadystatechange = $clearedOnReadyStateChange$$;
    } catch ($e$jscomp$50$$) {
      ($JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$.$b$) && $JSCompiler_StaticMethods_cleanUpXhr_$self_logger$jscomp$inline_673$$.log($goog$debug$Logger$Level$SEVERE$$, "Problem encountered resetting onreadystatechange: " + $e$jscomp$50$$.message, void 0);
    }
  }
}, $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$ = function $$JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$) {
  $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$a$ && $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$A$ && ($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$a$.ontimeout = null);
  $goog$isNumber$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$w$) && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$w$), $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$w$ = null);
}, $JSCompiler_StaticMethods_isSuccess$$ = function $$JSCompiler_StaticMethods_isSuccess$$$($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$) {
  var $JSCompiler_temp$jscomp$45_status$jscomp$1$$ = $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$.getStatus(), $JSCompiler_inline_result$jscomp$39_JSCompiler_temp$jscomp$44$$;
  a: {
    switch($JSCompiler_temp$jscomp$45_status$jscomp$1$$) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        $JSCompiler_inline_result$jscomp$39_JSCompiler_temp$jscomp$44$$ = !0;
        break a;
      default:
        $JSCompiler_inline_result$jscomp$39_JSCompiler_temp$jscomp$44$$ = !1;
    }
  }
  if (!$JSCompiler_inline_result$jscomp$39_JSCompiler_temp$jscomp$44$$) {
    if ($JSCompiler_temp$jscomp$45_status$jscomp$1$$ = 0 === $JSCompiler_temp$jscomp$45_status$jscomp$1$$) {
      $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$ = String($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$.$u$).match($goog$uri$utils$splitRe_$$)[1] || null, !$JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$ && $goog$global$$.self && $goog$global$$.self.location && ($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$ = 
      $goog$global$$.self.location.protocol, $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$ = $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$.substr(0, $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$.length - 1)), $JSCompiler_temp$jscomp$45_status$jscomp$1$$ = !$goog$net$XhrIo$HTTP_SCHEME_PATTERN$$.test($JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$ ? 
      $JSCompiler_StaticMethods_isSuccess$self_protocol$jscomp$inline_1043_scheme$jscomp$inline_1042$$.toLowerCase() : "");
    }
    $JSCompiler_inline_result$jscomp$39_JSCompiler_temp$jscomp$44$$ = $JSCompiler_temp$jscomp$45_status$jscomp$1$$;
  }
  return $JSCompiler_inline_result$jscomp$39_JSCompiler_temp$jscomp$44$$;
}, $JSCompiler_StaticMethods_getReadyState$$ = function $$JSCompiler_StaticMethods_getReadyState$$$($JSCompiler_StaticMethods_getReadyState$self$$) {
  return $JSCompiler_StaticMethods_getReadyState$self$$.$a$ ? $JSCompiler_StaticMethods_getReadyState$self$$.$a$.readyState : 0;
};
$goog$net$XhrIo$$.prototype.getStatus = function $$goog$net$XhrIo$$$$getStatus$() {
  try {
    return 2 < $JSCompiler_StaticMethods_getReadyState$$(this) ? this.$a$.status : -1;
  } catch ($e$jscomp$51$$) {
    return -1;
  }
};
$goog$net$XhrIo$$.prototype.$getResponseText$ = function $$goog$net$XhrIo$$$$$getResponseText$$() {
  try {
    return this.$a$ ? this.$a$.responseText : "";
  } catch ($e$jscomp$53$$) {
    return $goog$log$fine$$(this.$b$, "Can not get responseText: " + $e$jscomp$53$$.message), "";
  }
};
$goog$net$XhrIo$$.prototype.getResponseHeader = function $$goog$net$XhrIo$$$$getResponseHeader$($key$jscomp$104_value$jscomp$145$$) {
  if (this.$a$ && 4 == $JSCompiler_StaticMethods_getReadyState$$(this)) {
    return $key$jscomp$104_value$jscomp$145$$ = this.$a$.getResponseHeader($key$jscomp$104_value$jscomp$145$$), null === $key$jscomp$104_value$jscomp$145$$ ? void 0 : $key$jscomp$104_value$jscomp$145$$;
  }
};
var $JSCompiler_StaticMethods_getResponseHeaders$$ = function $$JSCompiler_StaticMethods_getResponseHeaders$$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$) {
  var $headersObject$$ = {};
  $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$ = ($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.$a$ && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$) ? $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.$a$.getAllResponseHeaders() : "").split("\r\n");
  for (var $i$jscomp$174$$ = 0;$i$jscomp$174$$ < $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.length;$i$jscomp$174$$++) {
    if (!/^[\s\xa0]*$/.test($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$[$i$jscomp$174$$])) {
      var $keyValue_limit$jscomp$inline_686$$;
      $keyValue_limit$jscomp$inline_686$$ = 2;
      for (var $parts$jscomp$inline_687$$ = $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$[$i$jscomp$174$$].split(": "), $returnVal$jscomp$inline_688$$ = [];0 < $keyValue_limit$jscomp$inline_686$$ && $parts$jscomp$inline_687$$.length;) {
        $returnVal$jscomp$inline_688$$.push($parts$jscomp$inline_687$$.shift()), $keyValue_limit$jscomp$inline_686$$--;
      }
      $parts$jscomp$inline_687$$.length && $returnVal$jscomp$inline_688$$.push($parts$jscomp$inline_687$$.join(": "));
      $keyValue_limit$jscomp$inline_686$$ = $returnVal$jscomp$inline_688$$;
      $headersObject$$[$keyValue_limit$jscomp$inline_686$$[0]] = $headersObject$$[$keyValue_limit$jscomp$inline_686$$[0]] ? $headersObject$$[$keyValue_limit$jscomp$inline_686$$[0]] + (", " + $keyValue_limit$jscomp$inline_686$$[1]) : $keyValue_limit$jscomp$inline_686$$[1];
    }
  }
  return $headersObject$$;
}, $JSCompiler_StaticMethods_formatMsg_$$ = function $$JSCompiler_StaticMethods_formatMsg_$$$($JSCompiler_StaticMethods_formatMsg_$self$$, $msg$jscomp$44$$) {
  return $msg$jscomp$44$$ + " [" + $JSCompiler_StaticMethods_formatMsg_$self$$.$I$ + " " + $JSCompiler_StaticMethods_formatMsg_$self$$.$u$ + " " + $JSCompiler_StaticMethods_formatMsg_$self$$.getStatus() + "]";
};
var $goog$events$EventHandler$$ = function $$goog$events$EventHandler$$$($opt_scope$jscomp$4$$) {
  $goog$Disposable$$.call(this);
  this.$b$ = $opt_scope$jscomp$4$$;
  this.$a$ = {};
};
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
$JSCompiler_prototypeAlias$$ = $goog$events$EventHandler$$.prototype;
$JSCompiler_prototypeAlias$$.listen = function $$JSCompiler_prototypeAlias$$$listen$($src$jscomp$25$$, $type$jscomp$150_type$jscomp$inline_692$$, $opt_fn$jscomp$3$$, $opt_capture$jscomp$5$$) {
  $goog$isArray$$($type$jscomp$150_type$jscomp$inline_692$$) || ($type$jscomp$150_type$jscomp$inline_692$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$jscomp$150_type$jscomp$inline_692$$.toString()), $type$jscomp$150_type$jscomp$inline_692$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$jscomp$inline_696$$ = 0;$i$jscomp$inline_696$$ < $type$jscomp$150_type$jscomp$inline_692$$.length;$i$jscomp$inline_696$$++) {
    var $listenerObj$jscomp$inline_697$$ = $goog$events$listen$$($src$jscomp$25$$, $type$jscomp$150_type$jscomp$inline_692$$[$i$jscomp$inline_696$$], $opt_fn$jscomp$3$$ || this.handleEvent, $opt_capture$jscomp$5$$ || !1, this.$b$ || this);
    if (!$listenerObj$jscomp$inline_697$$) {
      break;
    }
    this.$a$[$listenerObj$jscomp$inline_697$$.$goog_events_ListenableKey_prototype$key$] = $listenerObj$jscomp$inline_697$$;
  }
  return this;
};
$JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($listenerMap$jscomp$inline_705_src$jscomp$34$$, $listener$jscomp$106_type$jscomp$156$$, $listener$jscomp$inline_701_opt_fn$jscomp$7$$, $capture$jscomp$inline_704_opt_capture$jscomp$9$$, $opt_handler$jscomp$inline_703_opt_scope$jscomp$8$$) {
  if ($goog$isArray$$($listener$jscomp$106_type$jscomp$156$$)) {
    for (var $i$jscomp$177$$ = 0;$i$jscomp$177$$ < $listener$jscomp$106_type$jscomp$156$$.length;$i$jscomp$177$$++) {
      this.$unlisten$($listenerMap$jscomp$inline_705_src$jscomp$34$$, $listener$jscomp$106_type$jscomp$156$$[$i$jscomp$177$$], $listener$jscomp$inline_701_opt_fn$jscomp$7$$, $capture$jscomp$inline_704_opt_capture$jscomp$9$$, $opt_handler$jscomp$inline_703_opt_scope$jscomp$8$$);
    }
  } else {
    $listener$jscomp$inline_701_opt_fn$jscomp$7$$ = $listener$jscomp$inline_701_opt_fn$jscomp$7$$ || this.handleEvent, $opt_handler$jscomp$inline_703_opt_scope$jscomp$8$$ = $opt_handler$jscomp$inline_703_opt_scope$jscomp$8$$ || this.$b$ || this, $listener$jscomp$inline_701_opt_fn$jscomp$7$$ = $goog$events$wrapListener$$($listener$jscomp$inline_701_opt_fn$jscomp$7$$), $capture$jscomp$inline_704_opt_capture$jscomp$9$$ = !!$capture$jscomp$inline_704_opt_capture$jscomp$9$$, $listener$jscomp$106_type$jscomp$156$$ = 
    $goog$events$Listenable$isImplementedBy$$($listenerMap$jscomp$inline_705_src$jscomp$34$$) ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$jscomp$inline_705_src$jscomp$34$$.$c$, String($listener$jscomp$106_type$jscomp$156$$), $listener$jscomp$inline_701_opt_fn$jscomp$7$$, $capture$jscomp$inline_704_opt_capture$jscomp$9$$, $opt_handler$jscomp$inline_703_opt_scope$jscomp$8$$) : $listenerMap$jscomp$inline_705_src$jscomp$34$$ ? ($listenerMap$jscomp$inline_705_src$jscomp$34$$ = 
    $goog$events$getListenerMap_$$($listenerMap$jscomp$inline_705_src$jscomp$34$$)) ? $JSCompiler_StaticMethods_goog_events_ListenerMap_prototype$getListener$$($listenerMap$jscomp$inline_705_src$jscomp$34$$, $listener$jscomp$106_type$jscomp$156$$, $listener$jscomp$inline_701_opt_fn$jscomp$7$$, $capture$jscomp$inline_704_opt_capture$jscomp$9$$, $opt_handler$jscomp$inline_703_opt_scope$jscomp$8$$) : null : null, $listener$jscomp$106_type$jscomp$156$$ && ($goog$events$unlistenByKey$$($listener$jscomp$106_type$jscomp$156$$), 
    delete this.$a$[$listener$jscomp$106_type$jscomp$156$$.$goog_events_ListenableKey_prototype$key$]);
  }
  return this;
};
$JSCompiler_prototypeAlias$$.removeAll = function $$JSCompiler_prototypeAlias$$$removeAll$() {
  $goog$object$forEach$$(this.$a$, function($listenerObj$jscomp$8$$, $key$jscomp$109$$) {
    this.$a$.hasOwnProperty($key$jscomp$109$$) && $goog$events$unlistenByKey$$($listenerObj$jscomp$8$$);
  }, this);
  this.$a$ = {};
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.removeAll();
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$() {
  throw Error("EventHandler.handleEvent not implemented");
};
var $goog$structs$Queue$$ = function $$goog$structs$Queue$$$() {
  this.$b$ = [];
  this.$a$ = [];
}, $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$ = function $$JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$$($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$) {
  0 == $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$.length && ($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$ = $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$a$, $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$.reverse(), $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$a$ = []);
  return $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$self$$.$b$.pop();
};
$JSCompiler_prototypeAlias$$ = $goog$structs$Queue$$.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$b$.length + this.$a$.length;
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$b$ = [];
  this.$a$ = [];
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($obj$jscomp$107$$) {
  return 0 <= $goog$array$indexOf$$(this.$b$, $obj$jscomp$107$$) || 0 <= $goog$array$indexOf$$(this.$a$, $obj$jscomp$107$$);
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($obj$jscomp$108$$) {
  var $JSCompiler_inline_result$jscomp$10_arr$jscomp$inline_709$$;
  $JSCompiler_inline_result$jscomp$10_arr$jscomp$inline_709$$ = this.$b$;
  var $i$jscomp$inline_711$$ = $goog$array$lastIndexOf$$($JSCompiler_inline_result$jscomp$10_arr$jscomp$inline_709$$, $obj$jscomp$108$$);
  0 <= $i$jscomp$inline_711$$ ? ($goog$array$removeAt$$($JSCompiler_inline_result$jscomp$10_arr$jscomp$inline_709$$, $i$jscomp$inline_711$$), $JSCompiler_inline_result$jscomp$10_arr$jscomp$inline_709$$ = !0) : $JSCompiler_inline_result$jscomp$10_arr$jscomp$inline_709$$ = !1;
  return $JSCompiler_inline_result$jscomp$10_arr$jscomp$inline_709$$ || $goog$array$remove$$(this.$a$, $obj$jscomp$108$$);
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  for (var $res$jscomp$9$$ = [], $i$jscomp$178$$ = this.$b$.length - 1;0 <= $i$jscomp$178$$;--$i$jscomp$178$$) {
    $res$jscomp$9$$.push(this.$b$[$i$jscomp$178$$]);
  }
  for (var $len$jscomp$12$$ = this.$a$.length, $i$jscomp$178$$ = 0;$i$jscomp$178$$ < $len$jscomp$12$$;++$i$jscomp$178$$) {
    $res$jscomp$9$$.push(this.$a$[$i$jscomp$178$$]);
  }
  return $res$jscomp$9$$;
};
var $goog$structs$Pool$$ = function $$goog$structs$Pool$$$($opt_minCount$$, $opt_maxCount$$) {
  $goog$Disposable$$.call(this);
  this.$l$ = $opt_minCount$$ || 0;
  this.$c$ = $opt_maxCount$$ || 10;
  if (this.$l$ > this.$c$) {
    throw Error("[goog.structs.Pool] Min can not be greater than max");
  }
  this.$a$ = new $goog$structs$Queue$$;
  this.$b$ = new $goog$structs$Set$$;
  this.$i$ = null;
  this.$adjustForMinMax$();
};
$goog$inherits$$($goog$structs$Pool$$, $goog$Disposable$$);
$goog$structs$Pool$$.prototype.$getObject$ = function $$goog$structs$Pool$$$$$getObject$$() {
  var $time$jscomp$4$$ = $goog$now$$();
  if (!(null != this.$i$ && 0 > $time$jscomp$4$$ - this.$i$)) {
    for (var $obj$jscomp$109_obj$jscomp$inline_714$$;0 < this.$a$.$getCount$() && ($obj$jscomp$109_obj$jscomp$inline_714$$ = $JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$(this.$a$), !this.$j$($obj$jscomp$109_obj$jscomp$inline_714$$));) {
      this.$adjustForMinMax$();
    }
    !$obj$jscomp$109_obj$jscomp$inline_714$$ && this.$getCount$() < this.$c$ && ($obj$jscomp$109_obj$jscomp$inline_714$$ = this.$g$());
    $obj$jscomp$109_obj$jscomp$inline_714$$ && (this.$i$ = $time$jscomp$4$$, $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$(this.$b$, $obj$jscomp$109_obj$jscomp$inline_714$$));
    return $obj$jscomp$109_obj$jscomp$inline_714$$;
  }
};
$goog$structs$Pool$$.prototype.$addFreeObject$ = function $$goog$structs$Pool$$$$$addFreeObject$$($obj$jscomp$112$$) {
  this.$b$.remove($obj$jscomp$112$$);
  this.$j$($obj$jscomp$112$$) && this.$getCount$() < this.$c$ ? this.$a$.$a$.push($obj$jscomp$112$$) : $JSCompiler_StaticMethods_disposeObject$$($obj$jscomp$112$$);
};
$goog$structs$Pool$$.prototype.$adjustForMinMax$ = function $$goog$structs$Pool$$$$$adjustForMinMax$$() {
  for (var $freeQueue$$ = this.$a$;this.$getCount$() < this.$l$;) {
    var $element$jscomp$inline_720$$ = this.$g$();
    $freeQueue$$.$a$.push($element$jscomp$inline_720$$);
  }
  for (;this.$getCount$() > this.$c$ && 0 < this.$a$.$getCount$();) {
    $JSCompiler_StaticMethods_disposeObject$$($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$($freeQueue$$));
  }
};
$goog$structs$Pool$$.prototype.$g$ = function $$goog$structs$Pool$$$$$g$$() {
  return {};
};
var $JSCompiler_StaticMethods_disposeObject$$ = function $$JSCompiler_StaticMethods_disposeObject$$$($obj$jscomp$113$$) {
  if ("function" == typeof $obj$jscomp$113$$.$dispose$) {
    $obj$jscomp$113$$.$dispose$();
  } else {
    for (var $i$jscomp$179$$ in $obj$jscomp$113$$) {
      $obj$jscomp$113$$[$i$jscomp$179$$] = null;
    }
  }
};
$goog$structs$Pool$$.prototype.$j$ = function $$goog$structs$Pool$$$$$j$$($obj$jscomp$114$$) {
  return "function" == typeof $obj$jscomp$114$$.$canBeReused$ ? $obj$jscomp$114$$.$canBeReused$() : !0;
};
$goog$structs$Pool$$.prototype.contains = function $$goog$structs$Pool$$$$contains$($obj$jscomp$115$$) {
  return this.$a$.contains($obj$jscomp$115$$) || this.$b$.contains($obj$jscomp$115$$);
};
$goog$structs$Pool$$.prototype.$getCount$ = function $$goog$structs$Pool$$$$$getCount$$() {
  return this.$a$.$getCount$() + this.$b$.$getCount$();
};
$goog$structs$Pool$$.prototype.$disposeInternal$ = function $$goog$structs$Pool$$$$$disposeInternal$$() {
  $goog$structs$Pool$$.$superClass_$.$disposeInternal$.call(this);
  if (0 < this.$b$.$getCount$()) {
    throw Error("[goog.structs.Pool] Objects not released");
  }
  delete this.$b$;
  for (var $freeQueue$jscomp$1$$ = this.$a$;0 != $freeQueue$jscomp$1$$.$b$.length || 0 != $freeQueue$jscomp$1$$.$a$.length;) {
    $JSCompiler_StaticMethods_disposeObject$$($JSCompiler_StaticMethods_goog_structs_Queue_prototype$dequeue$$($freeQueue$jscomp$1$$));
  }
  delete this.$a$;
};
var $goog$structs$Node$$ = function $$goog$structs$Node$$$($key$jscomp$110$$, $value$jscomp$146$$) {
  this.$a$ = $key$jscomp$110$$;
  this.$b$ = $value$jscomp$146$$;
};
var $goog$structs$Heap$$ = function $$goog$structs$Heap$$$($opt_heap_values$jscomp$inline_725$$) {
  this.$a$ = [];
  if ($opt_heap_values$jscomp$inline_725$$) {
    a: {
      var $keys$jscomp$inline_724$$;
      if ($opt_heap_values$jscomp$inline_725$$ instanceof $goog$structs$Heap$$) {
        if ($keys$jscomp$inline_724$$ = $opt_heap_values$jscomp$inline_725$$.$getKeys$(), $opt_heap_values$jscomp$inline_725$$ = $opt_heap_values$jscomp$inline_725$$.$getValues$(), 0 >= this.$getCount$()) {
          for (var $nodes$jscomp$inline_726$$ = this.$a$, $i$jscomp$inline_727$$ = 0;$i$jscomp$inline_727$$ < $keys$jscomp$inline_724$$.length;$i$jscomp$inline_727$$++) {
            $nodes$jscomp$inline_726$$.push(new $goog$structs$Node$$($keys$jscomp$inline_724$$[$i$jscomp$inline_727$$], $opt_heap_values$jscomp$inline_725$$[$i$jscomp$inline_727$$]));
          }
          break a;
        }
      } else {
        $keys$jscomp$inline_724$$ = $goog$object$getKeys$$($opt_heap_values$jscomp$inline_725$$), $opt_heap_values$jscomp$inline_725$$ = $goog$object$getValues$$($opt_heap_values$jscomp$inline_725$$);
      }
      for ($i$jscomp$inline_727$$ = 0;$i$jscomp$inline_727$$ < $keys$jscomp$inline_724$$.length;$i$jscomp$inline_727$$++) {
        $JSCompiler_StaticMethods_insert$$(this, $keys$jscomp$inline_724$$[$i$jscomp$inline_727$$], $opt_heap_values$jscomp$inline_725$$[$i$jscomp$inline_727$$]);
      }
    }
  }
}, $JSCompiler_StaticMethods_insert$$ = function $$JSCompiler_StaticMethods_insert$$$($JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$, $index$jscomp$inline_730_key$jscomp$111$$, $node$jscomp$inline_732_value$jscomp$147$$) {
  var $nodes$jscomp$1_parentIndex$jscomp$inline_733$$ = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$.$a$;
  $nodes$jscomp$1_parentIndex$jscomp$inline_733$$.push(new $goog$structs$Node$$($index$jscomp$inline_730_key$jscomp$111$$, $node$jscomp$inline_732_value$jscomp$147$$));
  $index$jscomp$inline_730_key$jscomp$111$$ = $nodes$jscomp$1_parentIndex$jscomp$inline_733$$.length - 1;
  $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$ = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$.$a$;
  for ($node$jscomp$inline_732_value$jscomp$147$$ = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$[$index$jscomp$inline_730_key$jscomp$111$$];0 < $index$jscomp$inline_730_key$jscomp$111$$;) {
    if ($nodes$jscomp$1_parentIndex$jscomp$inline_733$$ = $index$jscomp$inline_730_key$jscomp$111$$ - 1 >> 1, $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$[$nodes$jscomp$1_parentIndex$jscomp$inline_733$$].$a$ > $node$jscomp$inline_732_value$jscomp$147$$.$a$) {
      $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$[$index$jscomp$inline_730_key$jscomp$111$$] = $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$[$nodes$jscomp$1_parentIndex$jscomp$inline_733$$], $index$jscomp$inline_730_key$jscomp$111$$ = $nodes$jscomp$1_parentIndex$jscomp$inline_733$$;
    } else {
      break;
    }
  }
  $JSCompiler_StaticMethods_insert$self_nodes$jscomp$inline_731$$[$index$jscomp$inline_730_key$jscomp$111$$] = $node$jscomp$inline_732_value$jscomp$147$$;
};
$JSCompiler_prototypeAlias$$ = $goog$structs$Heap$$.prototype;
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$() {
  var $index$jscomp$inline_736_nodes$jscomp$3$$ = this.$a$, $count$jscomp$19_nodes$jscomp$inline_737$$ = $index$jscomp$inline_736_nodes$jscomp$3$$.length, $rootNode$$ = $index$jscomp$inline_736_nodes$jscomp$3$$[0];
  if (!(0 >= $count$jscomp$19_nodes$jscomp$inline_737$$)) {
    if (1 == $count$jscomp$19_nodes$jscomp$inline_737$$) {
      $goog$array$clear$$($index$jscomp$inline_736_nodes$jscomp$3$$);
    } else {
      $index$jscomp$inline_736_nodes$jscomp$3$$[0] = $index$jscomp$inline_736_nodes$jscomp$3$$.pop();
      for (var $index$jscomp$inline_736_nodes$jscomp$3$$ = 0, $count$jscomp$19_nodes$jscomp$inline_737$$ = this.$a$, $count$jscomp$inline_738$$ = $count$jscomp$19_nodes$jscomp$inline_737$$.length, $node$jscomp$inline_739$$ = $count$jscomp$19_nodes$jscomp$inline_737$$[$index$jscomp$inline_736_nodes$jscomp$3$$];$index$jscomp$inline_736_nodes$jscomp$3$$ < $count$jscomp$inline_738$$ >> 1;) {
        var $leftChildIndex$jscomp$inline_740_smallerChildIndex$jscomp$inline_742$$ = 2 * $index$jscomp$inline_736_nodes$jscomp$3$$ + 1, $rightChildIndex$jscomp$inline_741$$ = 2 * $index$jscomp$inline_736_nodes$jscomp$3$$ + 2, $leftChildIndex$jscomp$inline_740_smallerChildIndex$jscomp$inline_742$$ = $rightChildIndex$jscomp$inline_741$$ < $count$jscomp$inline_738$$ && $count$jscomp$19_nodes$jscomp$inline_737$$[$rightChildIndex$jscomp$inline_741$$].$a$ < $count$jscomp$19_nodes$jscomp$inline_737$$[$leftChildIndex$jscomp$inline_740_smallerChildIndex$jscomp$inline_742$$].$a$ ? 
        $rightChildIndex$jscomp$inline_741$$ : $leftChildIndex$jscomp$inline_740_smallerChildIndex$jscomp$inline_742$$;
        if ($count$jscomp$19_nodes$jscomp$inline_737$$[$leftChildIndex$jscomp$inline_740_smallerChildIndex$jscomp$inline_742$$].$a$ > $node$jscomp$inline_739$$.$a$) {
          break;
        }
        $count$jscomp$19_nodes$jscomp$inline_737$$[$index$jscomp$inline_736_nodes$jscomp$3$$] = $count$jscomp$19_nodes$jscomp$inline_737$$[$leftChildIndex$jscomp$inline_740_smallerChildIndex$jscomp$inline_742$$];
        $index$jscomp$inline_736_nodes$jscomp$3$$ = $leftChildIndex$jscomp$inline_740_smallerChildIndex$jscomp$inline_742$$;
      }
      $count$jscomp$19_nodes$jscomp$inline_737$$[$index$jscomp$inline_736_nodes$jscomp$3$$] = $node$jscomp$inline_739$$;
    }
    return $rootNode$$.$b$;
  }
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  for (var $nodes$jscomp$7$$ = this.$a$, $rv$jscomp$24$$ = [], $l$jscomp$23$$ = $nodes$jscomp$7$$.length, $i$jscomp$181$$ = 0;$i$jscomp$181$$ < $l$jscomp$23$$;$i$jscomp$181$$++) {
    $rv$jscomp$24$$.push($nodes$jscomp$7$$[$i$jscomp$181$$].$b$);
  }
  return $rv$jscomp$24$$;
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  for (var $nodes$jscomp$8$$ = this.$a$, $rv$jscomp$25$$ = [], $l$jscomp$24$$ = $nodes$jscomp$8$$.length, $i$jscomp$182$$ = 0;$i$jscomp$182$$ < $l$jscomp$24$$;$i$jscomp$182$$++) {
    $rv$jscomp$25$$.push($nodes$jscomp$8$$[$i$jscomp$182$$].$a$);
  }
  return $rv$jscomp$25$$;
};
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$a$.length;
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  $goog$array$clear$$(this.$a$);
};
var $goog$structs$PriorityQueue$$ = function $$goog$structs$PriorityQueue$$$() {
  $goog$structs$Heap$$.call(this);
};
$goog$inherits$$($goog$structs$PriorityQueue$$, $goog$structs$Heap$$);
var $goog$structs$PriorityPool$$ = function $$goog$structs$PriorityPool$$$($opt_minCount$jscomp$1$$, $opt_maxCount$jscomp$1$$) {
  this.$f$ = new $goog$structs$PriorityQueue$$;
  $goog$structs$Pool$$.call(this, $opt_minCount$jscomp$1$$, $opt_maxCount$jscomp$1$$);
};
$goog$inherits$$($goog$structs$PriorityPool$$, $goog$structs$Pool$$);
$JSCompiler_prototypeAlias$$ = $goog$structs$PriorityPool$$.prototype;
$JSCompiler_prototypeAlias$$.$getObject$ = function $$JSCompiler_prototypeAlias$$$$getObject$$($opt_callback$jscomp$140$$, $opt_priority$jscomp$1$$) {
  if (!$opt_callback$jscomp$140$$) {
    return $goog$structs$PriorityPool$$.$superClass_$.$getObject$.call(this);
  }
  $JSCompiler_StaticMethods_insert$$(this.$f$, $goog$isDef$$($opt_priority$jscomp$1$$) ? $opt_priority$jscomp$1$$ : 100, $opt_callback$jscomp$140$$);
  this.$handleQueueRequests_$();
};
$JSCompiler_prototypeAlias$$.$handleQueueRequests_$ = function $$JSCompiler_prototypeAlias$$$$handleQueueRequests_$$() {
  for (var $requestQueue$$ = this.$f$;0 < $requestQueue$$.$getCount$();) {
    var $obj$jscomp$116$$ = this.$getObject$();
    if ($obj$jscomp$116$$) {
      $requestQueue$$.remove().apply(this, [$obj$jscomp$116$$]);
    } else {
      break;
    }
  }
};
$JSCompiler_prototypeAlias$$.$addFreeObject$ = function $$JSCompiler_prototypeAlias$$$$addFreeObject$$($obj$jscomp$117$$) {
  $goog$structs$PriorityPool$$.$superClass_$.$addFreeObject$.call(this, $obj$jscomp$117$$);
  this.$handleQueueRequests_$();
};
$JSCompiler_prototypeAlias$$.$adjustForMinMax$ = function $$JSCompiler_prototypeAlias$$$$adjustForMinMax$$() {
  $goog$structs$PriorityPool$$.$superClass_$.$adjustForMinMax$.call(this);
  this.$handleQueueRequests_$();
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$structs$PriorityPool$$.$superClass_$.$disposeInternal$.call(this);
  $goog$global$$.clearTimeout(void 0);
  this.$f$.clear();
  this.$f$ = null;
};
var $goog$net$XhrIoPool$$ = function $$goog$net$XhrIoPool$$$($opt_headers$jscomp$2$$, $opt_minCount$jscomp$2$$, $opt_maxCount$jscomp$2$$, $opt_withCredentials$jscomp$1$$) {
  this.$m$ = $opt_headers$jscomp$2$$;
  this.$o$ = !!$opt_withCredentials$jscomp$1$$;
  $goog$structs$PriorityPool$$.call(this, $opt_minCount$jscomp$2$$, $opt_maxCount$jscomp$2$$);
};
$goog$inherits$$($goog$net$XhrIoPool$$, $goog$structs$PriorityPool$$);
$goog$net$XhrIoPool$$.prototype.$g$ = function $$goog$net$XhrIoPool$$$$$g$$() {
  var $xhrIo$$ = new $goog$net$XhrIo$$, $headers$jscomp$1$$ = this.$m$;
  $headers$jscomp$1$$ && $headers$jscomp$1$$.forEach(function($headers$jscomp$1$$, $key$jscomp$113$$) {
    $xhrIo$$.headers.set($key$jscomp$113$$, $headers$jscomp$1$$);
  });
  this.$o$ && ($xhrIo$$.$l$ = !0);
  return $xhrIo$$;
};
$goog$net$XhrIoPool$$.prototype.$j$ = function $$goog$net$XhrIoPool$$$$$j$$($obj$jscomp$118$$) {
  return !$obj$jscomp$118$$.$h$ && !$obj$jscomp$118$$.$a$;
};
var $goog$net$XhrManager$$ = function $$goog$net$XhrManager$$$($opt_maxRetries$$, $opt_headers$jscomp$3$$, $opt_minCount$jscomp$3$$, $opt_maxCount$jscomp$3$$, $opt_timeoutInterval$jscomp$1$$, $opt_withCredentials$jscomp$2$$) {
  $goog$events$EventTarget$$.call(this);
  this.$i$ = $goog$isDef$$($opt_maxRetries$$) ? $opt_maxRetries$$ : 1;
  this.$g$ = $goog$isDef$$($opt_timeoutInterval$jscomp$1$$) ? Math.max(0, $opt_timeoutInterval$jscomp$1$$) : 0;
  this.$j$ = !!$opt_withCredentials$jscomp$2$$;
  this.$b$ = new $goog$net$XhrIoPool$$($opt_headers$jscomp$3$$, $opt_minCount$jscomp$3$$, $opt_maxCount$jscomp$3$$, $opt_withCredentials$jscomp$2$$);
  this.$a$ = new $goog$structs$Map$$;
  this.$f$ = new $goog$events$EventHandler$$(this);
};
$goog$inherits$$($goog$net$XhrManager$$, $goog$events$EventTarget$$);
var $goog$net$XhrManager$XHR_EVENT_TYPES_$$ = "ready complete success error abort timeout".split(" ");
$goog$net$XhrManager$$.prototype.send = function $$goog$net$XhrManager$$$$send$($callback$jscomp$397_id$jscomp$44$$, $request$jscomp$15_url$jscomp$52$$, $opt_method$jscomp$2$$, $opt_content$jscomp$7$$, $opt_headers$jscomp$4$$, $opt_priority$jscomp$2$$, $opt_callback$jscomp$141$$, $opt_maxRetries$jscomp$1$$, $opt_responseType$$, $opt_withCredentials$jscomp$3$$) {
  if (this.$a$.get($callback$jscomp$397_id$jscomp$44$$)) {
    throw Error("[goog.net.XhrManager] ID in use");
  }
  $request$jscomp$15_url$jscomp$52$$ = new $goog$net$XhrManager$Request$$($request$jscomp$15_url$jscomp$52$$, $goog$bind$$(this.$m$, this, $callback$jscomp$397_id$jscomp$44$$), $opt_method$jscomp$2$$, $opt_content$jscomp$7$$, $opt_headers$jscomp$4$$, $opt_callback$jscomp$141$$, $goog$isDef$$($opt_maxRetries$jscomp$1$$) ? $opt_maxRetries$jscomp$1$$ : this.$i$, $opt_responseType$$, $goog$isDef$$($opt_withCredentials$jscomp$3$$) ? $opt_withCredentials$jscomp$3$$ : this.$j$);
  this.$a$.set($callback$jscomp$397_id$jscomp$44$$, $request$jscomp$15_url$jscomp$52$$);
  $callback$jscomp$397_id$jscomp$44$$ = $goog$bind$$(this.$l$, this, $callback$jscomp$397_id$jscomp$44$$);
  this.$b$.$getObject$($callback$jscomp$397_id$jscomp$44$$, $opt_priority$jscomp$2$$);
  return $request$jscomp$15_url$jscomp$52$$;
};
$goog$net$XhrManager$$.prototype.abort = function $$goog$net$XhrManager$$$$abort$($id$jscomp$45$$, $opt_force$jscomp$1$$) {
  var $request$jscomp$16$$ = this.$a$.get($id$jscomp$45$$);
  if ($request$jscomp$16$$) {
    var $xhrIo$jscomp$1$$ = $request$jscomp$16$$.$xhrIo$;
    $request$jscomp$16$$.$aborted_$ = !0;
    $opt_force$jscomp$1$$ && ($xhrIo$jscomp$1$$ && (this.$f$.$unlisten$($xhrIo$jscomp$1$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$jscomp$16$$.$xhrEventCallback_$), $goog$events$listenOnce$$($xhrIo$jscomp$1$$, "ready", function() {
      var $id$jscomp$45$$ = this.$b$;
      $id$jscomp$45$$.$b$.remove($xhrIo$jscomp$1$$) && $id$jscomp$45$$.$addFreeObject$($xhrIo$jscomp$1$$);
    }, !1, this)), this.$a$.remove($id$jscomp$45$$));
    $xhrIo$jscomp$1$$ && $xhrIo$jscomp$1$$.abort();
  }
};
$goog$net$XhrManager$$.prototype.$l$ = function $$goog$net$XhrManager$$$$$l$$($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1054_id$jscomp$46$$, $xhrIo$jscomp$2$$) {
  var $request$jscomp$17$$ = this.$a$.get($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1054_id$jscomp$46$$);
  $request$jscomp$17$$ && !$request$jscomp$17$$.$xhrIo$ ? (this.$f$.listen($xhrIo$jscomp$2$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$jscomp$17$$.$xhrEventCallback_$), $xhrIo$jscomp$2$$.$i$ = Math.max(0, this.$g$), $xhrIo$jscomp$2$$.$o$ = $request$jscomp$17$$.$getResponseType$(), $xhrIo$jscomp$2$$.$l$ = $request$jscomp$17$$.$getWithCredentials$(), $request$jscomp$17$$.$xhrIo$ = $xhrIo$jscomp$2$$, $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("ready", 
  this, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1054_id$jscomp$46$$, $xhrIo$jscomp$2$$)), $JSCompiler_StaticMethods_retry_$$(this, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1054_id$jscomp$46$$, $xhrIo$jscomp$2$$), $request$jscomp$17$$.$aborted_$ && $xhrIo$jscomp$2$$.abort()) : ($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1054_id$jscomp$46$$ = this.$b$, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1054_id$jscomp$46$$.$b$.remove($xhrIo$jscomp$2$$) && 
  $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1054_id$jscomp$46$$.$addFreeObject$($xhrIo$jscomp$2$$));
};
$goog$net$XhrManager$$.prototype.$m$ = function $$goog$net$XhrManager$$$$$m$$($JSCompiler_inline_result$jscomp$52_id$jscomp$47$$, $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1059_e$jscomp$58$$) {
  var $xhrIo$jscomp$3$$ = $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1059_e$jscomp$58$$.$c$;
  switch($JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1059_e$jscomp$58$$.type) {
    case "ready":
      $JSCompiler_StaticMethods_retry_$$(this, $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$, $xhrIo$jscomp$3$$);
      break;
    case "complete":
      a: {
        var $request$jscomp$inline_769$$ = this.$a$.get($JSCompiler_inline_result$jscomp$52_id$jscomp$47$$);
        if (7 == $xhrIo$jscomp$3$$.$j$ || $JSCompiler_StaticMethods_isSuccess$$($xhrIo$jscomp$3$$) || $request$jscomp$inline_769$$.$attemptCount_$ > $request$jscomp$inline_769$$.$goog_net_XhrManager_Request$maxRetries_$) {
          if ($JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("complete", this, $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$, $xhrIo$jscomp$3$$)), $request$jscomp$inline_769$$ && ($request$jscomp$inline_769$$.$completed_$ = !0, $request$jscomp$inline_769$$.$completeCallback_$)) {
            $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$ = $request$jscomp$inline_769$$.$completeCallback_$.call($xhrIo$jscomp$3$$, $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1059_e$jscomp$58$$);
            break a;
          }
        }
        $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$ = null;
      }
      return $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$;
    case "success":
      $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("success", this, $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$, $xhrIo$jscomp$3$$));
      break;
    case "timeout":
    case "error":
      $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1059_e$jscomp$58$$ = this.$a$.get($JSCompiler_inline_result$jscomp$52_id$jscomp$47$$);
      $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1059_e$jscomp$58$$.$attemptCount_$ > $JSCompiler_StaticMethods_hasReachedMaxRetries$self$jscomp$inline_1059_e$jscomp$58$$.$goog_net_XhrManager_Request$maxRetries_$ && $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("error", this, $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$, $xhrIo$jscomp$3$$));
      break;
    case "abort":
      $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this, new $goog$net$XhrManager$Event$$("abort", this, $JSCompiler_inline_result$jscomp$52_id$jscomp$47$$, $xhrIo$jscomp$3$$));
  }
  return null;
};
var $JSCompiler_StaticMethods_retry_$$ = function $$JSCompiler_StaticMethods_retry_$$$($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$, $id$jscomp$48$$, $xhrIo$jscomp$4$$) {
  var $request$jscomp$18$$ = $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$.$a$.get($id$jscomp$48$$);
  !$request$jscomp$18$$ || $request$jscomp$18$$.$completed_$ || $request$jscomp$18$$.$attemptCount_$ > $request$jscomp$18$$.$goog_net_XhrManager_Request$maxRetries_$ ? ($request$jscomp$18$$ && ($JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$.$f$.$unlisten$($xhrIo$jscomp$4$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$jscomp$18$$.$xhrEventCallback_$), $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$.$a$.remove($id$jscomp$48$$)), 
  $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$ = $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$.$b$, $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$.$b$.remove($xhrIo$jscomp$4$$) && $JSCompiler_StaticMethods_releaseObject$self$jscomp$inline_1065_JSCompiler_StaticMethods_retry_$self$$.$addFreeObject$($xhrIo$jscomp$4$$)) : ($request$jscomp$18$$.$attemptCount_$++, 
  $xhrIo$jscomp$4$$.send($request$jscomp$18$$.$goog_net_XhrManager_Request$url_$, $request$jscomp$18$$.$method_$, $request$jscomp$18$$.$content_$, $request$jscomp$18$$.$goog_net_XhrManager_Request$headers_$));
};
$goog$net$XhrManager$$.prototype.$disposeInternal$ = function $$goog$net$XhrManager$$$$$disposeInternal$$() {
  $goog$net$XhrManager$$.$superClass_$.$disposeInternal$.call(this);
  this.$b$.$dispose$();
  this.$b$ = null;
  this.$f$.$dispose$();
  this.$f$ = null;
  this.$a$.clear();
  this.$a$ = null;
};
var $goog$net$XhrManager$Event$$ = function $$goog$net$XhrManager$Event$$$($type$jscomp$157$$, $target$jscomp$70$$, $id$jscomp$53$$, $xhrIo$jscomp$11$$) {
  $goog$events$Event$$.call(this, $type$jscomp$157$$, $target$jscomp$70$$);
  this.id = $id$jscomp$53$$;
  this.$xhrIo$ = $xhrIo$jscomp$11$$;
};
$goog$inherits$$($goog$net$XhrManager$Event$$, $goog$events$Event$$);
var $goog$net$XhrManager$Request$$ = function $$goog$net$XhrManager$Request$$$($url$jscomp$53$$, $xhrEventCallback$$, $opt_method$jscomp$3$$, $opt_content$jscomp$8$$, $opt_headers$jscomp$5$$, $opt_callback$jscomp$142$$, $opt_maxRetries$jscomp$2$$, $opt_responseType$jscomp$1$$, $opt_withCredentials$jscomp$4$$) {
  this.$goog_net_XhrManager_Request$url_$ = $url$jscomp$53$$;
  this.$method_$ = $opt_method$jscomp$3$$ || "GET";
  this.$content_$ = $opt_content$jscomp$8$$;
  this.$goog_net_XhrManager_Request$headers_$ = $opt_headers$jscomp$5$$ || null;
  this.$goog_net_XhrManager_Request$maxRetries_$ = $goog$isDef$$($opt_maxRetries$jscomp$2$$) ? $opt_maxRetries$jscomp$2$$ : 1;
  this.$attemptCount_$ = 0;
  this.$aborted_$ = this.$completed_$ = !1;
  this.$xhrEventCallback_$ = $xhrEventCallback$$;
  this.$completeCallback_$ = $opt_callback$jscomp$142$$;
  this.$a$ = $opt_responseType$jscomp$1$$ || "";
  this.$b$ = !!$opt_withCredentials$jscomp$4$$;
  this.$xhrIo$ = null;
};
$goog$net$XhrManager$Request$$.prototype.$getWithCredentials$ = function $$goog$net$XhrManager$Request$$$$$getWithCredentials$$() {
  return this.$b$;
};
$goog$net$XhrManager$Request$$.prototype.$getResponseType$ = function $$goog$net$XhrManager$Request$$$$$getResponseType$$() {
  return this.$a$;
};
var $castApp$core$Http$$ = function $$castApp$core$Http$$$() {
}, $castApp$core$Http$HttpStatusError$$ = function $$castApp$core$Http$HttpStatusError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$Http$HttpStatusError$$, $goog$debug$Error$$);
$castApp$core$Http$HttpStatusError$$.prototype.name = "httpStatus";
var $castApp$core$Http$ResponseParsingError$$ = function $$castApp$core$Http$ResponseParsingError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$Http$ResponseParsingError$$, $goog$debug$Error$$);
$castApp$core$Http$ResponseParsingError$$.prototype.name = "httpResponseParsing";
var $JSCompiler_StaticMethods_requestJson$$ = function $$JSCompiler_StaticMethods_requestJson$$$($JSCompiler_StaticMethods_requestJson$self$$, $request$jscomp$21$$) {
  return $JSCompiler_StaticMethods_requestJson$self$$.request($request$jscomp$21$$).then(function($JSCompiler_StaticMethods_requestJson$self$$) {
    if (($JSCompiler_StaticMethods_requestJson$self$$.getResponseHeader("content-type") || "").toLowerCase().startsWith("application/json")) {
      $JSCompiler_StaticMethods_requestJson$self$$ = $JSCompiler_StaticMethods_requestJson$self$$.$getResponseText$();
      $JSCompiler_StaticMethods_requestJson$self$$.startsWith(")]}'") && ($JSCompiler_StaticMethods_requestJson$self$$ = $JSCompiler_StaticMethods_requestJson$self$$.substr(4));
      try {
        return JSON.parse($JSCompiler_StaticMethods_requestJson$self$$);
      } catch ($e$jscomp$60$$) {
      }
    }
    throw new $castApp$core$Http$ResponseParsingError$$;
  });
}, $castApp$core$HttpImpl$$ = function $$castApp$core$HttpImpl$$$() {
  this.$a$ = new $goog$structs$Map$$;
  this.$b$ = 0;
};
$goog$inherits$$($castApp$core$HttpImpl$$, $castApp$core$Http$$);
var $castApp$core$HttpImpl$SuccessfulResponse_$$ = function $$castApp$core$HttpImpl$SuccessfulResponse_$$$($xhrIo$jscomp$12$$) {
  this.$b$ = $xhrIo$jscomp$12$$.$getResponseText$();
  this.$a$ = {};
  $goog$object$forEach$$($JSCompiler_StaticMethods_getResponseHeaders$$($xhrIo$jscomp$12$$), function($xhrIo$jscomp$12$$, $header$jscomp$5$$) {
    this.$a$[$header$jscomp$5$$.toLowerCase()] = $xhrIo$jscomp$12$$;
  }, this);
};
$castApp$core$HttpImpl$SuccessfulResponse_$$.prototype.$getResponseText$ = function $$castApp$core$HttpImpl$SuccessfulResponse_$$$$$getResponseText$$() {
  return this.$b$;
};
$castApp$core$HttpImpl$SuccessfulResponse_$$.prototype.getResponseHeader = function $$castApp$core$HttpImpl$SuccessfulResponse_$$$$getResponseHeader$($headerName$$) {
  return this.$a$[$headerName$$.toLowerCase()] || void 0;
};
$castApp$core$HttpImpl$$.prototype.request = function $$castApp$core$HttpImpl$$$$request$($requestData$$) {
  var $resolver$jscomp$18$$ = $goog$Promise$withResolver$$(), $method$jscomp$4_timeout$jscomp$6$$ = $requestData$$.timeout || 1E4, $manager$$ = this.$a$.get($method$jscomp$4_timeout$jscomp$6$$);
  $manager$$ || ($manager$$ = new $goog$net$XhrManager$$, $manager$$.$g$ = Math.max(0, $method$jscomp$4_timeout$jscomp$6$$), this.$a$.set($method$jscomp$4_timeout$jscomp$6$$, $manager$$));
  $method$jscomp$4_timeout$jscomp$6$$ = $requestData$$.method || "GET";
  $manager$$.send(this.$b$++, $requestData$$.url, $method$jscomp$4_timeout$jscomp$6$$, $requestData$$.content, $requestData$$.headers, 0, function($requestData$$) {
    $requestData$$ = $requestData$$.$c$;
    $JSCompiler_StaticMethods_isSuccess$$($requestData$$) ? $resolver$jscomp$18$$.$b$(new $castApp$core$HttpImpl$SuccessfulResponse_$$($requestData$$)) : $resolver$jscomp$18$$.$c$(new $castApp$core$Http$HttpStatusError$$($requestData$$.getStatus()));
  }, $requestData$$.$maxRetries$);
  return $resolver$jscomp$18$$.$a$;
};
var $castApp$core$SetupApiClient$$ = function $$castApp$core$SetupApiClient$$$($http$jscomp$1_language$jscomp$inline_789$$, $stateStorage$$, $JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$) {
  var $state$jscomp$13$$ = $stateStorage$$.read();
  this.$a$ = $state$jscomp$13$$.eurekaInfoState && $state$jscomp$13$$.eurekaInfoState.setupApiVersion || null;
  this.$g$ = new $goog$Uri$$("http://" + $state$jscomp$13$$.deviceIpAddress + ":8008");
  this.$b$ = $http$jscomp$1_language$jscomp$inline_789$$;
  this.$c$ = $stateStorage$$;
  $JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$ ? ($http$jscomp$1_language$jscomp$inline_789$$ = $goog$locale$getLanguageSubTag$$($JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$), $JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$ = ($JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$ = $goog$locale$getRegionSubTag$$($JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$)) ? "en" == 
  $http$jscomp$1_language$jscomp$inline_789$$ ? $http$jscomp$1_language$jscomp$inline_789$$ + "-" + $JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$ + ", en;q=0.8" : $http$jscomp$1_language$jscomp$inline_789$$ + "-" + $JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$ + ", " + $http$jscomp$1_language$jscomp$inline_789$$ + ";q=0.8, en;q=0.5" : $http$jscomp$1_language$jscomp$inline_789$$ + ", en;q=0.5") : $JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$ = 
  null;
  this.$f$ = $JSCompiler_temp$jscomp$53_opt_locale$jscomp$2_region$jscomp$inline_790$$;
}, $castApp$core$SetupApiClient$createInMemoryStateStorage$$ = function $$castApp$core$SetupApiClient$createInMemoryStateStorage$$$($deviceIpAddress$jscomp$1$$) {
  var $state$jscomp$14$$ = new $castApp$core$storage$SetupApiClientState$$($deviceIpAddress$jscomp$1$$);
  return {read:function() {
    return $state$jscomp$14$$;
  }, write:function($deviceIpAddress$jscomp$1$$) {
    $state$jscomp$14$$ = $deviceIpAddress$jscomp$1$$;
  }};
}, $castApp$core$SetupApiClient$create$$ = function $$castApp$core$SetupApiClient$create$$$($http$jscomp$2$$, $stateStorage$jscomp$1$$, $opt_locale$jscomp$3$$) {
  var $client$$ = new $castApp$core$SetupApiClient$$($http$jscomp$2$$, $stateStorage$jscomp$1$$, $opt_locale$jscomp$3$$);
  return $client$$.$a$ ? $goog$Promise$resolve$$($client$$) : $JSCompiler_StaticMethods_getEurekaInfo$$($client$$, {options:$castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$()}).then(function() {
    return $client$$;
  });
}, $castApp$core$SetupApiClient$createAndVerify$$ = function $$castApp$core$SetupApiClient$createAndVerify$$$($http$jscomp$3_query$jscomp$9$$, $stateStorage$jscomp$2$$, $networkingApi$jscomp$3$$, $hotSpotProps$jscomp$2$$, $opt_locale$jscomp$4$$) {
  var $client$jscomp$1$$ = new $castApp$core$SetupApiClient$$($http$jscomp$3_query$jscomp$9$$, $stateStorage$jscomp$2$$, $opt_locale$jscomp$4$$), $state$jscomp$15$$ = $stateStorage$jscomp$2$$.read();
  if ($state$jscomp$15$$.eurekaInfoState && $state$jscomp$15$$.eurekaInfoState.ethernetConnected) {
    return $goog$Promise$resolve$$($client$jscomp$1$$);
  }
  if ($state$jscomp$15$$.verificationState) {
    if ($castApp$core$utils$bssidsMatch$$($state$jscomp$15$$.verificationState.verificationProperties.deviceBssid, $hotSpotProps$jscomp$2$$.bssid)) {
      return $goog$Promise$resolve$$($client$jscomp$1$$);
    }
    $state$jscomp$15$$ = new $castApp$core$storage$SetupApiClientState$$($state$jscomp$15$$.deviceIpAddress);
    $stateStorage$jscomp$2$$.write($state$jscomp$15$$);
  }
  $http$jscomp$3_query$jscomp$9$$ = {};
  var $nonce$jscomp$4$$ = $http$jscomp$3_query$jscomp$9$$.nonce = $goog$string$getRandomString$$();
  $http$jscomp$3_query$jscomp$9$$.options = $castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$().concat(["name", "sign", "device_info.public_key", "device_info.hotspot_bssid"]);
  return $JSCompiler_StaticMethods_getEurekaInfo$$($client$jscomp$1$$, $http$jscomp$3_query$jscomp$9$$).then(function($http$jscomp$3_query$jscomp$9$$) {
    a: {
      switch($http$jscomp$3_query$jscomp$9$$.version) {
        case 3:
          $http$jscomp$3_query$jscomp$9$$ = $JSCompiler_StaticMethods_verifyImpl_$$(new $$jscomp$scope$DeviceVerifierV3_$$($http$jscomp$3_query$jscomp$9$$), $networkingApi$jscomp$3$$, $nonce$jscomp$4$$, $hotSpotProps$jscomp$2$$);
          break a;
        case 4:
        case 5:
        case 6:
          $http$jscomp$3_query$jscomp$9$$ = $JSCompiler_StaticMethods_verifyImpl_$$(new $$jscomp$scope$DeviceVerifierV456_$$($http$jscomp$3_query$jscomp$9$$), $networkingApi$jscomp$3$$, $nonce$jscomp$4$$, $hotSpotProps$jscomp$2$$);
          break a;
        default:
          $http$jscomp$3_query$jscomp$9$$ = $JSCompiler_StaticMethods_verifyImpl_$$(new $$jscomp$scope$DeviceVerifierV7_$$($http$jscomp$3_query$jscomp$9$$), $networkingApi$jscomp$3$$, $nonce$jscomp$4$$, $hotSpotProps$jscomp$2$$);
      }
    }
    return $http$jscomp$3_query$jscomp$9$$;
  }).then(function($http$jscomp$3_query$jscomp$9$$) {
    $state$jscomp$15$$ = $stateStorage$jscomp$2$$.read();
    $state$jscomp$15$$.verificationState = $http$jscomp$3_query$jscomp$9$$;
    $stateStorage$jscomp$2$$.write($state$jscomp$15$$);
    return $client$jscomp$1$$;
  }, function($http$jscomp$3_query$jscomp$9$$) {
    $castApp$utils$rethrowIfCancellationError$$($http$jscomp$3_query$jscomp$9$$);
    if ($http$jscomp$3_query$jscomp$9$$ instanceof $castApp$core$Http$HttpStatusError$$) {
      throw $http$jscomp$3_query$jscomp$9$$;
    }
    !$http$jscomp$3_query$jscomp$9$$ || $http$jscomp$3_query$jscomp$9$$ instanceof $castApp$core$SetupApiClient$VerificationError$$ ? $castApp$log$error$$($castApp$core$SetupApiClient$logger_$$, "Device verification failed") : $castApp$utils$logError$$($castApp$core$SetupApiClient$logger_$$, "Device verification failed with error: ", $http$jscomp$3_query$jscomp$9$$);
    throw new $castApp$core$SetupApiClient$VerificationError$$;
  });
}, $castApp$core$SetupApiClient$VersionError$$ = function $$castApp$core$SetupApiClient$VersionError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$SetupApiClient$VersionError$$, $goog$debug$Error$$);
$castApp$core$SetupApiClient$VersionError$$.prototype.name = "setupApiVersionError";
var $castApp$core$SetupApiClient$VerificationError$$ = function $$castApp$core$SetupApiClient$VerificationError$$$() {
  $goog$debug$Error$$.call(this);
};
$goog$inherits$$($castApp$core$SetupApiClient$VerificationError$$, $goog$debug$Error$$);
$castApp$core$SetupApiClient$VerificationError$$.prototype.name = "deviceVerificationError";
var $castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$ = function $$castApp$core$SetupApiClient$getCommonEurekaInfoOptions_$$$() {
  return "version name setup.setup_state net.ethernet_connected net.ip_address device_info.ssdp_udn device_info.model_name device_info.capabilities setup.ssid_suffix setup.tos_accepted".split(" ");
}, $castApp$core$SetupApiClient$logger_$$ = $castApp$log$getLogger$$("core.SetupApiClient");
$castApp$core$SetupApiClient$$.prototype.$i$ = new $goog$structs$Set$$([3, 4, 5, 6, 7, 8]);
$castApp$core$SetupApiClient$$.prototype.$h$ = new $goog$structs$Map$$(3, function($obj$jscomp$82$$) {
  $goog$object$setIfUndefined$$($obj$jscomp$82$$, "locale", "en-US");
  return $obj$jscomp$82$$;
}, 4, $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$, 5, $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$, 6, $castApp$core$setupApi$fillEurekaInfoMsgV4Defaults$$, 7, $castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$);
$castApp$core$SetupApiClient$$.prototype.getState = function $$castApp$core$SetupApiClient$$$$getState$() {
  return this.$c$.read();
};
var $JSCompiler_StaticMethods_getEurekaInfoState$$ = function $$JSCompiler_StaticMethods_getEurekaInfoState$$$($JSCompiler_StaticMethods_getEurekaInfoState$self$$) {
  return $JSCompiler_StaticMethods_getEurekaInfoState$self$$.$c$.read().eurekaInfoState;
}, $JSCompiler_StaticMethods_postConnectWiFi$$ = function $$JSCompiler_StaticMethods_postConnectWiFi$$$($JSCompiler_StaticMethods_postConnectWiFi$self$$, $req$$) {
  return $JSCompiler_StaticMethods_postConnectWiFi$self$$.$b$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postConnectWiFi$self$$, "/setup/connect_wifi"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify($req$$), $maxRetries$:0});
}, $JSCompiler_StaticMethods_getEurekaInfo$$ = function $$JSCompiler_StaticMethods_getEurekaInfo$$$($JSCompiler_StaticMethods_getEurekaInfo$self$$, $headers$jscomp$2_opt_query_params$$) {
  var $url$jscomp$54$$ = new $goog$Uri$$($JSCompiler_StaticMethods_getEurekaInfo$self$$.$g$);
  $url$jscomp$54$$.$b$ = "/setup/eureka_info";
  if ($headers$jscomp$2_opt_query_params$$) {
    var $query$jscomp$10$$ = [];
    if ($headers$jscomp$2_opt_query_params$$.options) {
      var $optionSet$$ = new $goog$structs$Set$$($headers$jscomp$2_opt_query_params$$.options), $hasSignOption$$ = $optionSet$$.contains("sign");
      if (null === $JSCompiler_StaticMethods_getEurekaInfo$self$$.$a$ || 7 > $JSCompiler_StaticMethods_getEurekaInfo$self$$.$a$) {
        for (var $col$jscomp$inline_798_values$jscomp$inline_800$$ = new $goog$structs$Set$$(["sign", "detail"]), $result$jscomp$inline_799$$ = new $goog$structs$Set$$, $col$jscomp$inline_798_values$jscomp$inline_800$$ = $goog$structs$getValues$$($col$jscomp$inline_798_values$jscomp$inline_800$$), $i$jscomp$inline_801$$ = 0;$i$jscomp$inline_801$$ < $col$jscomp$inline_798_values$jscomp$inline_800$$.length;$i$jscomp$inline_801$$++) {
          var $value$jscomp$inline_802$$ = $col$jscomp$inline_798_values$jscomp$inline_800$$[$i$jscomp$inline_801$$];
          $optionSet$$.contains($value$jscomp$inline_802$$) && $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$($result$jscomp$inline_799$$, $value$jscomp$inline_802$$);
        }
        $result$jscomp$inline_799$$.$getCount$() && $query$jscomp$10$$.push("options=" + $result$jscomp$inline_799$$.$getValues$().join(","));
      }
      $optionSet$$.$getCount$() && (null === $JSCompiler_StaticMethods_getEurekaInfo$self$$.$a$ || 7 <= $JSCompiler_StaticMethods_getEurekaInfo$self$$.$a$) && $query$jscomp$10$$.push("params=" + $optionSet$$.$getValues$().join(","));
    }
    $headers$jscomp$2_opt_query_params$$.nonce && $query$jscomp$10$$.push("nonce=" + $headers$jscomp$2_opt_query_params$$.nonce);
    $query$jscomp$10$$.length && $JSCompiler_StaticMethods_setQueryData$$($url$jscomp$54$$, $query$jscomp$10$$.join("&"), void 0);
  }
  $headers$jscomp$2_opt_query_params$$ = void 0;
  $JSCompiler_StaticMethods_getEurekaInfo$self$$.$f$ && ($headers$jscomp$2_opt_query_params$$ = {"Accept-Language":$JSCompiler_StaticMethods_getEurekaInfo$self$$.$f$});
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getEurekaInfo$self$$.$b$, {url:$url$jscomp$54$$.toString(), method:"GET", headers:$headers$jscomp$2_opt_query_params$$, timeout:$hasSignOption$$ ? 4E4 : 1E4, $maxRetries$:$hasSignOption$$ ? 1 : 2}).then($JSCompiler_StaticMethods_getEurekaInfo$self$$.$j$.bind($JSCompiler_StaticMethods_getEurekaInfo$self$$)).then($JSCompiler_StaticMethods_getEurekaInfo$self$$.$l$.bind($JSCompiler_StaticMethods_getEurekaInfo$self$$));
};
$castApp$core$SetupApiClient$$.prototype.$j$ = function $$castApp$core$SetupApiClient$$$$$j$$($eurekaInfoObject$$) {
  if (!$eurekaInfoObject$$.version) {
    return $eurekaInfoObject$$;
  }
  if (!this.$i$.contains($eurekaInfoObject$$.version)) {
    throw $castApp$log$error$$($castApp$core$SetupApiClient$logger_$$, "Bad eurekaInfo version: " + $eurekaInfoObject$$.version), new $castApp$core$SetupApiClient$VersionError$$;
  }
  var $fillEurekaInfoDefaults_parsedVersion$$ = parseInt($eurekaInfoObject$$.version, 10);
  this.$a$ && this.$a$ !== $fillEurekaInfoDefaults_parsedVersion$$ && $castApp$log$warning$$($castApp$core$SetupApiClient$logger_$$, "Device changed setup protocol versions. old version: " + this.$a$ + " new version: " + $fillEurekaInfoDefaults_parsedVersion$$);
  this.$a$ = $fillEurekaInfoDefaults_parsedVersion$$;
  $fillEurekaInfoDefaults_parsedVersion$$ = this.$h$.get(this.$a$, null);
  !$fillEurekaInfoDefaults_parsedVersion$$ && 7 <= this.$a$ && ($fillEurekaInfoDefaults_parsedVersion$$ = $castApp$core$setupApi$fillEurekaInfoMsgV7Defaults$$);
  return $fillEurekaInfoDefaults_parsedVersion$$($eurekaInfoObject$$);
};
$castApp$core$SetupApiClient$$.prototype.$l$ = function $$castApp$core$SetupApiClient$$$$$l$$($eurekaInfo$jscomp$11$$) {
  var $state$jscomp$17$$ = this.$c$.read(), $oldProps$$ = $state$jscomp$17$$.eurekaInfoState, $newProps$$ = {};
  this.$a$ && ($newProps$$.setupApiVersion = this.$a$);
  if (3 <= this.$a$ && 6 >= this.$a$) {
    $newProps$$.name = $eurekaInfo$jscomp$11$$.name, $newProps$$.setupState = $eurekaInfo$jscomp$11$$.setup_state, $newProps$$.ssdpUdn = $eurekaInfo$jscomp$11$$.ssdp_udn, 3 === this.$a$ ? ($newProps$$.ethernetConnected = !1, $newProps$$.tosAccepted = !0, $newProps$$.modelName = "Chromecast") : ($newProps$$.ethernetConnected = 6 === this.$a$ ? !!$eurekaInfo$jscomp$11$$.ethernet_connected : !1, $newProps$$.tosAccepted = !!$eurekaInfo$jscomp$11$$.tos_accepted, $eurekaInfo$jscomp$11$$.detail && ($newProps$$.modelName = 
    $eurekaInfo$jscomp$11$$.detail.model_name)), $eurekaInfo$jscomp$11$$.ip_address && ($newProps$$.connectedIpAddress = $eurekaInfo$jscomp$11$$.ip_address), $newProps$$.deviceType = "c";
  } else {
    if (7 <= this.$a$) {
      $eurekaInfo$jscomp$11$$.name && ($newProps$$.name = $eurekaInfo$jscomp$11$$.name);
      if ($eurekaInfo$jscomp$11$$.setup && (void 0 !== $eurekaInfo$jscomp$11$$.setup.setup_state && ($newProps$$.setupState = $eurekaInfo$jscomp$11$$.setup.setup_state), 63 === $newProps$$.setupState ? $newProps$$.tosAccepted = !1 : void 0 !== $eurekaInfo$jscomp$11$$.setup.tos_accepted && ($newProps$$.tosAccepted = $eurekaInfo$jscomp$11$$.setup.tos_accepted), void 0 !== $eurekaInfo$jscomp$11$$.setup.ssid_suffix)) {
        var $parsedSuffix$jscomp$1$$ = $castApp$core$utils$parseSsidSuffix$$($eurekaInfo$jscomp$11$$.setup.ssid_suffix);
        $newProps$$.deviceType = $parsedSuffix$jscomp$1$$ ? $parsedSuffix$jscomp$1$$.type : "c";
      }
      $eurekaInfo$jscomp$11$$.device_info && ($eurekaInfo$jscomp$11$$.device_info.model_name && ($newProps$$.modelName = $eurekaInfo$jscomp$11$$.device_info.model_name), $eurekaInfo$jscomp$11$$.device_info.ssdp_udn && ($newProps$$.ssdpUdn = $eurekaInfo$jscomp$11$$.device_info.ssdp_udn), $eurekaInfo$jscomp$11$$.device_info.capabilities && ($newProps$$.features = $castApp$core$utils$createFeatures$$($newProps$$.deviceType || $oldProps$$ && $oldProps$$.deviceType || "b", $eurekaInfo$jscomp$11$$.device_info.capabilities)));
      $eurekaInfo$jscomp$11$$.net && (void 0 !== $eurekaInfo$jscomp$11$$.net.ethernet_connected && ($newProps$$.ethernetConnected = $eurekaInfo$jscomp$11$$.net.ethernet_connected), $eurekaInfo$jscomp$11$$.net.ip_address && ($newProps$$.connectedIpAddress = $eurekaInfo$jscomp$11$$.net.ip_address));
    }
  }
  $oldProps$$ ? $goog$object$extend$$($oldProps$$, $newProps$$) : $state$jscomp$17$$.eurekaInfoState = $newProps$$;
  $state$jscomp$17$$.eurekaInfoState.features || ($state$jscomp$17$$.eurekaInfoState.features = $castApp$core$utils$createFeatures$$($newProps$$.deviceType || $oldProps$$ && $oldProps$$.deviceType || "b"));
  this.$c$.write($state$jscomp$17$$);
  return $eurekaInfo$jscomp$11$$;
};
var $JSCompiler_StaticMethods_getOffer$$ = function $$JSCompiler_StaticMethods_getOffer$$$($JSCompiler_StaticMethods_getOffer$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getOffer$self$$.$b$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getOffer$self$$, "/setup/offer"), method:"GET", timeout:1E4, $maxRetries$:2}).then(function($JSCompiler_StaticMethods_getOffer$self$$) {
    return $JSCompiler_StaticMethods_getOffer$self$$;
  });
}, $JSCompiler_StaticMethods_postReboot$$ = function $$JSCompiler_StaticMethods_postReboot$$$($JSCompiler_StaticMethods_postReboot$self$$, $params$jscomp$6$$) {
  $JSCompiler_StaticMethods_postReboot$self$$.$b$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postReboot$self$$, "/setup/reboot"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify(new $castApp$core$setupApi$RebootMsg$$($params$jscomp$6$$)), timeout:1E4, $maxRetries$:2});
}, $JSCompiler_StaticMethods_postSaveWiFi$$ = function $$JSCompiler_StaticMethods_postSaveWiFi$$$($JSCompiler_StaticMethods_postSaveWiFi$self$$) {
  var $msg$jscomp$45$$ = new $castApp$core$setupApi$SaveWiFiRequestMsg$$;
  $msg$jscomp$45$$.immediate = !0;
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_postSaveWiFi$self$$.$b$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postSaveWiFi$self$$, "/setup/save_wifi"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify($msg$jscomp$45$$), timeout:2E4, $maxRetries$:1}).then(function($JSCompiler_StaticMethods_postSaveWiFi$self$$) {
    var $msg$jscomp$45$$ = this.$c$.read();
    $msg$jscomp$45$$.eurekaInfoState && $msg$jscomp$45$$.eurekaInfoState.setupState !== $JSCompiler_StaticMethods_postSaveWiFi$self$$.setup_state && ($msg$jscomp$45$$.eurekaInfoState.setupState = $JSCompiler_StaticMethods_postSaveWiFi$self$$.setup_state, this.$c$.write($msg$jscomp$45$$));
    return $JSCompiler_StaticMethods_postSaveWiFi$self$$;
  }.bind($JSCompiler_StaticMethods_postSaveWiFi$self$$));
}, $JSCompiler_StaticMethods_getScanResults$$ = function $$JSCompiler_StaticMethods_getScanResults$$$($JSCompiler_StaticMethods_getScanResults$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getScanResults$self$$.$b$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getScanResults$self$$, "/setup/scan_results"), method:"GET", timeout:1E4, $maxRetries$:5}).then(function($JSCompiler_StaticMethods_getScanResults$self$$) {
    return $JSCompiler_StaticMethods_getScanResults$self$$;
  });
}, $JSCompiler_StaticMethods_postScanWiFi$$ = function $$JSCompiler_StaticMethods_postScanWiFi$$$($JSCompiler_StaticMethods_postScanWiFi$self$$) {
  return $JSCompiler_StaticMethods_postScanWiFi$self$$.$b$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postScanWiFi$self$$, "/setup/scan_wifi"), method:"POST", $maxRetries$:0});
}, $JSCompiler_StaticMethods_postSetEurekaInfo$$ = function $$JSCompiler_StaticMethods_postSetEurekaInfo$$$($JSCompiler_StaticMethods_postSetEurekaInfo$self$$, $req$jscomp$1$$) {
  return $JSCompiler_StaticMethods_postSetEurekaInfo$self$$.$b$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postSetEurekaInfo$self$$, "/setup/set_eureka_info"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify($req$jscomp$1$$), $maxRetries$:0});
}, $JSCompiler_StaticMethods_getSupportedLocales$$ = function $$JSCompiler_StaticMethods_getSupportedLocales$$$($JSCompiler_StaticMethods_getSupportedLocales$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getSupportedLocales$self$$.$b$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getSupportedLocales$self$$, "/setup/supported_locales"), method:"GET", timeout:1E4, $maxRetries$:2}).then(function($JSCompiler_StaticMethods_getSupportedLocales$self$$) {
    return $JSCompiler_StaticMethods_getSupportedLocales$self$$;
  });
}, $JSCompiler_StaticMethods_getSupportedTimeZones$$ = function $$JSCompiler_StaticMethods_getSupportedTimeZones$$$($JSCompiler_StaticMethods_getSupportedTimeZones$self$$) {
  return $JSCompiler_StaticMethods_requestJson$$($JSCompiler_StaticMethods_getSupportedTimeZones$self$$.$b$, {url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_getSupportedTimeZones$self$$, "/setup/supported_timezones"), method:"GET", timeout:1E4, $maxRetries$:2}).then(function($JSCompiler_StaticMethods_getSupportedTimeZones$self$$) {
    return $JSCompiler_StaticMethods_getSupportedTimeZones$self$$;
  });
}, $JSCompiler_StaticMethods_createRequestUrl_$$ = function $$JSCompiler_StaticMethods_createRequestUrl_$$$($JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$55$$, $path$jscomp$23$$) {
  $JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$55$$ = new $goog$Uri$$($JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$55$$.$g$);
  $JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$55$$.$b$ = $path$jscomp$23$$;
  return $JSCompiler_StaticMethods_createRequestUrl_$self_url$jscomp$55$$.toString();
};
var $castApp$core$WiFiMonitor$$ = function $$castApp$core$WiFiMonitor$$$($networkingApi$jscomp$4$$, $var_args$jscomp$112$$) {
  this.networks = new $goog$structs$Map$$;
  this.$f$ = new $castApp$StartStoppable$$(this.$castApp_core_WiFiMonitor_prototype$start_$.bind(this), this.$castApp_core_WiFiMonitor_prototype$reset_$.bind(this));
  this.$b$ = $networkingApi$jscomp$4$$;
  this.$g$ = [];
  for (var $i$jscomp$183$$ = 1, $l$jscomp$25$$ = arguments.length;$i$jscomp$183$$ < $l$jscomp$25$$;++$i$jscomp$183$$) {
    this.$g$.push(arguments[$i$jscomp$183$$]);
  }
  this.$c$ = new $goog$structs$Set$$;
  this.$h$ = this.$handleNetworkListChanged_$.bind(this);
  this.$i$ = this.$handleNetworksChanged_$.bind(this);
  this.$a$ = new $goog$events$EventTarget$$;
}, $castApp$core$WiFiMonitor$Event$$ = function $$castApp$core$WiFiMonitor$Event$$$($type$jscomp$158$$, $props$jscomp$2$$) {
  $goog$events$Event$$.call(this, $type$jscomp$158$$);
  this.$a$ = $props$jscomp$2$$;
};
$goog$inherits$$($castApp$core$WiFiMonitor$Event$$, $goog$events$Event$$);
var $castApp$core$WiFiMonitor$Filter$$ = function $$castApp$core$WiFiMonitor$Filter$$$() {
};
$castApp$core$WiFiMonitor$Filter$$.prototype.$c$ = function $$castApp$core$WiFiMonitor$Filter$$$$$c$$() {
  return !0;
};
$castApp$core$WiFiMonitor$Filter$$.prototype.$a$ = function $$castApp$core$WiFiMonitor$Filter$$$$$a$$() {
  return !0;
};
var $castApp$core$WiFiMonitor$CastHotSpotsFilter$$ = function $$castApp$core$WiFiMonitor$CastHotSpotsFilter$$$($opt_bssid$$) {
  this.$b$ = $opt_bssid$$ || null;
};
$goog$inherits$$($castApp$core$WiFiMonitor$CastHotSpotsFilter$$, $castApp$core$WiFiMonitor$Filter$$);
$castApp$core$WiFiMonitor$CastHotSpotsFilter$$.prototype.$c$ = function $$castApp$core$WiFiMonitor$CastHotSpotsFilter$$$$$c$$($props$jscomp$5$$) {
  return !(!$props$jscomp$5$$.WiFi || $props$jscomp$5$$.WiFi.Security && "None" !== $props$jscomp$5$$.WiFi.Security);
};
$castApp$core$WiFiMonitor$CastHotSpotsFilter$$.prototype.$a$ = function $$castApp$core$WiFiMonitor$CastHotSpotsFilter$$$$$a$$($props$jscomp$6$$) {
  return this.$b$ ? !(!$props$jscomp$6$$.WiFi || $props$jscomp$6$$.WiFi.BSSID !== this.$b$) : $castApp$core$utils$isEurekaHotSpot$$($props$jscomp$6$$);
};
var $castApp$core$WiFiMonitor$stringifyNetworkPropertiesForLogging_$$ = function $$castApp$core$WiFiMonitor$stringifyNetworkPropertiesForLogging_$$$($props$jscomp$7$$) {
  var $parts$jscomp$6$$ = [];
  ["GUID", "Name"].forEach(function($propName$$) {
    $propName$$ in $props$jscomp$7$$ && ($parts$jscomp$6$$.push(" " + $propName$$ + ": "), $parts$jscomp$6$$.push($castApp$log$anonymizeString$$("" + $props$jscomp$7$$[$propName$$])));
  });
  ["ConnectionState", "Type"].forEach(function($propName$jscomp$1$$) {
    $propName$jscomp$1$$ in $props$jscomp$7$$ && $parts$jscomp$6$$.push(" " + $propName$jscomp$1$$ + ": " + $props$jscomp$7$$[$propName$jscomp$1$$]);
  });
  $props$jscomp$7$$.WiFi && (["SSID", "BSSID"].forEach(function($propName$jscomp$2$$) {
    $propName$jscomp$2$$ in $props$jscomp$7$$.WiFi && ($parts$jscomp$6$$.push(" WiFi." + $propName$jscomp$2$$ + ": "), $parts$jscomp$6$$.push($castApp$log$anonymizeString$$("" + $props$jscomp$7$$.WiFi[$propName$jscomp$2$$])));
  }), ["Security", "SignalStrength"].forEach(function($propName$jscomp$3$$) {
    $parts$jscomp$6$$.push(" WiFi." + $propName$jscomp$3$$ + ": " + $props$jscomp$7$$.WiFi[$propName$jscomp$3$$]);
  }));
  return $castApp$log$joinMessageParts$$($parts$jscomp$6$$);
}, $castApp$core$WiFiMonitor$logger_$$ = $castApp$log$getLogger$$("core.WiFiMonitor");
$JSCompiler_prototypeAlias$$ = $castApp$core$WiFiMonitor$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$f$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$f$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiMonitor_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiMonitor_prototype$start_$$() {
  var $networkingApi$jscomp$5$$ = this.$b$;
  $networkingApi$jscomp$5$$.onNetworkListChanged.addListener(this.$h$);
  $networkingApi$jscomp$5$$.onNetworksChanged.addListener(this.$i$);
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, this.$b$.getNetworks({networkType:"WiFi", visible:!0})).then(this.$initializeNetworkProperties_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$initializeNetworkProperties_$ = function $$JSCompiler_prototypeAlias$$$$initializeNetworkProperties_$$($networkResults$$) {
  return $goog$Promise$all$$($networkResults$$.filter(function($networkResults$$) {
    if ($JSCompiler_StaticMethods_filterByNetworkState_$$(this, $networkResults$$)) {
      return !0;
    }
    $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$(this.$c$, $networkResults$$.GUID);
    return !1;
  }.bind(this)).map(function($networkResults$$) {
    return this.$updateNetwork_$($networkResults$$.GUID);
  }.bind(this)));
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiMonitor_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiMonitor_prototype$reset_$$() {
  this.$b$.onNetworkListChanged.removeListener(this.$h$);
  this.$b$.onNetworksChanged.removeListener(this.$i$);
  this.networks.clear();
  this.$c$.clear();
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$handleNetworkListChanged_$ = function $$JSCompiler_prototypeAlias$$$$handleNetworkListChanged_$$($networkGuids_newGuids$$) {
  var $oldGuids$$ = new $goog$structs$Set$$(this.networks.$getKeys$());
  $networkGuids_newGuids$$ = $JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$($networkGuids_newGuids$$), this.$c$);
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$($networkGuids_newGuids$$, $oldGuids$$), this.$updateNetwork_$.bind(this));
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$($oldGuids$$, $networkGuids_newGuids$$), this.$removeNetwork_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$removeNetwork_$ = function $$JSCompiler_prototypeAlias$$$$removeNetwork_$$($guid$jscomp$13_wasConnected$$) {
  var $props$jscomp$10$$ = this.networks.get($guid$jscomp$13_wasConnected$$);
  this.networks.remove($guid$jscomp$13_wasConnected$$);
  $guid$jscomp$13_wasConnected$$ = "Connected" === $props$jscomp$10$$.ConnectionState;
  $props$jscomp$10$$.ConnectionState = "NotConnected";
  $guid$jscomp$13_wasConnected$$ && $JSCompiler_StaticMethods_dispatchEvent_$$(this, "disconnected", $props$jscomp$10$$);
  $JSCompiler_StaticMethods_dispatchEvent_$$(this, "removed", $props$jscomp$10$$);
};
$JSCompiler_prototypeAlias$$.$handleNetworksChanged_$ = function $$JSCompiler_prototypeAlias$$$$handleNetworksChanged_$$($filteredNetworkGuids_networkGuids$jscomp$1$$) {
  $filteredNetworkGuids_networkGuids$jscomp$1$$ = $JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$($filteredNetworkGuids_networkGuids$jscomp$1$$), this.$c$);
  $goog$iter$forEach$$($filteredNetworkGuids_networkGuids$jscomp$1$$, this.$updateNetwork_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$updateNetwork_$ = function $$JSCompiler_prototypeAlias$$$$updateNetwork_$$($guid$jscomp$14$$) {
  var $self$jscomp$4$$ = this, $updateFinished$$ = $goog$Promise$withResolver$$();
  $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_getProperties_$$($self$jscomp$4$$, $guid$jscomp$14$$).then(function($updateFinished$$) {
    var $newProps$jscomp$1$$ = $self$jscomp$4$$.networks.get($guid$jscomp$14$$), $wasConnected$jscomp$1$$ = !(!$newProps$jscomp$1$$ || "Connected" !== $newProps$jscomp$1$$.ConnectionState);
    $self$jscomp$4$$.networks.set($updateFinished$$.GUID, $updateFinished$$);
    var $isConnected$$ = "Connected" === $updateFinished$$.ConnectionState;
    $newProps$jscomp$1$$ || $JSCompiler_StaticMethods_dispatchEvent_$$($self$jscomp$4$$, "added", $updateFinished$$);
    !$wasConnected$jscomp$1$$ && $isConnected$$ ? $JSCompiler_StaticMethods_dispatchEvent_$$($self$jscomp$4$$, "connected", $updateFinished$$) : $wasConnected$jscomp$1$$ && !$isConnected$$ && $JSCompiler_StaticMethods_dispatchEvent_$$($self$jscomp$4$$, "disconnected", $updateFinished$$);
  }), function() {
    $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($self$jscomp$4$$.networks, $guid$jscomp$14$$) && $self$jscomp$4$$.$removeNetwork_$($guid$jscomp$14$$);
  }), function() {
    $updateFinished$$.$b$();
  });
  return $updateFinished$$.$a$;
};
var $JSCompiler_StaticMethods_dispatchEvent_$$ = function $$JSCompiler_StaticMethods_dispatchEvent_$$$($JSCompiler_StaticMethods_dispatchEvent_$self$$, $type$jscomp$159$$, $props$jscomp$11$$) {
  $castApp$log$info$$($castApp$core$WiFiMonitor$logger_$$, "Dispatching event: type=" + $type$jscomp$159$$ + " for network=[", $castApp$core$WiFiMonitor$stringifyNetworkPropertiesForLogging_$$.bind($JSCompiler_StaticMethods_dispatchEvent_$self$$, $props$jscomp$11$$), "]");
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchEvent_$self$$.$a$, new $castApp$core$WiFiMonitor$Event$$($type$jscomp$159$$, $props$jscomp$11$$));
}, $JSCompiler_StaticMethods_getProperties_$$ = function $$JSCompiler_StaticMethods_getProperties_$$$($JSCompiler_StaticMethods_getProperties_$self$$, $guid$jscomp$15$$) {
  return $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_getProperties_$self$$.$f$, $JSCompiler_StaticMethods_getProperties_$self$$.$b$.getProperties($guid$jscomp$15$$)), function($JSCompiler_StaticMethods_getProperties_$self$$) {
    $JSCompiler_StaticMethods_getProperties_$self$$ instanceof $goog$Promise$CancellationError$$ || $castApp$log$warningWithCause$$($castApp$core$WiFiMonitor$logger_$$, $JSCompiler_StaticMethods_getProperties_$self$$, "getProperties(", $castApp$log$anonymizeString$$($guid$jscomp$15$$), ") failed.");
    throw $JSCompiler_StaticMethods_getProperties_$self$$;
  }.bind($JSCompiler_StaticMethods_getProperties_$self$$)).then(function($JSCompiler_StaticMethods_getProperties_$self$$) {
    if (!$JSCompiler_StaticMethods_filterByNetworkProperties_$$(this, $JSCompiler_StaticMethods_getProperties_$self$$)) {
      throw $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$(this.$c$, $guid$jscomp$15$$), new $goog$Promise$CancellationError$$;
    }
    return $JSCompiler_StaticMethods_getProperties_$self$$;
  }.bind($JSCompiler_StaticMethods_getProperties_$self$$));
}, $JSCompiler_StaticMethods_filterByNetworkState_$$ = function $$JSCompiler_StaticMethods_filterByNetworkState_$$$($JSCompiler_StaticMethods_filterByNetworkState_$self$$, $props$jscomp$13$$) {
  return !$goog$array$find$$($JSCompiler_StaticMethods_filterByNetworkState_$self$$.$g$, function($JSCompiler_StaticMethods_filterByNetworkState_$self$$) {
    return !$JSCompiler_StaticMethods_filterByNetworkState_$self$$.$c$($props$jscomp$13$$);
  });
}, $JSCompiler_StaticMethods_filterByNetworkProperties_$$ = function $$JSCompiler_StaticMethods_filterByNetworkProperties_$$$($JSCompiler_StaticMethods_filterByNetworkProperties_$self$$, $props$jscomp$14$$) {
  return !$goog$array$find$$($JSCompiler_StaticMethods_filterByNetworkProperties_$self$$.$g$, function($JSCompiler_StaticMethods_filterByNetworkProperties_$self$$) {
    return !$JSCompiler_StaticMethods_filterByNetworkProperties_$self$$.$a$($props$jscomp$14$$);
  });
};
var $castApp$core$ShortTermDeviceState$$ = function $$castApp$core$ShortTermDeviceState$$$($storage$jscomp$17$$) {
  this.$b$ = $storage$jscomp$17$$;
  this.$a$ = null;
}, $castApp$core$ShortTermDeviceState$TIMEOUTS$$ = new $goog$structs$Map$$(1, 2E4, 3, 6E4, 2, 6E4), $castApp$core$ShortTermDeviceState$addNewStateRecord_$$ = function $$castApp$core$ShortTermDeviceState$addNewStateRecord_$$$($storage$jscomp$21$$, $newStateRecord$$) {
  var $stateRecords$$ = $castApp$core$storage$readShortTermDeviceState$$($storage$jscomp$21$$).filter($castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$);
  $stateRecords$$.push($newStateRecord$$);
  $castApp$core$storage$writeShortTermDeviceState$$($storage$jscomp$21$$, $stateRecords$$);
}, $castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$ = function $$castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$$($stateRecord$$) {
  var $timeout$jscomp$7$$ = $castApp$core$ShortTermDeviceState$TIMEOUTS$$.get($stateRecord$$.type, Infinity);
  return $goog$now$$() - $stateRecord$$.time < $timeout$jscomp$7$$;
}, $castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$ = function $$castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$$($shortTermDeviceState$$) {
  this.$b$ = $shortTermDeviceState$$;
};
$goog$inherits$$($castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$, $castApp$core$WiFiMonitor$Filter$$);
$castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$.prototype.$a$ = function $$castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$$$$a$$($bssid$jscomp$inline_809_props$jscomp$15$$) {
  $bssid$jscomp$inline_809_props$jscomp$15$$ = $bssid$jscomp$inline_809_props$jscomp$15$$.WiFi && $bssid$jscomp$inline_809_props$jscomp$15$$.WiFi.BSSID;
  var $ret$jscomp$inline_810$$ = $JSCompiler_StaticMethods_checkDeviceState_$$(this.$b$, $bssid$jscomp$inline_809_props$jscomp$15$$, 2);
  $ret$jscomp$inline_810$$ && $castApp$log$info$$($castApp$core$ShortTermDeviceState$logger_$$, "Hotspot with BSSID=", $castApp$log$anonymizeString$$($bssid$jscomp$inline_809_props$jscomp$15$$), " is assumed to be turning off.");
  return !$ret$jscomp$inline_810$$;
};
var $castApp$core$ShortTermDeviceState$logger_$$ = $castApp$log$getLogger$$("core.ShortTermDeviceState"), $JSCompiler_StaticMethods_loadFromStorage$$ = function $$JSCompiler_StaticMethods_loadFromStorage$$$($JSCompiler_StaticMethods_loadFromStorage$self$$) {
  $JSCompiler_StaticMethods_loadFromStorage$self$$.$a$ = new $goog$structs$Map$$;
  for (var $stateRecords$jscomp$1$$ = $castApp$core$storage$readShortTermDeviceState$$($JSCompiler_StaticMethods_loadFromStorage$self$$.$b$), $freshStateRecords$$ = [], $i$jscomp$184$$ = 0, $l$jscomp$26$$ = $stateRecords$jscomp$1$$.length;$i$jscomp$184$$ < $l$jscomp$26$$;++$i$jscomp$184$$) {
    var $record$jscomp$2$$ = $stateRecords$jscomp$1$$[$i$jscomp$184$$];
    if ($castApp$core$ShortTermDeviceState$stateRecordIsFresh_$$($record$jscomp$2$$)) {
      $freshStateRecords$$.push($record$jscomp$2$$);
      $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_loadFromStorage$self$$.$a$, $record$jscomp$2$$.type) || $JSCompiler_StaticMethods_loadFromStorage$self$$.$a$.set($record$jscomp$2$$.type, new $goog$structs$Map$$);
      var $mapToModify$$ = $JSCompiler_StaticMethods_loadFromStorage$self$$.$a$.get($record$jscomp$2$$.type);
      $mapToModify$$ && $mapToModify$$.get($record$jscomp$2$$.deviceId, -Infinity) < $record$jscomp$2$$.time && $mapToModify$$.set($record$jscomp$2$$.deviceId, $record$jscomp$2$$.time);
    }
  }
  $freshStateRecords$$.length !== $stateRecords$jscomp$1$$.length && $castApp$core$storage$writeShortTermDeviceState$$($JSCompiler_StaticMethods_loadFromStorage$self$$.$b$, $freshStateRecords$$);
}, $JSCompiler_StaticMethods_checkDeviceState_$$ = function $$JSCompiler_StaticMethods_checkDeviceState_$$$($JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$, $deviceId$jscomp$5_endTime$jscomp$4$$, $stateType$$) {
  $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$.$a$ || $JSCompiler_StaticMethods_loadFromStorage$$($JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$);
  $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$ = $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$.$a$.get($stateType$$, null);
  if (null === $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$ || !$JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$, $deviceId$jscomp$5_endTime$jscomp$4$$)) {
    return !1;
  }
  $deviceId$jscomp$5_endTime$jscomp$4$$ = $JSCompiler_StaticMethods_checkDeviceState_$self_stateSpecificMap$$.get($deviceId$jscomp$5_endTime$jscomp$4$$) + $castApp$core$ShortTermDeviceState$TIMEOUTS$$.get($stateType$$, 0);
  return $goog$now$$() < $deviceId$jscomp$5_endTime$jscomp$4$$;
}, $JSCompiler_StaticMethods_deviceIsRestarting$$ = function $$JSCompiler_StaticMethods_deviceIsRestarting$$$($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$, $ipAddress$jscomp$6$$) {
  ($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$ = $JSCompiler_StaticMethods_checkDeviceState_$$($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$, $ipAddress$jscomp$6$$, 1) || $JSCompiler_StaticMethods_checkDeviceState_$$($JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$, $ipAddress$jscomp$6$$, 3)) && $castApp$log$info$$($castApp$core$ShortTermDeviceState$logger_$$, "Device with IP=", $castApp$log$anonymizeString$$($ipAddress$jscomp$6$$), " is assumed to be restarting.");
  return $JSCompiler_StaticMethods_deviceIsRestarting$self_ret$jscomp$7$$;
};
var $castApp$core$DeviceMonitor$$ = function $$castApp$core$DeviceMonitor$$$($networkingApi$jscomp$6$$, $eventPageClient$$, $http$jscomp$4$$, $win$jscomp$10$$) {
  $goog$events$EventTarget$$.call(this);
  this.$m$ = new $castApp$core$ShortTermDeviceState$$($win$jscomp$10$$.localStorage);
  this.$f$ = new $castApp$core$WiFiMonitor$$($networkingApi$jscomp$6$$, new $castApp$core$WiFiMonitor$CastHotSpotsFilter$$, new $castApp$core$ShortTermDeviceState$WiFiMonitorFilter_$$(this.$m$));
  this.$g$ = $eventPageClient$$;
  this.$A$ = $networkingApi$jscomp$6$$;
  this.$w$ = $http$jscomp$4$$;
  this.$l$ = $win$jscomp$10$$;
};
$goog$inherits$$($castApp$core$DeviceMonitor$$, $goog$events$EventTarget$$);
var $castApp$core$DeviceMonitor$logger_$$ = $castApp$log$getLogger$$("core.DeviceMonitor"), $castApp$core$DeviceMonitor$Event$$ = function $$castApp$core$DeviceMonitor$Event$$$($devices$jscomp$4$$) {
  $goog$events$Event$$.call(this, "devices");
  this.devices = $devices$jscomp$4$$;
};
$goog$inherits$$($castApp$core$DeviceMonitor$Event$$, $goog$events$Event$$);
var $castApp$core$NewDeviceMonitorImpl$$ = function $$castApp$core$NewDeviceMonitorImpl$$$($networkingApi$jscomp$7$$, $eventPageClient$jscomp$1$$, $http$jscomp$5$$, $win$jscomp$11$$) {
  $castApp$core$DeviceMonitor$$.call(this, $networkingApi$jscomp$7$$, $eventPageClient$jscomp$1$$, $http$jscomp$5$$, $win$jscomp$11$$);
  this.$a$ = null;
  this.$j$ = 0;
  this.$b$ = new $goog$structs$Map$$;
  this.$i$ = new $goog$math$ExponentialBackoff$$(5E3, 6E4);
  this.$s$ = this.$B$.bind(this);
  this.$u$ = this.$handleVisibilityChange_$.bind(this);
  this.$o$ = new $castApp$StartStoppable$$(this.$castApp_core_NewDeviceMonitorImpl_prototype$start_$.bind(this), this.$castApp_core_NewDeviceMonitorImpl_prototype$reset_$.bind(this));
};
$goog$inherits$$($castApp$core$NewDeviceMonitorImpl$$, $castApp$core$DeviceMonitor$$);
var $JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$$ = function $$JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$$$($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$, $ipAddress$jscomp$7$$) {
  return $JSCompiler_StaticMethods_thenCatch$$($castApp$core$SetupApiClient$create$$($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$.$w$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$($ipAddress$jscomp$7$$)).then(function($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$) {
    var $setupApiClient$$ = $JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$.getState(), $eurekaInfo$jscomp$12$$ = $setupApiClient$$.eurekaInfoState;
    if ($setupApiClient$$.deviceIpAddress && $eurekaInfo$jscomp$12$$ && $eurekaInfo$jscomp$12$$.name && $eurekaInfo$jscomp$12$$.ssdpUdn && void 0 !== $eurekaInfo$jscomp$12$$.ethernetConnected && void 0 !== $eurekaInfo$jscomp$12$$.tosAccepted && $eurekaInfo$jscomp$12$$.deviceType && void 0 !== $eurekaInfo$jscomp$12$$.features) {
      return $JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$;
    }
    $castApp$log$info$$($castApp$core$DeviceMonitor$logger_$$, "eureka_info is missing required data. IP: ", $castApp$log$anonymizeString$$($ipAddress$jscomp$7$$));
    return $goog$Promise$reject$$();
  }.bind($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$)), function($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$) {
    $castApp$log$errorWithCause$$($castApp$core$DeviceMonitor$logger_$$, $JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$, "eureka_info failed! IP: ", $castApp$log$anonymizeString$$($ipAddress$jscomp$7$$));
  }.bind($JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$self$$));
};
$JSCompiler_prototypeAlias$$ = $castApp$core$NewDeviceMonitorImpl$$.prototype;
$JSCompiler_prototypeAlias$$.$castApp_core_NewDeviceMonitorImpl_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_NewDeviceMonitorImpl_prototype$start_$$() {
  this.$l$.document.addEventListener("visibilitychange", this.$u$);
  this.$g$.listen("devices", this.$s$);
  $JSCompiler_StaticMethods_startDeviceMonitor$$(this.$g$);
  this.$j$ = 0;
  return this.$f$.start().then(this.$rescan_$.bind(this));
};
$JSCompiler_prototypeAlias$$.$castApp_core_NewDeviceMonitorImpl_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_NewDeviceMonitorImpl_prototype$reset_$$() {
  this.$l$.document.removeEventListener("visibilitychange", this.$u$);
  this.$g$.$unlisten$("devices", this.$s$);
  this.$j$ = 0;
  this.$i$ = new $goog$math$ExponentialBackoff$$(5E3, 6E4);
  this.$a$ && (this.$a$.cancel(), this.$a$ = null);
  this.$b$.clear();
  return this.$f$.stop();
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$o$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$o$.stop();
};
$JSCompiler_prototypeAlias$$.$handleVisibilityChange_$ = function $$JSCompiler_prototypeAlias$$$$handleVisibilityChange_$$() {
  this.$l$.document.hidden ? this.$a$ && (this.$a$.cancel(), this.$a$ = null) : (this.$i$ = new $goog$math$ExponentialBackoff$$(5E3, 6E4), this.$rescan_$());
};
$JSCompiler_prototypeAlias$$.$rescan_$ = function $$JSCompiler_prototypeAlias$$$$rescan_$$() {
  $castApp$log$info$$($castApp$core$DeviceMonitor$logger_$$, "Starting rescan.");
  this.$a$ && this.$a$.cancel();
  $JSCompiler_StaticMethods_loadFromStorage$$(this.$m$);
  this.$A$.requestNetworkScan();
  this.$j$++;
  1 <= this.$j$ && this.$l$.document.hidden ? this.$a$ = null : (this.$a$ = $goog$Timer$promise$$(this.$i$.$b$), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$o$, this.$a$).then(this.$rescan_$.bind(this)), $JSCompiler_StaticMethods_backoff$$(this.$i$));
};
var $JSCompiler_StaticMethods_dispatchDevices_$$ = function $$JSCompiler_StaticMethods_dispatchDevices_$$$($JSCompiler_StaticMethods_dispatchDevices_$self$$) {
  var $loadedDevices$$ = [];
  $JSCompiler_StaticMethods_dispatchDevices_$self$$.$b$.$getValues$().forEach(function($JSCompiler_StaticMethods_dispatchDevices_$self$$) {
    $JSCompiler_StaticMethods_dispatchDevices_$self$$.$setupApiClient$ && !$JSCompiler_StaticMethods_deviceIsRestarting$$(this.$m$, $JSCompiler_StaticMethods_dispatchDevices_$self$$.ipAddress) && $loadedDevices$$.push($JSCompiler_StaticMethods_dispatchDevices_$self$$);
  }.bind($JSCompiler_StaticMethods_dispatchDevices_$self$$));
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_dispatchDevices_$self$$, new $castApp$core$DeviceMonitor$Event$$($loadedDevices$$));
};
$castApp$core$NewDeviceMonitorImpl$$.prototype.$B$ = function $$castApp$core$NewDeviceMonitorImpl$$$$$B$$($event$jscomp$12$$) {
  var $latestIpAddresses$$ = new $goog$structs$Set$$;
  $event$jscomp$12$$.msg.devices.forEach(function($event$jscomp$12$$) {
    $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$($latestIpAddresses$$, $event$jscomp$12$$.ipAddress);
    var $device$jscomp$5$$ = this.$b$.get($event$jscomp$12$$.ipAddress);
    $device$jscomp$5$$ || ($device$jscomp$5$$ = {ipAddress:$event$jscomp$12$$.ipAddress}, $JSCompiler_StaticMethods_castApp_core_DeviceMonitor_prototype$createSetupApiClient$$(this, $event$jscomp$12$$.ipAddress).then(function($latestIpAddresses$$) {
      var $device$jscomp$5$$ = this.$b$.get($event$jscomp$12$$.ipAddress);
      $device$jscomp$5$$ ? ($device$jscomp$5$$.$setupApiClient$ = $latestIpAddresses$$, this.$b$.set($event$jscomp$12$$.ipAddress, $device$jscomp$5$$), $JSCompiler_StaticMethods_dispatchDevices_$$(this)) : $castApp$log$error$$($castApp$core$DeviceMonitor$logger_$$, "Device with IP", $castApp$log$anonymizeString$$($event$jscomp$12$$.ipAddress), " disappeared between when createSetupApiClient was", " called and when it returned.");
    }.bind(this)));
    $event$jscomp$12$$.sessionId && $event$jscomp$12$$.appId && ($device$jscomp$5$$.sessionId = $event$jscomp$12$$.sessionId, $device$jscomp$5$$.appId = $event$jscomp$12$$.appId);
    this.$b$.set($event$jscomp$12$$.ipAddress, $device$jscomp$5$$);
  }.bind(this));
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$(this.$b$.$getKeys$()), $latestIpAddresses$$), this.$b$.remove.bind(this.$b$));
  $JSCompiler_StaticMethods_dispatchDevices_$$(this);
};
var $jspb$Message$$ = function $$jspb$Message$$$() {
}, $jspb$Message$SUPPORTS_UINT8ARRAY_$$ = "function" == typeof Uint8Array, $jspb$Message$initialize$$ = function $$jspb$Message$initialize$$$($msg$jscomp$47$$, $data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$, $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$, $repeatedFields$$) {
  $msg$jscomp$47$$.$b$ = null;
  $data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$ || ($data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$ = $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ ? [$fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$] : []);
  $msg$jscomp$47$$.$j$ = $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ ? String($fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$) : void 0;
  $msg$jscomp$47$$.$f$ = 0 === $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ ? -1 : 0;
  $msg$jscomp$47$$.$a$ = $data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$;
  a: {
    if ($msg$jscomp$47$$.$a$.length && ($data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$ = $msg$jscomp$47$$.$a$.length - 1, ($fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ = $msg$jscomp$47$$.$a$[$data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$]) && "object" == typeof $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ && !$goog$isArray$$($fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$) && !($jspb$Message$SUPPORTS_UINT8ARRAY_$$ && 
    $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ instanceof Uint8Array))) {
      $msg$jscomp$47$$.$g$ = $data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$ - $msg$jscomp$47$$.$f$;
      $msg$jscomp$47$$.$c$ = $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$;
      break a;
    }
    $msg$jscomp$47$$.$g$ = Number.MAX_VALUE;
  }
  $msg$jscomp$47$$.$i$ = {};
  if ($repeatedFields$$) {
    for ($data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$ = 0;$data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$ < $repeatedFields$$.length;$data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$++) {
      $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ = $repeatedFields$$[$data$jscomp$47_foundIndex$jscomp$inline_814_i$jscomp$206$$], $fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ < $msg$jscomp$47$$.$g$ ? ($fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$ += $msg$jscomp$47$$.$f$, $msg$jscomp$47$$.$a$[$fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$] = $msg$jscomp$47$$.$a$[$fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$] || 
      $jspb$Message$EMPTY_LIST_SENTINEL_$$) : $msg$jscomp$47$$.$c$[$fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$] = $msg$jscomp$47$$.$c$[$fieldNumber$jscomp$3_index$jscomp$76_messageId_obj$jscomp$inline_815$$] || $jspb$Message$EMPTY_LIST_SENTINEL_$$;
    }
  }
}, $jspb$Message$EMPTY_LIST_SENTINEL_$$ = Object.freeze ? Object.freeze([]) : [], $jspb$Message$getField$$ = function $$jspb$Message$getField$$$($msg$jscomp$51$$, $fieldNumber$jscomp$6_index$jscomp$77$$) {
  if ($fieldNumber$jscomp$6_index$jscomp$77$$ < $msg$jscomp$51$$.$g$) {
    $fieldNumber$jscomp$6_index$jscomp$77$$ += $msg$jscomp$51$$.$f$;
    var $val$jscomp$46$$ = $msg$jscomp$51$$.$a$[$fieldNumber$jscomp$6_index$jscomp$77$$];
    return $val$jscomp$46$$ === $jspb$Message$EMPTY_LIST_SENTINEL_$$ ? $msg$jscomp$51$$.$a$[$fieldNumber$jscomp$6_index$jscomp$77$$] = [] : $val$jscomp$46$$;
  }
  $val$jscomp$46$$ = $msg$jscomp$51$$.$c$[$fieldNumber$jscomp$6_index$jscomp$77$$];
  return $val$jscomp$46$$ === $jspb$Message$EMPTY_LIST_SENTINEL_$$ ? $msg$jscomp$51$$.$c$[$fieldNumber$jscomp$6_index$jscomp$77$$] = [] : $val$jscomp$46$$;
}, $jspb$Message$setField$$ = function $$jspb$Message$setField$$$($msg$jscomp$56$$, $fieldNumber$jscomp$11$$, $value$jscomp$170$$) {
  $fieldNumber$jscomp$11$$ < $msg$jscomp$56$$.$g$ ? $msg$jscomp$56$$.$a$[$fieldNumber$jscomp$11$$ + $msg$jscomp$56$$.$f$] = $value$jscomp$170$$ : $msg$jscomp$56$$.$c$[$fieldNumber$jscomp$11$$] = $value$jscomp$170$$;
}, $jspb$Message$getRepeatedWrapperField$$ = function $$jspb$Message$getRepeatedWrapperField$$$($msg$jscomp$61$$, $ctor$jscomp$5_val$jscomp$47$$, $fieldNumber$jscomp$16$$) {
  $msg$jscomp$61$$.$b$ || ($msg$jscomp$61$$.$b$ = {});
  if (!$msg$jscomp$61$$.$b$[$fieldNumber$jscomp$16$$]) {
    for (var $data$jscomp$inline_820$$ = $jspb$Message$getField$$($msg$jscomp$61$$, $fieldNumber$jscomp$16$$), $wrappers$jscomp$inline_821$$ = [], $i$jscomp$inline_822$$ = 0;$i$jscomp$inline_822$$ < $data$jscomp$inline_820$$.length;$i$jscomp$inline_822$$++) {
      $wrappers$jscomp$inline_821$$[$i$jscomp$inline_822$$] = new $ctor$jscomp$5_val$jscomp$47$$($data$jscomp$inline_820$$[$i$jscomp$inline_822$$]);
    }
    $msg$jscomp$61$$.$b$[$fieldNumber$jscomp$16$$] = $wrappers$jscomp$inline_821$$;
  }
  $ctor$jscomp$5_val$jscomp$47$$ = $msg$jscomp$61$$.$b$[$fieldNumber$jscomp$16$$];
  $ctor$jscomp$5_val$jscomp$47$$ == $jspb$Message$EMPTY_LIST_SENTINEL_$$ && ($ctor$jscomp$5_val$jscomp$47$$ = $msg$jscomp$61$$.$b$[$fieldNumber$jscomp$16$$] = []);
  return $ctor$jscomp$5_val$jscomp$47$$;
}, $JSCompiler_StaticMethods_syncMapFields_$$ = function $$JSCompiler_StaticMethods_syncMapFields_$$$($JSCompiler_StaticMethods_syncMapFields_$self$$) {
  if ($JSCompiler_StaticMethods_syncMapFields_$self$$.$b$) {
    for (var $fieldNumber$jscomp$22$$ in $JSCompiler_StaticMethods_syncMapFields_$self$$.$b$) {
      var $val$jscomp$48$$ = $JSCompiler_StaticMethods_syncMapFields_$self$$.$b$[$fieldNumber$jscomp$22$$];
      if ($goog$isArray$$($val$jscomp$48$$)) {
        for (var $i$jscomp$212$$ = 0;$i$jscomp$212$$ < $val$jscomp$48$$.length;$i$jscomp$212$$++) {
          $val$jscomp$48$$[$i$jscomp$212$$] && $JSCompiler_StaticMethods_toArray$$($val$jscomp$48$$[$i$jscomp$212$$]);
        }
      } else {
        $val$jscomp$48$$ && $JSCompiler_StaticMethods_toArray$$($val$jscomp$48$$);
      }
    }
  }
}, $JSCompiler_StaticMethods_toArray$$ = function $$JSCompiler_StaticMethods_toArray$$$($JSCompiler_StaticMethods_toArray$self$$) {
  $JSCompiler_StaticMethods_syncMapFields_$$($JSCompiler_StaticMethods_toArray$self$$);
  return $JSCompiler_StaticMethods_toArray$self$$.$a$;
}, $jspb$Message$NATIVE_STRINGIFY_$$ = $goog$global$$.JSON && $goog$global$$.JSON.stringify || "object" === typeof JSON && JSON.stringify;
$jspb$Message$$.prototype.$h$ = $jspb$Message$SUPPORTS_UINT8ARRAY_$$ ? function() {
  var $old_toJSON$$ = Uint8Array.prototype.toJSON;
  Uint8Array.prototype.toJSON = function $Uint8Array$$toJSON$() {
    $goog$crypt$base64$init_$$();
    for (var $old_toJSON$$ = $goog$crypt$base64$byteToCharMap_$$, $result$jscomp$60$$ = [], $i$jscomp$inline_828$$ = 0;$i$jscomp$inline_828$$ < this.length;$i$jscomp$inline_828$$ += 3) {
      var $byte1$jscomp$inline_829_outByte2$jscomp$inline_835$$ = this[$i$jscomp$inline_828$$], $haveByte2$jscomp$inline_830$$ = $i$jscomp$inline_828$$ + 1 < this.length, $byte2$jscomp$inline_831_outByte3$jscomp$inline_836$$ = $haveByte2$jscomp$inline_830$$ ? this[$i$jscomp$inline_828$$ + 1] : 0, $haveByte3$jscomp$inline_832$$ = $i$jscomp$inline_828$$ + 2 < this.length, $byte3$jscomp$inline_833_outByte4$jscomp$inline_837$$ = $haveByte3$jscomp$inline_832$$ ? this[$i$jscomp$inline_828$$ + 2] : 0, $outByte1$jscomp$inline_834$$ = 
      $byte1$jscomp$inline_829_outByte2$jscomp$inline_835$$ >> 2, $byte1$jscomp$inline_829_outByte2$jscomp$inline_835$$ = ($byte1$jscomp$inline_829_outByte2$jscomp$inline_835$$ & 3) << 4 | $byte2$jscomp$inline_831_outByte3$jscomp$inline_836$$ >> 4, $byte2$jscomp$inline_831_outByte3$jscomp$inline_836$$ = ($byte2$jscomp$inline_831_outByte3$jscomp$inline_836$$ & 15) << 2 | $byte3$jscomp$inline_833_outByte4$jscomp$inline_837$$ >> 6, $byte3$jscomp$inline_833_outByte4$jscomp$inline_837$$ = $byte3$jscomp$inline_833_outByte4$jscomp$inline_837$$ & 
      63;
      $haveByte3$jscomp$inline_832$$ || ($byte3$jscomp$inline_833_outByte4$jscomp$inline_837$$ = 64, $haveByte2$jscomp$inline_830$$ || ($byte2$jscomp$inline_831_outByte3$jscomp$inline_836$$ = 64));
      $result$jscomp$60$$.push($old_toJSON$$[$outByte1$jscomp$inline_834$$], $old_toJSON$$[$byte1$jscomp$inline_829_outByte2$jscomp$inline_835$$], $old_toJSON$$[$byte2$jscomp$inline_831_outByte3$jscomp$inline_836$$], $old_toJSON$$[$byte3$jscomp$inline_833_outByte4$jscomp$inline_837$$]);
    }
    return $result$jscomp$60$$.join("");
  };
  try {
    var $result$jscomp$60$$ = $jspb$Message$NATIVE_STRINGIFY_$$.call(null, $JSCompiler_StaticMethods_toArray$$(this), $jspb$Message$serializeSpecialNumbers_$$);
  } finally {
    Uint8Array.prototype.toJSON = $old_toJSON$$;
  }
  return $result$jscomp$60$$;
} : $jspb$Message$NATIVE_STRINGIFY_$$ ? function() {
  return $jspb$Message$NATIVE_STRINGIFY_$$.call(null, $JSCompiler_StaticMethods_toArray$$(this), $jspb$Message$serializeSpecialNumbers_$$);
} : function() {
  var $object$jscomp$inline_839$$ = $JSCompiler_StaticMethods_toArray$$(this), $sb$jscomp$inline_1072$$ = [];
  $JSCompiler_StaticMethods_serializeInternal$$(new $goog$json$Serializer$$, $object$jscomp$inline_839$$, $sb$jscomp$inline_1072$$);
  return $sb$jscomp$inline_1072$$.join("");
};
var $jspb$Message$serializeSpecialNumbers_$$ = function $$jspb$Message$serializeSpecialNumbers_$$$($key$jscomp$122$$, $value$jscomp$178$$) {
  if ($goog$isNumber$$($value$jscomp$178$$)) {
    if (isNaN($value$jscomp$178$$)) {
      return "NaN";
    }
    if (Infinity === $value$jscomp$178$$) {
      return "Infinity";
    }
    if (-Infinity === $value$jscomp$178$$) {
      return "-Infinity";
    }
  }
  return $value$jscomp$178$$;
};
$jspb$Message$$.prototype.toString = function $$jspb$Message$$$$toString$() {
  $JSCompiler_StaticMethods_syncMapFields_$$(this);
  return this.$a$.toString();
};
var $imax$GetSecondScreenExperienceRequest$$ = function $$imax$GetSecondScreenExperienceRequest$$$($opt_data$jscomp$4$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$4$$, 0, null);
};
$goog$inherits$$($imax$GetSecondScreenExperienceRequest$$, $jspb$Message$$);
var $imax$GetSecondScreenExperienceResponse$$ = function $$imax$GetSecondScreenExperienceResponse$$$($opt_data$jscomp$5$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$5$$, "is.gsser", $imax$GetSecondScreenExperienceResponse$repeatedFields_$$);
};
$goog$inherits$$($imax$GetSecondScreenExperienceResponse$$, $jspb$Message$$);
var $imax$GetSecondScreenExperienceResponse$repeatedFields_$$ = [3, 5, 13];
$imax$GetSecondScreenExperienceResponse$$.messageId = "is.gsser";
$imax$GetSecondScreenExperienceResponse$$.prototype.getTitle = function $$imax$GetSecondScreenExperienceResponse$$$$getTitle$() {
  return $jspb$Message$getField$$(this, 1);
};
$imax$GetSecondScreenExperienceResponse$$.prototype.setTitle = function $$imax$GetSecondScreenExperienceResponse$$$$setTitle$($value$jscomp$298$$) {
  $jspb$Message$setField$$(this, 1, $value$jscomp$298$$);
};
var $imax$Attribution$$ = function $$imax$Attribution$$$($opt_data$jscomp$6$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$6$$, 0, null);
};
$goog$inherits$$($imax$Attribution$$, $jspb$Message$$);
var $imax$SecondaryAction$$ = function $$imax$SecondaryAction$$$($opt_data$jscomp$7$$) {
  $jspb$Message$initialize$$(this, $opt_data$jscomp$7$$, 0, null);
};
$goog$inherits$$($imax$SecondaryAction$$, $jspb$Message$$);
var $castApp$core$ImaxSseEndpoint$$ = function $$castApp$core$ImaxSseEndpoint$$$($http$jscomp$6$$, $lang$jscomp$2$$, $webview$jscomp$3$$) {
  this.$b$ = $http$jscomp$6$$;
  this.$a$ = $webview$jscomp$3$$;
  this.$c$ = "https://chromecast-staging.sandbox.google.com/cast/chromecast/home/gsse?rt=j&hl=" + $lang$jscomp$2$$;
};
$castApp$log$getLogger$$("core.ImaxSseEndpoint");
$castApp$core$ImaxSseEndpoint$$.prototype.request = function $$castApp$core$ImaxSseEndpoint$$$$request$($backendData$$) {
  var $request$jscomp$23$$ = new $imax$GetSecondScreenExperienceRequest$$;
  $jspb$Message$setField$$($request$jscomp$23$$, 3, $backendData$$);
  $jspb$Message$setField$$($request$jscomp$23$$, 1, "E8C28D3C");
  return this.$b$.request({url:this.$c$, method:"POST", content:$request$jscomp$23$$.$h$(), headers:{"Content-Type":"application/json"}}).then(function($backendData$$) {
    $backendData$$ = $backendData$$.$getResponseText$();
    $backendData$$.startsWith(")]}'\n") && ($backendData$$ = $backendData$$.slice(5));
    $backendData$$ = JSON.parse($backendData$$);
    $backendData$$ = new $imax$GetSecondScreenExperienceResponse$$($backendData$$[0][0]);
    var $request$jscomp$23$$ = [], $arrays$jscomp$1_imaxResponse_response$jscomp$5_text$jscomp$19$$ = $jspb$Message$getField$$($backendData$$, 4);
    $arrays$jscomp$1_imaxResponse_response$jscomp$5_text$jscomp$19$$ && $request$jscomp$23$$.push($arrays$jscomp$1_imaxResponse_response$jscomp$5_text$jscomp$19$$);
    ($arrays$jscomp$1_imaxResponse_response$jscomp$5_text$jscomp$19$$ = $jspb$Message$getRepeatedWrapperField$$($backendData$$, $imax$SecondaryAction$$, 5)) && $arrays$jscomp$1_imaxResponse_response$jscomp$5_text$jscomp$19$$.forEach(function($backendData$$) {
      $request$jscomp$23$$.push($jspb$Message$getField$$($backendData$$, 2));
    });
    $request$jscomp$23$$.forEach(this.$a$.$j$.bind(this.$a$));
    return $backendData$$;
  }.bind(this));
};
var $castApp$core$DeviceManager$$ = function $$castApp$core$DeviceManager$$$($env$$) {
  this.$b$ = $env$$;
  this.$a$ = new $goog$structs$Map$$;
  this.$f$ = new $castApp$StartStoppable$$(this.$castApp_core_DeviceManager_prototype$start_$.bind(this), this.$castApp_core_DeviceManager_prototype$reset_$.bind(this));
  this.$i$ = this.$handleWiFiAddedEvent_$.bind(this);
  this.$j$ = this.$handleWiFiRemovedEvent_$.bind(this);
  this.$h$ = this.$castApp_core_DeviceManager_prototype$handleUserAction_$.bind(this);
  this.$l$ = this.$handleRescanRequest_$.bind(this);
  this.$g$ = this.$castApp_core_DeviceManager_prototype$handleDeviceData_$.bind(this);
  this.$c$ = null;
}, $castApp$core$DeviceManager$HotSpotDevice_$$ = function $$castApp$core$DeviceManager$HotSpotDevice_$$$($hotSpotProps$jscomp$3$$) {
  this.$a$ = $hotSpotProps$jscomp$3$$;
};
$castApp$log$getLogger$$("core.DeviceManager.HotSpotDevice_");
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.$getUiProps$ = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$$getUiProps$$() {
  var $parsedSsid$jscomp$1$$ = $castApp$core$utils$parseCastDeviceSsid$$(this.$a$.WiFi.SSID), $uiProps$$ = new $castApp$protocol$Devices$DeviceProperties$$("wifi:" + this.$a$.GUID, $castApp$core$utils$getProtocolDeviceType$$($parsedSsid$jscomp$1$$.type), $parsedSsid$jscomp$1$$.name);
  $uiProps$$.needsSetup = !0;
  $uiProps$$.features = $castApp$core$utils$createFeatures$$($parsedSsid$jscomp$1$$.type);
  return $uiProps$$;
};
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.$getDeviceToSetUpProperties$ = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$$getDeviceToSetUpProperties$$() {
  var $props$jscomp$16_uiProps$jscomp$1$$ = this.$getUiProps$(), $props$jscomp$16_uiProps$jscomp$1$$ = {name:$props$jscomp$16_uiProps$jscomp$1$$.displayName, type:$castApp$core$utils$DEVICE_TYPE_MAPPER_$$.$a$.get($props$jscomp$16_uiProps$jscomp$1$$.type) || "c"};
  $props$jscomp$16_uiProps$jscomp$1$$.ssid = this.$a$.WiFi.SSID;
  $props$jscomp$16_uiProps$jscomp$1$$.bssid = this.$a$.WiFi.BSSID;
  return new $castApp$core$storage$DeviceToSetUp$$($props$jscomp$16_uiProps$jscomp$1$$);
};
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.start = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$start$() {
  return $goog$Promise$resolve$$();
};
$castApp$core$DeviceManager$HotSpotDevice_$$.prototype.stop = function $$castApp$core$DeviceManager$HotSpotDevice_$$$$stop$() {
  return $goog$Promise$resolve$$();
};
var $castApp$core$DeviceManager$ConnectedDevice_$$ = function $$castApp$core$DeviceManager$ConnectedDevice_$$$($env$jscomp$1$$, $ipAddress$jscomp$8$$, $setupApiClient$jscomp$2$$, $handleDeviceUpdated$$) {
  this.$j$ = $ipAddress$jscomp$8$$;
  this.$a$ = null;
  this.$c$ = $handleDeviceUpdated$$;
  this.$m$ = $env$jscomp$1$$;
  this.$h$ = new $castApp$StartStoppable$$(this.$castApp_core_DeviceManager_ConnectedDevice__prototype$start_$.bind(this), this.$castApp_core_DeviceManager_ConnectedDevice__prototype$reset_$.bind(this));
  this.$u$ = $setupApiClient$jscomp$2$$;
  this.$g$ = this.$b$ = this.$f$ = null;
  this.$v$ = new $castApp$core$ImaxSseEndpoint$$($env$jscomp$1$$.$g$, $env$jscomp$1$$.$h$(), this.$m$.$m$);
  this.$i$ = this.$l$.bind(this);
  this.$s$ = this.$handleNewMedia_$.bind(this);
  this.$o$ = this.$handleBackdropMessage_$.bind(this);
}, $castApp$core$DeviceManager$ConnectedDevice_$logger_$$ = $castApp$log$getLogger$$("castApp.core.DeviceManager.ConnectedDevice_");
$castApp$core$DeviceManager$ConnectedDevice_$$.prototype.$getDeviceToSetUpProperties$ = function $$castApp$core$DeviceManager$ConnectedDevice_$$$$$getDeviceToSetUpProperties$$() {
  var $uiProps$jscomp$2$$ = this.$getUiProps$();
  return new $castApp$core$storage$DeviceToSetUp$$({name:$uiProps$jscomp$2$$.displayName, type:$castApp$core$utils$DEVICE_TYPE_MAPPER_$$.$a$.get($uiProps$jscomp$2$$.type) || "c", ipAddress:this.$j$});
};
var $JSCompiler_StaticMethods_addBackdropUiProps_$$ = function $$JSCompiler_StaticMethods_addBackdropUiProps_$$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$, $uiProps$jscomp$3$$) {
  if (!$castApp$core$utils$isBackdropAppId$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$a$.appId) || $castApp$core$utils$isBackdropAppId$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$a$.appId) && !$JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$f$) {
    return $uiProps$jscomp$3$$;
  }
  $JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$a$.status && ($uiProps$jscomp$3$$.sessionStatus = $castApp$core$utils$getProtocolSessionStatus$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$a$.status));
  var $imageAttributionList_secondaryActionList_title$jscomp$11$$ = $jspb$Message$getRepeatedWrapperField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$f$, $imax$Attribution$$, 3);
  0 < $imageAttributionList_secondaryActionList_title$jscomp$11$$.length && ($uiProps$jscomp$3$$.backdropImageAttributions = $goog$array$map$$($imageAttributionList_secondaryActionList_title$jscomp$11$$, function($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$) {
    return $jspb$Message$getField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$, 1);
  }.bind($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$)));
  $imageAttributionList_secondaryActionList_title$jscomp$11$$ = $jspb$Message$getRepeatedWrapperField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$f$, $imax$SecondaryAction$$, 5);
  0 < $imageAttributionList_secondaryActionList_title$jscomp$11$$.length && ($uiProps$jscomp$3$$.backdropSecondaryActions = $goog$array$map$$($imageAttributionList_secondaryActionList_title$jscomp$11$$, function($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$) {
    var $uiProps$jscomp$3$$ = {}, $imageAttributionList_secondaryActionList_title$jscomp$11$$ = $jspb$Message$getField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$, 1);
    $imageAttributionList_secondaryActionList_title$jscomp$11$$ && ($uiProps$jscomp$3$$.text = $imageAttributionList_secondaryActionList_title$jscomp$11$$);
    ($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$ = $jspb$Message$getField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$, 2)) && ($uiProps$jscomp$3$$.url = $JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$);
    return $uiProps$jscomp$3$$;
  }.bind($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$)));
  if ($imageAttributionList_secondaryActionList_title$jscomp$11$$ = $JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$f$.getTitle()) {
    $uiProps$jscomp$3$$.mediaTitle = $imageAttributionList_secondaryActionList_title$jscomp$11$$;
  }
  var $imageUrl$$ = $jspb$Message$getField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$f$, 2);
  $imageUrl$$ && ($uiProps$jscomp$3$$.imgUrl = $imageUrl$$);
  if ($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$ = $jspb$Message$getField$$($JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$.$f$, 4)) {
    $uiProps$jscomp$3$$.backdropPrimaryActionUrl = $JSCompiler_StaticMethods_addBackdropUiProps_$self_primaryActionUrl$jscomp$1$$;
  }
  $imageAttributionList_secondaryActionList_title$jscomp$11$$ || 1 !== $uiProps$jscomp$3$$.backdropImageAttributions.length || ($uiProps$jscomp$3$$.mediaTitle = $uiProps$jscomp$3$$.backdropImageAttributions[0], $uiProps$jscomp$3$$.backdropImageAttributions = []);
  return $uiProps$jscomp$3$$;
};
$JSCompiler_prototypeAlias$$ = $castApp$core$DeviceManager$ConnectedDevice_$$.prototype;
$JSCompiler_prototypeAlias$$.$getUiProps$ = function $$JSCompiler_prototypeAlias$$$$getUiProps$$() {
  var $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$ = "ip:" + this.$j$, $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ = this.$u$.getState().eurekaInfoState, $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$ = new $castApp$protocol$Devices$DeviceProperties$$($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$, 
  $castApp$core$utils$getProtocolDeviceType$$($appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.deviceType), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.name);
  $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.features = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.features;
  $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.displayName = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.name;
  $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.needsSetup = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.ethernetConnected && !$appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.tosAccepted;
  if ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.needsSetup && !$JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.features.supportsSetup) {
    $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$ = null;
  } else {
    if (this.$a$ && this.$a$.status !== chrome.cast.SessionStatus.STOPPED) {
      if ($castApp$core$utils$isBackdropAppId$$(this.$a$.appId)) {
        $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$ = $JSCompiler_StaticMethods_addBackdropUiProps_$$(this, $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$);
      } else {
        if ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.isCasting = !0, this.$a$.receiver.volume && ($appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ = this.$a$.receiver.volume.level, null !== $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ && 
        ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.volumeLevel = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ = this.$a$.receiver.volume.muted, null !== $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ && 
        ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.isMuted = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$)), this.$a$.status && ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.sessionStatus = $castApp$core$utils$getProtocolSessionStatus$$(this.$a$.status)), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ = 
        this.$a$.appId, "85CDB22F" === $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ || "0F5096E8" === $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$) {
          this.$a$.displayName && ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.mediaTitle = this.$a$.displayName), this.$a$.statusText && ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.mediaSource = this.$a$.statusText);
        } else {
          if (this.$a$.displayName && ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.mediaSource = this.$a$.displayName), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ = $JSCompiler_StaticMethods_getActiveMedia_$$(this)) {
            if (0 <= $goog$array$indexOf$$($appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.supportedMediaCommands, chrome.cast.media.MediaCommand.PAUSE) && ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.canPause = !0), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.playerState && 
            ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.playerState = $castApp$core$utils$getProtocolPlayerState$$($appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.playerState)), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.media && 
            ($appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.media.duration && ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.mediaDuration = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.media.duration), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$ = 
            $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.media.metadata || $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.media.$a$)) {
              $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.title && ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.mediaTitle = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.title), $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.images && 
              0 < $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.images.length && $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.images[0].url && !$appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.images[0].url.endsWith(".ico") && 
              ($JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$.imgUrl = $appId$jscomp$inline_1076_eurekaInfo$jscomp$13_isMuted$jscomp$inline_851_level$jscomp$inline_850_media$jscomp$inline_852_metadata$jscomp$inline_853$$.images[0].url);
            }
          }
        }
      }
    }
  }
  return $JSCompiler_temp$jscomp$57_JSCompiler_temp$jscomp$58_JSCompiler_temp$jscomp$59_id$jscomp$55_uiProps$jscomp$5$$;
};
$JSCompiler_prototypeAlias$$.$requestSession_$ = function $$JSCompiler_prototypeAlias$$$$requestSession_$$() {
  if (this.$g$) {
    if (!this.$g$.appId || !this.$g$.sessionId) {
      $JSCompiler_StaticMethods_releaseSession_$$(this), this.$c$();
    } else {
      if (!this.$a$ || this.$a$.sessionId != this.$g$.sessionId) {
        var $promise$jscomp$13$$ = $JSCompiler_StaticMethods_requestSessionAndContext$$(this.$m$.$i$, this.$g$.appId, this.$g$.sessionId);
        $promise$jscomp$13$$.then(this.$handleNewSessionAndContext_$.bind(this));
        $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$h$, $promise$jscomp$13$$);
        this.$g$ = null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$handleNewSessionAndContext_$ = function $$JSCompiler_prototypeAlias$$$$handleNewSessionAndContext_$$($result$jscomp$65$$) {
  $result$jscomp$65$$.session.status !== chrome.cast.SessionStatus.STOPPED && (this.$a$ && $JSCompiler_StaticMethods_releaseSession_$$(this), this.$a$ = $result$jscomp$65$$.session, this.$b$ = $result$jscomp$65$$.context, this.$a$.addMediaListenerWithContext(this.$b$, this.$s$), this.$a$.addUpdateListenerWithContext(this.$b$, this.$i$), $castApp$core$utils$isBackdropAppId$$(this.$a$.appId) && (this.$a$.addMessageListenerWithContext(this.$b$, "urn:x-cast:com.google.cast.sse", this.$o$), this.$a$.sendMessageWithContext(this.$b$, 
  "urn:x-cast:com.google.cast.sse", {type:"GET_STATUS", requestId:Math.floor(4294967295 * Math.random())}, $goog$nullFunction$$, function($result$jscomp$65$$) {
    $castApp$log$error$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, "Failed to send message " + String($result$jscomp$65$$.code) + String($result$jscomp$65$$.description) + String($result$jscomp$65$$.details));
  })), this.$a$.media && this.$a$.media.forEach(function($result$jscomp$65$$) {
    $result$jscomp$65$$.addUpdateListenerWithContext(this.$b$, this.$i$);
  }.bind(this)), this.$l$());
};
$JSCompiler_prototypeAlias$$.$handleBackdropMessage_$ = function $$JSCompiler_prototypeAlias$$$$handleBackdropMessage_$$($message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$, $rawMsg$jscomp$17$$) {
  "urn:x-cast:com.google.cast.sse" === $message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$ && ($message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$ = JSON.parse($rawMsg$jscomp$17$$), $message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$ = this.$v$.request($message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$.backendData), $message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$.then(function($message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$) {
    this.$f$ = $message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$;
    this.$c$();
  }.bind(this)), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$h$, $message$jscomp$40_namespace$jscomp$3_promise$jscomp$14$$));
};
$JSCompiler_prototypeAlias$$.$handleNewMedia_$ = function $$JSCompiler_prototypeAlias$$$$handleNewMedia_$$($media$jscomp$3$$) {
  this.$l$();
  $media$jscomp$3$$.addUpdateListenerWithContext(this.$b$, this.$i$);
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$h$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$h$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_ConnectedDevice__prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_ConnectedDevice__prototype$start_$$() {
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_ConnectedDevice__prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_ConnectedDevice__prototype$reset_$$() {
  $JSCompiler_StaticMethods_releaseSession_$$(this);
  return $goog$Promise$resolve$$();
};
var $JSCompiler_StaticMethods_releaseSession_$$ = function $$JSCompiler_StaticMethods_releaseSession_$$$($JSCompiler_StaticMethods_releaseSession_$self$$) {
  $JSCompiler_StaticMethods_releaseSession_$self$$.$f$ = null;
  $JSCompiler_StaticMethods_releaseSession_$self$$.$a$ && ($JSCompiler_StaticMethods_releaseSession_$self$$.$a$.media && $JSCompiler_StaticMethods_releaseSession_$self$$.$a$.media.forEach(function($JSCompiler_StaticMethods_releaseSession_$self$$) {
    $JSCompiler_StaticMethods_releaseSession_$self$$.removeUpdateListenerWithContext(this.$b$, this.$i$);
  }.bind($JSCompiler_StaticMethods_releaseSession_$self$$)), $JSCompiler_StaticMethods_releaseSession_$self$$.$a$.removeUpdateListenerWithContext($JSCompiler_StaticMethods_releaseSession_$self$$.$b$, $JSCompiler_StaticMethods_releaseSession_$self$$.$i$), $JSCompiler_StaticMethods_releaseSession_$self$$.$a$.removeMediaListenerWithContext($JSCompiler_StaticMethods_releaseSession_$self$$.$b$, $JSCompiler_StaticMethods_releaseSession_$self$$.$s$), $castApp$core$utils$isBackdropAppId$$($JSCompiler_StaticMethods_releaseSession_$self$$.$a$.appId) && 
  $JSCompiler_StaticMethods_releaseSession_$self$$.$a$.removeMessageListenerWithContext($JSCompiler_StaticMethods_releaseSession_$self$$.$b$, "urn:x-cast:com.google.cast.sse", $JSCompiler_StaticMethods_releaseSession_$self$$.$o$), $JSCompiler_StaticMethods_releaseSession_$self$$.$a$ = null, $JSCompiler_StaticMethods_releaseSession_$self$$.$b$ = null);
}, $JSCompiler_StaticMethods_getActiveMedia_$$ = function $$JSCompiler_StaticMethods_getActiveMedia_$$$($JSCompiler_StaticMethods_getActiveMedia_$self$$) {
  if (!$JSCompiler_StaticMethods_getActiveMedia_$self$$.$a$ || !$JSCompiler_StaticMethods_getActiveMedia_$self$$.$a$.media) {
    return null;
  }
  var $retVal$jscomp$5$$ = null;
  $JSCompiler_StaticMethods_getActiveMedia_$self$$.$a$.media.forEach(function($JSCompiler_StaticMethods_getActiveMedia_$self$$) {
    $JSCompiler_StaticMethods_getActiveMedia_$self$$ && ($retVal$jscomp$5$$ ? !$retVal$jscomp$5$$.media && $JSCompiler_StaticMethods_getActiveMedia_$self$$.media ? $retVal$jscomp$5$$ = $JSCompiler_StaticMethods_getActiveMedia_$self$$ : $retVal$jscomp$5$$.playerState == chrome.cast.media.PlayerState.IDLE && $JSCompiler_StaticMethods_getActiveMedia_$self$$.playerState != chrome.cast.media.PlayerState.IDLE && ($retVal$jscomp$5$$ = $JSCompiler_StaticMethods_getActiveMedia_$self$$) : $retVal$jscomp$5$$ = 
    $JSCompiler_StaticMethods_getActiveMedia_$self$$);
  }.bind($JSCompiler_StaticMethods_getActiveMedia_$self$$));
  return $retVal$jscomp$5$$;
};
$castApp$core$DeviceManager$ConnectedDevice_$$.prototype.$l$ = function $$castApp$core$DeviceManager$ConnectedDevice_$$$$$l$$() {
  this.$a$.status === chrome.cast.SessionStatus.STOPPED && $JSCompiler_StaticMethods_releaseSession_$$(this);
  this.$c$();
};
var $JSCompiler_StaticMethods_handlePlayOrPause_$$ = function $$JSCompiler_StaticMethods_handlePlayOrPause_$$$($JSCompiler_StaticMethods_handlePlayOrPause_$self$$, $action$jscomp$2$$) {
  if ($JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$a$ && $JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$b$) {
    var $media$jscomp$5$$ = $JSCompiler_StaticMethods_getActiveMedia_$$($JSCompiler_StaticMethods_handlePlayOrPause_$self$$);
    $media$jscomp$5$$ && 0 <= $goog$array$indexOf$$($media$jscomp$5$$.supportedMediaCommands, chrome.cast.media.MediaCommand.PAUSE) && (3 == $action$jscomp$2$$ && $media$jscomp$5$$.playerState == chrome.cast.media.PlayerState.PAUSED ? $media$jscomp$5$$.playWithContext($JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$b$, null, $JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$c$, function($JSCompiler_StaticMethods_handlePlayOrPause_$self$$) {
      $castApp$log$errorWithCause$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, $JSCompiler_StaticMethods_handlePlayOrPause_$self$$, "Error when playing media.");
    }) : 4 == $action$jscomp$2$$ && $media$jscomp$5$$.playerState == chrome.cast.media.PlayerState.PLAYING ? $media$jscomp$5$$.pauseWithContext($JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$b$, null, $JSCompiler_StaticMethods_handlePlayOrPause_$self$$.$c$, function($JSCompiler_StaticMethods_handlePlayOrPause_$self$$) {
      $castApp$log$errorWithCause$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, $JSCompiler_StaticMethods_handlePlayOrPause_$self$$, "Error when pausing media: ");
    }) : $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Unknown action type: " + $action$jscomp$2$$));
  }
}, $JSCompiler_StaticMethods_handleAction$$ = function $$JSCompiler_StaticMethods_handleAction$$$($JSCompiler_StaticMethods_handleAction$self$$, $device$jscomp$6$$, $action$jscomp$3$$) {
  if ($JSCompiler_StaticMethods_handleAction$self$$.$a$ && $JSCompiler_StaticMethods_handleAction$self$$.$b$) {
    switch($action$jscomp$3$$) {
      case 4:
      case 3:
        $JSCompiler_StaticMethods_handlePlayOrPause_$$($JSCompiler_StaticMethods_handleAction$self$$, $action$jscomp$3$$);
        break;
      case 5:
        $JSCompiler_StaticMethods_handleAction$self$$.$a$.stopWithContext($JSCompiler_StaticMethods_handleAction$self$$.$b$, $JSCompiler_StaticMethods_handleAction$self$$.$c$, function($JSCompiler_StaticMethods_handleAction$self$$) {
          $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Error when calling stop session: " + $JSCompiler_StaticMethods_handleAction$self$$);
        });
        break;
      case 6:
        $JSCompiler_StaticMethods_handleAction$self$$.$a$.setReceiverMutedWithContext($JSCompiler_StaticMethods_handleAction$self$$.$b$, !0, $JSCompiler_StaticMethods_handleAction$self$$.$c$, function($JSCompiler_StaticMethods_handleAction$self$$) {
          $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Error when calling mute session: " + $JSCompiler_StaticMethods_handleAction$self$$);
        });
        break;
      case 7:
        $JSCompiler_StaticMethods_handleAction$self$$.$a$.setReceiverMutedWithContext($JSCompiler_StaticMethods_handleAction$self$$.$b$, !1, $JSCompiler_StaticMethods_handleAction$self$$.$c$, function($JSCompiler_StaticMethods_handleAction$self$$) {
          $castApp$log$errorWithCause$$($castApp$core$DeviceManager$logger_$$, $JSCompiler_StaticMethods_handleAction$self$$, "Error when calling unmute session: ");
        });
        break;
      case 8:
        if ($device$jscomp$6$$.volumeLevel === $JSCompiler_StaticMethods_handleAction$self$$.$a$.receiver.volume.level) {
          break;
        }
        $JSCompiler_StaticMethods_handleAction$self$$.$a$.setReceiverVolumeLevelWithContext($JSCompiler_StaticMethods_handleAction$self$$.$b$, $device$jscomp$6$$.volumeLevel, $JSCompiler_StaticMethods_handleAction$self$$.$c$, function($JSCompiler_StaticMethods_handleAction$self$$) {
          $castApp$log$errorWithCause$$($castApp$core$DeviceManager$logger_$$, $JSCompiler_StaticMethods_handleAction$self$$, "Error when calling set volume: ");
        });
        break;
      default:
        $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Unknown action type: " + $action$jscomp$3$$);
    }
  }
}, $castApp$core$DeviceManager$compareDeviceProperties$$ = function $$castApp$core$DeviceManager$compareDeviceProperties$$$($lhs$$, $rhs$$) {
  if ($lhs$$.id === $rhs$$.id) {
    return 0;
  }
  if ($lhs$$.needsSetup !== $rhs$$.needsSetup) {
    return $lhs$$.needsSetup ? -1 : 1;
  }
  var $nameCompareResult$$ = $goog$string$caseInsensitiveCompare$$($lhs$$.displayName, $rhs$$.displayName);
  return 0 !== $nameCompareResult$$ ? $nameCompareResult$$ : $lhs$$.id < $rhs$$.id ? -1 : $lhs$$.id > $rhs$$.id ? 1 : 0;
}, $castApp$core$DeviceManager$logger_$$ = $castApp$log$getLogger$$("core.DeviceManager");
$JSCompiler_prototypeAlias$$ = $castApp$core$DeviceManager$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$f$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$f$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$start_$$() {
  this.$sendUpdatedDeviceListToUi_$();
  var $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$ = this.$b$.$a$.$f$.$a$;
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$.listen("added", this.$i$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$.listen("removed", this.$j$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$ = this.$b$.$b$.$a$.$a$;
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$.addListener("Devices.UserAction", this.$h$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$.addListener("DeviceDiscovery.ScanAgain", this.$l$);
  this.$b$.$a$.listen("devices", this.$g$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$ = this.$b$.$a$;
  $JSCompiler_StaticMethods_startDeviceMonitor$$($JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$.$g$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_855_uiMessenger_wiFiMonitorTarget$$.$rescan_$();
  return this.$b$.$a$.start();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$reset_$$() {
  this.$b$.$b$.$a$.$a$.removeListener("Devices.UserAction", this.$h$);
  var $wiFiMonitorTarget$jscomp$1$$ = this.$b$.$a$.$f$.$a$;
  $wiFiMonitorTarget$jscomp$1$$.$unlisten$("added", this.$i$);
  $wiFiMonitorTarget$jscomp$1$$.$unlisten$("removed", this.$j$);
  this.$b$.$a$.$unlisten$("devices", this.$g$);
  var $promises$jscomp$4$$ = [this.$b$.$a$.stop()];
  this.$a$.forEach(function($wiFiMonitorTarget$jscomp$1$$) {
    $promises$jscomp$4$$.push($wiFiMonitorTarget$jscomp$1$$.stop());
  }.bind(this));
  this.$a$ = new $goog$structs$Map$$;
  return $goog$Promise$all$$($promises$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$handleWiFiAddedEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleWiFiAddedEvent_$$($device$jscomp$8_event$jscomp$13$$) {
  var $deviceId$jscomp$7$$ = "wifi:" + $device$jscomp$8_event$jscomp$13$$.$a$.GUID;
  $device$jscomp$8_event$jscomp$13$$ = this.$a$.get($deviceId$jscomp$7$$) || new $castApp$core$DeviceManager$HotSpotDevice_$$($device$jscomp$8_event$jscomp$13$$.$a$);
  this.$a$.set($deviceId$jscomp$7$$, $device$jscomp$8_event$jscomp$13$$);
  $device$jscomp$8_event$jscomp$13$$.start();
  this.$sendUpdatedDeviceListToUi_$();
};
$JSCompiler_prototypeAlias$$.$handleWiFiRemovedEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleWiFiRemovedEvent_$$($deviceId$jscomp$8_event$jscomp$14$$) {
  $deviceId$jscomp$8_event$jscomp$14$$ = "wifi:" + $deviceId$jscomp$8_event$jscomp$14$$.$a$.GUID;
  var $device$jscomp$9$$ = this.$a$.get($deviceId$jscomp$8_event$jscomp$14$$);
  $device$jscomp$9$$ && ($device$jscomp$9$$.stop(), this.$a$.remove($deviceId$jscomp$8_event$jscomp$14$$), this.$sendUpdatedDeviceListToUi_$());
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$handleDeviceData_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$handleDeviceData_$$($event$jscomp$15$$) {
  var $newDevicesMap$$ = new $goog$structs$Map$$, $shouldSendDeviceListToUI$$ = !1;
  $event$jscomp$15$$.devices.forEach(function($event$jscomp$15$$) {
    if ($event$jscomp$15$$.ipAddress) {
      var $deviceData$jscomp$4$$ = "ip:" + $event$jscomp$15$$.ipAddress, $device$jscomp$10$$ = this.$a$.get($deviceData$jscomp$4$$);
      $device$jscomp$10$$ || ($device$jscomp$10$$ = new $castApp$core$DeviceManager$ConnectedDevice_$$(this.$b$, $event$jscomp$15$$.ipAddress, $event$jscomp$15$$.$setupApiClient$, this.$sendUpdatedDeviceListToUi_$.bind(this)), $device$jscomp$10$$.start(), $shouldSendDeviceListToUI$$ = !0);
      var $JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_857$$ = $device$jscomp$10$$;
      $event$jscomp$15$$.ipAddress != $JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_857$$.$j$ ? $castApp$log$error$$($castApp$core$DeviceManager$ConnectedDevice_$logger_$$, "IPs don't match in handleDeviceData deviceData.ipAddress: ", $castApp$log$anonymizeString$$($event$jscomp$15$$.ipAddress), " this.ipAddress_: ", $castApp$log$anonymizeString$$($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_857$$.$j$)) : ($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_857$$.$g$ = 
      $event$jscomp$15$$, $JSCompiler_StaticMethods_waitUntilStarted$$($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_857$$.$h$).then($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_857$$.$requestSession_$.bind($JSCompiler_StaticMethods_handleDeviceData$self$jscomp$inline_857$$)));
      $newDevicesMap$$.set($deviceData$jscomp$4$$, $device$jscomp$10$$);
      this.$a$.remove($deviceData$jscomp$4$$);
    } else {
      $castApp$log$warning$$($castApp$core$DeviceManager$logger_$$, "Device data did not have an ipAddress.");
    }
  }.bind(this));
  this.$a$.$getKeys$().forEach(function($event$jscomp$15$$) {
    var $shouldSendDeviceListToUI$$ = this.$a$.get($event$jscomp$15$$);
    $shouldSendDeviceListToUI$$ instanceof $castApp$core$DeviceManager$HotSpotDevice_$$ && ($newDevicesMap$$.set($event$jscomp$15$$, $shouldSendDeviceListToUI$$), this.$a$.remove($event$jscomp$15$$));
  }.bind(this));
  0 < this.$a$.$getCount$() && ($shouldSendDeviceListToUI$$ = !0);
  this.$a$.forEach(function($event$jscomp$15$$) {
    $event$jscomp$15$$.stop();
  }.bind(this));
  this.$a$ = $newDevicesMap$$;
  $shouldSendDeviceListToUI$$ && this.$sendUpdatedDeviceListToUi_$();
};
$JSCompiler_prototypeAlias$$.$sendUpdatedDeviceListToUi_$ = function $$JSCompiler_prototypeAlias$$$$sendUpdatedDeviceListToUi_$$($opt_setupBannerDeviceName_tmpTimer$$) {
  var $uiPropsArray$$ = [];
  this.$a$.forEach(function($opt_setupBannerDeviceName_tmpTimer$$) {
    if ($opt_setupBannerDeviceName_tmpTimer$$ = $opt_setupBannerDeviceName_tmpTimer$$.$getUiProps$()) {
      for (var $uiMessenger$jscomp$1$$, $device$jscomp$13_uiProps$jscomp$6$$ = $castApp$core$DeviceManager$compareDeviceProperties$$ || $goog$array$defaultCompare$$, $left$jscomp$inline_1106$$ = 0, $right$jscomp$inline_1107$$ = $uiPropsArray$$.length;$left$jscomp$inline_1106$$ < $right$jscomp$inline_1107$$;) {
        var $middle$jscomp$inline_1109$$ = $left$jscomp$inline_1106$$ + $right$jscomp$inline_1107$$ >> 1, $compareResult$jscomp$inline_1110$$;
        $compareResult$jscomp$inline_1110$$ = $device$jscomp$13_uiProps$jscomp$6$$($opt_setupBannerDeviceName_tmpTimer$$, $uiPropsArray$$[$middle$jscomp$inline_1109$$]);
        0 < $compareResult$jscomp$inline_1110$$ ? $left$jscomp$inline_1106$$ = $middle$jscomp$inline_1109$$ + 1 : ($right$jscomp$inline_1107$$ = $middle$jscomp$inline_1109$$, $uiMessenger$jscomp$1$$ = !$compareResult$jscomp$inline_1110$$);
      }
      $uiMessenger$jscomp$1$$ = $uiMessenger$jscomp$1$$ ? $left$jscomp$inline_1106$$ : ~$left$jscomp$inline_1106$$;
      0 > $uiMessenger$jscomp$1$$ && $goog$array$splice$$($uiPropsArray$$, -($uiMessenger$jscomp$1$$ + 1), 0, $opt_setupBannerDeviceName_tmpTimer$$);
    }
  });
  var $uiMessenger$jscomp$1$$ = this.$b$.$b$.$a$.$a$;
  $uiMessenger$jscomp$1$$.sendMessage(new $castApp$protocol$Devices$Show$$($uiPropsArray$$, $opt_setupBannerDeviceName_tmpTimer$$));
  0 === $uiPropsArray$$.length ? null === this.$c$ && (this.$c$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $goog$Timer$promise$$(3E4)).then(function() {
    this.$c$ = null;
    var $opt_setupBannerDeviceName_tmpTimer$$ = 0;
    this.$a$.forEach(function($uiPropsArray$$) {
      $opt_setupBannerDeviceName_tmpTimer$$ += $uiPropsArray$$.$getUiProps$() ? 1 : 0;
    });
    0 === $opt_setupBannerDeviceName_tmpTimer$$ && $uiMessenger$jscomp$1$$.sendMessage(new $castApp$protocol$Message$$("DeviceDiscovery.NotFound"));
  }.bind(this))) : null !== this.$c$ && ($opt_setupBannerDeviceName_tmpTimer$$ = this.$c$, this.$c$ = null, $opt_setupBannerDeviceName_tmpTimer$$.cancel());
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceManager_prototype$handleUserAction_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceManager_prototype$handleUserAction_$$($rawMessage$jscomp$1_session$jscomp$inline_867$$) {
  var $device$jscomp$15$$ = this.$a$.get($rawMessage$jscomp$1_session$jscomp$inline_867$$.device.id);
  if ($device$jscomp$15$$) {
    switch($rawMessage$jscomp$1_session$jscomp$inline_867$$.action) {
      case 1:
        $rawMessage$jscomp$1_session$jscomp$inline_867$$ = new $castApp$core$storage$SetupSession$$($goog$string$getRandomString$$());
        $rawMessage$jscomp$1_session$jscomp$inline_867$$.states = new $castApp$core$storage$SetupStateCollection$$(0, [new $castApp$core$storage$SetupState$$(1)]);
        $rawMessage$jscomp$1_session$jscomp$inline_867$$.commonState = new $castApp$core$storage$CommonSetupState$$;
        $rawMessage$jscomp$1_session$jscomp$inline_867$$.commonState.device = $device$jscomp$15$$.$getDeviceToSetUpProperties$();
        $rawMessage$jscomp$1_session$jscomp$inline_867$$.commonState.pinned = !0;
        $castApp$core$storage$writeSetupSession$$(this.$b$.$f$, $rawMessage$jscomp$1_session$jscomp$inline_867$$);
        this.$b$.$l$($rawMessage$jscomp$1_session$jscomp$inline_867$$.id);
        break;
      case 2:
        this.$b$.$j$($device$jscomp$15$$.$j$);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        $JSCompiler_StaticMethods_handleAction$$($device$jscomp$15$$, $rawMessage$jscomp$1_session$jscomp$inline_867$$.device, $rawMessage$jscomp$1_session$jscomp$inline_867$$.action);
        break;
      default:
        $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "DeviceManager unknown action " + $rawMessage$jscomp$1_session$jscomp$inline_867$$.action);
    }
  } else {
    $castApp$log$error$$($castApp$core$DeviceManager$logger_$$, "Error: user action received unknown device ", $castApp$log$anonymizeString$$($rawMessage$jscomp$1_session$jscomp$inline_867$$.device.id));
  }
};
$JSCompiler_prototypeAlias$$.$handleRescanRequest_$ = function $$JSCompiler_prototypeAlias$$$$handleRescanRequest_$$() {
  this.$sendUpdatedDeviceListToUi_$();
  var $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_869$$ = this.$b$.$a$;
  $JSCompiler_StaticMethods_startDeviceMonitor$$($JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_869$$.$g$);
  $JSCompiler_StaticMethods_requestRescan$self$jscomp$inline_869$$.$rescan_$();
};
var $castApp$core$DeviceSettings$$ = function $$castApp$core$DeviceSettings$$$($env$jscomp$2$$, $deviceIpAddress$jscomp$2$$) {
  this.$c$ = $env$jscomp$2$$;
  this.$i$ = $deviceIpAddress$jscomp$2$$;
  this.$b$ = null;
  this.$j$ = $castApp$core$SetupApiClient$createInMemoryStateStorage$$($deviceIpAddress$jscomp$2$$);
  this.$g$ = this.$a$ = null;
  this.$f$ = new $castApp$StartStoppable$$(this.$castApp_core_DeviceSettings_prototype$start_$.bind(this), this.$castApp_core_DeviceSettings_prototype$reset_$.bind(this));
  this.$h$ = new $goog$structs$Map$$("DeviceSettings.Apply", this.$apply_$.bind(this), "DeviceSettings.Reboot", this.$s$.bind(this), "DeviceSettings.FactoryReset", this.$m$.bind(this), "DeviceSettings.ForgetWiFi", this.$o$.bind(this), "DeviceSettings.Exit", this.$l$.bind(this));
}, $castApp$core$DeviceSettings$logger_$$ = $castApp$log$getLogger$$("core.DeviceSettings");
$JSCompiler_prototypeAlias$$ = $castApp$core$DeviceSettings$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$f$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$f$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceSettings_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceSettings_prototype$start_$$() {
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $castApp$core$SetupApiClient$create$$(this.$c$.$g$, this.$j$)).then(function($setupApiClient$jscomp$3$$) {
    this.$b$ = $setupApiClient$jscomp$3$$;
    return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $JSCompiler_StaticMethods_getEurekaInfo$$($setupApiClient$jscomp$3$$, {options:"build_info.cast_build_revision device_info.mac_address detail net.ip_address settings.country_code settings.locale settings.timezone settings.time_format opt_in.stats wifi.ssid wifi.wpa_id".split(" ")})), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $JSCompiler_StaticMethods_getSupportedLocales$$($setupApiClient$jscomp$3$$)), 
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $JSCompiler_StaticMethods_getSupportedTimeZones$$($setupApiClient$jscomp$3$$))]);
  }.bind(this)).then(function($results$jscomp$2$$) {
    this.$initSettings_$.apply(this, $results$jscomp$2$$);
    var $uiMessenger$jscomp$2$$ = this.$c$.$b$.$a$.$a$;
    this.$h$.forEach(function($results$jscomp$2$$, $msgType$jscomp$1$$) {
      $uiMessenger$jscomp$2$$.addListener($msgType$jscomp$1$$, $results$jscomp$2$$);
    });
    $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$(this, 1);
  }.bind(this));
};
$JSCompiler_prototypeAlias$$.$castApp_core_DeviceSettings_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_DeviceSettings_prototype$reset_$$() {
  var $uiMessenger$jscomp$3$$ = this.$c$.$b$.$a$.$a$;
  this.$h$.forEach(function($listener$jscomp$109$$, $msgType$jscomp$2$$) {
    $uiMessenger$jscomp$3$$.removeListener($msgType$jscomp$2$$, $listener$jscomp$109$$);
  });
  this.$b$ = null;
  this.$j$ = $castApp$core$SetupApiClient$createInMemoryStateStorage$$(this.$i$);
  this.$a$ = null;
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$initSettings_$ = function $$JSCompiler_prototypeAlias$$$$initSettings_$$($eurekaInfo$jscomp$14_v7Net$$, $locales$jscomp$4_supportedLocales$$, $supportedTimeZones_timeZones$$) {
  var $eurekaInfoState$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$(this.$b$), $v7WiFi_version$jscomp$20$$ = $eurekaInfoState$$.setupApiVersion, $deviceType$jscomp$8$$ = $castApp$core$utils$getProtocolDeviceType$$($eurekaInfoState$$.deviceType);
  $supportedTimeZones_timeZones$$ = $supportedTimeZones_timeZones$$.map(function($eurekaInfo$jscomp$14_v7Net$$) {
    return new $castApp$protocol$DeviceSettings$TimeZone$$($eurekaInfo$jscomp$14_v7Net$$.timezone, $eurekaInfo$jscomp$14_v7Net$$.display_string, $eurekaInfo$jscomp$14_v7Net$$.offset);
  });
  $locales$jscomp$4_supportedLocales$$ = $locales$jscomp$4_supportedLocales$$.map(function($eurekaInfo$jscomp$14_v7Net$$) {
    return new $castApp$protocol$DeviceSettings$Locale$$($eurekaInfo$jscomp$14_v7Net$$.locale, $eurekaInfo$jscomp$14_v7Net$$.display_string);
  });
  var $settings$jscomp$3$$ = this.$a$ = {};
  if (7 <= $v7WiFi_version$jscomp$20$$) {
    var $v7WiFi_version$jscomp$20$$ = $eurekaInfo$jscomp$14_v7Net$$.wifi, $timeFormat$jscomp$2_v7Settings$$ = $eurekaInfo$jscomp$14_v7Net$$.settings, $v7OptIn$$ = $eurekaInfo$jscomp$14_v7Net$$.opt_in, $v7BuildInfo$$ = $eurekaInfo$jscomp$14_v7Net$$.build_info, $v7DeviceInfo$$ = $eurekaInfo$jscomp$14_v7Net$$.device_info;
    $eurekaInfo$jscomp$14_v7Net$$ = $eurekaInfo$jscomp$14_v7Net$$.net;
    $settings$jscomp$3$$.deviceType = $deviceType$jscomp$8$$;
    $settings$jscomp$3$$.name = $eurekaInfoState$$.name;
    $settings$jscomp$3$$.ssid = !$eurekaInfoState$$.ethernetConnected && $v7WiFi_version$jscomp$20$$.ssid || null;
    $settings$jscomp$3$$.timeZoneId = $timeFormat$jscomp$2_v7Settings$$.timezone || null;
    $settings$jscomp$3$$.supportedTimeZones = $supportedTimeZones_timeZones$$;
    $settings$jscomp$3$$.timeFormat = 1 === $timeFormat$jscomp$2_v7Settings$$.time_format ? 1 : 2;
    $settings$jscomp$3$$.localeId = $timeFormat$jscomp$2_v7Settings$$.locale || "";
    $settings$jscomp$3$$.supportedLocales = $locales$jscomp$4_supportedLocales$$;
    $settings$jscomp$3$$.statsOptIn = !!$v7OptIn$$.stats;
    $settings$jscomp$3$$.firmwareVersion = $v7BuildInfo$$.cast_build_revision || "";
    $settings$jscomp$3$$.countryCode = $timeFormat$jscomp$2_v7Settings$$.country_code || null;
    $settings$jscomp$3$$.macAddress = $v7DeviceInfo$$.mac_address || "";
    $settings$jscomp$3$$.ipAddress = $eurekaInfo$jscomp$14_v7Net$$.ip_address;
    this.$g$ = void 0 !== $v7WiFi_version$jscomp$20$$.wpa_id ? $v7WiFi_version$jscomp$20$$.wpa_id : null;
  } else {
    $timeFormat$jscomp$2_v7Settings$$ = 1 === (3 < $v7WiFi_version$jscomp$20$$ ? $eurekaInfo$jscomp$14_v7Net$$.time_format : 2) ? 1 : 2, $settings$jscomp$3$$.deviceType = $deviceType$jscomp$8$$, $settings$jscomp$3$$.name = $eurekaInfoState$$.name, $settings$jscomp$3$$.ssid = !$eurekaInfoState$$.ethernetConnected && $eurekaInfo$jscomp$14_v7Net$$.ssid || null, $settings$jscomp$3$$.timeZoneId = $eurekaInfo$jscomp$14_v7Net$$.timezone || null, $settings$jscomp$3$$.supportedTimeZones = $supportedTimeZones_timeZones$$, 
    $settings$jscomp$3$$.timeFormat = $timeFormat$jscomp$2_v7Settings$$, $settings$jscomp$3$$.localeId = $eurekaInfo$jscomp$14_v7Net$$.locale, $settings$jscomp$3$$.supportedLocales = $locales$jscomp$4_supportedLocales$$, $settings$jscomp$3$$.statsOptIn = !!(3 < $v7WiFi_version$jscomp$20$$ && $eurekaInfo$jscomp$14_v7Net$$.opt_in && $eurekaInfo$jscomp$14_v7Net$$.opt_in.stats), $settings$jscomp$3$$.firmwareVersion = $eurekaInfo$jscomp$14_v7Net$$.build_version, $settings$jscomp$3$$.countryCode = 3 < 
    $v7WiFi_version$jscomp$20$$ && $eurekaInfo$jscomp$14_v7Net$$.location && $eurekaInfo$jscomp$14_v7Net$$.location.country_code || null, $settings$jscomp$3$$.macAddress = $eurekaInfo$jscomp$14_v7Net$$.mac_address, $settings$jscomp$3$$.ipAddress = $eurekaInfo$jscomp$14_v7Net$$.ip_address, this.$g$ = void 0 !== $eurekaInfo$jscomp$14_v7Net$$.wpa_id ? $eurekaInfo$jscomp$14_v7Net$$.wpa_id : null;
  }
};
$JSCompiler_prototypeAlias$$.$apply_$ = function $$JSCompiler_prototypeAlias$$$$apply_$$($rawMsg$jscomp$18$$) {
  var $self$jscomp$6$$ = this, $features$jscomp$5$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$(this.$b$).features.deviceSettings;
  $rawMsg$jscomp$18$$.timeFormat === $self$jscomp$6$$.$a$.timeFormat || $features$jscomp$5$$.supportsTimeFormatChange || ($rawMsg$jscomp$18$$.timeFormat = $self$jscomp$6$$.$a$.timeFormat);
  $rawMsg$jscomp$18$$.statsOptIn === $self$jscomp$6$$.$a$.statsOptIn || $features$jscomp$5$$.supportsDataCollectionToggle || ($rawMsg$jscomp$18$$.statsOptIn = $self$jscomp$6$$.$a$.statsOptIn);
  if ($rawMsg$jscomp$18$$.name === $self$jscomp$6$$.$a$.name && $rawMsg$jscomp$18$$.timeZoneId === $self$jscomp$6$$.$a$.timeZoneId && $rawMsg$jscomp$18$$.timeFormat === $self$jscomp$6$$.$a$.timeFormat && $rawMsg$jscomp$18$$.localeId === $self$jscomp$6$$.$a$.localeId && $rawMsg$jscomp$18$$.statsOptIn === $self$jscomp$6$$.$a$.statsOptIn) {
    $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$6$$, 1);
  } else {
    var $oldSettings$$ = $goog$object$clone$$($self$jscomp$6$$.$a$);
    $self$jscomp$6$$.$a$.name = $rawMsg$jscomp$18$$.name;
    $self$jscomp$6$$.$a$.timeZoneId = $rawMsg$jscomp$18$$.timeZoneId;
    $self$jscomp$6$$.$a$.timeFormat = $rawMsg$jscomp$18$$.timeFormat;
    $self$jscomp$6$$.$a$.localeId = $rawMsg$jscomp$18$$.localeId;
    $self$jscomp$6$$.$a$.statsOptIn = $rawMsg$jscomp$18$$.statsOptIn;
    $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$6$$, 2);
    $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$6$$.$f$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($self$jscomp$6$$.$b$, $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$$($self$jscomp$6$$, $rawMsg$jscomp$18$$))).then(function() {
      $self$jscomp$6$$.$a$.localeId !== $oldSettings$$.localeId ? $self$jscomp$6$$.$c$.reload() : $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$6$$, 1);
    }), function($rawMsg$jscomp$18$$) {
      $castApp$log$errorWithCause$$($castApp$core$DeviceSettings$logger_$$, $rawMsg$jscomp$18$$, "Applying device settings failed.");
      $self$jscomp$6$$.$a$ = $oldSettings$$;
      $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$($self$jscomp$6$$, 3);
    });
  }
};
var $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$$ = function $$JSCompiler_StaticMethods_createSetEurekaInfoMsg_$$$($JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$, $msg$jscomp$85$$) {
  var $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$ = $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$.$b$.$a$;
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$ = 1 === $msg$jscomp$85$$.timeFormat ? 1 : 2;
  if (7 <= $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$) {
    return $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV7$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.name = $msg$jscomp$85$$.name, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.settings = new $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$, $msg$jscomp$85$$.timeZoneId && ($v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.settings.timezone = $msg$jscomp$85$$.timeZoneId), $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.settings.time_format = $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$, 
    $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.settings.locale = $msg$jscomp$85$$.localeId, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV7$OptIn$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.opt_in.stats = $msg$jscomp$85$$.statsOptIn, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$;
  }
  if (4 <= $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$ && 6 >= $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$) {
    return $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV4$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.name = $msg$jscomp$85$$.name, $msg$jscomp$85$$.timeZoneId && ($v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.timezone = $msg$jscomp$85$$.timeZoneId), $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.time_format = $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.locale = $msg$jscomp$85$$.localeId, 
    $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.opt_in = new $castApp$core$setupApi$EurekaInfoMsgV4$OptIn$$, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$.opt_in.stats = $msg$jscomp$85$$.statsOptIn, $v4$jscomp$3_v7$jscomp$3_version$jscomp$21$$;
  }
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV3$$;
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$.name = $msg$jscomp$85$$.name;
  $msg$jscomp$85$$.timeZoneId && ($JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$.timezone = $msg$jscomp$85$$.timeZoneId);
  $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$.locale = $msg$jscomp$85$$.localeId;
  return $JSCompiler_StaticMethods_createSetEurekaInfoMsg_$self_newTimeFormat_v3$jscomp$1$$;
}, $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$ = function $$JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$$$($JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$, $uiState$$) {
  $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$.$c$.$b$.$a$.$a$.sendMessage(new $castApp$protocol$DeviceSettings$Show$$($uiState$$, $JSCompiler_StaticMethods_getEurekaInfoState$$($JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$.$b$).features, $JSCompiler_StaticMethods_castApp_core_DeviceSettings_prototype$updateUi_$self$$.$a$));
};
$castApp$core$DeviceSettings$$.prototype.$s$ = function $$castApp$core$DeviceSettings$$$$$s$$() {
  if ($JSCompiler_StaticMethods_getEurekaInfoState$$(this.$b$).features.deviceSettings.supportsReboot) {
    $JSCompiler_StaticMethods_postReboot$$(this.$b$, "now");
    var $ipAddress$jscomp$inline_872$$ = this.$b$.$c$.read().deviceIpAddress;
    $castApp$core$ShortTermDeviceState$addNewStateRecord_$$(this.$c$.$f$, new $castApp$core$storage$ShortTermDeviceState$$(1, $goog$now$$(), $ipAddress$jscomp$inline_872$$));
    this.$c$.$c$();
  }
};
$castApp$core$DeviceSettings$$.prototype.$m$ = function $$castApp$core$DeviceSettings$$$$$m$$() {
  if ($JSCompiler_StaticMethods_getEurekaInfoState$$(this.$b$).features.deviceSettings.supportsFdr) {
    $JSCompiler_StaticMethods_postReboot$$(this.$b$, "fdr");
    var $ipAddress$jscomp$inline_875$$ = this.$b$.$c$.read().deviceIpAddress;
    $castApp$core$ShortTermDeviceState$addNewStateRecord_$$(this.$c$.$f$, new $castApp$core$storage$ShortTermDeviceState$$(3, $goog$now$$(), $ipAddress$jscomp$inline_875$$));
    this.$c$.$c$();
  }
};
$castApp$core$DeviceSettings$$.prototype.$o$ = function $$castApp$core$DeviceSettings$$$$$o$$() {
  if ($JSCompiler_StaticMethods_getEurekaInfoState$$(this.$b$).features.deviceSettings.supportsForgetWiFi) {
    var $JSCompiler_StaticMethods_postForgetWiFi$self$jscomp$inline_877$$ = this.$b$, $wpa_id$jscomp$inline_878$$ = this.$g$;
    $JSCompiler_StaticMethods_postForgetWiFi$self$jscomp$inline_877$$.$b$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postForgetWiFi$self$jscomp$inline_877$$, "/setup/forget_wifi"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify(new $castApp$core$setupApi$ForgetWiFiMsg$$($wpa_id$jscomp$inline_878$$)), timeout:1E4, $maxRetries$:2});
    this.$c$.$c$();
  }
};
$castApp$core$DeviceSettings$$.prototype.$l$ = function $$castApp$core$DeviceSettings$$$$$l$$() {
  this.$c$.$c$();
};
var $castApp$core$UiMessages$MSG_LOAD_FAILED$$ = chrome.i18n.getMessage("3254351313955764967"), $castApp$core$UiMessages$MSG_UPDATE_REQUIRED$$ = chrome.i18n.getMessage("3485206350043289145");
var $castApp$core$Ui$$ = function $$castApp$core$Ui$$$($win$jscomp$12$$, $webview$jscomp$4$$) {
  this.$b$ = $win$jscomp$12$$;
  this.$a$ = $webview$jscomp$4$$;
  this.$f$ = new $goog$events$EventTarget$$;
  this.$c$ = new $castApp$StartStoppable$$(this.$h$.bind(this), this.$g$.bind(this));
}, $castApp$core$Ui$logger_$$ = $castApp$log$getLogger$$("core.Ui");
$castApp$core$Ui$$.prototype.start = function $$castApp$core$Ui$$$$start$() {
  return this.$c$.start();
};
$castApp$core$Ui$$.prototype.$h$ = function $$castApp$core$Ui$$$$$h$$() {
  var $startResolver$$ = $goog$Promise$withResolver$$();
  $castApp$core$setBodyClass_$$(this.$b$, "start");
  $JSCompiler_StaticMethods_injectLocalizedMessages_$$(this);
  var $timeLimitTask$$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $goog$Timer$promise$$(18E4)).then(function() {
    $castApp$core$setBodyClass_$$(this.$b$, "load-failed");
    $JSCompiler_StaticMethods_emitEvent_$$(this, "loadTimedOut");
    $startResolver$$.$c$(new $castApp$TimeoutError$$);
  }.bind(this));
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, this.$a$.start()).then(function() {
    var $startResolver$$ = this.$a$.$a$;
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_waitForMessage$$($startResolver$$, "OfflineUiReady")).then(function() {
      $JSCompiler_StaticMethods_emitEvent_$$(this, "offlineUiReady");
    }.bind(this));
    $JSCompiler_StaticMethods_emitEvent_$$(this, "waitingForHandshake");
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$c$, $startResolver$$.sendRequest(new $castApp$protocol$Handshake$Request$$));
  }.bind(this)).then(function($rawResponse$$) {
    switch($rawResponse$$.type) {
      case "Handshake.Response":
        $castApp$core$setBodyClass_$$(this.$b$, "hosting-embedded-ui");
        $JSCompiler_StaticMethods_emitEvent_$$(this, "embeddedUiReady");
        $timeLimitTask$$.cancel();
        $startResolver$$.$b$();
        break;
      case "Handshake.UiVersionNotSupported":
        $castApp$core$setBodyClass_$$(this.$b$, "update-required");
        $JSCompiler_StaticMethods_emitEvent_$$(this, "updateRequired");
        $startResolver$$.$c$($rawResponse$$);
        break;
      default:
        $goog$asserts$fail$$("Bad handshake response type."), $castApp$core$setBodyClass_$$(this.$b$, "load-failed"), $JSCompiler_StaticMethods_emitEvent_$$(this, "loadFailed");
    }
  }.bind(this));
  return $startResolver$$.$a$;
};
var $JSCompiler_StaticMethods_injectLocalizedMessages_$$ = function $$JSCompiler_StaticMethods_injectLocalizedMessages_$$$($JSCompiler_StaticMethods_injectLocalizedMessages_$self$$) {
  var $doc$jscomp$35$$ = $JSCompiler_StaticMethods_injectLocalizedMessages_$self$$.$b$.document;
  [["#load-failed-message", $castApp$core$UiMessages$MSG_LOAD_FAILED$$], ["#update-required-message", $castApp$core$UiMessages$MSG_UPDATE_REQUIRED$$]].forEach(function($JSCompiler_StaticMethods_injectLocalizedMessages_$self$$) {
    var $data$jscomp$60$$ = $doc$jscomp$35$$.querySelector($JSCompiler_StaticMethods_injectLocalizedMessages_$self$$[0]);
    $data$jscomp$60$$ && ($data$jscomp$60$$.textContent = $JSCompiler_StaticMethods_injectLocalizedMessages_$self$$[1]);
  });
};
$castApp$core$Ui$$.prototype.$g$ = function $$castApp$core$Ui$$$$$g$$() {
  return this.$a$.stop();
};
var $JSCompiler_StaticMethods_emitEvent_$$ = function $$JSCompiler_StaticMethods_emitEvent_$$$($JSCompiler_StaticMethods_emitEvent_$self$$, $eventType$jscomp$8$$) {
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_emitEvent_$self$$.$f$, $eventType$jscomp$8$$);
  $castApp$log$info$$($castApp$core$Ui$logger_$$, $eventType$jscomp$8$$);
}, $castApp$core$setBodyClass_$$ = function $$castApp$core$setBodyClass_$$$($body$jscomp$2_win$jscomp$16$$, $className$jscomp$12$$) {
  ($body$jscomp$2_win$jscomp$16$$ = $body$jscomp$2_win$jscomp$16$$.document && $body$jscomp$2_win$jscomp$16$$.document.body || null) && $body$jscomp$2_win$jscomp$16$$.setAttribute("class", $className$jscomp$12$$);
};
var $castApp$core$offers$Environment$$ = function $$castApp$core$offers$Environment$$$($win$jscomp$17$$, $ui$jscomp$1$$, $eventPageClient$jscomp$2$$, $http$jscomp$7$$, $analytics$$) {
  this.$b$ = $ui$jscomp$1$$;
  this.$a$ = $eventPageClient$jscomp$2$$;
  this.$f$ = $http$jscomp$7$$;
  this.$g$ = $win$jscomp$17$$.localStorage;
  this.$c$ = $analytics$$;
}, $castApp$core$offers$Scan$$ = function $$castApp$core$offers$Scan$$$($env$jscomp$3$$, $id$jscomp$57$$, $opt_timeout$jscomp$2$$) {
  this.$b$ = $env$jscomp$3$$;
  this.$l$ = $id$jscomp$57$$;
  this.$m$ = $goog$isDef$$($opt_timeout$jscomp$2$$) ? $opt_timeout$jscomp$2$$ : 3E4;
  this.$c$ = new $goog$structs$Map$$;
  this.$h$ = !0;
  this.$g$ = !1;
  this.$a$ = new $goog$structs$Set$$;
  this.$j$ = new $castApp$core$ShortTermDeviceState$$($env$jscomp$3$$.$g$);
  this.$f$ = new $castApp$StartStoppable$$(this.$castApp_core_offers_Scan_prototype$start_$.bind(this), this.$castApp_core_offers_Scan_prototype$reset_$.bind(this));
  this.$i$ = this.$castApp_core_offers_Scan_prototype$handleDeviceData_$.bind(this);
}, $castApp$core$offers$Scan$logger_$$ = $castApp$log$getLogger$$("core.offers.Scanner");
$JSCompiler_prototypeAlias$$ = $castApp$core$offers$Scan$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$f$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  if (!this.$g$) {
    var $msg$jscomp$86$$ = new $castApp$protocol$Offers$ScanResults$$(this.$l$, this.$c$.$getValues$(), !0);
    this.$b$.$b$.$a$.$a$.sendMessage($msg$jscomp$86$$);
    this.$g$ = !0;
  }
  return this.$f$.stop();
};
$JSCompiler_prototypeAlias$$.$castApp_core_offers_Scan_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_offers_Scan_prototype$start_$$() {
  this.$b$.$a$.listen("devices", this.$i$);
  $JSCompiler_StaticMethods_startDeviceMonitor$$(this.$b$.$a$);
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, $goog$Timer$promise$$(this.$m$)).then(function() {
    this.$h$ = !1;
    this.$stopIfScanComplete_$();
  }.bind(this));
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$castApp_core_offers_Scan_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_offers_Scan_prototype$reset_$$() {
  this.$b$.$a$.$unlisten$("devices", this.$i$);
  this.$c$ = new $goog$structs$Map$$;
  this.$h$ = !0;
  this.$g$ = !1;
  this.$a$ = new $goog$structs$Set$$;
  return $goog$Promise$resolve$$();
};
$JSCompiler_prototypeAlias$$.$castApp_core_offers_Scan_prototype$handleDeviceData_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_offers_Scan_prototype$handleDeviceData_$$($event$jscomp$17$$) {
  var $$jscomp$this$jscomp$5$$ = this;
  $JSCompiler_StaticMethods_loadFromStorage$$(this.$j$);
  ($event$jscomp$17$$.msg.devices || []).forEach(function($event$jscomp$17$$) {
    var $deviceData$jscomp$5$$ = $event$jscomp$17$$.ipAddress;
    $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($$jscomp$this$jscomp$5$$.$c$, $deviceData$jscomp$5$$) || $$jscomp$this$jscomp$5$$.$a$.contains($deviceData$jscomp$5$$) || $JSCompiler_StaticMethods_deviceIsRestarting$$($$jscomp$this$jscomp$5$$.$j$, $deviceData$jscomp$5$$) || ($JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$($$jscomp$this$jscomp$5$$.$a$, $deviceData$jscomp$5$$), $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$($castApp$core$SetupApiClient$create$$($$jscomp$this$jscomp$5$$.$b$.$f$, 
    $castApp$core$SetupApiClient$createInMemoryStateStorage$$($deviceData$jscomp$5$$)).then(function($event$jscomp$17$$) {
      if (7 > $event$jscomp$17$$.$a$) {
        throw new $goog$Promise$CancellationError$$;
      }
      return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($$jscomp$this$jscomp$5$$.$f$, $JSCompiler_StaticMethods_getOffer$$($event$jscomp$17$$)).then(function($ipAddress$jscomp$10$$) {
        var $setupApiClient$jscomp$4$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($event$jscomp$17$$);
        $ipAddress$jscomp$10$$ = new $castApp$protocol$Offers$Device$$($ipAddress$jscomp$10$$.token, $setupApiClient$jscomp$4$$.name, $castApp$core$utils$getProtocolDeviceType$$($setupApiClient$jscomp$4$$.deviceType), $setupApiClient$jscomp$4$$.ssdpUdn);
        $$jscomp$this$jscomp$5$$.$c$.set($deviceData$jscomp$5$$, $ipAddress$jscomp$10$$);
        $$jscomp$this$jscomp$5$$.$a$.remove($deviceData$jscomp$5$$);
        $$jscomp$this$jscomp$5$$.$g$ || ($ipAddress$jscomp$10$$ = new $castApp$protocol$Offers$ScanResults$$($$jscomp$this$jscomp$5$$.$l$, $$jscomp$this$jscomp$5$$.$c$.$getValues$(), !$$jscomp$this$jscomp$5$$.$h$ && 0 === $$jscomp$this$jscomp$5$$.$a$.$getCount$()), $$jscomp$this$jscomp$5$$.$g$ = $ipAddress$jscomp$10$$.scanComplete, $$jscomp$this$jscomp$5$$.$b$.$b$.$a$.$a$.sendMessage($ipAddress$jscomp$10$$));
      });
    }), function($event$jscomp$17$$) {
      $$jscomp$this$jscomp$5$$.$a$.remove($deviceData$jscomp$5$$);
      $event$jscomp$17$$ instanceof $goog$Promise$CancellationError$$ || $castApp$log$infoWithCause$$($castApp$core$offers$Scan$logger_$$, $event$jscomp$17$$, "Failed to retrieve offer token.");
    }), $$jscomp$this$jscomp$5$$.$stopIfScanComplete_$.bind($$jscomp$this$jscomp$5$$)));
  });
};
$JSCompiler_prototypeAlias$$.$stopIfScanComplete_$ = function $$JSCompiler_prototypeAlias$$$$stopIfScanComplete_$$() {
  this.$h$ || 0 !== this.$a$.$getCount$() || this.stop();
};
var $castApp$core$SetupState$$ = function $$castApp$core$SetupState$$$($stateManager$$, $start$jscomp$29$$, $reset$jscomp$2$$) {
  this.$b$ = new $castApp$StartStoppable$$($start$jscomp$29$$ || function() {
    return $goog$Promise$resolve$$();
  }, $reset$jscomp$2$$ || void 0);
  this.$a$ = $stateManager$$;
};
$castApp$core$SetupState$$.prototype.start = function $$castApp$core$SetupState$$$$start$() {
  return this.$b$.start();
};
$castApp$core$SetupState$$.prototype.stop = function $$castApp$core$SetupState$$$$stop$() {
  return this.$b$.stop();
};
var $JSCompiler_StaticMethods_getUiMessenger$$ = function $$JSCompiler_StaticMethods_getUiMessenger$$$($JSCompiler_StaticMethods_getUiMessenger$self$$) {
  return $JSCompiler_StaticMethods_getUiMessenger$self$$.$a$.$j$.$a$.$a$;
};
var $castApp$core$SetupEnvironment$$ = function $$castApp$core$SetupEnvironment$$$($win$jscomp$18$$, $networkingApi$jscomp$8$$, $http$jscomp$8$$, $analytics$jscomp$1$$) {
  var $setupStateFactory$$ = $castApp$core$createSetupState$$, $goToDevicesPage$jscomp$1$$ = $castApp$app$goToDevicesPage_$$, $reloadSetupPage$$ = window.location.reload.bind(window.location), $getBrowserUiLanguage$jscomp$1$$ = chrome.i18n.getUILanguage, $eventPageClient$jscomp$3$$ = new $castApp$eventPage$ChromeClient$$;
  this.window = $win$jscomp$18$$;
  this.$b$ = $networkingApi$jscomp$8$$;
  this.$g$ = $http$jscomp$8$$;
  this.$a$ = $win$jscomp$18$$.localStorage;
  this.$l$ = $win$jscomp$18$$.sessionStorage;
  this.$c$ = $analytics$jscomp$1$$;
  this.$j$ = $setupStateFactory$$;
  this.$f$ = $goToDevicesPage$jscomp$1$$;
  this.$m$ = $reloadSetupPage$$;
  this.$h$ = $getBrowserUiLanguage$jscomp$1$$;
  this.$i$ = $eventPageClient$jscomp$3$$;
};
var $castApp$core$AudioConfirmationState$$ = function $$castApp$core$AudioConfirmationState$$$($stateManager$jscomp$1$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$1$$, this.$l$.bind(this), this.$j$.bind(this));
  this.$c$ = this.$f$ = null;
  this.$g$ = this.$i$.bind(this);
  this.$m$ = this.$h$.bind(this);
};
$goog$inherits$$($castApp$core$AudioConfirmationState$$, $castApp$core$SetupState$$);
var $castApp$core$AudioConfirmationState$logger_$$ = $castApp$log$getLogger$$("core.AudioConfirmationState");
$castApp$core$AudioConfirmationState$$.prototype.$l$ = function $$castApp$core$AudioConfirmationState$$$$$l$$() {
  $castApp$log$info$$($castApp$core$AudioConfirmationState$logger_$$, "starting");
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$(this.$a$)).then(function($setupApiClient$jscomp$5$$) {
    this.$f$ = $setupApiClient$jscomp$5$$;
    $JSCompiler_StaticMethods_getUiMessenger$$(this).addListener("AudioConfirmation.UserAction", this.$g$);
    $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$AudioConfirmation$PromptUser$$(1));
    this.$c$ = 3;
    this.$h$();
  }.bind(this));
};
$castApp$core$AudioConfirmationState$$.prototype.$j$ = function $$castApp$core$AudioConfirmationState$$$$$j$$() {
  this.$c$ = this.$f$ = null;
  $JSCompiler_StaticMethods_getUiMessenger$$(this).removeListener("AudioConfirmation.UserAction", this.$g$);
  return $goog$Promise$resolve$$();
};
$castApp$core$AudioConfirmationState$$.prototype.$h$ = function $$castApp$core$AudioConfirmationState$$$$$h$$() {
  if (null !== this.$c$) {
    $castApp$log$info$$($castApp$core$AudioConfirmationState$logger_$$, "Playing sound: " + this.$c$);
    var $JSCompiler_temp_const$jscomp$54$$ = this.$b$, $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_898_JSCompiler_inline_result$jscomp$55$$;
    $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_898_JSCompiler_inline_result$jscomp$55$$ = this.$f$;
    var $soundId$jscomp$inline_899$$ = this.$c$;
    $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_898_JSCompiler_inline_result$jscomp$55$$ = $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_898_JSCompiler_inline_result$jscomp$55$$.$b$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_898_JSCompiler_inline_result$jscomp$55$$, "/setup/play_sound"), method:"POST", headers:{"Content-Type":"application/json"}, content:JSON.stringify(new $castApp$core$setupApi$PlaySoundRequestMsg$$($soundId$jscomp$inline_899$$)), 
    timeout:1E4, $maxRetries$:2});
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_temp_const$jscomp$54$$, $JSCompiler_StaticMethods_postPlaySound$self$jscomp$inline_898_JSCompiler_inline_result$jscomp$55$$);
    this.$c$ = 3;
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $goog$Timer$promise$$(1 === this.$c$ ? 3E3 : 1900)).then(this.$m$);
  }
};
$castApp$core$AudioConfirmationState$$.prototype.$i$ = function $$castApp$core$AudioConfirmationState$$$$$i$$($JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_901_rawMsg$jscomp$23$$) {
  var $nextUiState$$ = null;
  switch($JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_901_rawMsg$jscomp$23$$.action) {
    case 1:
      this.$c$ = 1;
      $nextUiState$$ = 2;
      break;
    case 2:
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$a$, 12);
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$a$, new $castApp$core$storage$SetupState$$(5));
      break;
    case 3:
      $nextUiState$$ = 3;
      break;
    case 4:
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$a$, 13), $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_901_rawMsg$jscomp$23$$ = this.$a$, $castApp$core$storage$removeSetupSession$$($JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_901_rawMsg$jscomp$23$$.$a$.$a$, $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_901_rawMsg$jscomp$23$$.$b$), $JSCompiler_StaticMethods_handleCodeOrToneRejection$self$jscomp$inline_901_rawMsg$jscomp$23$$.$a$.$f$();
  }
  $nextUiState$$ && $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$AudioConfirmation$PromptUser$$($nextUiState$$));
};
var $castApp$core$CodeConfirmationState$$ = function $$castApp$core$CodeConfirmationState$$$($stateManager$jscomp$2$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$2$$, this.$c$.bind(this), null);
};
$goog$inherits$$($castApp$core$CodeConfirmationState$$, $castApp$core$SetupState$$);
var $castApp$core$CodeConfirmationState$logger_$$ = $castApp$log$getLogger$$("core.CodeConfirmationState");
$castApp$core$CodeConfirmationState$$.prototype.$c$ = function $$castApp$core$CodeConfirmationState$$$$$c$$() {
  $castApp$log$info$$($castApp$core$CodeConfirmationState$logger_$$, "starting");
  var $self$jscomp$7$$ = this;
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $JSCompiler_StaticMethods_getUiMessenger$$(this).sendRequest(new $castApp$protocol$CodeConfirmation$Request$$((this.$a$.$b$.setupApiClientState || null).verificationState.pin))).then(function($rawResponse$jscomp$1$$) {
    $rawResponse$jscomp$1$$.confirmed ? ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$7$$.$a$, 10), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$7$$.$a$, new $castApp$core$storage$SetupState$$(5))) : ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$7$$.$a$, 11), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$7$$.$b$, $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$7$$).sendRequest(new $castApp$protocol$ModalDialog$Request$$(1))).then(function() {
      var $rawResponse$jscomp$1$$ = $self$jscomp$7$$.$a$;
      $castApp$core$storage$removeSetupSession$$($rawResponse$jscomp$1$$.$a$.$a$, $rawResponse$jscomp$1$$.$b$);
      $rawResponse$jscomp$1$$.$a$.$f$();
    }));
  });
  return $goog$Promise$resolve$$();
};
var $castApp$core$HotSpotReconnector$$ = function $$castApp$core$HotSpotReconnector$$$($networkingApi$jscomp$9$$, $bssid$jscomp$9$$) {
  this.$i$ = $networkingApi$jscomp$9$$;
  this.$a$ = new $castApp$core$WiFiMonitor$$($networkingApi$jscomp$9$$, new $castApp$core$WiFiMonitor$CastHotSpotsFilter$$($bssid$jscomp$9$$));
  this.$b$ = "connected";
  this.$c$ = null;
  this.$f$ = new $castApp$StartStoppable$$(this.$castApp_core_HotSpotReconnector_prototype$start_$.bind(this), this.$castApp_core_HotSpotReconnector_prototype$reset_$.bind(this));
  this.$g$ = new $goog$events$EventTarget$$;
}, $castApp$core$HotSpotReconnector$WIFI_MONITOR_EVENT_TYPES_$$ = ["added", "removed", "connected", "disconnected"], $castApp$core$HotSpotReconnector$logger_$$ = $castApp$log$getLogger$$("core.HotSpotReconnector");
$JSCompiler_prototypeAlias$$ = $castApp$core$HotSpotReconnector$$.prototype;
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  return this.$f$.start();
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  return this.$f$.stop();
};
$JSCompiler_prototypeAlias$$.getState = function $$JSCompiler_prototypeAlias$$$getState$() {
  return this.$b$;
};
$JSCompiler_prototypeAlias$$.$castApp_core_HotSpotReconnector_prototype$start_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_HotSpotReconnector_prototype$start_$$() {
  var $self$jscomp$8$$ = this;
  return $self$jscomp$8$$.$a$.start().then(function() {
    $self$jscomp$8$$.$h$();
    $castApp$core$HotSpotReconnector$WIFI_MONITOR_EVENT_TYPES_$$.forEach(function($eventType$jscomp$9$$) {
      $self$jscomp$8$$.$a$.$a$.listen($eventType$jscomp$9$$, $self$jscomp$8$$.$h$, !0, $self$jscomp$8$$);
    });
  });
};
$JSCompiler_prototypeAlias$$.$castApp_core_HotSpotReconnector_prototype$reset_$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_HotSpotReconnector_prototype$reset_$$() {
  this.$b$ = "connected";
  this.$c$ = null;
  if (!this.$a$) {
    return $goog$Promise$resolve$$();
  }
  var $wiFiMonitor$$ = this.$a$;
  this.$a$ = null;
  $castApp$core$HotSpotReconnector$WIFI_MONITOR_EVENT_TYPES_$$.forEach(function($eventType$jscomp$10$$) {
    $wiFiMonitor$$.$a$.$unlisten$($eventType$jscomp$10$$, this.$h$, !0, this);
  }.bind(this));
  return $wiFiMonitor$$.stop();
};
var $JSCompiler_StaticMethods_setState_$$ = function $$JSCompiler_StaticMethods_setState_$$$($JSCompiler_StaticMethods_setState_$self$$, $newState$jscomp$2$$) {
  $JSCompiler_StaticMethods_setState_$self$$.$b$ !== $newState$jscomp$2$$ && ($JSCompiler_StaticMethods_setState_$self$$.$b$ = $newState$jscomp$2$$, $castApp$log$info$$($castApp$core$HotSpotReconnector$logger_$$, "New state: " + $newState$jscomp$2$$), $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_setState_$self$$.$g$, new $goog$events$Event$$($newState$jscomp$2$$)));
};
$castApp$core$HotSpotReconnector$$.prototype.$h$ = function $$castApp$core$HotSpotReconnector$$$$$h$$() {
  if ("failed" !== this.$b$) {
    var $network$jscomp$4_scheduledFailure$jscomp$inline_906$$ = null;
    1 === this.$a$.networks.$getCount$() && ($network$jscomp$4_scheduledFailure$jscomp$inline_906$$ = this.$a$.networks.$getValues$()[0]);
    if (!$network$jscomp$4_scheduledFailure$jscomp$inline_906$$) {
      "connected" === this.$b$ && ($JSCompiler_StaticMethods_scheduleFailure_$$(this), $JSCompiler_StaticMethods_setState_$$(this, "disconnected"));
    } else {
      if ("Connected" === $network$jscomp$4_scheduledFailure$jscomp$inline_906$$.ConnectionState) {
        this.$c$ && ($network$jscomp$4_scheduledFailure$jscomp$inline_906$$ = this.$c$, this.$c$ = null, $network$jscomp$4_scheduledFailure$jscomp$inline_906$$.cancel()), $JSCompiler_StaticMethods_setState_$$(this, "connected");
      } else {
        if ("connected" === this.$b$ || "disconnected" === this.$b$) {
          $JSCompiler_StaticMethods_scheduleFailure_$$(this), $JSCompiler_StaticMethods_setState_$$(this, "reconnecting"), $JSCompiler_StaticMethods_reconnect_$$(this, $network$jscomp$4_scheduledFailure$jscomp$inline_906$$.GUID);
        }
      }
    }
  }
};
var $JSCompiler_StaticMethods_reconnect_$$ = function $$JSCompiler_StaticMethods_reconnect_$$$($JSCompiler_StaticMethods_reconnect_$self$$, $hotspotNetworkGuid$$) {
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_reconnect_$self$$.$f$, $JSCompiler_StaticMethods_reconnect_$self$$.$i$.startConnect($hotspotNetworkGuid$$)), function($JSCompiler_StaticMethods_reconnect_$self$$) {
    $castApp$log$errorWithCause$$($castApp$core$HotSpotReconnector$logger_$$, $JSCompiler_StaticMethods_reconnect_$self$$, "chrome.networkingPrivate.startConnect failed.");
    $JSCompiler_StaticMethods_setState_$$(this, "failed");
    this.$a$.stop();
  }.bind($JSCompiler_StaticMethods_reconnect_$self$$));
}, $JSCompiler_StaticMethods_scheduleFailure_$$ = function $$JSCompiler_StaticMethods_scheduleFailure_$$$($JSCompiler_StaticMethods_scheduleFailure_$self$$) {
  $JSCompiler_StaticMethods_scheduleFailure_$self$$.$c$ || ($JSCompiler_StaticMethods_scheduleFailure_$self$$.$c$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_scheduleFailure_$self$$.$f$, $goog$Timer$promise$$(9E4)).then(function() {
    $castApp$log$info$$($castApp$core$HotSpotReconnector$logger_$$, "Reconnection timed out.");
    $JSCompiler_StaticMethods_setState_$$(this, "failed");
    this.$a$.stop();
  }.bind($JSCompiler_StaticMethods_scheduleFailure_$self$$)));
};
var $castApp$core$ConnectWiFiPendingState$$ = function $$castApp$core$ConnectWiFiPendingState$$$($stateManager$jscomp$3$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$3$$, this.$o$.bind(this), this.$m$.bind(this));
  this.$f$ = null;
  this.$s$ = 0;
  this.$h$ = this.$g$ = this.$j$ = this.$c$ = null;
};
$goog$inherits$$($castApp$core$ConnectWiFiPendingState$$, $castApp$core$SetupState$$);
var $castApp$core$ConnectWiFiPendingState$ALL_RECONNECTOR_EVENT_TYPES_$$ = ["connected", "disconnected", "reconnecting", "failed"], $castApp$core$ConnectWiFiPendingState$logger_$$ = $castApp$log$getLogger$$("core.ConnectWiFiPendingState");
$castApp$core$ConnectWiFiPendingState$$.prototype.$o$ = function $$castApp$core$ConnectWiFiPendingState$$$$$o$$() {
  var $self$jscomp$9$$ = this;
  $castApp$log$info$$($castApp$core$ConnectWiFiPendingState$logger_$$, "starting");
  var $commonState$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$9$$.$a$);
  $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$9$$).sendMessage($castApp$core$utils$createWiFiConfigUiMessage$$($commonState$$.connectWiFi, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$9$$.$a$)));
  $self$jscomp$9$$.$g$ = new $castApp$core$HotSpotReconnector$$($self$jscomp$9$$.$a$.$a$.$b$, $commonState$$.connectedHotSpotBssid);
  $castApp$core$ConnectWiFiPendingState$ALL_RECONNECTOR_EVENT_TYPES_$$.forEach(function($commonState$$) {
    $self$jscomp$9$$.$g$.$g$.listen($commonState$$, $self$jscomp$9$$.$i$, !0, $self$jscomp$9$$);
  });
  return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$9$$.$b$, $self$jscomp$9$$.$g$.start()), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$9$$.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($self$jscomp$9$$.$a$)).then(function($commonState$$) {
    $self$jscomp$9$$.$f$ = $commonState$$;
    $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$($self$jscomp$9$$);
  })]).then($self$jscomp$9$$.$u$.bind($self$jscomp$9$$));
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$m$ = function $$castApp$core$ConnectWiFiPendingState$$$$$m$$() {
  var $self$jscomp$10$$ = this;
  $JSCompiler_StaticMethods_clearFailureTimeout_$$($self$jscomp$10$$);
  $JSCompiler_StaticMethods_stopEurekaInfoPolling_$$($self$jscomp$10$$);
  if (!$self$jscomp$10$$.$g$) {
    return $goog$Promise$resolve$$();
  }
  var $hotSpotReconnector$$ = $self$jscomp$10$$.$g$;
  $self$jscomp$10$$.$g$ = null;
  $castApp$core$ConnectWiFiPendingState$ALL_RECONNECTOR_EVENT_TYPES_$$.forEach(function($eventType$jscomp$12$$) {
    $hotSpotReconnector$$.$g$.$unlisten$($eventType$jscomp$12$$, $self$jscomp$10$$.$i$, !0, $self$jscomp$10$$);
  });
  return $hotSpotReconnector$$.stop();
};
var $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$ = function $$JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$$($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$, $opt_delay$jscomp$3$$) {
  if (!$JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$c$) {
    var $eurekaInfoRequestCounter$$ = 0;
    $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$c$ = $JSCompiler_StaticMethods_thenCatch$$($goog$Timer$promise$$($opt_delay$jscomp$3$$ || 0).then(function() {
      $eurekaInfoRequestCounter$$ = ++$JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$s$;
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$c$ = $JSCompiler_StaticMethods_getEurekaInfo$$($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$f$, {options:["version", "setup.setup_state", "net.ip_address"]});
      return $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$c$;
    }).then($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$l$.bind($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$)), function($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$) {
      $castApp$utils$rethrowIfCancellationError$$($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$);
      $castApp$log$warningWithCause$$($castApp$core$ConnectWiFiPendingState$logger_$$, $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$, "Request #" + $eurekaInfoRequestCounter$$ + " failed.");
    }).then(function() {
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$.$c$ = null;
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$($JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$self$$, 3E3);
    });
  }
}, $JSCompiler_StaticMethods_stopEurekaInfoPolling_$$ = function $$JSCompiler_StaticMethods_stopEurekaInfoPolling_$$$($JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$) {
  if ($JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$.$c$) {
    var $task$jscomp$3$$ = $JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$.$c$;
    $JSCompiler_StaticMethods_stopEurekaInfoPolling_$self$$.$c$ = null;
    $task$jscomp$3$$.cancel();
  }
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$l$ = function $$castApp$core$ConnectWiFiPendingState$$$$$l$$() {
  var $newSetupState$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$(this.$f$).setupState;
  if ($newSetupState$$ !== this.$j$) {
    switch($castApp$log$info$$($castApp$core$ConnectWiFiPendingState$logger_$$, "New setup state: " + $newSetupState$$), this.$j$ = $newSetupState$$, $newSetupState$$) {
      case 31:
        return $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 2), $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
      case 21:
      case 41:
      case 10:
      case 11:
        return $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 1), $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
      case 60:
      case 61:
      case 51:
        return $JSCompiler_StaticMethods_handleConnectionSuccess_$$(this), $goog$Promise$reject$$(new $goog$Promise$CancellationError$$);
    }
  }
};
var $JSCompiler_StaticMethods_handleConnectionSuccess_$$ = function $$JSCompiler_StaticMethods_handleConnectionSuccess_$$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$) {
  $JSCompiler_StaticMethods_clearFailureTimeout_$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$a$, 19);
  var $eurekaInfoState$jscomp$2$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$f$);
  $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$, $JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$a$.$a$.$c$.$a$()).then(function($analyticsOptIn$jscomp$2_msg$jscomp$88$$) {
    $analyticsOptIn$jscomp$2_msg$jscomp$88$$ = $castApp$core$utils$createSetEurekaInfoMessage$$($eurekaInfoState$jscomp$2$$.setupApiVersion, $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$a$).deviceName, 3 !== $analyticsOptIn$jscomp$2_msg$jscomp$88$$);
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$f$, $analyticsOptIn$jscomp$2_msg$jscomp$88$$));
  }), function($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$) {
    $castApp$utils$rethrowIfCancellationError$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$);
    $castApp$log$warningWithCause$$($castApp$core$ConnectWiFiPendingState$logger_$$, $JSCompiler_StaticMethods_handleConnectionSuccess_$self$$, "set_eureka_info failed.");
  }).then(function() {
    var $commonState$jscomp$1$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$a$), $bssid$jscomp$inline_909$$ = $commonState$jscomp$1$$.connectedHotSpotBssid;
    $castApp$core$ShortTermDeviceState$addNewStateRecord_$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$a$.$a$.$a$, new $castApp$core$storage$ShortTermDeviceState$$(2, $goog$now$$(), $bssid$jscomp$inline_909$$));
    delete $commonState$jscomp$1$$.connectedHotSpotBssid;
    $JSCompiler_StaticMethods_writeCommonState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$a$, $commonState$jscomp$1$$);
    if (60 !== $eurekaInfoState$jscomp$2$$.setupState && 4 <= $eurekaInfoState$jscomp$2$$.setupApiVersion) {
      return $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$b$, $JSCompiler_StaticMethods_postSaveWiFi$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$f$)), $goog$nullFunction$$);
    }
  }), function() {
    $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($JSCompiler_StaticMethods_handleConnectionSuccess_$self$$.$a$, new $castApp$core$storage$SetupState$$(8));
  });
}, $JSCompiler_StaticMethods_handleConnectionFailure_$$ = function $$JSCompiler_StaticMethods_handleConnectionFailure_$$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$, $failure$$) {
  $JSCompiler_StaticMethods_clearFailureTimeout_$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$a$, 2 === $failure$$ ? 17 : 18);
  var $commonState$jscomp$2$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$a$);
  $commonState$jscomp$2$$.connectWiFi.$a$ = $failure$$;
  $JSCompiler_StaticMethods_writeCommonState$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$a$, $commonState$jscomp$2$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($JSCompiler_StaticMethods_handleConnectionFailure_$self$$.$a$, new $castApp$core$storage$SetupState$$(6));
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$i$ = function $$castApp$core$ConnectWiFiPendingState$$$$$i$$($event$jscomp$18$$) {
  switch($event$jscomp$18$$.type) {
    case "connected":
      $JSCompiler_StaticMethods_castApp_core_ConnectWiFiPendingState_prototype$scheduleEurekaInfoRequest_$$(this);
      break;
    case "disconnected":
    case "reconnecting":
      $JSCompiler_StaticMethods_stopEurekaInfoPolling_$$(this);
      break;
    case "failed":
      $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 1);
  }
};
$castApp$core$ConnectWiFiPendingState$$.prototype.$u$ = function $$castApp$core$ConnectWiFiPendingState$$$$$u$$() {
  clearTimeout(this.$h$);
  this.$h$ = setTimeout(function() {
    $castApp$log$error$$($castApp$core$ConnectWiFiPendingState$logger_$$, "Connection timed out.");
    $JSCompiler_StaticMethods_handleConnectionFailure_$$(this, 1);
  }.bind(this), 9E4);
};
var $JSCompiler_StaticMethods_clearFailureTimeout_$$ = function $$JSCompiler_StaticMethods_clearFailureTimeout_$$$($JSCompiler_StaticMethods_clearFailureTimeout_$self$$) {
  clearTimeout($JSCompiler_StaticMethods_clearFailureTimeout_$self$$.$h$);
  $JSCompiler_StaticMethods_clearFailureTimeout_$self$$.$h$ = null;
};
var $goog$locale$countries$$ = "AC AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CP CR CU CV CW CX CY CZ DE DG DJ DK DM DO DZ EA EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU IC ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TA TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS XK YE YT ZA ZM ZW".split(" ");
var $castApp$core$DeviceConfigState$$ = function $$castApp$core$DeviceConfigState$$$($stateManager$jscomp$4$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$4$$, this.$g$.bind(this), null);
  this.$f$ = !1;
  this.$c$ = null;
};
$goog$inherits$$($castApp$core$DeviceConfigState$$, $castApp$core$SetupState$$);
var $castApp$core$DeviceConfigState$logger_$$ = $castApp$log$getLogger$$("core.DeviceConfigState");
$castApp$core$DeviceConfigState$$.prototype.$g$ = function $$castApp$core$DeviceConfigState$$$$$g$$() {
  $castApp$log$info$$($castApp$core$DeviceConfigState$logger_$$, "starting");
  var $JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$a$);
  this.$f$ = !!$JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$.device.ipAddress;
  var $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$ = (this.$a$.$b$.setupApiClientState || null).eurekaInfoState, $deviceName$jscomp$3$$ = $JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$.deviceName || $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$.name, $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$ = 3 === $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$.setupApiVersion;
  this.$f$ || $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$ || $JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$.country ? $JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$ = null : ($JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$ = this.$a$.$a$.$h$(), $JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$ = 
  ($eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$ = $goog$locale$getRegionSubTag$$($JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$)) && -1 !== $goog$locale$countries$$.indexOf($eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$) ? $eurekaInfoState$jscomp$3_regionSubTag$jscomp$inline_913_setupApiVersion3$$ : ($JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$ = 
  $goog$locale$getLanguageSubTag$$($JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$).toUpperCase()) && -1 !== $goog$locale$countries$$.indexOf($JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$) ? $JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$ : "US");
  this.$c$ = $JSCompiler_temp$jscomp$60_commonState$jscomp$3_langSubTag$jscomp$inline_914_languageCode$jscomp$inline_912$$;
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $JSCompiler_StaticMethods_getUiMessenger$$(this).sendRequest(new $castApp$protocol$DeviceConfig$Request$$($JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$a$), $deviceName$jscomp$3$$, this.$c$))).then(this.$h$.bind(this)), this.$a$.$g$.bind(this.$a$));
  return $goog$Promise$resolve$$();
};
$castApp$core$DeviceConfigState$$.prototype.$h$ = function $$castApp$core$DeviceConfigState$$$$$h$$($rawMsg$jscomp$24$$) {
  var $self$jscomp$13$$ = this;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$13$$.$a$, 14);
  var $commonState$jscomp$4$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$13$$.$a$);
  $commonState$jscomp$4$$.deviceName = $rawMsg$jscomp$24$$.name;
  $self$jscomp$13$$.$c$ && $rawMsg$jscomp$24$$.country && ($commonState$jscomp$4$$.country = $rawMsg$jscomp$24$$.country);
  $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$13$$.$a$, $commonState$jscomp$4$$);
  if ($self$jscomp$13$$.$f$) {
    var $setupApiClient$jscomp$7$$ = null;
    return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$13$$.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($self$jscomp$13$$.$a$)), $self$jscomp$13$$.$a$.$a$.$c$.$a$()]).then(function($rawMsg$jscomp$24$$) {
      $setupApiClient$jscomp$7$$ = $rawMsg$jscomp$24$$[0];
      $rawMsg$jscomp$24$$ = $rawMsg$jscomp$24$$[1];
      var $analyticsOptIn$jscomp$3_results$jscomp$3$$ = [];
      7 <= $setupApiClient$jscomp$7$$.$a$ && $analyticsOptIn$jscomp$3_results$jscomp$3$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$13$$.$b$, $setupApiClient$jscomp$7$$.$b$.request({url:$JSCompiler_StaticMethods_createRequestUrl_$$($setupApiClient$jscomp$7$$, "/setup/accept_tos"), method:"POST", timeout:1E4, $maxRetries$:2})));
      $analyticsOptIn$jscomp$3_results$jscomp$3$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$13$$.$b$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($setupApiClient$jscomp$7$$, $castApp$core$utils$createSetEurekaInfoMessage$$($setupApiClient$jscomp$7$$.$a$, $commonState$jscomp$4$$.deviceName, 3 !== $rawMsg$jscomp$24$$))));
      return $goog$Promise$all$$($analyticsOptIn$jscomp$3_results$jscomp$3$$);
    }).then(function() {
      return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$13$$.$b$, $JSCompiler_StaticMethods_getEurekaInfo$$($setupApiClient$jscomp$7$$, {options:["setup.setup_state"]}));
    }).then(function() {
      var $rawMsg$jscomp$24$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($setupApiClient$jscomp$7$$).setupState;
      switch($rawMsg$jscomp$24$$) {
        case 60:
          $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$($self$jscomp$13$$.$a$);
          break;
        case 62:
          $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$13$$.$a$, new $castApp$core$storage$SetupState$$(10));
          break;
        default:
          return $castApp$log$error$$($castApp$core$DeviceConfigState$logger_$$, "Bad setup state: " + $rawMsg$jscomp$24$$), $goog$Promise$reject$$();
      }
    });
  }
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$13$$.$a$, new $castApp$core$storage$SetupState$$(6));
};
var $castApp$core$DeviceFoundState$$ = function $$castApp$core$DeviceFoundState$$$($stateManager$jscomp$5$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$5$$, this.$c$.bind(this), null);
};
$goog$inherits$$($castApp$core$DeviceFoundState$$, $castApp$core$SetupState$$);
var $castApp$core$DeviceFoundState$logger_$$ = $castApp$log$getLogger$$("core.DeviceFoundState");
$castApp$core$DeviceFoundState$$.prototype.$c$ = function $$castApp$core$DeviceFoundState$$$$$c$$() {
  $castApp$log$info$$($castApp$core$DeviceFoundState$logger_$$, "starting");
  var $self$jscomp$14$$ = this, $setupApiClient$jscomp$8$$ = null;
  return $goog$Promise$all$$([$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$(this.$a$)), this.$a$.$a$.$c$.$a$()]).then(function($promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$) {
    $setupApiClient$jscomp$8$$ = $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$[0];
    $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$ = $castApp$core$utils$createSetEurekaInfoMessage$$($setupApiClient$jscomp$8$$.$a$, $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$14$$.$a$).deviceName, 3 !== $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$[1]);
    $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$ = [$JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$14$$.$b$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($setupApiClient$jscomp$8$$, $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$))];
    4 <= $setupApiClient$jscomp$8$$.$a$ && $promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$14$$.$b$, $JSCompiler_StaticMethods_postSaveWiFi$$($setupApiClient$jscomp$8$$)));
    return $goog$Promise$all$$($promises$jscomp$6_results$jscomp$4_setEurekaInfoMsg$$);
  }).then(function() {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$14$$.$b$, $JSCompiler_StaticMethods_getEurekaInfo$$($setupApiClient$jscomp$8$$, {options:["setup.setup_state"]}));
  }).then(function() {
    var $setupState$jscomp$2$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($setupApiClient$jscomp$8$$).setupState;
    switch($setupState$jscomp$2$$) {
      case 60:
      case 52:
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$($self$jscomp$14$$.$a$);
        break;
      case 62:
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$14$$.$a$, new $castApp$core$storage$SetupState$$(10));
        break;
      default:
        return $castApp$log$error$$($castApp$core$DeviceFoundState$logger_$$, "Bad setup state: " + $setupState$jscomp$2$$), $goog$Promise$reject$$();
    }
  });
};
var $castApp$core$WiFiSwitchStateBase$$ = function $$castApp$core$WiFiSwitchStateBase$$$($stateManager$jscomp$6$$, $targetNetworkSsid$$, $targetNetworkBssid$$, $opt_autoSwitchingEnabled$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$6$$, this.$F$.bind(this), this.$m$.bind(this));
  this.$g$ = 1;
  this.$c$ = new $castApp$AsyncTaskManager$$;
  this.$v$ = $targetNetworkBssid$$;
  this.$w$ = $targetNetworkSsid$$;
  this.$i$ = null;
  this.$A$ = void 0 !== $opt_autoSwitchingEnabled$$ ? $opt_autoSwitchingEnabled$$ : $castApp$core$storage$readAutoNetworkSwitchingFlag$$($stateManager$jscomp$6$$.$a$.$a$);
  this.$h$ = null;
  this.$o$ = this.$D$.bind(this);
  this.$l$ = this.$j$.bind(this);
  this.$B$ = this.$C$.bind(this);
};
$goog$inherits$$($castApp$core$WiFiSwitchStateBase$$, $castApp$core$SetupState$$);
var $castApp$core$WiFiSwitchStateBase$logger_$$ = $castApp$log$getLogger$$("core.WiFiSwitchStateBase");
$castApp$core$WiFiSwitchStateBase$$.prototype.$F$ = function $$castApp$core$WiFiSwitchStateBase$$$$$F$$() {
  var $self$jscomp$15$$ = this;
  $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$15$$, 1);
  $self$jscomp$15$$.$h$ = new $castApp$core$WiFiMonitor$$(this.$a$.$a$.$b$);
  var $eventTarget$jscomp$1_messenger$jscomp$1$$ = $self$jscomp$15$$.$h$.$a$;
  $eventTarget$jscomp$1_messenger$jscomp$1$$.listen("connected", $self$jscomp$15$$.$handleWiFiMonitorConnectedEvent$, !0, $self$jscomp$15$$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.listen("added", $self$jscomp$15$$.$s$, !0, $self$jscomp$15$$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$ = $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$15$$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.addListener("WiFiSwitching.Proceed", $self$jscomp$15$$.$o$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.addListener("WiFiSwitching.RetryConnection", $self$jscomp$15$$.$l$);
  $eventTarget$jscomp$1_messenger$jscomp$1$$.addListener("WiFiConfig.Retry", $self$jscomp$15$$.$l$);
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$15$$.$b$, $self$jscomp$15$$.$h$.start()).then(function() {
    var $eventTarget$jscomp$1_messenger$jscomp$1$$ = $self$jscomp$15$$.$h$.networks;
    ($eventTarget$jscomp$1_messenger$jscomp$1$$ = $self$jscomp$15$$.$i$ && $eventTarget$jscomp$1_messenger$jscomp$1$$.get($self$jscomp$15$$.$i$) || null) ? "Connected" === $eventTarget$jscomp$1_messenger$jscomp$1$$.ConnectionState ? ($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Target Wi-Fi network already connected."), $self$jscomp$15$$.$j$()) : $self$jscomp$15$$.$A$ ? ($self$jscomp$15$$.$logEvent$(1), $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$15$$, 
    2), $self$jscomp$15$$.$showAutoSwitchUi$(1), $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($self$jscomp$15$$.$c$, $goog$Timer$promise$$(25E3)).then($self$jscomp$15$$.$u$.bind($self$jscomp$15$$)), $self$jscomp$15$$.$a$.$a$.$b$.startConnect($self$jscomp$15$$.$i$)) : $self$jscomp$15$$.$u$() : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$15$$, 11), $castApp$log$error$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Target Wi-Fi network not found."), 
    $self$jscomp$15$$.$a$.$g$());
  });
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$m$ = function $$castApp$core$WiFiSwitchStateBase$$$$$m$$() {
  this.$g$ = 1;
  this.$i$ = null;
  var $promises$jscomp$7_subStateTasks$$ = this.$c$;
  this.$c$ = new $castApp$AsyncTaskManager$$;
  var $promises$jscomp$7_subStateTasks$$ = [$JSCompiler_StaticMethods_cancelPendingTasks$$($promises$jscomp$7_subStateTasks$$)], $messenger$jscomp$2_wiFiMonitor$jscomp$1$$ = this.$h$;
  this.$h$ = null;
  if ($messenger$jscomp$2_wiFiMonitor$jscomp$1$$) {
    var $eventTarget$jscomp$2$$ = $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.$a$;
    $eventTarget$jscomp$2$$.$unlisten$("connected", this.$handleWiFiMonitorConnectedEvent$, !0, this);
    $eventTarget$jscomp$2$$.listen("added", this.$s$, !0, this);
    $promises$jscomp$7_subStateTasks$$.push($messenger$jscomp$2_wiFiMonitor$jscomp$1$$.stop());
  }
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.removeListener("WiFiSwitching.Proceed", this.$o$);
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.removeListener("WiFiSwitching.RetryConnection", this.$l$);
  $messenger$jscomp$2_wiFiMonitor$jscomp$1$$.removeListener("WiFiConfig.Retry", this.$l$);
  return $goog$Promise$all$$($promises$jscomp$7_subStateTasks$$);
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$handleWiFiMonitorConnectedEvent$ = function $$castApp$core$WiFiSwitchStateBase$$$$$handleWiFiMonitorConnectedEvent$$($event$jscomp$19$$) {
  if ($JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$(this, $event$jscomp$19$$)) {
    switch($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Connection to the target Wi-Fi network detected."), this.$g$) {
      case 2:
        this.$logEvent$(2);
        this.$j$();
        break;
      case 6:
        this.$logEvent$(4), this.$j$();
    }
  }
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$s$ = function $$castApp$core$WiFiSwitchStateBase$$$$$s$$($event$jscomp$20$$) {
  $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$(this, $event$jscomp$20$$) && ($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Target Wi-Fi network detected."), 1 === this.$g$ && (this.$i$ = $event$jscomp$20$$.$a$.GUID));
};
var $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$ = function $$JSCompiler_StaticMethods_eventMatchesTargetNetwork_$$$($JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$, $event$jscomp$21_wiFi$$) {
  $event$jscomp$21_wiFi$$ = $event$jscomp$21_wiFi$$.$a$.WiFi;
  return $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$v$ && !$castApp$core$utils$bssidsMatch$$($event$jscomp$21_wiFi$$.BSSID, $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$v$) || $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$w$ && $event$jscomp$21_wiFi$$.SSID !== $JSCompiler_StaticMethods_eventMatchesTargetNetwork_$self$$.$w$ ? !1 : !0;
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$u$ = function $$castApp$core$WiFiSwitchStateBase$$$$$u$$() {
  this.$logEvent$(3);
  $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 5);
  this.$showManualSwitchUi$(1);
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$D$ = function $$castApp$core$WiFiSwitchStateBase$$$$$D$$() {
  var $self$jscomp$17$$ = this;
  $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$17$$, 6);
  $self$jscomp$17$$.$showManualSwitchUi$(2);
  var $targetNetworkProperties$$ = $self$jscomp$17$$.$h$.networks.get(this.$i$);
  $targetNetworkProperties$$ && "Connected" === $targetNetworkProperties$$.ConnectionState ? $self$jscomp$17$$.$j$() : $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($self$jscomp$17$$.$c$, $goog$Timer$promise$$(1E4)).then(function() {
    $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$17$$, 7);
    $self$jscomp$17$$.$showManualSwitchUi$(3);
  });
};
var $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$$ = function $$JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$$$($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$) {
  var $resolver$jscomp$19$$ = $goog$Promise$withResolver$$();
  $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$c$, $resolver$jscomp$19$$.$a$);
  var $currentConnectionTask$$ = null, $tryToConnect$$ = function $$tryToConnect$$$($delay$jscomp$3$$) {
    $currentConnectionTask$$ = $goog$Timer$promise$$($delay$jscomp$3$$).then($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$.bind($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$)).then(function($currentConnectionTask$$) {
      $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$logEvent$(5);
      $resolver$jscomp$19$$.$b$($currentConnectionTask$$);
    }, function($currentConnectionTask$$) {
      $currentConnectionTask$$ instanceof $castApp$core$Http$HttpStatusError$$ ? $tryToConnect$$(2E3) : $currentConnectionTask$$ instanceof $castApp$core$SetupApiClient$VerificationError$$ && ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.$a$, 9), $resolver$jscomp$19$$.$c$($currentConnectionTask$$));
    });
  };
  $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$19$$.$a$, function() {
    if ($currentConnectionTask$$) {
      var $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$ = $currentConnectionTask$$;
      $currentConnectionTask$$ = null;
      $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$self$$.cancel();
    }
  });
  $tryToConnect$$(0);
  return $resolver$jscomp$19$$.$a$;
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$j$ = function $$castApp$core$WiFiSwitchStateBase$$$$$j$$() {
  var $self$jscomp$19$$ = this;
  6 === $self$jscomp$19$$.$g$ || 9 === $self$jscomp$19$$.$g$ ? ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$19$$, 8), this.$showManualSwitchUi$(2)) : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$19$$, 3), this.$showAutoSwitchUi$(1));
  var $retryLoopPromise$$ = $JSCompiler_StaticMethods_runDeviceConnectionRetryLoop_$$($self$jscomp$19$$).then(function($retryLoopPromise$$) {
    $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$($self$jscomp$19$$, 11);
    $castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Device connection successful.");
    $self$jscomp$19$$.$castApp_core_WiFiSwitchStateBase_prototype$finish$($retryLoopPromise$$);
  }, this.$B$);
  $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$($self$jscomp$19$$.$c$, $goog$Timer$promise$$(12E4)).then(function() {
    $castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "Device connection timed out.");
    $retryLoopPromise$$.cancel();
  });
};
$castApp$core$WiFiSwitchStateBase$$.prototype.$C$ = function $$castApp$core$WiFiSwitchStateBase$$$$$C$$($badDevice_err$jscomp$45$$) {
  $castApp$log$infoWithCause$$($castApp$core$WiFiSwitchStateBase$logger_$$, $badDevice_err$jscomp$45$$, "Device connection failed.");
  $badDevice_err$jscomp$45$$ = $badDevice_err$jscomp$45$$ instanceof $castApp$core$SetupApiClient$VersionError$$ || $badDevice_err$jscomp$45$$ instanceof $castApp$core$SetupApiClient$VerificationError$$;
  8 === this.$g$ ? $badDevice_err$jscomp$45$$ ? ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 10), this.$showManualSwitchUi$(5)) : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 9), this.$showManualSwitchUi$(4)) : $badDevice_err$jscomp$45$$ ? ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 10), this.$showAutoSwitchUi$(3)) : ($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$(this, 
  4), this.$showAutoSwitchUi$(2));
};
var $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$ = function $$JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$$$($JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$, $newSubState_tasks$$) {
  $newSubState_tasks$$ !== $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$g$ && ($castApp$log$info$$($castApp$core$WiFiSwitchStateBase$logger_$$, "New SubState: " + $newSubState_tasks$$), $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$g$ = $newSubState_tasks$$, $newSubState_tasks$$ = $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$c$, $JSCompiler_StaticMethods_castApp_core_WiFiSwitchStateBase_prototype$setSubState_$self$$.$c$ = 
  new $castApp$AsyncTaskManager$$, $JSCompiler_StaticMethods_cancelPendingTasks$$($newSubState_tasks$$));
};
var $castApp$core$HotSpotConnectionState$$ = function $$castApp$core$HotSpotConnectionState$$$($stateManager$jscomp$7$$) {
  this.$f$ = $JSCompiler_StaticMethods_readCommonState$$($stateManager$jscomp$7$$).device;
  $castApp$core$WiFiSwitchStateBase$$.call(this, $stateManager$jscomp$7$$, null, this.$f$.bssid);
};
$goog$inherits$$($castApp$core$HotSpotConnectionState$$, $castApp$core$WiFiSwitchStateBase$$);
var $castApp$core$HotSpotConnectionState$LOG_EVENT_MAP_$$ = new $goog$structs$Map$$(1, 4, 2, 5, 3, 6, 4, 7, 5, 8), $castApp$core$HotSpotConnectionState$logger_$$ = $castApp$log$getLogger$$("core.HotSpotConnectionState");
$JSCompiler_prototypeAlias$$ = $castApp$core$HotSpotConnectionState$$.prototype;
$JSCompiler_prototypeAlias$$.$handleWiFiMonitorConnectedEvent$ = function $$JSCompiler_prototypeAlias$$$$handleWiFiMonitorConnectedEvent$$($event$jscomp$22$$) {
  var $wiFi$jscomp$1$$ = $event$jscomp$22$$.$a$.WiFi, $commonState$jscomp$6$$ = null;
  $castApp$core$utils$bssidsMatch$$($wiFi$jscomp$1$$.BSSID, this.$f$.bssid) ? ($commonState$jscomp$6$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$a$), $commonState$jscomp$6$$.connectedHotSpotBssid = $wiFi$jscomp$1$$.BSSID) : $castApp$core$utils$isEurekaHotSpot$$($event$jscomp$22$$.$a$) ? $castApp$log$info$$($castApp$core$HotSpotConnectionState$logger_$$, "Not saving connected Wi-Fi network because it is a Cast device hotspot.") : ($commonState$jscomp$6$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$a$), 
  $commonState$jscomp$6$$.originalWiFiNetwork = {ssid:$wiFi$jscomp$1$$.SSID, bssid:$wiFi$jscomp$1$$.BSSID});
  $commonState$jscomp$6$$ && $JSCompiler_StaticMethods_writeCommonState$$(this.$a$, $commonState$jscomp$6$$);
  $castApp$core$HotSpotConnectionState$$.$superClass_$.$handleWiFiMonitorConnectedEvent$.call(this, $event$jscomp$22$$);
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$$() {
  var $env$jscomp$4$$ = this.$a$.$a$;
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $castApp$core$SetupApiClient$createAndVerify$$($env$jscomp$4$$.$g$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$("192.168.255.249"), $env$jscomp$4$$.$b$, {ssid:this.$f$.ssid, bssid:this.$f$.bssid}, $env$jscomp$4$$.$h$()));
};
$JSCompiler_prototypeAlias$$.$showAutoSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showAutoSwitchUi$$($state$jscomp$20$$) {
  var $env$jscomp$5$$ = this.$a$.$a$, $messenger$jscomp$3$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this), $protocolDeviceType$jscomp$1$$ = $castApp$core$utils$getProtocolDeviceType$$(this.$f$.type);
  $messenger$jscomp$3$$.sendMessage(new $castApp$protocol$SetupStart$ShowDevice$$(1 === $state$jscomp$20$$ && 3 || 2 === $state$jscomp$20$$ && 4 || 3 === $state$jscomp$20$$ && 5 || null, $protocolDeviceType$jscomp$1$$, this.$f$.name));
  3 === $state$jscomp$20$$ && $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_waitForMessage$$($messenger$jscomp$3$$, "BadDeviceAck")).then($env$jscomp$5$$.$f$.bind($env$jscomp$5$$));
};
$JSCompiler_prototypeAlias$$.$showManualSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showManualSwitchUi$$($state$jscomp$21$$) {
  var $env$jscomp$6$$ = this.$a$.$a$, $messenger$jscomp$4$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $messenger$jscomp$4$$.sendMessage(new $castApp$protocol$WiFiSwitching$ConnectHotSpot$$($state$jscomp$21$$, this.$f$.name, this.$f$.ssid));
  5 === $state$jscomp$21$$ && $JSCompiler_StaticMethods_castApp_AsyncTaskManager_prototype$addTask$$(this.$c$, $JSCompiler_StaticMethods_waitForMessage$$($messenger$jscomp$4$$, "BadDeviceAck")).then($env$jscomp$6$$.$f$.bind($env$jscomp$6$$));
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$finish$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$finish$$($setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$) {
  $setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$ = $setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$.getState();
  this.$a$.$h$($setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$);
  $setupApiClient$jscomp$11_setupApiClientState$jscomp$2$$.eurekaInfoState.features.supportsDisplay ? $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$a$, new $castApp$core$storage$SetupState$$(3)) : $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$a$, new $castApp$core$storage$SetupState$$(4));
};
$JSCompiler_prototypeAlias$$.$logEvent$ = function $$JSCompiler_prototypeAlias$$$$logEvent$$($eventType$jscomp$13_logEventType$$) {
  ($eventType$jscomp$13_logEventType$$ = $castApp$core$HotSpotConnectionState$LOG_EVENT_MAP_$$.get($eventType$jscomp$13_logEventType$$)) && $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$a$, $eventType$jscomp$13_logEventType$$);
};
var $castApp$core$waitForDeviceReboot$$ = function $$castApp$core$waitForDeviceReboot$$$($ssdpUdn$jscomp$2$$, $networkingApi$jscomp$10$$, $eventPageClient$jscomp$4$$, $http$jscomp$9$$, $win$jscomp$19$$) {
  var $resolver$jscomp$20$$ = $goog$Promise$withResolver$$(), $deviceMonitor$jscomp$1$$ = new $castApp$core$NewDeviceMonitorImpl$$($networkingApi$jscomp$10$$, $eventPageClient$jscomp$4$$, $http$jscomp$9$$, $win$jscomp$19$$), $checkSsdpUdnMatch$$ = function $$checkSsdpUdnMatch$$$($networkingApi$jscomp$10$$) {
    return $networkingApi$jscomp$10$$.$setupApiClient$.getState().eurekaInfoState.ssdpUdn === $ssdpUdn$jscomp$2$$;
  }, $handleEvent$$ = function $$handleEvent$$$($ssdpUdn$jscomp$2$$) {
    ($ssdpUdn$jscomp$2$$ = $goog$array$find$$($ssdpUdn$jscomp$2$$.devices, $checkSsdpUdnMatch$$)) && $resolver$jscomp$20$$.$b$($ssdpUdn$jscomp$2$$.ipAddress);
  };
  $deviceMonitor$jscomp$1$$.listen("devices", $handleEvent$$);
  var $pollingInterval$$ = null;
  $deviceMonitor$jscomp$1$$.start().then(function() {
    $pollingInterval$$ = setInterval(function() {
      $JSCompiler_StaticMethods_startDeviceMonitor$$($deviceMonitor$jscomp$1$$.$g$);
      $deviceMonitor$jscomp$1$$.$rescan_$();
    }, 5E3);
  });
  var $timeoutId$jscomp$2$$ = setTimeout($resolver$jscomp$20$$.$c$.bind($resolver$jscomp$20$$), 18E4);
  return $JSCompiler_StaticMethods_thenAlways$$($resolver$jscomp$20$$.$a$, function() {
    clearTimeout($timeoutId$jscomp$2$$);
    clearInterval($pollingInterval$$);
    $deviceMonitor$jscomp$1$$.$unlisten$("devices", $handleEvent$$);
    $deviceMonitor$jscomp$1$$.stop();
  });
};
var $castApp$core$OtaState$$ = function $$castApp$core$OtaState$$$($stateManager$jscomp$8$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$8$$, this.$i$.bind(this), null);
  this.$c$ = null;
  this.$l$ = 0;
  this.$f$ = null;
  this.$h$ = 0;
};
$goog$inherits$$($castApp$core$OtaState$$, $castApp$core$SetupState$$);
var $castApp$core$OtaState$logger_$$ = $castApp$log$getLogger$$("core.OtaState");
$castApp$core$OtaState$$.prototype.$i$ = function $$castApp$core$OtaState$$$$$i$$() {
  $castApp$log$info$$($castApp$core$OtaState$logger_$$, "starting");
  var $self$jscomp$20$$ = this;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$20$$.$a$, 30);
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$(this.$a$)).then(function($setupApiClient$jscomp$13$$) {
    $self$jscomp$20$$.$c$ = $setupApiClient$jscomp$13$$;
    $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$20$$).sendMessage(new $castApp$protocol$MessageWithDeviceType$$("OtaUpdate.Pending", $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$20$$.$a$)));
    $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$($self$jscomp$20$$, 0);
  });
};
var $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$ = function $$JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$, $delay$jscomp$4$$) {
  var $requestCounter$$ = 0;
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$b$, $goog$Timer$promise$$($delay$jscomp$4$$)).then(function() {
    $requestCounter$$ = ++$JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$l$;
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$b$, $JSCompiler_StaticMethods_getEurekaInfo$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$c$, {options:["ota_status", "setup.setup_state"]}));
  }).then(function($delay$jscomp$4$$) {
    var $requestCounter$$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$c$), $eurekaInfo$jscomp$17$$ = 0;
    7 <= $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$c$.$a$ && ($eurekaInfo$jscomp$17$$ = $delay$jscomp$4$$.ota_status.download_progress);
    if ($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$f$ !== $requestCounter$$.setupState || $eurekaInfo$jscomp$17$$ !== $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$h$) {
      $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$f$ = $requestCounter$$.setupState, $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$h$ = $eurekaInfo$jscomp$17$$, $castApp$log$info$$($castApp$core$OtaState$logger_$$, "OTA status: setup_state= " + $requestCounter$$.setupState + ", progress=" + $eurekaInfo$jscomp$17$$ + "%"), 60 === $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$f$ && 
      $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$g$();
    }
    $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$, 3E3);
  }), function($delay$jscomp$4$$) {
    $castApp$utils$rethrowIfCancellationError$$($delay$jscomp$4$$);
    $castApp$log$infoWithCause$$($castApp$core$OtaState$logger_$$, $delay$jscomp$4$$, "Request #" + $requestCounter$$ + " failed.");
    $delay$jscomp$4$$ = $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$c$.getState().eurekaInfoState.ssdpUdn;
    var $err$jscomp$46_ssdpUdn$jscomp$3$$ = $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$a$.$a$;
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$b$, $castApp$core$waitForDeviceReboot$$($delay$jscomp$4$$, $err$jscomp$46_ssdpUdn$jscomp$3$$.$b$, $err$jscomp$46_ssdpUdn$jscomp$3$$.$i$, $err$jscomp$46_ssdpUdn$jscomp$3$$.$g$, $err$jscomp$46_ssdpUdn$jscomp$3$$.window)).then($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$g$.bind($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$), 
    $JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$.$j$.bind($JSCompiler_StaticMethods_castApp_core_OtaState_prototype$scheduleEurekaInfoRequest_$self$$));
  });
};
$castApp$core$OtaState$$.prototype.$g$ = function $$castApp$core$OtaState$$$$$g$$() {
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$a$, 31);
  var $messenger$jscomp$5$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $JSCompiler_StaticMethods_waitForMessage$$($messenger$jscomp$5$$, "OtaUpdate.Proceed")).then(function() {
    $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$(this.$a$);
  }.bind(this));
  $messenger$jscomp$5$$.sendMessage(new $castApp$protocol$MessageWithDeviceType$$("OtaUpdate.Done", $JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$a$)));
};
$castApp$core$OtaState$$.prototype.$j$ = function $$castApp$core$OtaState$$$$$j$$() {
  $castApp$log$info$$($castApp$core$OtaState$logger_$$, "Gave up on ever seeing the device.");
};
var $castApp$core$SetupStateManager$$ = function $$castApp$core$SetupStateManager$$$($env$jscomp$8$$, $ui$jscomp$2$$, $storedSession$$) {
  this.$f$ = new $castApp$StartStoppable$$(this.$m$.bind(this), this.$l$.bind(this));
  this.$a$ = $env$jscomp$8$$;
  this.$j$ = $ui$jscomp$2$$;
  this.$b$ = $storedSession$$;
  this.$c$ = null;
  this.$i$ = new $goog$events$EventTarget$$;
  $ui$jscomp$2$$.$a$.$a$.addListener("RestartSetup", this.$o$.bind(this));
  $ui$jscomp$2$$.$a$.$a$.addListener("GoToDeviceList", this.$a$.$f$.bind(this.$a$));
}, $castApp$core$SetupStateManager$NewStateEvent$$ = function $$castApp$core$SetupStateManager$NewStateEvent$$$($state$jscomp$22$$) {
  $goog$events$Event$$.call(this, "newState");
  this.state = $state$jscomp$22$$;
};
$goog$inherits$$($castApp$core$SetupStateManager$NewStateEvent$$, $goog$events$Event$$);
var $castApp$core$SetupStateManager$logger_$$ = $castApp$log$getLogger$$("core.SetupStateManager");
$castApp$core$SetupStateManager$$.prototype.start = function $$castApp$core$SetupStateManager$$$$start$() {
  return this.$f$.start();
};
$castApp$core$SetupStateManager$$.prototype.stop = function $$castApp$core$SetupStateManager$$$$stop$() {
  return this.$f$.stop();
};
var $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$) {
  var $commonState$jscomp$7_eventPageMsg$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$), $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$ = $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$b$.setupApiClientState || null, $deviceIpAddress$jscomp$3$$ = $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.deviceIpAddress, $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$ = 
  $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.eurekaInfoState;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$, $commonState$jscomp$7_eventPageMsg$$.device && $commonState$jscomp$7_eventPageMsg$$.device.bssid ? 25 : 28);
  $commonState$jscomp$7_eventPageMsg$$ = new $castApp$eventPage$Message$$("deviceJustSetUp");
  $commonState$jscomp$7_eventPageMsg$$.deviceJustSetUp = new $castApp$eventPage$Message$DeviceJustSetUp$$($deviceIpAddress$jscomp$3$$, $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.name, $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.ssdpUdn, $eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.modelName);
  var $capabilities$$ = new $castApp$eventPage$Message$DeviceCapabilities$$;
  $capabilities$$.audioOutSupported = !0;
  $capabilities$$.videoOutSupported = !!$eurekaInfoState$jscomp$5_setupApiClientState$jscomp$3$$.features.supportsDisplay;
  $commonState$jscomp$7_eventPageMsg$$.deviceJustSetUp.capabilities = $capabilities$$;
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$a$.$l$.setItem("showDeviceBanner", $deviceIpAddress$jscomp$3$$);
  $castApp$core$storage$removeSetupSession$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$a$.$a$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$b$);
  $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$f$, $castApp$utils$setPromiseExpiration$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$a$.$i$.sendMessage($commonState$jscomp$7_eventPageMsg$$), 10000)), function() {
    $JSCompiler_StaticMethods_thenAlways$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.stop(), function() {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$finish$self$$.$a$.$f$();
    });
  });
}, $JSCompiler_StaticMethods_getProtocolDeviceType$$ = function $$JSCompiler_StaticMethods_getProtocolDeviceType$$$($JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$) {
  return ($JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$ = $JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$.$b$.commonState && $JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$.$b$.commonState.device && $JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$.$b$.commonState.device.type) ? $castApp$core$utils$getProtocolDeviceType$$($JSCompiler_StaticMethods_getProtocolDeviceType$self_deviceType$jscomp$9$$) : 
  2;
}, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$) {
  var $stateIo$$ = {read:function() {
    return $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$b$.setupApiClientState || null;
  }, write:$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$h$.bind($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$)};
  return $castApp$core$SetupApiClient$create$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$a$.$g$, $stateIo$$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$self$$.$a$.$h$());
};
$castApp$core$SetupStateManager$$.prototype.$h$ = function $$castApp$core$SetupStateManager$$$$$h$$($newStateData$$) {
  $newStateData$$ ? this.$b$.setupApiClientState = $newStateData$$ : delete this.$b$.setupApiClientState;
  $castApp$core$storage$writeSetupSession$$(this.$a$.$a$, this.$b$);
};
var $JSCompiler_StaticMethods_readCommonState$$ = function $$JSCompiler_StaticMethods_readCommonState$$$($JSCompiler_StaticMethods_readCommonState$self$$) {
  return $JSCompiler_StaticMethods_readCommonState$self$$.$b$.commonState || new $castApp$core$storage$CommonSetupState$$;
}, $JSCompiler_StaticMethods_writeCommonState$$ = function $$JSCompiler_StaticMethods_writeCommonState$$$($JSCompiler_StaticMethods_writeCommonState$self$$, $newStateData$jscomp$1$$) {
  $newStateData$jscomp$1$$ ? $JSCompiler_StaticMethods_writeCommonState$self$$.$b$.commonState = $newStateData$jscomp$1$$ : delete $JSCompiler_StaticMethods_writeCommonState$self$$.$b$.commonState;
  $castApp$core$storage$writeSetupSession$$($JSCompiler_StaticMethods_writeCommonState$self$$.$a$.$a$, $JSCompiler_StaticMethods_writeCommonState$self$$.$b$);
}, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$, $newStateData$jscomp$3$$) {
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$c$.stop().then(function() {
    if ($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$b$.states) {
      var $states$$ = $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$b$.states;
      $states$$.all = $states$$.all.slice(0, $states$$.current + 1);
      $states$$.all.push($newStateData$jscomp$3$$);
      $states$$.current = $states$$.all.length - 1;
    } else {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$b$.states = new $castApp$core$storage$SetupStateCollection$$(0, [$newStateData$jscomp$3$$]);
    }
    $castApp$core$storage$writeSetupSession$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$a$.$a$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$b$);
    $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$c$ = $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$a$.$j$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$, $newStateData$jscomp$3$$.type);
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$i$, new $castApp$core$SetupStateManager$NewStateEvent$$($newStateData$jscomp$3$$.type));
    $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$f$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$c$.start()), function($states$$) {
      if ($states$$ instanceof $goog$Promise$CancellationError$$) {
        switch($castApp$log$info$$($castApp$core$SetupStateManager$logger_$$, "State " + $newStateData$jscomp$3$$.type + " start canceled."), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$f$.getState()) {
          case "starting":
          case "started":
            $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$g$();
        }
      } else {
        $castApp$log$errorWithCause$$($castApp$core$SetupStateManager$logger_$$, $states$$, 'Failed to start state "' + $newStateData$jscomp$3$$.type + '".'), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$self$$.$g$();
      }
    });
  });
};
$castApp$core$SetupStateManager$$.prototype.$g$ = function $$castApp$core$SetupStateManager$$$$$g$$() {
  $castApp$log$info$$($castApp$core$SetupStateManager$logger_$$, "Entering Generic Setup Failure state.");
  $castApp$core$storage$removeSetupSession$$(this.$a$.$a$, this.$b$);
  this.$j$.$a$.$a$.sendMessage(new $castApp$protocol$MessageWithDeviceType$$("ShowGenericSetupError", $JSCompiler_StaticMethods_getProtocolDeviceType$$(this)));
  $JSCompiler_StaticMethods_thenCatch$$(this.stop(), $goog$nullFunction$$);
};
var $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$$($JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$self$$, $eventType$jscomp$14$$) {
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$self$$.$a$.$c$.$b$($eventType$jscomp$14$$);
};
$castApp$core$SetupStateManager$$.prototype.$m$ = function $$castApp$core$SetupStateManager$$$$$m$$() {
  var $commonState$jscomp$8_stateType$jscomp$1$$ = this.$b$.states.all[this.$b$.states.current].type;
  this.$c$ = this.$a$.$j$(this, $commonState$jscomp$8_stateType$jscomp$1$$);
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$i$, new $castApp$core$SetupStateManager$NewStateEvent$$($commonState$jscomp$8_stateType$jscomp$1$$));
  null === this.$a$.$a$.getItem("setupNoCountryDetection") && ($commonState$jscomp$8_stateType$jscomp$1$$ = $JSCompiler_StaticMethods_readCommonState$$(this), $commonState$jscomp$8_stateType$jscomp$1$$.country || $commonState$jscomp$8_stateType$jscomp$1$$.connectedHotSpotBssid || $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$f$, this.$j$.$a$.$a$.sendRequest(new $castApp$protocol$DetectCountry$Request$$)).then(function($commonState$jscomp$8_stateType$jscomp$1$$) {
    var $rawMsg$jscomp$25$$ = $JSCompiler_StaticMethods_readCommonState$$(this);
    $rawMsg$jscomp$25$$.country || ($rawMsg$jscomp$25$$.country = $commonState$jscomp$8_stateType$jscomp$1$$.countryCode, $JSCompiler_StaticMethods_writeCommonState$$(this, $rawMsg$jscomp$25$$));
  }.bind(this)));
  return this.$c$.start();
};
$castApp$core$SetupStateManager$$.prototype.$l$ = function $$castApp$core$SetupStateManager$$$$$l$$() {
  var $currentState$$ = this.$c$;
  this.$c$ = null;
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$i$, new $castApp$core$SetupStateManager$NewStateEvent$$(null));
  return $currentState$$.stop();
};
$castApp$core$SetupStateManager$$.prototype.$o$ = function $$castApp$core$SetupStateManager$$$$$o$$() {
  $castApp$core$storage$removeSetupSession$$(this.$a$.$a$, this.$b$);
  this.$a$.$m$();
};
var $castApp$core$SetupStartState$$ = function $$castApp$core$SetupStartState$$$($stateManager$jscomp$9$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$9$$, this.$w$.bind(this), this.$v$.bind(this));
  this.$c$ = 1;
  this.$f$ = this.$h$ = null;
  this.$g$ = new $goog$structs$Map$$;
  this.$i$ = new $goog$structs$Map$$;
  this.$j$ = null;
  this.$s$ = this.$B$.bind(this);
  this.$l$ = this.$u$.bind(this);
};
$goog$inherits$$($castApp$core$SetupStartState$$, $castApp$core$SetupState$$);
var $castApp$core$SetupStartState$logger_$$ = $castApp$log$getLogger$$("core.SetupStartState");
$castApp$core$SetupStartState$$.prototype.$w$ = function $$castApp$core$SetupStartState$$$$$w$$() {
  var $self$jscomp$25$$ = this;
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$25$$, 1);
  $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$25$$).addListener("SetupStart.Proceed", $self$jscomp$25$$.$s$);
  var $startTasks$$ = [];
  $startTasks$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$25$$.$b$, this.$a$.$a$.$c$.$a$()).then(function($startTasks$$) {
    $self$jscomp$25$$.$j$ = $startTasks$$;
  }));
  var $commonState$jscomp$10$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$25$$.$a$);
  $commonState$jscomp$10$$.device && !$commonState$jscomp$10$$.pinned && ($commonState$jscomp$10$$.device = void 0, $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$25$$.$a$, $commonState$jscomp$10$$));
  var $env$jscomp$9_wiFiEventTarget$$ = $self$jscomp$25$$.$a$.$a$;
  $self$jscomp$25$$.$f$ = new $castApp$core$NewDeviceMonitorImpl$$($env$jscomp$9_wiFiEventTarget$$.$b$, $env$jscomp$9_wiFiEventTarget$$.$i$, $env$jscomp$9_wiFiEventTarget$$.$g$, $env$jscomp$9_wiFiEventTarget$$.window);
  $env$jscomp$9_wiFiEventTarget$$ = $self$jscomp$25$$.$f$.$f$.$a$;
  $env$jscomp$9_wiFiEventTarget$$.listen("added", $self$jscomp$25$$.$m$, !0, $self$jscomp$25$$);
  $env$jscomp$9_wiFiEventTarget$$.listen("connected", $self$jscomp$25$$.$o$, !0, $self$jscomp$25$$);
  $self$jscomp$25$$.$f$.listen("devices", this.$l$);
  $startTasks$$.push($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$25$$.$b$, $self$jscomp$25$$.$f$.start()));
  $JSCompiler_StaticMethods_waitUntilStarted$$($self$jscomp$25$$.$b$).then(function() {
    $commonState$jscomp$10$$.pinned && $commonState$jscomp$10$$.device ? ($self$jscomp$25$$.$h$ = $commonState$jscomp$10$$.device, $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$25$$, 5), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$25$$)) : 0 != $self$jscomp$25$$.$i$.$c$ ? $JSCompiler_StaticMethods_chooseEthernetDevice_$$($self$jscomp$25$$, $self$jscomp$25$$.$i$.$__iterator__$(!1).next()) : $goog$iter$every$$($self$jscomp$25$$.$g$, 
    function($startTasks$$) {
      if ("NotConnected" === $startTasks$$.ConnectionState) {
        return !0;
      }
      $JSCompiler_StaticMethods_chooseWiFiDevice_$$($self$jscomp$25$$, $startTasks$$);
      return !1;
    }) && ($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$25$$, 2), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$25$$), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$25$$.$b$, $goog$Timer$promise$$(5E3)).then($self$jscomp$25$$.$A$.bind($self$jscomp$25$$)));
  });
  return $goog$Promise$all$$($startTasks$$);
};
$castApp$core$SetupStartState$$.prototype.$v$ = function $$castApp$core$SetupStartState$$$$$v$$() {
  this.$c$ = 1;
  this.$h$ = null;
  this.$g$ = new $goog$structs$Map$$;
  this.$i$ = new $goog$structs$Map$$;
  this.$j$ = null;
  $JSCompiler_StaticMethods_getUiMessenger$$(this).removeListener("SetupStart.Proceed", this.$s$);
  if (!this.$f$) {
    return $goog$Promise$resolve$$();
  }
  var $deviceMonitor$jscomp$2$$ = this.$f$;
  this.$f$ = null;
  var $wiFiEventTarget$jscomp$1$$ = $deviceMonitor$jscomp$2$$.$f$.$a$;
  $wiFiEventTarget$jscomp$1$$.$unlisten$("added", this.$m$, !0, this);
  $wiFiEventTarget$jscomp$1$$.$unlisten$("connected", this.$o$, !0, this);
  $deviceMonitor$jscomp$2$$.$unlisten$("devices", this.$l$);
  return $deviceMonitor$jscomp$2$$.stop();
};
var $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$self$$, $newSubState$jscomp$1$$) {
  $newSubState$jscomp$1$$ !== $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$self$$.$c$ && ($castApp$log$info$$($castApp$core$SetupStartState$logger_$$, "New SubState: " + $newSubState$jscomp$1$$), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$self$$.$c$ = $newSubState$jscomp$1$$);
}, $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$ = function $$JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$) {
  var $messenger$jscomp$6$$ = $JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$);
  switch($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$.$c$) {
    case 1:
    case 2:
      $messenger$jscomp$6$$.sendMessage(new $castApp$protocol$DeviceDiscovery$ShowScanner$$(!1));
      break;
    case 3:
      $messenger$jscomp$6$$.sendMessage(new $castApp$protocol$DeviceDiscovery$ShowScanner$$(!0));
      break;
    case 4:
      $messenger$jscomp$6$$.sendMessage(new $castApp$protocol$Message$$("DeviceDiscovery.NotFound"));
      break;
    case 5:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 1);
      break;
    case 6:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 2);
      break;
    case 7:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 3);
      break;
    case 8:
      $JSCompiler_StaticMethods_sendShowDeviceMessage_$$($JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$self$$, 4);
  }
}, $JSCompiler_StaticMethods_sendShowDeviceMessage_$$ = function $$JSCompiler_StaticMethods_sendShowDeviceMessage_$$$($JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$, $msg$jscomp$91_state$jscomp$23$$) {
  var $deviceType$jscomp$10$$ = $castApp$core$utils$getProtocolDeviceType$$($JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$h$.type);
  $msg$jscomp$91_state$jscomp$23$$ = new $castApp$protocol$SetupStart$ShowDevice$$($msg$jscomp$91_state$jscomp$23$$, $deviceType$jscomp$10$$, $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$h$.name);
  $msg$jscomp$91_state$jscomp$23$$.otherDevicesExist = 1 < $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$g$.$getCount$() + $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$i$.$getCount$();
  $msg$jscomp$91_state$jscomp$23$$.analyticsOptIn = 3 !== $JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$.$j$;
  $JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_sendShowDeviceMessage_$self$$).sendMessage($msg$jscomp$91_state$jscomp$23$$);
};
$castApp$core$SetupStartState$$.prototype.$A$ = function $$castApp$core$SetupStartState$$$$$A$$() {
  if (2 === this.$c$) {
    if ($castApp$log$info$$($castApp$core$SetupStartState$logger_$$, "Initial scan completed."), 0 === this.$g$.$getCount$()) {
      $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$(this, 3), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$(this), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$b$, $goog$Timer$promise$$(45E3)).then(function() {
        3 === this.$c$ && (this.$f$.stop(), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$(this, 4), $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$(this));
      }.bind(this));
    } else {
      var $strongestHotSpot$$ = $goog$iter$reduce$$(this.$g$, function($strongestHotSpot$$, $next$jscomp$1$$) {
        return "NotConnected" !== $next$jscomp$1$$.ConnectionState ? $next$jscomp$1$$ : ($next$jscomp$1$$.WiFi && $next$jscomp$1$$.WiFi.SignalStrength || -Infinity) < ($strongestHotSpot$$ && $strongestHotSpot$$.WiFi && $strongestHotSpot$$.WiFi.SignalStrength || -Infinity) ? $strongestHotSpot$$ : $next$jscomp$1$$;
      });
      $JSCompiler_StaticMethods_chooseWiFiDevice_$$(this, $strongestHotSpot$$);
    }
  }
};
var $JSCompiler_StaticMethods_chooseWiFiDevice_$$ = function $$JSCompiler_StaticMethods_chooseWiFiDevice_$$$($JSCompiler_StaticMethods_chooseWiFiDevice_$self$$, $hotSpot$jscomp$1_wiFi$jscomp$2$$) {
  $hotSpot$jscomp$1_wiFi$jscomp$2$$ = $hotSpot$jscomp$1_wiFi$jscomp$2$$ && $hotSpot$jscomp$1_wiFi$jscomp$2$$.WiFi;
  var $ssid$jscomp$13$$ = $hotSpot$jscomp$1_wiFi$jscomp$2$$.SSID, $parsedSsid$jscomp$2$$ = $castApp$core$utils$parseCastDeviceSsid$$($ssid$jscomp$13$$);
  $JSCompiler_StaticMethods_chooseWiFiDevice_$self$$.$h$ = new $castApp$core$storage$DeviceToSetUp$$({name:$parsedSsid$jscomp$2$$.name, type:$parsedSsid$jscomp$2$$.type, ssid:$ssid$jscomp$13$$, bssid:$hotSpot$jscomp$1_wiFi$jscomp$2$$.BSSID});
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($JSCompiler_StaticMethods_chooseWiFiDevice_$self$$, 5);
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($JSCompiler_StaticMethods_chooseWiFiDevice_$self$$);
}, $JSCompiler_StaticMethods_chooseEthernetDevice_$$ = function $$JSCompiler_StaticMethods_chooseEthernetDevice_$$$($JSCompiler_StaticMethods_chooseEthernetDevice_$self$$, $device$jscomp$19$$) {
  var $eurekaInfo$jscomp$19$$ = $device$jscomp$19$$.$setupApiClient$.getState().eurekaInfoState;
  $JSCompiler_StaticMethods_chooseEthernetDevice_$self$$.$h$ = new $castApp$core$storage$DeviceToSetUp$$({name:$eurekaInfo$jscomp$19$$.name, type:$eurekaInfo$jscomp$19$$.deviceType, ipAddress:$device$jscomp$19$$.ipAddress});
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($JSCompiler_StaticMethods_chooseEthernetDevice_$self$$, 5);
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($JSCompiler_StaticMethods_chooseEthernetDevice_$self$$);
};
$castApp$core$SetupStartState$$.prototype.$m$ = function $$castApp$core$SetupStartState$$$$$m$$($event$jscomp$24_hotspot$$) {
  $event$jscomp$24_hotspot$$ = $event$jscomp$24_hotspot$$.$a$;
  var $hotSpotIsNew$$ = !$JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.$g$, $event$jscomp$24_hotspot$$.GUID);
  this.$g$.set($event$jscomp$24_hotspot$$.GUID, $event$jscomp$24_hotspot$$);
  5 === this.$c$ ? $hotSpotIsNew$$ && $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$(this) : 3 === this.$c$ && $JSCompiler_StaticMethods_chooseWiFiDevice_$$(this, $event$jscomp$24_hotspot$$);
};
$castApp$core$SetupStartState$$.prototype.$o$ = function $$castApp$core$SetupStartState$$$$$o$$($event$jscomp$25$$) {
  2 !== this.$c$ && 3 !== this.$c$ || $JSCompiler_StaticMethods_chooseWiFiDevice_$$(this, $event$jscomp$25$$.$a$);
};
$castApp$core$SetupStartState$$.prototype.$u$ = function $$castApp$core$SetupStartState$$$$$u$$($event$jscomp$26$$) {
  var $self$jscomp$26$$ = this, $newDevice$$ = null;
  $event$jscomp$26$$.devices.filter(function($event$jscomp$26$$) {
    $event$jscomp$26$$ = $event$jscomp$26$$.$setupApiClient$.getState().eurekaInfoState;
    return $event$jscomp$26$$.features.supportsSetup && $event$jscomp$26$$.ethernetConnected && !$event$jscomp$26$$.tosAccepted;
  }).forEach(function($event$jscomp$26$$) {
    $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($self$jscomp$26$$.$i$, $event$jscomp$26$$.ipAddress) || ($self$jscomp$26$$.$i$.set($event$jscomp$26$$.ipAddress, $event$jscomp$26$$), $newDevice$$ = $newDevice$$ || $event$jscomp$26$$);
  });
  $newDevice$$ && (2 === $self$jscomp$26$$.$c$ || 3 === $self$jscomp$26$$.$c$ ? $JSCompiler_StaticMethods_chooseEthernetDevice_$$($self$jscomp$26$$, $newDevice$$) : 5 === $self$jscomp$26$$.$c$ && $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$26$$));
};
$castApp$core$SetupStartState$$.prototype.$B$ = function $$castApp$core$SetupStartState$$$$$B$$() {
  var $self$jscomp$27$$ = this;
  5 !== $self$jscomp$27$$.$c$ && 8 !== $self$jscomp$27$$.$c$ || $JSCompiler_StaticMethods_requireTosAcceptance_$$($self$jscomp$27$$).then(function() {
    var $commonState$jscomp$11$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$27$$.$a$);
    $commonState$jscomp$11$$.device = $self$jscomp$27$$.$h$;
    $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$27$$.$a$, $commonState$jscomp$11$$);
    if ($commonState$jscomp$11$$.device.bssid) {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$27$$.$a$, 3), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$27$$.$a$, new $castApp$core$storage$SetupState$$(2));
    } else {
      $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$27$$.$a$, 27);
      $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$27$$, 7);
      $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$27$$);
      var $env$jscomp$10$$ = $self$jscomp$27$$.$a$.$a$;
      $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$27$$.$b$, $castApp$core$SetupApiClient$create$$($env$jscomp$10$$.$g$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$($commonState$jscomp$11$$.device.ipAddress), $env$jscomp$10$$.$h$())).then(function($commonState$jscomp$11$$) {
        $self$jscomp$27$$.$a$.$h$($commonState$jscomp$11$$.getState());
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$27$$.$a$, 27);
        $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$27$$.$a$, new $castApp$core$storage$SetupState$$(5));
      }), function() {
        $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($self$jscomp$27$$, 8);
        $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($self$jscomp$27$$);
      });
    }
  });
};
var $JSCompiler_StaticMethods_requireTosAcceptance_$$ = function $$JSCompiler_StaticMethods_requireTosAcceptance_$$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$) {
  var $localStorage$jscomp$2$$ = $JSCompiler_StaticMethods_requireTosAcceptance_$self$$.$a$.$a$.$a$;
  if (null !== $localStorage$jscomp$2$$.getItem("setupTosAccepted")) {
    return $goog$Promise$resolve$$();
  }
  var $analytics$jscomp$3$$ = $JSCompiler_StaticMethods_requireTosAcceptance_$self$$.$a$.$a$.$c$, $promise$jscomp$15$$ = $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$.$b$, $JSCompiler_StaticMethods_waitForMessage$$($JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$), "SetupStart.TosAccepted")).then(function($JSCompiler_StaticMethods_requireTosAcceptance_$self$$) {
    $analytics$jscomp$3$$.$h$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$.analyticsOptIn);
    $localStorage$jscomp$2$$.setItem("setupTosAccepted", "");
  }.bind($JSCompiler_StaticMethods_requireTosAcceptance_$self$$));
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$setSubState_$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$, 6);
  $JSCompiler_StaticMethods_castApp_core_SetupStartState_prototype$updateUi_$$($JSCompiler_StaticMethods_requireTosAcceptance_$self$$);
  return $promise$jscomp$15$$;
};
var $castApp$core$DeviceWiFiMonitor$$ = function $$castApp$core$DeviceWiFiMonitor$$$($setupApiClient$jscomp$15$$) {
  this.$f$ = $setupApiClient$jscomp$15$$;
  this.$b$ = new $goog$events$EventTarget$$;
  this.networks = new $goog$structs$Map$$;
  this.$c$ = !1;
  this.$a$ = new $castApp$StartStoppable$$(function() {
    $JSCompiler_StaticMethods_runScanIteration_$$(this);
    return $goog$Promise$resolve$$();
  }.bind(this), function() {
    this.networks.clear();
    this.$c$ = !1;
    return $goog$Promise$resolve$$();
  }.bind(this));
}, $castApp$core$DeviceWiFiMonitor$Network$$ = function $$castApp$core$DeviceWiFiMonitor$Network$$$($scanResult$$) {
  this.id = $castApp$core$DeviceWiFiMonitor$computeNetworkId$$($scanResult$$);
  this.ssid = $scanResult$$.ssid;
  this.$wpaAuth$ = $scanResult$$.wpa_auth;
  this.$wpaCipher$ = $scanResult$$.wpa_cipher;
  this.$wpaId$ = $scanResult$$.wpa_id;
  this.$bssids$ = new $goog$structs$Set$$;
  this.$signalLevel$ = $scanResult$$.signal_level;
  this.$initialScanComplete$ = this.$has5GhzAccessPoint$ = !1;
  $JSCompiler_StaticMethods_updateFromScanResult$$(this, $scanResult$$);
}, $JSCompiler_StaticMethods_updateFromScanResult$$ = function $$JSCompiler_StaticMethods_updateFromScanResult$$$($JSCompiler_StaticMethods_updateFromScanResult$self$$, $scanResult$jscomp$1$$) {
  $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$($JSCompiler_StaticMethods_updateFromScanResult$self$$.$bssids$, $scanResult$jscomp$1$$.bssid);
  $JSCompiler_StaticMethods_updateFromScanResult$self$$.$signalLevel$ = Math.max($JSCompiler_StaticMethods_updateFromScanResult$self$$.$signalLevel$, $scanResult$jscomp$1$$.signal_level);
  $scanResult$jscomp$1$$.ap_list && $scanResult$jscomp$1$$.ap_list.forEach(function($JSCompiler_StaticMethods_updateFromScanResult$self$$) {
    $JSCompiler_StaticMethods_goog_structs_Collection_prototype$add$$(this.$bssids$, $JSCompiler_StaticMethods_updateFromScanResult$self$$.bssid);
    this.$signalLevel$ = Math.max(this.$signalLevel$, $JSCompiler_StaticMethods_updateFromScanResult$self$$.signal_level);
    this.$has5GhzAccessPoint$ = this.$has5GhzAccessPoint$ || 5000 <= $JSCompiler_StaticMethods_updateFromScanResult$self$$.frequency;
  }.bind($JSCompiler_StaticMethods_updateFromScanResult$self$$));
}, $castApp$core$DeviceWiFiMonitor$ErrorEvent$$ = function $$castApp$core$DeviceWiFiMonitor$ErrorEvent$$$() {
  $goog$events$Event$$.call(this, "error");
};
$goog$inherits$$($castApp$core$DeviceWiFiMonitor$ErrorEvent$$, $goog$events$Event$$);
var $castApp$core$DeviceWiFiMonitor$ScanData_$$ = function $$castApp$core$DeviceWiFiMonitor$ScanData_$$$() {
  this.networks = new $goog$structs$Map$$;
  this.$a$ = 0;
  this.$resolver$ = $goog$Promise$withResolver$$();
}, $castApp$core$DeviceWiFiMonitor$computeNetworkId$$ = function $$castApp$core$DeviceWiFiMonitor$computeNetworkId$$$($scanResultMsg$$) {
  return $scanResultMsg$$.wpa_id ? $scanResultMsg$$.wpa_id.toString() : $scanResultMsg$$.ssid + ":" + $scanResultMsg$$.wpa_auth + ":" + $scanResultMsg$$.wpa_cipher;
}, $castApp$core$DeviceWiFiMonitor$logger_$$ = $castApp$log$getLogger$$("core.DeviceWiFiMonitor");
$castApp$core$DeviceWiFiMonitor$$.prototype.start = function $$castApp$core$DeviceWiFiMonitor$$$$start$() {
  return this.$a$.start();
};
$castApp$core$DeviceWiFiMonitor$$.prototype.stop = function $$castApp$core$DeviceWiFiMonitor$$$$stop$() {
  return this.$a$.stop();
};
var $JSCompiler_StaticMethods_runScanIteration_$$ = function $$JSCompiler_StaticMethods_runScanIteration_$$$($JSCompiler_StaticMethods_runScanIteration_$self$$) {
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$a$, $JSCompiler_StaticMethods_postScanWiFi$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$f$)).then(function() {
    $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$a$, $goog$Timer$promise$$(3E3));
  }).then(function() {
    var $scanData$$ = new $castApp$core$DeviceWiFiMonitor$ScanData_$$;
    $JSCompiler_StaticMethods_runScanIteration_$self$$.$g$($scanData$$);
    return $scanData$$.$resolver$.$a$;
  }).then($JSCompiler_StaticMethods_runScanIteration_$self$$.$h$.bind($JSCompiler_StaticMethods_runScanIteration_$self$$)).then(function() {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$a$, $goog$Timer$promise$$(1E3));
  }).then(function() {
    $JSCompiler_StaticMethods_runScanIteration_$$($JSCompiler_StaticMethods_runScanIteration_$self$$);
  }), function($err$jscomp$49$$) {
    $castApp$utils$rethrowIfCancellationError$$($err$jscomp$49$$);
    $castApp$log$errorWithCause$$($castApp$core$DeviceWiFiMonitor$logger_$$, $err$jscomp$49$$, "Device Wi-Fi scanning failed with.");
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$($JSCompiler_StaticMethods_runScanIteration_$self$$.$b$, new $castApp$core$DeviceWiFiMonitor$ErrorEvent$$);
    $JSCompiler_StaticMethods_runScanIteration_$self$$.stop();
  });
};
$castApp$core$DeviceWiFiMonitor$$.prototype.$g$ = function $$castApp$core$DeviceWiFiMonitor$$$$$g$$($scanData$jscomp$1$$) {
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$a$, $JSCompiler_StaticMethods_getScanResults$$(this.$f$)).then(this.$i$.bind(this, $scanData$jscomp$1$$)).then(function() {
    3 === $scanData$jscomp$1$$.$a$ ? $scanData$jscomp$1$$.$resolver$.$b$($scanData$jscomp$1$$.networks) : $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$(this.$a$, $goog$Timer$promise$$(2E3)).then(this.$g$.bind(this, $scanData$jscomp$1$$));
  }.bind(this)), function($err$jscomp$50$$) {
    $scanData$jscomp$1$$.$resolver$.$c$($err$jscomp$50$$);
  });
};
$castApp$core$DeviceWiFiMonitor$$.prototype.$i$ = function $$castApp$core$DeviceWiFiMonitor$$$$$i$$($scanData$jscomp$2$$, $scanResultsResponse$$) {
  var $scanNetworksAdded$$ = !1, $newNetworkFound$$ = !1;
  $scanResultsResponse$$.filter(function($scanData$jscomp$2$$) {
    return 1 !== $scanData$jscomp$2$$.wpa_auth ? !0 : !$castApp$core$utils$isEurekaHotSpotBssid$$($scanData$jscomp$2$$.bssid);
  }).forEach(function($scanResultsResponse$$) {
    var $scanResult$jscomp$3$$ = $castApp$core$DeviceWiFiMonitor$computeNetworkId$$($scanResultsResponse$$), $network$jscomp$5$$ = $scanData$jscomp$2$$.networks.get($scanResult$jscomp$3$$);
    $network$jscomp$5$$ ? $JSCompiler_StaticMethods_updateFromScanResult$$($network$jscomp$5$$, $scanResultsResponse$$) : ($network$jscomp$5$$ = new $castApp$core$DeviceWiFiMonitor$Network$$($scanResultsResponse$$), $scanData$jscomp$2$$.networks.set($scanResult$jscomp$3$$, $network$jscomp$5$$), $scanNetworksAdded$$ = !0, $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$(this.networks, $scanResult$jscomp$3$$) || (this.networks.set($scanResult$jscomp$3$$, $network$jscomp$5$$), $newNetworkFound$$ = 
    !0));
  }.bind(this));
  $scanData$jscomp$2$$.$a$ = $scanNetworksAdded$$ ? 0 : $scanData$jscomp$2$$.$a$ + 1;
  if ($newNetworkFound$$ || !this.$c$) {
    $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$b$, new $goog$events$Event$$("networksAdded")), this.$c$ = !0;
  }
};
$castApp$core$DeviceWiFiMonitor$$.prototype.$h$ = function $$castApp$core$DeviceWiFiMonitor$$$$$h$$($newNetworks$$) {
  $newNetworks$$.forEach(function($newNetworks$$) {
    $newNetworks$$.$initialScanComplete$ = !0;
  });
  $goog$iter$forEach$$($JSCompiler_StaticMethods_difference$$(new $goog$structs$Set$$(this.networks.$getKeys$()), $newNetworks$$.$getKeys$()), function($networkId$jscomp$1$$) {
    var $disappearedNetwork$$ = this.networks.get($networkId$jscomp$1$$);
    $disappearedNetwork$$.$signalLevel$ = -Infinity;
    $newNetworks$$.set($networkId$jscomp$1$$, $disappearedNetwork$$);
  }.bind(this));
  this.networks = $newNetworks$$;
  $JSCompiler_StaticMethods_goog_events_EventTarget_prototype$dispatchEvent$$(this.$b$, new $goog$events$Event$$("scanCompleted"));
};
var $castApp$core$WiFiConfigState$$ = function $$castApp$core$WiFiConfigState$$$($stateManager$jscomp$10$$) {
  $castApp$core$SetupState$$.call(this, $stateManager$jscomp$10$$, this.$u$.bind(this), this.$s$.bind(this));
  this.$h$ = this.$f$ = this.$c$ = this.$g$ = null;
  this.$o$ = this.$i$.bind(this);
  this.$j$ = this.$v$.bind(this);
  this.$m$ = this.$w$.bind(this);
};
$goog$inherits$$($castApp$core$WiFiConfigState$$, $castApp$core$SetupState$$);
var $castApp$core$WiFiConfigState$logger_$$ = $castApp$log$getLogger$$("core.WiFiConfigState");
$castApp$core$WiFiConfigState$$.prototype.$u$ = function $$castApp$core$WiFiConfigState$$$$$u$$() {
  $castApp$log$info$$($castApp$core$WiFiConfigState$logger_$$, "starting");
  var $self$jscomp$29$$ = this;
  return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$29$$.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($self$jscomp$29$$.$a$)).then(function($messenger$jscomp$7_setupApiClient$jscomp$16$$) {
    $self$jscomp$29$$.$g$ = $messenger$jscomp$7_setupApiClient$jscomp$16$$;
    var $commonState$jscomp$12_result$jscomp$66$$ = null;
    $messenger$jscomp$7_setupApiClient$jscomp$16$$ = $JSCompiler_StaticMethods_getUiMessenger$$($self$jscomp$29$$);
    $commonState$jscomp$12_result$jscomp$66$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$29$$.$a$);
    $self$jscomp$29$$.$f$ = $commonState$jscomp$12_result$jscomp$66$$.connectWiFi || null;
    if ($self$jscomp$29$$.$f$) {
      var $errorUiStateMessage$$ = $castApp$core$utils$createWiFiConfigUiMessage$$($self$jscomp$29$$.$f$, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$29$$.$a$));
      delete $commonState$jscomp$12_result$jscomp$66$$.connectWiFi;
      $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$29$$.$a$, $commonState$jscomp$12_result$jscomp$66$$);
      2 === $self$jscomp$29$$.$f$.$a$ ? $commonState$jscomp$12_result$jscomp$66$$ = $self$jscomp$29$$.$i$() : ($messenger$jscomp$7_setupApiClient$jscomp$16$$.addListener("WiFiConfig.ErrorAck", $self$jscomp$29$$.$o$), $commonState$jscomp$12_result$jscomp$66$$ = $goog$Promise$resolve$$());
      $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$($self$jscomp$29$$, $errorUiStateMessage$$);
    } else {
      $commonState$jscomp$12_result$jscomp$66$$ = $self$jscomp$29$$.$i$(), $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$29$$.$b$, $goog$Timer$promise$$(7000)).then(function() {
        $self$jscomp$29$$.$h$ || $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$($self$jscomp$29$$, new $castApp$protocol$WiFiConfig$Show$$(1, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$29$$.$a$), [], null));
      });
    }
    $messenger$jscomp$7_setupApiClient$jscomp$16$$.addListener("WiFiConfig.Retry", $self$jscomp$29$$.$m$);
    return $commonState$jscomp$12_result$jscomp$66$$;
  });
};
$castApp$core$WiFiConfigState$$.prototype.$i$ = function $$castApp$core$WiFiConfigState$$$$$i$$() {
  if (this.$c$) {
    return $goog$Promise$resolve$$();
  }
  this.$c$ = new $castApp$core$DeviceWiFiMonitor$$(this.$g$);
  this.$c$.$b$.listen("networksAdded", this.$l$, !0, this);
  $JSCompiler_StaticMethods_getUiMessenger$$(this).addListener("WiFiConfig.Connect", this.$j$);
  $JSCompiler_StaticMethods_sendCountryToDevice_$$(this);
  return this.$c$.start();
};
$castApp$core$WiFiConfigState$$.prototype.$s$ = function $$castApp$core$WiFiConfigState$$$$$s$$() {
  this.$h$ = this.$g$ = null;
  var $deviceWiFiMonitor_messenger$jscomp$9$$ = $JSCompiler_StaticMethods_getUiMessenger$$(this);
  $deviceWiFiMonitor_messenger$jscomp$9$$.removeListener("WiFiConfig.Connect", this.$j$);
  $deviceWiFiMonitor_messenger$jscomp$9$$.removeListener("WiFiConfig.Retry", this.$m$);
  $deviceWiFiMonitor_messenger$jscomp$9$$.removeListener("WiFiConfig.ErrorAck", this.$o$);
  return this.$c$ ? (this.$c$.$b$.$unlisten$("networksAdded", this.$l$, !0, this), $deviceWiFiMonitor_messenger$jscomp$9$$ = this.$c$, this.$c$ = null, $deviceWiFiMonitor_messenger$jscomp$9$$.stop()) : $goog$Promise$resolve$$();
};
var $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$ = function $$JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$$($JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$self$$, $msg$jscomp$93$$) {
  $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$self$$.$h$ = $msg$jscomp$93$$;
  $JSCompiler_StaticMethods_getUiMessenger$$($JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$self$$).sendMessage($msg$jscomp$93$$);
};
$castApp$core$WiFiConfigState$$.prototype.$l$ = function $$castApp$core$WiFiConfigState$$$$$l$$() {
  if (this.$h$) {
    $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$WiFiConfig$UpdateNetworks$$(this.$c$.networks.$getValues$().map(function($commonState$jscomp$13$$) {
      return new $castApp$protocol$WiFiConfig$Network$$($commonState$jscomp$13$$.id, $commonState$jscomp$13$$.ssid, $castApp$core$utils$getProtocolSecurity$$($commonState$jscomp$13$$.$wpaAuth$));
    })));
  } else {
    var $commonState$jscomp$13$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$a$), $originalNetworkBssid$$ = $commonState$jscomp$13$$.originalWiFiNetwork && $commonState$jscomp$13$$.originalWiFiNetwork.bssid, $networksForUi$$ = [], $selectedNetwork$jscomp$1$$ = null;
    $goog$iter$forEach$$(this.$c$.networks, function($commonState$jscomp$13$$) {
      var $network$jscomp$8$$ = new $castApp$protocol$WiFiConfig$Network$$($commonState$jscomp$13$$.id, $commonState$jscomp$13$$.ssid, $castApp$core$utils$getProtocolSecurity$$($commonState$jscomp$13$$.$wpaAuth$));
      $networksForUi$$.push($network$jscomp$8$$);
      $originalNetworkBssid$$ && $commonState$jscomp$13$$.$bssids$.contains($originalNetworkBssid$$) && ($selectedNetwork$jscomp$1$$ = $network$jscomp$8$$);
    });
    $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$(this, new $castApp$protocol$WiFiConfig$Show$$(1, $JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$a$), $networksForUi$$, $selectedNetwork$jscomp$1$$));
  }
};
$castApp$core$WiFiConfigState$$.prototype.$v$ = function $$castApp$core$WiFiConfigState$$$$$v$$($rawMsg$jscomp$27$$) {
  var $self$jscomp$31$$ = this, $connectWiFiState$jscomp$1$$ = $JSCompiler_StaticMethods_createConnectWiFiState_$$($self$jscomp$31$$, $rawMsg$jscomp$27$$);
  $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$31$$.$b$, new $goog$Promise$$(function($resolve$jscomp$15$$) {
    $rawMsg$jscomp$27$$.password ? $resolve$jscomp$15$$($JSCompiler_StaticMethods_encryptPassword_$$($self$jscomp$31$$, $rawMsg$jscomp$27$$.password).then(function($rawMsg$jscomp$27$$) {
      $connectWiFiState$jscomp$1$$.msg.enc_passwd = $rawMsg$jscomp$27$$;
    })) : $resolve$jscomp$15$$();
  })).then(function() {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$31$$.$b$, $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$$($self$jscomp$31$$, $connectWiFiState$jscomp$1$$));
  }).then(function($commonState$jscomp$14_warningIsNeeded$$) {
    $commonState$jscomp$14_warningIsNeeded$$ ? ($self$jscomp$31$$.$f$ = $connectWiFiState$jscomp$1$$, $JSCompiler_StaticMethods_sendWiFiConfigShowMsg_$$($self$jscomp$31$$, new $castApp$protocol$WiFiConfig$Show$$(5, $JSCompiler_StaticMethods_getProtocolDeviceType$$($self$jscomp$31$$.$a$), $self$jscomp$31$$.$h$.networks, $rawMsg$jscomp$27$$.network))) : ($commonState$jscomp$14_warningIsNeeded$$ = $JSCompiler_StaticMethods_readCommonState$$($self$jscomp$31$$.$a$), $commonState$jscomp$14_warningIsNeeded$$.connectWiFi = 
    $connectWiFiState$jscomp$1$$, $JSCompiler_StaticMethods_writeCommonState$$($self$jscomp$31$$.$a$, $commonState$jscomp$14_warningIsNeeded$$), $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_postConnectWiFi$$($self$jscomp$31$$.$g$, $connectWiFiState$jscomp$1$$.msg), $goog$nullFunction$$), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$($self$jscomp$31$$.$a$, 15), $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$($self$jscomp$31$$.$a$, 
    new $castApp$core$storage$SetupState$$(7)));
  });
};
var $JSCompiler_StaticMethods_createConnectWiFiState_$$ = function $$JSCompiler_StaticMethods_createConnectWiFiState_$$$($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$, $msg$jscomp$95$$) {
  var $connectWiFiState$jscomp$2$$ = new $castApp$core$storage$ConnectWiFiState$$(new $castApp$core$setupApi$ConnectWiFiMsg$$($msg$jscomp$95$$.network.ssid, $castApp$core$utils$getSetupApiSecurity$$($msg$jscomp$95$$.network.security)));
  $msg$jscomp$95$$.network.id && ($connectWiFiState$jscomp$2$$.$b$ = $msg$jscomp$95$$.network.id, $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$c$ && $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$c$.networks, $msg$jscomp$95$$.network.id) ? ($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$ = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$c$.networks.get($msg$jscomp$95$$.network.id), 
  $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaCipher$ && ($connectWiFiState$jscomp$2$$.msg.wpa_cipher = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaCipher$), $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaId$ && ($connectWiFiState$jscomp$2$$.msg.wpa_id = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$wpaId$)) : 
  $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$f$ && $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$f$.$b$ === $msg$jscomp$95$$.network.id && ($JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$ = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.$f$.msg, $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_cipher && 
  ($connectWiFiState$jscomp$2$$.msg.wpa_cipher = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_cipher), $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_id && ($connectWiFiState$jscomp$2$$.msg.wpa_id = $JSCompiler_StaticMethods_createConnectWiFiState_$self_knownNetwork_previousConnectWiFi$$.wpa_id)));
  return $connectWiFiState$jscomp$2$$;
}, $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$$ = function $$JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$$$($JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$, $connectWiFiState$jscomp$3_network$jscomp$9$$) {
  var $commonState$jscomp$15$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$a$);
  if ("m" !== ($commonState$jscomp$15$$.device && $commonState$jscomp$15$$.device.type)) {
    return $goog$Promise$resolve$$(!1);
  }
  var $networkId$jscomp$2$$ = $connectWiFiState$jscomp$3_network$jscomp$9$$.$b$;
  if (!$networkId$jscomp$2$$) {
    return $goog$Promise$resolve$$(!1);
  }
  if ($connectWiFiState$jscomp$3_network$jscomp$9$$ = $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$c$.networks.get($networkId$jscomp$2$$)) {
    if ($connectWiFiState$jscomp$3_network$jscomp$9$$.$has5GhzAccessPoint$) {
      return $goog$Promise$resolve$$(!1);
    }
    if ($connectWiFiState$jscomp$3_network$jscomp$9$$.$initialScanComplete$) {
      return $goog$Promise$resolve$$(!0);
    }
  }
  return $castApp$utils$waitForEvent$$($JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$c$.$b$, "scanCompleted").then(function() {
    var $connectWiFiState$jscomp$3_network$jscomp$9$$ = $JSCompiler_StaticMethods_checkIf5GhzWarningIsNeeded_$self$$.$c$.networks.get($networkId$jscomp$2$$);
    return $connectWiFiState$jscomp$3_network$jscomp$9$$ && !$connectWiFiState$jscomp$3_network$jscomp$9$$.$has5GhzAccessPoint$;
  });
};
$castApp$core$WiFiConfigState$$.prototype.$w$ = function $$castApp$core$WiFiConfigState$$$$$w$$() {
  var $commonState$jscomp$16$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$a$);
  $commonState$jscomp$16$$.connectWiFi = this.$f$;
  $JSCompiler_StaticMethods_writeCommonState$$(this.$a$, $commonState$jscomp$16$$);
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_postConnectWiFi$$(this.$g$, $commonState$jscomp$16$$.connectWiFi.msg), $goog$nullFunction$$);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$a$, 15);
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$a$, new $castApp$core$storage$SetupState$$(7));
};
var $JSCompiler_StaticMethods_encryptPassword_$$ = function $$JSCompiler_StaticMethods_encryptPassword_$$$($JSCompiler_StaticMethods_encryptPassword_$self$$, $plainTextPassword$$) {
  var $verificationProperties$jscomp$2$$ = $JSCompiler_StaticMethods_encryptPassword_$self$$.$g$.getState().verificationState.verificationProperties;
  return $JSCompiler_StaticMethods_encryptPassword_$self$$.$a$.$a$.$b$.verifyAndEncryptData($verificationProperties$jscomp$2$$, $plainTextPassword$$);
}, $JSCompiler_StaticMethods_sendCountryToDevice_$$ = function $$JSCompiler_StaticMethods_sendCountryToDevice_$$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$) {
  var $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ = $JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$g$.$a$;
  if (!(4 > $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$)) {
    var $country$jscomp$2$$ = $JSCompiler_StaticMethods_readCommonState$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$a$).country, $setEurekaInfoMsg$jscomp$1$$ = null;
    7 > $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ ? ($apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ = new $castApp$core$setupApi$SetEurekaInfoMsgV4$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.location = new $castApp$core$setupApi$EurekaInfoMsgV4$Location$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.location.country_code = $country$jscomp$2$$, $setEurekaInfoMsg$jscomp$1$$ = $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$) : ($apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$ = 
    new $castApp$core$setupApi$SetEurekaInfoMsgV7$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.settings = new $castApp$core$setupApi$EurekaInfoMsgV7$Settings$$, $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$.settings.country_code = $country$jscomp$2$$, $setEurekaInfoMsg$jscomp$1$$ = $apiVersion_setEurekaInfoMsgV4_setupEurekaInfoMsgV7$$);
    $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$b$, $JSCompiler_StaticMethods_postSetEurekaInfo$$($JSCompiler_StaticMethods_sendCountryToDevice_$self$$.$g$, $setEurekaInfoMsg$jscomp$1$$)), function($JSCompiler_StaticMethods_sendCountryToDevice_$self$$) {
      $castApp$log$warningWithCause$$($castApp$core$WiFiConfigState$logger_$$, $JSCompiler_StaticMethods_sendCountryToDevice_$self$$, "set_eureka_info failed.");
    });
  }
};
var $castApp$core$WiFiReconnectionState$$ = function $$castApp$core$WiFiReconnectionState$$$($stateManager$jscomp$11$$) {
  var $connectWiFi$jscomp$2$$ = $JSCompiler_StaticMethods_readCommonState$$($stateManager$jscomp$11$$).connectWiFi, $autoSwitchingEnabled$$ = $castApp$core$storage$readAutoNetworkSwitchingFlag$$($stateManager$jscomp$11$$.$a$.$a$);
  $goog$labs$userAgent$util$matchUserAgent$$("Macintosh") && 1 !== $connectWiFi$jscomp$2$$.msg.wpa_auth && ($autoSwitchingEnabled$$ = !1);
  $castApp$core$WiFiSwitchStateBase$$.call(this, $stateManager$jscomp$11$$, $connectWiFi$jscomp$2$$.msg.ssid, null, $autoSwitchingEnabled$$);
  this.$f$ = null;
};
$goog$inherits$$($castApp$core$WiFiReconnectionState$$, $castApp$core$WiFiSwitchStateBase$$);
var $castApp$core$WiFiReconnectionState$LOG_EVENT_MAP_$$ = new $goog$structs$Map$$(1, 20, 2, 21, 3, 22, 4, 23, 5, 24);
$castApp$log$getLogger$$("core.WiFiReconnectionState");
$castApp$core$WiFiReconnectionState$$.prototype.$m$ = function $$castApp$core$WiFiReconnectionState$$$$$m$$() {
  this.$f$ = null;
  return $castApp$core$WiFiReconnectionState$$.$superClass_$.$m$.call(this);
};
var $JSCompiler_StaticMethods_getConnectedIpAddress_$$ = function $$JSCompiler_StaticMethods_getConnectedIpAddress_$$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$) {
  return $JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$f$ ? $goog$Promise$resolve$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$f$) : $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$b$, $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$createSetupApiClient$$($JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$a$)).then(function($oldSetupApiClient$$) {
    $JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$f$ = $JSCompiler_StaticMethods_getEurekaInfoState$$($oldSetupApiClient$$).connectedIpAddress;
    return $JSCompiler_StaticMethods_getConnectedIpAddress_$self$$.$f$;
  });
};
$JSCompiler_prototypeAlias$$ = $castApp$core$WiFiReconnectionState$$.prototype;
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$createSetupApiClient$$() {
  var $self$jscomp$34$$ = this;
  return $JSCompiler_StaticMethods_getConnectedIpAddress_$$($self$jscomp$34$$).then(function($connectedIpAddress$$) {
    return $JSCompiler_StaticMethods_castApp_StartStoppable_prototype$addTask$$($self$jscomp$34$$.$b$, $castApp$core$SetupApiClient$create$$($self$jscomp$34$$.$a$.$a$.$g$, $castApp$core$SetupApiClient$createInMemoryStateStorage$$($connectedIpAddress$$)));
  });
};
$JSCompiler_prototypeAlias$$.$showAutoSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showAutoSwitchUi$$($newFailureValue_state$jscomp$24$$) {
  var $commonState$jscomp$18$$ = $JSCompiler_StaticMethods_readCommonState$$(this.$a$), $connectWiFi$jscomp$3$$ = $commonState$jscomp$18$$.connectWiFi;
  $newFailureValue_state$jscomp$24$$ = 2 === $newFailureValue_state$jscomp$24$$ || 3 === $newFailureValue_state$jscomp$24$$ ? 1 : void 0;
  $connectWiFi$jscomp$3$$.$a$ !== $newFailureValue_state$jscomp$24$$ && ($connectWiFi$jscomp$3$$.$a$ = $newFailureValue_state$jscomp$24$$, $JSCompiler_StaticMethods_writeCommonState$$(this.$a$, $commonState$jscomp$18$$));
  $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage($castApp$core$utils$createWiFiConfigUiMessage$$($connectWiFi$jscomp$3$$, $JSCompiler_StaticMethods_getProtocolDeviceType$$(this.$a$)));
};
$JSCompiler_prototypeAlias$$.$showManualSwitchUi$ = function $$JSCompiler_prototypeAlias$$$$showManualSwitchUi$$($state$jscomp$25$$) {
  $JSCompiler_StaticMethods_getUiMessenger$$(this).sendMessage(new $castApp$protocol$WiFiSwitching$ReconnectWiFi$$($state$jscomp$25$$, $JSCompiler_StaticMethods_readCommonState$$(this.$a$).connectWiFi.msg.ssid));
};
$JSCompiler_prototypeAlias$$.$castApp_core_WiFiSwitchStateBase_prototype$finish$ = function $$JSCompiler_prototypeAlias$$$$castApp_core_WiFiSwitchStateBase_prototype$finish$$($setupApiClient$jscomp$17$$) {
  this.$a$.$h$($setupApiClient$jscomp$17$$.getState());
  $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$pushState$$(this.$a$, new $castApp$core$storage$SetupState$$(9));
};
$JSCompiler_prototypeAlias$$.$logEvent$ = function $$JSCompiler_prototypeAlias$$$$logEvent$$($eventType$jscomp$15_logEventType$jscomp$1$$) {
  ($eventType$jscomp$15_logEventType$jscomp$1$$ = $castApp$core$WiFiReconnectionState$LOG_EVENT_MAP_$$.get($eventType$jscomp$15_logEventType$jscomp$1$$)) && $JSCompiler_StaticMethods_castApp_core_SetupStateManager_prototype$logSetupEvent$$(this.$a$, $eventType$jscomp$15_logEventType$jscomp$1$$);
};
var $castApp$core$createSetupState$$ = function $$castApp$core$createSetupState$$$($stateManager$jscomp$12$$, $stateType$jscomp$2$$) {
  switch($stateType$jscomp$2$$) {
    case 1:
      return new $castApp$core$SetupStartState$$($stateManager$jscomp$12$$);
    case 2:
      return new $castApp$core$HotSpotConnectionState$$($stateManager$jscomp$12$$);
    case 3:
      return new $castApp$core$CodeConfirmationState$$($stateManager$jscomp$12$$);
    case 4:
      return new $castApp$core$AudioConfirmationState$$($stateManager$jscomp$12$$);
    case 5:
      return new $castApp$core$DeviceConfigState$$($stateManager$jscomp$12$$);
    case 6:
      return new $castApp$core$WiFiConfigState$$($stateManager$jscomp$12$$);
    case 7:
      return new $castApp$core$ConnectWiFiPendingState$$($stateManager$jscomp$12$$);
    case 8:
      return new $castApp$core$WiFiReconnectionState$$($stateManager$jscomp$12$$);
    case 9:
      return new $castApp$core$DeviceFoundState$$($stateManager$jscomp$12$$);
    case 10:
      return new $castApp$core$OtaState$$($stateManager$jscomp$12$$);
    default:
      return $goog$asserts$fail$$("Unsupported setup state: " + $stateType$jscomp$2$$), new $castApp$core$SetupState$$($stateManager$jscomp$12$$, null, null);
  }
};
var $castApp$app$setupManager$$ = null;
$goog$exportSymbol$$("castApp.app.setupManager", $castApp$app$setupManager$$);
var $castApp$app$PageHash_$$ = {$DEVICES$:"devices", $OFFERS$:"offers", $SETUP$:"setup", ERROR:"error"}, $castApp$app$parseHash_$$ = function $$castApp$app$parseHash_$$$($hash$jscomp$8_retVal$jscomp$6$$) {
  if (!$hash$jscomp$8_retVal$jscomp$6$$ || "#" == $hash$jscomp$8_retVal$jscomp$6$$) {
    return {};
  }
  $hash$jscomp$8_retVal$jscomp$6$$.startsWith("#") && ($hash$jscomp$8_retVal$jscomp$6$$ = $hash$jscomp$8_retVal$jscomp$6$$.slice(1));
  var $ipAddressString_splitHash$$ = $hash$jscomp$8_retVal$jscomp$6$$.split("/");
  if (!(0 <= $goog$array$indexOf$$($goog$object$getValues$$($castApp$app$PageHash_$$), $ipAddressString_splitHash$$[0]))) {
    return {};
  }
  $hash$jscomp$8_retVal$jscomp$6$$ = {$component$:$ipAddressString_splitHash$$[0]};
  if ($ipAddressString_splitHash$$[1]) {
    switch($hash$jscomp$8_retVal$jscomp$6$$.$component$) {
      case "devices":
        $ipAddressString_splitHash$$ = decodeURIComponent($ipAddressString_splitHash$$[1]);
        $goog$net$IpAddress$fromString$$($ipAddressString_splitHash$$) && ($hash$jscomp$8_retVal$jscomp$6$$.ipAddress = $ipAddressString_splitHash$$);
        break;
      case "setup":
        $hash$jscomp$8_retVal$jscomp$6$$.$setupSessionId$ = $ipAddressString_splitHash$$[1];
        break;
      case "offers":
        $hash$jscomp$8_retVal$jscomp$6$$.$redemptionUrl$ = decodeURIComponent($ipAddressString_splitHash$$[1]);
    }
  }
  return $hash$jscomp$8_retVal$jscomp$6$$;
};
window.addEventListener("hashchange", function($event$jscomp$27_newHash$$) {
  var $oldHash$$ = $goog$Uri$parse$$($event$jscomp$27_newHash$$.oldURL).$g$;
  $event$jscomp$27_newHash$$ = $goog$Uri$parse$$($event$jscomp$27_newHash$$.newURL).$g$;
  $castApp$app$parseHash_$$($oldHash$$).$component$ !== $castApp$app$parseHash_$$($event$jscomp$27_newHash$$).$component$ && location.reload();
});
var $castApp$app$goToDevicesPage_$$ = function $$castApp$app$goToDevicesPage_$$$() {
  window.location.hash = "devices";
}, $castApp$app$goToSetupPage_$$ = function $$castApp$app$goToSetupPage_$$$($setupSessionId$$) {
  window.location.hash = "setup/" + $setupSessionId$$;
}, $castApp$app$goToDeviceSettingsPage_$$ = function $$castApp$app$goToDeviceSettingsPage_$$$($ipAddress$jscomp$11$$) {
  window.location.hash = "devices/" + encodeURIComponent($ipAddress$jscomp$11$$);
}, $castApp$app$goToErrorPage_$$ = function $$castApp$app$goToErrorPage_$$$() {
  window.location.hash = "error";
}, $castApp$app$runSetup_$$ = function $$castApp$app$runSetup_$$$($webview$jscomp$6$$) {
  if ($goog$labs$userAgent$util$matchUserAgent$$("Linux")) {
    $castApp$app$goToErrorPage_$$();
  } else {
    var $analytics$jscomp$4$$ = chrome.metricsPrivate ? new $castApp$core$UmaAnalytics$$(window.localStorage) : new $castApp$core$NullAnalytics$$, $networkingPrivate$$ = chrome.networkingPrivate ? $castApp$core$ChromeNetworkingPrivate_$$.$getInstance$() : null, $env$jscomp$11$$ = new $castApp$core$SetupEnvironment$$(window, $networkingPrivate$$, new $castApp$core$HttpImpl$$, $analytics$jscomp$4$$), $ui$jscomp$3$$ = new $castApp$core$Ui$$(window, $webview$jscomp$6$$), $handleHashChangeEvent$$ = function $$handleHashChangeEvent$$$() {
      var $webview$jscomp$6$$ = $castApp$app$parseHash_$$(window.location.hash);
      if ("setup" === $webview$jscomp$6$$.$component$) {
        var $analytics$jscomp$4$$ = null;
        if ($webview$jscomp$6$$.$setupSessionId$) {
          if ($castApp$app$setupManager$$ && $castApp$app$setupManager$$.$b$.id === $webview$jscomp$6$$.$setupSessionId$) {
            return;
          }
          $analytics$jscomp$4$$ = $goog$array$find$$($castApp$core$storage$readAllSetupSessions$$($env$jscomp$11$$.$a$), function($analytics$jscomp$4$$) {
            return $analytics$jscomp$4$$.id === $webview$jscomp$6$$.$setupSessionId$;
          });
        }
        $analytics$jscomp$4$$ || ($analytics$jscomp$4$$ = new $castApp$core$storage$SetupSession$$($goog$string$getRandomString$$()), $analytics$jscomp$4$$.states = new $castApp$core$storage$SetupStateCollection$$(0, [new $castApp$core$storage$SetupState$$(1)]), $castApp$core$storage$writeSetupSession$$($env$jscomp$11$$.$a$, $analytics$jscomp$4$$), window.history.replaceState(null, "", "#setup/" + $analytics$jscomp$4$$.id));
        $castApp$app$setupManager$$ && $castApp$app$setupManager$$.stop();
        $castApp$app$setupManager$$ = new $castApp$core$SetupStateManager$$($env$jscomp$11$$, $ui$jscomp$3$$, $analytics$jscomp$4$$);
        $castApp$app$setupManager$$.start();
      }
    };
    $ui$jscomp$3$$.start().then(function() {
      $handleHashChangeEvent$$();
      window.addEventListener("hashchange", $handleHashChangeEvent$$);
    });
  }
}, $castApp$app$runDevices_$$ = function $$castApp$app$runDevices_$$$($webview$jscomp$7$$, $eventPageClient$jscomp$6$$) {
  if ($goog$labs$userAgent$util$matchUserAgent$$("Linux")) {
    $castApp$app$goToErrorPage_$$();
  } else {
    var $ui$jscomp$4$$ = new $castApp$core$Ui$$(window, $webview$jscomp$7$$), $networkingPrivate$jscomp$1$$ = chrome.networkingPrivate ? $castApp$core$ChromeNetworkingPrivate_$$.$getInstance$() : null, $http$jscomp$10$$ = new $castApp$core$HttpImpl$$, $deviceManagerEnv$$ = new $castApp$core$DeviceManagerEnvironment$$(window, $ui$jscomp$4$$, $http$jscomp$10$$, $castApp$app$goToSetupPage_$$, $castApp$app$goToDevicesPage_$$, $castApp$app$goToDeviceSettingsPage_$$, window.location.reload.bind(window.location), 
    new $castApp$core$CastSdkImpl$$, $webview$jscomp$7$$, chrome.i18n.getUILanguage, new $castApp$core$NewDeviceMonitorImpl$$($networkingPrivate$jscomp$1$$, $eventPageClient$jscomp$6$$, $http$jscomp$10$$, window)), $deviceManager$$ = null, $deviceSettings$$ = null, $startDeviceSettings$$ = function $$startDeviceSettings$$$($webview$jscomp$7$$) {
      if (!$deviceSettings$$ || $deviceSettings$$.$i$ !== $webview$jscomp$7$$) {
        var $eventPageClient$jscomp$6$$ = $deviceManager$$ && $deviceManager$$.stop() || $deviceSettings$$ && $deviceSettings$$.stop() || $goog$Promise$resolve$$();
        $deviceManager$$ = null;
        var $ui$jscomp$4$$ = $deviceSettings$$ = new $castApp$core$DeviceSettings$$($deviceManagerEnv$$, $webview$jscomp$7$$);
        $eventPageClient$jscomp$6$$.then(function() {
          $deviceSettings$$ === $ui$jscomp$4$$ && $JSCompiler_StaticMethods_thenCatch$$($deviceSettings$$.start(), $castApp$app$goToDevicesPage_$$);
        });
      }
    }, $startDeviceManager$$ = function $$startDeviceManager$$$() {
      if (!$deviceManager$$) {
        var $webview$jscomp$7$$ = $deviceSettings$$ && $deviceSettings$$.stop() || $goog$Promise$resolve$$(), $eventPageClient$jscomp$6$$ = $deviceManager$$ = new $castApp$core$DeviceManager$$($deviceManagerEnv$$);
        $deviceSettings$$ = null;
        $webview$jscomp$7$$.then(function() {
          $eventPageClient$jscomp$6$$ === $deviceManager$$ && $deviceManager$$.start();
        });
      }
    }, $handleHashChangeEvent$jscomp$1$$ = function $$handleHashChangeEvent$jscomp$1$$$() {
      var $webview$jscomp$7$$ = $castApp$app$parseHash_$$(location.hash);
      "devices" === $webview$jscomp$7$$.$component$ && ($webview$jscomp$7$$.ipAddress ? $startDeviceSettings$$($webview$jscomp$7$$.ipAddress) : $startDeviceManager$$());
    };
    $ui$jscomp$4$$.start().then(function() {
      $handleHashChangeEvent$jscomp$1$$();
      window.addEventListener("hashchange", $handleHashChangeEvent$jscomp$1$$);
    });
  }
}, $castApp$app$runOfferScanner_$$ = function $$castApp$app$runOfferScanner_$$$($analytics$jscomp$5_webview$jscomp$8$$, $eventPageClient$jscomp$7$$) {
  var $ui$jscomp$5$$ = new $castApp$core$Ui$$(window, $analytics$jscomp$5_webview$jscomp$8$$);
  $analytics$jscomp$5_webview$jscomp$8$$ = chrome.metricsPrivate ? new $castApp$core$UmaAnalytics$$(window.localStorage) : new $castApp$core$NullAnalytics$$;
  var $offersEnv$$ = new $castApp$core$offers$Environment$$(window, $ui$jscomp$5$$, $eventPageClient$jscomp$7$$, new $castApp$core$HttpImpl$$, $analytics$jscomp$5_webview$jscomp$8$$);
  $ui$jscomp$5$$.start().then(function() {
    var $analytics$jscomp$5_webview$jscomp$8$$ = $ui$jscomp$5$$.$a$.$a$, $eventPageClient$jscomp$7$$ = new $goog$structs$Map$$;
    $analytics$jscomp$5_webview$jscomp$8$$.addListener("Offers.Scan", function($analytics$jscomp$5_webview$jscomp$8$$) {
      var $ui$jscomp$5$$ = $analytics$jscomp$5_webview$jscomp$8$$.scanId;
      $JSCompiler_StaticMethods_goog_structs_Map_prototype$containsKey$$($eventPageClient$jscomp$7$$, $ui$jscomp$5$$) || ($analytics$jscomp$5_webview$jscomp$8$$ = new $castApp$core$offers$Scan$$($offersEnv$$, $ui$jscomp$5$$), $eventPageClient$jscomp$7$$.set($ui$jscomp$5$$, $analytics$jscomp$5_webview$jscomp$8$$), $castApp$utils$waitForEvent$$($analytics$jscomp$5_webview$jscomp$8$$.$f$.$b$, "stopped").then(function() {
        $eventPageClient$jscomp$7$$.remove($ui$jscomp$5$$);
      }), $analytics$jscomp$5_webview$jscomp$8$$.start());
    });
    $analytics$jscomp$5_webview$jscomp$8$$.addListener("Offers.Redeem", function($analytics$jscomp$5_webview$jscomp$8$$) {
      var $eventPageClient$jscomp$7$$ = encodeURIComponent($analytics$jscomp$5_webview$jscomp$8$$.url);
      $castApp$app$findOfferRedemptionTabs_$$($eventPageClient$jscomp$7$$).then(function($analytics$jscomp$5_webview$jscomp$8$$) {
        0 === $analytics$jscomp$5_webview$jscomp$8$$.length ? chrome.tabs.create({url:"chrome://cast/#offers/" + $eventPageClient$jscomp$7$$, active:!0}) : (chrome.tabs.update($analytics$jscomp$5_webview$jscomp$8$$[0].tabId, {active:!0}), chrome.windows.update($analytics$jscomp$5_webview$jscomp$8$$[0].windowId, {active:!0}));
      });
    });
    $analytics$jscomp$5_webview$jscomp$8$$.addListener("Offers.AnalyticsEvent", function($analytics$jscomp$5_webview$jscomp$8$$) {
      $offersEnv$$.$c$.$f$($analytics$jscomp$5_webview$jscomp$8$$);
    });
    $analytics$jscomp$5_webview$jscomp$8$$.sendMessage(new $castApp$protocol$Message$$("Offers.Show"));
  });
}, $castApp$app$runOfferRedemption_$$ = function $$castApp$app$runOfferRedemption_$$$($redemptionUrl$$) {
  $castApp$core$setBodyClass_$$(window, "start");
  $JSCompiler_StaticMethods_thenCatch$$($JSCompiler_StaticMethods_requestJson$$(new $castApp$core$HttpImpl$$, {url:$redemptionUrl$$}).then(function($response$jscomp$8$$) {
    var $redirectUrl$$ = $response$jscomp$8$$.url;
    return $redirectUrl$$ ? $castApp$app$findOfferRedemptionTabs_$$(encodeURIComponent($redemptionUrl$$)).then(function($redemptionUrl$$) {
      $redemptionUrl$$.forEach(function($redemptionUrl$$) {
        chrome.tabs.update($redemptionUrl$$.id, {url:$redirectUrl$$});
      });
    }) : $goog$Promise$reject$$();
  }), function() {
    $castApp$core$setBodyClass_$$(window, "unknown-error");
  });
}, $castApp$app$findOfferRedemptionTabs_$$ = function $$castApp$app$findOfferRedemptionTabs_$$$($escapedRedemptionUrl$jscomp$1$$) {
  return new $goog$Promise$$(function($resolve$jscomp$16$$) {
    chrome.tabs.query({url:["chrome://cast/*", "chrome-extension://" + chrome.runtime.id + "/cast_setup*"]}, function($tabs$jscomp$2$$) {
      var $ret$jscomp$10$$ = [];
      $tabs$jscomp$2$$.forEach(function($resolve$jscomp$16$$) {
        -1 !== $resolve$jscomp$16$$.url.indexOf($escapedRedemptionUrl$jscomp$1$$) && $ret$jscomp$10$$.push($resolve$jscomp$16$$);
      });
      $resolve$jscomp$16$$($ret$jscomp$10$$);
    });
  });
};
window.addEventListener("load", function() {
  var $eventPageClient$jscomp$5$$ = new $castApp$eventPage$ChromeClient$$, $webview$jscomp$5$$ = new $castApp$core$WebViewImpl$$(window);
  $webview$jscomp$5$$.$f$.listen("originViolation", $castApp$app$goToErrorPage_$$);
  var $crypto$jscomp$2_salt$jscomp$inline_936$$ = window.crypto, $crypto$jscomp$inline_935_parsedHash$$ = $crypto$jscomp$2_salt$jscomp$inline_936$$.subtle, $crypto$jscomp$2_salt$jscomp$inline_936$$ = $castApp$core$storage$readLogSalt$$(window.localStorage, $crypto$jscomp$2_salt$jscomp$inline_936$$.getRandomValues.bind($crypto$jscomp$2_salt$jscomp$inline_936$$));
  $JSCompiler_StaticMethods_initAnonymizer$$($castApp$log$Manager_$$.$getInstance$(), $crypto$jscomp$inline_935_parsedHash$$, $crypto$jscomp$2_salt$jscomp$inline_936$$);
  $castApp$core$storage$removeStaleSetupSessions$$();
  $crypto$jscomp$inline_935_parsedHash$$ = $castApp$app$parseHash_$$(location.hash);
  switch($crypto$jscomp$inline_935_parsedHash$$.$component$) {
    case "devices":
      $castApp$app$runDevices_$$($webview$jscomp$5$$, $eventPageClient$jscomp$5$$);
      break;
    case "offers":
      $crypto$jscomp$inline_935_parsedHash$$.$redemptionUrl$ ? $castApp$app$runOfferRedemption_$$($crypto$jscomp$inline_935_parsedHash$$.$redemptionUrl$) : $castApp$app$runOfferScanner_$$($webview$jscomp$5$$, $eventPageClient$jscomp$5$$);
      break;
    case "setup":
      $castApp$app$runSetup_$$($webview$jscomp$5$$);
      break;
    case "error":
      $castApp$core$setBodyClass_$$(window, "unknown-error");
      break;
    default:
      $castApp$log$error$$($castApp$log$getLogger$$("app.main_"), "Error 404 " + JSON.stringify($crypto$jscomp$inline_935_parsedHash$$)), $castApp$app$goToDevicesPage_$$();
  }
});

