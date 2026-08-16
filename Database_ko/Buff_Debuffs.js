// Buff / Debuffs Database (Korean)
const buffDebuffData = [
    {
        "name": "공격력 강화 4",
        "buff": "공격력 +4%",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "방어 강화 4",
        "buff": "방어력 +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "약점 공격 1",
        "buff": "크리티컬 데미지 +6%.",
        "numbers": "crit_dmg: 6, general_dmg: 6"
    },
    {
        "name": "슬래시 강화 1",
        "buff": "슬래싱에 약한 적에게 주는 데미지가 6% 증가합니다.",
        "numbers": "slashDmg: 6, general_dmg: 6"
    },
    {
        "name": "추력 강화 1",
        "buff": "찌르기에 약한 적에게 주는 피해가 +6% 증가합니다.",
        "numbers": "thrustDmg: 6, general_dmg: 6"
    },
    {
        "name": "블런트 1 강화",
        "buff": "약한 적부터 둔기까지의 적에게 주는 피해가 +6% 증가합니다.",
        "numbers": "bluntDmg: 6, general_dmg: 6"
    },
    {
        "name": "약점 공격 2",
        "buff": "크리티컬 데미지 +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "인내력 4",
        "buff": "HP가 25% 미만일 때 방어력이 50% 증가합니다.",
        "numbers": "def_percent: 50"
    },
    {
        "name": "헌신 4",
        "buff": "HP가 75% 이상일 때 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "추력 강화 4",
        "buff": "찌르기에 약한 적에게 주는 피해가 24% 증가합니다.",
        "numbers": "thrustDmg: 24, general_dmg: 24"
    },
    {
        "name": "공격력 강화 3",
        "buff": "공격력 +4%.",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "방어 강화 2",
        "buff": "방어력 +8%.",
        "numbers": "def_percent: 8"
    },
    {
        "name": "공격력 강화 2",
        "buff": "공격력 +8%.",
        "numbers": "atk_percent: 8"
    },
    {
        "name": "HP 강화 2",
        "buff": "최대 HP +8%.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "성난 황소 2",
        "buff": "공격 디버프가 있는 적에게 데미지가 12% 증가합니다.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "분노한 종마 2",
        "buff": "방어 디버프가 있는 적에게 데미지가 12% 증가합니다.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "블런트 4 강화",
        "buff": "약한 적부터 둔기까지의 적에게 주는 피해가 24% 증가합니다.",
        "numbers": "bluntDmg: 24, general_dmg: 24"
    },
    {
        "name": "버닝 블로우 4",
        "buff": "화상을 입은 적에 대한 공격력이 24% 증가합니다.",
        "numbers": "general_dmg: 24"
    },
    {
        "name": "슬래시 강화 4",
        "buff": "베기에 약한 적에게 주는 피해가 24% 증가합니다.",
        "numbers": "slashDmg: 24, general_dmg: 24"
    },
    {
        "name": "플러프 4단계",
        "buff": "타격마다 방어 +.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "맹독 타격 4",
        "buff": "중독된 적에 대한 공격력이 24% 증가합니다.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "지속성 4",
        "buff": "자신의 HP가 50% 이하일 때 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "성난 황소 4",
        "buff": "공격 디버프가 있는 적에게 데미지가 25% 증가합니다.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "분노한 종마 4",
        "buff": "방어 디버프가 있는 적에게 데미지가 25% 증가합니다.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "슬래시 프로텍트 4",
        "buff": "슬래시속성 몬스터에게 15% 데미지 감소.",
        "numbers": "slashRes: 15"
    },
    {
        "name": "방어 강화 3",
        "buff": "방어력 +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "강한 출혈 목표 4",
        "buff": "출혈 확률이 대폭 증가합니다. [프리시전 블리드 4] 출혈 시 크리티컬 확률 +24%.",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "블러디 블로우 4",
        "buff": "출혈 중인 적에 대한 공격력이 24% 증가합니다.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "약점 공격 4",
        "buff": "크리티컬 데미지 +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "스텝인 4",
        "buff": "히트 횟수가 증가할수록 크리티컬 확률이 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "추력 보호 4",
        "buff": "추력속성 15% 몬스터에게 받는 데미지 감소.",
        "numbers": "thrustRes: 15"
    },
    {
        "name": "소생술 4",
        "buff": "HP가 50% 미만일 때 크리티컬 확률이 30% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "블런트 프로텍트 4",
        "buff": "둔기속성 몬스터에게 주는 데미지 15% 감소. [방어력 강화3] 방어력 +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "강철 같은 의지 4",
        "buff": "HP가 25% 이하일 때 데미지가 20%로 감소합니다. [방어력 강화3] 방어력 +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "정밀공격 3",
        "buff": "크리티컬 확률 +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "유우키 가득 4",
        "buff": "같은 세트로 유우키의 스킬 레코드를 3개 이상 장착 시 방어력이 8% 증가합니다. 유우키의 스킬 레코드를 같은 세트로 5개 이상 장착 시 공격력이 8% 증가합니다.",
        "numbers": "def_percent: 8, atk_percent: 8"
    },
    {
        "name": "정밀공격 4",
        "buff": "크리티컬 확률 +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "HP 강화 4",
        "buff": "최대 HP가 8% 증가합니다.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "거인의 비약",
        "buff": "필드에 있는 회복 아이템 및 물체는 회복 속도를 50% 감소시키고, 최대 HP는 30% 증가합니다.",
        "numbers": "hp_percent: 30"
    },
    {
        "name": "꽃 선물 4",
        "buff": "필드 내에서 물체에 의해 치유되면 공격력, 방어력이 10% 증가합니다.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "꽃향기 4",
        "buff": "필드에 있는 물체로 치유를 하면 크리티컬 발동량이 35% 증가합니다.",
        "numbers": "crit_rate: 35"
    },
    {
        "name": "두려움을 없애라 4",
        "buff": "방어+버프가 적용되는 동안 공격력이 25% 증가합니다.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "군중제어 4",
        "buff": "적 상태 이상(독, 화상, 출혈, 동상)에 대한 공격력이 8% 증가하고, 상태 이상(독, 화상, 출혈, 동상)에서 적으로부터 받는 피해가 8% 감소합니다.",
        "numbers": "atk_percent: 8, allRes: 8"
    },
    {
        "name": "공격 기회 4",
        "buff": "적의 공격력이 감소하는 동안 적에게 주는 크리티컬 데미지가 20% 증가합니다.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "방어 기회 4",
        "buff": "적의 방어력이 감소하는 동안 크리티컬 발동률이 20% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "투지 4",
        "buff": "버프 공격+가 유효한 동안 방어력이 25% 증가합니다.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "회피 4",
        "buff": "회피율 +10%. *집중 공격으로는 발동되지 않습니다./...[카운터 4] 회피 시 버프를 부여하며, 5초 동안 크리티컬 확률이 10% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "브레이크 어택 4",
        "buff": "브레이크 사용 시 적에 대한 공격력이 35% 증가합니다.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "둘러싸기 3",
        "buff": "적 브레이크 게이지 +25% 증가",
        "numbers": "break_pct: 25"
    },
    {
        "name": "저항 4",
        "buff": "상태 이상(독, 화상, 출혈, 동상) Res. +10%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "인내 3",
        "buff": "HP가 25% 미만일 때 방어력이 10% 증가합니다.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "베르세르크 4 강화",
        "buff": "플레이어가 상태 이상(독, 화상, 출혈, 동상, 저주, 약화)일 때 공격력이 25% 증가합니다./â—[응고 강화 4] 출혈 피해가 50% 감소합니다.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "화상정밀공격4",
        "buff": "화상 상태의 상대에 대한 크리티컬 확률이 24% 증가합니다.",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "빠른 턴 4",
        "buff": "회피 발생 시 5초 동안 공격력이 10% 증가합니다.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "HP3 강화",
        "buff": "최대 HP가 10% 증가합니다.",
        "numbers": "hp_percent: 10"
    },
    {
        "name": "가속도 4",
        "buff": "HP가 50% 미만일 때 크리티컬 데미지가 30% 증가합니다.",
        "numbers": "crit_dmg: 30, general_dmg: 30"
    },
    {
        "name": "상태 이상 타격 4",
        "buff": "상태 이상(독, 화상, 출혈, 동상)이 있는 적에 대한 공격 +18%.* 진화 및 최대 돌파",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "스나이프 4",
        "buff": "플레이어를 타겟으로 하지 않는 몬스터에게 데미지가 18% 증가합니다.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "하이 배틀 힐링 4",
        "buff": "3초당 최대 HP 1.5% 회복.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "슬래시 강화 3",
        "buff": "베기에 약한 적에게 주는 피해가 15% 증가합니다.",
        "numbers": "slashDmg: 15, general_dmg: 15"
    },
    {
        "name": "아이시 블레이드 3",
        "buff": "적에게 수속성 데미지 +5%를 줍니다.",
        "numbers": "waterDmg: 5"
    },
    {
        "name": "Battlefield 4의 기적",
        "buff": "크리티컬 데미지 +25%, 크리티컬 확률 증가 버프가 유효합니다.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "화염변환 4",
        "buff": "수속성 적 대미지 -10%, 화속성 적 대미지 25% 증가.",
        "numbers": "fireDmg: 25, general_dmg: 25"
    },
    {
        "name": "지구 전환 4",
        "buff": "바람속성 적 대미지 -10%, 대지속성 대미지 25% 증가.",
        "numbers": "earthDmg: 25, general_dmg: 25"
    },
    {
        "name": "베테랑 검술4",
        "buff": "자신의 레벨에 따라 공격력이 0.17% 증가합니다. (최대 34%)/â—[Black Truth 4] 상태이상(독, 화상, 출혈, 동상) 상태인 적에게 공격 시 추가 데미지 200.",
        "numbers": "additionalDmg: 200"
    },
    {
        "name": "아쿠아 전환 4",
        "buff": "불속성 대미지가 10% 감소하고, 수속성 대미지가 25% 증가합니다.",
        "numbers": "waterDmg: 25, general_dmg: 25"
    },
    {
        "name": "바람 변환 4",
        "buff": "땅속성 적 대미지 -10%, 풍속성 적 대미지 25% 증가.",
        "numbers": "windDmg: 25, general_dmg: 25"
    },
    {
        "name": "블랙 플래시 4",
        "buff": "키리토의 스킬 레코드를 같은 세트로 2개 이상 장착 시 크리티컬 확률이 20% 증가합니다.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "블랙 합동 전투 4",
        "buff": "같은 세트로 키리토의 스킬 레코드를 3개 이상 장착 시 크리티컬 데미지가 15% 증가합니다.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "검은 전설의 검 4",
        "buff": "같은 세트로 키리토의 스킬 레코드를 2개 이상 장착 시 공격력이 15% 증가합니다.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "블랙 컴뱃 4",
        "buff": "키리토의 스킬 레코드를 같은 세트로 3개 이상 장착 시 회피율이 5% 증가합니다. *집중 공격으로는 발동되지 않습니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "검은 요정 4",
        "buff": "키리토의 스킬 레코드를 같은 세트로 2개 이상 장착 시, 최대 HP가 22% 증가합니다.",
        "numbers": "hp_percent: 22"
    },
    {
        "name": "검은 애정 4",
        "buff": "같은 세트로 키리토의 스킬 레코드를 3개 이상 장착 시 크리티컬 확률이 15% 증가합니다.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "레드 코드 4",
        "buff": "자신의 버프가 적용되는 동안 ATK +10%.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "블루 코드 4",
        "buff": "공격력이 감소하는 적에게 주는 데미지가 10% 증가합니다.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "그린 코드 4",
        "buff": "방어력이 감소한 적에게 데미지가 10% 증가합니다.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "샤인 컨버전 4",
        "buff": "어둠속성 적에게 데미지 -10%, 성속성 데미지 25% 증가.",
        "numbers": "holyDmg: 25, general_dmg: 25"
    },
    {
        "name": "사건이 있어요!",
        "buff": "크리티컬 데미지 +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "진실은 단 하나!",
        "buff": "약점을 발견한 적의 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "게일 블레이드 3",
        "buff": "적에게 바람 속성의 데미지가 4.5% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "풀스윙 4",
        "buff": "HP가 75% 이상일 때 크리티컬 확률이 20% 증가합니다.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "저격수의 눈 4",
        "buff": "자신에게 크리티컬 데미지 증가 버프가 적용되면 크리티컬 확률이 35% 증가합니다.",
        "numbers": "crit_rate: 35, general_dmg: 35"
    },
    {
        "name": "요소가 추가됨",
        "buff": "일반 공격에 성속성을 추가합니다. (추가된 속성의 효과는 중복되지 않으며, 어둠, 성성, 땅, 바람, 물, 불의 순으로 우선 적용됩니다.)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "플래시 블레이드 4",
        "buff": "일반 공격의 크리티컬 확률이 35% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "브리즈 4",
        "buff": "키리토의 스킬 레코드를 같은 세트로 1개 이상 장착 시 크리티컬 데미지가 15% 증가합니다.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "피는 꽃 4",
        "buff": "같은 세트에 '리파' 스킬 레코드 2개 이상 장착하여 공격 시 300의 추가 데미지를 줍니다.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "치명적인 무승부 4",
        "buff": "HP가 99% 이상일 때 크리티컬 확률이 50% 증가합니다.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "드래곤의 비검 4",
        "buff": "HP가 99% 이상일 때 공격력이 25% 증가합니다.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "달빛 그림자 암살자 4",
        "buff": "HP가 99% 이상일 때 크리티컬 데미지가 38% 증가합니다.",
        "numbers": "crit_dmg: 38, general_dmg: 38"
    },
    {
        "name": "숨겨진 감정 4",
        "buff": "키리토의 스킬 레코드를 같은 세트로 1개 이상 장착 시 크리티컬 확률 +15%./â—[함께 본 하늘4] 자신의 버프가 적용되는 동안 ATK +10%./â—[힐 강화 4] 힐링 아이템 및 필드 오브젝트 효과가 25% 증가합니다.",
        "numbers": "crit_rate: 15, atk_percent: 10"
    },
    {
        "name": "언니! 4",
        "buff": "아스나의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력 +10%",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "내 소원 4",
        "buff": "회피 시 10초 동안 크리티컬 확률 +15%, 크리티컬 데미지 증가 버프가 추가됩니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "동상 타격 4",
        "buff": "동상에 걸린 적에 대한 공격력이 20% 증가합니다.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "골든벨 4",
        "buff": "자신의 추가 데미지 버프가 적용되는 동안 크리티컬 확률이 20% 증가합니다.",
        "numbers": "additionalDmg: NaN, general_dmg: 20"
    },
    {
        "name": "라이트 매직 4",
        "buff": "자신의 레벨에 따라 DEF가 Ã—0.17% 증가합니다. (최대 34%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "아이시 블레이드 4",
        "buff": "적에게 수속성 피해가 20% 증가합니다.",
        "numbers": "waterDmg: 20"
    },
    {
        "name": "약속했다 4",
        "buff": "키리토의 스킬 레코드를 같은 세트로 1개 이상 장착 시 크리티컬 확률이 20% 증가합니다.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "얼음 옷 3",
        "buff": "동상에 걸리면 방어력이 10% 증가하고 동상 데미지가 15% 감소합니다.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "아이시 링 3",
        "buff": "동상에 걸리면 크리티컬 확률이 20% 증가하고 동상 데미지가 15% 감소합니다.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "전문가 마진 4",
        "buff": "HP가 50% 미만일 때 크리티컬 확률과 크리티컬 데미지가 12% 증가합니다.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "특별훈련 결과 4",
        "buff": "자신의 레벨에 따라 크리티컬 확률이 0.28% 증가합니다. (최대 56%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "용기 4",
        "buff": "버프 효과 중 공격력이 12% 증가하고 크리티컬 데미지가 증가합니다.",
        "numbers": "atk_percent: 12"
    },
    {
        "name": "흔들리는 자신감 4",
        "buff": "크리티컬 데미지가 10% 미만인 경우, 아스나의 스킬 레코드를 3개 이상 동일 세트로 장착하면 효과가 무효화됩니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "약점 공격 3",
        "buff": "크리티컬 데미지 +25%.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "긴장된 심장 4",
        "buff": "크리티컬 확률이 15% 미만일 때 키리토의 스킬 레코드를 3개 이상 같은 세트로 장착하면 효과가 무효화됩니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "어드밴스 트루퍼 3",
        "buff": "공격력 +300.",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "해독제 강화 5",
        "buff": "독 데미지 -70%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "아스나 가득",
        "buff": "아스나의 스킬 레코드를 같은 세트로 3개 이상 장착 시 공격력이 10% 증가합니다. 아스나의 스킬 레코드를 같은 세트로 6개 이상 장착 시 크리티컬 확률이 20% 증가합니다.",
        "numbers": "atk_percent: 10, crit_rate: 20"
    },
    {
        "name": "거인의 건틀렛 4",
        "buff": "자신의 추가 데미지 버프가 적용되는 동안 공격력이 25% 증가합니다.",
        "numbers": "additionalDmg: NaN, general_dmg: 25"
    },
    {
        "name": "4를 기억하세요",
        "buff": "키리토의 스킬 레코드를 같은 세트로 1개 이상 장착 시 크리티컬 확률이 30% 증가합니다.",
        "numbers": "crit_rate: 30"
    },
    {
        "name": "피쉬 킬러 3",
        "buff": "적에게 주는 바람 피해 +10%.",
        "numbers": "windDmg: 10, general_dmg: 10"
    },
    {
        "name": "순수한 목소리",
        "buff": "자신의 HP가 75% 이상일 때 크리티컬 데미지가 20% 증가합니다. [킬러 스마일] 약점을 발견한 적에게 공격력이 20% 증가합니다.",
        "numbers": "crit_dmg: 20, general_dmg: 20, atk_percent: 20"
    },
    {
        "name": "정화의 불꽃 4",
        "buff": "적에게 불 속성의 피해가 22% 증가합니다.",
        "numbers": "fireDmg: 22"
    },
    {
        "name": "팔라딘의 명령 4",
        "buff": "공격력 +10%.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "브레이크 어택 3",
        "buff": "브레이크 사용 시 적에 대한 공격력이 25% 증가합니다.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "간단한 휴식 4",
        "buff": "키리토의 스킬 레코드를 3개 이상 같은 세트로 장착 시 공격력 +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "엄청난 숨결 4",
        "buff": "필드 내에서 물체에 의해 치유되면 공격력이 25% 증가합니다.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "천지의 법칙 4",
        "buff": "필드 내에서 물체에 의해 치유되면 상태 이상(마비, 기절, 수면) 저항이 100% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "짧은 휴식 4",
        "buff": "아스나의 스킬 레코드를 3개 이상 같은 세트로 장착 시 공격력 +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "데빌 스마일 4",
        "buff": "일반 공격의 크리티컬 확률이 20% 감소하고, 일반 공격의 크리티컬 확률이 80% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "어둠의 초대 4",
        "buff": "적에게 어둠속성 데미지가 22% 증가합니다.",
        "numbers": "darkDmg: 22"
    },
    {
        "name": "결의의 눈 4",
        "buff": "유지오의 스킬 레코드를 같은 세트로 1개 이상 장착 시, 공격 시 추가 데미지 +300./...[어택업3] 공격력 +50.",
        "numbers": "additionalDmg: NaN, flat_atk: 50"
    },
    {
        "name": "윌 파워 4",
        "buff": "같은 세트의 앨리스 스킬 레코드 1개 이상 장착 시, 공격 시 추가 데미지 +300./â—[기사의 서약 3] 몬스터 처치 시 자신의 최대 HP가 0.3% 회복됩니다.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "생존의 맹세 4",
        "buff": "아스나의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력이 15% 증가합니다. 같은 세트의 실리카 스킬 레코드를 1개 이상 장착 시, 최대 HP +10%. 리즈벳의 스킬 레코드를 같은 세트로 1개 이상 장착 시 크리티컬 데미지 15% 증가",
        "numbers": "atk_percent: 15, hp_percent: 10, crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Unity 4의 힘",
        "buff": "아스나의 스킬 레코드를 같은 세트로 1개 이상 장착 시, 찌르기에 약한 적에게 주는 데미지 +10%. 같은 세트로 유우키의 스킬 레코드를 2개 이상 장착 시, 참격에 약한 적에게 주는 데미지 +10%.",
        "numbers": "thrustDmg: 10, general_dmg: 20, slashDmg: 10"
    },
    {
        "name": "브리즈 3",
        "buff": "키리토의 스킬 레코드를 같은 세트로 1개 이상 장착 시 크리티컬 데미지가 15% 증가합니다.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "그라운드 댄스 4",
        "buff": "적에게 대지속성 대미지가 22% 증가합니다./â—[해머 3] 디버프 상태(표식, 작은 표식, 죽음의 표식, 찌르기 침식 표식, 슬래시 파괴 표식) 상태의 적에게 1000의 추가 피해를 줍니다.",
        "numbers": "earthDmg: 22, additionalDmg: NaN"
    },
    {
        "name": "가벼운 댄스 4",
        "buff": "적에게 성속성 대미지 22% 증가./â—[헌신 3] HP 75% 이상일 때 공격력 10% 증가.",
        "numbers": "holyDmg: 22, atk_percent: 10"
    },
    {
        "name": "두려움을 없애라 3",
        "buff": "방어+ 버프가 적용되는 동안 공격력이 15% 증가합니다./...[MHCP 3] 공격 시 추가 데미지가 200 증가합니다.",
        "numbers": "atk_percent: 15, additionalDmg: NaN"
    },
    {
        "name": "공지사항 선배 4",
        "buff": "유지오의 스킬 레코드를 같은 세트로 1개 이상 장착 시, 공격력 +12%./â—[계속 의지 4] 자신의 추가 데미지 버프가 적용되는 동안, 공격 시 추가 데미지 +1000.",
        "numbers": "atk_percent: 12, additionalDmg: NaN"
    },
    {
        "name": "베테랑 검술3",
        "buff": "자신의 레벨에 따라 공격력이 0.12% 증가합니다. (최대 24%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "스마일 선물 4",
        "buff": "치명타 시 자신의 최대 HP의 3%를 회복합니다. (스킬당 1회)* 진화 및 최대 돌파",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "카운터 5",
        "buff": "회피 시 버프 추가, 8초 동안 크리티컬 확률 +30%* 진화 및 최대 돌파",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "스탠드오프 5",
        "buff": "HP가 75% 이상일 때 움츠러들기 저항이 60% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "템포 업 5",
        "buff": "공격 횟수에 따라 공격력이 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "스텝인 5",
        "buff": "히트 횟수가 증가할수록 크리티컬 확률이 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "흑인 지배",
        "buff": "같은 세트의 앨리스 스킬 레코드를 장착하지 않으면 공격력이 15% 증가합니다.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "다크 컨버전 4",
        "buff": "성속성 적에게 대미지 -10%, 암흑속성 적 대미지 25% 증가.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "쉬운 전투 4",
        "buff": "스킬 레코드에 따라 HP가 점차 회복되는 버프가 적용되는 동안 공격력이 25% 증가합니다./â—[정확한 공격 부스트 3] 크리티컬 확률을 높이는 버프가 적용되는 동안 크리티컬 확률이 15% 증가합니다.* 진화 및 최대 돌파",
        "numbers": "atk_percent: 25, crit_rate: 15"
    },
    {
        "name": "레클리스 러쉬 4",
        "buff": "자신의 움찔 저항을 높이는 버프가 적용되는 동안 공격력이 25% 증가합니다./â—[브레이킹 피스트 3] 자신의 추가 데미지 버프가 적용되는 동안 크리티컬 확률이 15% 증가합니다.",
        "numbers": "atk_percent: 25, crit_rate: 15, additionalDmg: NaN"
    },
    {
        "name": "Ear 4로 연주하세요",
        "buff": "HP가 50% 이상일 때 공격력 +10%, HP가 50% 미만일 때 방어력 +10%.",
        "numbers": "atk_percent: 10, def_percent: 10"
    },
    {
        "name": "슬래시 2 강화",
        "buff": "참격에 약한 적에게 주는 피해가 10% 증가합니다.",
        "numbers": "slashDmg: 10, general_dmg: 10"
    },
    {
        "name": "추력 강화 2",
        "buff": "찌르기에 약한 적에게 주는 피해가 +10% 증가합니다.",
        "numbers": "thrustDmg: 10, general_dmg: 10"
    },
    {
        "name": "블런트 2 강화",
        "buff": "약한 적부터 둔기까지의 적에게 주는 피해가 +10% 증가합니다.",
        "numbers": "bluntDmg: 10, general_dmg: 10"
    },
    {
        "name": "우후우후!",
        "buff": "버프 효과가 있는 적에 대한 공격력이 18% 증가하고 피해량이 10% 감소합니다.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "우리는 쌍둥이예요!",
        "buff": "버프 효과가 있는 적에게 크리티컬 확률이 20% 증가하고, 크리티컬 데미지가 20% 증가합니다.",
        "numbers": "crit_rate: 20, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "데이터 처리 4",
        "buff": "디버프 상태의 적에게 크리티컬 데미지가 20% 증가합니다.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "데이터 처리 3",
        "buff": "디버프 상태의 적에게 크리티컬 데미지가 15% 증가합니다.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "슬래시 프로텍트 3",
        "buff": "슬래시속성 몬스터에게 12% 데미지 감소.",
        "numbers": "slashRes: 12"
    },
    {
        "name": "마음의 괴도단: 팬더",
        "buff": "조커/스컬/팬서/모나/폭스/퀸/느와르/바이올렛 캐릭터의 스킬 레코드 2개 이상을 세트로 장착 시 추가 데미지 1000 증가.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "마음의 괴도단 모나",
        "buff": "조커/스컬/팬서/모나/폭스/퀸/느와르/바이올렛 캐릭터의 스킬 레코드 2개 이상을 세트로 장착 시 추가 데미지 500 증가.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "마음의 괴도단: 퀸",
        "buff": "조커/스컬/팬서/모나/폭스/퀸/느와르/바이올렛 캐릭터의 스킬 레코드 2개 이상을 세트로 장착 시 추가 데미지 1000 증가.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "파워 라이즈 3",
        "buff": "공격력 +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "공감하는 마음 : 리파",
        "buff": "조커/스컬/팬서/모나/폭스/퀸/느와르/바이올렛 캐릭터의 스킬 레코드를 1개 이상 동일 세트로 장착 시 크리티컬 데미지가 15% 증가합니다.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "동정심 : 유우키",
        "buff": "조커/스컬/팬서/모나/폭스/퀸/느와르/바이올렛 캐릭터의 스킬 레코드를 1개 이상 동일 세트로 장착 시 크리티컬 확률이 15% 증가합니다.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "공감하는 마음: 앨리스",
        "buff": "조커/스컬/팬서/모나/폭스/퀸/느와르/바이올렛 캐릭터의 스킬 레코드 1개 이상을 세트로 장착 시 공격력이 15% 증가합니다.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "게일 블레이드 4",
        "buff": "적에게 바람 속성의 피해가 +20% 증가합니다.",
        "numbers": "windDmg: 20"
    },
    {
        "name": "자동 저장 4",
        "buff": "마비, 기절, 수면, 저주, 쇠약, 석화, 독, 화상, 출혈, 동상 등의 상태 이상일 때 방어력이 25% 증가합니다.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "재능 전환 1",
        "buff": "같은 세트 내 스킬 레코드에 따라 효과가 변경됩니다. 같은 세트의 앨리스 스킬 레코드를 1개 이상 장착 시 3초마다 HP 70 회복. 같은 세트에 앨리스 스킬 레코드를 장착하지 않으면 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "블런트 3 강화",
        "buff": "약한 적부터 둔기까지의 적에게 주는 피해가 +15% 증가합니다.",
        "numbers": "bluntDmg: 15, general_dmg: 15"
    },
    {
        "name": "하이 배틀 힐링 3",
        "buff": "3초당 최대 HP 1.2% 회복.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "등 찌르기 4",
        "buff": "플레이어를 대상으로 하지 않는 몬스터에 대한 데미지가 18% 증가합니다.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "어둠의 지배",
        "buff": "같은 세트의 앨리스 스킬 레코드를 장착하지 않으면 추가 데미지가 1000 증가합니다.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "동상 타격 3",
        "buff": "동상에 걸린 적에 대한 공격력이 18% 증가합니다.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "정의를 위한 전투",
        "buff": "HP가 100%일 때 움츠러들기 저항이 80% 증가합니다. HP가 99% 이하로 떨어지면 3초당 최대 1% HP를 회복합니다.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "상태 이상 타격 3",
        "buff": "상태이상(독, 화상, 출혈, 동상)에 걸린 적에 대한 공격력 +18%./â—[용의 왼쪽 눈] 추가 데미지 +1000.",
        "numbers": "atk_percent: 18, additionalDmg: NaN"
    },
    {
        "name": "중요한 동의 3",
        "buff": "방어력 +400.",
        "numbers": "flat_def: 400"
    },
    {
        "name": "스피릿 컬러",
        "buff": "같은 세트의 스킬 레코드에 따라 효과가 달라집니다. 아스나의 스킬 레코드 1개 이상 장착 시 : 최대 HP +10%. 시논의 스킬 레코드 1개 이상 장착 시 : 공격력 +20%. 리파의 스킬 레코드 1개 이상 장착 시 : 추가 데미지 +500. 앨리스의 스킬 레코드 1개 이상 장착 시 : 크리티컬 확률 +10%. 유지오의 스킬 레코드 1개 이상 장착 시 : 크리티컬 데미지 +10%.",
        "numbers": "hp_percent: 10, atk_percent: 20, additionalDmg: NaN, crit_rate: 10, crit_dmg: 10, general_dmg: 10"
    },
    {
        "name": "어둠의 초대 3",
        "buff": "적에게 어둠속성 데미지가 15% 증가합니다.",
        "numbers": "darkDmg: 15"
    },
    {
        "name": "자동학습4",
        "buff": "같은 세트에 장착된 앨리스의 스킬 레코드 개수에 따라 추가 효과를 추가합니다. 2 이상: 방어력 +5%.3 이상: 최대 HP +10%.4 이상: 크리티컬 확률 +15%.5 이상: 크리티컬 데미지 +15%.6 이상: 공격력 +20%.",
        "numbers": "def_percent: 5, hp_percent: 10, crit_rate: 15, crit_dmg: 15, general_dmg: 15, atk_percent: 20"
    },
    {
        "name": "앨리스가 가득 4",
        "buff": "같은 세트로 앨리스의 스킬 레코드를 3개 이상 장착 시 방어력이 10% 증가합니다. 앨리스의 스킬 레코드를 같은 세트로 6개 이상 장착 시 크리티컬 데미지가 20% 증가합니다.",
        "numbers": "def_percent: 10, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "재능 전환 2",
        "buff": "같은 세트 내 스킬 레코드에 따라 효과가 달라집니다. 같은 세트 내 앨리스의 스킬 레코드를 1개 이상 장착 시 추가 데미지 +1000. 같은 세트 내 앨리스 스킬 레코드를 1개 이상 장착 시 공격력 +20%.",
        "numbers": "additionalDmg: NaN, atk_percent: 20"
    },
    {
        "name": "라이트 코드 4",
        "buff": "버프 효과가 있는 적에게 성속성 데미지가 28% 증가합니다.",
        "numbers": "holyDmg: 28, general_dmg: 28"
    },
    {
        "name": "꿈의 협업",
        "buff": "같은 세트에 있는 유나 스킬 레코드 수의 150배로 공격력이 상승합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "다크 코드 4",
        "buff": "버프 효과가 있는 적에게 암속성 데미지가 28% 증가합니다.",
        "numbers": "darkDmg: 28, general_dmg: 28"
    },
    {
        "name": "어드밴스 트루퍼 4",
        "buff": "공격력 +400.",
        "numbers": "flat_atk: 400"
    },
    {
        "name": "지구의 배상금 3",
        "buff": "중독 시 대지속성 데미지 +40%./â—[해독제강화3] 독데미지 -30%.",
        "numbers": "earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "추력 강화 3",
        "buff": "찌르기에 약한 적에게 주는 피해가 15% 증가합니다.",
        "numbers": "thrustDmg: 15, general_dmg: 15"
    },
    {
        "name": "그라운드 댄스 2",
        "buff": "적에게 대지 속성의 피해가 +9.3% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "약점 공격력 강화 3",
        "buff": "크리티컬 데미지 증가 버프가 적용되는 동안 크리티컬 데미지가 15% 증가합니다.* 진화 및 최대 돌파",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "재능 전환 3",
        "buff": "같은 세트 내 스킬 레코드에 따라 효과가 달라집니다. 같은 세트 내 앨리스의 스킬 레코드를 1개 이상 장착 시 식물 회복량 +10%, 같은 세트 내 앨리스 스킬 레코드를 1개 이상 장착 시 공격력 +20%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "자매애 4",
        "buff": "같은 세트에 있는 리파 스킬 레코드 수 x 5% 크리티컬 데미지가 증가합니다. 같은 세트에 있는 실리카 스킬 레코드 개수에 6% x 공격력이 증가합니다.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "화염배상 3",
        "buff": "화상 시 화속성 데미지 +40%./â—[화상 면역 강화 3] 화상 데미지 -30%.",
        "numbers": "fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "베르세르크3 강화",
        "buff": "플레이어가 상태 이상(독, 화상, 출혈, 동상, 저주, 약화)일 때 공격력 +20%.* 진화 및 최대 돌파",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "어드밴스 트루퍼 5",
        "buff": "공격력 +500.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "다섯 가지 날카로운 무기 3",
        "buff": "추력속성 공격 시 공격력 +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "앞을 잡아라 4",
        "buff": "HP가 50% 미만일 때 3초마다 최대 5%+200 HP를 회복합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "버닝 블로우 3",
        "buff": "화상을 입은 적에 대한 공격력이 18% 증가합니다.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "파워 상승 4",
        "buff": "공격력 +900.",
        "numbers": "flat_atk: 900"
    },
    {
        "name": "얇은 얼음 4",
        "buff": "방어력이 30% 감소하고 버프 효과 중 최대 HP가 증가하는 동안 3초마다 HP가 99% 감소합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "아이시 블레이드 2",
        "buff": "적에게 수속성 데미지 +9.3%를 줍니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "쉬운 전투 3",
        "buff": "스킬 레코드에 따라 HP가 점차 회복되는 버프가 적용되는 동안 공격력이 20% 증가합니다./...[힐 강화 4] 힐링 아이템 및 필드 객체의 효과가 25% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "믿음직한 브로 4",
        "buff": "리파의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "회피 3",
        "buff": "회피율 +7.2%. *집중 공격으로는 발동되지 않습니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "망치 타격 4",
        "buff": "디버프 상태(표식, 작은 표식, 데스 표식, 찌르기 침식 표식, 슬래시 파괴 표식) 상태의 적에 대해 약한~둔기에 대한 피해량이 30% 증가합니다.",
        "numbers": "bluntDmg: 30, general_dmg: 30"
    },
    {
        "name": "성난 황소 3",
        "buff": "공격 디버프가 있는 적에게 데미지가 18% 증가합니다.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "분노한 종마 3",
        "buff": "방어 디버프가 있는 적에게 데미지가 18% 증가합니다.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "솟아오르는 검령 4",
        "buff": "같은 세트의 유우키 스킬 레코드 수 x 3.5%만큼 공격력이 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "활력 4",
        "buff": "같은 세트의 에길의 스킬 레코드를 2개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "게일 블레이드 2",
        "buff": "적에게 바람속성 대미지가 9.3% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "가속 3",
        "buff": "HP가 50% 미만일 때 크리티컬 데미지가 20% 증가합니다.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "블러디 배틀 스트라이크 3",
        "buff": "둔기 속성으로 공격 시 공격력이 35% 증가합니다.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "강철 송곳니 4",
        "buff": "추력속성 공격 시 공격력 +500.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "화염 증폭 4",
        "buff": "적에게 주는 불 이외의 속성 데미지 -50%, 적에게 화속성 데미지 40% 증가.",
        "numbers": "waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "전설의 검의 법칙",
        "buff": "같은 세트에 키리토의 스킬 레코드를 장착하지 않으면 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "화염변환3",
        "buff": "수속성 대미지가 10% 감소하고, 화속성 적 대미지가 20% 증가합니다.",
        "numbers": "fireDmg: 20, general_dmg: 20"
    },
    {
        "name": "친구 만나기",
        "buff": "같은 세트의 아스나 스킬 레코드를 3개 이상 장착 시 3초마다 HP 80 회복.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "부적합 4",
        "buff": "방어력 -30% 및 최대 HP 증가 버프 효과 중 일반 공격 사용 시 공격 및 피해량 -99%* 진화 및 최대돌파",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "바다의 신 4",
        "buff": "시논의 스킬 레코드를 같은 세트로 3개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "그라운드 댄스 5",
        "buff": "적에게 대지 속성의 피해가 +25% 증가합니다.",
        "numbers": "earthDmg: 25"
    },
    {
        "name": "재능 전환 4",
        "buff": "같은 세트의 스킬 레코드에 따라 효과가 달라집니다. 같은 세트의 키리토 스킬 레코드를 1개 이상 장착하면 화상 성공률이 + 증가합니다. 같은 세트에 키리토 스킬 레코드를 장착하지 않으면 참격에 약한 적에게 주는 대미지가 30% 증가합니다.",
        "numbers": "slashDmg: 30, general_dmg: 30"
    },
    {
        "name": "올인블랙 4",
        "buff": "같은 세트에 장착된 키리토의 스킬 레코드 개수에 따라 추가 효과를 추가합니다. 2개 이상: 3초당 최대 HP 1.2% 회복.3 이상: 최대 HP +5%.4 이상: 크리티컬 확률 +10%.5 이상: 크리티컬 데미지 +10%.6 이상: 공격력 +15%.",
        "numbers": "hp_percent: 5, crit_rate: 10, crit_dmg: 10, general_dmg: 10, atk_percent: 15"
    },
    {
        "name": "블러디 블로우 3",
        "buff": "출혈 중인 적에 대한 공격력이 18% 증가합니다.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "더 많은 Deban 1",
        "buff": "리즈벳의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력 +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "자동 저장 2",
        "buff": "마비, 기절, 수면, 저주, 쇠약, 석화, 독, 화상, 출혈, 동상 등의 상태이상일 때 방어력이 15% 증가합니다.",
        "numbers": "def_percent: 15"
    },
    {
        "name": "빛의 배상 3",
        "buff": "쇠약해지면 성속성 데미지가 40% 증가합니다.",
        "numbers": "holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "철권의 처벌 4",
        "buff": "둔기 속성 공격 시 공격력 +500.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "킹 오브 메이스 3",
        "buff": "1H 클럽 장착 시 공격력 +1000",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "시스템에 반항하다 4",
        "buff": "아스나의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력 +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "조잡한 전술 2",
        "buff": "방어력 -30%, HP가 50% 미만일 때 무속성 데미지 -400%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "윈드 부스트 4",
        "buff": "적에게 주는 바람 이외의 속성 데미지 -50%, 적에게 주는 바람 속성 데미지 +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, windDmg: 40, general_dmg: 40"
    },
    {
        "name": "블랙팬서 4",
        "buff": "사치의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "다크 부스트 4",
        "buff": "적에게 주는 암속성 이외의 속성 데미지 -50%, 적에게 암속성 데미지 +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, noneDmg: -50, darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "근접 4로 전환",
        "buff": "같은 세트에 시논의 스킬 레코드를 장착하지 않으면 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "더 많은 Deban 2",
        "buff": "실리카의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력 +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "섀도우 배상 3",
        "buff": "저주에 걸렸을 때 암흑속성 데미지가 40% 증가합니다.",
        "numbers": "darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "저주 카운터 4",
        "buff": "플레이어가 상태 이상(저주)일 때 공격력 +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "맹공격 4",
        "buff": "공격력 +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "아이스 배상 3",
        "buff": "동상에 걸리면 물속성 피해량이 40% 증가합니다./â—[동상 강화 3] 동상 피해량이 30% 감소합니다.",
        "numbers": "waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "크러싱 임팩트 3",
        "buff": "둔기 속성 공격 시 공격력 +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "아쿠아 부스트 4",
        "buff": "적에게 주는 물 이외의 속성 데미지 -50%, 적에게 물 속성 데미지 +40%.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "자동 저장 3",
        "buff": "마비, 기절, 수면, 저주, 쇠약, 석화, 독, 화상, 출혈, 동상 등의 상태 이상일 때 방어력이 20% 증가합니다.",
        "numbers": "def_percent: 20"
    },
    {
        "name": "번영 4",
        "buff": "HP가 50% 이상일 때 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "동상 타격 5",
        "buff": "동상에 걸린 적에 대한 공격력이 30% 증가합니다.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "화신: 포스 4",
        "buff": "같은 세트의 앨리스 스킬 레코드를 3개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "중요한 동의 4",
        "buff": "방어력 +450.",
        "numbers": "flat_def: 450"
    },
    {
        "name": "공격력 강화 5",
        "buff": "공격력 +18%.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "빠르고 쉬움",
        "buff": "플린치 저항을 100% 감소시킵니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "신나는 4",
        "buff": "최대 HP 증가 버프 효과 중 방어력 -30% 및 크리티컬 데미지 -300%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "정화의 불꽃 3",
        "buff": "적에게 불 속성의 피해가 +15% 증가합니다.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "반대하는 마음 3",
        "buff": "버프 효과가 있는 적에 대한 공격력 +18%",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "불꽃의 공명 4",
        "buff": "버프 효과가 있는 적에게 화속성 데미지가 30% 증가합니다.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "킹 오브 스피어스 3",
        "buff": "2H 스피어 사용 시 공격력 +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "샤인 부스트 4",
        "buff": "적에게 주는 성속성 이외의 속성 데미지 -50%, 적에게 성속성 데미지 +40%.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, darkDmg: -50, noneDmg: -50, holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "훈련 결과 4",
        "buff": "자신의 레벨에 따라 크리티컬 데미지 증가 Ã— 0.14% (최대 28%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "여섯 가지 길 4",
        "buff": "같은 세트의 스킬 레코드에 따라 효과가 달라집니다. 키리토 스킬 레코드 2개 장착 시: 적에게 대지 속성 대미지 +40%. 키리토 스킬 레코드 3개 장착 시: 적에게 풍속성 데미지 +40%. 키리토 스킬 레코드 4개 장착 시: 적에게 화속성 데미지 +40%. 키리토 스킬 레코드 5개 장착 시: 적에게 물속성 데미지 +40%. 키리토 스킬 레코드 6개 장착 시: 적에게 성속성 데미지 +50%. 키리토 스킬 레코드 7개 장착 시: 적에게 암속성 데미지 +50%.",
        "numbers": "earthDmg: 40, windDmg: 40, fireDmg: 40, waterDmg: 40, holyDmg: 50, darkDmg: 50"
    },
    {
        "name": "외국인 친구 1",
        "buff": "같은 세트의 레인 스킬 레코드 수의 200배로 공격력이 상승합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "열흡입 3",
        "buff": "플레이어가 상태 이상(화상)일 때 공격력이 40% 증가합니다./â—[화상 면역 강화 3] 화상 데미지가 30% 감소합니다.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "쥐의 정보 4",
        "buff": "아르고의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "정면 공격 4",
        "buff": "공격 적중 시 어그로 증가 -40%",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "유연성 4",
        "buff": "HP가 100%일 때 석화 저항이 80% 증가합니다. HP가 99% 이하로 떨어지면 3초당 최대 1% HP를 회복합니다.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "도끼의 왕 3",
        "buff": "2H Axe 사용 시 공격력 +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "추력 보호 3",
        "buff": "추진속성 12% 몬스터에게 받는 데미지 감소.",
        "numbers": "thrustRes: 12"
    },
    {
        "name": "자동 학습 5",
        "buff": "같은 세트에 장착된 앨리스의 스킬 레코드 개수에 따라 추가 효과를 추가합니다. 2 이상: 크리티컬 확률 +20%.3 이상: 방어력 +5%.4 이상: 최대 HP +10%.5 이상: 크리티컬 데미지 +20%.6 이상: 공격력 +35%.",
        "numbers": "crit_rate: 20, def_percent: 5, hp_percent: 10, crit_dmg: 20, general_dmg: 20, atk_percent: 35"
    },
    {
        "name": "슈퍼 럭키!",
        "buff": "적이 받는 다음 공격이 1% 확률로 2.5배의 피해를 줍니다.(다른 파티원의 공격에도 적용됩니다. 발동하지 않으면 10초 후 효과가 사라집니다.)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "럭키!",
        "buff": "10초 동안 25% 확률로 크리티컬 확률 +50%.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "불확실한 행운!",
        "buff": "30초 동안 75% 공격 확률 +7%.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "어 오!",
        "buff": "5% 확률로 자신에게 20초 동안 저주를 겁니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "어스 부스트 4",
        "buff": "적에게 대지 이외의 속성 데미지 -50%, 적에게 대지 속성 데미지 40% 증가.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "재능 전환 5",
        "buff": "같은 세트의 스킬 레코드에 따라 효과가 달라집니다. 같은 세트의 키리토 스킬 레코드를 1개 이상 장착 시 동상 성공률 +. 같은 세트의 키리토 스킬 레코드를 장착하지 않으면 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "무대 담당자 4",
        "buff": "코하루의 스킬 레코드를 같은 세트로 2개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "그림자 배상 1",
        "buff": "저주에 걸렸을 때 암속성 데미지가 25% 증가합니다.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "단검의 왕 3",
        "buff": "단검 사용 시 공격력 +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "아이스플라워 4",
        "buff": "유지오의 스킬 레코드를 같은 세트로 2개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "블러디 배틀 슬래시 3",
        "buff": "슬래시속성 공격 시 공격력 +35%.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "지구 축적 3",
        "buff": "같은 세트의 클라인 스킬 레코드 수 x 10%만큼 땅속성 데미지가 증가합니다.",
        "numbers": "earthDmg: 10"
    },
    {
        "name": "아쿠아 전환 5",
        "buff": "불속성 대미지가 15% 감소하고, 수속성 대미지가 30% 증가합니다.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "전술고문 4",
        "buff": "유이의 스킬 레코드를 같은 세트로 2개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "사격술 3",
        "buff": "시논의 스킬 레코드를 같은 세트로 2개 이상 장착 시 공격력이 20% 증가합니다.* 진화 및 최대 돌파",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "헤일로 3",
        "buff": "방어력 -30%, 최대 HP 증가 버프 효과 중 적중률 -30%",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "가중 슬래시 3",
        "buff": "같은 세트의 이디스 스킬 레코드 수 x 20%만큼 슬래시 속성 약점에 대한 데미지가 증가합니다.",
        "numbers": "slashDmg: 20"
    },
    {
        "name": "만개 3",
        "buff": "같은 세트의 이디스 스킬 레코드를 4개 이상 장착 시 공격력 +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "충전 손실 1",
        "buff": "방어력 -30%, HP가 50% 미만일 때 찌르기에 약한 적에게 데미지 -1000%* 진화 및 최대 돌파",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "지구 흡입 3",
        "buff": "플레이어가 상태 이상(독)일 때 공격력이 35% 증가합니다./...[해독 강화 3] 독 데미지가 30% 감소합니다.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "킹 오브 레이피어 3",
        "buff": "1H 레이피어 사용 시 공격력 +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "바람 변환 5",
        "buff": "땅속성 대미지가 15% 감소하고, 바람속성 적 대미지가 30% 증가합니다.",
        "numbers": "windDmg: 30, general_dmg: 30"
    },
    {
        "name": "검은 검객 3",
        "buff": "키리토의 스킬 레코드를 같은 세트로 2개 이상 장착 시 공격력이 20% 증가합니다.* 진화 및 최대 돌파",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "슈퍼 강화 힐",
        "buff": "힐링아이템과 필드오브젝트의 효과가 100% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "피크 3",
        "buff": "HP가 80% 이상일 때 공격력이 40% 증가합니다.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "외국인 친구 2",
        "buff": "같은 세트의 레인 스킬 레코드 수의 250배로 공격력이 상승합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "날카로운 칼날 4",
        "buff": "같은 세트의 아스나 스킬 레코드 수 x 6%만큼 공격력이 증가합니다.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "지구의 배상금 2",
        "buff": "중독 시 대지속성 데미지가 35% 증가합니다.",
        "numbers": "earthDmg: 35, general_dmg: 35"
    },
    {
        "name": "화상 카운터 3",
        "buff": "플레이어가 상태이상(화상) 상태일 때, 공격력 +1000./â—[화상 면역 강화 2] 화상 데미지 -10%.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "스파이스홀릭 3",
        "buff": "키리토의 스킬 레코드를 같은 세트로 2개 이상 장착 시 공격력이 20% 증가합니다.* 진화 및 최대 돌파",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "가속 치유 4",
        "buff": "3초당 최대 HP 4% 회복.",
        "numbers": "hp_regen: 4"
    },
    {
        "name": "지구 전환 5",
        "buff": "바람속성 적에게 주는 데미지 -15%, 땅속성 적에게 주는 데미지 +30%.",
        "numbers": "earthDmg: 30, general_dmg: 30"
    },
    {
        "name": "소드 데몬 4",
        "buff": "아스나의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력 +20%* 진화 및 최대 돌파",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Ear 5로 연주하세요",
        "buff": "HP가 50% 이상일 때 공격력이 25% 증가하고, HP가 50% 미만일 때 방어력이 15% 증가합니다.",
        "numbers": "atk_percent: 25, def_percent: 15"
    },
    {
        "name": "블러디 배틀 슬래시 4",
        "buff": "슬래시 속성 공격 시 공격력 +40%.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "운반 3",
        "buff": "키리토의 스킬 레코드를 4개 이상 같은 세트로 장착 시 공격력 +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "서리 흡입 4",
        "buff": "플레이어가 상태 이상(동상)일 때 공격력이 50% 증가합니다./â—[동상 강화 3] 동상 피해가 30% 감소합니다.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "평정심 3",
        "buff": "동상에 걸렸을 때 적중률 +30%.",
        "numbers": "hit_rate: 30"
    },
    {
        "name": "얼음의 공명 4",
        "buff": "버프 효과가 있는 적에게 수속성 피해가 30% 증가합니다.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "다크 컨버전 5",
        "buff": "성속성 적에게 주는 데미지 -15%, 어둠속성 적에게 주는 데미지 +30%.",
        "numbers": "darkDmg: 30, general_dmg: 30"
    },
    {
        "name": "섀도우 배상 2",
        "buff": "저주에 걸렸을 때 암속성 데미지가 35% 증가합니다.",
        "numbers": "darkDmg: 35, general_dmg: 35"
    },
    {
        "name": "출혈 카운터 3",
        "buff": "플레이어가 상태 이상(출혈)일 때 공격력 +1000./â—[응고 강화 2] 출혈 데미지 -10%.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "출혈 카운터 4",
        "buff": "플레이어가 상태이상(출혈)일 때 공격력 +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "바람의 보상 3",
        "buff": "플레이어가 상태 이상(출혈)일 때 풍속성 데미지가 40% 증가합니다.",
        "numbers": "windDmg: 40, general_dmg: 40"
    },
    {
        "name": "댐을 무너뜨려라 3",
        "buff": "적의 브레이크 게이지량이 30% 증가합니다.",
        "numbers": "break_pct: 30"
    },
    {
        "name": "어둠의 축적 3",
        "buff": "같은 세트의 싼야 스킬 레코드 수 x 10%만큼 어둠속성 데미지가 증가합니다.",
        "numbers": "darkDmg: 10"
    },
    {
        "name": "블러디 배틀 스트라이크 4",
        "buff": "둔기 속성으로 공격 시 공격력이 40% 증가합니다.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "화염 축적 3",
        "buff": "같은 세트의 아스나 스킬 레코드 수 x 10%만큼 화속성 데미지가 증가합니다.",
        "numbers": "fireDmg: 10"
    },
    {
        "name": "버닝 블로우 5",
        "buff": "화상을 입은 적에 대한 공격력이 30% 증가합니다.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "화염변환 5",
        "buff": "수속성 대미지가 15% 감소하고, 화속성 적 대미지가 30% 증가합니다.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "무술가 3",
        "buff": "같은 세트로 리파의 스킬 레코드를 2개 이상 장착 시 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "맹공격 1",
        "buff": "공격력 +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "블러디 배틀 스러스트 3",
        "buff": "스러스트 속성으로 공격 시 공격력이 35% 증가합니다.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "헬파이어 4",
        "buff": "같은 세트의 키리토 스킬 레코드 수만큼 공격력이 7% 증가합니다.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "번영 5",
        "buff": "HP가 50% 이상일 때 공격력이 25% 증가합니다.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "피어스 4",
        "buff": "찌르기에 약한 적에게 주는 피해가 25% 증가합니다.",
        "numbers": "thrustDmg: 25, general_dmg: 25"
    },
    {
        "name": "평정심 1",
        "buff": "동상에 걸렸을 때 명중률 +10%./â—[동상 강화 2] 동상 데미지 -10%.",
        "numbers": "hit_rate: 10"
    },
    {
        "name": "서리 축적 4",
        "buff": "같은 세트의 이디스 스킬 레코드 개수 x 12.5%만큼 수속성 데미지가 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "고급 레이피어 기술 3",
        "buff": "한H 레이피어 사용 시 비속성 데미지가 25% 증가합니다.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "공기 흡입 4",
        "buff": "플레이어가 상태 이상(출혈)일 때 공격력이 50% 증가합니다./â—[응고 강화 3] 출혈 피해가 30% 감소합니다.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "강풍의 포효 4",
        "buff": "적에게 바람 속성의 피해가 +15% 증가합니다.",
        "numbers": "windDmg: 15"
    },
    {
        "name": "독극물 카운터 4",
        "buff": "플레이어가 상태이상(독)일 때 공격력 +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "이등분 4",
        "buff": "베기에 약한 적에게 주는 피해가 25% 증가합니다.",
        "numbers": "slashDmg: 25, general_dmg: 25"
    },
    {
        "name": "동상 카운터 4",
        "buff": "플레이어가 상태이상(동상)일 때 공격력 +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "열 축적 4",
        "buff": "같은 세트의 아스나 스킬 레코드 수 x 12.5% 만큼 화속성 데미지가 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "황금 기회 4",
        "buff": "크리티컬 데미지 +50%.",
        "numbers": "crit_dmg: 50, general_dmg: 50"
    },
    {
        "name": "피어싱 서지 3",
        "buff": "같은 세트 내 LLENN 스킬 레코드 개수 x 20%만큼 추력 속성 약화 데미지가 증가합니다.",
        "numbers": "thrustDmg: 20"
    },
    {
        "name": "사이버마인드 2",
        "buff": "같은 세트에 있는 유이 스킬 레코드 수 x 7% 공격력이 증가합니다.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "성검 공세",
        "buff": "같은 세트의 히스클리프 스킬 레코드 수 x 10% 공격력이 증가합니다.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "봉쇄1",
        "buff": "모든 속성 피해는 같은 세트의 아스나 스킬 레코드 수 x 100% 감소합니다(비속성 포함).",
        "numbers": "fireDmg: -100, waterDmg: -100, windDmg: -100, earthDmg: -100, holyDmg: -100, darkDmg: -100, noneDmg: -100"
    },
    {
        "name": "놀라운 반응",
        "buff": "회피율 +16%. *집중 공격으로는 발동되지 않습니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "블러디 배틀 스러스트 4",
        "buff": "스러스트 속성으로 공격 시 공격력이 40% 증가합니다.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "발리언트 3",
        "buff": "같은 세트로 유이의 스킬 레코드를 3개 이상 장착 시 공격력 +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "맹목적인 믿음",
        "buff": "같은 세트에 있는 유나 스킬 레코드 수 x 7% 공격력이 증가합니다.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "눈에 띄는 서지 2",
        "buff": "같은 세트의 에길 스킬 레코드 수 x 8%만큼 둔기 속성 약점에 대한 데미지가 증가합니다.",
        "numbers": "bluntDmg: 8"
    },
    {
        "name": "상인 엘리트 4",
        "buff": "같은 세트로 에길의 스킬 레코드를 5개 이상 장착 시 공격력 +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "지구 흡입 4",
        "buff": "플레이어가 상태 이상(독)일 때 공격력이 50% 증가합니다./...[해독 강화 3] 독 데미지가 30% 감소합니다.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "접지 펄스 4",
        "buff": "적에게 대지 속성의 피해가 +15% 증가합니다.",
        "numbers": "earthDmg: 15"
    },
    {
        "name": "샤인 컨버전 5",
        "buff": "어둠속성 적에게 주는 데미지 -15%, 성속성 적에게 주는 데미지 +30%.",
        "numbers": "holyDmg: 30, general_dmg: 30"
    },
    {
        "name": "더 많은 Deban 4",
        "buff": "실리카의 스킬 레코드를 같은 세트로 1개 이상 장착 시 공격력 +20%",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "에이스 오브 단검 4",
        "buff": "단검 사용 시 공격력이 40% 증가합니다.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "충성스러운 친구 2",
        "buff": "같은 세트에 포함된 싼야 스킬 레코드 수 x 7%만큼 공격력이 증가합니다.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "기절 해상도를 향상시킵니다. 3",
        "buff": "â— 기절 저항 +30%.",
        "numbers": "stunRes: 30"
    },
    {
        "name": "약화 해상도를 향상시킵니다. 3",
        "buff": "â— 약화 저항 +30%",
        "numbers": "debilityRes: 30"
    },
    {
        "name": "아이스 배상 2",
        "buff": "동상에 걸리면 물 속성 데미지가 35% 증가합니다.",
        "numbers": "waterDmg: 35, general_dmg: 35"
    },
    {
        "name": "정면 공격 5",
        "buff": "공격 적중 시 어그로가 50% 증가합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "깊은 애정 4",
        "buff": "같은 세트에 포함된 아스나 스킬 레코드 수 x 4% 방어력이 증가합니다. 같은 세트에 포함된 리파 스킬 레코드 수 x 공격이 7% x 증가합니다.",
        "numbers": "def_percent: 4, atk_percent: 7"
    },
    {
        "name": "빛의 축적 3",
        "buff": "같은 세트의 시논 스킬 레코드 수 x 10%만큼 성속성 데미지가 증가합니다.",
        "numbers": "holyDmg: 10"
    },
    {
        "name": "모순 3",
        "buff": "같은 세트에 히스클리프 스킬 레코드를 장착하지 않으면 공격력이 20% 증가합니다.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "신성한 칼날 보호",
        "buff": "같은 세트에 포함된 히스클리프 스킬 레코드 수 x 방어력이 5% 증가합니다.",
        "numbers": "def_percent: 5"
    },
    {
        "name": "전투상처 감소 5",
        "buff": "베기, 찌르기, 둔기속성 몬스터에게 주는 피해와 상태이상 피해가 5% 감소합니다.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "아쿠아 부스트 5",
        "buff": "적에게 주는 물 이외의 속성 데미지 -50%(비속성 포함), 적에게 주는 물 속성 데미지 +45%.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 45, general_dmg: 45"
    },
    {
        "name": "화상 적중 강화 5",
        "buff": "â— +굽기 성공률.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "불속성 강화4/버프",
        "buff": "15초 동안 불속성 데미지 +9.00%.",
        "numbers": "fireDmg: 9"
    },
    {
        "name": "작은 표식/디버프",
        "buff": "적이 받는 다음 공격은 1.5배의 피해를 입힙니다.",
        "numbers": "general_dmg: 50"
    },
    {
        "name": "플레임 포스 4/버프",
        "buff": "15초 동안 불속성 피해량이 15.00% 증가합니다.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "다크엘리먼트 강화4/버프",
        "buff": "15초간 암흑속성 데미지 +9.00%",
        "numbers": "darkDmg: 9"
    }
];
