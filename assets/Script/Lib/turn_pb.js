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
goog.exportSymbol('proto.BINTurnRequest', null, global);
goog.exportSymbol('proto.BINTurnResponse', null, global);

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
proto.BINTurnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BINTurnRequest.repeatedFields_, null);
};
goog.inherits(proto.BINTurnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BINTurnRequest.displayName = 'proto.BINTurnRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BINTurnRequest.repeatedFields_ = [2];



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
proto.BINTurnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.BINTurnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BINTurnRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.BINTurnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomindex: jspb.Message.getField(msg, 1),
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
 * @return {!proto.BINTurnRequest}
 */
proto.BINTurnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BINTurnRequest;
  return proto.BINTurnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINTurnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINTurnRequest}
 */
proto.BINTurnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomindex(value);
      break;
    case 2:
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
 * @param {!proto.BINTurnRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINTurnRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BINTurnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINTurnRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      map_field_entry_pb.BINMapFieldEntry.serializeBinaryToWriter
    );
  }
};


/**
 * required int32 roomIndex = 1;
 * @return {number}
 */
proto.BINTurnRequest.prototype.getRoomindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.BINTurnRequest.prototype.setRoomindex = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.BINTurnRequest.prototype.clearRoomindex = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnRequest.prototype.hasRoomindex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated BINMapFieldEntry args = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.BINMapFieldEntry>}
 */
proto.BINTurnRequest.prototype.getArgsList = function() {
  return /** @type{!Array.<!proto.BINMapFieldEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, map_field_entry_pb.BINMapFieldEntry, 2));
};


/** @param {!Array.<!proto.BINMapFieldEntry>} value */
proto.BINTurnRequest.prototype.setArgsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.BINMapFieldEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BINMapFieldEntry}
 */
proto.BINTurnRequest.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.BINMapFieldEntry, opt_index);
};


proto.BINTurnRequest.prototype.clearArgsList = function() {
  this.setArgsList([]);
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
proto.BINTurnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BINTurnResponse.repeatedFields_, null);
};
goog.inherits(proto.BINTurnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BINTurnResponse.displayName = 'proto.BINTurnResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BINTurnResponse.repeatedFields_ = [7];



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
proto.BINTurnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.BINTurnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BINTurnResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.BINTurnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsecode: jspb.Message.getField(msg, 1),
    message: jspb.Message.getField(msg, 2),
    currentturnuserid: jspb.Message.getField(msg, 3),
    nextturnuserid: jspb.Message.getField(msg, 4),
    matchend: jspb.Message.getField(msg, 5),
    countdowntimer: jspb.Message.getField(msg, 6),
    argsList: jspb.Message.toObjectList(msg.getArgsList(),
    map_field_entry_pb.BINMapFieldEntry.toObject, includeInstance),
    zoneid: jspb.Message.getField(msg, 8)
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
 * @return {!proto.BINTurnResponse}
 */
proto.BINTurnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BINTurnResponse;
  return proto.BINTurnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINTurnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINTurnResponse}
 */
proto.BINTurnResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentturnuserid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextturnuserid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMatchend(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountdowntimer(value);
      break;
    case 7:
      var value = new map_field_entry_pb.BINMapFieldEntry;
      reader.readMessage(value,map_field_entry_pb.BINMapFieldEntry.deserializeBinaryFromReader);
      msg.addArgs(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setZoneid(value);
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
 * @param {!proto.BINTurnResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINTurnResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BINTurnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINTurnResponse.prototype.serializeBinaryToWriter = function (writer) {
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
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeInt64(
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
  f = /** @type {number} */ (jspb.Message.getField(this, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = this.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      map_field_entry_pb.BINMapFieldEntry.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 8));
  if (f != null) {
    writer.writeInt32(
      8,
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
proto.BINTurnResponse.prototype.getResponsecode = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.BINTurnResponse.prototype.setResponsecode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.BINTurnResponse.prototype.clearResponsecode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnResponse.prototype.hasResponsecode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.BINTurnResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.BINTurnResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.BINTurnResponse.prototype.clearMessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 currentTurnUserId = 3;
 * @return {number}
 */
proto.BINTurnResponse.prototype.getCurrentturnuserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.BINTurnResponse.prototype.setCurrentturnuserid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.BINTurnResponse.prototype.clearCurrentturnuserid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnResponse.prototype.hasCurrentturnuserid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 nextTurnUserId = 4;
 * @return {number}
 */
proto.BINTurnResponse.prototype.getNextturnuserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.BINTurnResponse.prototype.setNextturnuserid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.BINTurnResponse.prototype.clearNextturnuserid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnResponse.prototype.hasNextturnuserid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool matchEnd = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINTurnResponse.prototype.getMatchend = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.BINTurnResponse.prototype.setMatchend = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.BINTurnResponse.prototype.clearMatchend = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnResponse.prototype.hasMatchend = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 countDownTimer = 6;
 * @return {number}
 */
proto.BINTurnResponse.prototype.getCountdowntimer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.BINTurnResponse.prototype.setCountdowntimer = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.BINTurnResponse.prototype.clearCountdowntimer = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnResponse.prototype.hasCountdowntimer = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated BINMapFieldEntry args = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.BINMapFieldEntry>}
 */
proto.BINTurnResponse.prototype.getArgsList = function() {
  return /** @type{!Array.<!proto.BINMapFieldEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, map_field_entry_pb.BINMapFieldEntry, 7));
};


/** @param {!Array.<!proto.BINMapFieldEntry>} value */
proto.BINTurnResponse.prototype.setArgsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.BINMapFieldEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BINMapFieldEntry}
 */
proto.BINTurnResponse.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.BINMapFieldEntry, opt_index);
};


proto.BINTurnResponse.prototype.clearArgsList = function() {
  this.setArgsList([]);
};


/**
 * optional int32 zoneId = 8;
 * @return {number}
 */
proto.BINTurnResponse.prototype.getZoneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.BINTurnResponse.prototype.setZoneid = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.BINTurnResponse.prototype.clearZoneid = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINTurnResponse.prototype.hasZoneid = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto);