const assert = require('assert');
const btoa = require('..').btoa;
const atob = require('..').atob;

const plaintext = "Hello, world!";
const base64text = "SGVsbG8sIHdvcmxkIQ==";

describe('btoa', function () {

  it('works for the happiest of happy paths', function () {
    assert.equal(atob(btoa(plaintext)), plaintext);
  });

});
