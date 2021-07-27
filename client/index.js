var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xEF5cC16e5c31Ce4fE3cAd8221D6B58c8dEb1DACb";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

        console.log(instance);
    })
})

async function createKitty(){
    var dnastring = getDna();
    console.log(dnastring);
    await instance.methods.createKittyGen0(dnastring).send({}, function(error, txHash){
        if(error)
            console.log(error);
        else{
            console.log(txHash);
            instance.events.Birth().on('data', function(event){
                console.log(event);
                let owner = event.returnValues.owner;
                console.log(owner);
                let kittenId = event.returnValues.kittenId;
                console.log(kittenId);
                let mumId = event.returnValues.mumId;
                console.log(mumId);
                let dadId = event.returnValues.dadId;
                console.log(dadId);
                let genes = event.returnValues.genes;
                console.log(genes);

                $("#kittyCreation").css("display", "block");
                $("#kittyCreation").text("Kitty Id: " + kittenId +
                                       " Owner: " + owner + 
                                       " MumId: " + mumId + 
                                       " DadId: " + dadId +
                                       " Genes: " + genes );
            }).on('error', console.error);
        }
    })
}
