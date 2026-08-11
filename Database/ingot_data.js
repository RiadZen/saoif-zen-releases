/**
 * INGOT DATABASE & LOGIC
 * Supports specialized leveling system (1-499) and rarity tiers.
 */

window.ingotData = {
    // --- DEMON GOD SLASH INGOT ---
    "Demon_God_Slash": {
        name: "Demon God Slash Ingot",
        type: "Rainbow",
        rarity: 4, // ★★★★
        max_level: 99,
        image: "https://raw.githubusercontent.com/Nayuta-Kani/SAOIF-Skill-Records-Database/master/items/ui_icon_item_ingot_01_rainbow07.png",
        effects: [
            {
                // Slash elemental weakness damage +7.7% -> +27.5%
                template: "Slash elemental weakness damage +{val}%",
                stat: "slashDmg",
                min: 7.7,
                max: 27.5
            },
            {
                // Damage FIXED at -50.0% for elements other than slash
                template: "Damage {val}% for elements other than slash",
                stat: "element_other_than_slash",
                min: -50.0,
                max: -50.0,
                condition: "always"
            },
            { template: "Cannot stack", type: "static" }
        ]
    },
    "Rare_Ingot_Crit": {
        name: "Rare Ingot",
        type: "Rare",
        rarity: 3, // ★★★
        max_level: 499,
        image: "https://raw.githubusercontent.com/Nayuta-Kani/SAOIF-Skill-Records-Database/master/items/ui_icon_item_ingot_01_rare01.png",
        effects: [
            {
                template: "Critical damage +{val}% when using skills under Poison status ailment",
                stat: "criticalDmg",
                min: 5.01,
                max: 10.0,
                condition: "poison_active"
            },
            {
                // Damage FIXED at -35.0% when not under status ailment Poison
                template: "Damage {val}% when not under status ailment Poison",
                stat: "damage_dealt", // Generic Damage Dealt
                min: -35.0,
                max: -35.0,
                condition: "not_poison_active"
            },
            { template: "Cannot stack", type: "static" }
        ]
    }
};

// --- HELPER LOGIC ---

/**
 * Calculates value based on Ingot Level using Linear Interpolation.
 * Formula: Min + (Max - Min) * ((Lvl - 1) / (MaxLvl - 1))
 */
window.calculateIngotEffect = function (ingotId, currentLvl) {
    const data = window.ingotData[ingotId];
    if (!data) return [];

    let level = parseInt(currentLvl) || 1;
    // Cap Level
    level = Math.min(level, data.max_level);
    level = Math.max(level, 1);

    const results = [];

    data.effects.forEach(eff => {
        if (eff.type === 'static') {
            results.push({ text: eff.template, value: null, stat: null });
            return;
        }

        const min = eff.min || 0;
        const max = eff.max || 0;

        let val;
        if (data.max_level === 1) {
            val = max; // Fixed value if max level is 1
        } else {
            const ratio = (level - 1) / (data.max_level - 1);
            val = min + (max - min) * ratio;
        }

        // Round to 2 decimals usually
        val = parseFloat(val.toFixed(2));

        // Replace {val} in template
        // Add "+" sign if positive, unless it's subtraction logic like "Damage -50%"
        const displayVal = val > 0 ? `+${val}` : val;
        const text = eff.template.replace('{val}', displayVal);

        results.push({
            text: text,
            value: val,
            stat: eff.stat,
            condition: eff.condition
        });
    });

    return results;
};

// --- MAX LEVEL REFERENCE ---
window.getIngotMaxLevel = function (rarityOrType) {
    // 1★ Common: 99
    // 2★ Superior: 299
    // 3★ Rare: 499
    // 4★ Rainbow: 99

    // Normalize input
    const key = String(rarityOrType).toLowerCase();

    if (key.includes('rainbow') || key === '4') return 99;
    if (key.includes('rare') || key === '3') return 499; // 3★
    if (key.includes('superior') || key === '2') return 299;
    if (key.includes('common') || key === 'bronze') return 99; // 1★

    return 99; // Fallback
};
