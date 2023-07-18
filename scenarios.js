let scenarios =
[
  //NotZ
  {
    name: "The Gathering",
    xp_min: 0,
    xp_max: 6,
    set: "notz"
  },
  {
    name: "The Midnight Masks",
    xp_min: 6,
    xp_max: 14,
    set: "notz"
  },
  {
    name: "The Devourer Below",
    xp_min: 18,
    xp_max: 26,
    set: "notz"
  },
  //Dunwich
  {
    name: "Extracurricular Activities",
    xp_min: 0,
    xp_max: 5,
    note: ["As first scenario."],
    set: "dunwich"
  },
  {
    name: "Extracurricular Activities",
    xp_min: 4,
    xp_max: 9,
    note: ["As second scenario."],
    set: "dunwich"
  },
  {
    name: "The House Always Wins",
    xp_min: 0,
    xp_max: 9,
    note: ["As first scenario."],
    set: "dunwich"
  },
  {
    name: "The House Always Wins",
    xp_min: 6,
    xp_max: 12,
    note: ["As second scenario."],
    set: "dunwich"
  },
  {
    name: "The Miskatonic Museum",
    xp_min: 9,
    xp_max: 13,
    set: "dunwich"
  },
  {
    name: "The Essex County Express",
    xp_min: 13,
    xp_max: 16,
    set: "dunwich"
  },
  {
    name: "Blood on the Altar",
    xp_min: 15,
    xp_max: 19,
    set: "dunwich"
  },
  {
    name: "Undimensioned and Unseen",
    xp_min: 19,
    xp_max: 22,
    set: "dunwich"
  },
  {
    name: "Where Doom Awaits",
    xp_min: 22,
    xp_max: 27,
    set: "dunwich"
  },
  {
    name: "Lost in Time and Space",
    xp_min: 27,
    xp_max: 35,
    challenge: true,
    set: "dunwich"
  },
  //Carcosa
  {
    name: "Curtain Call",
    xp_min: 0,
    xp_max: 8,
    set: "carcosa"
  },
  {
    name: "The Last King",
    xp_min: 6,
    xp_max: 13,
    set: "carcosa"
  },
  {
    name: "Echoes of the Past",
    xp_min: 9,
    xp_max: 14,
    set: "carcosa"
  },
  {
    name: "The Unspeakable Oath",
    xp_min: 13,
    xp_max: 19,
    note: ["Conviction version.", "Doubt version."],
    set: "carcosa"
  },
  {
    name: "A Phantom of Truth",
    xp_min: 18,
    xp_max: 24,
    set: "carcosa"
  },
  {
    name: "The Pallid Mask",
    xp_min: 23,
    xp_max: 28,
    set: "carcosa"
  },
  {
    name: "Black Stars Rise",
    xp_min: 28,
    xp_max: 33,
    set: "carcosa"
  },
  {
    name: "Dim Carcosa",
    xp_min: 33,
    xp_max: 40,
    challenge: true,
    note: ["Conviction version.", "Doubt version.", "Neither Doubt nor Conviction version."],
    set: "carcosa"
  },
  //TFA
  {
    name: "The Untamed Wilds",
    xp_min: 0,
    xp_max: 8,
    set: "forgotten_age"
  },
  {
    name: "The Doom of Eztli",
    xp_min: 8,
    xp_max: 13,
    set: "forgotten_age"
  },
  {
    name: "Threads of Fate",
    xp_min: 13,
    xp_max: 21,
    set: "forgotten_age"
  },
  {
    name: "The Boundary Beyond",
    xp_min: 18,
    xp_max: 26,
    set: "forgotten_age"
  },
  {
    name: "Heart of the Elders (A)",
    xp_min: 26,
    xp_max: 30,
    set: "forgotten_age"
  },
  {
    name: "Heart of the Elders (B)",
    xp_min: 30,
    xp_max: 34,
    set: "forgotten_age"
  },
  {
    name: "The City of Archives",
    xp_min: 34,
    xp_max: 42,
    set: "forgotten_age"
  },
  {
    name: "The Depths of Yoth",
    xp_min: 40,
    xp_max: 50,
    challenge: true,
    set: "forgotten_age"
  },
  {
    name: "Shattered Aeons",
    xp_min: 48,
    xp_max: 55,
    challenge: true,
    set: "forgotten_age"
  },
  {
    name: "Turn Back Time",
    xp_min: 53,
    xp_max: 58,
    challenge: true,
    set: "forgotten_age"
  },
  //TCU
  {
    name: "The Witching Hour",
    xp_min: 0,
    xp_max: 7,
    set: "circle"
  },
  {
    name: "At Death's Doorstep",
    xp_min: 6,
    xp_max: 13,
    set: "circle"
  },
  {
    name: "The Secret Name",
    xp_min: 12,
    xp_max: 17,
    set: "circle"
  },
  {
    name: "The Wages of Sin",
    xp_min: 17,
    xp_max: 23,
    set: "circle"
  },
  {
    name: "For the Greater Good",
    xp_min: 20,
    xp_max: 26,
    set: "circle"
  },
  {
    name: "Union and Disillusion",
    xp_min: 25,
    xp_max: 31,
    set: "circle"
  },
  {
    name: "In the Clutches of Chaos",
    xp_min: 31,
    xp_max: 36,
    challenge: true,
    set: "circle"
  },
  {
    name: "Before the Black Throne",
    xp_min: 36,
    xp_max: 45,
    challenge: true,
    set: "circle"
  },
  //TDE
  {
    name: "Beyond the Gates of Sleep",
    xp_min: 0,
    xp_max: 10,
    set: "dream-eaters"
  },
  {
    name: "Waking Nightmare",
    xp_min: 0,
    xp_max: 10,
    set: "dream-eaters"
  },
  {
    name: "The Search for Kadath",
    xp_min: 10,
    xp_max: 22,
    challenge: true,
    set: "dream-eaters"
  },
  {
    name: "A Thousand Shapes of Horror",
    xp_min: 10,
    xp_max: 16,
    set: "dream-eaters"
  },
  {
    name: "Dark Side of the Moon",
    xp_min: 22,
    xp_max: 29,
    set: "dream-eaters"
  },
  {
    name: "The Point of No Return",
    xp_min: 16,
    xp_max: 25,
    set: "dream-eaters"
  },
  {
    name: "Weaver of the Cosmos",
    xp_min: 25,
    xp_max: 35,
    challenge: true,
    set: "dream-eaters"
  },
  {
    name: "Where the Gods Dwell",
    xp_min: 30,
    xp_max: 40,
    challenge: true,
    set: "dream-eaters"
  },
  //TIC
  {
    name: "The Pit of Despair",
    xp_min: 0,
    xp_max: 7,
    set: "innsmouth"
  },
  {
    name: "The Vanishing of Elina Harper",
    xp_min: 5,
    xp_max: 10,
    set: "innsmouth"
  },
  {
    name: "In Too Deep",
    xp_min: 10,
    xp_max: 15,
    set: "innsmouth"
  },
  {
    name: "Devil Reef",
    xp_min: 15,
    xp_max: 22,
    set: "innsmouth"
  },
  {
    name: "Horror in High Gear",
    xp_min: 23,
    xp_max: 28,
    set: "innsmouth"
  },
  {
    name: "A Light in the Fog",
    xp_min: 29,
    xp_max: 34,
    set: "innsmouth"
  },
  {
    name: "The Lair of Dagon",
    xp_min: 33,
    xp_max: 38,
    set: "innsmouth"
  },
  {
    name: "Into the Maelstrom",
    xp_min: 39,
    xp_max: 44,
    challenge: true,
    set: "innsmouth"
  },
  //EOTE
  {
    name: "Ice and Death I",
    xp_min: 0,
    xp_max: 5,
    set: "eote"
  },
  {
    name: "Ice and Death II",
    xp_min: 3,
    xp_max: 7,
    set: "eote"
  },
  {
    name: "Ice and Death III",
    xp_min: 7,
    xp_max: 12,
    note:["Before choosing your Partners, randomly choose 1 Partner to be killed."],
    set: "eote"
  },
  {
    name: "To the Forbidden Peaks",
    xp_min: 12,
    xp_max: 19,
    note:["Before choosing your Partners, randomly choose 1 Partner to be killed."],
    set: "eote"
  },
  {
    name: "City of the Elder Things",
    xp_min: 20,
    xp_max: 27,
    note:["Before choosing your Partners, randomly choose 2 Partners to be killed."],
    set: "eote"
  },
  {
    name: "Fatal Mirage",
    xp_min: 25,
    xp_max: 34,
    note:["Before choosing your Partners, randomly choose 3 Partners to be killed. Use agenda 1."],
    set: "eote"
  },
  {
    name: "Fatal Mirage",
    xp_min: 41,
    xp_max: 49,
    challenge: true,
    note:["Before choosing your Partners, randomly choose 3 Partners to be killed. Of the remaining Partners, flip half (rounded down) to their Resolute side. Use agenda 3."],
    set: "eote"
  },
  {
    name: "Heart of Madness I",
    xp_min: 31,
    xp_max: 36,
    note:["Before choosing your Partners, randomly choose 3 Partners to be killed. Of the remaining Partners, flip half (rounded down) to their Resolute side."],
    set: "eote"
  },
  {
    name: "Heart of Madness II",
    xp_min: 36,
    xp_max: 42,
    challenge: true,
    note:["Before choosing your Partners, randomly choose 4 Partners to be killed. Of the remaining Partners, flip half (rounded down) to their Resolute side."],
    set: "eote"
  },
  //TSK
  {
    name: "Riddles and Rain",
    xp_min: 0,
    xp_max: 6,
    set: "scarlet_keys",
    num_keys: 0
  },
  {
    name: "Dead Heat",
    xp_min: 8,
    xp_max: 14,
    note:["8 time has passed. Use 0 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 1,
    key_exclude: "The Last Blossom"
  },
  {
    name: "Dead Heat",
    xp_min: 17,
    xp_max: 23,
    note:["15 time has passed. Use 2 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 2,
    key_exclude: "The Last Blossom"
  },
  {
    name: "Dead Heat",
    xp_min: 28,
    xp_max: 34,
    challenge: true,
    note:["24 time has passed. Use 3 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 3,
    key_exclude: "The Last Blossom"
  },
  {
    name: "Sanguine Shadows",
    xp_min: 10,
    xp_max: 16,
    note:["Use 1 Cultist token."],
    set: "scarlet_keys",
    num_keys: 2,
    key_exclude: "The Weeping Lady"
  },
  {
    name: "Sanguine Shadows",
    xp_min: 26,
    xp_max: 34,
    challenge:true,
    note:["Use 3 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 3,
    key_exclude: "The Weeping Lady"
  },
  {
    name: "Dealings in the Dark",
    xp_min: 5,
    xp_max: 12,
    note:["5 time has passed. Use 1 Cultist token."],
    set: "scarlet_keys",
    num_keys: 1,
    key_exclude: "The Twisted Antiprism"
  },
  {
    name: "Dealings in the Dark",
    xp_min: 18,
    xp_max: 23,
    note:["23 time has passed. Use 3 Cultist token."],
    set: "scarlet_keys",
    num_keys: 2,
    key_exclude: "The Twisted Antiprism"
  },
  {
    name: "Dancing Mad",
    xp_min: 11,
    xp_max: 17,
    note:["10 time has passed. Use 1 Cultist token."],
    set: "scarlet_keys",
    num_keys: 2,
    key_exclude: "The Hungering Blade"
  },
  {
    name: "Dancing Mad",
    xp_min: 23,
    xp_max: 29,
    note:["21 time has passed. Use 2 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 3,
    key_exclude: "The Hungering Blade"
  },
  {
    name: "On Thin Ice",
    xp_min: 8,
    xp_max: 15,
    note:["8 time has passed. Use 1 Cultist token."],
    set: "scarlet_keys",
    num_keys: 2,
    key_exclude: "The Sable Glass"
  },
  {
    name: "On Thin Ice",
    xp_min: 27,
    xp_max: 33,
    note:["25 time has passed. Use 3 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 3,
    key_exclude: "The Sable Glass"
  },
  {
    name: "Dogs of War",
    xp_min: 5,
    xp_max: 12,
    note:["5 time has passed. Use 1 Cultist token."],
    set: "scarlet_keys",
    num_keys: 1,
    key_exclude: "The Light of Pharos"
  },
  {
    name: "Dogs of War",
    xp_min: 19,
    xp_max: 25,
    note:["20 time has passed. Use 2 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 2,
    key_exclude: "The Light of Pharos"
  },
  {
    name: "Shades of Suffering",
    xp_min: 16,
    xp_max: 22,
    note:["14 time has passed. Use 1 Cultist token. Flint traveled to Kuala Lumpur."],
    set: "scarlet_keys",
    num_keys: 2,
    key_exclude: "The Shade Reaper"
  },
  {
    name: "Shades of Suffering",
    xp_min: 36,
    xp_max: 42,
    challenge: true,
    note:["30 time has passed. Use 3 Cultist tokens. Agent Flint is missing."],
    set: "scarlet_keys",
    num_keys: 3,
    key_exclude: "The Shade Reaper"

  },
  {
    name: "Without a Trace",
    xp_min: 31,
    xp_max: 40,
    challenge: true,
    note:["22 time has passed. Use 2 Cultist tokens."],
    set: "scarlet_keys",
    num_keys: 3
  },
  {
    name: "Congress of the Keys",
    xp_min: 34,
    xp_max: 39,
    challenge: true,
    note:["Each Coterie member votes randomly out of their possible options. Use 4 Cultist tokens. The investigators become the bearers of 3 random unused keys.",
    "Each Coterie member votes randomly out of their possible options. Use 4 Cultist tokens. The investigators become the bearers of 3 random unused keys.",
    "Each Coterie member votes randomly out of their possible options. Use 4 Cultist tokens. The investigators become the bearers of 3 random unused keys.",
    "Each Coterie member votes randomly out of their possible options. The investigators know the true nature of the Coterie. Use 4 Cultist tokens. The investigators become the bearers of 3 random unused keys."],
    set: "scarlet_keys"
  },
  //Standalones
  {
    name: "Murder at the Excelsior Hotel",
    xp_min: 4,
    xp_max: 10,
    set: "excelsior"
  },
  {
    name: "Curse of the Rougarou",
    xp_min: 11,
    xp_max: 15,
    set: "rougarou"
  },
  {
    name: "War of the Outer Gods",
    xp_min: 19,
    xp_max: 26,
    challenge: true,
    set: "outer_gods"
  },
  {
    name: "Labyrinths of Lunacy",
    xp_min: 21,
    xp_max: 27,
    challenge: true,
    note:["You are Group A.", "You are Group B.", "You are Group C."],
    set: "labyrinths"
  },
  {
    name: "Carnevale of Horrors",
    xp_min: 22,
    xp_max: 28,
    challenge: true,
    set: "carnevale"
  },
  {
    name: "The Blob That Ate Everything",
    xp_min: 27,
    xp_max: 33,
    challenge: true,
    set: "blob"
  },
  {
    name: "Machinations Through Time",
    xp_min: 33,
    xp_max: 39,
    challenge: true,
    set: "machinations"
  },
  {
    name: "The Eternal Slumber",
    xp_min: 48,
    xp_max: 55,
    note:["You may choose to play The Night's Usurper afterwards."],
    challenge: true,
    set: "guardians"
  },
  {
    name: "The Night's Usurper",
    xp_min: 53,
    xp_max: 58,
    challenge: true,
    set: "guardians"
  },
  {
    name: "Fortune & Folly I",
    xp_min: 20,
    xp_max: 28,
    note:["You may choose to play Fortune & Folly II afterwards."],
    set: "fortune_and_folly"
  },
  {
    name: "Fortune & Folly II",
    xp_min: 33,
    xp_max: 40,
    challenge: true,
    set: "fortune_and_folly"
  },
  {
    name: "Read or Die",
    xp_min: 8,
    xp_max: 14,
    set: "read_or_die"
  },
  {
    name: "All or Nothing",
    xp_min: 8,
    xp_max: 14,
    set: "all_or_nothing"
  },
  {
    name: "Bad Blood",
    xp_min: 14,
    xp_max: 20,
    set: "bad_blood"
  },
  {
    name: "By the Book",
    xp_min: 15,
    xp_max: 21,
    set: "by_the_book"
  },
  {
    name: "Red Tide Rising",
    xp_min: 14,
    xp_max: 20,
    set: "red_tide_rising"
  }
]

keys = [
  "The Eye of Ravens",
  "The Sable Glass",
  "The Shade Reaper",
  "The Light of Pharos",
  "The Weeping Lady",
  "The Bale Engine",
  "The Ruinous Chime",
  "The Last Blossom",
  "The Mirroring Blade",
  "The Twisted Antiprism",
  "The Wellspring of Fortune"
]
