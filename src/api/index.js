// const crawWurm = {
//     artist: "Richard Sardinha",
//     cmc: 6,
//     colorIdentity: ["G"],
//     colors: ["Green"],
//     flavor: "The most terrifying thing about the craw wurm is probably the horrible crashing sound it makes as it speeds through the forest. This noise is so loud it echoes through the trees and seems to come from all directions at once.",
//     id: "ada04e68-5bec-59bf-8474-7e87e82da1e8",
//     imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130527&type=card",
//     layout: "normal",
//     manaCost: "{4}{G}{G}",
//     multiverseid: 130527,
//     name: "Craw Wurm",
//     number: "257",
//     originalType: "Creature - Wurm",
//     power: "6",
//     printings: ["10E", "2ED", "3ED", "4BB", "4ED", "5ED", "8ED", "9ED", "CED", "CEI", "FBB", "LEA", "LEB", "M10", "SUM"],
//     rarity: "Common",
//     rulings: [],
//     set: "10E",
//     setName: "Tenth Edition",
//     subtypes: ["Wurm"],
//     supertypes: [],
//     toughness: "4",
//     type: "Creature — Wurm",
//     types: ["Creature"]
//   };
  
//   const demolish = {
//     artist: "Gary Ruddell",
//     cmc: 4,
//     colorIdentity: ["R"],
//     colors: ["Red"],
//     flavor: "\"Pound the steel until it fits. Doesn't work? Bash to bits.\" —Dwarven forging song",
//     id: "a1901190-a766-5bf7-9dd7-9c1bdb0b4280",
//     imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129522&type=card",
//     layout: "normal",
//     manaCost: "{3}{R}",
//     multiverseid: 129522,
//     name: "Demolish",
//     number: "196",
//     originalText: "Destroy target artifact or land.",
//     originalType: "Sorcery",
//     printings: ["10E", "8ED", "9ED", "AVR", "KLD", "M11", "M14", "MB1", "ODY", "ORI", "THS", "WAR", "WC03", "XLN", "ZEN"],
//     rarity: "Common",
//     rulings: [],
//     set: "10E",
//     setName: "Tenth Edition",
//     subtypes: [],
//     supertypes: [],
//     text: "Destroy target artifact or land.",
//     type: "Sorcery",
//     types: ["Sorcery"]
//   };
  
//   export async function fetchCards(terms) {
//     return [
//       crawWurm,
//       demolish
//     ];
//   }

// inside src/api/index.js

import axios from 'axios';

export async function fetchCards({ name, text }) {
  try {
    const { data } = await axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${ name }&text=${ text }`
    );

    return data.cards || [];
  } catch (error) {
    throw error;
  }
}