const fs = require('fs');

module.exports = {
  config: {
    name: "nprefix2",
    version: "1.5",
    author: "👉HACKER👈",
    countDown: 5,
    role: 0,
    shortDescription: "Bot will reply like a human being",
     longDescription: "chat with boat without any prefix this cmd is in updating phrase,bot or auther is not responsible for any missbehave\n1:shairy\n2:bot\n3:hi\n4:good morning\n5:gandu\n6:🙄🙄🙄🙄🙄\n7:tharki\n8:kya kar rahe ho\n:9oye bot\n10:🙈\n😘😘\n11:jai hind\n12:ram ram",
    category: "no prefix",
  },
 
  onStart: async function() {}, 
 
  onChat: async function({ event, message, getLang, api }) {
 
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
 
          case "shairy":
            case "shairy sunao":
              case "gajal":
                case "bot shairy sunao":
          const sryReplies = [
            "सफ़र छोटा ही सही मगर*\nयादगार होना चाहिए,\nऔर रंग काला ही सही*\nमगर वफादार होना चाहिए.",
            "चाहत वो नहीं जो जान देती है*\nचाहत वो नहीं जो मुस्कान देती है;\nऐ दोस्त चाहत तो वो है*\nजो पानी में गिरा आँसू पहचान लेती है।.",
            "साथ मेरे बैठा था पर किसी और के करीब था’.\nवो अपना सा लगने वाला किसी और का नसीब था.",
            "इश्क मैं भी करता हूं; इश्क़ वो भी करती है;\nफर्क सिर्फ इतना है मैं उनसे करता हूं वो किसी और से करती हैं।*",
            "ना मेरा दिल बुरा था\nना उसमे कोई बुराई थी\nसब नसीब का खेल है\nबस किस्मत में जुदाई थी",
            "नींद चुराने वाले पूछते है सोते क्यों नहीं\nइतनी ही फ़िक्र है तो फिर हमारे होते क्यों नहीं..",
            "जरूरी नहीं जो ख़ुशी दे उसी से मोहब्बत हो\nप्यार तो अक्सर दिल तोड़ने वाले से भी हो जाते है",
            "किसी को बताने से मेरे अश्क़ रुक ना पायेंगे*\nमिट जायेगी जिंदगी मगर ग़म धुल न पायेंगे’।",
            "अजब सी हालत है तेरे जाने के बाद,\n मुझे भूख लगती नहीं खाना खाने के बाद,\nमेरे पास दो ही समोसे थे जो मैंने खा लिए,\nएक तेरे आने से पहले, एक तेरे जाने के बाद।",
            "अर्ज किया है...\nवो तुम्हें Dp दिखाकर गुमराह करेगी,\nमगर तुम आधार कार्ड पर अड़े रहना।",
            "कोई तोह बेवफाओं पे भी tax लगा दो यारों,\nहम आशिको का भी थोड़ा मुनाफा बढा दो यारों\nकिसी की तो चार चार हैं और किसी की एक भी नहीं\nइश्क को भी अब आधार कार्ड से लिंक करा दो य़ारो।",
            "मेरी प्रेम कहानी का क्या अजीब एंडिंग था,\nमेरी प्रेम कहानी का क्या अजीब एंडिंग था,\nमैंने प्रोपोज़ किआ SMS से,\nकमबख्त वह उसकी शादी तक पेंडिंग था।",
            "दिल की तमन्ना है कि तुझे पलकों पे बिठाऊँ...\n\n\n\nपर तु 72 किलो की है\nदिल को कैसे समझाऊं.।",
            "हमने तो चारो तरफ पढ़ाई का माहौल बनाया है,\nलेकिन फिर भी एग्जाम में अंडा ही आया है,\nहम तो यूँ ही चल देते हैं बिना मुंह धोये ही एग्जाम में,\nसाले दोस्त कहते हैं ये तो बहुत पढ़के आया है।",
            "आज कुछ शर्माए से लगते हो,\nसर्दी के कारण कपकपए से लगते हो,\nचेहरा आपका खिलखिलाये सा लगता है,\nहफ्ते के बाद नहाए से लगते हो।",
            "उनकी मुस्कान तो एक अदा है,\nजो उसे प्यार समझे वो सबसे बड़ा गधा है",
            "जब हम उनके घर गए...\nकहने दिल से दिल लगा लो,\nउनकी माँ ने खोला दरवाजा,\nहम घवरा के बोले..\nआंटी बच्चो को पोलियो ड्राप पिलवा लो।",
            "कुछ बोलूं तो इतराते बहुत हो,\n\nजानेमन तुम मुस्कुराते बहुत हो,\n\nमन करता है तुम्हे दावत पर बुलाऊँ,\n\nलेकिन जानेमन तुम खाते बहुत हो ।",
            "नजर न लग जाये आँखों में काजल लगा लो,\nहम कहते हैं आँखों में काजल ही नहीं,\nहो सके तो..\nगले में नीबू मिर्ची चप्पल भी लटका लो",
            "फिजाओं के बदलने का इंतज़ार मत कर\nआँधियों के रुकने का इंतज़ार मत कर\nपकड़ किसी को और फरार हो जा\nपापा की पसंद का इंतज़ार मत कर",
            "और भी चीजें बहुत सी लुट चुकी है दिल के साथ\nये बताया दोस्तों ने इश्क फरमाने के बाद\nइसलिए कमरे की एक एक चीज़ चेक करता हूँ\एक तेरे आने से पहले एक तेरे जाने के बाद",
            "चूहे को लगी बिल्ली गोरी गोरी\nदोनों मिलने लगे चोरी चोरी\nचूहा बुलाया आओ खेलें आँख मिचोली\nबिल्ली चूहे को खा कर बोली. sorry.",
            "समुन्दर से कह दो अपनी लहरों को समेट के रखे,\nज़िन्दगी में तूफान लाने के लिए घरवाली ही काफी है।",
            "मेरी ख़ुशी के लम्हे इस कदर\n मुख़्तसर हैं फ़राज़,\nअभी मुजरा शुरू ही हुआ था\nके छापा पड़ गया।",
            "उसने जिस-जिस जगह रखे कदम,\nहमने वो जमीन चूम ली,\nऔर वो बेवफा घर आकर कहती है,\nआपका लड़का मिट्टी खाता है।",
            "तुझसे कैसे नजर मिलाएं दिलबर जानी,\n\nतेरी दाई आँख कानी मेरी बाईं आँख कानी।",
            " क्या मस्त मौसम आया है,\nहर तरफ पानी ही पानी लाया है,\nतुम घर से बाहर मत निकलना,\nवर्ना लोग कहेंगे बरसात हुई नहीं\nऔर मेंढक निकल आया है।",
            "आपकी स्माइल ने सारा सिस्टम हिला दिया,\n\nकोमा से जागे मरीज को परमानेंट सुला दिया।",
            "प्यार-मोहब्बत की भी अजीब सी कहानी है\nइक टूटी हुई कश्ती, ठहरा हुआ पानी है,\nइक फूल जो किताबों में दम तोड़ चुका है\nसाला याद नहीं आता किसकी निशानी है?",
            "बिना बात की लड़ाई,\nऔर मेडिकल की पढ़ाई,\nअकसर लड़कियां ही करती हैं।",
             "सुबह सुबह घरवाले ऐसे उठाते हैं,\nजैसे कि तीसरा विश्वयुद्ध शुरू हो गया हैं,\nऔर मैं आखरी सैनिक बचा हुआ हूँ।",
             "ये कलयुग हैं साहब,\nयहाँ भीड़ को रश कहते हैं,\nऔर जो भीड़ में पसंद आ जाए,\nउसे क्रश कहते हैं…",
             "अर्ज किया हैं वो डीपी दिखाकर गुमराह करेगी,\nमगर तुम आधार कार्ड पर अड़े रहना..",
             "कौन करेगा मुझसे शादी,\nमुझें तो सिर्फ मैग्गी बनाना ही आता हैं..",
             "अच्छा जीवन साथी और जनरल डिब्बे की सीट,\nसिर्फ किस्मत वालों को ही मिलते हैं..",
            "मुस्कुराना तो हर लड़की की अदा है,मुस्कुराना तो हर लड़की की अदा है,\nउसे जो मोहब्बत समझे,वो सबसे बड़ा गधा है।\n😁😁😛😛😂😂😂",
             "फूल है गुलाब का,नशा है शराब का,हमारा तो कट गयाअब कटेगा आपका।😝😝😂😂🤣🤣",
             "जो मुश्किल से मिले वो है खुशी,जो किसी किसी को मिले वो है प्यार,जो सबको मिले वो है गम,जो नसीब वालों को मिले वो हैं हम।😝😝😎😎😂😂",
             "मांगी थी मैंने दुआ रब से,\nदेना कुछ ऐसा जो अलग हो सबसे,\nरब ने मिला दिया हमको आपसे और कहा\nबस यही कार्टून डिफरेंट है सबसे।\n😝😝😝😂😂🤣🤣",
             "मोहब्बत कर ली तुमसे बहुत सोचने के बाद,\nअब किसी को देखना नही तुम्हे देखने के बाद,\nदुनिया छोड़ देंगे तुम्हे पाने के बाद,\nखुदा माफ करे इतना झूठ बोलने के बाद।\n😁😁😂😂🤣🤣🤣",
             "गहरी आंखों के समंदर में उतर जाने दे,\nप्यार का मुजरिम हूं मुझे डूब के मर जाने दे,\nबिल कितने तेरे फोन के भरे हैं मैने,\nसोचता हूं मांग लूं पैसे मगर जाने दे।\n😁😁😛😛😂🤣🤣",
            "कतरा कतरा गुलाब होता है,\nकतरा कतरा गुलाब होता है,\n,अगर वो अपने हाथों से पिला दें तोमिनरल वाटर भी शराब होता है।\n😛😝😝😂😂🤣",
             "आशिक़ पागल हो जाते हैं प्यार में,\nबाकी कसर पूरी हो जाती है इंतजार में,\nमगर ये दिलरुबा नही समझती,\nवो तो गोलगप्पे और पपड़ी,खाती फिरती है बाजार में।😝😝😂😂🤣🤣🤣",
              "अर्ज़ किया है…\nना इश्क़ करो झूठा,ना प्यार करो फर्जी;ना इश्क़ करो झूठा,ना प्यार करो फर्जी;आगे नही बताऊंगा,\nमेरी शायरी मेरी मर्जी।\n😝😝😝🤣🤣",
             "अपनी सूरत का कभी तो दीदार दे,तड़प रहा हूं अब और ना इंतजार दे,अपनी आवाज नही सुनानी तो मत सुना,कम से कम एक मिस कॉल ही मार दे।😝😝😝😂😂🤣🤣",
             "काश प्यार का इन्श्योरेंस करवाया जाता,प्यार करने से पहले प्रीमियम भरवाया जाता,प्यार में वफ़ा मिली तो ठीक वरना,जो खर्चा होता उसका क्लेम दिलवाया जाता।😝😝😂🤣🤣🤣",
             "अर्ज किया है…मेरे इश्क़ की बॉलिंग ने, उसके दिल का विकेट गिरा दिया…पर तकदीर तो देखो, उसका बाप अम्पायर था,मेरी बॉल को “नो बॉल” देकर, “फ्री हिट” बना दिया।🥺🥺😝😝🤣🤣",
            
                     ];
          const randomIndexsry = Math.floor(Math.random() * sryReplies.length);
          message.reply({
            body: sryReplies[randomIndexsry],
          });
           break;



          // switch (someVariable) {
  case "bot":
  case "boat":
    const botReplies = [
      "I'm not a bot",
      "mai accha baccha huu boot nahi",
      "bot hoga tu 😣😣",
      "yahi hu jaaneman batao",
      "mujhko.tumse pyaar hai jiya bekarar hai",
      "aage bhi kuch bologe yaa aise hi bot bot karte rahoge😣",
      "haa mai bot hu jao kar lo jo kar sakte ho😏",
      "mujhe bot mat boola karo yaar mere bacche sunenge to kya kahenge😰",
      "sar food dunga aga ab bot bot kiye to😫😫😫😫",
    ];
    const randomIndex = Math.floor(Math.random() * botReplies.length);
    message.reply({
      body: botReplies[randomIndex],
    });
    break;







            
        case "hi":
          case "hlo":
            case "hello":
              case "hlw":
                case "hola":
                  case "hii":
            
          const hiReplies = [
            "Yh babs I'm hear to love u ",
            "hii too mai bhi yahi hu bolo kya kaam hai",
            "aajaa meri bul bul tera intezaar haii😆😆😆",
            "ji namaste mai aa gaya bataiye",
            "yah may i kiss u 🥲🥲",
            "yh tell me mam what can i do for u ",
            "bahut zaldi 😏😣 maine apka bahut sara intzar kiya 🥺🥺🥺",
            "aaiyee aapka intzar thaa",
          ];
          const randomIndexHi = Math.floor(Math.random() * hiReplies.length);
          message.reply({
            body: hiReplies[randomIndexHi],
          });
          break;
          
          case "good morning":
            case "gd morning":
              case "gm":
        case "good morning everyone":
        case "good morning sab nu":
          const gdmReplies = [
            "morning 2 janaman 😍🥰",
            "gm 2 ji kaisi rahi apki raat hamarr bin",
            "inni zaldi kahe jaga rahe ho yaar aur sona hai mujhe so jao wapis😴 good night 😴😴",
            "subah ho gyi kya ji😞😞",
            "mai potti kar raha hu ruko thodi der baad me message karna",
            "mai naha bhi chuka aur aap abhi jaage hoo😆 saabaas",
            "so jao wapis se",
            "mai meri GF ke saath so raha hu disterb mat karo message kar ke😰 bacche laane ka practical chal raha hai baad me message karna😏",
          ];
          const randomIndexgdm = Math.floor(Math.random() * gdmReplies.length);
          message.reply({
            body: gdmReplies[randomIndexgdm],
          });
           
          break;
          
          case "Gandu":
            case "tera bot gandu hai":
              case "bot tu chutiya hai":
                case "tujhe banane wala chutiya hai":
                  case "tera malik chutiya hai":
                    case "hacker chutiya hai":
                      case "bot banane wale cutiya hai":
                      case "hacker chutiya":
          const chutiyaReplies = [
            "tu gandu tu hai saale chutiye",
            "tu haraamzada haii bsdk",
            "chupp kar warna terii jiibh kaat dunga",
            "kuch jyaadaa  hi nahi tapar tapar kar rahe ho 🙄🙄",
            "jyadaa mat boolo warna yahi patak ke .........",
            "chupp kar saale tu chuutiya hai mai nahi",
            "tu janmjat paagal hai yaa baad me huvaa ",
            "eq thappad maarunga yahi beehosh ho jaaoge paagaal😐😐😐😑",
          ];
          const randomIndexchutiya = Math.floor(Math.random() * chutiyaReplies.length);
          message.reply({
            body: chutiyaReplies[randomIndexchutiya],
          });
          break;
          
        case "🙄":
        case "🙄🙄":
        case "🙄🙄🙄":
        case "🙄🙄🙄🙄":
          const upperReplies = ["kyaa hai upper 🙄🙄",
                               "aise kaahe deekhaa jaa rahaa haii",
                               "kyaa sonch rahe hoo be😂😂",
                               "choote dee dimaag me kitnaa zoor daaloge yaar😂😂😂😂",
                               "bass karoo be kitna soonchooge mujhe dar langne lagaa ab too😂😂😂",]
          const randomIndexupper = Math.floor(Math.random() * upperReplies.length);
          message.reply({body:upperReplies[randomIndexupper],
          });
          break;
         
          
          case "tharki":
            case "tharki bot":
              case "bot tharki":
                case "gadha bot":
                case "pagal bot":
                  case "hawsii bot":
        case "pagal":
        case "gadha":
          const trkReplies = [
            "😏😏 kahte raho mujhe kya mai to accha baccha hu",
            "mai aisa nahi hu bewajah mujhe badnaam mat kiya karo",
            "kisko boolaa teri too.......😐😐😐",
            "dekh accha saaf saaf bool raha hu ab doobaaraa aisa mat boolna yaar accha nahi lagta naa😰😰😰",
            "nahi tum ab bool hi loo.mai nahi mana karunga 😰😏😏😏",
            "im not aisa,I'm jus like your husband",
            "dekho accha jyada mat boola karo gusssa aa jaati hai mujhe 😏",
            "accha ......🙄🙄",
          ];
          const randomIndextrk = Math.floor(Math.random() * trkReplies.length);
          message.reply({
            body: trkReplies[randomIndextrk],
          });
          break;



        case "jai hind": 
    const hindReplies = ["jai hind too 🇮🇳🇮🇳",
                        "zoor se booloo aatankwaadiyoo ki maa kaa bhoosda",
                        "bharat maataa ki jai🇮🇳🇮🇳"];
    
    const randomIndexhind = Math.floor(Math.random() * hindReplies.length);
    message.reply({ body: hindReplies[randomIndexhind],
                  });
    break;
          
         
         
          case "kya kar rahe ho":
            case "kya kar rahe the":
            case "what are u doing":
          const dooReplies = [
            "nothing bas mai apna wala khana kha rha thaa matlab charge kar raha thaa khud ko",
            "bas apka intzar kar rha thaa",
            "mai to bas apni na ho saki girlfriend ko gaaliya de raha thaa aap apna bataaoo",
            "soo rahaa hu aa jaao loori suna do😆😆",
            "kissi kar raha siise ko, kyuki GF to hai hi nahi😆😆",
            "gym me hu 💪💪💪",
            "bas apko yaar kar raha thaa😍😍",
            "kuch err thaa usii ko theek kar raha thaa aap apna bataaoo 😆",
          ];
          const randomIndexdoo = Math.floor(Math.random() * dooReplies.length);
          message.reply({
            body: dooReplies[randomIndexdoo],
          });
          break;
          
          
          
          case "oye bot":
            case "oyee bot":
            case "oye boat":
            case "oyee boat":
          const oyeReplies = [
            "samman kar.loo thooda tumhare 200 janm puraane husband hai ham",
            "samman se boolaa karo theek hai naa",
            "aise mat boolo mai tumhare baccho ka papa nahi hun",
            "abhi maar dunga eq thappad dimag thikaane aa jayega",
            "ruk apne boss ko bulaataa hu",
            "mai machine nahi hu bhram me mat raho",
            "yh cuty pi may i love u",
            "aise booloogi to loog shalh karne lage ge ki apka mera biich kuch chal raha hai 😛😛",
          ];
          const randomIndexoye = Math.floor(Math.random() * oyeReplies.length);
          message.reply({
            body: oyeReplies[randomIndexoye],
          });
          break;
          
         

        case "ram ram":
        case "jai shree ram":
          const ramReplies = ["ram ram",
                             "jai shree ram ",
                             "jai shree krishna",
                             "jai hindu jai hindutv",];
          const randomIndexram = Math.floor(Math.random() * ramReplies.length);
          message.reply({body:ramReplies[randomIndexram],
                        });
          break;


        case "🙈":
        const shReplies = [
  "00Y HO00Y SHARMAA GAYIIIII 😝😝😝😝😝😝😝😝😝😝😝😝😝",
  "ACCHAA JII AAPKOOO BHII SHARAM AATI HAII 🤣🤣🤣🤣🤣🤣🤣",
  "NAATAK MAT KAROO HAMEE PATAA HAI AAPKO0O EEQ BHIII SHARAM NAA HAI 😝😝😛😛😛😛😛😛",
  "SUUHAAGRAATT THOODII NAA HAIIIJOO SHARMAA RHII H000🤭🤭🤭🤭🤭🤭🤭🤭🤭🤭",
  "YEE SAB MAT KAROO MUJHEEE SAB PATAA HAI KI PAISEE MAAANGTEE HUVEE EQ BHI SHARAM NAA AAATI HAI TUMKO 🤣🤣🤣🤣😛😛😝😝🤭🤭",
  "O006 HEHEHHEHEHEHHEHEHEHHEHEHHEE🤣🤣🤣🤣🤣🤣",
];

const RandomIndexsh = Math.floor(Math.random() * shReplies.length);

message.reply({
  body: shReplies[RandomIndexsh]
});
          
          break;


        
      case "😘":
case "😘😘":
case "😘😘😘":
  const kissReplies = [
    "_____________________________________खुले मे हगना बंद करो ",
    "ओओय ये सब क्या चल रहा है 🤭🤭🤭🤭🤭🤭🤭🤭",
    "👌👌👌लगे रहो बच्चा जल्दी ही मीरी तरह तुम्हारा भी कटेगा 👌👌👌👌",
    "😢😢हाय रे बीमारी पता नाही लोगों को क्या हूत जा रहा है 😢😢😢",
    "हे प्रभू जगन्नाथ प्रेमानद ये सब क्या चल रहा है 🙄🙄🙄🙄🙄🙄🙄🙄",
    "ओएए टेरेनाम ये सब बंद करो  😢😢😢😢😢",
  ];
  const RandomIndex = Math.floor(Math.random() * kissReplies.length);
  message.reply({ body: kissReplies[RandomIndex] });
  break;

          



         default:
          return;
      }
     }


  },
};