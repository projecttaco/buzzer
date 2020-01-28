pragma solidity ^0.5.0;

contract BuzzerGame {
    struct Buzzer{
        uint buzzerIndex;
        uint dueDate;
        uint totalPrize;
        address lastPusher;
        bool isDone;
    }
    address public owner;
    uint public buzzerCount;
    mapping(uint => Buzzer) games;
    mapping(address => uint[]) pushedList;
    
    constructor() public{
        owner = msg.sender;
    }
    
    function showBuzzerIndex() public view returns (uint[] memory){
        return pushedList[msg.sender];
    }
    
    function showBuzzer(uint _buzzerIndex) public view returns (uint, uint, uint, address){
        Buzzer memory b = games[_buzzerIndex];
        return (b.buzzerIndex, b.dueDate, b.totalPrize, b.lastPusher);
    }
    
    function createBuzzer(uint _dueDate, uint _initValue) public payable{
        require(_initValue > 0, "Invalid Stake");
        games[buzzerCount] = Buzzer(buzzerCount, _dueDate, msg.value, msg.sender, false);
        pushedList[msg.sender].push(buzzerCount);
        buzzerCount++;
    }
    
    function pushBuzzer(uint _buzzerIndex, uint _dueDate) public payable{
        require(games[_buzzerIndex].isDone == false, "This game was Done");
        require(games[_buzzerIndex].dueDate > block.timestamp, "Time Over");
        require(games[_buzzerIndex].lastPusher != msg.sender, "Execution Unalbed, You are lastPusher");
        
        games[_buzzerIndex].totalPrize += msg.value;
        games[_buzzerIndex].dueDate = _dueDate;
        games[_buzzerIndex].lastPusher = msg.sender;
    }
    
    function getBuzzer(uint _buzzerIndex) public{
        require(games[_buzzerIndex].lastPusher == msg.sender, "Invalid owner");
        require(games[_buzzerIndex].dueDate <= block.timestamp, "Not Yet");
        
        msg.sender.transfer(games[_buzzerIndex].totalPrize);
        games[_buzzerIndex].isDone = true;
    }
}
