/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var map_field_entry_pb = require('./map_field_entry_pb.js');
var text_emoticon_pb = require('./text_emoticon_pb.js');
goog.exportSymbol('proto.BINMatchEndRequest', null, global);
goog.exportSymbol('proto.BINMatchEndResponse', null, global);

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
proto.BINMatchEndRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BINMatchEndRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BINMatchEndRequest.displayName = 'proto.BINMatchEndRequest';
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
proto.BINMatchEndRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.BINMatchEndRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BINMatchEndRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.BINMatchEndRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoneid: jspb.Message.getField(msg, 1),
    roomindex: jspb.Message.getField(msg, 2)
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
 * @return {!proto.BINMatchEndRequest}
 */
proto.BINMatchEndRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BINMatchEndRequest;
  return proto.BINMatchEndRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINMatchEndRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINMatchEndRequest}
 */
proto.BINMatchEndRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setZoneid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomindex(value);
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
 * @param {!proto.BINMatchEndRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINMatchEndRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BINMatchEndRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINMatchEndRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * required int32 zoneId = 1;
 * @return {number}
 */
proto.BINMatchEndRequest.prototype.getZoneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.BINMatchEndRequest.prototype.setZoneid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.BINMatchEndRequest.prototype.clearZoneid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINMatchEndRequest.prototype.hasZoneid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 roomIndex = 2;
 * @return {number}
 */
proto.BINMatchEndRequest.prototype.getRoomindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.BINMatchEndRequest.prototype.setRoomindex = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.BINMatchEndRequest.prototype.clearRoomindex = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINMatchEndRequest.prototype.hasRoomindex = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.BINMatchEndResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BINMatchEndResponse.repeatedFields_, null);
};
goog.inherits(proto.BINMatchEndResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BINMatchEndResponse.displayName = 'proto.BINMatchEndResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BINMatchEndResponse.repeatedFields_ = [4,5,6,7,9];



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
proto.BINMatchEndResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.BINMatchEndResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BINMatchEndResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.BINMatchEndResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsecode: jspb.Message.getField(msg, 1),
    message: jspb.Message.getField(msg, 2),
    zoneid: jspb.Message.getField(msg, 3),
    winninguseridsList: jspb.Message.getField(msg, 4),
    losinguseridsList: jspb.Message.getField(msg, 5),
    drawuseridsList: jspb.Message.getField(msg, 6),
    textemoticonsList: jspb.Message.toObjectList(msg.getTextemoticonsList(),
    text_emoticon_pb.BINTextEmoticon.toObject, includeInstance),
    countdowntimer: jspb.Message.getField(msg, 8),
    argsList: jspb.Message.toObjectList(msg.getArgsList(),
    map_field_entry_pb.BINMapFieldEntry.toObject, includeInstance)
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
 * @return {!proto.BINMatchEndResponse}
 */
proto.BINMatchEndResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BINMatchEndResponse;
  return proto.BINMatchEndResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINMatchEndResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINMatchEndResponse}
 */
proto.BINMatchEndResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setZoneid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addWinninguserids(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addLosinguserids(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addDrawuserids(value);
      break;
    case 7:
      var value = new text_emoticon_pb.BINTextEmoticon;
      reader.readMessage(value,text_emoticon_pb.BINTextEmoticon.deserializeBinaryFromReader);
      msg.addTextemoticons(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountdowntimer(value);
      break;
    case 9:
      var value = new map_field_entry_pb.BINMapFieldEntry;
      reader.readMessage(value,map_field_entry_pb.BINMapFieldEntry.deserializeBinaryFromReader);
      msg.addArgs(value);
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
 * @param {!proto.BINMatchEndResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINMatchEndResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BINMatchEndResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINMatchEndResponse.prototype.serializeBinaryToWriter = function (writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getWinninguseridsList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      4,
      f
    );
  }
  f = this.getLosinguseridsList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      5,
      f
    );
  }
  f = this.getDrawuseridsList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      6,
      f
    );
  }
  f = this.getTextemoticonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      text_emoticon_pb.BINTextEmoticon.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = this.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      map_field_entry_pb.BINMapFieldEntry.serializeBinaryToWriter
    );
  }
};


