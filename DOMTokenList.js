/* code edited by David Clews */

/**
 * containsAll
 * 
 * Checks all the space separated values in the string exist
 * 
 * @param {string} a The string to check
 * @return {boolean}
 */
DOMTokenList.prototype.containsAll = function(a) {
  let b = a.split(' '), c, i;

  for (i = 0; i < b.length; i++) {
    c = b[i];

    if (this.contains(c) == false) {
      return false;
    }
  }

  return true;
}
