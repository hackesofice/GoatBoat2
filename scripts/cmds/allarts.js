const axios = require("axios");

module.exports = {
  config: {
    name: "artall",
    version: "1.0",
    author: "NTKhang",
    countDown: 0,
    role: 2,
    shortDescription: {
      vi: "",
      en: "Convert photos into anime drawings of all styles"
    },
    longDescription: {
      vi: "",
      en: "Convert photos into anime drawings of all available styles"
    },
    category: "box chat",
    guide: {
      vi: "",
      en: "Convert an image into anime drawings of all available styles:\n" +
          "{pn}"
    }
  },

  langs: {
    vi: {
      invalidUrl: "",
      error: ""
    },
    en: {
      invalidUrl: "⚠️ Invalid image url, please reply an image or enter an image url",
      error: "❌ An error occurred:\n%1"
    }
  },

  onStart: async function ({ message, event, args, getLang }) {
    let imageUrlInPut;
    if (["photo", "sticker"].includes(event.messageReply?.attachments[0]?.type)) {
      imageUrlInPut = event.messageReply.attachments[0].url;
    }
    else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g)) {
      imageUrlInPut = args[0];
    }
    else {
      return message.reply(getLang("invalidUrl"));
    }

    const types = Array.from({ length: 9 }, (_, i) => i + 1);
    const imageUrls = [];

    for (const type of types) {
      try {
        const res = await axios.get("https://goatbotserver.onrender.com/taoanhdep/art", {
          params: {
            image: imageUrlInPut,
            type
          }
        });
        imageUrls.push(res.data.data.effect_img);
      }
      catch (error) {
        const err = error.response.data.message;
        console.error(err);
      }
    }

    if (imageUrls.length === 0) {
      return message.reply(getLang("error", "Failed to generate any images."));
    }

    const attachments = imageUrls.map((url, i) => ({
      type: "image",
      payload: { url },
      is_reusable: true,
      filename: `imageArt_${types[i]}.png`
    }));

    try {
      n.attachment = await global.utils.getStreamFromURL(img1);
				message.reply(n);
    }
    catch (error) {
      console.error(error);
      message.reply(getLang("error", "Failed to send images."));
    }
  }
};