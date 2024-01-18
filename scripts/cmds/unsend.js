const fs = require('fs');
module.exports = {
  config: {
    name: "unsend",
    version: "1.1",
    author: "NTKhang",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "Gỡ tin nhắn của bot",
      en: "Unsend bot's message"
    },
    longDescription: {
      vi: "Gỡ tin nhắn của bot",
      en: "Unsend bot's message"
    },
    category: "box chat",
    guide: {
      vi: "reply tin nhắn muốn gỡ của bot và gọi lệnh {pn}",
      en: "reply the message you want to unsend and call the command {pn}"
    }
  },

  langs: {
    vi: {
      syntaxError: "Vui lòng reply tin nhắn muốn gỡ của bot"
    },
    en: {
      syntaxError: "Please reply the message you want to unsend"
    }
  },

  onStart: async function ({ message, event, api, getLang }) {
    if (!event.messageReply || event.messageReply.senderID != api.getCurrentUserID())
      return message.reply(getLang("syntaxError"));
    message.unsend(event.messageReply.messageID);
  },

  
/*onReaction: async function ({ Reaction, message, event, api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, getLang }) {
    if ((event.Reaction == "👍")) {
      message.unsend(event.messageReply.messageID);
    }
};

*/

onReaction: async function ({ Reaction, message, event, api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, getLang }) {
  try {
    if (event.Reaction === "👍") {
      if (event.messageReply && event.messageReply.senderID === api.getCurrentUserID()) {
        const messageId = event.messageReply.messageID;
        await message.unsend(messageId);
      }
    }
  } catch (error) {
    console.error("Error while trying to unsend message:", error);
  }
}
};