import { sharedUtilDi } from './shared-util-di';

describe('sharedUtilDi', () => {
  it('should work', () => {
    expect(sharedUtilDi()).toEqual('shared-util-di');
  });
});
