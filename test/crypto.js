var assert = require('assert')
var crypto = require('../').crypto
var fixture = require('./fixtures/crypto')

describe('Crypto', function() {
  describe('HASH160', function() {
    it('matches the test vector', function() {
      fixture.before.hex.forEach(function(hex, i) {
        var actual = crypto.hash160(new Buffer(hex, 'hex')).toString('hex')
        var expected = fixture.after.hash160[i]

        assert.equal(actual, expected)
      })
    })
  })

  describe('HASH256', function() {
    it('matches the test vector', function() {
      fixture.before.hex.forEach(function(hex, i) {
        var actual = crypto.hash256(new Buffer(hex, 'hex')).toString('hex')
        var expected = fixture.after.hash256[i]

        assert.equal(actual, expected)
      })
    })
  })

  describe('SHA1', function() {
    it('matches the test vector', function() {
      fixture.before.hex.forEach(function(hex, i) {
        var actual = crypto.sha1(new Buffer(hex, 'hex')).toString('hex')
        var expected = fixture.after.sha1[i]

        assert.equal(actual, expected)
      })
    })
  })

  describe('SHA256', function() {
    it('matches the test vector', function() {
      fixture.before.hex.forEach(function(hex, i) {
        var actual = crypto.sha256(new Buffer(hex, 'hex')).toString('hex')
        var expected = fixture.after.sha256[i]

        assert.equal(actual, expected)
      })
    })
  })

  describe('HMAC SHA512', function() {
    it('matches the test vector', function() {
      fixture.before.hex.forEach(function(hex, i) {
        var data = new Buffer(hex, 'hex')
        var secret = new Buffer(fixture.after.hmacsha512.secret)

        var actual = crypto.HmacSHA512(data, secret)
        var expected = fixture.after.hmacsha512.hash[i]

        assert.equal(actual.toString('hex'), expected)
      })
    })
  })
})
