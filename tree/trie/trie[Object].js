// node consist of children which is an object and isWorldEnd
class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!this.root.children[charToInsert]) {
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert];
    }
    curr.isWordEnd = true;
  }

  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!curr.children[charToFind]) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return curr.isWordEnd;
  }

  startWithPrefix(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const prefixChar = prefix[i];
      if (!curr.children[prefixChar]) {
        return false;
      }
      curr = curr.children[prefixChar];
    }
    return true;
  }
}

const myTrie = new Trie();
myTrie.insert("apple");
// console.log(myTrie.root.children.a.children.p.children.p.children.l.children);
// console.log(myTrie.contains("appl"));
console.log(myTrie.startWithPrefix("a"));
