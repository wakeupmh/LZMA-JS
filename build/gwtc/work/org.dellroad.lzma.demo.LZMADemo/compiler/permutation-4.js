�� sr !com.google.gwt.dev.CompilePerms$1_�oP�� L val$jst Ljava/lang/String;xp|     �Pvar _, N8000000000000000_longLit = [0, -9223372036854775808], N1_longLit = [4294967295, -4294967296], P0_longLit = [0, 0], P1_longLit = [1, 0], P4_longLit = [4, 0], P1000_longLit = [4096, 0], Pffffff_longLit = [16777215, 0], P1000000_longLit = [16777216, 0], Pff000000_longLit = [4278190080, 0], Pffffffff_longLit = [4294967295, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function equals_1(other){
  return this === (other == null?null:other);
}

function getClass_37(){
  return Ljava_lang_Object_2_classLit;
}

function hashCode_3(){
  return this.$H || (this.$H = ++sNextHashId);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals_1;
_.getClass$ = getClass_37;
_.hashCode$ = hashCode_3;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
function getClass_41(){
  return Ljava_lang_Throwable_2_classLit;
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0();
_.getClass$ = getClass_41;
_.typeId$ = 3;
_.detailMessage = null;
function getClass_32(){
  return Ljava_lang_Exception_2_classLit;
}

function Exception(){
}

_ = Exception.prototype = new Throwable();
_.getClass$ = getClass_32;
_.typeId$ = 4;
function $RuntimeException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_38(){
  return Ljava_lang_RuntimeException_2_classLit;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception();
_.getClass$ = getClass_38;
_.typeId$ = 5;
function $JavaScriptException(this$static, e){
  return this$static;
}

function getClass_0(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function JavaScriptException(){
}

_ = JavaScriptException.prototype = new RuntimeException();
_.getClass$ = getClass_0;
_.typeId$ = 6;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.equals$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

var sNextHashId = 0;
function $append(a, x){
  a[a.explicitLength++] = x;
}

function $appendNonNull(a, x){
  a[a.explicitLength++] = x;
}

function $toString(a){
  var s_0, s;
  s_0 = (s = a.join('') , a.length = a.explicitLength = 0 , s);
  a[a.explicitLength++] = s_0;
  return s_0;
}

function $clinit_8(){
  $clinit_8 = nullMethod;
  $clinit_6();
  new DOMImplIE6();
}

function $createScriptElement(doc, source){
  var elem;
  elem = doc.createElement('script');
  elem.text = source;
  return elem;
}

function getClass_4(){
  return Lcom_google_gwt_dom_client_DOMImpl_2_classLit;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0();
_.getClass$ = getClass_4;
_.typeId$ = 0;
function $clinit_7(){
  $clinit_7 = nullMethod;
  $clinit_8();
}

function getClass_3(){
  return Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit;
}

function DOMImplTrident(){
}

_ = DOMImplTrident.prototype = new DOMImpl();
_.getClass$ = getClass_3;
_.typeId$ = 0;
function $clinit_6(){
  $clinit_6 = nullMethod;
  $clinit_7();
}

function getClass_2(){
  return Lcom_google_gwt_dom_client_DOMImplIE6_2_classLit;
}

function DOMImplIE6(){
}

_ = DOMImplIE6.prototype = new DOMImplTrident();
_.getClass$ = getClass_2;
_.typeId$ = 0;
function getClass_8(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0();
_.getClass$ = getClass_8;
_.typeId$ = 0;
_.dead = false;
_.source = null;
function dispatch(handler){
  $onClose();
}

function fire(source){
  var event_0;
  if (TYPE) {
    event_0 = new CloseEvent();
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType(){
  return TYPE;
}

function getClass_5(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}

function CloseEvent(){
}

_ = CloseEvent.prototype = new GwtEvent();
_.dispatch = dispatch;
_.getAssociatedType = getAssociatedType;
_.getClass$ = getClass_5;
_.typeId$ = 0;
var TYPE = null;
function getClass_6(){
  return Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit;
}

function DefaultHandlerRegistration(){
}

_ = DefaultHandlerRegistration.prototype = new Object_0();
_.getClass$ = getClass_6;
_.typeId$ = 0;
function $GwtEvent$Type(this$static){
  this$static.index = ++nextHashCode;
  return this$static;
}

function getClass_7(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}

function hashCode_1(){
  return this.index;
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type.prototype = new Object_0();
_.getClass$ = getClass_7;
_.hashCode$ = hashCode_1;
_.typeId$ = 0;
_.index = 0;
var nextHashCode = 0;
function $addHandler_0(this$static, type, handler){
  if (this$static.firingDepth > 0) {
    $defer(this$static, $HandlerManager$1(new HandlerManager$1(), this$static, type, handler));
  }
   else {
    $addHandler(this$static.registry, type, handler);
  }
  return new DefaultHandlerRegistration();
}

function $defer(this$static, command){
  if (!this$static.deferredDeltas) {
    this$static.deferredDeltas = $ArrayList(new ArrayList());
  }
  $add_0(this$static.deferredDeltas, command);
}

function $fireEvent_0(this$static, event_0){
  var oldSource;
  if (event_0.dead) {
    event_0.dead = false;
    event_0.source = null;
  }
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    ++this$static.firingDepth;
    $fireEvent(this$static.registry, event_0, this$static.isReverseOrder);
  }
   finally {
    --this$static.firingDepth;
    if (this$static.firingDepth == 0) {
      $handleQueuedAddsAndRemoves(this$static);
    }
  }
  if (oldSource == null) {
    event_0.dead = true;
    event_0.source = null;
  }
   else {
    event_0.source = oldSource;
  }
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static.deferredDeltas); c$iterator.i < c$iterator.this$0.size;) {
        c = dynamicCast($next_0(c$iterator), 2);
        $addHandler(c.this$0.registry, c.val$type, c.val$handler);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function getClass_11(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0();
_.getClass$ = getClass_11;
_.typeId$ = 0;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
_.registry = null;
_.source = null;
function $HandlerManager$1(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_9(){
  return Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit;
}

function HandlerManager$1(){
}

_ = HandlerManager$1.prototype = new Object_0();
_.getClass$ = getClass_9;
_.typeId$ = 7;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$HandlerRegistry(this$static){
  this$static.map = $HashMap(new HashMap());
  return this$static;
}

function $addHandler(this$static, type, handler){
  var l;
  l = dynamicCast($get(this$static.map, type), 3);
  if (!l) {
    l = $ArrayList(new ArrayList());
    $put(this$static.map, type, l);
  }
  setCheck(l.array, l.size++, handler);
}

function $fireEvent(this$static, event_0, isReverseOrder){
  var count, handler, i, type, l, l_0, l_1;
  type = event_0.getAssociatedType();
  count = (l = dynamicCast($get(this$static.map, type), 3) , !l?0:l.size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (l_0 = dynamicCast($get(this$static.map, type), 3) , dynamicCast((checkIndex(i, l_0.size) , l_0.array[i]), 10));
      event_0.dispatch(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (l_1 = dynamicCast($get(this$static.map, type), 3) , dynamicCast((checkIndex(i, l_1.size) , l_1.array[i]), 10));
      event_0.dispatch(handler);
    }
  }
}

function getClass_10(){
  return Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit;
}

function HandlerManager$HandlerRegistry(){
}

_ = HandlerManager$HandlerRegistry.prototype = new Object_0();
_.getClass$ = getClass_10;
_.typeId$ = 0;
function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function getClass_12(){
  return this.arrayClass$;
}

function initDim(arrayClass, typeId, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_27();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.typeId$ = typeId;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, typeId, queryId, array){
  $clinit_27();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.typeId$ = typeId;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
      throw new ArrayStoreException();
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
      throw new ArrayStoreException();
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0();
_.getClass$ = getClass_12;
_.typeId$ = 0;
_.arrayClass$ = null;
_.length = 0;
_.queryId$ = 0;
function $clinit_27(){
  $clinit_27 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_0(), expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_27();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
    throw new ClassCastException();
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

var typeIdArray = [{}, {}, {1:1}, {11:1}, {11:1}, {11:1}, {11:1}, {2:1}, {13:1}, {13:1}, {13:1}, {11:1}, {10:1}, {11:1, 18:1}, {11:1}, {11:1}, {11:1}, {11:1}, {11:1}, {11:1, 19:1}, {11:1}, {11:1}, {11:1}, {11:1}, {17:1}, {15:1}, {15:1}, {15:1}, {3:1}, {16:1}, {15:1}, {11:1}, {12:1}, {12:1}, {12:1}, {12:1}, {4:1}, {5:1}, {6:1}, {7:1}, {8:1}, {12:1}, {12:1}, {9:1}];
function caught(e){
  if (e != null && canCast(e.typeId$, 11)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException(), e);
}

function add(a, b){
  var newHigh, newLow;
  newHigh = a[1] + b[1];
  newLow = a[0] + b[0];
  return create(newLow, newHigh);
}

function addTimes(accum, a, b){
  if (a == 0) {
    return accum;
  }
  if (b == 0) {
    return accum;
  }
  return add(accum, create(a * b, 0));
}

function and(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) & ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) & lowBits_0(b));
}

function compare_0(a, b){
  var nega, negb;
  if (a[0] == b[0] && a[1] == b[1]) {
    return 0;
  }
  nega = a[1] < 0;
  negb = b[1] < 0;
  if (nega && !negb) {
    return -1;
  }
  if (!nega && negb) {
    return 1;
  }
  if (sub(a, b)[1] < 0) {
    return -1;
  }
   else {
    return 1;
  }
}

function create(valueLow, valueHigh){
  var diffHigh, diffLow;
  valueHigh %= 1.8446744073709552E19;
  valueLow %= 1.8446744073709552E19;
  diffHigh = valueHigh % 4294967296;
  diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
  valueHigh = valueHigh - diffHigh + diffLow;
  valueLow = valueLow - diffLow + diffHigh;
  while (valueLow < 0) {
    valueLow += 4294967296;
    valueHigh -= 4294967296;
  }
  while (valueLow > 4294967295) {
    valueLow -= 4294967296;
    valueHigh += 4294967296;
  }
  valueHigh = valueHigh % 1.8446744073709552E19;
  while (valueHigh > 9223372032559808512) {
    valueHigh -= 1.8446744073709552E19;
  }
  while (valueHigh < -9223372036854775808) {
    valueHigh += 1.8446744073709552E19;
  }
  return [valueLow, valueHigh];
}

function div(a, b){
  var approx, deltaRem, deltaResult, halfa, rem, result;
  if (b[0] == 0 && b[1] == 0) {
    throw $ArithmeticException(new ArithmeticException(), '/ by zero');
  }
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_33() , ZERO;
  }
  if (eq(a, ($clinit_33() , MIN_VALUE))) {
    if (eq(b, ONE) || eq(b, NEG_ONE)) {
      return MIN_VALUE;
    }
    halfa = shr(a, 1);
    approx = shl(div(halfa, b), 1);
    rem = sub(a, mul(b, approx));
    return add(approx, div(rem, b));
  }
  if (eq(b, MIN_VALUE)) {
    return ZERO;
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return div(neg(a), neg(b));
    }
     else {
      return neg(div(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(div(a, neg(b)));
  }
  result = ZERO;
  rem = a;
  while (compare_0(rem, b) >= 0) {
    deltaResult = fromDouble(Math.floor(toDoubleRoundDown(rem) / toDoubleRoundUp(b)));
    if (deltaResult[0] == 0 && deltaResult[1] == 0) {
      deltaResult = ONE;
    }
    deltaRem = mul(deltaResult, b);
    result = add(result, deltaResult);
    rem = sub(rem, deltaRem);
  }
  return result;
}

function eq(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function fromDouble(value){
  if (isNaN(value)) {
    return $clinit_33() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_33() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_33() , MAX_VALUE;
  }
  if (value > 0) {
    return create(Math.floor(value), 0);
  }
   else {
    return create(Math.ceil(value), 0);
  }
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    result = ($clinit_32() , boxedValues)[rebase];
    if (result == null) {
      result = boxedValues[rebase] = internalFromInt(value);
    }
    return result;
  }
  return internalFromInt(value);
}

function internalFromInt(value){
  if (value >= 0) {
    return [value, 0];
  }
   else {
    return [value + 4294967296, -4294967296];
  }
}

function lowBits_0(a){
  if (a[0] >= 2147483648) {
    return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
  }
   else {
    return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
  }
}

function makeFromBits(highBits, lowBits){
  var high, low;
  high = highBits * 4294967296;
  low = lowBits;
  if (lowBits < 0) {
    low += 4294967296;
  }
  return [low, high];
}

function mul(a, b){
  var a1, a2, a3, a4, b1, b2, b3, b4, res;
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_33() , ZERO;
  }
  if (b[0] == 0 && b[1] == 0) {
    return $clinit_33() , ZERO;
  }
  if (eq(a, ($clinit_33() , MIN_VALUE))) {
    return multByMinValue(b);
  }
  if (eq(b, MIN_VALUE)) {
    return multByMinValue(a);
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return mul(neg(a), neg(b));
    }
     else {
      return neg(mul(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(mul(a, neg(b)));
  }
  if (compare_0(a, TWO_PWR_24) < 0 && compare_0(b, TWO_PWR_24) < 0) {
    return create((a[1] + a[0]) * (b[1] + b[0]), 0);
  }
  a3 = a[1] % 281474976710656;
  a4 = a[1] - a3;
  a1 = a[0] % 65536;
  a2 = a[0] - a1;
  b3 = b[1] % 281474976710656;
  b4 = b[1] - b3;
  b1 = b[0] % 65536;
  b2 = b[0] - b1;
  res = ZERO;
  res = addTimes(res, a4, b1);
  res = addTimes(res, a3, b2);
  res = addTimes(res, a3, b1);
  res = addTimes(res, a2, b3);
  res = addTimes(res, a2, b2);
  res = addTimes(res, a2, b1);
  res = addTimes(res, a1, b4);
  res = addTimes(res, a1, b3);
  res = addTimes(res, a1, b2);
  res = addTimes(res, a1, b1);
  return res;
}

function multByMinValue(a){
  if ((lowBits_0(a) & 1) == 1) {
    return $clinit_33() , MIN_VALUE;
  }
   else {
    return $clinit_33() , ZERO;
  }
}

function neg(a){
  var newHigh, newLow;
  if (eq(a, ($clinit_33() , MIN_VALUE))) {
    return MIN_VALUE;
  }
  newHigh = -a[1];
  newLow = -a[0];
  if (newLow > 4294967295) {
    newLow -= 4294967296;
    newHigh += 4294967296;
  }
  if (newLow < 0) {
    newLow += 4294967296;
    newHigh -= 4294967296;
  }
  return [newLow, newHigh];
}

function or(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) | ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) | lowBits_0(b));
}

function pwrAsDouble(n){
  if (n <= 30) {
    return 1 << n;
  }
   else {
    return pwrAsDouble(30) * pwrAsDouble(n - 30);
  }
}

function shl(a, n){
  var diff, newHigh, newLow, twoToN;
  n &= 63;
  if (eq(a, ($clinit_33() , MIN_VALUE))) {
    if (n == 0) {
      return a;
    }
     else {
      return ZERO;
    }
  }
  if (a[1] < 0) {
    return neg(shl(neg(a), n));
  }
  twoToN = pwrAsDouble(n);
  newHigh = a[1] * twoToN % 1.8446744073709552E19;
  newLow = a[0] * twoToN;
  diff = newLow - newLow % 4294967296;
  newHigh += diff;
  newLow -= diff;
  if (newHigh >= 9223372036854775807) {
    newHigh -= 1.8446744073709552E19;
  }
  return [newLow, newHigh];
}

function shr(a, n){
  var newHigh, newLow, shiftFact;
  n &= 63;
  shiftFact = pwrAsDouble(n);
  newHigh = a[1] / shiftFact;
  newLow = Math.floor(a[0] / shiftFact);
  return create(newLow, newHigh);
}

function shru(a, n){
  var sr;
  n &= 63;
  sr = shr(a, n);
  if (a[1] < 0) {
    sr = add(sr, shl(($clinit_33() , TWO), 63 - n));
  }
  return sr;
}

function sub(a, b){
  var newHigh, newLow;
  newHigh = a[1] - b[1];
  newLow = a[0] - b[0];
  return create(newLow, newHigh);
}

function toDoubleRoundDown(a){
  var diff, magnitute, toSubtract;
  magnitute = round_int(Math.log(a[1]) / ($clinit_33() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toSubtract = (1 << diff) - 1;
    return a[1] + (a[0] - toSubtract);
  }
}

function toDoubleRoundUp(a){
  var diff, magnitute, toAdd;
  magnitute = round_int(Math.log(a[1]) / ($clinit_33() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toAdd = (1 << diff) - 1;
    return a[1] + (a[0] + toAdd);
  }
}

function toString_0(a){
  var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
  if (a[0] == 0 && a[1] == 0) {
    return '0';
  }
  if (eq(a, ($clinit_33() , MIN_VALUE))) {
    return '-9223372036854775808';
  }
  if (a[1] < 0) {
    return '-' + toString_0(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem[0] == 0 && rem[1] == 0)) {
    tenPowerLong = fromInt(1000000000);
    remDivTenPower = div(rem, tenPowerLong);
    digits = '' + lowBits_0(sub(rem, mul(remDivTenPower, tenPowerLong)));
    rem = remDivTenPower;
    if (!(rem[0] == 0 && rem[1] == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function $clinit_32(){
  $clinit_32 = nullMethod;
  boxedValues = initDim(_3_3D_classLit, 0, 9, 256, 0);
}

var boxedValues;
function $clinit_33(){
  $clinit_33 = nullMethod;
  LN_2 = Math.log(2);
  MAX_VALUE = P7fffffffffffffff_longLit;
  MIN_VALUE = N8000000000000000_longLit;
  NEG_ONE = fromInt(-1);
  ONE = fromInt(1);
  TWO = fromInt(2);
  TWO_PWR_24 = P1000000_longLit;
  ZERO = fromInt(0);
}

var LN_2, MAX_VALUE, MIN_VALUE, NEG_ONE, ONE, TWO, TWO_PWR_24, ZERO;
function $CommandExecutor(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1(), this$static);
  this$static.commands = $ArrayList(new ArrayList());
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2(), this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator(), this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd;
  cmd = $getLast(this$static.iterator);
  $remove(this$static.iterator);
  if (cmd != null && canCast(cmd.typeId$, 12)) {
    $IncrementalCommandCanceledException(new IncrementalCommandCanceledException(), dynamicCast(cmd, 12));
  }
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var element, incrementalCommand, removeCommand, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    this$static.iterator.end = this$static.commands.size;
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      removeCommand = true;
      try {
        if (element == null) {
          return;
        }
        if (element != null && canCast(element.typeId$, 12)) {
          incrementalCommand = dynamicCast(element, 12);
          removeCommand = !incrementalCommand.execute();
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        if (wasCanceled) {
          return;
        }
        if (removeCommand) {
          $remove(this$static.iterator);
        }
      }
      if ((new Date()).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add_0(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_16(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0();
_.getClass$ = getClass_16;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_45(){
  $clinit_45 = nullMethod;
  timers = $ArrayList(new ArrayList());
  addCloseHandler(new Timer$1());
}

function $cancel(this$static){
  if (this$static.isRepeating) {
    $wnd.clearInterval(this$static.timerId);
  }
   else {
    $wnd.clearTimeout(this$static.timerId);
  }
  $remove_1(timers, this$static);
}

function $fireImpl(this$static){
  if (!this$static.isRepeating) {
    $remove_1(timers, this$static);
  }
  this$static.run();
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException(), 'must be positive');
  }
  $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_0(timers, this$static);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout(function(){
    timer.fire();
  }
  , delay);
}

function fire_0(){
  $fireImpl(this);
}

function getClass_19(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function Timer(){
}

_ = Timer.prototype = new Object_0();
_.fire = fire_0;
_.getClass$ = getClass_19;
_.typeId$ = 8;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_37(){
  $clinit_37 = nullMethod;
  $clinit_45();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_37();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_13(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}

function run(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer();
_.getClass$ = getClass_13;
_.run = run;
_.typeId$ = 9;
_.this$0 = null;
function $clinit_38(){
  $clinit_38 = nullMethod;
  $clinit_45();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_38();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_14(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_0(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date()).getTime());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer();
_.getClass$ = getClass_14;
_.run = run_0;
_.typeId$ = 10;
_.this$0 = null;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get_0(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_0(this$static.this$0.commands, this$static.next++);
  if (this$static.next >= this$static.end) {
    this$static.next = 0;
  }
  return command;
}

function $remove(this$static){
  $remove_0(this$static.this$0.commands, this$static.last);
  --this$static.end;
  if (this$static.last <= this$static.next) {
    if (--this$static.next < 0) {
      this$static.next = 0;
    }
  }
  this$static.last = -1;
}

function getClass_15(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return this.next < this.end;
}

function next_0(){
  return $next(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0();
_.getClass$ = getClass_15;
_.hasNext = hasNext;
_.next_0 = next_0;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function $clinit_41(){
  $clinit_41 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor());
}

function addCommand(cmd){
  $clinit_41();
  if (!cmd) {
    throw $NullPointerException(new NullPointerException(), 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function $IncrementalCommandCanceledException(this$static){
  return this$static;
}

function getClass_17(){
  return Lcom_google_gwt_user_client_IncrementalCommandCanceledException_2_classLit;
}

function IncrementalCommandCanceledException(){
}

_ = IncrementalCommandCanceledException.prototype = new RuntimeException();
_.getClass$ = getClass_17;
_.typeId$ = 11;
function $onClose(){
  while (($clinit_45() , timers).size > 0) {
    $cancel(dynamicCast($get_0(timers, 0), 13));
  }
}

function getClass_18(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0();
_.getClass$ = getClass_18;
_.typeId$ = 12;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE?TYPE:(TYPE = $GwtEvent$Type(new GwtEvent$Type())), handler);
}

function addHandler(type, handler){
  return $addHandler_0(getHandlers(), type, handler);
}

function fireClosedImpl(){
  if (closeHandlersInitialized) {
    fire(getHandlers());
  }
}

function fireClosingImpl(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = ($clinit_46() , new Window$ClosingEvent());
    fireEvent(event_0);
    return null;
  }
  return null;
}

function fireEvent(event_0){
  if (handlers) {
    $fireEvent_0(handlers, event_0);
  }
}

function getHandlers(){
  if (!handlers) {
    handlers = $Window$WindowHandlers(new Window$WindowHandlers());
  }
  return handlers;
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler($getWindowCloseHandlerMethodString(), '__gwt_initWindowCloseHandler');
    closeHandlersInitialized = true;
  }
}

var closeHandlersInitialized = false, handlers = null;
function $clinit_46(){
  $clinit_46 = nullMethod;
  TYPE_0 = $GwtEvent$Type(new GwtEvent$Type());
}

function dispatch_0(handler){
  null.nullMethod();
}

function getAssociatedType_0(){
  return TYPE_0;
}

function getClass_20(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent.prototype = new GwtEvent();
_.dispatch = dispatch_0;
_.getAssociatedType = getAssociatedType_0;
_.getClass$ = getClass_20;
_.typeId$ = 0;
var TYPE_0;
function $Window$WindowHandlers(this$static){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry());
  this$static.source = null;
  this$static.isReverseOrder = false;
  return this$static;
}

function getClass_21(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers.prototype = new HandlerManager();
_.getClass$ = getClass_21;
_.typeId$ = 0;
function $getWindowCloseHandlerMethodString(){
  return function(beforeunload, unload){
    var wnd = window, oldOnBeforeUnload = wnd.onbeforeunload, oldOnUnload = wnd.onunload;
    wnd.onbeforeunload = function(evt){
      var ret, oldRet;
      try {
        ret = beforeunload();
      }
       finally {
        oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
      }
      if (ret != null) {
        return ret;
      }
      if (oldRet != null) {
        return oldRet;
      }
    }
    ;
    wnd.onunload = function(evt){
      try {
        unload();
      }
       finally {
        oldOnUnload && oldOnUnload(evt);
        wnd.onresize = null;
        wnd.onscroll = null;
        wnd.onbeforeunload = null;
        wnd.onunload = null;
      }
    }
    ;
    wnd.__gwt_initWindowCloseHandler = undefined;
  }
  .toString();
}

function $initHandler(initFunc, funcName){
  var scriptElem;
  initFunc = $replaceFirst(initFunc, 'function', 'function ' + funcName);
  scriptElem = $createScriptElement(($clinit_8() , $doc), initFunc);
  $doc.body.appendChild(scriptElem);
  $initWindowCloseHandlerImpl();
  $doc.body.removeChild(scriptElem);
}

function $initWindowCloseHandlerImpl(){
  $wnd.__gwt_initWindowCloseHandler(function(){
    return fireClosingImpl();
  }
  , function(){
    fireClosedImpl();
  }
  );
}

function getClass_25(){
  return Ljava_io_InputStream_2_classLit;
}

function InputStream(){
}

_ = InputStream.prototype = new Object_0();
_.getClass$ = getClass_25;
_.typeId$ = 0;
function $ByteArrayInputStream(this$static, buf){
  $ByteArrayInputStream_0(this$static, buf, 0, buf.length);
  return this$static;
}

function $ByteArrayInputStream_0(this$static, buf, off, len){
  this$static.buf = buf;
  this$static.pos = off;
  this$static.count = off + len;
  if (this$static.count > buf.length)
    this$static.count = buf.length;
  return this$static;
}

function $read(this$static){
  if (this$static.pos >= this$static.count)
    return -1;
  return this$static.buf[this$static.pos++] & 255;
}

function $read_0(this$static, buf, off, len){
  if (this$static.pos >= this$static.count)
    return -1;
  len = min(len, this$static.count - this$static.pos);
  arraycopy(this$static.buf, this$static.pos, buf, off, len);
  this$static.pos += len;
  return len;
}

function getClass_22(){
  return Ljava_io_ByteArrayInputStream_2_classLit;
}

function ByteArrayInputStream(){
}

_ = ByteArrayInputStream.prototype = new InputStream();
_.getClass$ = getClass_22;
_.typeId$ = 0;
_.buf = null;
_.count = 0;
_.pos = 0;
function getClass_26(){
  return Ljava_io_OutputStream_2_classLit;
}

function OutputStream(){
}

_ = OutputStream.prototype = new Object_0();
_.getClass$ = getClass_26;
_.typeId$ = 0;
function $ByteArrayOutputStream(this$static){
  this$static.buf = initDim(_3B_classLit, 0, -1, 32, 1);
  return this$static;
}

function $ensureCapacity(this$static, len){
  var newbuf;
  if (len <= this$static.buf.length)
    return;
  len = max(len, this$static.buf.length * 2);
  newbuf = initDim(_3B_classLit, 0, -1, len, 1);
  arraycopy(this$static.buf, 0, newbuf, 0, this$static.buf.length);
  this$static.buf = newbuf;
}

function $toByteArray(this$static){
  var data;
  data = initDim(_3B_classLit, 0, -1, this$static.count, 1);
  arraycopy(this$static.buf, 0, data, 0, this$static.count);
  return data;
}

function $write(this$static, b){
  $ensureCapacity(this$static, this$static.count + 1);
  this$static.buf[this$static.count++] = b << 24 >> 24;
}

function $write_0(this$static, buf, off, len){
  $ensureCapacity(this$static, this$static.count + len);
  arraycopy(buf, off, this$static.buf, this$static.count, len);
  this$static.count += len;
}

function getClass_23(){
  return Ljava_io_ByteArrayOutputStream_2_classLit;
}

function ByteArrayOutputStream(){
}

_ = ByteArrayOutputStream.prototype = new OutputStream();
_.getClass$ = getClass_23;
_.typeId$ = 0;
_.buf = null;
_.count = 0;
function $IOException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_24(){
  return Ljava_io_IOException_2_classLit;
}

function IOException(){
}

_ = IOException.prototype = new Exception();
_.getClass$ = getClass_24;
_.typeId$ = 13;
function $ArithmeticException(this$static, explanation){
  this$static.detailMessage = explanation;
  return this$static;
}

function getClass_27(){
  return Ljava_lang_ArithmeticException_2_classLit;
}

function ArithmeticException(){
}

_ = ArithmeticException.prototype = new RuntimeException();
_.getClass$ = getClass_27;
_.typeId$ = 14;
function $ArrayStoreException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_28(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException();
_.getClass$ = getClass_28;
_.typeId$ = 15;
function createForArray(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className){
  var clazz;
  clazz = new Class();
  clazz.typeName = packageName + className;
  return clazz;
}

function getClass_30(){
  return Ljava_lang_Class_2_classLit;
}

function Class(){
}

_ = Class.prototype = new Object_0();
_.getClass$ = getClass_30;
_.typeId$ = 0;
_.typeName = null;
function getClass_29(){
  return Ljava_lang_ClassCastException_2_classLit;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException();
_.getClass$ = getClass_29;
_.typeId$ = 18;
function equals_0(other){
  return this === (other == null?null:other);
}

function getClass_31(){
  return Ljava_lang_Enum_2_classLit;
}

function hashCode_2(){
  return this.$H || (this.$H = ++sNextHashId);
}

function Enum(){
}

_ = Enum.prototype = new Object_0();
_.equals$ = equals_0;
_.getClass$ = getClass_31;
_.hashCode$ = hashCode_2;
_.typeId$ = 0;
function $IllegalArgumentException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_33(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException();
_.getClass$ = getClass_33;
_.typeId$ = 19;
function getClass_34(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException();
_.getClass$ = getClass_34;
_.typeId$ = 20;
function $IndexOutOfBoundsException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_35(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException();
_.getClass$ = getClass_35;
_.typeId$ = 21;
function max(x, y){
  return x > y?x:y;
}

function min(x, y){
  return x < y?x:y;
}

function $NullPointerException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_36(){
  return Ljava_lang_NullPointerException_2_classLit;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException();
_.getClass$ = getClass_36;
_.typeId$ = 22;
function $equals_0(this$static, other){
  if (!(other != null && canCast(other.typeId$, 1))) {
    return false;
  }
  return String(this$static) == other;
}

function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin){
  var srcIdx;
  for (srcIdx = srcBegin; srcIdx < srcEnd; ++srcIdx) {
    dst[dstBegin++] = this$static.charCodeAt(srcIdx);
  }
}

function $replaceFirst(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex), replace);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    if (replaceStr.charCodeAt(pos + 1) == 36) {
      replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos);
    }
     else {
      replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos);
    }
  }
  return replaceStr;
}

function equals_2(other){
  return $equals_0(this, other);
}

function getClass_40(){
  return Ljava_lang_String_2_classLit;
}

function hashCode_4(){
  return getHashCode_0(this);
}

_ = String.prototype;
_.equals$ = equals_2;
_.getClass$ = getClass_40;
_.hashCode$ = hashCode_4;
_.typeId$ = 2;
function $clinit_77(){
  $clinit_77 = nullMethod;
  back = {};
  front = {};
}

function compute(str){
  var hashCode, i, inc, n;
  n = str.length;
  inc = n < 64?1:~~(n / 32);
  hashCode = 0;
  for (i = 0; i < n; i += inc) {
    hashCode <<= 1;
    hashCode += str.charCodeAt(i);
  }
  hashCode |= 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_77();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  if (result == null) {
    result = compute(str);
  }
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back, count_0 = 0, front;
function $StringBuilder(this$static){
  var array;
  this$static.data = (array = [] , array.explicitLength = 0 , array);
  return this$static;
}

function getClass_39(){
  return Ljava_lang_StringBuilder_2_classLit;
}

function StringBuilder(){
}

_ = StringBuilder.prototype = new Object_0();
_.getClass$ = getClass_39;
_.typeId$ = 0;
function arraycopy(src, srcOfs, dest, destOfs, len){
  var destArray, destEnd, destTypeName, destlen, srcArray, srcTypeName, srclen;
  if (src == null || dest == null) {
    throw new NullPointerException();
  }
  srcTypeName = (src.typeMarker$ == nullMethod || src.typeId$ == 2?src.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  destTypeName = (dest.typeMarker$ == nullMethod || dest.typeId$ == 2?dest.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  if (srcTypeName.charCodeAt(0) != 91 || destTypeName.charCodeAt(0) != 91) {
    throw $ArrayStoreException(new ArrayStoreException(), 'Must be array types');
  }
  if (srcTypeName.charCodeAt(1) != destTypeName.charCodeAt(1)) {
    throw $ArrayStoreException(new ArrayStoreException(), 'Array types must match');
  }
  srclen = src.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException();
  }
  if ((srcTypeName.charCodeAt(1) == 76 || srcTypeName.charCodeAt(1) == 91) && !$equals_0(srcTypeName, destTypeName)) {
    srcArray = dynamicCast(src, 14);
    destArray = dynamicCast(dest, 14);
    if ((src == null?null:src) === (dest == null?null:dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else {
    Array.prototype.splice.apply(dest, [destOfs, len].concat(src.slice(srcOfs, srcOfs + len)));
  }
}

function $UnsupportedOperationException(this$static, message){
  this$static.detailMessage = message;
  return this$static;
}

function getClass_42(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException();
_.getClass$ = getClass_42;
_.typeId$ = 23;
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function add_0(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException(), 'Add not supported on this collection');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return !!iter;
}

function getClass_43(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0();
_.add = add_0;
_.contains = contains;
_.getClass$ = getClass_43;
_.typeId$ = 0;
function equals_5(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && canCast(obj.typeId$, 16))) {
    return false;
  }
  otherMap = dynamicCast(obj, 16);
  if (dynamicCast(this, 16).size != otherMap.size) {
    return false;
  }
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), otherMap).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = dynamicCast($next_0(entry$iterator.iter), 15);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?dynamicCast(this, 16).nullSlotLive:otherKey != null && canCast(otherKey.typeId$, 1)?$hasStringValue(dynamicCast(this, 16), dynamicCast(otherKey, 1)):$hasHashValue(dynamicCast(this, 16), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?dynamicCast(this, 16).nullSlot:otherKey != null && canCast(otherKey.typeId$, 1)?dynamicCast(this, 16).stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(dynamicCast(this, 16), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}

function getClass_52(){
  return Ljava_util_AbstractMap_2_classLit;
}

function hashCode_7(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), dynamicCast(this, 16)).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = dynamicCast($next_0(entry$iterator.iter), 15);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0();
_.equals$ = equals_5;
_.getClass$ = getClass_52;
_.hashCode$ = hashCode_7;
_.typeId$ = 0;
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new_$(this$static, key.substring(1));
      dest.add(entry);
    }
  }
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && canCast(key.typeId$, 1)?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get(this$static, key){
  return key == null?this$static.nullSlot:key != null && canCast(key.typeId$, 1)?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put(this$static, key, value){
  return !key?$putNullSlot(this$static, value):$putHashValue(this$static, key, value, ~~key.index);
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = $MapEntryImpl(new MapEntryImpl(), key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
  }
   else {
    ++this$static.size;
  }
  stringMap[key] = value;
  return result;
}

function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_48(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap();
_.equalsBridge = equalsBridge;
_.getClass$ = getClass_48;
_.typeId$ = 0;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function equals_6(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 17))) {
    return false;
  }
  other = dynamicCast(o, 17);
  if (other.this$0.size != this.size_0()) {
    return false;
  }
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), other.this$0); $hasNext_0(iter.iter);) {
    otherItem = dynamicCast($next_0(iter.iter), 15);
    if (!this.contains(otherItem)) {
      return false;
    }
  }
  return true;
}

function getClass_53(){
  return Ljava_util_AbstractSet_2_classLit;
}

function hashCode_8(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection();
_.equals$ = equals_6;
_.getClass$ = getClass_53;
_.hashCode$ = hashCode_8;
_.typeId$ = 0;
function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function contains_0(o){
  var entry, key, value;
  if (o != null && canCast(o.typeId$, 15)) {
    entry = dynamicCast(o, 15);
    key = entry.getKey();
    if ($containsKey(this.this$0, key)) {
      value = $get(this.this$0, key);
      return $equals_1(entry.getValue(), value);
    }
  }
  return false;
}

function getClass_45(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

function iterator(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), this.this$0);
}

function size_0(){
  return this.this$0.size;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet();
_.contains = contains_0;
_.getClass$ = getClass_45;
_.iterator_0 = iterator;
_.size_0 = size_0;
_.typeId$ = 24;
_.this$0 = null;
function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList());
  if (this$static.this$0.nullSlotLive) {
    $add_0(list, $AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull(), this$static.this$0));
  }
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), list);
  return this$static;
}

function getClass_44(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

function hasNext_0(){
  return $hasNext_0(this.iter);
}

function next_1(){
  return dynamicCast($next_0(this.iter), 15);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0();
_.getClass$ = getClass_44;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.typeId$ = 0;
_.iter = null;
_.this$0 = null;
function equals_4(other){
  var entry;
  if (other != null && canCast(other.typeId$, 15)) {
    entry = dynamicCast(other, 15);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getClass_51(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function hashCode_6(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.getKey() != null) {
    keyHash = hashCode__devirtual$(this.getKey());
  }
  if (this.getValue() != null) {
    valueHash = hashCode__devirtual$(this.getValue());
  }
  return keyHash ^ valueHash;
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0();
_.equals$ = equals_4;
_.getClass$ = getClass_51;
_.hashCode$ = hashCode_6;
_.typeId$ = 25;
function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_46(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}

function getKey(){
  return null;
}

function getValue(){
  return this.this$0.nullSlot;
}

function setValue(object){
  return $putNullSlot(this.this$0, object);
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry();
_.getClass$ = getClass_46;
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 26;
_.this$0 = null;
function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  this$static.key = key;
  return this$static;
}

function getClass_47(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}

function new_$(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString(), key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry();
_.getClass$ = getClass_47;
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 27;
_.key = null;
_.this$0 = null;
function add_1(obj){
  $add(this, this.size_0(), obj);
  return true;
}

function checkIndex(index, size){
  if (index < 0 || index >= size) {
    indexOutOfBounds(index, size);
  }
}

function equals_3(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 3))) {
    return false;
  }
  other = dynamicCast(o, 3);
  if (this.size_0() != other.size) {
    return false;
  }
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 3));
  iterOther = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), other);
  while (iter.i < iter.this$0.size) {
    elem = $next_0(iter);
    elemOther = $next_0(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function getClass_50(){
  return Ljava_util_AbstractList_2_classLit;
}

function hashCode_5(){
  var iter, k, obj;
  k = 1;
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 3));
  while (iter.i < iter.this$0.size) {
    obj = $next_0(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Index: ' + index + ', Size: ' + size);
}

function iterator_0(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 3));
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection();
_.add = add_1;
_.equals$ = equals_3;
_.getClass$ = getClass_50;
_.hashCode$ = hashCode_5;
_.iterator_0 = iterator_0;
_.typeId$ = 0;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_0(this$static){
  return this$static.i < this$static.this$0.size;
}

function $next_0(this$static){
  if (this$static.i >= this$static.this$0.size) {
    throw new NoSuchElementException();
  }
  return $get_0(this$static.this$0, this$static.i++);
}

function getClass_49(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

function hasNext_1(){
  return this.i < this.this$0.size;
}

function next_2(){
  return $next_0(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0();
_.getClass$ = getClass_49;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.typeId$ = 0;
_.i = 0;
_.this$0 = null;
function $ArrayList(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $add_0(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add(this$static, index, o){
  if (index < 0 || index > this$static.size) {
    indexOutOfBounds(index, this$static.size);
  }
  this$static.array.splice(index, 0, o);
  ++this$static.size;
}

function $get_0(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_0(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_0(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size;
  return previous;
}

function $remove_1(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_0(this$static, i);
  return true;
}

function add_2(o){
  return setCheck(this.array, this.size++, o) , true;
}

function contains_1(o){
  return $indexOf_0(this, o, 0) != -1;
}

function getClass_54(){
  return Ljava_util_ArrayList_2_classLit;
}

function size_1(){
  return this.size;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList();
_.add = add_2;
_.contains = contains_1;
_.getClass$ = getClass_54;
_.size_0 = size_1;
_.typeId$ = 28;
_.array = null;
_.size = 0;
function $HashMap(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
  return this$static;
}

function $equals_1(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_55(){
  return Ljava_util_HashMap_2_classLit;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap();
_.getClass$ = getClass_55;
_.typeId$ = 29;
function $MapEntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value = value;
  return this$static;
}

function getClass_56(){
  return Ljava_util_MapEntryImpl_2_classLit;
}

function getKey_1(){
  return this.key;
}

function getValue_1(){
  return this.value;
}

function setValue_1(value){
  var old;
  old = this.value;
  this.value = value;
  return old;
}

function MapEntryImpl(){
}

_ = MapEntryImpl.prototype = new AbstractMapEntry();
_.getClass$ = getClass_56;
_.getKey = getKey_1;
_.getValue = getValue_1;
_.setValue = setValue_1;
_.typeId$ = 30;
_.key = null;
_.value = null;
function getClass_57(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException();
_.getClass$ = getClass_57;
_.typeId$ = 31;
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

function $clinit_106(){
  $clinit_106 = nullMethod;
  MODE_1 = $CompressionMode(new CompressionMode(), 'MODE_1', 16, 64, 0, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_2', 20, 64, 0, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_3', 19, 64, 1, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_4', 20, 64, 1, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_5', 21, 128, 1, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_6', 22, 128, 1, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_7', 23, 128, 1, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_8', 24, 255, 1, 3, 0, 2);
  $CompressionMode(new CompressionMode(), 'MODE_9', 25, 255, 1, 3, 0, 2);
}

function $CompressionMode(this$static, enum$name, dictionarySize, fb, matchFinder, lc, lp, pb){
  $clinit_106();
  this$static.dictionarySize = dictionarySize;
  this$static.fb = fb;
  this$static.matchFinder = matchFinder;
  this$static.lc = lc;
  this$static.lp = lp;
  this$static.pb = pb;
  return this$static;
}

function $configure(this$static, encoder){
  if (!$SetDictionarySize_0(encoder, 1 << this$static.dictionarySize))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
  if (!$SetNumFastBytes(encoder, this$static.fb))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
  if (!$SetMatchFinder(encoder, this$static.matchFinder))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
  if (!$SetLcLpPb_0(encoder, this$static.lc, this$static.lp, this$static.pb))
    throw $RuntimeException(new RuntimeException(), 'unexpected failure');
}

function getClass_58(){
  return Lorg_dellroad_lzma_client_CompressionMode_2_classLit;
}

function CompressionMode(){
}

_ = CompressionMode.prototype = new Enum();
_.getClass$ = getClass_58;
_.typeId$ = 0;
_.dictionarySize = 0;
_.fb = 0;
_.lc = 0;
_.lp = 0;
_.matchFinder = 0;
_.pb = 0;
var MODE_1;
function $clinit_109(){
  $clinit_109 = nullMethod;
  $clinit_106();
}

function $execute(this$static){
  var $e0;
  try {
    return $processChunk(this$static.chunker);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 18)) {
      return false;
    }
     else 
      throw $e0;
  }
}

function $init(this$static, input, output, length_0, mode){
  var encoder, i;
  if (!mode)
    throw $IllegalArgumentException(new IllegalArgumentException(), 'null mode');
  if (compare_0(length_0, N1_longLit) < 0)
    throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid length ' + toString_0(length_0));
  encoder = $Encoder(new Encoder());
  $configure(mode, encoder);
  encoder._writeEndMark = true;
  $WriteCoderProperties(encoder, output);
  for (i = 0; i < 64; i += 8)
    $write(output, lowBits_0(shr(length_0, i)) & 255);
  this$static.chunker = (encoder._needReleaseMFStream = false , (encoder._inStream = input , encoder._finished = false , $Create_2(encoder) , encoder._rangeEncoder.Stream = output , $Init_4(encoder) , $FillDistancesPrices(encoder) , $FillAlignPrices(encoder) , encoder._lenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._lenEncoder, 1 << encoder._posStateBits) , encoder._repMatchLenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._repMatchLenEncoder, 1 << encoder._posStateBits) , encoder.nowPos64 = P0_longLit , undefined) , $Chunker_0(new Chunker(), encoder));
}

function execute(){
  return $execute(this);
}

function getClass_61(){
  return Lorg_dellroad_lzma_client_LZMACompressor_2_classLit;
}

function LZMACompressor(){
}

_ = LZMACompressor.prototype = new Object_0();
_.execute = execute;
_.getClass$ = getClass_61;
_.typeId$ = 32;
_.chunker = null;
function $clinit_107(){
  $clinit_107 = nullMethod;
  $clinit_109();
}

function $LZMAByteArrayCompressor(this$static, data, mode){
  var $e0;
  $clinit_107();
  this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
  try {
    $init(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output, fromInt(data.length), mode);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 18)) {
      throw $RuntimeException(new RuntimeException(), 'impossible exception');
    }
     else 
      throw $e0;
  }
  return this$static;
}

function getClass_59(){
  return Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit;
}

function LZMAByteArrayCompressor(){
}

_ = LZMAByteArrayCompressor.prototype = new LZMACompressor();
_.getClass$ = getClass_59;
_.typeId$ = 33;
_.output = null;
function $execute_0(this$static){
  var $e0, e;
  try {
    return $processChunk(this$static.chunker);
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 18)) {
      e = $e0;
      this$static.exception = e;
      return false;
    }
     else 
      throw $e0;
  }
}

function $init_0(this$static, input, output){
  var decoder, expectedLength, i, properties, r;
  properties = initDim(_3B_classLit, 0, -1, 5, 1);
  for (i = 0; i < properties.length; ++i) {
    r = $read(input);
    if (r == -1)
      throw $IOException(new IOException(), 'truncated input');
    properties[i] = r << 24 >> 24;
  }
  decoder = $Decoder(new Decoder());
  if (!$SetDecoderProperties(decoder, properties))
    throw $IOException(new IOException(), 'corrupted input');
  expectedLength = N1_longLit;
  for (i = 0; i < 64; i += 8) {
    r = $read(input);
    if (r == -1)
      throw $IOException(new IOException(), 'truncated input');
    expectedLength = or(expectedLength, shl(fromInt(r), i));
  }
  this$static.length_0 = expectedLength;
  this$static.chunker = $CodeInChunks(decoder, input, output, this$static.length_0);
}

function execute_0(){
  return $execute_0(this);
}

function getClass_62(){
  return Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit;
}

function LZMADecompressor(){
}

_ = LZMADecompressor.prototype = new Object_0();
_.execute = execute_0;
_.getClass$ = getClass_62;
_.typeId$ = 34;
_.chunker = null;
_.exception = null;
_.length_0 = P0_longLit;
function $LZMAByteArrayDecompressor(this$static, data){
  this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
  $init_0(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output);
  return this$static;
}

function getClass_60(){
  return Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit;
}

function LZMAByteArrayDecompressor(){
}

_ = LZMAByteArrayDecompressor.prototype = new LZMADecompressor();
_.getClass$ = getClass_60;
_.typeId$ = 35;
_.output = null;
function $Create_4(this$static, keepSizeBefore, keepSizeAfter, keepSizeReserv){
  var blockSize;
  this$static._keepSizeBefore = keepSizeBefore;
  this$static._keepSizeAfter = keepSizeAfter;
  blockSize = keepSizeBefore + keepSizeAfter + keepSizeReserv;
  if (this$static._bufferBase == null || this$static._blockSize != blockSize) {
    this$static._bufferBase = null;
    this$static._blockSize = blockSize;
    this$static._bufferBase = initDim(_3B_classLit, 0, -1, this$static._blockSize, 1);
  }
  this$static._pointerToLastSafePosition = this$static._blockSize - keepSizeAfter;
}

function $GetIndexByte(this$static, index){
  return this$static._bufferBase[this$static._bufferOffset + this$static._pos + index];
}

function $GetMatchLen(this$static, index, distance, limit){
  var i, pby;
  if (this$static._streamEndWasReached)
    if (this$static._pos + index + limit > this$static._streamPos)
      limit = this$static._streamPos - (this$static._pos + index);
  ++distance;
  pby = this$static._bufferOffset + this$static._pos + index;
  for (i = 0; i < limit && this$static._bufferBase[pby + i] == this$static._bufferBase[pby + i - distance]; ++i)
  ;
  return i;
}

function $GetNumAvailableBytes(this$static){
  return this$static._streamPos - this$static._pos;
}

function $MoveBlock(this$static){
  var i, numBytes, offset;
  offset = this$static._bufferOffset + this$static._pos - this$static._keepSizeBefore;
  if (offset > 0)
    --offset;
  numBytes = this$static._bufferOffset + this$static._streamPos - offset;
  for (i = 0; i < numBytes; ++i)
    this$static._bufferBase[i] = this$static._bufferBase[offset + i];
  this$static._bufferOffset -= offset;
}

function $MovePos_1(this$static){
  var pointerToPostion;
  ++this$static._pos;
  if (this$static._pos > this$static._posLimit) {
    pointerToPostion = this$static._bufferOffset + this$static._pos;
    if (pointerToPostion > this$static._pointerToLastSafePosition)
      $MoveBlock(this$static);
    $ReadBlock(this$static);
  }
}

function $ReadBlock(this$static){
  var numReadBytes, pointerToPostion, size;
  if (this$static._streamEndWasReached)
    return;
  while (true) {
    size = -this$static._bufferOffset + this$static._blockSize - this$static._streamPos;
    if (size == 0)
      return;
    numReadBytes = $read_0(this$static._stream, this$static._bufferBase, this$static._bufferOffset + this$static._streamPos, size);
    if (numReadBytes == -1) {
      this$static._posLimit = this$static._streamPos;
      pointerToPostion = this$static._bufferOffset + this$static._posLimit;
      if (pointerToPostion > this$static._pointerToLastSafePosition)
        this$static._posLimit = this$static._pointerToLastSafePosition - this$static._bufferOffset;
      this$static._streamEndWasReached = true;
      return;
    }
    this$static._streamPos += numReadBytes;
    if (this$static._streamPos >= this$static._pos + this$static._keepSizeAfter)
      this$static._posLimit = this$static._streamPos - this$static._keepSizeAfter;
  }
}

function $ReduceOffsets(this$static, subValue){
  this$static._bufferOffset += subValue;
  this$static._posLimit -= subValue;
  this$static._pos -= subValue;
  this$static._streamPos -= subValue;
}

function getClass_75(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit;
}

function InWindow(){
}

_ = InWindow.prototype = new Object_0();
_.getClass$ = getClass_75;
_.typeId$ = 0;
_._blockSize = 0;
_._bufferBase = null;
_._bufferOffset = 0;
_._keepSizeAfter = 0;
_._keepSizeBefore = 0;
_._pointerToLastSafePosition = 0;
_._pos = 0;
_._posLimit = 0;
_._stream = null;
_._streamEndWasReached = false;
_._streamPos = 0;
function $clinit_123(){
  $clinit_123 = nullMethod;
  var i, j, r;
  CrcTable = initDim(_3I_classLit, 0, -1, 256, 1);
  for (i = 0; i < 256; ++i) {
    r = i;
    for (j = 0; j < 8; ++j)
      if ((r & 1) != 0)
        r = r >>> 1 ^ -306674912;
      else 
        r >>>= 1;
    CrcTable[i] = r;
  }
}

function $Create_3(this$static, historySize, keepAddBufferBefore, matchMaxLen, keepAddBufferAfter){
  var cyclicBufferSize, hs, windowReservSize;
  if (historySize > 1073741567)
    return false;
  this$static._cutValue = 16 + (matchMaxLen >> 1);
  windowReservSize = ~~((historySize + keepAddBufferBefore + matchMaxLen + keepAddBufferAfter) / 2) + 256;
  $Create_4(this$static, historySize + keepAddBufferBefore, matchMaxLen + keepAddBufferAfter, windowReservSize);
  this$static._matchMaxLen = matchMaxLen;
  cyclicBufferSize = historySize + 1;
  if (this$static._cyclicBufferSize != cyclicBufferSize)
    this$static._son = initDim(_3I_classLit, 0, -1, (this$static._cyclicBufferSize = cyclicBufferSize) * 2, 1);
  hs = 65536;
  if (this$static.HASH_ARRAY) {
    hs = historySize - 1;
    hs |= hs >> 1;
    hs |= hs >> 2;
    hs |= hs >> 4;
    hs |= hs >> 8;
    hs >>= 1;
    hs |= 65535;
    if (hs > 16777216)
      hs >>= 1;
    this$static._hashMask = hs;
    ++hs;
    hs += this$static.kFixHashSize;
  }
  if (hs != this$static._hashSizeSum)
    this$static._hash = initDim(_3I_classLit, 0, -1, this$static._hashSizeSum = hs, 1);
  return true;
}

function $GetMatches(this$static, distances){
  var count, cur, curMatch, curMatch2, curMatch3, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, maxLen, offset, pby1, ptr0, ptr1, temp;
  if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos)
    lenLimit = this$static._matchMaxLen;
  else {
    lenLimit = this$static._streamPos - this$static._pos;
    if (lenLimit < this$static.kMinMatchCheck) {
      $MovePos_0(this$static);
      return 0;
    }
  }
  offset = 0;
  matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
  cur = this$static._bufferOffset + this$static._pos;
  maxLen = 1;
  hash2Value = 0;
  hash3Value = 0;
  if (this$static.HASH_ARRAY) {
    temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
    hash2Value = temp & 1023;
    temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
    hash3Value = temp & 65535;
    hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
  }
   else 
    hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
  curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
  if (this$static.HASH_ARRAY) {
    curMatch2 = this$static._hash[hash2Value];
    curMatch3 = this$static._hash[1024 + hash3Value];
    this$static._hash[hash2Value] = this$static._pos;
    this$static._hash[1024 + hash3Value] = this$static._pos;
    if (curMatch2 > matchMinPos)
      if (this$static._bufferBase[this$static._bufferOffset + curMatch2] == this$static._bufferBase[cur]) {
        distances[offset++] = maxLen = 2;
        distances[offset++] = this$static._pos - curMatch2 - 1;
      }
    if (curMatch3 > matchMinPos)
      if (this$static._bufferBase[this$static._bufferOffset + curMatch3] == this$static._bufferBase[cur]) {
        if (curMatch3 == curMatch2)
          offset -= 2;
        distances[offset++] = maxLen = 3;
        distances[offset++] = this$static._pos - curMatch3 - 1;
        curMatch2 = curMatch3;
      }
    if (offset != 0 && curMatch2 == curMatch) {
      offset -= 2;
      maxLen = 1;
    }
  }
  this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
  ptr0 = (this$static._cyclicBufferPos << 1) + 1;
  ptr1 = this$static._cyclicBufferPos << 1;
  len0 = len1 = this$static.kNumHashDirectBytes;
  if (this$static.kNumHashDirectBytes != 0) {
    if (curMatch > matchMinPos) {
      if (this$static._bufferBase[this$static._bufferOffset + curMatch + this$static.kNumHashDirectBytes] != this$static._bufferBase[cur + this$static.kNumHashDirectBytes]) {
        distances[offset++] = maxLen = this$static.kNumHashDirectBytes;
        distances[offset++] = this$static._pos - curMatch - 1;
      }
    }
  }
  count = this$static._cutValue;
  while (true) {
    if (curMatch <= matchMinPos || count-- == 0) {
      this$static._son[ptr0] = this$static._son[ptr1] = 0;
      break;
    }
    delta = this$static._pos - curMatch;
    cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
    pby1 = this$static._bufferOffset + curMatch;
    len = len0 < len1?len0:len1;
    if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
      while (++len != lenLimit)
        if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len])
          break;
      if (maxLen < len) {
        distances[offset++] = maxLen = len;
        distances[offset++] = delta - 1;
        if (len == lenLimit) {
          this$static._son[ptr1] = this$static._son[cyclicPos];
          this$static._son[ptr0] = this$static._son[cyclicPos + 1];
          break;
        }
      }
    }
    if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
      this$static._son[ptr1] = curMatch;
      ptr1 = cyclicPos + 1;
      curMatch = this$static._son[ptr1];
      len1 = len;
    }
     else {
      this$static._son[ptr0] = curMatch;
      ptr0 = cyclicPos;
      curMatch = this$static._son[ptr0];
      len0 = len;
    }
  }
  $MovePos_0(this$static);
  return offset;
}

function $Init_5(this$static){
  var i;
  this$static._bufferOffset = 0;
  this$static._pos = 0;
  this$static._streamPos = 0;
  this$static._streamEndWasReached = false;
  $ReadBlock(this$static);
  for (i = 0; i < this$static._hashSizeSum; ++i)
    this$static._hash[i] = 0;
  this$static._cyclicBufferPos = 0;
  $ReduceOffsets(this$static, -1);
}

function $MovePos_0(this$static){
  var subValue;
  if (++this$static._cyclicBufferPos >= this$static._cyclicBufferSize)
    this$static._cyclicBufferPos = 0;
  $MovePos_1(this$static);
  if (this$static._pos == 1073741823) {
    subValue = this$static._pos - this$static._cyclicBufferSize;
    $NormalizeLinks(this$static._son, this$static._cyclicBufferSize * 2, subValue);
    $NormalizeLinks(this$static._hash, this$static._hashSizeSum, subValue);
    $ReduceOffsets(this$static, subValue);
  }
}

function $NormalizeLinks(items, numItems, subValue){
  var i, value;
  for (i = 0; i < numItems; ++i) {
    value = items[i];
    if (value <= subValue)
      value = 0;
    else 
      value -= subValue;
    items[i] = value;
  }
}

function $SetType(this$static, numHashBytes){
  this$static.HASH_ARRAY = numHashBytes > 2;
  if (this$static.HASH_ARRAY) {
    this$static.kNumHashDirectBytes = 0;
    this$static.kMinMatchCheck = 4;
    this$static.kFixHashSize = 66560;
  }
   else {
    this$static.kNumHashDirectBytes = 2;
    this$static.kMinMatchCheck = 3;
    this$static.kFixHashSize = 0;
  }
}

function $Skip(this$static, num){
  var count, cur, curMatch, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, pby1, ptr0, ptr1, temp;
  do {
    if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos)
      lenLimit = this$static._matchMaxLen;
    else {
      lenLimit = this$static._streamPos - this$static._pos;
      if (lenLimit < this$static.kMinMatchCheck) {
        $MovePos_0(this$static);
        continue;
      }
    }
    matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
    cur = this$static._bufferOffset + this$static._pos;
    if (this$static.HASH_ARRAY) {
      temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
      hash2Value = temp & 1023;
      this$static._hash[hash2Value] = this$static._pos;
      temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
      hash3Value = temp & 65535;
      this$static._hash[1024 + hash3Value] = this$static._pos;
      hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
    }
     else 
      hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
    curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
    this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
    ptr0 = (this$static._cyclicBufferPos << 1) + 1;
    ptr1 = this$static._cyclicBufferPos << 1;
    len0 = len1 = this$static.kNumHashDirectBytes;
    count = this$static._cutValue;
    while (true) {
      if (curMatch <= matchMinPos || count-- == 0) {
        this$static._son[ptr0] = this$static._son[ptr1] = 0;
        break;
      }
      delta = this$static._pos - curMatch;
      cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
      pby1 = this$static._bufferOffset + curMatch;
      len = len0 < len1?len0:len1;
      if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
        while (++len != lenLimit)
          if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len])
            break;
        if (len == lenLimit) {
          this$static._son[ptr1] = this$static._son[cyclicPos];
          this$static._son[ptr0] = this$static._son[cyclicPos + 1];
          break;
        }
      }
      if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
        this$static._son[ptr1] = curMatch;
        ptr1 = cyclicPos + 1;
        curMatch = this$static._son[ptr1];
        len1 = len;
      }
       else {
        this$static._son[ptr0] = curMatch;
        ptr0 = cyclicPos;
        curMatch = this$static._son[ptr0];
        len0 = len;
      }
    }
    $MovePos_0(this$static);
  }
   while (--num != 0);
}

function getClass_74(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit;
}

function BinTree(){
}

_ = BinTree.prototype = new InWindow();
_.getClass$ = getClass_74;
_.typeId$ = 0;
_.HASH_ARRAY = true;
_._cutValue = 255;
_._cyclicBufferPos = 0;
_._cyclicBufferSize = 0;
_._hash = null;
_._hashMask = 0;
_._hashSizeSum = 0;
_._matchMaxLen = 0;
_._son = null;
_.kFixHashSize = 66560;
_.kMinMatchCheck = 4;
_.kNumHashDirectBytes = 0;
var CrcTable;
function $CopyBlock(this$static, distance, len){
  var pos;
  pos = this$static._pos - distance - 1;
  if (pos < 0)
    pos += this$static._windowSize;
  for (; len != 0; --len) {
    if (pos >= this$static._windowSize)
      pos = 0;
    this$static._buffer[this$static._pos++] = this$static._buffer[pos++];
    if (this$static._pos >= this$static._windowSize)
      $Flush_0(this$static);
  }
}

function $Create_5(this$static, windowSize){
  if (this$static._buffer == null || this$static._windowSize != windowSize)
    this$static._buffer = initDim(_3B_classLit, 0, -1, windowSize, 1);
  this$static._windowSize = windowSize;
  this$static._pos = 0;
  this$static._streamPos = 0;
}

function $Flush_0(this$static){
  var size;
  size = this$static._pos - this$static._streamPos;
  if (size == 0)
    return;
  $write_0(this$static._stream, this$static._buffer, this$static._streamPos, size);
  if (this$static._pos >= this$static._windowSize)
    this$static._pos = 0;
  this$static._streamPos = this$static._pos;
}

function $GetByte(this$static, distance){
  var pos;
  pos = this$static._pos - distance - 1;
  if (pos < 0)
    pos += this$static._windowSize;
  return this$static._buffer[pos];
}

function $Init_7(this$static, solid){
  if (!solid) {
    this$static._streamPos = 0;
    this$static._pos = 0;
  }
}

function $PutByte(this$static, b){
  this$static._buffer[this$static._pos++] = b;
  if (this$static._pos >= this$static._windowSize)
    $Flush_0(this$static);
}

function $ReleaseStream(this$static){
  $Flush_0(this$static);
  this$static._stream = null;
}

function $SetStream_0(this$static, stream){
  $Flush_0(this$static);
  this$static._stream = null;
  this$static._stream = stream;
}

function getClass_76(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit;
}

function OutWindow(){
}

_ = OutWindow.prototype = new Object_0();
_.getClass$ = getClass_76;
_.typeId$ = 0;
_._buffer = null;
_._pos = 0;
_._stream = null;
_._streamPos = 0;
_._windowSize = 0;
function GetLenToPosState(len){
  len -= 2;
  if (len < 4)
    return len;
  return 3;
}

function StateUpdateChar(index){
  if (index < 4)
    return 0;
  if (index < 10)
    return index - 3;
  return index - 6;
}

function $Chunker_0(this$static, encoder){
  this$static.encoder = encoder;
  this$static.decoder = null;
  this$static.alive = true;
  return this$static;
}

function $Chunker(this$static, decoder){
  this$static.decoder = decoder;
  this$static.encoder = null;
  this$static.alive = true;
  return this$static;
}

function $processChunk(this$static){
  var exception;
  if (!this$static.alive)
    throw new IllegalStateException();
  exception = true;
  try {
    if (this$static.encoder)
      $processEncoderChunk(this$static);
    else 
      $processDecoderChunk(this$static);
    exception = false;
    return this$static.alive;
  }
   finally {
    if (exception)
      this$static.alive = false;
  }
}

function $processDecoderChunk(this$static){
  var result;
  result = $CodeOneChunk(this$static.decoder);
  if (result == -1)
    throw $IOException(new IOException(), 'corrupted input');
  if (result == 1 || compare_0(this$static.decoder.outSize, P0_longLit) >= 0 && compare_0(this$static.decoder.nowPos64, this$static.decoder.outSize) >= 0) {
    $CodeFinish(this$static.decoder);
    this$static.alive = false;
  }
}

function $processEncoderChunk(this$static){
  $CodeOneBlock(this$static.encoder, this$static.encoder.processedInSize, this$static.encoder.processedOutSize, this$static.encoder.finished);
  if (this$static.encoder.finished[0]) {
    $ReleaseStreams(this$static.encoder);
    this$static.alive = false;
  }
}

function getClass_63(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit;
}

function Chunker(){
}

_ = Chunker.prototype = new Object_0();
_.getClass$ = getClass_63;
_.typeId$ = 0;
_.alive = false;
_.decoder = null;
_.encoder = null;
function $CodeFinish(this$static){
  $Flush_0(this$static.m_OutWindow);
  $ReleaseStream(this$static.m_OutWindow);
  this$static.m_RangeDecoder.Stream = null;
}

function $CodeInChunks(this$static, inStream, outStream, outSize){
  this$static.m_RangeDecoder.Stream = inStream;
  $SetStream_0(this$static.m_OutWindow, outStream);
  $Init_1(this$static);
  this$static.state = 0;
  this$static.rep0 = 0;
  this$static.rep1 = 0;
  this$static.rep2 = 0;
  this$static.rep3 = 0;
  this$static.outSize = outSize;
  this$static.nowPos64 = P0_longLit;
  this$static.prevByte = 0;
  return $Chunker(new Chunker(), this$static);
}

function $CodeOneChunk(this$static){
  var decoder2, distance, len, numDirectBits, posSlot, posState;
  posState = lowBits_0(this$static.nowPos64) & this$static.m_PosStateMask;
  if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsMatchDecoders, (this$static.state << 4) + posState) == 0) {
    decoder2 = $GetDecoder(this$static.m_LiteralDecoder, lowBits_0(this$static.nowPos64), this$static.prevByte);
    if (this$static.state < 7) {
      this$static.prevByte = $DecodeNormal(decoder2, this$static.m_RangeDecoder);
    }
     else {
      this$static.prevByte = $DecodeWithMatchByte(decoder2, this$static.m_RangeDecoder, $GetByte(this$static.m_OutWindow, this$static.rep0));
    }
    $PutByte(this$static.m_OutWindow, this$static.prevByte);
    this$static.state = StateUpdateChar(this$static.state);
    this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
  }
   else {
    if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepDecoders, this$static.state) == 1) {
      len = 0;
      if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG0Decoders, this$static.state) == 0) {
        if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRep0LongDecoders, (this$static.state << 4) + posState) == 0) {
          this$static.state = this$static.state < 7?9:11;
          len = 1;
        }
      }
       else {
        if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG1Decoders, this$static.state) == 0)
          distance = this$static.rep1;
        else {
          if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG2Decoders, this$static.state) == 0)
            distance = this$static.rep2;
          else {
            distance = this$static.rep3;
            this$static.rep3 = this$static.rep2;
          }
          this$static.rep2 = this$static.rep1;
        }
        this$static.rep1 = this$static.rep0;
        this$static.rep0 = distance;
      }
      if (len == 0) {
        len = $Decode(this$static.m_RepLenDecoder, this$static.m_RangeDecoder, posState) + 2;
        this$static.state = this$static.state < 7?8:11;
      }
    }
     else {
      this$static.rep3 = this$static.rep2;
      this$static.rep2 = this$static.rep1;
      this$static.rep1 = this$static.rep0;
      len = 2 + $Decode(this$static.m_LenDecoder, this$static.m_RangeDecoder, posState);
      this$static.state = this$static.state < 7?7:10;
      posSlot = $Decode_0(this$static.m_PosSlotDecoder[GetLenToPosState(len)], this$static.m_RangeDecoder);
      if (posSlot >= 4) {
        numDirectBits = (posSlot >> 1) - 1;
        this$static.rep0 = (2 | posSlot & 1) << numDirectBits;
        if (posSlot < 14)
          this$static.rep0 += ReverseDecode(this$static.m_PosDecoders, this$static.rep0 - posSlot - 1, this$static.m_RangeDecoder, numDirectBits);
        else {
          this$static.rep0 += $DecodeDirectBits(this$static.m_RangeDecoder, numDirectBits - 4) << 4;
          this$static.rep0 += $ReverseDecode(this$static.m_PosAlignDecoder, this$static.m_RangeDecoder);
          if (this$static.rep0 < 0) {
            if (this$static.rep0 == -1)
              return 1;
            return -1;
          }
        }
      }
       else 
        this$static.rep0 = posSlot;
    }
    if (compare_0(fromInt(this$static.rep0), this$static.nowPos64) >= 0 || this$static.rep0 >= this$static.m_DictionarySizeCheck) {
      return -1;
    }
    $CopyBlock(this$static.m_OutWindow, this$static.rep0, len);
    this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
    this$static.prevByte = $GetByte(this$static.m_OutWindow, 0);
  }
  return 0;
}

