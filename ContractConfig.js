var config = {};

config.contractAddress = 0x3dA979054F9BfB6Fd1b4A5aED6a45B75da6288Fe;

config.ABI = [
  [{"constant":false,"inputs":[{"name":"_buzzerIndex","type":"uint256"}],"name":"getBuzzer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"showBuzzerIndex","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_buzzerIndex","type":"uint256"},{"name":"_dueDate","type":"uint256"}],"name":"pushBuzzer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_buzzerIndex","type":"uint256"}],"name":"showBuzzer","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dueDate","type":"uint256"},{"name":"_initValue","type":"uint256"}],"name":"createBuzzer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"buzzerCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
];

module.exports = config;
