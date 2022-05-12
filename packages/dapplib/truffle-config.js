require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift radar scrub proud gesture canoe army genre'; 
let testAccounts = [
"0x94b0dabb05e2b1ac7cc1dffa0f9bdb61465a5c4172f8c3b36d9ab6a78f73c922",
"0x062980abd730d825c22655aac4d807d188018ddb4c57e1e5e83bb32b2b9a0570",
"0xb6edc16e911e6af41161e7072b4b2b33ea51884bc94fcb3282c489af533519b6",
"0x31164da9cafc72fbb2feb00c5feb9eff3e56de9777082d71126762ee5f995e3e",
"0x211bccb3b70a0627c5acd8338b47b9552bcc3fa99953fba199c5f9153442c5c2",
"0x27675f7cf7844817839966e8970fbf6b49f07c529977ef72ed2e12af72ac2dc5",
"0x61755b8e21d38b24399aeba1f5b9a260b12ae5e05165e4eb2357ac04d586f341",
"0xb16a4e05c853fe7fbe35d93a51b36603635a6f8211fa8332beaa9380b69ea619",
"0x2c8bcebfa361ba4b95c491b62e356137cb793e7108b901fb765015b451fcc160",
"0x75299698e54e43767b3248de4c304a2dcd4dd2f33196d083bc19e2605607e439"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

