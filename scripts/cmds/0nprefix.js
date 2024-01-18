const fs = require('fs');

module.exports = {
  config: {
    name: "nprefix",
    version: "1.5",
    author: "👉HACKER👈",
    countDown: 5,
    role: 0,
    shortDescription: "Bot will reply like a human being",
    longDescription: "chat with boat without any prefix this cmd is in updating phrase,bot or auther is not responsible for any missbehave",
    category: "no prefix",
  },
 
  onStart: async function() {}, 
 
  onChat: async function({ event, message, getLang, api }) {

       
    if (event.messageReply) {
      const word = event.body.toLowerCase();
      switch (word) {
       
    
          default:
          return; 
      }
    } ;
      //}}
  },
};