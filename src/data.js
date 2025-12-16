// src/data.js
export const content = {
  am: {
    nav: {
      home: "መነሻ",
      about: "ስለ በገና",
      courses: "ትምህርቶች",
      location: "አድራሻ",
      contact: "ያግኙን",
    },
    hero: {
      tagline: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ",
      title: "አቤል የበገና ትምህርት ቤት",
      desc: "የያሬዳዊ ዜማ እና የባህል ሙዚቃ መሳሪያዎች መማሪያ። ጥበብን ከነወዙ እንሰጣለን።",
      cta: "ይመዝገቡ",
    },
    aboutPage: {
      title: "ስለ በገና",
      subtitle: "ታሪክና ትርጓሜ",
      tabs: ["ትርጓሜ", "ታሪክ", "ምሳሌነት"],
      content: {
        0: {
          head: "ትርጓሜና ምንነት",
          body: "«በገና» የበገና ቀጥተኛ ትርጉሙ መዝሙር ሲሆን ሚስጢራዊ ትርጉሙ ደግሞ ስነ-ምግባር ማለት ነዉ። እንደሌሎች የሃገራችን ጥልቅ ብሔራዊ የታሪክ ሃብቶችና በታሪክም ከእስራኤል ቀጥሎ የኢትዮጵያ ቤተ ክርስቲያን ብቸኛ ጥንታዊ የዜማ መሣርያ ነው። በገና ማለት «በገነ» ከሚለው ግስ የተገኘ ሲሆን ትርጉሙም ደረደረ፣ መታ፣ ወይም አነዘረ ማለት ነው።",
          quote: "«ለእግዚኣብሔር በገና ደርድሩለት» (መዝ. 48፡5)",
        },
        1: {
          head: "ታሪካዊ አመጣጥ",
          body: "በገና በመጽሐፍ ቅዱስ ለመጀመሪያ ጊዜ የተጠቀሰ የዜማ መሳሪያ ነው። የላሜህ ልጅ ዩባል (ኢዮቤል) አባቱ ላሜህ በድንገት ቅድመ አያቱን ቃየንን በድንጋይ ወርውሮ ከገደለ በኋላ፣ በፈጠረው ጸጸትና ሀዘን ምክንያት በገናን ከደረቅ እንጨትና ጅማት ሰርቶ ሀዘኑን ገለጸበት። ወደ ኢትዮጵያ የገባው ከክርስቶስ ልደት በፊት በቀደምት ነገስታት ወይም ከታቦተ ጽዮን ጋር በቀዳማዊ ምኒሊክ ጊዜ እንደሆነ ይታመናል።",
          quote: "በገና የንስሐ፣ የልመናና የምስጋና መሳሪያ ነው።",
        },
        2: {
          head: "ምሳሌነትና ትርጉም",
          body: "በገና አሥር አውታር ያሉት ሲሆን እያንዳንዱ ክፍል የራሱ መንፈሳዊ ትርጉም አለው። አውታሩ በእጅ ሲመታ ሁለቱም ተዋሕደው ድምፁ የሚሰማው ከታችኛው (ከቆዳው) ዘንድ እንደ ሆነ ሁሉ መለኮትና ሥጋ ተዋሕደው ከማኅፀነ ድንግል ዘንድ ለማደራቸው ምሳሌ ነው።",
          list: [
            { k: "ላይኛው ተሸካሚ", v: "የፈቃደ እግዚአብሔር ምሳሌ" },
            { k: "ታችኛው ሳጥን", v: "የማኅፀነ ድንግል ምሳሌ" },
            { k: "ግራና ቀኝ ምሰሶዎች", v: "የሚካኤልና የገብርኤል ምሳሌ" },
            { k: "አሥሩ አውታሮች", v: "የዓሠርቱ ቃላት (ትእዛዛት) ምሳሌ" },
          ],
        },
      },
    },
    courses: {
      title: "ትምህርቶች",
      items: [
        {
          name: "በገና",
          category: "መንፈሳዊ",
          img: "/images/abel15.jpg",
        },
        {
          name: "መሰንቆ",
          category: "ባህል",
          img: "/images/abel28.jpg",
        },
        {
          name: "ክራር",
          category: "ዜማ",
          img: "https://i.pinimg.com/736x/8e/3c/55/8e3c5520268502844890604344585141.jpg",
        },
        {
          name: "ዋሽንት",
          category: "እረኝነት",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Washint.jpg/800px-Washint.jpg",
        },
      ],
    },
    locations: {
      title: "አድራሻ",
      list: [
        { city: "ፒያሳ", address: "አባቢያ ራመት ታቦር ህንጻ 4ተኛ ፎቅ" },
        { city: "መገናኛ", address: "ሲቲ ሞል 7ኛ ፎቅ" },
        { city: "ለቡ", address: "መድኀኔአለም ፊለፊት ደስታ ሚኒ ሞል 4 ኛ ፎቅ" },
        { city: "Chicago", address: "USA Branch" },
      ],
    },
    footer: { talk: "እንማማር?", rights: "መብቱ በህግ የተጠበቀ ነው።" },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      location: "Locations",
      contact: "Contact",
    },
    hero: {
      tagline: "Ethiopian Orthodox Tewahedo",
      title: "Abel Begena School",
      desc: "The center for Yaredic melody and traditional instruments. Preserving heritage through art.",
      cta: "Join Class",
    },
    aboutPage: {
      title: "About Begena",
      subtitle: "History & Symbolism",
      tabs: ["Meaning", "History", "Symbolism"],
      content: {
        0: {
          head: "Etymology & Definition",
          body: "Directly translated, 'Begena' means song/harp, but mystically it implies ethics and morality. It is a unique ancient instrument of the Ethiopian Church, second only to Israel in history. Derived from the verb 'Begene' (to strike, pluck, or vibrate).",
          quote: "'Sing praises to God with the harp.' (Psalm 48:5)",
        },
        1: {
          head: "Historical Origins",
          body: "The Begena is the first musical instrument mentioned in the Bible. Jubal (Yuval) created it to express grief after his father Lamech accidentally killed his ancestor Cain. It was brought to Ethiopia by ancient kings or with the Ark of the Covenant during the time of Menelik I. It is strictly used for prayer, repentance, and praise.",
          quote: "An instrument of Repentance and Praise.",
        },
        2: {
          head: "Spiritual Symbolism",
          body: "The Begena typically has ten strings, symbolizing the Ten Commandments. The striking of the string by the hand produces sound from the box below, symbolizing the union of Divinity and Flesh in the womb of the Virgin Mary.",
          list: [
            { k: "Top Beam", v: "Symbol of God's Will (Heaven)" },
            { k: "Bottom Box", v: "Symbol of the Virgin's Womb" },
            { k: "Left & Right Pillars", v: "Symbol of Michael & Gabriel" },
            { k: "Ten Strings", v: "Symbol of the Ten Commandments" },
          ],
        },
      },
    },
    courses: {
      title: "Selected Courses",
      items: [
        {
          name: "Begena",
          category: "Spiritual",
          img: "/images/abel15.jpg",
        },
        {
          name: "Masinqo",
          category: "Tradition",
          img: "/images/abel28.jpg",
        },
        {
          name: "Krar",
          category: "Melody",
          img: "https://i.pinimg.com/736x/8e/3c/55/8e3c5520268502844890604344585141.jpg",
        },
        {
          name: "Washint",
          category: "Shepherd",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Washint.jpg/800px-Washint.jpg",
        },
      ],
    },
    locations: {
      title: "Locations",
      list: [
        { city: "Piassa", address: "Ababiya Ramet Tabor Bldg, 4th Floor" },
        { city: "Megenagna", address: "City Mall, 7th Floor" },
        { city: "Lebu", address: "Opposite Medhanialem, Desta Mini Mall" },
        { city: "Chicago", address: "USA Branch" },
      ],
    },
    footer: { talk: "Let's Talk?", rights: "All Rights Reserved." },
  },
};