function $Decoder(this$static){
  var i;
  this$static.m_OutWindow = new OutWindow();
  this$static.m_RangeDecoder = new Decoder_0();
  this$static.m_IsMatchDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static.m_IsRepDecoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRepG0Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRepG1Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRepG2Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static.m_IsRep0LongDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static.m_PosSlotDecoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 4, 0);
  this$static.m_PosDecoders = initDim(_3S_classLit, 0, -1, 114, 1);
  this$static.m_PosAlignDecoder = $BitTreeDecoder(new BitTreeDecoder(), 4);
  this$static.m_LenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
  this$static.m_RepLenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
  this$static.m_LiteralDecoder = new Decoder$LiteralDecoder();
  for (i = 0; i < 4; ++i)
    this$static.m_PosSlotDecoder[i] = $BitTreeDecoder(new BitTreeDecoder(), 6);
  return this$static;
}

function $Init_1(this$static){
  var i;
  $Init_7(this$static.m_OutWindow, false);
  InitBitModels(this$static.m_IsMatchDecoders);
  InitBitModels(this$static.m_IsRep0LongDecoders);
  InitBitModels(this$static.m_IsRepDecoders);
  InitBitModels(this$static.m_IsRepG0Decoders);
  InitBitModels(this$static.m_IsRepG1Decoders);
  InitBitModels(this$static.m_IsRepG2Decoders);
  InitBitModels(this$static.m_PosDecoders);
  $Init_0(this$static.m_LiteralDecoder);
  for (i = 0; i < 4; ++i)
    InitBitModels(this$static.m_PosSlotDecoder[i].Models);
  $Init(this$static.m_LenDecoder);
  $Init(this$static.m_RepLenDecoder);
  InitBitModels(this$static.m_PosAlignDecoder.Models);
  $Init_8(this$static.m_RangeDecoder);
}

