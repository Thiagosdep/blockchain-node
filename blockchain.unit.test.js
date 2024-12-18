import Blockchain from './blockchain.js';
import Block from './block.js';

describe('Blockchain', () => {
  let blockchain, blockchain2;

  beforeEach(() => {
    blockchain = new Blockchain();
    blockchain2 = new Blockchain();
  });

  it('starts with the genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it('adds a new block', () => {
    const data = 'My base64 data';
    blockchain.addBlock(data);

    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
  });

  it('validates a valid chain', () => {
    blockchain2.addBlock('$500');

    expect(blockchain.isValidChain(blockchain2.chain)).toBe(true);
  });

  it('replaces the chain with a valid chain', () => {
    blockchain2.addBlock('$731');
    blockchain.replaceChain(blockchain2.chain);

    expect(blockchain.chain).toEqual(blockchain2.chain);
  });

  it('does not replace the chain with one of less than or equal to length', () => {
    blockchain.addBlock('foo');
    blockchain.replaceChain(blockchain2.chain);

    expect(blockchain.chain).not.toEqual(blockchain2.chain);
  });
});
