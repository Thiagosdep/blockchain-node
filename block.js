/**
 * Represents a blockchain block that contains data, a reference to the previous block,
 * and a unique hash for identification.
 */
export default class Block {
  // Private fields
  #timestamp;
  #lastHash;
  #hash;
  #data;

  /**
   * Creates an instance of a Block.
   * @param {number} timestamp - The timestamp indicating when the block was created.
   * @param {string} lastHash - The hash of the previous block in the chain.
   * @param {string} hash - The hash of the current block, used for identification.
   * @param {any} data - The data contained in the block.
   */
  constructor(timestamp, lastHash, hash, data) {
    this.#timestamp = timestamp;
    this.#lastHash = lastHash;
    this.#hash = hash;
    this.#data = data;
  }

  /**
   * Gets the timestamp of the block.
   * @returns {number} The timestamp of the block.
   */
  get timestamp() {
    return this.#timestamp;
  }

  /**
   * Gets the hash of the previous block.
   * @returns {string} The hash of the previous block.
   */
  get lastHash() {
    return this.#lastHash;
  }

  /**
   * Gets the hash of the current block.
   * @returns {string} The hash of the current block.
   */
  get hash() {
    return this.#hash;
  }

  /**
   * Gets the data stored in the block.
   * @returns {any} The data contained in the block.
   */
  get data() {
    return this.#data;
  }

  /**
   * Returns a string representation of the block.
   * @returns {string} A string representation of the block.
   */
  toString() {
    return `Block -
Timestamp : ${this.#timestamp}
Last Hash : ${this.#lastHash.substring(0, 10)}
Hash      : ${this.#hash.substring(0, 10)}
Data      : ${this.#data}`;
  }

  /**
   * Creates a new block with the provided data and the previous block.
   * @param {Block} lastBlock - The previous block in the chain.
   * @param {any} data - The data to be stored in the new block.
   * @returns {Block} A new block with the provided data.
   */
  static genesis() {
    return new this('Genesis time', '-', 'f1r57-h45h', []);
  }
}
