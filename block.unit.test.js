import Block from './block.js';

describe('Block', () => {
  let data, lastBlock, block;

  beforeEach(() => {
    data = 'My crypto wallet data 🔥';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it('should sets the data to match the input', () => {
    expect(block.data).toEqual(data);
  });

  it('shoult sets the lastHash to match the hash of the last block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});
