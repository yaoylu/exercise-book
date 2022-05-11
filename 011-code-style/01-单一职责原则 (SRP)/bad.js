/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-02-26 18:44:39
 */
// bad
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}
