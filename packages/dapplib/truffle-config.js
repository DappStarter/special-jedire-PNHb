require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth praise prosper harvest nasty equal gather'; 
let testAccounts = [
"0x4dfa9236c9278b4a3089183e0bbc38add44dbc7f053c916047f28bdba69cae90",
"0xa3cba4494414d473141c63c7dc1e9347c30cc7efb24c9f9bbe03d1f84131330c",
"0x8da6d8987cb8d73d9ce3328dccd2d1436f1ea43e8c668b884d0b30a1111e35c5",
"0x1dbe5b2725f43c3474f3c3651e2a34c979295b96fa33d1ee213fad21dc6fefa5",
"0x32e802cbc6121585d67cf2a206d22e9bbd4334cce7bccd3ae01e86d70f8aa834",
"0xbb8a6944929f1eaca3fa10943f3bf0e339c5ab5a8a8495221a2112b1a5736c13",
"0x53ba098f0c21ca24db5e635036f0afc98d8c9b0525d73659ce57abbe85d54622",
"0x29616cccc5198ce13369abd34457a790afee22eadfc969df7eca14841772b851",
"0xf0e14ae3fbff2d57a26e991c980d10f34404eb295cc9551819fced470153e7b7",
"0xc16aae709b788dea243ae6fcd376833db9c9a426d0a8f384db1660672880d8f1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

