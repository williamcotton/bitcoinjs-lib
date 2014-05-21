module.exports = {
  "valid": [
    {
      "dec": 0,
      "hex64": "0000000000000000",
      "hexVI": "00"
    },
    {
      "dec": 1,
      "hex64": "0100000000000000",
      "hexVI": "01"
    },
    {
      "dec": 252,
      "hex64": "fc00000000000000",
      "hexVI": "fc"
    },
    {
      "dec": 253,
      "hex64": "fd00000000000000",
      "hexVI": "fdfd00"
    },
    {
      "dec": 254,
      "hex64": "fe00000000000000",
      "hexVI": "fdfe00"
    },
    {
      "dec": 65535,
      "hex64": "ffff000000000000",
      "hexVI": "fdffff"
    },
    {
      "dec": 65536,
      "hex64": "0000010000000000",
      "hexVI": "fe00000100"
    },
    {
      "dec": 65537,
      "hex64": "0100010000000000",
      "hexVI": "fe01000100"
    },
    {
      "dec": 4294967295,
      "hex64": "ffffffff00000000",
      "hexVI": "feffffffff"
    },
    {
      "dec": 4294967296,
      "hex64": "0000000001000000",
      "hexVI": "ff0000000001000000"
    },
    {
      "dec": 4294967297,
      "hex64": "0100000001000000",
      "hexVI": "ff0100000001000000"
    },
    {
      "dec": 9007199254740991,
      "hex64": "ffffffffffff1f00",
      "hexVI": "ffffffffffffff1f00"
    }
  ],
  "invalid": [
    {
      "description": "n === 2^53",
      "value": 9007199254740992
    },
    {
      "description": "n > 2^53",
      "value": 18374686479671624000
    }
  ]
}
