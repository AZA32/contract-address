//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Create2.sol";
import "./Greeter.sol";

contract Create2Address {

    event created(address contractAddr);

    function computeAddress(uint256 _salt) external view returns (address){
        bytes32 bytecodeHash = keccak256(getByteCode());
        bytes32 salt = keccak256(abi.encodePacked(_salt));
        return Create2.computeAddress(salt, bytecodeHash);
    }

    function getByteCode() internal pure returns (bytes memory){
        return type(Greeter).creationCode;
    }

    function create(uint256 _salt) external {
        bytes memory bytecode = getByteCode();
        bytes32 salt = keccak256(abi.encodePacked(_salt));
   /*     address contractAddr;
        assembly{
            contractAddr := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }*/
        address contractAddr = Create2.deploy(0, salt, bytecode);
        emit created(contractAddr);
    }
}
