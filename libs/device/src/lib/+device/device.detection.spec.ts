import { isiPhoneX, isiPhoneXR } from './device-detection';

describe('device-detection', () => {
  describe('iPhone', () => {
    it('10 mid string lowercase', () => {
      expect(isiPhoneX('blahiphone10blah')).toBe(true);
    });

    it('10 not true', () => {
      expect(isiPhoneX('blahiphone11blah')).toBe(false);
    });

    it('10 proper string', () => {
      expect(isiPhoneX('iPhone10,6')).toBe(true);
    });

    it('11 mid string lowercase', () => {
      expect(isiPhoneXR('blahiphone11blah')).toBe(true);
    });

    it('11 not true', () => {
      expect(isiPhoneXR('blahiphone10blah')).toBe(false);
    });

    it('11 proper string', () => {
      expect(isiPhoneXR('iPhone11,6')).toBe(true);
    });
  });
});
