// Buff / Debuffs Database (Traditional Chinese)
const buffDebuffData = [
    {
        "name": "強化攻擊4",
        "buff": "攻擊力+4%",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "強化防禦4",
        "buff": "防禦+4%。",
        "numbers": "def_percent: 4"
    },
    {
        "name": "弱點攻擊1",
        "buff": "暴擊傷害+6%。",
        "numbers": "crit_dmg: 6, general_dmg: 6"
    },
    {
        "name": "強化斬1",
        "buff": "對揮砍能力較弱的敵人造成的傷害+6%。",
        "numbers": "slashDmg: 6, general_dmg: 6"
    },
    {
        "name": "強化推力1",
        "buff": "對刺擊能力較弱的敵人造成的傷害+6%。",
        "numbers": "thrustDmg: 6, general_dmg: 6"
    },
    {
        "name": "增強鈍器1",
        "buff": "對弱到遲鈍的敵人造成的傷害 +6%。",
        "numbers": "bluntDmg: 6, general_dmg: 6"
    },
    {
        "name": "弱點攻擊2",
        "buff": "暴擊傷害+12%。",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "堅韌4",
        "buff": "當生命值<25%時，防禦+50%。",
        "numbers": "def_percent: 50"
    },
    {
        "name": "奉獻4",
        "buff": "當生命值>75%時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "強化推力4",
        "buff": "對刺擊能力較弱的敵人造成的傷害+24%。",
        "numbers": "thrustDmg: 24, general_dmg: 24"
    },
    {
        "name": "強化攻擊3",
        "buff": "攻擊力+4%。",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "強化防禦2",
        "buff": "防禦+8%。",
        "numbers": "def_percent: 8"
    },
    {
        "name": "強化攻擊2",
        "buff": "攻擊力+8%。",
        "numbers": "atk_percent: 8"
    },
    {
        "name": "提升生命值2",
        "buff": "最大生命值+8%。",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "憤怒的公牛2",
        "buff": "對具有攻擊減益的敵人造成的傷害+12%。",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "憤怒的種馬2",
        "buff": "對具有防禦減益的敵人造成傷害 +12%。",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "增強鈍器 4",
        "buff": "對弱到遲鈍的敵人造成的傷害 +24%。",
        "numbers": "bluntDmg: 24, general_dmg: 24"
    },
    {
        "name": "燃燒之擊4",
        "buff": "對被燒傷的敵人的攻擊力增加 24%。",
        "numbers": "general_dmg: 24"
    },
    {
        "name": "強化斬4",
        "buff": "對揮砍能力較弱的敵人造成的傷害+24%。",
        "numbers": "slashDmg: 24, general_dmg: 24"
    },
    {
        "name": "蓬鬆步驟4",
        "buff": "每次攻擊時防禦+。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "毒擊4",
        "buff": "對中毒敵人的攻擊力+24%。",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "堅持4",
        "buff": "自身生命值低於50%時攻擊+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "憤怒的公牛4",
        "buff": "對具有攻擊減益的敵人造成的傷害+25%。",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "憤怒的種馬4",
        "buff": "對具有防禦減益的敵人造成傷害 +25%。",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "斜線保護4",
        "buff": "減少15%斬屬性怪物的傷害。",
        "numbers": "slashRes: 15"
    },
    {
        "name": "強化防禦3",
        "buff": "防禦+4%。",
        "numbers": "def_percent: 4"
    },
    {
        "name": "強流血瞄準4",
        "buff": "流血的幾率大大增加。 [精準出血4] 出血爆擊率+24%。",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "血腥打擊4",
        "buff": "對流血敵人的攻擊力+24%。",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "弱點攻擊4",
        "buff": "暴擊傷害+12%。",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "步入4",
        "buff": "隨著 HITS 數量的增加，臨界率也會增加。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "推力保護4",
        "buff": "減少15%推力元素怪物的傷害。",
        "numbers": "thrustRes: 15"
    },
    {
        "name": "復甦4",
        "buff": "當HP低於50%時，暴擊率增加30%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "鈍保護4",
        "buff": "鈍屬性魔物造成的傷害減少15%。 【防禦增強3】防禦+4%。",
        "numbers": "def_percent: 4"
    },
    {
        "name": "鋼鐵般的意志4",
        "buff": "當 HP 為 25% 或更低時，傷害減少至 20%。 【防禦增強3】防禦+4%。",
        "numbers": "def_percent: 4"
    },
    {
        "name": "精準攻擊3",
        "buff": "暴擊率+10%。",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "充滿了 Yuuki 4",
        "buff": "優紀的技能記錄同組裝備3個以上時，防禦力+8%。結城的技能記錄同組裝備5個以上時，攻擊力+8%。",
        "numbers": "def_percent: 8, atk_percent: 8"
    },
    {
        "name": "精準攻擊4",
        "buff": "暴擊率+10%。",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "生命值提升4",
        "buff": "最大生命值增加8%。",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "巨人靈藥",
        "buff": "場地上的恢復物品和物體使恢復率降低 50%，最大生命值增加 30%。",
        "numbers": "hp_percent: 30"
    },
    {
        "name": "鮮花禮物4",
        "buff": "當你在範圍內被物體治癒時，攻擊力和防禦力增加10%。",
        "numbers": "def_percent: 10"
    },
    {
        "name": "花香4",
        "buff": "當你用場中的物體進行治療時，暴擊活化會增加 35%。",
        "numbers": "crit_rate: 35"
    },
    {
        "name": "消除你的恐懼4",
        "buff": "防禦+buff生效時，攻擊力增加25%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "人群控制4",
        "buff": "對處於異常狀態的敵人（中毒、燒傷、流血、凍傷）的攻擊力+8%，來自處於異常狀態的敵人（中毒、燒傷、流血、凍傷）的傷害-8%。",
        "numbers": "atk_percent: 8, allRes: 8"
    },
    {
        "name": "攻擊機會4",
        "buff": "當敵人攻擊力下降時，對敵人的暴擊傷害+20%。",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "防守機會4",
        "buff": "敵人防禦力下降時，暴擊發動率+20%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "戰鬥精神4",
        "buff": "當buff攻擊+有效時，防禦+25%。",
        "numbers": "def_percent: 25"
    },
    {
        "name": "迴避4",
        "buff": "迴避率+10%。 *集中攻擊時不會發動。 /â—[指示物4] 迴避時附加增益，爆擊率+10%，持續5秒。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "破壞攻擊4",
        "buff": "使用破壞時對敵人的攻擊力+35%。",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "包圍突破3",
        "buff": "敵人的破壞量增加+25%",
        "numbers": "break_pct: 25"
    },
    {
        "name": "抵抗4",
        "buff": "狀態疾病（中毒、燒傷、流血、凍傷）Res。 +10%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "堅韌3",
        "buff": "當生命值<25%時，防禦+10%。",
        "numbers": "def_percent: 10"
    },
    {
        "name": "強化狂暴4",
        "buff": "當玩家處於異常狀態（中毒、燒傷、流血、凍傷、詛咒、虛弱）時，攻擊力+25%。 /∏[增強凝血4]出血傷害-50%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "燃燒精準攻擊4",
        "buff": "對有燒傷的對手爆擊率+24%。",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "快轉4",
        "buff": "迴避時攻擊力+10%，持續5秒。",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "生命值提升3",
        "buff": "最大生命值增加 10%。",
        "numbers": "hp_percent: 10"
    },
    {
        "name": "加速4",
        "buff": "HP低於50%時爆擊傷害+30%。",
        "numbers": "crit_dmg: 30, general_dmg: 30"
    },
    {
        "name": "狀態疾病打擊 4",
        "buff": "對患有狀態疾病（中毒、燒傷、流血、凍傷）的敵人的攻擊力 +18%。 * 進化與最大突破",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "狙擊4",
        "buff": "對非玩家怪物造成的傷害+18%。",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "高戰鬥治療4",
        "buff": "每3秒最多恢復1.5%生命值。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "強化斜線3",
        "buff": "對揮砍能力較弱的敵人造成的傷害+15%。",
        "numbers": "slashDmg: 15, general_dmg: 15"
    },
    {
        "name": "冰刃3",
        "buff": "對敵人造成+5%水屬性傷害。",
        "numbers": "waterDmg: 5"
    },
    {
        "name": "戰地奇蹟4",
        "buff": "暴擊傷害+25%，同時增加爆擊率buff有效。",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "火焰轉換4",
        "buff": "水元素對敵人的傷害-10%，火元素對敵人的傷害+25%。",
        "numbers": "fireDmg: 25, general_dmg: 25"
    },
    {
        "name": "地球轉換4",
        "buff": "風屬性對敵人的傷害-10%，土屬性對敵人的傷害+25%。",
        "numbers": "earthDmg: 25, general_dmg: 25"
    },
    {
        "name": "老將劍法4",
        "buff": "攻擊力隨自身等級增加×0.17%。 （最大34%）/➡【黑色真理4】攻擊處於異常狀態（中毒、燒傷、流血、凍傷）的敵人時，額外傷害200。",
        "numbers": "additionalDmg: 200"
    },
    {
        "name": "水色轉換 4",
        "buff": "火元素對敵人的傷害-10%，水元素對敵人的傷害+25%。",
        "numbers": "waterDmg: 25, general_dmg: 25"
    },
    {
        "name": "風轉換4",
        "buff": "土元素對敵人造成的傷害-10%，風元素對敵人造成的傷害+25%。",
        "numbers": "windDmg: 25, general_dmg: 25"
    },
    {
        "name": "黑閃4",
        "buff": "桐人的技能記錄同組裝備2個以上時，暴擊率+20%。",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "黑色聯戰4",
        "buff": "桐人的技能記錄同組裝備3個以上時，暴擊傷害+15%。",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "黑色傳奇劍4",
        "buff": "桐人的技能記錄同組裝備2個以上時，攻擊力+15%。",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "黑色戰鬥4",
        "buff": "桐人的技能記錄同組裝備3個以上時，迴避率+5%。 *不會因集中攻擊而發動。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "黑妖精4",
        "buff": "桐人的技能記錄同組裝備2個以上時，最大生命值+22%。",
        "numbers": "hp_percent: 22"
    },
    {
        "name": "黑情4",
        "buff": "桐人的技能記錄同組裝備3個以上時，暴擊率+15%。",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "紅和弦4",
        "buff": "自身BUFF生效期間攻擊力+10%。",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "藍色和弦4",
        "buff": "對攻擊力下降的敵人造成傷害+10%。",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "綠和弦4",
        "buff": "對防禦力下降的敵人造成傷害+10%。",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "閃耀轉換4",
        "buff": "暗屬性對敵人造成的傷害-10%，聖屬性對敵人造成的傷害+25%。",
        "numbers": "holyDmg: 25, general_dmg: 25"
    },
    {
        "name": "有案例！",
        "buff": "暴擊傷害+15%。",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "只有一個事實！",
        "buff": "發現弱點的敵人攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "烈風之刃3",
        "buff": "對敵人造成+4.5%風屬性傷害。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "全力以赴4",
        "buff": "HP高於75%時爆擊率+20%。",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "狙擊手之眼4",
        "buff": "爆擊傷害增加增益對自己生效時，爆擊率+35%。",
        "numbers": "crit_rate: 35, general_dmg: 35"
    },
    {
        "name": "新增元素",
        "buff": "普通攻擊附加聖屬性。 （附加屬性的效果不重疊，依照暗、聖、土、風、水、火的順序優先）",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "閃光之刃4",
        "buff": "普通攻擊暴擊率+35%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "微風4號",
        "buff": "裝備同一套桐人技能記錄中的1個或以上時，暴擊傷害+15%。",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "盛開的花朵4",
        "buff": "裝備同一套「莉法」技能記錄2個以上進行攻擊時，額外造成300點傷害。",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "致命抽獎4",
        "buff": "HP>99%時爆擊率+50%。",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "龍之秘劍4",
        "buff": "當生命值>99%時，攻擊力+25%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "月影刺客4",
        "buff": "當生命值>99%時，暴擊傷害+38%。",
        "numbers": "crit_dmg: 38, general_dmg: 38"
    },
    {
        "name": "隱藏的情感4",
        "buff": "裝備同一套桐人技能紀錄中的1個或以上時，暴擊率+15%。 /——[我們一起看到的天空4]自身buff生效期間攻擊力+10%。 /——[治癒強化4]治療物品與場地物效果+25%。",
        "numbers": "crit_rate: 15, atk_percent: 10"
    },
    {
        "name": "姐姐！ 4",
        "buff": "裝備同套亞絲娜技能記錄中的1個以上時，攻擊力+10%",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "我的願望4",
        "buff": "躲避時，附加+15%暴擊率和暴擊傷害的增益，持續10秒。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "凍傷打擊4",
        "buff": "對帶有凍傷的敵人的攻擊力增加20%。",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "金鐘4號",
        "buff": "自體附加傷害增益生效期間，爆擊率+20%。",
        "numbers": "additionalDmg: NaN, general_dmg: 20"
    },
    {
        "name": "光魔法4",
        "buff": "DEF 隨自身水準增加 ×0.17%。 （最多 34%）",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "冰刃4",
        "buff": "對敵人造成水屬性傷害+20%。",
        "numbers": "waterDmg: 20"
    },
    {
        "name": "許下的諾言4",
        "buff": "裝備同一套桐人技能紀錄中的1個以上時，暴擊率+20%。",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "冰冷的衣服3",
        "buff": "當你被凍傷時，防禦+10%，凍傷傷害-15%。",
        "numbers": "def_percent: 10"
    },
    {
        "name": "冰環3",
        "buff": "當你被凍傷時，爆擊率+20%，凍傷傷害-15%。",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "專家保證金 4",
        "buff": "生命值低於50%時，暴擊率和暴擊傷害+12%。",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "專項訓練成果4",
        "buff": "暴擊率隨你自己的等級而增加－0.28%。 （最多 56%）",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "勇氣4",
        "buff": "增益效果期間攻擊力+12%，暴擊傷害增加。",
        "numbers": "atk_percent: 12"
    },
    {
        "name": "信心動搖4",
        "buff": "當暴擊傷害低於10%時，如果亞絲娜的技能記錄同一套裝備有3個或以上，則該效果無效。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "弱點攻擊3",
        "buff": "暴擊傷害+25%。",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "緊張的心4",
        "buff": "當暴擊率低於15%時，如果桐人的技能記錄同一套裝備有3個或以上，則該效果無效。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "前進士兵3",
        "buff": "攻擊+300。",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "強化解藥5",
        "buff": "毒害傷害-70%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "滿滿的亞絲娜",
        "buff": "亞絲娜的技能記錄同組裝備3個以上時，攻擊力+10%。亞絲娜的技能記錄同組裝備6個以上時，爆擊率+20%。",
        "numbers": "atk_percent: 10, crit_rate: 20"
    },
    {
        "name": "巨人的手套4",
        "buff": "自身附加傷害增益生效期間，攻擊力+25%",
        "numbers": "additionalDmg: NaN, general_dmg: 25"
    },
    {
        "name": "記住4",
        "buff": "裝備同一套桐人技能紀錄中的1個以上時，暴擊率+30%。",
        "numbers": "crit_rate: 30"
    },
    {
        "name": "魚殺手3",
        "buff": "對敵人造成風屬性傷害+10%。",
        "numbers": "windDmg: 10, general_dmg: 10"
    },
    {
        "name": "純淨的聲音",
        "buff": "自身生命值75%以上時，暴擊傷害+20%。 【殺手微笑】發現弱點的敵人攻擊力+20%。",
        "numbers": "crit_dmg: 20, general_dmg: 20, atk_percent: 20"
    },
    {
        "name": "淨化火焰4",
        "buff": "對敵人造成+22%火屬性傷害。",
        "numbers": "fireDmg: 22"
    },
    {
        "name": "聖騎士的命令4",
        "buff": "攻擊力+10%。",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "破壞攻擊3",
        "buff": "使用破壞時對敵人的攻擊力+25%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "短暫休息 4",
        "buff": "桐人同組技能紀錄裝備3個以上時，攻擊力+20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "巨大的氣息4",
        "buff": "當你在場內被物體治癒時，攻擊力增加 25%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "天地法則4",
        "buff": "當你在場內被物體治癒時，異常狀態（麻痺、眩暈、睡眠）抗性增加 +100%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "短暫的休息 4",
        "buff": "亞絲娜同組技能記錄裝備3個以上時，攻擊力+20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "惡魔微笑4",
        "buff": "非普通攻擊暴擊率降低20%，普通攻擊暴擊率提高80%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "黑暗邀請4",
        "buff": "對敵人造成暗屬性傷害+22%。",
        "numbers": "darkDmg: 22"
    },
    {
        "name": "堅定的眼神4",
        "buff": "優吉歐的技能記錄裝備同組中的1個以上時，攻擊時額外傷害+300。 /∏[攻擊力上升3]攻擊力+50。",
        "numbers": "additionalDmg: NaN, flat_atk: 50"
    },
    {
        "name": "意志力4",
        "buff": "裝備同一套愛麗絲技能記錄中的1個或以上時，攻擊時額外傷害+300。 /∏[騎士誓言3]擊敗怪物時，自身最大生命值恢復0.3%。",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "生存誓言4",
        "buff": "裝備同一套亞絲娜技能記錄中的1個以上時，攻擊力+15%。裝備西莉卡同組技能記錄中的1個或以上時，最大生命值+10%。裝備莉茲貝特同組技能記錄中的1個或以上時，爆擊傷害+15%",
        "numbers": "atk_percent: 15, hp_percent: 10, crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "團結的力量4",
        "buff": "亞絲娜的技能記錄同組裝備1個以上時，對刺擊弱的敵人造成的傷害+10%。裝備同組的優紀的技能記錄2個以上時，對砍擊能力弱的敵人造成的傷害+10%。",
        "numbers": "thrustDmg: 10, general_dmg: 20, slashDmg: 10"
    },
    {
        "name": "微風3號",
        "buff": "裝備同一套桐人技能記錄中的1個或以上時，暴擊傷害+15%。",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "地舞4",
        "buff": "對敵人造成+22%土屬性傷害。 /≏[錘3]對帶有減益狀態的敵人（印記、小印記、死亡印記、突刺侵蝕印記、斬擊破壞印記）造成額外1000點傷害。",
        "numbers": "earthDmg: 22, additionalDmg: NaN"
    },
    {
        "name": "輕舞4",
        "buff": "對敵人造成+22%聖屬性傷害。 /➏[奉獻3]生命值>75%時攻擊力+10%。",
        "numbers": "holyDmg: 22, atk_percent: 10"
    },
    {
        "name": "消除你的恐懼3",
        "buff": "防禦+增益生效時，攻擊力增加15%。 /≏[MHCP 3]攻擊時額外傷害+200。",
        "numbers": "atk_percent: 15, additionalDmg: NaN"
    },
    {
        "name": "注意我前輩4",
        "buff": "優吉歐的同組技能記錄裝備1個以上時，攻擊力+12%。 /≏[意志繼續4]自體附加傷害增益效果生效期間，攻擊時附加傷害+1000。",
        "numbers": "atk_percent: 12, additionalDmg: NaN"
    },
    {
        "name": "老將劍法3",
        "buff": "攻擊力隨自身等級增加×0.12%。 （最多 24%）",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "微笑禮物4",
        "buff": "暴擊時恢復自身最大生命值的3%。 （每個技能一次）* 進化與最大突破",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "5號櫃檯",
        "buff": "躲避時增加增益，+30% 暴擊率持續 8 秒。 * 進化與最大突破",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "對峙5",
        "buff": "HP超過75%時，退縮抗性+60%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "配速加快 5",
        "buff": "攻擊力隨著攻擊次數的增加而增加。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "步入5",
        "buff": "隨著 HITS 數量的增加，臨界率也會增加。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "黑人統治",
        "buff": "未裝備同組愛麗絲技能紀錄時，攻擊力+15%。",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "黑暗轉換4",
        "buff": "聖屬性對敵人造成的傷害-10%，暗屬性對敵人造成的傷害+25%。",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "輕鬆戰鬥4",
        "buff": "根據技能記錄逐漸恢復生命值的增益效果生效時，攻擊力+25%。 /➡[精確攻擊加成3]暴擊率提升增益效果生效時，爆擊率+15%。 *進化&最大突破",
        "numbers": "atk_percent: 25, crit_rate: 15"
    },
    {
        "name": "魯莽衝刺4",
        "buff": "提高自身退縮抗性的增益效果生效期間，攻擊力+25%。 /➡[破拳3]自體附加傷害增益效果生效時，爆擊率+15%。",
        "numbers": "atk_percent: 25, crit_rate: 15, additionalDmg: NaN"
    },
    {
        "name": "隨耳演奏 4",
        "buff": "生命值高於50%時攻擊+10%，生命值低於50%時防禦+10%。",
        "numbers": "atk_percent: 10, def_percent: 10"
    },
    {
        "name": "強化斜線2",
        "buff": "對揮砍能力較弱的敵人造成的傷害+10%。",
        "numbers": "slashDmg: 10, general_dmg: 10"
    },
    {
        "name": "強化推力2",
        "buff": "對刺擊能力較弱的敵人造成的傷害+10%。",
        "numbers": "thrustDmg: 10, general_dmg: 10"
    },
    {
        "name": "增強鈍器2",
        "buff": "對弱到遲鈍的敵人造成的傷害+10%。",
        "numbers": "bluntDmg: 10, general_dmg: 10"
    },
    {
        "name": "汪汪！",
        "buff": "對帶有增益效果的敵人攻擊力+18%，傷害減少10%。",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "我們是雙胞胎！",
        "buff": "對有增益效果的敵人爆擊率+20%，爆擊傷害+20%。",
        "numbers": "crit_rate: 20, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "數據處理4",
        "buff": "對處於 debuff 狀態的敵人造成爆擊傷害 +20%。",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "資料處理3",
        "buff": "對處於 debuff 狀態的敵人爆擊傷害+15%。",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "斜線保護3",
        "buff": "減少12%斬屬性怪物的傷害。",
        "numbers": "slashRes: 12"
    },
    {
        "name": "心中的怪盜團：Panther",
        "buff": "裝備同一套裝中任意角色小丑/骷髏/黑豹/莫娜/狐狸/女王/諾爾/紫羅蘭的2個或以上技能記錄時，額外傷害+1000。",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "心中的怪盜團：莫娜",
        "buff": "裝備同一套裝中小丑/骷髏/黑豹/莫娜/狐狸/女王/黑女/紫羅蘭任意角色的2個或以上技能記錄時，額外傷害+500。",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "紅心怪盜團：女王",
        "buff": "裝備同一套裝中任意角色小丑/骷髏/黑豹/莫娜/狐狸/女王/諾爾/紫羅蘭的2個或以上技能記錄時，額外傷害+1000。",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "力量崛起3",
        "buff": "攻擊+800。",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "同情心：Leafa",
        "buff": "裝備小丑/骷髏/黑豹/莫娜/狐狸/女王/黑女/紫羅蘭任意角色的1個或以上技能記錄時，暴擊傷害+15%。",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "同情之心：優紀",
        "buff": "裝備同一套裝中小丑/骷髏/黑豹/莫娜/狐狸/女王/黑女/紫羅蘭任意角色的1個或以上技能記錄時，暴擊率+15%。",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "同情之心：愛麗絲",
        "buff": "裝備同一套裝中小丑/骷髏/黑豹/莫娜/狐狸/女王/黑女/紫羅蘭任意角色技能記錄1個或以上時，攻擊力+15%。",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "烈風之刃4",
        "buff": "對敵人造成+20%風屬性傷害。",
        "numbers": "windDmg: 20"
    },
    {
        "name": "自動儲存4",
        "buff": "當處於麻痺、眩暈、睡眠、詛咒、虛弱、石化、中毒、燒傷、流血、凍傷等異常狀態時，防禦力 +25%。",
        "numbers": "def_percent: 25"
    },
    {
        "name": "人才轉移1",
        "buff": "效果會根據同一組中的技能記錄而變化。裝備同一套愛麗絲技能記錄中的 1 個或以上時，每 3 秒恢復 70 生命值。裝備同組沒有愛麗絲技能紀錄時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "增強鈍器 3",
        "buff": "對弱到遲鈍的敵人造成的傷害 +15%。",
        "numbers": "bluntDmg: 15, general_dmg: 15"
    },
    {
        "name": "高戰鬥治療3",
        "buff": "每3秒最多恢復1.2%生命值。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "背刺4",
        "buff": "對非玩家指定怪物的傷害+18%。",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "黑暗統治",
        "buff": "不裝備同一套愛麗絲技能記錄時，額外傷害+1000。",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "凍傷打擊3",
        "buff": "對帶有凍傷的敵人的攻擊力增加 18%。",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "正義之戰",
        "buff": "當 HP 為 100% 時，退縮抗性 +80%。當生命值低於99%時，每3秒最多恢復1%生命值。",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "狀態疾病打擊 3",
        "buff": "對患有異常狀態（中毒、燒傷、流血、凍傷）的敵人攻擊力+18%。 /-[龍的左眼]額外傷害+1000。",
        "numbers": "atk_percent: 18, additionalDmg: NaN"
    },
    {
        "name": "重要的同意 3",
        "buff": "防禦+400。",
        "numbers": "flat_def: 400"
    },
    {
        "name": "精神色彩",
        "buff": "效果會根據同一組的技能記錄而變化。裝備亞絲娜的技能記錄1個以上時：最大生命值+10%。裝備詩乃的技能記錄1個以上時：攻擊力+20%。裝備莉法的技能記錄1個以上時：追加傷害+500。裝備愛麗絲的技能記錄1個以上時：爆擊率+10%。裝備優吉歐的技能記錄1個以上時：爆擊率+10%。技能記錄：暴擊傷害+10%。",
        "numbers": "hp_percent: 10, atk_percent: 20, additionalDmg: NaN, crit_rate: 10, crit_dmg: 10, general_dmg: 10"
    },
    {
        "name": "黑暗邀請3",
        "buff": "對敵人造成暗屬性傷害+15%。",
        "numbers": "darkDmg: 15"
    },
    {
        "name": "自動學習4",
        "buff": "根據同套裝中裝備的愛麗絲技能記錄數量，附加效果。 2個以上：防禦力+5%。 3個以上：最大生命值+10%。 4個以上：暴擊率+15%。 5個以上：暴擊傷害+15%。 6個以上：攻擊力+20%。",
        "numbers": "def_percent: 5, hp_percent: 10, crit_rate: 15, crit_dmg: 15, general_dmg: 15, atk_percent: 20"
    },
    {
        "name": "充滿愛麗絲4",
        "buff": "愛麗絲技能記錄同組裝備3個以上時，防禦力+10%。愛麗絲技能記錄同組裝備6個以上時，爆擊傷害+20%。",
        "numbers": "def_percent: 10, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "人才轉移2",
        "buff": "效果會根據同組技能記錄而變化。裝備同組愛麗絲技能記錄中的1個或以上時，附加傷害+1000。裝備同組沒有愛麗絲技能紀錄時，攻擊力+20%。",
        "numbers": "additionalDmg: NaN, atk_percent: 20"
    },
    {
        "name": "輕和弦4",
        "buff": "對有增益效果的敵人聖屬性傷害+28%。",
        "numbers": "holyDmg: 28, general_dmg: 28"
    },
    {
        "name": "夢想合作",
        "buff": "攻擊力提升為同組尤娜技能記錄數的 150 倍。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "黑暗和弦4",
        "buff": "對有增益效果的敵人造成暗屬性傷害+28%。",
        "numbers": "darkDmg: 28, general_dmg: 28"
    },
    {
        "name": "前進士兵4",
        "buff": "攻擊+400。",
        "numbers": "flat_atk: 400"
    },
    {
        "name": "地球的賠償3",
        "buff": "中毒時，土屬性傷害+40%。 /≏【增強解藥3】中毒傷害-30%。",
        "numbers": "earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "強化推力3",
        "buff": "對刺擊能力較弱的敵人造成的傷害+15%。",
        "numbers": "thrustDmg: 15, general_dmg: 15"
    },
    {
        "name": "地舞2",
        "buff": "對敵人造成+9.3%土屬性傷害。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "弱點攻擊力提升3",
        "buff": "當提高暴擊傷害的增益生效時，暴擊傷害+15%。 *進化與最大突破",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "人才轉移3",
        "buff": "效果會根據同組技能記錄而變化。裝備同組愛麗絲技能記錄中的1個或以上時，植物治療量+10%。裝備同組沒有愛麗絲技能紀錄時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "姐妹情4",
        "buff": "爆擊傷害提升 5% x 同組技能記錄數。攻擊提升 6% x 同組技能記錄數。",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "火焰賠償3",
        "buff": "當你被燒傷時，火元素傷害+40%。 /≏[增強燒傷免疫3]燒傷傷害-30%。",
        "numbers": "fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "強化狂暴3",
        "buff": "當玩家處於異常狀態（中毒、燒傷、流血、凍傷、詛咒、虛弱）時，攻擊力+20%。 *進化與最大突破",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "前進士兵5",
        "buff": "攻擊+500。",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "五利器3",
        "buff": "使用推力元素攻擊時，攻擊力+800。",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "按住前4",
        "buff": "當生命值低於50%時，每3秒最多可恢復5%+200生命值。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "燃燒之擊3",
        "buff": "對被燒傷的敵人的攻擊力增加 18%。",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "力量崛起4",
        "buff": "攻擊+900。",
        "numbers": "flat_atk: 900"
    },
    {
        "name": "薄冰4",
        "buff": "防禦-30%，在增加最大生命值的增益效果期間，每3秒生命值-99%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "冰冷之刃2",
        "buff": "對敵人造成+9.3%水屬性傷害。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "輕鬆戰鬥3",
        "buff": "根據技能記錄逐漸恢復生命值的增益效果生效時，攻擊力+20%。 /â—[增強治療4]治療物品和場地物體的效果+25%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "可靠的兄弟4",
        "buff": "裝備莉法同組技能記錄中的1個或以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "閃避3",
        "buff": "迴避率+7.2%。 *不會因集中攻擊而發動。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "木槌打擊 4",
        "buff": "對弱到鈍化的敵人造成的傷害對具有減益狀態的敵人（標記、小標記、死亡標記、刺擊侵蝕標記、切割毀滅標記）+30%。",
        "numbers": "bluntDmg: 30, general_dmg: 30"
    },
    {
        "name": "憤怒的公牛3",
        "buff": "對具有攻擊減益的敵人造成傷害+18%。",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "憤怒的種馬3",
        "buff": "對具有防禦減益的敵人造成傷害+18%。",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "劍靈澎湃4",
        "buff": "攻擊力上升3.5%×同組有紀技能記錄數。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "精力充沛4",
        "buff": "裝備同一套艾基爾技能記錄2個以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "烈風之刃2",
        "buff": "對敵人造成+9.3%風屬性傷害。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "加速3",
        "buff": "HP低於50%時爆擊傷害+20%。",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "血戰打擊3",
        "buff": "使用鈍元素攻擊時攻擊力+35%。",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "鋼牙4",
        "buff": "使用推力元素攻擊時，攻擊力+500。",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "火焰增強 4",
        "buff": "對敵人造成除火以外的元素傷害-50%，對敵人造成火元素傷害+40%。",
        "numbers": "waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "傳說中的劍規則",
        "buff": "未裝備桐人同組技能紀錄時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "火焰轉換3",
        "buff": "水元素對敵人的傷害-10%，火元素對敵人的傷害+20%。",
        "numbers": "fireDmg: 20, general_dmg: 20"
    },
    {
        "name": "會見朋友",
        "buff": "裝備同一套亞絲娜技能記錄中的 3 個或以上時，每 3 秒恢復 80 點生命值。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "不順利 4",
        "buff": "防禦-30%，在最大生命值增加的增益效果期間，普通攻擊時攻擊力和傷害-99%。 *進化與最大突破",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "海神4",
        "buff": "詩乃的技能記錄同組裝備3張以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "地舞5",
        "buff": "對敵人造成+25%土屬性傷害。",
        "numbers": "earthDmg: 25"
    },
    {
        "name": "人才轉移4",
        "buff": "效果會根據同組技能記錄而變化。裝備同組桐人技能記錄1個以上時，燃燒成功率+。同組沒有裝備桐人技能紀錄時，對砍伐能力較弱的敵人造成的傷害+30%。",
        "numbers": "slashDmg: 30, general_dmg: 30"
    },
    {
        "name": "全黑4",
        "buff": "根據同組裝備的桐人技能記錄數量，附加效果。 2個以上：每3秒最大恢復1.2%生命值。 3個以上：最大生命值+5%。 4個以上：暴擊率+10%。 5個以上：暴擊傷害+10%。 6個以上：攻擊力+15%。",
        "numbers": "hp_percent: 5, crit_rate: 10, crit_dmg: 10, general_dmg: 10, atk_percent: 15"
    },
    {
        "name": "血腥打擊3",
        "buff": "對流血敵人的攻擊力+18%。",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "更多德班 1",
        "buff": "裝備莉茲貝特同組技能記錄中的1個或以上時，攻擊力+20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "自動儲存2",
        "buff": "當處於麻痺、眩暈、睡眠、詛咒、虛弱、石化、中毒、燒傷、流血、凍傷等異常狀態時，防禦力 +15%。",
        "numbers": "def_percent: 15"
    },
    {
        "name": "聖光的賠償3",
        "buff": "當你虛弱時，聖屬性傷害+40%。",
        "numbers": "holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "鐵拳懲罰4",
        "buff": "使用鈍元素攻擊時攻擊力+500。",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "狼牙棒之王3",
        "buff": "裝備1H俱樂部時攻擊力+1000",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "反抗體制4",
        "buff": "裝備同套亞絲娜技能記錄中的1個以上時，攻擊力+20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "粗俗戰術2",
        "buff": "防禦-30%，生命值低於50%時，非元素傷害-400%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "風之助推4",
        "buff": "對敵人造成風以外的元素傷害-50%，對敵人造成風屬性傷害+40%。",
        "numbers": "fireDmg: -50, waterDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, windDmg: 40, general_dmg: 40"
    },
    {
        "name": "黑豹4",
        "buff": "裝備同一套幸的技能記錄中的1個或以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "黑暗增強 4",
        "buff": "黑暗以外的元素對敵人造成的傷害-50%，黑暗元素對敵人的傷害+40%。",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, noneDmg: -50, darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "切換到近戰4",
        "buff": "未裝備詩乃同組技能紀錄時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "更多 德班 2",
        "buff": "裝備西莉卡同組技能記錄中的1個或以上時，攻擊力+20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "影子賠償3",
        "buff": "受到詛咒時，暗屬性傷害+40%。",
        "numbers": "darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "詛咒計數器 4",
        "buff": "當玩家處於異常狀態（詛咒）時，攻擊力+1500。",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "猛攻4",
        "buff": "攻擊力+25%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "冰雪賠償3",
        "buff": "凍傷時，水元素傷害+40%。 /≏【強化凍傷3】凍傷傷害-30%。",
        "numbers": "waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "粉碎衝擊 3",
        "buff": "使用鈍元素攻擊時攻擊力+800。",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "水族助推器 4",
        "buff": "對敵人造成水以外的元素傷害-50%，對敵人造成水元素傷害+40%。",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "自動儲存3",
        "buff": "當處於麻痺、眩暈、睡眠、詛咒、虛弱、石化、中毒、燒傷、流血、凍傷等異常狀態時，防禦力 +20%。",
        "numbers": "def_percent: 20"
    },
    {
        "name": "繁榮4",
        "buff": "生命值高於50%時攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "凍傷打擊5",
        "buff": "對帶有凍傷的敵人的攻擊力增加30%。",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "化身：原力4",
        "buff": "愛麗絲技能記錄同組裝備3個以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "重要的同意 4",
        "buff": "防禦+450。",
        "numbers": "flat_def: 450"
    },
    {
        "name": "強化攻擊5",
        "buff": "攻擊力+18%。",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "快速又簡單",
        "buff": "降低 100% 的退縮抵抗力。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "精彩4",
        "buff": "在增加最大生命值的增益效果期間，防禦力 -30%，暴擊傷害 -300%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "淨化火焰3",
        "buff": "對敵人造成+15%火屬性傷害。",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "反對之心3",
        "buff": "對有增益效果的敵人攻擊力+18%",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "火焰的共鳴4",
        "buff": "對有增益效果的敵人火屬性傷害+30%。",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "矛王3",
        "buff": "使用 2H 矛時攻擊力 +1000。",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "光澤增強 4",
        "buff": "聖屬性以外的元素對敵人造成的傷害-50%，聖屬性對敵人造成的傷害+40%。",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, darkDmg: -50, noneDmg: -50, holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "訓練結果4",
        "buff": "爆擊傷害增加自己的等級 × 0.14%（最大 28%）",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "六路4",
        "buff": "效果會根據同套技能記錄而變化。裝備桐人技能記錄 2 條時：對敵人造成+40%土屬性傷害。裝備 3 桐人技能紀錄時：對敵人造成+40%風屬性傷害。裝備 4 桐人技能紀錄時：對敵人造成+40%火屬性傷害。裝備 5 桐人技能紀錄時：對敵人造成+40%風屬性傷害。對敵人造成水屬性傷害。裝備桐人技能紀錄6筆時：對敵人造成聖屬性傷害+50%。裝備桐人技能記錄7筆時：對敵人造成暗屬性傷害+50%。",
        "numbers": "earthDmg: 40, windDmg: 40, fireDmg: 40, waterDmg: 40, holyDmg: 50, darkDmg: 50"
    },
    {
        "name": "外籍友人1",
        "buff": "攻擊力提升為同組雨技能紀錄數的200倍。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "吸熱3",
        "buff": "當玩家處於異常狀態（燒傷）時，攻擊力+40%。 /∏[增強燒傷免疫3]燒傷傷害-30%。",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "老鼠的訊息4",
        "buff": "裝備同組阿爾戈技能記錄中的1個或以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "正面攻擊4",
        "buff": "攻擊命中時仇恨增加-40%",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "靈活性4",
        "buff": "HP 100%時石化抗性+80%。當生命值低於99%時，每3秒最多恢復1%生命值。",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "斧王3",
        "buff": "使用 2H 斧時攻擊力 +1000。",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "推力保護3",
        "buff": "減少12%推力元素怪物的傷害。",
        "numbers": "thrustRes: 12"
    },
    {
        "name": "自動學習5",
        "buff": "根據同套裝備的愛麗絲技能記錄數量，追加效果。 2個以上：暴擊率+20%。 3個以上：防禦力+5%。 4個以上：最大生命值+10%。 5個以上：暴擊傷害+20%。 6個以上：攻擊力+35%。",
        "numbers": "crit_rate: 20, def_percent: 5, hp_percent: 10, crit_dmg: 20, general_dmg: 20, atk_percent: 35"
    },
    {
        "name": "超幸運！",
        "buff": "敵人下次受到的攻擊有1%的機率造成2.5倍的傷害。 （適用於其他隊員的攻擊。如果不激活，效果將在10秒後消失。）",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "幸運！",
        "buff": "10秒內有25%的幾率暴擊率+50%。",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "運氣不確定！",
        "buff": "75% 攻擊幾率 +7%，持續 30 秒。",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "呃哦！",
        "buff": "有 5% 的幾率對自己施加詛咒，持續 20 秒。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "地球強化4",
        "buff": "土元素對敵人造成的傷害-50%，土元素對敵人造成的傷害+40%。",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "人才轉移5",
        "buff": "效果會根據同組技能記錄而變化。裝備同組桐人技能紀錄中的1個或以上時，+凍傷的成功率。當沒有裝備同組技能記錄時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "舞台工作人員 4",
        "buff": "裝備同一套小春技能記錄中的2個以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "影子賠償1",
        "buff": "受到詛咒時，暗屬性傷害+25%。",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "匕首之王3",
        "buff": "使用匕首時攻擊力+1000。",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "冰花4",
        "buff": "優吉歐的技能記錄同組裝備2個以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "血戰斬3",
        "buff": "斬屬性攻擊時攻擊力+35%。",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "土積3",
        "buff": "土元素傷害提升同組克萊因技能記錄數×10%。",
        "numbers": "earthDmg: 10"
    },
    {
        "name": "水色轉換 5",
        "buff": "火元素對敵人的傷害-15%，水元素對敵人的傷害+30%。",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "戰術顧問4",
        "buff": "裝備同一組結衣技能記錄中的2個以上時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "槍法3",
        "buff": "詩乃的技能記錄同組裝備2個以上時，攻擊力+20%。 *進化&最大突破",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "光環 3",
        "buff": "防禦-30%，最大生命值增加的增益效果期間命中率-30%",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "加重斬3",
        "buff": "斬屬性弱點傷害提升同組艾迪斯技能記錄數 x 20%。",
        "numbers": "slashDmg: 20"
    },
    {
        "name": "盛開3",
        "buff": "裝備同一套艾迪斯技能記錄4個以上時，攻擊力+800。",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "充電損耗1",
        "buff": "防禦-30%且生命值低於50%時，對刺力較弱的敵人造成傷害-1000%。 *進化&最大突破",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "地吸力3",
        "buff": "當玩家處於異常狀態（中毒）時，攻擊力+35%。 /∏[增強解藥3]中毒傷害-30%。",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "細劍之王3",
        "buff": "使用 1H 劍時攻擊力 +1000。",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "風轉換5",
        "buff": "土元素對敵人造成的傷害-15%，風元素對敵人造成的傷害+30%。",
        "numbers": "windDmg: 30, general_dmg: 30"
    },
    {
        "name": "黑劍客3",
        "buff": "裝備同一套桐人技能紀錄中的2個或以上時，攻擊力+20%。 *進化&最大突破",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "超級強化治療",
        "buff": "治療物品和野外物體的效果+100%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "巔峰3",
        "buff": "生命值高於80%時攻擊力+40%。",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "外籍友人2",
        "buff": "攻擊力提升為同組雨技能紀錄數的 250 倍。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "鋒利的刀刃 4",
        "buff": "攻擊力上升6%×同組亞絲娜技能紀錄數。",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "地球的賠償2",
        "buff": "中毒時，土屬性傷害+35%。",
        "numbers": "earthDmg: 35, general_dmg: 35"
    },
    {
        "name": "燃燒計數器 3",
        "buff": "當玩家處於異常狀態（燒傷）時，攻擊力+1000。 /∏[增強燒傷免疫2]燒傷傷害-10%。",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "香料狂3",
        "buff": "裝備同一套桐人技能紀錄中的2個或以上時，攻擊力+20%。 *進化&最大突破",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "加速治療4",
        "buff": "每 3 秒最多恢復 4% HP。",
        "numbers": "hp_regen: 4"
    },
    {
        "name": "地球轉換5",
        "buff": "風屬性對敵人造成的傷害-15%，土屬性對敵人造成的傷害+30%。",
        "numbers": "earthDmg: 30, general_dmg: 30"
    },
    {
        "name": "劍魔4",
        "buff": "裝備同一套亞絲娜技能記錄中的1個或以上時，攻擊力+20%*進化&最大突破",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "隨耳演奏 5",
        "buff": "生命值高於50%時攻擊+25%，生命值低於50%時防禦+15%。",
        "numbers": "atk_percent: 25, def_percent: 15"
    },
    {
        "name": "血戰斬4",
        "buff": "使用斬屬性攻擊時，攻擊力+40%。",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "拖運 3",
        "buff": "桐人的技能記錄同組裝備4個以上時，攻擊力+300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "冰霜吸力4",
        "buff": "當玩家處於異常狀態（凍傷）時，攻擊力+50%。 /∏[增強凍傷3]凍傷傷害-30%。",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "鎮定3",
        "buff": "凍傷時命中率+30%。",
        "numbers": "hit_rate: 30"
    },
    {
        "name": "冰之共鳴4",
        "buff": "對有增益效果的敵人水屬性傷害+30%。",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "黑暗轉換5",
        "buff": "聖屬性對敵人造成的傷害-15%，暗屬性對敵人造成的傷害+30%。",
        "numbers": "darkDmg: 30, general_dmg: 30"
    },
    {
        "name": "影子賠償2",
        "buff": "受到詛咒時，暗元素傷害+35%。",
        "numbers": "darkDmg: 35, general_dmg: 35"
    },
    {
        "name": "出血計數器 3",
        "buff": "當玩家處於異常狀態（流血）時，攻擊力+1000。 /∏[增強凝血2]出血傷害-10%。",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "出血計數器 4",
        "buff": "當玩家處於異常狀態（流血）時，攻擊力+1500。",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "風災賠償3",
        "buff": "當玩家處於異常狀態（流血）時，風屬性傷害+40%。",
        "numbers": "windDmg: 40, general_dmg: 40"
    },
    {
        "name": "衝破大壩3",
        "buff": "對敵人的破壞量+30%。",
        "numbers": "break_pct: 30"
    },
    {
        "name": "黑暗累積3",
        "buff": "暗元素傷害提升同組三亞技能記錄數×10%。",
        "numbers": "darkDmg: 10"
    },
    {
        "name": "血戰打擊4",
        "buff": "使用鈍元素攻擊時攻擊力+40%。",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "火焰堆積3",
        "buff": "火屬性傷害提升同組亞絲娜技能記錄數×10%。",
        "numbers": "fireDmg: 10"
    },
    {
        "name": "燃燒之擊5",
        "buff": "對被燒傷的敵人的攻擊力增加 30%。",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "火焰轉換5",
        "buff": "水元素對敵人的傷害-15%，火元素對敵人的傷害+30%。",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "武術家3",
        "buff": "裝備2個以上莉法的技能紀錄時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "猛攻1",
        "buff": "攻擊力+25%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "血戰衝鋒3",
        "buff": "使用推力元素攻擊時，攻擊力+35%。",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "地獄火4",
        "buff": "攻擊力上升7%×同組桐人技能紀錄數。",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "繁榮5",
        "buff": "生命值高於50%時攻擊力+25%。",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "皮爾斯 4",
        "buff": "對刺擊能力較弱的敵人造成的傷害+25%。",
        "numbers": "thrustDmg: 25, general_dmg: 25"
    },
    {
        "name": "鎮定1",
        "buff": "凍傷時命中率+10%。 /≏[強化凍傷2]凍傷傷害-10%。",
        "numbers": "hit_rate: 10"
    },
    {
        "name": "霜凍累積 4",
        "buff": "水元素傷害提升同組艾迪斯技能記錄數 x 12.5%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "高級劍桿技術 3",
        "buff": "使用 1H 細劍時，非元素傷害 +25%。",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "吸氣4",
        "buff": "當玩家處於異常狀態（流血）時，攻擊力+50%。 /∏[增強凝血3]出血傷害-30%。",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "狂風怒吼4",
        "buff": "對敵人造成+15%風屬性傷害。",
        "numbers": "windDmg: 15"
    },
    {
        "name": "毒藥計數器 4",
        "buff": "當玩家處於異常狀態（中毒）時，攻擊力+1500。",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "對分 4",
        "buff": "對揮砍能力較弱的敵人造成的傷害+25%。",
        "numbers": "slashDmg: 25, general_dmg: 25"
    },
    {
        "name": "凍傷計數器 4",
        "buff": "當玩家處於異常狀態（凍傷）時，攻擊力+1500。",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "熱量累積4",
        "buff": "火屬性傷害提升同組亞絲娜技能記錄數×12.5%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "黃金機會4",
        "buff": "暴擊傷害+50%。",
        "numbers": "crit_dmg: 50, general_dmg: 50"
    },
    {
        "name": "穿刺突波 3",
        "buff": "推力元素弱點的傷害上升同組蓮技能記錄數×20%。",
        "numbers": "thrustDmg: 20"
    },
    {
        "name": "賽博思維2",
        "buff": "攻擊力上升7%×同組結衣技能紀錄數。",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "聖劍攻勢",
        "buff": "攻擊力提升10%×同組希斯克利夫技能紀錄數。",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "封鎖1",
        "buff": "所有元素傷害減少100% x 同組亞絲娜技能記錄數（包括非元素）。",
        "numbers": "fireDmg: -100, waterDmg: -100, windDmg: -100, earthDmg: -100, holyDmg: -100, darkDmg: -100, noneDmg: -100"
    },
    {
        "name": "反應顯著",
        "buff": "迴避率+16%。 *不會因集中攻擊而發動。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "血戰衝鋒4",
        "buff": "使用推力元素攻擊時，攻擊力+40%。",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "英勇3",
        "buff": "結衣的技能記錄同組裝備3個以上時，攻擊力+300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "盲目信仰",
        "buff": "攻擊力提升7% x 同一套尤娜技能記錄數。",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "衝擊波2",
        "buff": "對遲鈍元素弱點的傷害增加同組敏捷技能記錄數 x 8%。",
        "numbers": "bluntDmg: 8"
    },
    {
        "name": "商人精英4",
        "buff": "裝備艾基爾技能記錄同組5個以上時，攻擊力+1000。",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "地吸4",
        "buff": "當玩家處於異常狀態（中毒）時，攻擊力+50%。 /∏[增強解藥3]中毒傷害-30%。",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "接地脈衝 4",
        "buff": "對敵人造成土屬性傷害+15%。",
        "numbers": "earthDmg: 15"
    },
    {
        "name": "閃耀轉換5",
        "buff": "暗屬性對敵人造成的傷害-15%，聖屬性對敵人造成的傷害+30%。",
        "numbers": "holyDmg: 30, general_dmg: 30"
    },
    {
        "name": "更多德班 4",
        "buff": "裝備西莉卡同組技能記錄中的1個或以上時，攻擊力+20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "匕首王牌4",
        "buff": "使用匕首時攻擊力+40%。",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "忠誠的朋友2",
        "buff": "攻擊力提升7%×同組三亞技能記錄數。",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "增強眩暈抵抗力3",
        "buff": "Ø 眩暈抗性+30%。",
        "numbers": "stunRes: 30"
    },
    {
        "name": "增強衰弱抵抗力。 3",
        "buff": "Ø 虛弱抗性+30%",
        "numbers": "debilityRes: 30"
    },
    {
        "name": "冰雪賠償2",
        "buff": "凍傷時，水屬性傷害+35%。",
        "numbers": "waterDmg: 35, general_dmg: 35"
    },
    {
        "name": "正面攻​​擊5",
        "buff": "攻擊命中時仇恨增加-50%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "深情4",
        "buff": "防禦力提升4%×同組亞絲娜技能記錄數。攻擊力提升7%×同組技能記錄數。",
        "numbers": "def_percent: 4, atk_percent: 7"
    },
    {
        "name": "閃耀積累3",
        "buff": "聖屬性傷害提升同組詩乃技能記錄數×10%。",
        "numbers": "holyDmg: 10"
    },
    {
        "name": "矛盾3",
        "buff": "裝備同組沒有希斯克利夫技能紀錄時，攻擊力+20%。",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "聖刃防護",
        "buff": "防禦力提升 5% x 同一套希斯克利夫技能紀錄數。",
        "numbers": "def_percent: 5"
    },
    {
        "name": "減少戰鬥傷害 5",
        "buff": "斬擊、刺擊、鈍屬性怪物造成的傷害、異常狀態傷害減少 5%。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "水族助推器 5",
        "buff": "對敵人造成水以外的元素傷害-50%（含非元素），水元素對敵人造成的傷害+45%。",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 45, general_dmg: 45"
    },
    {
        "name": "增強燃燒命中 5",
        "buff": "Ø +燒錄成功率。",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "火元素增強4/增益",
        "buff": "15秒內火屬性傷害+9.00%",
        "numbers": "fireDmg: 9"
    },
    {
        "name": "小標記/減益",
        "buff": "敵人下次受到的攻擊將造成 1.5 倍的傷害。",
        "numbers": "general_dmg: 50"
    },
    {
        "name": "烈焰之力 4/增益",
        "buff": "火屬性傷害+15.00%，持續15秒。",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "暗元素增強4/增益",
        "buff": "15秒內暗屬性傷害+9.00%",
        "numbers": "darkDmg: 9"
    }
];
