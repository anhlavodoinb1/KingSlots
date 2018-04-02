/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.BINPaymentStatusResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BINPaymentStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BINPaymentStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BINPaymentStatusResponse.displayName = 'proto.BINPaymentStatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BINPaymentStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.BINPaymentStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BINPaymentStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.BINPaymentStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsecode: jspb.Message.getField(msg, 1),
    message: jspb.Message.getField(msg, 2),
    enablepurchasecash: jspb.Message.getField(msg, 3),
    enabletopup: jspb.Message.getField(msg, 4),
    enablecashtogold: jspb.Message.getField(msg, 5),
    enablecashtransfer: jspb.Message.getField(msg, 6),
    enablegiftcode: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BINPaymentStatusResponse}
 */
proto.BINPaymentStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BINPaymentStatusResponse;
  return proto.BINPaymentStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINPaymentStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINPaymentStatusResponse}
 */
proto.BINPaymentStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResponsecode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablepurchasecash(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabletopup(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablecashtogold(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablecashtransfer(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnablegiftcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.BINPaymentStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINPaymentStatusResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BINPaymentStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINPaymentStatusResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(this, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(this, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(this, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * required bool responseCode = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINPaymentStatusResponse.prototype.getResponsecode = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.BINPaymentStatusResponse.prototype.setResponsecode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.BINPaymentStatusResponse.prototype.clearResponsecode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINPaymentStatusResponse.prototype.hasResponsecode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.BINPaymentStatusResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.BINPaymentStatusResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.BINPaymentStatusResponse.prototype.clearMessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINPaymentStatusResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool enablePurchaseCash = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINPaymentStatusResponse.prototype.getEnablepurchasecash = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.BINPaymentStatusResponse.prototype.setEnablepurchasecash = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.BINPaymentStatusResponse.prototype.clearEnablepurchasecash = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINPaymentStatusResponse.prototype.hasEnablepurchasecash = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool enableTopup = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINPaymentStatusResponse.prototype.getEnabletopup = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.BINPaymentStatusResponse.prototype.setEnabletopup = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.BINPaymentStatusResponse.prototype.clearEnabletopup = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINPaymentStatusResponse.prototype.hasEnabletopup = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool enableCashToGold = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINPaymentStatusResponse.prototype.getEnablecashtogold = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.BINPaymentStatusResponse.prototype.setEnablecashtogold = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.BINPaymentStatusResponse.prototype.clearEnablecashtogold = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINPaymentStatusResponse.prototype.hasEnablecashtogold = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enableCashTransfer = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINPaymentStatusResponse.prototype.getEnablecashtransfer = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.BINPaymentStatusResponse.prototype.setEnablecashtransfer = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.BINPaymentStatusResponse.prototype.clearEnablecashtransfer = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINPaymentStatusResponse.prototype.hasEnablecashtransfer = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool enableGiftCode = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINPaymentStatusResponse.prototype.getEnablegiftcode = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.BINPaymentStatusResponse.prototype.setEnablegiftcode = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.BINPaymentStatusResponse.prototype.clearEnablegiftcode = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINPaymentStatusResponse.prototype.hasEnablegiftcode = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto);