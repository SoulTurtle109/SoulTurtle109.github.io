let scenarios =
[
  //NotZ
  {
    name: "The Gathering",
    xp_min: 0,
    xp_max: 6
  },
  {
    name: "The Midnight Masks",
    xp_min: 6,
    xp_max: 14
  },
  {
    name: "The Devourer Below",
    xp_min: 18,
    xp_max: 26
  },
  //Dunwich
  {
    name: "Extracurricular Activities",
    xp_min: 0,
    xp_max: 5,
    note: ["As first scenario."]
  },
  {
    name: "Extracurricular Activities",
    xp_min: 4,
    xp_max: 9,
    note: ["As second scenario."]
  },
  {
    name: "The House Always Wins",
    xp_min: 0,
    xp_max: 9,
    note: ["As first scenario."]
  },
  {
    name: "The House Always Wins",
    xp_min: 6,
    xp_max: 12,
    note: ["As second scenario."]
  },
  {
    name: "The Miskatonic Museum",
    xp_min: 9,
    xp_max: 13
  },
  {
    name: "The Essex County Express",
    xp_min: 13,
    xp_max: 16
  },
  {
    name: "Blood on the Altar",
    xp_min: 15,
    xp_max: 19
  },
  {
    name: "Undimensioned and Unseen",
    xp_min: 19,
    xp_max: 22
  },
  {
    name: "Where Doom Awaits",
    xp_min: 22,
    xp_max: 27
  },
  {
    name: "Lost in Time and Space",
    xp_min: 27,
    xp_max: 35,
    challenge: true
  },
  //Carcosa
  {
    name: "Curtain Call",
    xp_min: 0,
    xp_max: 8
  },
  {
    name: "The Last King",
    xp_min: 6,
    xp_max: 13
  },
  {
    name: "Echoes of the Past",
    xp_min: 9,
    xp_max: 14
  },
  {
    name: "The Unspeakable Oath",
    xp_min: 13,
    xp_max: 19
  },
  {
    name: "A Phantom of Truth",
    xp_min: 18,
    xp_max: 24,
  },
  {
    name: "The Pallid Mask",
    xp_min: 23,
    xp_max: 28
  },
  {
    name: "Black Stars Rise",
    xp_min: 28,
    xp_max: 33
  },
  {
    name: "Dim Carcosa",
    xp_min: 33,
    xp_max: 40,
    challenge: true
  },
  //TFA
  {
    name: "The Untamed Wilds",
    xp_min: 0,
    xp_max: 8
  },
  {
    name: "The Doom of Eztli",
    xp_min: 8,
    xp_max: 13
  },
  {
    name: "Threads of Fate",
    xp_min: 13,
    xp_max: 21
  },
  {
    name: "The Boundary Beyond",
    xp_min: 18,
    xp_max: 26
  },
  {
    name: "Heart of the Elders (A)",
    xp_min: 26,
    xp_max: 30,
  },
  {
    name: "Heart of the Elders (B)",
    xp_min: 30,
    xp_max: 34
  },
  {
    name: "The City of Archives",
    xp_min: 34,
    xp_max: 42
  },
  {
    name: "The Depths of Yoth",
    xp_min: 40,
    xp_max: 50,
    challenge: true
  },
  {
    name: "Shattered Aeons",
    xp_min: 48,
    xp_max: 55,
    challenge: true
  },
  {
    name: "Turn Back Time",
    xp_min: 53,
    xp_max: 58,
    challenge: true
  },
  //TCU
  {
    name: "The Witching Hour",
    xp_min: 0,
    xp_max: 7
  },
  {
    name: "At Death's Doorstep",
    xp_min: 6,
    xp_max: 13
  },
  {
    name: "The Secret Name",
    xp_min: 12,
    xp_max: 17
  },
  {
    name: "The Wages of Sin",
    xp_min: 17,
    xp_max: 23
  },
  {
    name: "For the Greater Good",
    xp_min: 20,
    xp_max: 26,
  },
  {
    name: "Union and Disillusion",
    xp_min: 25,
    xp_max: 31
  },
  {
    name: "In the Clutches of Chaos",
    xp_min: 31,
    xp_max: 36,
    challenge: true
  },
  {
    name: "Before the Black Throne",
    xp_min: 36,
    xp_max: 45,
    challenge: true
  },
  //TDE
  {
    name: "Beyond the Gates of Sleep",
    xp_min: 0,
    xp_max: 10
  },
  {
    name: "Waking Nightmare",
    xp_min: 0,
    xp_max: 10
  },
  {
    name: "The Search for Kadath",
    xp_min: 10,
    xp_max: 22,
    challenge: true
  },
  {
    name: "A Thousand Shapes of Horror",
    xp_min: 10,
    xp_max: 16
  },
  {
    name: "Dark Side of the Moon",
    xp_min: 22,
    xp_max: 29,
  },
  {
    name: "The Point of No Return",
    xp_min: 16,
    xp_max: 25,
  },
  {
    name: "Weaver of the Cosmos",
    xp_min: 25,
    xp_max: 35,
    challenge: true
  },
  {
    name: "Where the Gods Dwell",
    xp_min: 30,
    xp_max: 40,
    challenge: true
  },
  //TIC
  {
    name: "The Pit of Despair",
    xp_min: 0,
    xp_max: 7
  },
  {
    name: "The Vanishing of Elina Harper",
    xp_min: 5,
    xp_max: 10
  },
  {
    name: "In Too Deep",
    xp_min: 10,
    xp_max: 15
  },
  {
    name: "Devil Reef",
    xp_min: 15,
    xp_max: 22
  },
  {
    name: "Horror in High Gear",
    xp_min: 23,
    xp_max: 28
  },
  {
    name: "A Light in the Fog",
    xp_min: 29,
    xp_max: 34
  },
  {
    name: "The Lair of Dagon",
    xp_min: 33,
    xp_max: 38
  },
  {
    name: "Into the Maelstrom",
    xp_min: 39,
    xp_max: 44,
    challenge: true
  },
  //EOTE
  {
    name: "Ice and Death I",
    xp_min: 0,
    xp_max: 5
  },
  {
    name: "Ice and Death II",
    xp_min: 3,
    xp_max: 7
  },
  {
    name: "Ice and Death III",
    xp_min: 7,
    xp_max: 12
  },
  {
    name: "To the Forbidden Peaks",
    xp_min: 12,
    xp_max: 19
  },
  {
    name: "City of the Elder Things",
    xp_min: 20,
    xp_max: 27,
  },
  {
    name: "Fatal Mirage",
    xp_min: 25,
    xp_max: 34,
    challenge: true
  },
  {
    name: "Heart of Madness I",
    xp_min: 31,
    xp_max: 36,
  },
  {
    name: "Heart of Madness II",
    xp_min: 36,
    xp_max: 42,
    challenge: true
  },
  //TSK
  {
    name: "Riddles and Rain",
    xp_min: 0,
    xp_max: 6
  },
  {
    name: "Dead Heat",
    xp_min: 8,
    xp_max: 14,
    note:["8 time has passed. Use 0 Cultist tokens."]
  },
  {
    name: "Dead Heat",
    xp_min: 17,
    xp_max: 23,
    note:["15 time has passed. Use 2 Cultist tokens."]
  },
  {
    name: "Dead Heat",
    xp_min: 28,
    xp_max: 34,
    challenge: true,
    note:["24 time has passed. Use 3 Cultist tokens."]
  },
  {
    name: "Sanguine Shadows",
    xp_min: 10,
    xp_max: 16,
    note:["Use 1 Cultist token."]
  },
  {
    name: "Sanguine Shadows",
    xp_min: 26,
    xp_max: 34,
    challenge:true,
    note:["Use 3 Cultist tokens."]
  },
  {
    name: "Dealings in the Dark",
    xp_min: 5,
    xp_max: 12,
    note:["5 time has passed. Use 1 Cultist token."]
  },
  {
    name: "Dancing Mad",
    xp_min: 11,
    xp_max: 17,
    note:["10 time has passed. Use 1 Cultist token."]
  },
  {
    name: "Dancing Mad",
    xp_min: 23,
    xp_max: 29,
    note:["21 time has passed. Use 2 Cultist tokens."]
  },
  {
    name: "On Thin Ice",
    xp_min: 8,
    xp_max: 15,
    note:["8 time has passed. Use 1 Cultist token."]
  },
  {
    name: "On Thin Ice",
    xp_min: 27,
    xp_max: 33,
    note:["25 time has passed. Use 3 Cultist tokens."]
  },
  {
    name: "Dogs of War",
    xp_min: 5,
    xp_max: 12,
    note:["5 time has passed. Use 1 Cultist token."]
  },
  {
    name: "Dogs of War",
    xp_min: 19,
    xp_max: 25,
    note:["20 time has passed. Use 2 Cultist tokens."]
  },
  {
    name: "Shades of Suffering",
    xp_min: 16,
    xp_max: 22,
    note:["14 time has passed. Use 1 Cultist token. Flint traveled to Kuala Lumpur."]
  },
  {
    name: "Shades of Suffering",
    xp_min: 36,
    xp_max: 42,
    challenge: true,
    note:["30 time has passed. Use 3 Cultist tokens. Agent Flint is missing."]
  },
  {
    name: "Without a Trace",
    xp_min: 31,
    xp_max: 40,
    challenge: true,
    note:["22 time has passed. Use 2 Cultist tokens."]
  },
  {
    name: "Congress of the Keys",
    xp_min: 34,
    xp_max: 39,
    challenge: true,
    note:["Each Coterie member votes randomly out of their possible options. The Red-Gloved Man is not eerily silent. Use 4 Cultist tokens.",
    "Each Coterie member votes randomly out of their possible options. The Red-Gloved Man is not eerily silent. Use 4 Cultist tokens.",
    "Each Coterie member votes randomly out of their possible options. The Red-Gloved Man is eerily silent. Use 4 Cultist tokens.",
    "Each Coterie member votes randomly out of their possible options. The investigators know the true nature of the Coterie. Use 4 Cultist tokens.",]
  },
  //Standalones
  {
    name: "Murder at the Excelsior Hotel",
    xp_min: 4,
    xp_max: 10
  },
  {
    name: "Curse of the Rougarou",
    xp_min: 11,
    xp_max: 15
  },
  {
    name: "War of the Outer Gods",
    xp_min: 19,
    xp_max: 25,
  },
  {
    name: "Carnevale of Horrors",
    xp_min: 22,
    xp_max: 28,
    challenge: true
  },
  {
    name: "The Blob That Ate Everything",
    xp_min: 27,
    xp_max: 33,
    challenge: true
  },
  {
    name: "Machinations Through Time",
    xp_min: 33,
    xp_max: 39,
    challenge: true
  },
  {
    name: "The Eternal Slumber",
    xp_min: 48,
    xp_max: 55,
    note:["You may choose to play The Night's Usurper afterwards."]
  },
  {
    name: "The Night's Usurper",
    xp_min: 53,
    xp_max: 58,
    challenge: true
  },
  {
    name: "Fortune & Folly I",
    xp_min: 20,
    xp_max: 28,
    note:["You may choose to play Fortune & Folly II afterwards."]
  },
  {
    name: "Fortune & Folly II",
    xp_min: 33,
    xp_max: 40,
    challenge: true
  }
]
