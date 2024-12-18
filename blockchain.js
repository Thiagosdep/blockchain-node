import Block from './block.js';
import Logger from './log.js';

/**
 * Represents a Blockchain.
 */
export default class Blockchain {
  /**
   * Creates a new Blockchain.
   * @constructor
   */
  constructor() {
    this.chain = [Block.genesis()];
  }

  /**
   * Adds a new block to the blockchain.
   * @param {any} data - The data to be added to the new block.
   * @returns {Block} The newly added block.
   */
  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const block = Block.mineBlock(lastBlock, data);
    this.chain.push(block);

    return block;
  }

  /**
   * Validates the blockchain.
   * @param {Block[]} chain - The blockchain to be validated.
   * @returns {boolean} True if the blockchain is valid, false otherwise.
   */
  isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];

      const isLastHashInvalid = block.lastHash !== lastBlock.hash;
      const isCurrentHashInvalid = block.hash !== Block.blockHash(block);

      if (isLastHashInvalid || isCurrentHashInvalid) {
        return false;
      }
    }

    return true;
  }

  /**
   * Replaces the current blockchain with a new blockchain.
   * @param {Block[]} newChain - The new blockchain to replace the current blockchain.
   */
  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      Logger.logError('Received chain is not longer than the current chain.');
      return;
    }

    if (!this.isValidChain(newChain)) {
      Logger.logError('The received chain is not valid.');
      return;
    }

    Logger.logInfo('Replacing blockchain with the new chain.');
    this.chain = newChain;
  }
}
