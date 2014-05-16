module.exports = {
  "valid": [
    {
      "D": "1",
      "Q": "(55066263022277343669578718895168534326250603453777594175500187360389116729240,32670510020758816978083085130507043184471273380659243275938904335757337482424)",
      "WIFs": [
        {
          "network": "bitcoin",
          "string": "KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn",
          "compressed": true
        },
        {
          "network": "bitcoin",
          "string": "5HpHagT65TZzG1PH3CSu63k8DbpvD8s5ip4nEB3kEsreAnchuDf",
          "compressed": false
        }
      ]
    },
    {
      "D": "19898843618908353587043383062236220484949425084007183071220218307100305431102",
      "Q": "(83225686012142088543596389522774768397204444195709443235253141114409346958144,23739058578904784236915560265041168694780215705543362357495033621678991351768)",
      "WIFs": [
        {
          "network": "bitcoin",
          "string": "KxhEDBQyyEFymvfJD96q8stMbJMbZUb6D1PmXqBWZDU2WvbvVs9o",
          "compressed": true
        }
      ]
    },
    {
      "D": "48968302285117906840285529799176770990048954789747953886390402978935544927851",
      "Q": "(30095590000961171681152428142595206241714764354580127609094760797518133922356,93521207164355458151597931319591130635754976513751247168472016818884561919702)",
      "WIFs": [
        {
          "network": "bitcoin",
          "string": "KzrA86mCVMGWnLGBQu9yzQa32qbxb5dvSK4XhyjjGAWSBKYX4rHx",
          "compressed": true
        },
        {
          "network": "bitcoin",
          "string": "5JdxzLtFPHNe7CAL8EBC6krdFv9pwPoRo4e3syMZEQT9srmK8hh",
          "compressed": false
        },
        {
          "network": "testnet",
          "string": "cRD9b1m3vQxmwmjSoJy7Mj56f4uNFXjcWMCzpQCEmHASS4edEwXv",
          "compressed": true
        },
        {
          "network": "testnet",
          "string": "92Qba5hnyWSn5Ffcka56yMQauaWY6ZLd91Vzxbi4a9CCetaHtYj",
          "compressed": false
        }
      ]
    },
    {
      "D": "115792089237316195423570985008687907852837564279074904382605163141518161494336",
      "Q": "(55066263022277343669578718895168534326250603453777594175500187360389116729240,83121579216557378445487899878180864668798711284981320763518679672151497189239)",
      "WIFs": [
        {
          "network": "bitcoin",
          "string": "L5oLkpV3aqBjhki6LmvChTCV6odsp4SXM6FfU2Gppt5kFLaHLuZ9",
          "compressed": true
        }
      ]
    }
  ],
  "invalid": {
    "constructor": [
      {
        "description": "Private key ZERO",
        "D": "0"
      },
      {
        "description": "Private key equal to the curve order",
        "D": "115792089237316195423570985008687907852837564279074904382605163141518161494337"
      },
      {
        "description": "Private key greater than the curve order",
        "D": "115792089237316195423570985008687907853269984665640564039457584007913129639935"
      }
    ],
    "WIF": [
      {
        "description": "Invalid compression flag",
        "string": "ju9rooVsmagsb4qmNyTysUSFB1GB6MdpD7eoGjUTPmZRAApJxRz"
      },
      {
        "description": "Payload too short",
        "string": "7ZEtRQLhCsDQrd6ZKfmcESdXgas8ggZPN24ByEi5ey6VJW"
      },
      {
        "description": "Payload too long",
        "string": "5qibUKwsnMo1qDiNp3prGaQkD2JfVJa8F8Na87H2CkMHvuVg6uKhw67Rh"
      }
    ]
  }
}