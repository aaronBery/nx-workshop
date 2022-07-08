import { storeFeatureNotifications } from './store-feature-notifications';

describe('storeFeatureNotifications', () => {
  it('should work', () => {
    expect(storeFeatureNotifications()).toEqual('store-feature-notifications');
  });
});
