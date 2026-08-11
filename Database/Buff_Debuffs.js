// Buff / Debuffs Database
// Name | Buff | Numbers of Buff

const buffDebuffData = [
    {
        "name": "Enhance Attack 4",
        "buff": "Attack +4%",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "Enhance Defense 4",
        "buff": "Defense +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Weakness Attack 1",
        "buff": "Critical damage +6%.",
        "numbers": "crit_dmg: 6, general_dmg: 6"
    },
    {
        "name": "Enhance Slash 1",
        "buff": "Damage done to enemies weak to slashing +6%.",
        "numbers": "slashDmg: 6, general_dmg: 6"
    },
    {
        "name": "Enhance Thrust 1",
        "buff": "Damage done to enemies weak to thrusting +6%.",
        "numbers": "thrustDmg: 6, general_dmg: 6"
    },
    {
        "name": "Enhance Blunt 1",
        "buff": "Damage done to enemies weak to blunt +6%.",
        "numbers": "bluntDmg: 6, general_dmg: 6"
    },
    {
        "name": "Weakness Attack 2",
        "buff": "Critical damage +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Fortitude 4",
        "buff": "Defense +50% when HP is <25%.",
        "numbers": "def_percent: 50"
    },
    {
        "name": "Devotion 4",
        "buff": "Attack +20% when HP is >75%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Enhance Thrust 4",
        "buff": "Damage done to enemies weak to thrusting +24%.",
        "numbers": "thrustDmg: 24, general_dmg: 24"
    },
    {
        "name": "Enhance Attack 3",
        "buff": "Attack +4%.",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "Enhance Defense 2",
        "buff": "Defense +8%.",
        "numbers": "def_percent: 8"
    },
    {
        "name": "Enhance Attack 2",
        "buff": "Attack +8%.",
        "numbers": "atk_percent: 8"
    },
    {
        "name": "Enhance HP 2",
        "buff": "Max HP +8%.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "Raging Bull 2",
        "buff": "Damage +12% on enemies with attack debuff.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "Raging Stallion 2",
        "buff": "Damage +12% on enemies with defense debuff.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "Enhance Blunt 4",
        "buff": "Damage done to enemies weak to blunt +24%.",
        "numbers": "bluntDmg: 24, general_dmg: 24"
    },
    {
        "name": "Burning Blow 4",
        "buff": "Attack against burned enemies increases 24%.",
        "numbers": "general_dmg: 24"
    },
    {
        "name": "Enhance Slash 4",
        "buff": "Damage done to enemies weak to slashing +24%.",
        "numbers": "slashDmg: 24, general_dmg: 24"
    },
    {
        "name": "Fluff Step 4",
        "buff": "Defense+ with each hit.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Poisonous Blow 4",
        "buff": "Attack +24% against poisoned enemies.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "Persistence 4",
        "buff": "Attack +20% at below 50% of your own HP. ",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Raging Bull 4",
        "buff": "Damage +25% on enemies with attack debuff.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Raging Stallion 4",
        "buff": "Damage +25% on enemies with defense debuff.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Slash protect 4",
        "buff": "Reduce damage from 15% slash element monster.",
        "numbers": "slashRes: 15"
    },
    {
        "name": "Enhance Defense 3",
        "buff": "Defense +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Strong Bleed Aim 4",
        "buff": "Chance of Bleed increases massively. [Precision Bleed 4] Critical rate +24% on bleed. ",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "Bloody Blow 4",
        "buff": "Attack +24% against bleeding enemies.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "Weakness Attack 4",
        "buff": "Critical damage +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Step-in 4",
        "buff": "Increases the critical rate as number of HITS increase.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Thrust protect 4",
        "buff": "Reduce damage from 15% thrust element monster.",
        "numbers": "thrustRes: 15"
    },
    {
        "name": "Resuscitation 4",
        "buff": "As HP is below 50% critical rate 30% increase.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Blunt protect 4",
        "buff": "Decrease damage 15% from Blunt element monsters. [Enhance Defense 3] Defense +4%. ",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Steel-like will 4",
        "buff": "Damage decrease to 20% when HP is 25% or lower. [Enhance Defense 3] Defense +4%. ",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Precise Attack 3",
        "buff": "Critical rate +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "Full of Yuuki 4",
        "buff": "When equipping 3 or more of Yuuki's Skill Records in the same set, Defense +8%. When equipping 5 or more of Yuuki's Skill Records in the same set, Attack +8%.",
        "numbers": "def_percent: 8, atk_percent: 8"
    },
    {
        "name": "Precise Attack 4",
        "buff": "Critical rate +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "Enhance HP 4",
        "buff": "Max HP increase 8%.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "Giant's Elixir",
        "buff": "Recovery items and objects on the fields decrease the recovery rate by 50% and Max HP will increase 30%.",
        "numbers": "hp_percent: 30"
    },
    {
        "name": "Flower gift 4",
        "buff": "When you are healed within the field by an object, attack and defense increase 10%.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Flower Fragrance 4",
        "buff": "Critical activation increases 35% when you are healing with an object in the field. ",
        "numbers": "crit_rate: 35"
    },
    {
        "name": "Wipe out your fear 4",
        "buff": "While defense+ buff is effective, attack power will increase 25%. ",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Crowd Control 4",
        "buff": "Attack +8% towards the enemy in Status Ailments (Poison, Burn, Bleed, Frostbite), damage from the enemy in Status Ailments (Poison, Burn, Bleed, Frostbite) -8%.",
        "numbers": "atk_percent: 8, allRes: 8"
    },
    {
        "name": "Opportunity for attack 4",
        "buff": "Critical damage to the enemy +20% while the enemy's attack power is decreasing.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "Opportunity for defense 4",
        "buff": "Critical activation rate +20% while enemy's defense power is decreasing.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Fighting spirit 4",
        "buff": "While buff attack+ is effective, defense +25%.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "Evasion 4",
        "buff": "Evasion rate +10%. *It will not be activated with focus attack./â—[Counter 4] Adds a buff when evading, +10% critical rate for 5 sec.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Break Attack 4",
        "buff": "Attack +35% to enemies when using break.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Encircle Break 3",
        "buff": "Increase in break gauge to enemy by +25%",
        "numbers": "break_pct: 25"
    },
    {
        "name": "Resist 4",
        "buff": "Status Ailments (Poison, Burn, Bleed, Frostbite) Res. +10%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Fortitude 3",
        "buff": "Defense +10% when HP is <25%.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Enhance Berserk 4",
        "buff": "When the player is Status Ailments (Poison, Burn, Bleed, Frostbite, Curse, Debility), Attack +25%./â—[Enhance Clotting 4] Bleed damage -50%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Burn Precision Attack4",
        "buff": "Critical rate +24% towards opponents with burn.",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "Quick Turn 4",
        "buff": "Attack +10% for 5 sec when evasion occurs.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Enhance HP 3",
        "buff": "Max HP increase 10%.",
        "numbers": "hp_percent: 10"
    },
    {
        "name": "Acceleration 4",
        "buff": "Critical damage +30% when HP is under 50%.",
        "numbers": "crit_dmg: 30, general_dmg: 30"
    },
    {
        "name": "Status Ailments Blow 4",
        "buff": "Attack +18% against enemy with status ailments (Poison, Burn, Bleed, Frostbite).* Evolving & Maximum Breakthrough",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Snipe 4",
        "buff": "Damage amount +18% towards the monsters not targeting the player.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "High Battle Healing 4",
        "buff": "Recovers a max of 1.5% HP per 3 sec.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Enhance Slash 3",
        "buff": "Damage done to enemies weak to slashing +15%.",
        "numbers": "slashDmg: 15, general_dmg: 15"
    },
    {
        "name": "Icy Blade 3",
        "buff": "Deals +5% Water element's damage to enemy.",
        "numbers": "waterDmg: 5"
    },
    {
        "name": "Miracle at the Battlefield 4",
        "buff": "Critical damage +25%, while increasing critical rate buff is effective.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "Flame Conversion 4",
        "buff": "Water element's damage to enemies -10% and fire element's damage to enemies +25%.",
        "numbers": "fireDmg: 25, general_dmg: 25"
    },
    {
        "name": "Earth Conversion 4",
        "buff": "Wind element's damage to enemies -10% and earth element's damage to enemies +25%.",
        "numbers": "earthDmg: 25, general_dmg: 25"
    },
    {
        "name": "Veteran Sword Technique 4",
        "buff": "Attack power increase with own levelÃ—0.17%. (max 34%)/â—[Black Truth 4] Additional damage 200 when attacking to enemy with Status Ailment(Poison, Burn, Bleed, Frostbite).",
        "numbers": "additionalDmg: 200"
    },
    {
        "name": "Aqua Conversion 4",
        "buff": "Fire element's damage to enemies -10% and water element's damage to enemies +25%.",
        "numbers": "waterDmg: 25, general_dmg: 25"
    },
    {
        "name": "Wind Conversion 4",
        "buff": "Earth element's damage to enemies -10% and wind element's damage to enemies +25%.",
        "numbers": "windDmg: 25, general_dmg: 25"
    },
    {
        "name": "Black Flash 4",
        "buff": "When equipping 2 or more of Kirito's Skill Records in the same set, Critical rate +20%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Black Joint Battle 4",
        "buff": "When equipping 3 or more of Kirito's Skill Records in the same set, Critical damage +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Black Legendary Sword 4",
        "buff": "When equipping 2 or more of Kirito's Skill Records in the same set, Attack +15%.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Black Combat 4",
        "buff": "When equipping 3 or more of Kirito's Skill Records in the same set, Evasion rate +5%. *It will not be activated with focus attack.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Black Fairy 4",
        "buff": "When equipping 2 or more of Kirito's Skill Records in the same set, Max HP +22%.",
        "numbers": "hp_percent: 22"
    },
    {
        "name": "Black Affection 4",
        "buff": "When equipping 3 or more of Kirito's Skill Records in the same set, Critical rate +15%.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "Red Chord 4",
        "buff": "ATK +10% while your own buff is in effect.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Blue Chord 4",
        "buff": "Damage +10% to the enemy that has ATK decreasing.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "Green Chord 4",
        "buff": "Damage +10% to the enemy that has DEF decreasing.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "Shine Conversion 4",
        "buff": "Dark element's damage to enemies -10% and holy element's damage to enemies +25%.",
        "numbers": "holyDmg: 25, general_dmg: 25"
    },
    {
        "name": "There's a case!",
        "buff": "Critical damage +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "There's only one truth!",
        "buff": "ATK +20% to enemy that has their weakness found.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Gale Blade 3",
        "buff": "Deals +4.5% Wind element's damage to enemy.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Full Swing 4",
        "buff": "Critical rate +20% when HP is above 75%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Sniper's Eye 4",
        "buff": "When increased critical damage buff is effective for yourself, Critical rate +35%.",
        "numbers": "crit_rate: 35, general_dmg: 35"
    },
    {
        "name": "Element Added",
        "buff": "Adds Holy Element to normal attack's.(The effect of the Element Added do not overlap, and will be prioritized in the order of Dark, Holy, Earth, Wind, Water, and Fire)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Flash Blade 4",
        "buff": "Critical rate for normal attack's +35%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Breeze 4",
        "buff": "When equipping 1 or more of Kirito's Skill Records in the same set, Critical damage +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Blooming Flower 4",
        "buff": "When attacking with 2 or more Skill Records of \"Leafa\" equipped within the same set, deal additional damage of 300.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Deadly Draw 4",
        "buff": "Critical rate +50% when HP is >99%.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "Dragon's Secret Sword 4",
        "buff": "Attack +25% when HP is >99%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Assassin of the Moonlight Shadow 4",
        "buff": "Critical damage +38% when HP is >99%.",
        "numbers": "crit_dmg: 38, general_dmg: 38"
    },
    {
        "name": "Hidden Emotion 4",
        "buff": "When equipping 1 or more of Kirito's Skill Records in the same set, Critical rate +15%./â—[The sky we saw together 4] ATK +10% while your own buff is in effect./â—[Enhance Heal 4] Effect of healing items and field objects +25%.",
        "numbers": "crit_rate: 15, atk_percent: 10"
    },
    {
        "name": "Big Sister! 4",
        "buff": "When equipping 1 or more of Asuna's Skill Records in the same set, Attack +10%",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "My Wish 4",
        "buff": "When evading, adds a buff of +15% critical rate and critical damage for 10 sec.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Frostbite Blow 4",
        "buff": "Attack against enemies with frostbite increases 20%.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "Golden Bell 4",
        "buff": "While the buff of your own additional damage is in effect, critical rate becomes +20%.",
        "numbers": "additionalDmg: NaN, general_dmg: 20"
    },
    {
        "name": "Light Magic 4",
        "buff": "DEF increase with own level Ã—0.17%. (max 34%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Icy Blade 4",
        "buff": "Deals +20% Water element's damage to enemy.",
        "numbers": "waterDmg: 20"
    },
    {
        "name": "Promise made 4",
        "buff": "When equipping 1 or more of Kirito's Skill Records in the same set, Critical rate +20%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Icy Clothes 3",
        "buff": "When you are frostbitten, Defense +10% and Frostbite damage  -15%.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Icy Ring 3",
        "buff": "When you are frostbitten, Critical rate +20% and Frostbite damage -15%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Expert's Margin 4",
        "buff": "Critical rate and critical damage +12% when HP is under 50%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Special Training Results 4",
        "buff": "Critical rate increases by your own levelÃ—0.28%. (max 56%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Valor 4",
        "buff": "Attack power +12% during the buff effect for increased critical damage.",
        "numbers": "atk_percent: 12"
    },
    {
        "name": "Wavering Confidence 4",
        "buff": "When critical damage is below 10%, if 3 or more of Asuna's Skill Records are equipped in the same set, this effect will be invalid.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Weakness Attack 3",
        "buff": "Critical damage +25%.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "Tense Heart 4",
        "buff": "When critical rate is below 15%, if 3 or more of Kirito's Skill Records are equipped in the same set, this effect will be invalid.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Advance Trooper 3",
        "buff": "Attack +300.",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Enhance Antidote 5",
        "buff": "Poison damage -70%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Full of Asuna",
        "buff": "When equipping 3 or more of Asuna's Skill Records in the same set, Attack +10%. When equipping 6 or more of Asuna's Skill Records in the same set, Critical rate +20%.",
        "numbers": "atk_percent: 10, crit_rate: 20"
    },
    {
        "name": "Giant's Gauntlet 4",
        "buff": "While the buff of your own additional damage is in effect, attack becomes +25%",
        "numbers": "additionalDmg: NaN, general_dmg: 25"
    },
    {
        "name": "Remember 4",
        "buff": "When equipping 1 or more of Kirito's Skill Records in the same set, Critical rate +30%.",
        "numbers": "crit_rate: 30"
    },
    {
        "name": "Fish Killer 3",
        "buff": "Dealing Wind damage to enemy +10%.",
        "numbers": "windDmg: 10, general_dmg: 10"
    },
    {
        "name": "Pure Voice",
        "buff": "Critical damage +20% when your own HP is above 75%.[Killer Smile] ATK +20% to enemy that has their weakness found.",
        "numbers": "crit_dmg: 20, general_dmg: 20, atk_percent: 20"
    },
    {
        "name": "Purifying Flame 4",
        "buff": "Deals +22% Fire element's damage to enemy.",
        "numbers": "fireDmg: 22"
    },
    {
        "name": "Paladin's Command 4",
        "buff": "Attack +10%.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Break Attack 3",
        "buff": "Attack +25% to enemies when using break.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Brief Rest 4",
        "buff": "When equipping 3 or more of Kirito's Skill Records in the same set, Attack +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Tremendous Breath 4",
        "buff": "When you are healed within the field by an object, attack increases 25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Law of Heaven & Earth 4",
        "buff": "When you are healed within the field by an object, Status Ailment (Paralysis, Stun, Sleep) resistance increases +100%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Brief Repose 4",
        "buff": "When equipping 3 or more of Asuna's Skill Records in the same set, Attack +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Devil Smile 4",
        "buff": "Critical rate of non-normal attacks decreases 20%, critical rate of normal attacks increases 80%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Dark Invitation 4",
        "buff": "Deals +22% Dark element's damage to enemy.",
        "numbers": "darkDmg: 22"
    },
    {
        "name": "Determined Eyes 4",
        "buff": "When equipping 1 or more of Eugeo's Skill Records in the same set, +300 additional damage when attacking./â—[Attack Up 3] Attack +50.",
        "numbers": "additionalDmg: NaN, flat_atk: 50"
    },
    {
        "name": "Will Power 4",
        "buff": "When equipping 1 or more of Alice's Skill Records in the same set, +300 additional damage when attacking./â—[Knight's Vow 3] Own max HP 0.3% recovers as monsters defeated.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Oath of Survival 4",
        "buff": "When equipping 1 or more of Asuna's Skill Records in the same set, Attack +15%. When equipping 1 or more of Silica's Skill Records in the same set, Max HP +10%. When equipping 1 or more of Lisbeth's Skill Records in the same set, Critical damage +15%",
        "numbers": "atk_percent: 15, hp_percent: 10, crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Power of Unity 4",
        "buff": "When equipping 1 or more of Asuna's Skill Records in the same set, Damage done to enemies weak to thrusting +10%.When equipping 2 or more of Yuuki's Skill Records in the same set, Damage done to enemies weak to slashing +10%.",
        "numbers": "thrustDmg: 10, general_dmg: 20, slashDmg: 10"
    },
    {
        "name": "Breeze 3",
        "buff": "When equipping 1 or more of Kirito's Skill Records in the same set, Critical damage +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Ground Dance 4",
        "buff": "Deals +22% Earth element's damage to enemy./â—[Hammer 3] Deal 1000 additional damage against enemies with debuff status (Mark, Small Mark, Death Mark, Thrust Erosion Mark, Slash Destruction Mark).",
        "numbers": "earthDmg: 22, additionalDmg: NaN"
    },
    {
        "name": "Light Dance 4",
        "buff": "Deals +22% Holy element's damage to enemy./â—[Devotion 3] Attack +10% when HP is >75%.",
        "numbers": "holyDmg: 22, atk_percent: 10"
    },
    {
        "name": "Wipe out your fear 3",
        "buff": "While defense+ buff is effective, attack power will increase 15%./â—[MHCP 3] Additional damage +200 when attacking.",
        "numbers": "atk_percent: 15, additionalDmg: NaN"
    },
    {
        "name": "Notice Me Senpai 4",
        "buff": "When equipping 1 or more of Eugeo's Skill Records in the same set, Attack +12%./â—[Will to Carry On 4] While the buff of your own additional damage is in effect, additional damage +1000 when attacking.",
        "numbers": "atk_percent: 12, additionalDmg: NaN"
    },
    {
        "name": "Veteran Sword Technique 3",
        "buff": "Attack power increase with own levelÃ—0.12%. (max 24%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Smile Gift 4",
        "buff": "Restores 3% of your own max HP on critical hit. (Once per skill)* Evolving & Maximum Breakthrough",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Counter 5",
        "buff": "Adds a buff when evading, +30% critical rate for 8 sec.* Evolving & Maximum Breakthrough",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Stand-off 5",
        "buff": "Flinch resistance +60% when HP is over 75%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Tempo Up 5",
        "buff": "Attack increases with number of hits.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Step-in 5",
        "buff": "Increases the critical rate as number of HITS increase.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Black Domination",
        "buff": "Attack +15% when not equipping any Alice Skill Records in the same set.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Dark Conversion 4",
        "buff": "Holy element's damage to enemies -10% and dark element's damage to enemies +25%.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "Battle with Ease 4",
        "buff": "Attack +25% while the buff that gradually recovers HP depending on the Skill Record is in effect./â—[Precise Attack Boost 3] Critical rate +15% while the buff to raise critical rate is in effect.* Evolving & Maximum Breakthrough",
        "numbers": "atk_percent: 25, crit_rate: 15"
    },
    {
        "name": "Reckless Rush 4",
        "buff": "Attack +25% while the buff that raises your own flinch resistance is in effect./â—[Breaking Fist 3] Critical rate +15% while the buff of your own additional damage is in effect.",
        "numbers": "atk_percent: 25, crit_rate: 15, additionalDmg: NaN"
    },
    {
        "name": "Play it by Ear 4",
        "buff": "Attack +10% when HP is above 50%, and defense +10% when HP is under 50%.",
        "numbers": "atk_percent: 10, def_percent: 10"
    },
    {
        "name": "Enhance Slash 2",
        "buff": "Damage done to enemies weak to slashing +10%.",
        "numbers": "slashDmg: 10, general_dmg: 10"
    },
    {
        "name": "Enhance Thrust 2",
        "buff": "Damage done to enemies weak to thrusting +10%.",
        "numbers": "thrustDmg: 10, general_dmg: 10"
    },
    {
        "name": "Enhance Blunt 2",
        "buff": "Damage done to enemies weak to blunt +10%.",
        "numbers": "bluntDmg: 10, general_dmg: 10"
    },
    {
        "name": "Woof Woof!",
        "buff": "Attack +18% against enemies with a buff effect and reduces damage by 10%.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "We're Twins!",
        "buff": "Critical rate +20% against enemies with a buff effect, and critical damage +20%.",
        "numbers": "crit_rate: 20, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Data Processing 4",
        "buff": "Critical damage +20% to enemies with debuff status.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Data Processing 3",
        "buff": "Critical damage +15% against enemies with debuff status.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Slash protect 3",
        "buff": "Reduce damage from 12% slash element monster.",
        "numbers": "slashRes: 12"
    },
    {
        "name": "The Phantom Thieves of Hearts: Panther",
        "buff": "Additional damage +1000 when equipping 2 or more Skill Records of any of the characters Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet in the same set.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "The Phantom Thieves of Hearts: Mona",
        "buff": "Additional damage +500 when equipping 2 or more Skill Records of any of the characters Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet in the same set.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "The Phantom Thieves of Hearts: Queen",
        "buff": "Additional damage +1000 when equipping 2 or more Skill Records of any of the characters Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet in the same set.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Power Rise 3",
        "buff": "Attack +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Sympathetic Heart: Leafa",
        "buff": "Critical damage +15% when equipping 1 or more Skill Records of any of the characters Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet in the same set.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Sympathetic Heart: Yuuki",
        "buff": "Critical rate +15% when equipping 1 or more Skill Records of any of the characters Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet in the same set.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "Sympathetic Heart: Alice",
        "buff": "Attack +15% when equipping 1 or more Skill Records of any of the characters Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet in the same set.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Gale Blade 4",
        "buff": "Deals +20% Wind element's damage to enemy.",
        "numbers": "windDmg: 20"
    },
    {
        "name": "Autosave 4",
        "buff": "Defense +25% when Status Ailments with Paralysis, Stun, Sleep, Curse, Debility, Petrify, Poison, Burn, Bleed, Frostbite.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "Talent Shift 1",
        "buff": "Effect changes depending on the Skill Records in the same set. Recovers 70 HP every 3 sec when equipping 1 or more of Alice's Skill Records in the same set. Attack +20% when equipping no Alice Skill Records in the same set.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Enhance Blunt 3",
        "buff": "Damage done to enemies weak to blunt +15%.",
        "numbers": "bluntDmg: 15, general_dmg: 15"
    },
    {
        "name": "High Battle Healing 3",
        "buff": "Recovers a max of 1.2% HP per 3 sec.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Back Stab 4",
        "buff": "Damage +18% towards the monsters not targetted to the player.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Dark Domination",
        "buff": "Additional damage +1000 when not equipping any Alice Skill Records in the same set.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Frostbite Blow 3",
        "buff": "Attack against enemies with frostbite increases 18%.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Battle for Justice",
        "buff": "Flinch resistance +80% when HP is at 100%. Recovers a max of 1% HP per 3 sec when HP falls below 99%.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "Status Ailments Blow 3",
        "buff": "Attack +18% against enemy with status ailments (Poison, Burn, Bleed, Frostbite)./â—[Left Eye of the Dragon] Additional damage +1000.",
        "numbers": "atk_percent: 18, additionalDmg: NaN"
    },
    {
        "name": "Vital Assention 3",
        "buff": "Defense +400.",
        "numbers": "flat_def: 400"
    },
    {
        "name": "Spirit Color",
        "buff": "Effect changes depending on the Skill Records in the same set.When equipping 1 or more of Asuna's Skill Records: Max HP +10%.When equipping 1 or more of Sinon's Skill Records: Attack +20%.When equipping 1 or more of Leafa's Skill Records: Additional damage +500.When equipping 1 or more of Alice's Skill Records: Critical rate +10%.When equipping 1 or more of Eugeo's Skill Records: Critical damage +10%.",
        "numbers": "hp_percent: 10, atk_percent: 20, additionalDmg: NaN, crit_rate: 10, crit_dmg: 10, general_dmg: 10"
    },
    {
        "name": "Dark Invitation 3",
        "buff": "Deals +15% Dark element's damage to enemy.",
        "numbers": "darkDmg: 15"
    },
    {
        "name": "Auto Learning 4",
        "buff": "Adds additional effects based on the number of Alice's Skill Records equipped in the same set.2 or more: Defense +5%.3 or more: Max HP +10%.4 or more: Critical rate +15%.5 or more: Critical damage +15%.6 or more: Attack +20%.",
        "numbers": "def_percent: 5, hp_percent: 10, crit_rate: 15, crit_dmg: 15, general_dmg: 15, atk_percent: 20"
    },
    {
        "name": "Full of Alice 4",
        "buff": "When equipping 3 or more of Alice's Skill Records in the same set, Defense +10%. When equipping 6 or more of Alice's Skill Records in the same set, Critical damage +20%.",
        "numbers": "def_percent: 10, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Talent Shift 2",
        "buff": "Effect changes depending on the Skill Records in the same set.Additional damage +1000 when equipping 1 or more of Alice's Skill Records in the same set.Attack +20% when equipping no Alice Skill Records in the same set.",
        "numbers": "additionalDmg: NaN, atk_percent: 20"
    },
    {
        "name": "Light Chord 4",
        "buff": "Holy element damage +28% to the enemies that have a buff effect.",
        "numbers": "holyDmg: 28, general_dmg: 28"
    },
    {
        "name": "Dream Collaboration",
        "buff": "Attack rises 150 x the number of Yuna Skill Records in the same set.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Dark Chord 4",
        "buff": "Dark element damage +28% to the enemies that have a buff effect.",
        "numbers": "darkDmg: 28, general_dmg: 28"
    },
    {
        "name": "Advance Trooper 4",
        "buff": "Attack +400.",
        "numbers": "flat_atk: 400"
    },
    {
        "name": "Earth's Indemnity 3",
        "buff": "When you are poisoned, earth element damage +40%./â—[Enhance Antidote 3] Poison damage -30%.",
        "numbers": "earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "Enhance Thrust 3",
        "buff": "Damage done to enemies weak to thrusting +15%.",
        "numbers": "thrustDmg: 15, general_dmg: 15"
    },
    {
        "name": "Ground Dance 2",
        "buff": "Deals +9.3% Earth element's damage to enemy.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Weakness Attack Boost 3",
        "buff": "Critical damage +15% while the buff to raise critical damage is in effect.* Evolving & Maximum Breakthrough",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Talent Shift 3",
        "buff": "Effect changes depending on the Skill Records in the same set.Amount healed by plants +10% when equipping 1 or more of Alice's Skill Records in the same set.Attack +20% when equipping no Alice Skill Records in the same set.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Sisterly Affection 4",
        "buff": "Critical damage rises by 5% x the number of Leafa Skill Records in the same set.Attack rises by 6% x the number of Silica Skill Records in the same set.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "Flame Indemnity 3",
        "buff": "When you are burnt, fire element damage + 40%./â—[Enhance Burn Immunity 3] Burn damage -30%.",
        "numbers": "fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "Enhance Berserk 3",
        "buff": "When the player is Status Ailments (Poison, Burn, Bleed, Frostbite, Curse, Debility), Attack +20%.* Evolving & Maximum Breakthrough",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Advance Trooper 5",
        "buff": "Attack +500.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Five Sharp Weapons 3",
        "buff": "Attack +800 when attacking with thrust element.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Hold the Front 4",
        "buff": "Recovers a max of 5%+200 HP per 3 sec when HP is under 50%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Burning Blow 3",
        "buff": "Attack against burned enemies increases 18%.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Power Rise 4",
        "buff": "Attack +900.",
        "numbers": "flat_atk: 900"
    },
    {
        "name": "Thin Ice 4",
        "buff": "Defense -30% and during the buff effect for increased max HP the HP -99% every 3 sec.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Icy Blade 2",
        "buff": "Deals +9.3% Water element's damage to enemy.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Battle with Ease 3",
        "buff": "Attack +20% while the buff that gradually recovers HP depending on the Skill Record is in effect./â—[Enhance Heal 4] Effect of healing items and field objects +25%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Reliable Bro 4",
        "buff": "When equipping 1 or more of Leafa's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Evasion 3",
        "buff": "Evasion rate +7.2%. *It will not be activated with focus attack.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Mallet Blow 4",
        "buff": "Damage done to enemies weak to blunt +30% against enemies with debuff status (Mark, Small Mark, Death Mark, Thrust Erosion Mark, Slash Destruction Mark).",
        "numbers": "bluntDmg: 30, general_dmg: 30"
    },
    {
        "name": "Raging Bull 3",
        "buff": "Damage +18% on enemies with attack debuff.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Raging Stallion 3",
        "buff": "Damage +18% on enemies with defense debuff.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Surging Sword Spirit 4",
        "buff": "Attack rises by 3.5% x the number of Yuuki Skill Records in the same set.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Energetic 4",
        "buff": "When equipping 2 or more of Agil's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Gale Blade 2",
        "buff": "Deals +9.3% Wind element's damage to enemy.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Acceleration 3",
        "buff": "Critical damage +20% when HP is under 50%.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Bloody Battle Strike 3",
        "buff": "Attack +35% when attacking with blunt element.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Steel Fang 4",
        "buff": "Attack +500 when attacking with thrust element.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Flame Boost 4",
        "buff": "Elemental damage other than fire dealt to enemies -50%, and fire element's damage to enemies +40%.",
        "numbers": "waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "The Legendary Sword's Rule",
        "buff": "Attack +20% when not equipping any Kirito's Skill Records in the same set.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Flame Conversion 3",
        "buff": "Water element's damage to enemies -10% and fire element's damage to enemies +20%.",
        "numbers": "fireDmg: 20, general_dmg: 20"
    },
    {
        "name": "Meeting a Friend",
        "buff": "Recovers 80 HP every 3 sec when equipping 3 or more of Asuna's Skill Records in the same set.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Out of Sorts 4",
        "buff": "Defense -30% and during the buff effect for increased max HP, the attack and damage -99% when using normal attack.* Evolving & Maximum Breakthrough",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "God of Sea 4",
        "buff": "When equipping 3 or more of Sinon's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Ground Dance 5",
        "buff": "Deals +25% Earth element's damage to enemy.",
        "numbers": "earthDmg: 25"
    },
    {
        "name": "Talent Shift 4",
        "buff": "Effect changes depending on the Skill Records in the same set.When equipping 1 or more of Kirito's Skill Records in the same set, +success rate for Burn.Damage done to enemies weak to slashing +30% when equipping no Kirito Skill Records in the same set.",
        "numbers": "slashDmg: 30, general_dmg: 30"
    },
    {
        "name": "All In Black 4",
        "buff": "Adds additional effects based on the number of Kirito's Skill Records equipped in the same set.2 or more: Recovers a max of 1.2% HP per 3 sec.3 or more: Max HP +5%.4 or more: Critical rate +10%.5 or more: Critical damage +10%.6 or more: Attack +15%.",
        "numbers": "hp_percent: 5, crit_rate: 10, crit_dmg: 10, general_dmg: 10, atk_percent: 15"
    },
    {
        "name": "Bloody Blow 3",
        "buff": "Attack +18% against bleeding enemies.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "More Deban 1",
        "buff": "When equipping 1 or more of Lisbeth's Skill Records in the same set, Attack +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Autosave 2",
        "buff": "Defense +15% when Status Ailments with Paralysis, Stun, Sleep, Curse, Debility, Petrify, Poison, Burn, Bleed, Frostbite.",
        "numbers": "def_percent: 15"
    },
    {
        "name": "Light's Indemnity 3",
        "buff": "When you are debilitated, holy element damage +40%.",
        "numbers": "holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "Iron-Fisted Punishment 4",
        "buff": "Attack +500 when attacking with blunt element.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "King of Maces 3",
        "buff": "Attack +1000 when 1H Club is equipped",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Rebel Against the System 4",
        "buff": "When equipping 1 or more of Asuna's Skill Records in the same set, Attack +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Crude Tactics 2",
        "buff": "Defense -30% and, when HP is under 50%, non-elemental damage -400%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Wind Boost 4",
        "buff": "Elemental damage other than wind dealt to enemies -50%, and wind element's damage to enemies +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, windDmg: 40, general_dmg: 40"
    },
    {
        "name": "Black Panther 4",
        "buff": "When equipping 1 or more of Sachi's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Dark Boost 4",
        "buff": "Elemental damage other than dark dealt to enemies -50%, and dark element's damage to enemies +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, noneDmg: -50, darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "Switching to Melee 4",
        "buff": "Attack +20% when not equipping any Sinon's Skill Records in the same set.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "More Deban 2",
        "buff": "When equipping 1 or more of Silica's Skill Records in the same set, Attack +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Shadow Indemnity 3",
        "buff": "When you are cursed, dark element damage +40%.",
        "numbers": "darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "Curse Counter 4",
        "buff": "When the player is Status Ailments (Curse), Attack +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Onslaught 4",
        "buff": "Attack +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Ice Indemnity 3",
        "buff": "When you are frostbitten, water element damage +40%./â—[Enhance Frostbite 3] Frostbite damage -30%.",
        "numbers": "waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "Crushing Impact 3",
        "buff": "Attack +800 when attacking with blunt element.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Aqua Boost 4",
        "buff": "Elemental damage other than water dealt to enemies -50%, and water element's damage to enemies +40%.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "Autosave 3",
        "buff": "Defense +20% when Status Ailments with Paralysis, Stun, Sleep, Curse, Debility, Petrify, Poison, Burn, Bleed, Frostbite.",
        "numbers": "def_percent: 20"
    },
    {
        "name": "Prosper 4",
        "buff": "Attack +20% when HP is above 50%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Frostbite Blow 5",
        "buff": "Attack against enemies with frostbite increases 30%.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "Incarnation: Force 4",
        "buff": "When equipping 3 or more of Alice's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Vital Assention 4",
        "buff": "Defense +450.",
        "numbers": "flat_def: 450"
    },
    {
        "name": "Enhance Attack 5",
        "buff": "Attack +18%.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Fast and Easy",
        "buff": "Lowers flinch resistance by 100%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Exciting 4",
        "buff": "Defense -30% and critical damage -300% during the buff effect for increased max HP.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Purifying Flame 3",
        "buff": "Deals +15% Fire element's damage to enemy.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "Opposing Heart 3",
        "buff": "Attack +18% to the enemies that have a buff effect",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Resonance of Flame 4",
        "buff": "Fire element damage +30% to the enemies that have a buff effect.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "King of Spears 3",
        "buff": "Attack +1000 when using 2H Spear.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Shine Boost 4",
        "buff": "Elemental damage other than holy dealt to enemies -50%, and holy element's damage to enemies +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, darkDmg: -50, noneDmg: -50, holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "Training Results 4",
        "buff": "Critical damage increases by your own level Ã— 0.14% (max 28%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Six Paths 4",
        "buff": "Effect changes depending on the Skill Records in the same set.When equipping 2 of Kirito's Skill Records: Deals +40% Earth element's damage to enemy.When equipping 3 of Kirito's Skill Records: Deals +40% Wind element's damage to enemy.When equipping 4 of Kirito's Skill Records: Deals +40% Fire element's damage to enemy.When equipping 5 of Kirito's Skill Records: Deals +40% Water element's damage to enemy.When equipping 6 of Kirito's Skill Records: Deals +50% Holy element's damage to enemy.When equipping 7 of Kirito's Skill Records: Deals +50% Dark element's damage to enemy.",
        "numbers": "earthDmg: 40, windDmg: 40, fireDmg: 40, waterDmg: 40, holyDmg: 50, darkDmg: 50"
    },
    {
        "name": "Foreign Friend 1",
        "buff": "Attack rises 200 x the number of Rain Skill Records in the same set.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Heat Suction 3",
        "buff": "When the player is Status Ailments (Burn), Attack +40%./â—[Enhance Burn Immunity 3] Burn damage -30%.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Rat's Information 4",
        "buff": "When equipping 1 or more of Argo's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Frontal Attack 4",
        "buff": "Aggro increase -40% when attack hits",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Flexibility 4",
        "buff": "Petrify resistance +80% when HP is at 100%. Recovers a max of 1% HP per 3 sec when HP falls below 99%.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "King of Axes 3",
        "buff": "Attack +1000 when using 2H Axe.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Thrust protect 3",
        "buff": "Reduce damage from 12% thrust element monster.",
        "numbers": "thrustRes: 12"
    },
    {
        "name": "Auto Learning 5",
        "buff": "Adds additional effects based on the number of Alice's Skill Records equipped in the same set.2 or more: Critical rate +20%.3 or more: Defense +5%.4 or more: Max HP +10%.5 or more: Critical damage +20%.6 or more: Attack +35%.",
        "numbers": "crit_rate: 20, def_percent: 5, hp_percent: 10, crit_dmg: 20, general_dmg: 20, atk_percent: 35"
    },
    {
        "name": "Super Lucky!",
        "buff": "A 1% chance that the next attack the enemy receives will induce 2.5x damage.(Applies to other party member's attacks. Effect will disappear after 10 sec if not activated.)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Lucky!",
        "buff": "A 25% chance of critical rate +50% for 10 sec.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "Uncertain Luck!",
        "buff": "A 75% chance of attack +7% for 30 sec.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Uh oh!",
        "buff": "A 5% chance of inflicting Curse on yourself for 20 sec.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Earth Boost 4",
        "buff": "Elemental damage other than earth dealt to enemies -50%, and earth element's damage to enemies +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "Talent Shift 5",
        "buff": "Effect changes depending on the Skill Records in the same set.When equipping 1 or more of Kirito's Skill Records in the same set, +success rate for Frostbite.Attack +20% when equipping no Kirito Skill Records in the same set.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Stagehand 4",
        "buff": "When equipping 2 or more of Koharu's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Shadow Indemnity 1",
        "buff": "When you are cursed, dark element damage +25%.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "King of Daggers 3",
        "buff": "Attack +1000 when using daggers.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Ice Flower 4",
        "buff": "When equipping 2 or more of Eugeo's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Bloody Battle Slash 3",
        "buff": "Attack +35% when attacking with slash element.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Earth Accumulation 3",
        "buff": "Earth element's damage rises by the number of Klein Skill Records in the same set x 10%.",
        "numbers": "earthDmg: 10"
    },
    {
        "name": "Aqua Conversion 5",
        "buff": "Fire element's damage to enemies -15% and water element's damage to enemies +30%.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "Tactical Advisor 4",
        "buff": "When equipping 2 or more of Yui's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Marksmanship 3",
        "buff": "When equipping 2 or more of Sinon's Skill Records in the same set, Attack +20%.* Evolving & Maximum Breakthrough",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Halo 3",
        "buff": "Defense -30% and during the buff effect for increased max HP the hit rate -30%",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Aggravated Slash 3",
        "buff": "Damage to slash element weakness rises by the number of Eydis Skill Records in the same set x 20%.",
        "numbers": "slashDmg: 20"
    },
    {
        "name": "Full Bloom 3",
        "buff": "When equipping 4 or more of Eydis's Skill Records in the same set, Attack +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Charging Loss 1",
        "buff": "When defense -30% and HP is under 50%, damage -1000% to enemies weak to thrusting.* Evolving & Maximum Breakthrough",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Earth Suction 3",
        "buff": "When the player is Status Ailments (Poison), Attack +35%./â—[Enhance Antidote 3] Poison damage -30%.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "King of Rapiers 3",
        "buff": "Attack +1000 when using 1H Rapier.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Wind Conversion 5",
        "buff": "Earth element's damage to enemies -15% and wind element's damage to enemies +30%.",
        "numbers": "windDmg: 30, general_dmg: 30"
    },
    {
        "name": "Black Swordsman 3",
        "buff": "When equipping 2 or more of Kirito's Skill Records in the same set, Attack +20%.* Evolving & Maximum Breakthrough",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Super Enhance Heal",
        "buff": "Effect of healing items and field objects +100%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Peak 3",
        "buff": "Attack +40% when HP is above 80%.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Foreign Friend 2",
        "buff": "Attack rises 250 x the number of Rain Skill Records in the same set.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Sharpened Blade 4",
        "buff": "Attack rises by 6% x the number of Asuna Skill Records in the same set.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "Earth's Indemnity 2",
        "buff": "When you are poisoned, earth element damage +35%.",
        "numbers": "earthDmg: 35, general_dmg: 35"
    },
    {
        "name": "Burn Counter 3",
        "buff": "When the player is Status Ailments (Burn), Attack +1000./â—[Enhance Burn Immunity 2] Burn damage -10%.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Spiceholic 3",
        "buff": "When equipping 2 or more of Kirito's Skill Records in the same set, Attack +20%.* Evolving & Maximum Breakthrough",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Accelerated Healing 4",
        "buff": "Recovers a max of 4% HP per 3 sec.",
        "numbers": "hp_regen: 4"
    },
    {
        "name": "Earth Conversion 5",
        "buff": "Wind element's damage to enemies -15% and earth element's damage to enemies +30%.",
        "numbers": "earthDmg: 30, general_dmg: 30"
    },
    {
        "name": "Sword Demon 4",
        "buff": "When equipping 1 or more of Asuna's Skill Records in the same set, Attack +20%* Evolving & Maximum Breakthrough",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Play it by Ear 5",
        "buff": "Attack +25% when HP is above 50%, and defense +15% when HP is under 50%.",
        "numbers": "atk_percent: 25, def_percent: 15"
    },
    {
        "name": "Bloody Battle Slash 4",
        "buff": "Attack +40% when attacking with slash element.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Haul 3",
        "buff": "When equipping 4 or more of Kirito's Skill Records in the same set, Attack +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Frost Suction 4",
        "buff": "When the player is Status Ailments (Frostbite), Attack +50%./â—[Enhance Frostbite 3] Frostbite damage -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Composure 3",
        "buff": "Hit rate +30% when you are frostbitten.",
        "numbers": "hit_rate: 30"
    },
    {
        "name": "Resonance of Ice 4",
        "buff": "Water element damage +30% to the enemies that have a buff effect.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "Dark Conversion 5",
        "buff": "Holy element's damage to enemies -15% and dark element's damage to enemies +30%.",
        "numbers": "darkDmg: 30, general_dmg: 30"
    },
    {
        "name": "Shadow Indemnity 2",
        "buff": "When you are cursed, dark element damage +35%.",
        "numbers": "darkDmg: 35, general_dmg: 35"
    },
    {
        "name": "Bleed Counter 3",
        "buff": "When the player is Status Ailments (Bleed), Attack +1000./â—[Enhance Clotting 2] Bleed damage -10%.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Bleed Counter 4",
        "buff": "When the player is Status Ailments (Bleed), Attack +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Wind Indemnity 3",
        "buff": "When the player is Status Ailments (Bleed), Wind element damage +40%.",
        "numbers": "windDmg: 40, general_dmg: 40"
    },
    {
        "name": "Break the Dam 3",
        "buff": "Break gauge amount +30% at enemies.",
        "numbers": "break_pct: 30"
    },
    {
        "name": "Dark Accumulation 3",
        "buff": "Dark element's damage rises by the number of Sanya Skill Records in the same set x 10%.",
        "numbers": "darkDmg: 10"
    },
    {
        "name": "Bloody Battle Strike 4",
        "buff": "Attack +40% when attacking with blunt element.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Flame Accumulation 3",
        "buff": "Fire element's damage rises by the number of Asuna Skill Records in the same set x 10%.",
        "numbers": "fireDmg: 10"
    },
    {
        "name": "Burning Blow 5",
        "buff": "Attack against burned enemies increases 30%.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "Flame Conversion 5",
        "buff": "Water element's damage to enemies -15% and fire element's damage to enemies +30%.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "Martial Artist 3",
        "buff": "When equipping 2 or more of Leafa's Skill Records in the same set, Attack +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Onslaught 1",
        "buff": "Attack +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Bloody Battle Thrust 3",
        "buff": "Attack +35% when attacking with thrust element.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Hellfire 4",
        "buff": "Attack rises 7% x the number of Kirito Skill Records in the same set.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Prosper 5",
        "buff": "Attack +25% when HP is above 50%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Pierce 4",
        "buff": "Damage done to enemies weak to thrusting +25%.",
        "numbers": "thrustDmg: 25, general_dmg: 25"
    },
    {
        "name": "Composure 1",
        "buff": "Hit rate +10% when you are frostbitten./â—[Enhance Frostbite 2] Frosbite damage -10%.",
        "numbers": "hit_rate: 10"
    },
    {
        "name": "Frost Accumulation 4",
        "buff": "Water element's damage rises by the number of Eydis Skill Records in the same set x 12.5%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Advanced Rapier Technique 3",
        "buff": "Non-elemental damage +25% when using 1H Rapier.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Air Suction 4",
        "buff": "When the player is Status Ailments (Bleed), Attack +50%./â—[Enhance Clotting 3] Bleed damage -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Roar of the Gale 4",
        "buff": "Deals +15% Wind element's damage to enemy.",
        "numbers": "windDmg: 15"
    },
    {
        "name": "Poison Counter 4",
        "buff": "When the player is Status Ailments (Poison), Attack +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Bisect 4",
        "buff": "Damage done to enemies weak to slashing +25%.",
        "numbers": "slashDmg: 25, general_dmg: 25"
    },
    {
        "name": "Frostbite Counter 4",
        "buff": "When the player is Status Ailments (Frostbite), Attack +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Heat Accumulation 4",
        "buff": "Fire element's damage rises by the number of Asuna Skill Records in the same set x 12.5%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Golden Opprtunity 4",
        "buff": "Critical damage +50%.",
        "numbers": "crit_dmg: 50, general_dmg: 50"
    },
    {
        "name": "Piercing Surge 3",
        "buff": "Damage to thrust element weakness rises by the number of LLENN Skill Records in the same set x 20%.",
        "numbers": "thrustDmg: 20"
    },
    {
        "name": "Cybermind 2",
        "buff": "Attack rises 7% x the number of Yui Skill Records in the same set.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Holy Sword Offensive",
        "buff": "Attack rises 10% x the number of Heathcliff Skill Records in the same set.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Blockade1",
        "buff": "All elemental damage decreases by 100% x the number of Asuna Skill Records in the same set (Non-elemental included).",
        "numbers": "fireDmg: -100, waterDmg: -100, windDmg: -100, earthDmg: -100, holyDmg: -100, darkDmg: -100, noneDmg: -100"
    },
    {
        "name": "Remarkable Reaction",
        "buff": "Evasion rate +16%. *It will not be activated with focus attack.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Bloody Battle Thrust 4",
        "buff": "Attack +40% when attacking with thrust element.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Valiant 3",
        "buff": "When equipping 3 or more of Yui's Skill Records in the same set, Attack +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Blind Faith",
        "buff": "Attack rises 7% x the number of Yuna Skill Records in the same set.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Striking Surge 2",
        "buff": "Damage to blunt element weakness rises by the number of Agil Skill Records in the same set x 8%.",
        "numbers": "bluntDmg: 8"
    },
    {
        "name": "Merchant Elite 4",
        "buff": "When equipping 5 or more of Agil's Skill Records in the same set, Attack +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Earth Suction 4",
        "buff": "When the player is Status Ailments (Poison), Attack +50%./â—[Enhance Antidote 3] Poison damage -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Ground Pulse 4",
        "buff": "Deals +15% Earth element's damage to enemy.",
        "numbers": "earthDmg: 15"
    },
    {
        "name": "Shine Conversion 5",
        "buff": "Dark element's damage to enemies -15% and holy element's damage to enemies +30%.",
        "numbers": "holyDmg: 30, general_dmg: 30"
    },
    {
        "name": "More Deban 4",
        "buff": "When equipping 1 or more of Silica's Skill Records in the same set, Attack +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Ace of Daggers 4",
        "buff": "Attack +40% when using daggers.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Loyal Friend 2",
        "buff": "Attack rises 7% x the number of Sanya Skill Records in the same set.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Enhance Stun Res. 3",
        "buff": "â— Stun resistance +30%.",
        "numbers": "stunRes: 30"
    },
    {
        "name": "Enhance Debility Res. 3",
        "buff": "â— Debility resistance +30%",
        "numbers": "debilityRes: 30"
    },
    {
        "name": "Ice Indemnity 2",
        "buff": "When you are frostbitten, water element damage +35%. ",
        "numbers": "waterDmg: 35, general_dmg: 35"
    },
    {
        "name": "Frontal Attack 5",
        "buff": "Aggro increase -50% when attack hits.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Deep Affection 4",
        "buff": "Defense rises by 4% x the number of Asuna Skill Records in the same set.Attack rises by 7% x the number of Leafa Skill Records in the same set.",
        "numbers": "def_percent: 4, atk_percent: 7"
    },
    {
        "name": "Shine Accumulation 3",
        "buff": "Holy element's damage rises by the number of Sinon Skill Records in the same set x 10%.",
        "numbers": "holyDmg: 10"
    },
    {
        "name": "Contradiction 3",
        "buff": "Attack +20% when equipping no Heathcliff Skill Records in the same set.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Sacred Blade Protection",
        "buff": "Defense rises 5% x the number of Heathcliff Skill Records in the same set.",
        "numbers": "def_percent: 5"
    },
    {
        "name": "Reduced Battle Wounds 5",
        "buff": "Reduces damage from slash, thrust, and blunt element monsters and status ailment damage by 5%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Aqua Boost 5",
        "buff": "Elemental damage other than water dealt to enemies -50%(Non-elemental included), and water element's damage to enemies +45%.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 45, general_dmg: 45"
    },
    {
        "name": "Enhance Burn Hit 5",
        "buff": "â— +success rate for Burn.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Fire Element Enhance4/Buff",
        "buff": "Fire element damage +9.00% for 15 sec.",
        "numbers": "fireDmg: 9"
    },
    {
        "name": "Small Mark/Debuff",
        "buff": "The next attack the enemy receives will induce 1.5x damage.",
        "numbers": "general_dmg: 50"
    },
    {
        "name": "Flame Force 4/Buff",
        "buff": "Fire element damage +15.00% for 15 sec.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "Dark Element Enhance4/Buff",
        "buff": "Dark element damage +9.00% for 15 sec.",
        "numbers": "darkDmg: 9"
    }
];