function $SetDecoderProperties(this$static, properties){
  var dictionarySize, i, lc, lp, pb, remainder, val;
  if (properties.length < 5)
    return false;
  val = properties[0] & 255;
  lc = val % 9;
  remainder = ~~(val / 9);
  lp = remainder % 5;
  pb = ~~(remainder / 5);
  dictionarySize = 0;
  for (i = 0; i < 4; ++i)
    dictionarySize += (properties[1 + i] & 255) << i * 8;
  if (!$SetLcLpPb(this$static, lc, lp, pb))
    return false;
  return $SetDictionarySize(this$static, dictionarySize);
}

function $SetDictionarySize(this$static, dictionarySize){
  if (dictionarySize < 0)
    return false;
  if (this$static.m_DictionarySize != dictionarySize) {
    this$static.m_DictionarySize = dictionarySize;
    this$static.m_DictionarySizeCheck = max(this$static.m_DictionarySize, 1);
    $Create_5(this$static.m_OutWindow, max(this$static.m_DictionarySizeCheck, 4096));
  }
  return true;
}

function $SetLcLpPb(this$static, lc, lp, pb){
  var numPosStates;
  if (lc > 8 || lp > 4 || pb > 4)
    return false;
  $Create_0(this$static.m_LiteralDecoder, lp, lc);
  numPosStates = 1 << pb;
  $Create(this$static.m_LenDecoder, numPosStates);
  $Create(this$static.m_RepLenDecoder, numPosStates);
  this$static.m_PosStateMask = numPosStates - 1;
  return true;
}

