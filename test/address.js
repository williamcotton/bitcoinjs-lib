var assert = require('assert')
var Address = require('../src/address')
var networks = require('../src/networks')
var Script = require('../src/script')

var b58fixtures = require('./fixtures/base58')
var fixtures = require('./fixtures/address')

function h2b(h) { return new Buffer(h, 'hex') }

describe('Address', function() {
  describe('Constructor', function() {
    it('does not mutate the input', function() {
      fixtures.valid.forEach(function(f) {
        var hash = new Buffer(f.hex, 'hex')
        var addr = new Address(hash, f.version)

        assert.equal(addr.version, f.version)
        assert.equal(addr.hash.toString('hex'), f.hex)
      })
    })
  })

  describe('fromBase58Check', function() {
    it('throws on invalid base58check', function() {
      b58fixtures.invalid.forEach(function(f) {
        assert.throws(function() {
          Address.fromBase58Check(f)
        })
      })
    })

    fixtures.valid.forEach(function(f) {
      it('imports ' + f.description + '(' + f.network + ') correctly', function() {
        var addr = Address.fromBase58Check(f.base58check)

        assert.equal(addr.version, f.version)
        assert.equal(addr.hash.toString('hex'), f.hex)
      })
    })
  })

  describe('fromScriptPubKey', function() {
    fixtures.valid.forEach(function(f) {
      it('imports ' + f.description + '(' + f.network + ') correctly', function() {
        var script = Script.fromHex(f.script)
        var addr = Address.fromScriptPubKey(script, networks[f.network])

        assert.equal(addr.version, f.version)
        assert.equal(addr.hash.toString('hex'), f.hex)
      })
    })
  })

  describe('toBase58Check', function() {
    fixtures.valid.forEach(function(f) {
      it('exports ' + f.description + '(' + f.network + ') correctly', function() {
        var addr = Address.fromBase58Check(f.base58check)
        var result = addr.toBase58Check()

        assert.equal(result, f.base58check)
      })
    })
  })

  describe('toScriptPubKey', function() {
    fixtures.valid.forEach(function(f) {
      it('imports ' + f.description + '(' + f.network + ') correctly', function() {
        var addr = Address.fromBase58Check(f.base58check)
        var script = addr.toScriptPubKey()

        assert.equal(script.toHex(), f.script)
      })
    })

    fixtures.invalid.toScriptPubKey.forEach(function(f) {
      it('throws on ' + f.description, function() {
        var addr = new Address(h2b(f.hex), f.version)

        assert.throws(function() {
          addr.toScriptPubKey()
        })
      })
    })
  })
})