/**
 * required bool responseCode = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINMatchEndResponse.prototype.getResponsecode = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.BINMatchEndResponse.prototype.setResponsecode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.BINMatchEndResponse.prototype.clearResponsecode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINMatchEndResponse.prototype.hasResponsecode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.BINMatchEndResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.BINMatchEndResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.BINMatchEndResponse.prototype.clearMessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINMatchEndResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 zoneId = 3;
 * @return {number}
 */
proto.BINMatchEndResponse.prototype.getZoneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.BINMatchEndResponse.prototype.setZoneid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.BINMatchEndResponse.prototype.clearZoneid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINMatchEndResponse.prototype.hasZoneid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated int64 winningUserIds = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.BINMatchEndResponse.prototype.getWinninguseridsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 4));
};


/** @param {!Array.<number>} value */
proto.BINMatchEndResponse.prototype.setWinninguseridsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.BINMatchEndResponse.prototype.addWinninguserids = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.BINMatchEndResponse.prototype.clearWinninguseridsList = function() {
  this.setWinninguseridsList([]);
};


/**
 * repeated int64 losingUserIds = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.BINMatchEndResponse.prototype.getLosinguseridsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 5));
};


/** @param {!Array.<number>} value */
proto.BINMatchEndResponse.prototype.setLosinguseridsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.BINMatchEndResponse.prototype.addLosinguserids = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.BINMatchEndResponse.prototype.clearLosinguseridsList = function() {
  this.setLosinguseridsList([]);
};


/**
 * repeated int64 drawUserIds = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.BINMatchEndResponse.prototype.getDrawuseridsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 6));
};


/** @param {!Array.<number>} value */
proto.BINMatchEndResponse.prototype.setDrawuseridsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.BINMatchEndResponse.prototype.addDrawuserids = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.BINMatchEndResponse.prototype.clearDrawuseridsList = function() {
  this.setDrawuseridsList([]);
};


/**
 * repeated BINTextEmoticon textEmoticons = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.BINTextEmoticon>}
 */
proto.BINMatchEndResponse.prototype.getTextemoticonsList = function() {
  return /** @type{!Array.<!proto.BINTextEmoticon>} */ (
    jspb.Message.getRepeatedWrapperField(this, text_emoticon_pb.BINTextEmoticon, 7));
};


/** @param {!Array.<!proto.BINTextEmoticon>} value */
proto.BINMatchEndResponse.prototype.setTextemoticonsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.BINTextEmoticon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BINTextEmoticon}
 */
proto.BINMatchEndResponse.prototype.addTextemoticons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.BINTextEmoticon, opt_index);
};


proto.BINMatchEndResponse.prototype.clearTextemoticonsList = function() {
  this.setTextemoticonsList([]);
};


/**
 * optional int32 countDownTimer = 8;
 * @return {number}
 */
proto.BINMatchEndResponse.prototype.getCountdowntimer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.BINMatchEndResponse.prototype.setCountdowntimer = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.BINMatchEndResponse.prototype.clearCountdowntimer = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINMatchEndResponse.prototype.hasCountdowntimer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated BINMapFieldEntry args = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.BINMapFieldEntry>}
 */
proto.BINMatchEndResponse.prototype.getArgsList = function() {
  return /** @type{!Array.<!proto.BINMapFieldEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, map_field_entry_pb.BINMapFieldEntry, 9));
};


/** @param {!Array.<!proto.BINMapFieldEntry>} value */
proto.BINMatchEndResponse.prototype.setArgsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.BINMapFieldEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BINMapFieldEntry}
 */
proto.BINMatchEndResponse.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.BINMapFieldEntry, opt_index);
};


proto.BINMatchEndResponse.prototype.clearArgsList = function() {
  this.setArgsList([]);
};


goog.object.extend(exports, proto);
