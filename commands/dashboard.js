exports.run = (bongo, message) => {
   
    message.channel.send({embed:{color:16777215,title:'Click to goto Dashboard', url:'https://sites.google.com/view/roybothelp/home?authuser=1'}});
 
 };

exports.help = {
  name: "dsh",
  aliases: ["dashboard"]
}
