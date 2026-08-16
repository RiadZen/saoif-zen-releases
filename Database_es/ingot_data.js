/**
 * ES INGOT DATABASE & LOGIC
 */
window.ingotData = {
    "Demon_God_Slash": {
        "name": "Lingote de corte del dios demonio",
        "type": "Rainbow",
        "rarity": 4,
        "max_level": 99,
        "image": "https://raw.githubusercontent.com/Nayuta-Kani/SAOIF-Skill-Records-Database/master/items/ui_icon_item_ingot_01_rainbow07.png",
        "effects": [
            {
                "template": "Slash elemental weakness damage +{val}%",
                "stat": "slashDmg",
                "min": 7.7,
                "max": 27.5
            },
            {
                "template": "Damage {val}% for elements other than slash",
                "stat": "element_other_than_slash",
                "min": -50,
                "max": -50,
                "condition": "always"
            },
            {
                "template": "Cannot stack",
                "type": "static"
            }
        ]
    },
    "Rare_Ingot_Crit": {
        "name": "Lingote raro",
        "type": "Rare",
        "rarity": 3,
        "max_level": 499,
        "image": "https://raw.githubusercontent.com/Nayuta-Kani/SAOIF-Skill-Records-Database/master/items/ui_icon_item_ingot_01_rare01.png",
        "effects": [
            {
                "template": "Critical damage +{val}% when using skills under Poison status ailment",
                "stat": "criticalDmg",
                "min": 5.01,
                "max": 10,
                "condition": "poison_active"
            },
            {
                "template": "Damage {val}% when not under status ailment Poison",
                "stat": "damage_dealt",
                "min": -35,
                "max": -35,
                "condition": "not_poison_active"
            },
            {
                "template": "Cannot stack",
                "type": "static"
            }
        ]
    }
};
