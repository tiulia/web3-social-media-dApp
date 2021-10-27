var Migrations = artifacts.require("./IpfsPublisher.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