function getClass_67(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit;
}

function Decoder(){
}

_ = Decoder.prototype = new Object_0();
_.getClass$ = getClass_67;
_.typeId$ = 0;
_.m_DictionarySize = -1;
_.m_DictionarySizeCheck = -1;
_.m_PosStateMask = 0;
_.nowPos64 = P0_longLit;
_.outSize = P0_longLit;
_.prevByte = 0;
_.rep0 = 0;
_.rep1 = 0;
_.rep2 = 0;
_.rep3 = 0;
_.state = 0;
function $Create(this$static, numPosStates){
  for (; this$static.m_NumPosStates < numPosStates; ++this$static.m_NumPosStates) {
    this$static.m_LowCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
    this$static.m_MidCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
  }
}

function $Decode(this$static, rangeDecoder, posState){
  var symbol;
  if ($DecodeBit(rangeDecoder, this$static.m_Choice, 0) == 0)
    return $Decode_0(this$static.m_LowCoder[posState], rangeDecoder);
  symbol = 8;
  if ($DecodeBit(rangeDecoder, this$static.m_Choice, 1) == 0)
    symbol += $Decode_0(this$static.m_MidCoder[posState], rangeDecoder);
  else 
    symbol += 8 + $Decode_0(this$static.m_HighCoder, rangeDecoder);
  return symbol;
}

