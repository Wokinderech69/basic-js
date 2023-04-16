const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(mess, key) {
    // throw new NotImplementedError("Not implemented");
    if (!mess || !key) {
      throw new Error("Incorrect arguments!");
    }
    mess = mess.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let x = 0;
    for (let i = 0; i < mess.length; i++) {
      const charCode = mess.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const shift = key.charCodeAt(x % key.length) - 65;
        const encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
        res += String.fromCharCode(encryptedCharCode);
        x++;
      } else {
        res += mess[i];
      }
    }
    return this.direct ? res : res.split("").reverse().join("");
  }
  decrypt(encryptedMess, key) {
    // throw new NotImplementedError("Not implemented");
    if (!encryptedMess || !key) {
      throw new Error("Incorrect arguments!");
    }
    encryptedMess = encryptedMess.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let x = 0;
    for (let i = 0; i < encryptedMess.length; i++) {
      const charCode = encryptedMess.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const shift = key.charCodeAt(x % key.length) - 65;
        const decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
        res += String.fromCharCode(decryptedCharCode);
        x++;
      } else {
        res += encryptedMess[i];
      }
    }
    return this.direct ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
