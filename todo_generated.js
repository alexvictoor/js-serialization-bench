// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
*/
var com = com || {};

/**
 * @const
*/
com.alex = com.alex || {};

/**
 * @const
*/
com.alex.generated = com.alex.generated || {};

/**
 * @constructor
 */
com.alex.generated.Todo = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {com.alex.generated.Todo}
 */
com.alex.generated.Todo.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.alex.generated.Todo=} obj
 * @returns {com.alex.generated.Todo}
 */
com.alex.generated.Todo.getRootAsTodo = function(bb, obj) {
  return (obj || new com.alex.generated.Todo).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
com.alex.generated.Todo.prototype.title = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
com.alex.generated.Todo.startTodo = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} titleOffset
 */
com.alex.generated.Todo.addTitle = function(builder, titleOffset) {
  builder.addFieldOffset(0, titleOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
com.alex.generated.Todo.endTodo = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
com.alex.generated.TodoCollection = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {com.alex.generated.TodoCollection}
 */
com.alex.generated.TodoCollection.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.alex.generated.TodoCollection=} obj
 * @returns {com.alex.generated.TodoCollection}
 */
com.alex.generated.TodoCollection.getRootAsTodoCollection = function(bb, obj) {
  return (obj || new com.alex.generated.TodoCollection).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @param {com.alex.generated.Todo=} obj
 * @returns {com.alex.generated.Todo}
 */
com.alex.generated.TodoCollection.prototype.todos = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new com.alex.generated.Todo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
com.alex.generated.TodoCollection.prototype.todosLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
com.alex.generated.TodoCollection.startTodoCollection = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} todosOffset
 */
com.alex.generated.TodoCollection.addTodos = function(builder, todosOffset) {
  builder.addFieldOffset(0, todosOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
com.alex.generated.TodoCollection.createTodosVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
com.alex.generated.TodoCollection.startTodosVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
com.alex.generated.TodoCollection.endTodoCollection = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
com.alex.generated.TodoCollection.finishTodoCollectionBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.com = com;