function $Decoder$LenDecoder(this$static){
  this$static.m_Choice = initDim(_3S_classLit, 0, -1, 2, 1);
  this$static.m_LowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 16, 0);
  this$static.m_MidCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 16, 0);
  this$static.m_HighCoder = $BitTreeDecoder(new BitTreeDecoder(), 8);
  return this$static;
}

function $Init(this$static){
  var posState;
  InitBitModels(this$static.m_Choice);
  for (posState = 0; posState < this$static.m_NumPosStates; ++posState) {
    InitBitModels(this$static.m_LowCoder[posState].Models);
    InitBitModels(this$static.m_MidCoder[posState].Models);
  }
  InitBitModels(this$static.m_HighCoder.Models);
}

function getClass_64(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit;
}

function Decoder$LenDecoder(){
}

_ = Decoder$LenDecoder.prototype = new Object_0();
_.getClass$ = getClass_64;
_.typeId$ = 0;
_.m_NumPosStates = 0;
function $Create_0(this$static, numPosBits, numPrevBits){
  var i, numStates;
  if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits)
    return;
  this$static.m_NumPosBits = numPosBits;
  this$static.m_PosMask = (1 << numPosBits) - 1;
  this$static.m_NumPrevBits = numPrevBits;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit, 0, 4, numStates, 0);
  for (i = 0; i < numStates; ++i)
    this$static.m_Coders[i] = $Decoder$LiteralDecoder$Decoder2(new Decoder$LiteralDecoder$Decoder2());
}

function $GetDecoder(this$static, pos, prevByte){
  return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
}

function $Init_0(this$static){
  var i, numStates;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  for (i = 0; i < numStates; ++i)
    InitBitModels(this$static.m_Coders[i].m_Decoders);
}

function getClass_66(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit;
}

function Decoder$LiteralDecoder(){
}

_ = Decoder$LiteralDecoder.prototype = new Object_0();
_.getClass$ = getClass_66;
_.typeId$ = 0;
_.m_Coders = null;
_.m_NumPosBits = 0;
_.m_NumPrevBits = 0;
_.m_PosMask = 0;
function $DecodeNormal(this$static, rangeDecoder){
  var symbol;
  symbol = 1;
  do 
    symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
  while (symbol < 256);
  return symbol << 24 >> 24;
}

function $DecodeWithMatchByte(this$static, rangeDecoder, matchByte){
  var bit, matchBit, symbol;
  symbol = 1;
  do {
    matchBit = matchByte >> 7 & 1;
    matchByte <<= 1;
    bit = $DecodeBit(rangeDecoder, this$static.m_Decoders, (1 + matchBit << 8) + symbol);
    symbol = symbol << 1 | bit;
    if (matchBit != bit) {
      while (symbol < 256)
        symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
      break;
    }
  }
   while (symbol < 256);
  return symbol << 24 >> 24;
}

function $Decoder$LiteralDecoder$Decoder2(this$static){
  this$static.m_Decoders = initDim(_3S_classLit, 0, -1, 768, 1);
  return this$static;
}

function getClass_65(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit;
}

function Decoder$LiteralDecoder$Decoder2(){
}

_ = Decoder$LiteralDecoder$Decoder2.prototype = new Object_0();
_.getClass$ = getClass_65;
_.typeId$ = 36;
function $clinit_122(){
  $clinit_122 = nullMethod;
  var c, j, k, slotFast;
  g_FastPos = initDim(_3B_classLit, 0, -1, 2048, 1);
  c = 2;
  g_FastPos[0] = 0;
  g_FastPos[1] = 1;
  for (slotFast = 2; slotFast < 22; ++slotFast) {
    k = 1 << (slotFast >> 1) - 1;
    for (j = 0; j < k; ++j , ++c)
      g_FastPos[c] = slotFast << 24 >> 24;
  }
}

function $Backward(this$static, cur){
  var backCur, backMem, posMem, posPrev;
  this$static._optimumEndIndex = cur;
  posMem = this$static._optimum[cur].PosPrev;
  backMem = this$static._optimum[cur].BackPrev;
  do {
    if (this$static._optimum[cur].Prev1IsChar) {
      $MakeAsChar(this$static._optimum[posMem]);
      this$static._optimum[posMem].PosPrev = posMem - 1;
      if (this$static._optimum[cur].Prev2) {
        this$static._optimum[posMem - 1].Prev1IsChar = false;
        this$static._optimum[posMem - 1].PosPrev = this$static._optimum[cur].PosPrev2;
        this$static._optimum[posMem - 1].BackPrev = this$static._optimum[cur].BackPrev2;
      }
    }
    posPrev = posMem;
    backCur = backMem;
    backMem = this$static._optimum[posPrev].BackPrev;
    posMem = this$static._optimum[posPrev].PosPrev;
    this$static._optimum[posPrev].BackPrev = backCur;
    this$static._optimum[posPrev].PosPrev = cur;
    cur = posPrev;
  }
   while (cur > 0);
  this$static.backRes = this$static._optimum[0].BackPrev;
  this$static._optimumCurrentIndex = this$static._optimum[0].PosPrev;
  return this$static._optimumCurrentIndex;
}

function $BaseInit(this$static){
  var i;
  this$static._state = 0;
  this$static._previousByte = 0;
  for (i = 0; i < 4; ++i)
    this$static._repDistances[i] = 0;
}

function $CodeOneBlock(this$static, inSize, outSize, finished){
  var baseVal, complexState, curByte, distance, footerBits, i, len, lenToPosState, matchByte, pos, posReduced, posSlot, posState, progressPosValuePrev, subCoder;
  inSize[0] = P0_longLit;
  outSize[0] = P0_longLit;
  finished[0] = true;
  if (this$static._inStream) {
    this$static._matchFinder._stream = this$static._inStream;
    $Init_5(this$static._matchFinder);
    this$static._needReleaseMFStream = true;
    this$static._inStream = null;
  }
  if (this$static._finished)
    return;
  this$static._finished = true;
  progressPosValuePrev = this$static.nowPos64;
  if (eq(this$static.nowPos64, P0_longLit)) {
    if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
      $Flush(this$static, lowBits_0(this$static.nowPos64));
      return;
    }
    $ReadMatchDistances(this$static);
    posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
    $Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 0);
    this$static._state = StateUpdateChar(this$static._state);
    curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
    $Encode_1($GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte), this$static._rangeEncoder, curByte);
    this$static._previousByte = curByte;
    --this$static._additionalOffset;
    this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
  }
  if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
    $Flush(this$static, lowBits_0(this$static.nowPos64));
    return;
  }
  while (true) {
    len = $GetOptimum(this$static, lowBits_0(this$static.nowPos64));
    pos = this$static.backRes;
    posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
    complexState = (this$static._state << 4) + posState;
    if (len == 1 && pos == -1) {
      $Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 0);
      curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
      subCoder = $GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte);
      if (this$static._state < 7) {
        $Encode_1(subCoder, this$static._rangeEncoder, curByte);
      }
       else {
        matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - this$static._additionalOffset);
        $EncodeMatched(subCoder, this$static._rangeEncoder, matchByte, curByte);
      }
      this$static._previousByte = curByte;
      this$static._state = StateUpdateChar(this$static._state);
    }
     else {
      $Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 1);
      if (pos < 4) {
        $Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 1);
        if (pos == 0) {
          $Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 0);
          if (len == 1)
            $Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 0);
          else 
            $Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 1);
        }
         else {
          $Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 1);
          if (pos == 1)
            $Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 0);
          else {
            $Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 1);
            $Encode_3(this$static._rangeEncoder, this$static._isRepG2, this$static._state, pos - 2);
          }
        }
        if (len == 1)
          this$static._state = this$static._state < 7?9:11;
        else {
          $Encode_0(this$static._repMatchLenEncoder, this$static._rangeEncoder, len - 2, posState);
          this$static._state = this$static._state < 7?8:11;
        }
        distance = this$static._repDistances[pos];
        if (pos != 0) {
          for (i = pos; i >= 1; --i)
            this$static._repDistances[i] = this$static._repDistances[i - 1];
          this$static._repDistances[0] = distance;
        }
      }
       else {
        $Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
        this$static._state = this$static._state < 7?7:10;
        $Encode_0(this$static._lenEncoder, this$static._rangeEncoder, len - 2, posState);
        pos -= 4;
        posSlot = GetPosSlot(pos);
        lenToPosState = GetLenToPosState(len);
        $Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, posSlot);
        if (posSlot >= 4) {
          footerBits = (posSlot >> 1) - 1;
          baseVal = (2 | posSlot & 1) << footerBits;
          posReduced = pos - baseVal;
          if (posSlot < 14)
            ReverseEncode(this$static._posEncoders, baseVal - posSlot - 1, this$static._rangeEncoder, footerBits, posReduced);
          else {
            $EncodeDirectBits(this$static._rangeEncoder, posReduced >> 4, footerBits - 4);
            $ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, posReduced & 15);
            ++this$static._alignPriceCount;
          }
        }
        distance = pos;
        for (i = 3; i >= 1; --i)
          this$static._repDistances[i] = this$static._repDistances[i - 1];
        this$static._repDistances[0] = distance;
        ++this$static._matchPriceCount;
      }
      this$static._previousByte = $GetIndexByte(this$static._matchFinder, len - 1 - this$static._additionalOffset);
    }
    this$static._additionalOffset -= len;
    this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
    if (this$static._additionalOffset == 0) {
      if (this$static._matchPriceCount >= 128)
        $FillDistancesPrices(this$static);
      if (this$static._alignPriceCount >= 16)
        $FillAlignPrices(this$static);
      inSize[0] = this$static.nowPos64;
      outSize[0] = $GetProcessedSizeAdd(this$static._rangeEncoder);
      if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
        $Flush(this$static, lowBits_0(this$static.nowPos64));
        return;
      }
      if (compare_0(sub(this$static.nowPos64, progressPosValuePrev), P1000_longLit) >= 0) {
        this$static._finished = false;
        finished[0] = false;
        return;
      }
    }
  }
}

function $Create_2(this$static){
  var bt, numHashBytes;
  if (!this$static._matchFinder) {
    bt = ($clinit_123() , new BinTree());
    numHashBytes = 4;
    if (this$static._matchFinderType == 0)
      numHashBytes = 2;
    $SetType(bt, numHashBytes);
    this$static._matchFinder = bt;
  }
  $Create_1(this$static._literalEncoder, this$static._numLiteralPosStateBits, this$static._numLiteralContextBits);
  if (this$static._dictionarySize == this$static._dictionarySizePrev && this$static._numFastBytesPrev == this$static._numFastBytes)
    return;
  $Create_3(this$static._matchFinder, this$static._dictionarySize, 4096, this$static._numFastBytes, 274);
  this$static._dictionarySizePrev = this$static._dictionarySize;
  this$static._numFastBytesPrev = this$static._numFastBytes;
}

function $Encoder(this$static){
  var i;
  $clinit_122();
  this$static._repDistances = initDim(_3I_classLit, 0, -1, 4, 1);
  this$static._optimum = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit, 0, 6, 4096, 0);
  this$static._rangeEncoder = ($clinit_129() , new Encoder_0());
  this$static._isMatch = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static._isRep = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRepG0 = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRepG1 = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRepG2 = initDim(_3S_classLit, 0, -1, 12, 1);
  this$static._isRep0Long = initDim(_3S_classLit, 0, -1, 192, 1);
  this$static._posSlotEncoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 4, 0);
  this$static._posEncoders = initDim(_3S_classLit, 0, -1, 114, 1);
  this$static._posAlignEncoder = $BitTreeEncoder(new BitTreeEncoder(), 4);
  this$static._lenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
  this$static._repMatchLenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
  this$static._literalEncoder = new Encoder$LiteralEncoder();
  this$static._matchDistances = initDim(_3I_classLit, 0, -1, 548, 1);
  this$static._posSlotPrices = initDim(_3I_classLit, 0, -1, 256, 1);
  this$static._distancesPrices = initDim(_3I_classLit, 0, -1, 512, 1);
  this$static._alignPrices = initDim(_3I_classLit, 0, -1, 16, 1);
  this$static.reps = initDim(_3I_classLit, 0, -1, 4, 1);
  this$static.repLens = initDim(_3I_classLit, 0, -1, 4, 1);
  this$static.processedInSize = initDim(_3J_classLit, 0, -1, 1, 3);
  this$static.processedOutSize = initDim(_3J_classLit, 0, -1, 1, 3);
  this$static.finished = initDim(_3Z_classLit, 0, -1, 1, 2);
  this$static.properties = initDim(_3B_classLit, 0, -1, 5, 1);
  this$static.tempPrices = initDim(_3I_classLit, 0, -1, 128, 1);
  for (i = 0; i < 4096; ++i)
    this$static._optimum[i] = new Encoder$Optimal();
  for (i = 0; i < 4; ++i)
    this$static._posSlotEncoder[i] = $BitTreeEncoder(new BitTreeEncoder(), 6);
  return this$static;
}

function $FillAlignPrices(this$static){
  var i;
  for (i = 0; i < 16; ++i)
    this$static._alignPrices[i] = $ReverseGetPrice(this$static._posAlignEncoder, i);
  this$static._alignPriceCount = 0;
}

function $FillDistancesPrices(this$static){
  var baseVal, encoder, footerBits, i, lenToPosState, posSlot, st, st2;
  for (i = 4; i < 128; ++i) {
    posSlot = GetPosSlot(i);
    footerBits = (posSlot >> 1) - 1;
    baseVal = (2 | posSlot & 1) << footerBits;
    this$static.tempPrices[i] = ReverseGetPrice(this$static._posEncoders, baseVal - posSlot - 1, footerBits, i - baseVal);
  }
  for (lenToPosState = 0; lenToPosState < 4; ++lenToPosState) {
    encoder = this$static._posSlotEncoder[lenToPosState];
    st = lenToPosState << 6;
    for (posSlot = 0; posSlot < this$static._distTableSize; ++posSlot)
      this$static._posSlotPrices[st + posSlot] = $GetPrice_1(encoder, posSlot);
    for (posSlot = 14; posSlot < this$static._distTableSize; ++posSlot)
      this$static._posSlotPrices[st + posSlot] += (posSlot >> 1) - 1 - 4 << 6;
    st2 = lenToPosState * 128;
    for (i = 0; i < 4; ++i)
      this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + i];
    for (; i < 128; ++i)
      this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + GetPosSlot(i)] + this$static.tempPrices[i];
  }
  this$static._matchPriceCount = 0;
}

function $Flush(this$static, nowPos){
  $ReleaseMFStream(this$static);
  $WriteEndMarker(this$static, nowPos & this$static._posStateMask);
  $FlushData(this$static._rangeEncoder);
}

function $GetOptimum(this$static, position){
  var cur, curAnd1Price, curAndLenCharPrice, curAndLenPrice, curBack, curPrice, currentByte, distance, i, len, lenEnd, lenMain, lenRes, lenTest, lenTest2, lenTestTemp, matchByte, matchPrice, newLen, nextIsChar, nextMatchPrice, nextOptimum, nextRepMatchPrice, normalMatchPrice, numAvailableBytes, numAvailableBytesFull, numDistancePairs, offs, offset, opt, optimum, pos, posPrev, posState, posStateNext, price_4, repIndex, repLen, repMatchPrice, repMaxIndex, shortRepPrice, startLen, state, state2, t, price, price_0, price_1, price_2, price_3;
  if (this$static._optimumEndIndex != this$static._optimumCurrentIndex) {
    lenRes = this$static._optimum[this$static._optimumCurrentIndex].PosPrev - this$static._optimumCurrentIndex;
    this$static.backRes = this$static._optimum[this$static._optimumCurrentIndex].BackPrev;
    this$static._optimumCurrentIndex = this$static._optimum[this$static._optimumCurrentIndex].PosPrev;
    return lenRes;
  }
  this$static._optimumCurrentIndex = this$static._optimumEndIndex = 0;
  if (this$static._longestMatchWasFound) {
    lenMain = this$static._longestMatchLength;
    this$static._longestMatchWasFound = false;
  }
   else {
    lenMain = $ReadMatchDistances(this$static);
  }
  numDistancePairs = this$static._numDistancePairs;
  numAvailableBytes = $GetNumAvailableBytes(this$static._matchFinder) + 1;
  if (numAvailableBytes < 2) {
    this$static.backRes = -1;
    return 1;
  }
  if (numAvailableBytes > 273)
    numAvailableBytes = 273;
  repMaxIndex = 0;
  for (i = 0; i < 4; ++i) {
    this$static.reps[i] = this$static._repDistances[i];
    this$static.repLens[i] = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[i], 273);
    if (this$static.repLens[i] > this$static.repLens[repMaxIndex])
      repMaxIndex = i;
  }
  if (this$static.repLens[repMaxIndex] >= this$static._numFastBytes) {
    this$static.backRes = repMaxIndex;
    lenRes = this$static.repLens[repMaxIndex];
    $MovePos(this$static, lenRes - 1);
    return lenRes;
  }
  if (lenMain >= this$static._numFastBytes) {
    this$static.backRes = this$static._matchDistances[numDistancePairs - 1] + 4;
    $MovePos(this$static, lenMain - 1);
    return lenMain;
  }
  currentByte = $GetIndexByte(this$static._matchFinder, -1);
  matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - 1);
  if (lenMain < 2 && currentByte != matchByte && this$static.repLens[repMaxIndex] < 2) {
    this$static.backRes = -1;
    return 1;
  }
  this$static._optimum[0].State = this$static._state;
  posState = position & this$static._posStateMask;
  this$static._optimum[1].Price = ($clinit_129() , ProbPrices[this$static._isMatch[(this$static._state << 4) + posState] >>> 2]) + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, this$static._previousByte), this$static._state >= 7, matchByte, currentByte);
  $MakeAsChar(this$static._optimum[1]);
  matchPrice = ProbPrices[2048 - this$static._isMatch[(this$static._state << 4) + posState] >>> 2];
  repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[this$static._state] >>> 2];
  if (matchByte == currentByte) {
    shortRepPrice = repMatchPrice + $GetRepLen1Price(this$static, this$static._state, posState);
    if (shortRepPrice < this$static._optimum[1].Price) {
      this$static._optimum[1].Price = shortRepPrice;
      $MakeAsShortRep(this$static._optimum[1]);
    }
  }
  lenEnd = lenMain >= this$static.repLens[repMaxIndex]?lenMain:this$static.repLens[repMaxIndex];
  if (lenEnd < 2) {
    this$static.backRes = this$static._optimum[1].BackPrev;
    return 1;
  }
  this$static._optimum[1].PosPrev = 0;
  this$static._optimum[0].Backs0 = this$static.reps[0];
  this$static._optimum[0].Backs1 = this$static.reps[1];
  this$static._optimum[0].Backs2 = this$static.reps[2];
  this$static._optimum[0].Backs3 = this$static.reps[3];
  len = lenEnd;
  do 
    this$static._optimum[len--].Price = 268435455;
  while (len >= 2);
  for (i = 0; i < 4; ++i) {
    repLen = this$static.repLens[i];
    if (repLen < 2)
      continue;
    price_4 = repMatchPrice + $GetPureRepPrice(this$static, i, this$static._state, posState);
    do {
      curAndLenPrice = price_4 + $GetPrice(this$static._repMatchLenEncoder, repLen - 2, posState);
      optimum = this$static._optimum[repLen];
      if (curAndLenPrice < optimum.Price) {
        optimum.Price = curAndLenPrice;
        optimum.PosPrev = 0;
        optimum.BackPrev = i;
        optimum.Prev1IsChar = false;
      }
    }
     while (--repLen >= 2);
  }
  normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[this$static._state] >>> 2];
  len = this$static.repLens[0] >= 2?this$static.repLens[0] + 1:2;
  if (len <= lenMain) {
    offs = 0;
    while (len > this$static._matchDistances[offs])
      offs += 2;
    for (;; ++len) {
      distance = this$static._matchDistances[offs + 1];
      curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, distance, len, posState);
      optimum = this$static._optimum[len];
      if (curAndLenPrice < optimum.Price) {
        optimum.Price = curAndLenPrice;
        optimum.PosPrev = 0;
        optimum.BackPrev = distance + 4;
        optimum.Prev1IsChar = false;
      }
      if (len == this$static._matchDistances[offs]) {
        offs += 2;
        if (offs == numDistancePairs)
          break;
      }
    }
  }
  cur = 0;
  while (true) {
    ++cur;
    if (cur == lenEnd)
      return $Backward(this$static, cur);
    newLen = $ReadMatchDistances(this$static);
    numDistancePairs = this$static._numDistancePairs;
    if (newLen >= this$static._numFastBytes) {
      this$static._longestMatchLength = newLen;
      this$static._longestMatchWasFound = true;
      return $Backward(this$static, cur);
    }
    ++position;
    posPrev = this$static._optimum[cur].PosPrev;
    if (this$static._optimum[cur].Prev1IsChar) {
      --posPrev;
      if (this$static._optimum[cur].Prev2) {
        state = this$static._optimum[this$static._optimum[cur].PosPrev2].State;
        if (this$static._optimum[cur].BackPrev2 < 4)
          state = state < 7?8:11;
        else 
          state = state < 7?7:10;
      }
       else 
        state = this$static._optimum[posPrev].State;
      state = StateUpdateChar(state);
    }
     else 
      state = this$static._optimum[posPrev].State;
    if (posPrev == cur - 1) {
      if (this$static._optimum[cur].BackPrev == 0)
        state = state < 7?9:11;
      else 
        state = StateUpdateChar(state);
    }
     else {
      if (this$static._optimum[cur].Prev1IsChar && this$static._optimum[cur].Prev2) {
        posPrev = this$static._optimum[cur].PosPrev2;
        pos = this$static._optimum[cur].BackPrev2;
        state = state < 7?8:11;
      }
       else {
        pos = this$static._optimum[cur].BackPrev;
        if (pos < 4)
          state = state < 7?8:11;
        else 
          state = state < 7?7:10;
      }
      opt = this$static._optimum[posPrev];
      if (pos < 4) {
        if (pos == 0) {
          this$static.reps[0] = opt.Backs0;
          this$static.reps[1] = opt.Backs1;
          this$static.reps[2] = opt.Backs2;
          this$static.reps[3] = opt.Backs3;
        }
         else if (pos == 1) {
          this$static.reps[0] = opt.Backs1;
          this$static.reps[1] = opt.Backs0;
          this$static.reps[2] = opt.Backs2;
          this$static.reps[3] = opt.Backs3;
        }
         else if (pos == 2) {
          this$static.reps[0] = opt.Backs2;
          this$static.reps[1] = opt.Backs0;
          this$static.reps[2] = opt.Backs1;
          this$static.reps[3] = opt.Backs3;
        }
         else {
          this$static.reps[0] = opt.Backs3;
          this$static.reps[1] = opt.Backs0;
          this$static.reps[2] = opt.Backs1;
          this$static.reps[3] = opt.Backs2;
        }
      }
       else {
        this$static.reps[0] = pos - 4;
        this$static.reps[1] = opt.Backs0;
        this$static.reps[2] = opt.Backs1;
        this$static.reps[3] = opt.Backs2;
      }
    }
    this$static._optimum[cur].State = state;
    this$static._optimum[cur].Backs0 = this$static.reps[0];
    this$static._optimum[cur].Backs1 = this$static.reps[1];
    this$static._optimum[cur].Backs2 = this$static.reps[2];
    this$static._optimum[cur].Backs3 = this$static.reps[3];
    curPrice = this$static._optimum[cur].Price;
    currentByte = $GetIndexByte(this$static._matchFinder, -1);
    matchByte = $GetIndexByte(this$static._matchFinder, -this$static.reps[0] - 1 - 1);
    posState = position & this$static._posStateMask;
    curAnd1Price = curPrice + ProbPrices[this$static._isMatch[(state << 4) + posState] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, $GetIndexByte(this$static._matchFinder, -2)), state >= 7, matchByte, currentByte);
    nextOptimum = this$static._optimum[cur + 1];
    nextIsChar = false;
    if (curAnd1Price < nextOptimum.Price) {
      nextOptimum.Price = curAnd1Price;
      nextOptimum.PosPrev = cur;
      nextOptimum.BackPrev = -1;
      nextOptimum.Prev1IsChar = false;
      nextIsChar = true;
    }
    matchPrice = curPrice + ProbPrices[2048 - this$static._isMatch[(state << 4) + posState] >>> 2];
    repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[state] >>> 2];
    if (matchByte == currentByte && !(nextOptimum.PosPrev < cur && nextOptimum.BackPrev == 0)) {
      shortRepPrice = repMatchPrice + (ProbPrices[this$static._isRepG0[state] >>> 2] + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2]);
      if (shortRepPrice <= nextOptimum.Price) {
        nextOptimum.Price = shortRepPrice;
        nextOptimum.PosPrev = cur;
        nextOptimum.BackPrev = 0;
        nextOptimum.Prev1IsChar = false;
        nextIsChar = true;
      }
    }
    numAvailableBytesFull = $GetNumAvailableBytes(this$static._matchFinder) + 1;
    numAvailableBytesFull = 4095 - cur < numAvailableBytesFull?4095 - cur:numAvailableBytesFull;
    numAvailableBytes = numAvailableBytesFull;
    if (numAvailableBytes < 2)
      continue;
    if (numAvailableBytes > this$static._numFastBytes)
      numAvailableBytes = this$static._numFastBytes;
    if (!nextIsChar && matchByte != currentByte) {
      t = min(numAvailableBytesFull - 1, this$static._numFastBytes);
      lenTest2 = $GetMatchLen(this$static._matchFinder, 0, this$static.reps[0], t);
      if (lenTest2 >= 2) {
        state2 = StateUpdateChar(state);
        posStateNext = position + 1 & this$static._posStateMask;
        nextRepMatchPrice = curAnd1Price + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
        offset = cur + 1 + lenTest2;
        while (lenEnd < offset)
          this$static._optimum[++lenEnd].Price = 268435455;
        curAndLenPrice = nextRepMatchPrice + (price = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price + $GetPureRepPrice(this$static, 0, state2, posStateNext));
        optimum = this$static._optimum[offset];
        if (curAndLenPrice < optimum.Price) {
          optimum.Price = curAndLenPrice;
          optimum.PosPrev = cur + 1;
          optimum.BackPrev = 0;
          optimum.Prev1IsChar = true;
          optimum.Prev2 = false;
        }
      }
    }
    startLen = 2;
    for (repIndex = 0; repIndex < 4; ++repIndex) {
      lenTest = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[repIndex], numAvailableBytes);
      if (lenTest < 2)
        continue;
      lenTestTemp = lenTest;
      do {
        while (lenEnd < cur + lenTest)
          this$static._optimum[++lenEnd].Price = 268435455;
        curAndLenPrice = repMatchPrice + (price_0 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_0 + $GetPureRepPrice(this$static, repIndex, state, posState));
        optimum = this$static._optimum[cur + lenTest];
        if (curAndLenPrice < optimum.Price) {
          optimum.Price = curAndLenPrice;
          optimum.PosPrev = cur;
          optimum.BackPrev = repIndex;
          optimum.Prev1IsChar = false;
        }
      }
       while (--lenTest >= 2);
      lenTest = lenTestTemp;
      if (repIndex == 0)
        startLen = lenTest + 1;
      if (lenTest < numAvailableBytesFull) {
        t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
        lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, this$static.reps[repIndex], t);
        if (lenTest2 >= 2) {
          state2 = state < 7?8:11;
          posStateNext = position + lenTest & this$static._posStateMask;
          curAndLenCharPrice = repMatchPrice + (price_1 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_1 + $GetPureRepPrice(this$static, repIndex, state, posState)) + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - 1 - (this$static.reps[repIndex] + 1)), $GetIndexByte(this$static._matchFinder, lenTest - 1));
          state2 = StateUpdateChar(state2);
          posStateNext = position + lenTest + 1 & this$static._posStateMask;
          nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
          nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
          offset = lenTest + 1 + lenTest2;
          while (lenEnd < cur + offset)
            this$static._optimum[++lenEnd].Price = 268435455;
          curAndLenPrice = nextRepMatchPrice + (price_2 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_2 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
          optimum = this$static._optimum[cur + offset];
          if (curAndLenPrice < optimum.Price) {
            optimum.Price = curAndLenPrice;
            optimum.PosPrev = cur + lenTest + 1;
            optimum.BackPrev = 0;
            optimum.Prev1IsChar = true;
            optimum.Prev2 = true;
            optimum.PosPrev2 = cur;
            optimum.BackPrev2 = repIndex;
          }
        }
      }
    }
    if (newLen > numAvailableBytes) {
      newLen = numAvailableBytes;
      for (numDistancePairs = 0; newLen > this$static._matchDistances[numDistancePairs]; numDistancePairs += 2)
      ;
      this$static._matchDistances[numDistancePairs] = newLen;
      numDistancePairs += 2;
    }
    if (newLen >= startLen) {
      normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[state] >>> 2];
      while (lenEnd < cur + newLen)
        this$static._optimum[++lenEnd].Price = 268435455;
      offs = 0;
      while (startLen > this$static._matchDistances[offs])
        offs += 2;
      for (lenTest = startLen;; ++lenTest) {
        curBack = this$static._matchDistances[offs + 1];
        curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, curBack, lenTest, posState);
        optimum = this$static._optimum[cur + lenTest];
        if (curAndLenPrice < optimum.Price) {
          optimum.Price = curAndLenPrice;
          optimum.PosPrev = cur;
          optimum.BackPrev = curBack + 4;
          optimum.Prev1IsChar = false;
        }
        if (lenTest == this$static._matchDistances[offs]) {
          if (lenTest < numAvailableBytesFull) {
            t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
            lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, curBack, t);
            if (lenTest2 >= 2) {
              state2 = state < 7?7:10;
              posStateNext = position + lenTest & this$static._posStateMask;
              curAndLenCharPrice = curAndLenPrice + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - (curBack + 1) - 1), $GetIndexByte(this$static._matchFinder, lenTest - 1));
              state2 = StateUpdateChar(state2);
              posStateNext = position + lenTest + 1 & this$static._posStateMask;
              nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
              nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
              offset = lenTest + 1 + lenTest2;
              while (lenEnd < cur + offset)
                this$static._optimum[++lenEnd].Price = 268435455;
              curAndLenPrice = nextRepMatchPrice + (price_3 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_3 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
              optimum = this$static._optimum[cur + offset];
              if (curAndLenPrice < optimum.Price) {
                optimum.Price = curAndLenPrice;
                optimum.PosPrev = cur + lenTest + 1;
                optimum.BackPrev = 0;
                optimum.Prev1IsChar = true;
                optimum.Prev2 = true;
                optimum.PosPrev2 = cur;
                optimum.BackPrev2 = curBack + 4;
              }
            }
          }
          offs += 2;
          if (offs == numDistancePairs)
            break;
        }
      }
    }
  }
}

