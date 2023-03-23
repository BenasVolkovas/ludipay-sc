// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract LudiPay is ERC20, ERC20Burnable {
    mapping(address => uint256) public transferredAmount;

    constructor() ERC20("LudiPay", "LDP") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    // Currently this function can be called by anyone
    // Later we will add implement a Chainlink ANY API to get the amount from our database and call this function
    function mint(address to, uint256 amount) public {
        transferredAmount[to] += amount;

        _mint(to, amount);
    }
}