function $GetPosLenPrice(this$static, pos, len, posState){
  var lenToPosState, price;
  lenToPosState = GetLenToPosState(len);
  if (pos < 128)
    price = this$static._distancesPrices[lenToPosState * 128 + pos];
  else 
    price = this$static._posSlotPrices[(lenToPosState << 6) + GetPosSlot2(pos)] + this$static._alignPrices[pos & 15];
  return price + $GetPrice(this$static._lenEncoder, len - 2, posState);
}

function $GetPureRepPrice(this$static, repIndex, state, posState){
  var price;
  if (repIndex == 0) {
    price = ($clinit_129() , ProbPrices[this$static._isRepG0[state] >>> 2]);
    price += ProbPrices[2048 - this$static._isRep0Long[(state << 4) + posState] >>> 2];
  }
   else {
    price = ($clinit_129() , ProbPrices[2048 - this$static._isRepG0[state] >>> 2]);
    if (repIndex == 1)
      price += ProbPrices[this$static._isRepG1[state] >>> 2];
    else {
      price += ProbPrices[2048 - this$static._isRepG1[state] >>> 2];
      price += GetPrice(this$static._isRepG2[state], repIndex - 2);
    }
  }
  return price;
}

function $GetRepLen1Price(this$static, state, posState){
  return ($clinit_129() , ProbPrices[this$static._isRepG0[state] >>> 2]) + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2];
}

function $Init_4(this$static){
  var i;
  $BaseInit(this$static);
  $Init_9(this$static._rangeEncoder);
  InitBitModels_0(this$static._isMatch);
  InitBitModels_0(this$static._isRep0Long);
  InitBitModels_0(this$static._isRep);
  InitBitModels_0(this$static._isRepG0);
  InitBitModels_0(this$static._isRepG1);
  InitBitModels_0(this$static._isRepG2);
  InitBitModels_0(this$static._posEncoders);
  $Init_3(this$static._literalEncoder);
  for (i = 0; i < 4; ++i)
    InitBitModels(this$static._posSlotEncoder[i].Models);
  $Init_2(this$static._lenEncoder, 1 << this$static._posStateBits);
  $Init_2(this$static._repMatchLenEncoder, 1 << this$static._posStateBits);
  InitBitModels(this$static._posAlignEncoder.Models);
  this$static._longestMatchWasFound = false;
  this$static._optimumEndIndex = 0;
  this$static._optimumCurrentIndex = 0;
  this$static._additionalOffset = 0;
}

function $MovePos(this$static, num){
  if (num > 0) {
    $Skip(this$static._matchFinder, num);
    this$static._additionalOffset += num;
  }
}

function $ReadMatchDistances(this$static){
  var lenRes;
  lenRes = 0;
  this$static._numDistancePairs = $GetMatches(this$static._matchFinder, this$static._matchDistances);
  if (this$static._numDistancePairs > 0) {
    lenRes = this$static._matchDistances[this$static._numDistancePairs - 2];
    if (lenRes == this$static._numFastBytes)
      lenRes += $GetMatchLen(this$static._matchFinder, lenRes - 1, this$static._matchDistances[this$static._numDistancePairs - 1], 273 - lenRes);
  }
  ++this$static._additionalOffset;
  return lenRes;
}

function $ReleaseMFStream(this$static){
  if (!!this$static._matchFinder && this$static._needReleaseMFStream) {
    this$static._matchFinder._stream = null;
    this$static._needReleaseMFStream = false;
  }
}

function $ReleaseStreams(this$static){
  $ReleaseMFStream(this$static);
  this$static._rangeEncoder.Stream = null;
}

function $SetDictionarySize_0(this$static, dictionarySize){
  var dicLogSize;
  if (dictionarySize < 1 || dictionarySize > 536870912)
    return false;
  this$static._dictionarySize = dictionarySize;
  for (dicLogSize = 0; dictionarySize > 1 << dicLogSize; ++dicLogSize)
  ;
  this$static._distTableSize = dicLogSize * 2;
  return true;
}

function $SetLcLpPb_0(this$static, lc, lp, pb){
  if (lp < 0 || lp > 4 || lc < 0 || lc > 8 || pb < 0 || pb > 4)
    return false;
  this$static._numLiteralPosStateBits = lp;
  this$static._numLiteralContextBits = lc;
  this$static._posStateBits = pb;
  this$static._posStateMask = (1 << this$static._posStateBits) - 1;
  return true;
}

function $SetMatchFinder(this$static, matchFinderIndex){
  var matchFinderIndexPrev;
  if (matchFinderIndex < 0 || matchFinderIndex > 2)
    return false;
  matchFinderIndexPrev = this$static._matchFinderType;
  this$static._matchFinderType = matchFinderIndex;
  if (!!this$static._matchFinder && matchFinderIndexPrev != this$static._matchFinderType) {
    this$static._dictionarySizePrev = -1;
    this$static._matchFinder = null;
  }
  return true;
}

function $SetNumFastBytes(this$static, numFastBytes){
  if (numFastBytes < 5 || numFastBytes > 273)
    return false;
  this$static._numFastBytes = numFastBytes;
  return true;
}

function $WriteCoderProperties(this$static, outStream){
  var i;
  this$static.properties[0] = (this$static._posStateBits * 5 + this$static._numLiteralPosStateBits) * 9 + this$static._numLiteralContextBits << 24 >> 24;
  for (i = 0; i < 4; ++i)
    this$static.properties[1 + i] = this$static._dictionarySize >> 8 * i << 24 >> 24;
  $write_0(outStream, this$static.properties, 0, 5);
}

function $WriteEndMarker(this$static, posState){
  var lenToPosState;
  if (!this$static._writeEndMark)
    return;
  $Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 1);
  $Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
  this$static._state = this$static._state < 7?7:10;
  $Encode_0(this$static._lenEncoder, this$static._rangeEncoder, 0, posState);
  lenToPosState = GetLenToPosState(2);
  $Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, 63);
  $EncodeDirectBits(this$static._rangeEncoder, 67108863, 26);
  $ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, 15);
}

function GetPosSlot(pos){
  if (pos < 2048)
    return g_FastPos[pos];
  if (pos < 2097152)
    return g_FastPos[pos >> 10] + 20;
  return g_FastPos[pos >> 20] + 40;
}

function GetPosSlot2(pos){
  if (pos < 131072)
    return g_FastPos[pos >> 6] + 12;
  if (pos < 134217728)
    return g_FastPos[pos >> 16] + 32;
  return g_FastPos[pos >> 26] + 52;
}

function getClass_73(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit;
}

function Encoder(){
}

_ = Encoder.prototype = new Object_0();
_.getClass$ = getClass_73;
_.typeId$ = 0;
_._additionalOffset = 0;
_._alignPriceCount = 0;
_._dictionarySize = 4194304;
_._dictionarySizePrev = -1;
_._distTableSize = 44;
_._finished = false;
_._inStream = null;
_._longestMatchLength = 0;
_._longestMatchWasFound = false;
_._matchFinder = null;
_._matchFinderType = 1;
_._matchPriceCount = 0;
_._needReleaseMFStream = false;
_._numDistancePairs = 0;
_._numFastBytes = 32;
_._numFastBytesPrev = -1;
_._numLiteralContextBits = 3;
_._numLiteralPosStateBits = 0;
_._optimumCurrentIndex = 0;
_._optimumEndIndex = 0;
_._posStateBits = 2;
_._posStateMask = 3;
_._previousByte = 0;
_._state = 0;
_._writeEndMark = false;
_.backRes = 0;
_.nowPos64 = P0_longLit;
var g_FastPos;
function $Encode(this$static, rangeEncoder, symbol, posState){
  if (symbol < 8) {
    $Encode_3(rangeEncoder, this$static._choice, 0, 0);
    $Encode_2(this$static._lowCoder[posState], rangeEncoder, symbol);
  }
   else {
    symbol -= 8;
    $Encode_3(rangeEncoder, this$static._choice, 0, 1);
    if (symbol < 8) {
      $Encode_3(rangeEncoder, this$static._choice, 1, 0);
      $Encode_2(this$static._midCoder[posState], rangeEncoder, symbol);
    }
     else {
      $Encode_3(rangeEncoder, this$static._choice, 1, 1);
      $Encode_2(this$static._highCoder, rangeEncoder, symbol - 8);
    }
  }
}

function $Encoder$LenEncoder(this$static){
  var posState;
  this$static._choice = initDim(_3S_classLit, 0, -1, 2, 1);
  this$static._lowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 16, 0);
  this$static._midCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 16, 0);
  this$static._highCoder = $BitTreeEncoder(new BitTreeEncoder(), 8);
  for (posState = 0; posState < 16; ++posState) {
    this$static._lowCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
    this$static._midCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
  }
  return this$static;
}

function $Init_2(this$static, numPosStates){
  var posState;
  InitBitModels_0(this$static._choice);
  for (posState = 0; posState < numPosStates; ++posState) {
    InitBitModels(this$static._lowCoder[posState].Models);
    InitBitModels(this$static._midCoder[posState].Models);
  }
  InitBitModels(this$static._highCoder.Models);
}

function $SetPrices(this$static, posState, numSymbols, prices, st){
  var a0, a1, b0, b1, i;
  a0 = ($clinit_129() , ProbPrices[this$static._choice[0] >>> 2]);
  a1 = ProbPrices[2048 - this$static._choice[0] >>> 2];
  b0 = a1 + ProbPrices[this$static._choice[1] >>> 2];
  b1 = a1 + ProbPrices[2048 - this$static._choice[1] >>> 2];
  i = 0;
  for (i = 0; i < 8; ++i) {
    if (i >= numSymbols)
      return;
    prices[st + i] = a0 + $GetPrice_1(this$static._lowCoder[posState], i);
  }
  for (; i < 16; ++i) {
    if (i >= numSymbols)
      return;
    prices[st + i] = b0 + $GetPrice_1(this$static._midCoder[posState], i - 8);
  }
  for (; i < numSymbols; ++i)
    prices[st + i] = b1 + $GetPrice_1(this$static._highCoder, i - 8 - 8);
}

function getClass_68(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit;
}

function Encoder$LenEncoder(){
}

_ = Encoder$LenEncoder.prototype = new Object_0();
_.getClass$ = getClass_68;
_.typeId$ = 0;
function $Encode_0(this$static, rangeEncoder, symbol, posState){
  $Encode(this$static, rangeEncoder, symbol, posState);
  if (--this$static._counters[posState] == 0) {
    $SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
    this$static._counters[posState] = this$static._tableSize;
  }
}

function $Encoder$LenPriceTableEncoder(this$static){
  $Encoder$LenEncoder(this$static);
  this$static._prices = initDim(_3I_classLit, 0, -1, 4352, 1);
  this$static._counters = initDim(_3I_classLit, 0, -1, 16, 1);
  return this$static;
}

function $GetPrice(this$static, symbol, posState){
  return this$static._prices[posState * 272 + symbol];
}

function $UpdateTables(this$static, numPosStates){
  var posState;
  for (posState = 0; posState < numPosStates; ++posState) {
    $SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
    this$static._counters[posState] = this$static._tableSize;
  }
}

function getClass_69(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit;
}

function Encoder$LenPriceTableEncoder(){
}

_ = Encoder$LenPriceTableEncoder.prototype = new Encoder$LenEncoder();
_.getClass$ = getClass_69;
_.typeId$ = 0;
_._tableSize = 0;
function $Create_1(this$static, numPosBits, numPrevBits){
  var i, numStates;
  if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits)
    return;
  this$static.m_NumPosBits = numPosBits;
  this$static.m_PosMask = (1 << numPosBits) - 1;
  this$static.m_NumPrevBits = numPrevBits;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit, 0, 5, numStates, 0);
  for (i = 0; i < numStates; ++i)
    this$static.m_Coders[i] = $Encoder$LiteralEncoder$Encoder2(new Encoder$LiteralEncoder$Encoder2());
}

function $GetSubCoder(this$static, pos, prevByte){
  return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
}

function $Init_3(this$static){
  var i, numStates;
  numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
  for (i = 0; i < numStates; ++i)
    InitBitModels_0(this$static.m_Coders[i].m_Encoders);
}

function getClass_71(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit;
}

function Encoder$LiteralEncoder(){
}

_ = Encoder$LiteralEncoder.prototype = new Object_0();
_.getClass$ = getClass_71;
_.typeId$ = 0;
_.m_Coders = null;
_.m_NumPosBits = 0;
_.m_NumPrevBits = 0;
_.m_PosMask = 0;
function $Encode_1(this$static, rangeEncoder, symbol){
  var bit, context, i;
  context = 1;
  for (i = 7; i >= 0; --i) {
    bit = symbol >> i & 1;
    $Encode_3(rangeEncoder, this$static.m_Encoders, context, bit);
    context = context << 1 | bit;
  }
}

function $EncodeMatched(this$static, rangeEncoder, matchByte, symbol){
  var bit, context, i, matchBit, same, state;
  context = 1;
  same = true;
  for (i = 7; i >= 0; --i) {
    bit = symbol >> i & 1;
    state = context;
    if (same) {
      matchBit = matchByte >> i & 1;
      state += 1 + matchBit << 8;
      same = matchBit == bit;
    }
    $Encode_3(rangeEncoder, this$static.m_Encoders, state, bit);
    context = context << 1 | bit;
  }
}

function $Encoder$LiteralEncoder$Encoder2(this$static){
  this$static.m_Encoders = initDim(_3S_classLit, 0, -1, 768, 1);
  return this$static;
}

function $GetPrice_0(this$static, matchMode, matchByte, symbol){
  var bit, context, i, matchBit, price;
  price = 0;
  context = 1;
  i = 7;
  if (matchMode) {
    for (; i >= 0; --i) {
      matchBit = matchByte >> i & 1;
      bit = symbol >> i & 1;
      price += GetPrice(this$static.m_Encoders[(1 + matchBit << 8) + context], bit);
      context = context << 1 | bit;
      if (matchBit != bit) {
        --i;
        break;
      }
    }
  }
  for (; i >= 0; --i) {
    bit = symbol >> i & 1;
    price += GetPrice(this$static.m_Encoders[context], bit);
    context = context << 1 | bit;
  }
  return price;
}

function getClass_70(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit;
}

function Encoder$LiteralEncoder$Encoder2(){
}

_ = Encoder$LiteralEncoder$Encoder2.prototype = new Object_0();
_.getClass$ = getClass_70;
_.typeId$ = 37;
function $MakeAsChar(this$static){
  this$static.BackPrev = -1;
  this$static.Prev1IsChar = false;
}

function $MakeAsShortRep(this$static){
  this$static.BackPrev = 0;
  this$static.Prev1IsChar = false;
}

function getClass_72(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit;
}

function Encoder$Optimal(){
}

_ = Encoder$Optimal.prototype = new Object_0();
_.getClass$ = getClass_72;
_.typeId$ = 38;
_.BackPrev = 0;
_.BackPrev2 = 0;
_.Backs0 = 0;
_.Backs1 = 0;
_.Backs2 = 0;
_.Backs3 = 0;
_.PosPrev = 0;
_.PosPrev2 = 0;
_.Prev1IsChar = false;
_.Prev2 = false;
_.Price = 0;
_.State = 0;
function $BitTreeDecoder(this$static, numBitLevels){
  this$static.NumBitLevels = numBitLevels;
  this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
  return this$static;
}

function $Decode_0(this$static, rangeDecoder){
  var bitIndex, m;
  m = 1;
  for (bitIndex = this$static.NumBitLevels; bitIndex != 0; --bitIndex)
    m = (m << 1) + $DecodeBit(rangeDecoder, this$static.Models, m);
  return m - (1 << this$static.NumBitLevels);
}

function $ReverseDecode(this$static, rangeDecoder){
  var bit, bitIndex, m, symbol;
  m = 1;
  symbol = 0;
  for (bitIndex = 0; bitIndex < this$static.NumBitLevels; ++bitIndex) {
    bit = $DecodeBit(rangeDecoder, this$static.Models, m);
    m <<= 1;
    m += bit;
    symbol |= bit << bitIndex;
  }
  return symbol;
}

function ReverseDecode(Models, startIndex, rangeDecoder, NumBitLevels){
  var bit, bitIndex, m, symbol;
  m = 1;
  symbol = 0;
  for (bitIndex = 0; bitIndex < NumBitLevels; ++bitIndex) {
    bit = $DecodeBit(rangeDecoder, Models, startIndex + m);
    m <<= 1;
    m += bit;
    symbol |= bit << bitIndex;
  }
  return symbol;
}

function getClass_77(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit;
}

function BitTreeDecoder(){
}

_ = BitTreeDecoder.prototype = new Object_0();
_.getClass$ = getClass_77;
_.typeId$ = 39;
_.Models = null;
_.NumBitLevels = 0;
function $BitTreeEncoder(this$static, numBitLevels){
  this$static.NumBitLevels = numBitLevels;
  this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
  return this$static;
}

function $Encode_2(this$static, rangeEncoder, symbol){
  var bit, bitIndex, m;
  m = 1;
  for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
    --bitIndex;
    bit = symbol >>> bitIndex & 1;
    $Encode_3(rangeEncoder, this$static.Models, m, bit);
    m = m << 1 | bit;
  }
}

function $GetPrice_1(this$static, symbol){
  var bit, bitIndex, m, price;
  price = 0;
  m = 1;
  for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
    --bitIndex;
    bit = symbol >>> bitIndex & 1;
    price += GetPrice(this$static.Models[m], bit);
    m = (m << 1) + bit;
  }
  return price;
}

function $ReverseEncode(this$static, rangeEncoder, symbol){
  var bit, i, m;
  m = 1;
  for (i = 0; i < this$static.NumBitLevels; ++i) {
    bit = symbol & 1;
    $Encode_3(rangeEncoder, this$static.Models, m, bit);
    m = m << 1 | bit;
    symbol >>= 1;
  }
}

function $ReverseGetPrice(this$static, symbol){
  var bit, i, m, price;
  price = 0;
  m = 1;
  for (i = this$static.NumBitLevels; i != 0; --i) {
    bit = symbol & 1;
    symbol >>>= 1;
    price += GetPrice(this$static.Models[m], bit);
    m = m << 1 | bit;
  }
  return price;
}

function ReverseEncode(Models, startIndex, rangeEncoder, NumBitLevels, symbol){
  var bit, i, m;
  m = 1;
  for (i = 0; i < NumBitLevels; ++i) {
    bit = symbol & 1;
    $Encode_3(rangeEncoder, Models, startIndex + m, bit);
    m = m << 1 | bit;
    symbol >>= 1;
  }
}

function ReverseGetPrice(Models, startIndex, NumBitLevels, symbol){
  var bit, i, m, price;
  price = 0;
  m = 1;
  for (i = NumBitLevels; i != 0; --i) {
    bit = symbol & 1;
    symbol >>>= 1;
    price += ($clinit_129() , ProbPrices[((Models[startIndex + m] - bit ^ -bit) & 2047) >>> 2]);
    m = m << 1 | bit;
  }
  return price;
}

function getClass_78(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit;
}

function BitTreeEncoder(){
}

_ = BitTreeEncoder.prototype = new Object_0();
_.getClass$ = getClass_78;
_.typeId$ = 40;
_.Models = null;
_.NumBitLevels = 0;
function $DecodeBit(this$static, probs, index){
  var newBound, prob;
  prob = probs[index];
  newBound = (this$static.Range >>> 11) * prob;
  if ((this$static.Code ^ -2147483648) < (newBound ^ -2147483648)) {
    this$static.Range = newBound;
    probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
    if ((this$static.Range & -16777216) == 0) {
      this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
      this$static.Range <<= 8;
    }
    return 0;
  }
   else {
    this$static.Range -= newBound;
    this$static.Code -= newBound;
    probs[index] = prob - (prob >>> 5) << 16 >> 16;
    if ((this$static.Range & -16777216) == 0) {
      this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
      this$static.Range <<= 8;
    }
    return 1;
  }
}

function $DecodeDirectBits(this$static, numTotalBits){
  var i, result, t;
  result = 0;
  for (i = numTotalBits; i != 0; --i) {
    this$static.Range >>>= 1;
    t = this$static.Code - this$static.Range >>> 31;
    this$static.Code -= this$static.Range & t - 1;
    result = result << 1 | 1 - t;
    if ((this$static.Range & -16777216) == 0) {
      this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
      this$static.Range <<= 8;
    }
  }
  return result;
}

function $Init_8(this$static){
  var i;
  this$static.Code = 0;
  this$static.Range = -1;
  for (i = 0; i < 5; ++i)
    this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
}

function InitBitModels(probs){
  var i;
  for (i = 0; i < probs.length; ++i)
    probs[i] = 1024;
}

function getClass_79(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit;
}

function Decoder_0(){
}

_ = Decoder_0.prototype = new Object_0();
_.getClass$ = getClass_79;
_.typeId$ = 0;
_.Code = 0;
_.Range = 0;
_.Stream = null;
function $clinit_129(){
  $clinit_129 = nullMethod;
  var end, i, j, start;
  ProbPrices = initDim(_3I_classLit, 0, -1, 512, 1);
  for (i = 8; i >= 0; --i) {
    start = 1 << 9 - i - 1;
    end = 1 << 9 - i;
    for (j = start; j < end; ++j)
      ProbPrices[j] = (i << 6) + (end - j << 6 >>> 9 - i - 1);
  }
}

function $Encode_3(this$static, probs, index, symbol){
  var newBound, prob;
  prob = probs[index];
  newBound = (this$static.Range >>> 11) * prob;
  if (symbol == 0) {
    this$static.Range = newBound;
    probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
  }
   else {
    this$static.Low = add(this$static.Low, and(fromInt(newBound), Pffffffff_longLit));
    this$static.Range -= newBound;
    probs[index] = prob - (prob >>> 5) << 16 >> 16;
  }
  if ((this$static.Range & -16777216) == 0) {
    this$static.Range <<= 8;
    $ShiftLow(this$static);
  }
}

function $EncodeDirectBits(this$static, v, numTotalBits){
  var i;
  for (i = numTotalBits - 1; i >= 0; --i) {
    this$static.Range >>>= 1;
    if ((v >>> i & 1) == 1)
      this$static.Low = add(this$static.Low, fromInt(this$static.Range));
    if ((this$static.Range & -16777216) == 0) {
      this$static.Range <<= 8;
      $ShiftLow(this$static);
    }
  }
}

function $FlushData(this$static){
  var i;
  for (i = 0; i < 5; ++i)
    $ShiftLow(this$static);
}

function $GetProcessedSizeAdd(this$static){
  return add(add(fromInt(this$static._cacheSize), this$static._position), P4_longLit);
}

function $Init_9(this$static){
  this$static._position = P0_longLit;
  this$static.Low = P0_longLit;
  this$static.Range = -1;
  this$static._cacheSize = 1;
  this$static._cache = 0;
}

function $ShiftLow(this$static){
  var LowHi, temp;
  LowHi = lowBits_0(shru(this$static.Low, 32));
  if (LowHi != 0 || compare_0(this$static.Low, Pff000000_longLit) < 0) {
    this$static._position = add(this$static._position, fromInt(this$static._cacheSize));
    temp = this$static._cache;
    do {
      $write(this$static.Stream, temp + LowHi);
      temp = 255;
    }
     while (--this$static._cacheSize != 0);
    this$static._cache = lowBits_0(this$static.Low) >>> 24;
  }
  ++this$static._cacheSize;
  this$static.Low = shl(and(this$static.Low, Pffffff_longLit), 8);
}

function GetPrice(Prob, symbol){
  $clinit_129();
  return ProbPrices[((Prob - symbol ^ -symbol) & 2047) >>> 2];
}

function InitBitModels_0(probs){
  $clinit_129();
  var i;
  for (i = 0; i < probs.length; ++i)
    probs[i] = 1024;
}

function getClass_80(){
  return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit;
}

function Encoder_0(){
}

_ = Encoder_0.prototype = new Object_0();
_.getClass$ = getClass_80;
_.typeId$ = 0;
_.Low = P0_longLit;
_.Range = 0;
_.Stream = null;
_._cache = 0;
_._cacheSize = 0;
_._position = P0_longLit;
var ProbPrices;
function decode(utf){
  var buf, i, x, y, z;
  buf = $StringBuilder(new StringBuilder());
  for (i = 0; i < utf.length; ++i) {
    x = utf[i] & 255;
    if ((x & 128) == 0) {
      if (x == 0)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      $appendNonNull(buf.data, String.fromCharCode(x & 65535));
    }
     else if ((x & 224) == 192) {
      if (i + 1 >= utf.length)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      y = utf[++i] & 255;
      if ((y & 192) != 128)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      $append(buf.data, (x & 31) << 6 & 65535 | y & 63);
    }
     else if ((x & 240) == 224) {
      if (i + 2 >= utf.length)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      y = utf[++i] & 255;
      if ((y & 192) != 128)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      z = utf[++i] & 255;
      if ((z & 192) != 128)
        throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
      $appendNonNull(buf.data, String.fromCharCode(((x & 15) << 12 | (y & 63) << 6 | z & 63) & 65535));
    }
     else 
      throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
  }
  return $toString(buf.data);
}

function encode(s){
  var ch, chars, data, elen, i, charArr, n;
  chars = (n = s.length , charArr = initDim(_3C_classLit, 0, -1, n, 1) , $getChars(s, 0, n, charArr, 0) , charArr);
  elen = 0;
  for (i = 0; i < s.length; ++i) {
    ch = chars[i];
    if (ch >= 1 && ch <= 127)
      ++elen;
    else if (ch == 0 || ch >= 128 && ch <= 2047)
      elen += 2;
    else 
      elen += 3;
  }
  data = initDim(_3B_classLit, 0, -1, elen, 1);
  elen = 0;
  for (i = 0; i < s.length; ++i) {
    ch = chars[i];
    if (ch >= 1 && ch <= 127)
      data[elen++] = ch << 24 >> 24;
    else if (ch == 0 || ch >= 128 && ch <= 2047) {
      data[elen++] = (192 | ch >> 6 & 31) << 24 >> 24;
      data[elen++] = (128 | ch & 63) << 24 >> 24;
    }
     else {
      data[elen++] = (224 | ch >> 12 & 15) << 24 >> 24;
      data[elen++] = (128 | ch >> 6 & 63) << 24 >> 24;
      data[elen++] = (128 | ch & 63) << 24 >> 24;
    }
  }
  return data;
}

function $clinit_133(){
  $clinit_133 = nullMethod;
  DEFAULT_COMPRESSION_MODE = ($clinit_106() , MODE_1);
}

function $LZMADemo(this$static){
  $clinit_133();
  this$static.mode = DEFAULT_COMPRESSION_MODE;
  return this$static;
}

function getClass_83(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit;
}

function LZMADemo(){
}

_ = LZMADemo.prototype = new Object_0();
_.getClass$ = getClass_83;
_.typeId$ = 0;
var DEFAULT_COMPRESSION_MODE;
function $LZMADemo$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_1(){
  if (!this.c) {
    this.c = $LZMAByteArrayCompressor(new LZMAByteArrayCompressor(), encode('sample_enc'), this.this$0.mode);
    return true;
  }
  if ($execute(this.c)) {
    return true;
  }
  $wnd.alert($toByteArray(this.c.output));
  return false;
}

function getClass_81(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$1_2_classLit;
}

function LZMADemo$1(){
}

_ = LZMADemo$1.prototype = new Object_0();
_.execute = execute_1;
_.getClass$ = getClass_81;
_.typeId$ = 41;
_.c = null;
_.this$0 = null;
function $LZMADemo$2(this$static, val$data){
  this$static.val$data = val$data;
  return this$static;
}

function execute_2(){
  var $e0, e, ioe, text;
  if (!this.d) {
    try {
      this.d = $LZMAByteArrayDecompressor(new LZMAByteArrayDecompressor(), this.val$data);
    }
     catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, 18)) {
        e = $e0;
        $wnd.alert('Decompression failed: ' + e.detailMessage);
        return false;
      }
       else 
        throw $e0;
    }
    return true;
  }
  if ($execute_0(this.d)) {
    return true;
  }
  ioe = this.d.exception;
  if (ioe) {
    $wnd.alert('Decompression failed: ' + ioe.detailMessage);
    return false;
  }
  try {
    text = decode($toByteArray(this.d.output));
  }
   catch ($e0) {
    $e0 = caught($e0);
    if (instanceOf($e0, 19)) {
      $wnd.alert('Decompression failed: ' + ioe.detailMessage);
      return false;
    }
     else 
      throw $e0;
  }
  $wnd.alert(text);
  return false;
}

function getClass_82(){
  return Lorg_dellroad_lzma_demo_client_LZMADemo$2_2_classLit;
}

function LZMADemo$2(){
}

_ = LZMADemo$2.prototype = new Object_0();
_.execute = execute_2;
_.getClass$ = getClass_82;
_.typeId$ = 42;
_.d = null;
_.val$data = null;
function init(){
  var data;
  !!$stats && $stats({moduleName:$moduleName, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date()).getTime(), type:'onModuleLoadStart', className:'org.dellroad.lzma.demo.client.LZMADemo'});
  addCommand($LZMADemo$1(new LZMADemo$1(), $LZMADemo(new LZMADemo())));
  data = initValues(_3B_classLit, 0, -1, [93, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 48, -63, -5, -1, -1, -1, -32, 0, 0, 0]);
  addCommand($LZMADemo$2(new LZMADemo$2(), data));
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init();
  }
}

function nullMethod(){
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl'), Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplTrident'), Lcom_google_gwt_dom_client_DOMImplIE6_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplIE6'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit = createForClass('com.google.gwt.event.shared.', 'DefaultHandlerRegistration'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$HandlerRegistry'), Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$1'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), _3_3D_classLit = createForArray('', '[[D'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_IncrementalCommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'IncrementalCommandCanceledException'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Ljava_io_InputStream_2_classLit = createForClass('java.io.', 'InputStream'), Ljava_io_ByteArrayInputStream_2_classLit = createForClass('java.io.', 'ByteArrayInputStream'), _3B_classLit = createForArray('', '[B'), Ljava_io_OutputStream_2_classLit = createForClass('java.io.', 'OutputStream'), Ljava_io_ByteArrayOutputStream_2_classLit = createForClass('java.io.', 'ByteArrayOutputStream'), Ljava_io_IOException_2_classLit = createForClass('java.io.', 'IOException'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), _3C_classLit = createForArray('', '[C'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), _3I_classLit = createForArray('', '[I'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'InWindow'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'BinTree'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'OutWindow'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Chunker'), _3S_classLit = createForArray('', '[S'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder;'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LenDecoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2;'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal;'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder;'), _3J_classLit = createForArray('', '[J'), _3Z_classLit = createForArray('', '[Z'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2;'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenPriceTableEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Decoder'), Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Encoder'), Lorg_dellroad_lzma_client_CompressionMode_2_classLit = createForEnum('org.dellroad.lzma.client.', 'CompressionMode'), Lorg_dellroad_lzma_client_LZMACompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMACompressor'), Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayCompressor'), Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMADecompressor'), Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayDecompressor'), Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo'), Lorg_dellroad_lzma_demo_client_LZMADemo$1_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$1'), Lorg_dellroad_lzma_demo_client_LZMADemo$2_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo$2');
