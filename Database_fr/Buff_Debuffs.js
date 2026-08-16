// Buff / Debuffs Database (fr)
const buffDebuffData = [
    {
        "name": "Améliorer l'attaque 4",
        "buff": "Attaque +4%",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "Améliorer la défense 4",
        "buff": "Défense +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Attaque de faiblesse 1",
        "buff": "Dégâts critiques +6%.",
        "numbers": "crit_dmg: 6, general_dmg: 6"
    },
    {
        "name": "Améliorer la barre oblique 1",
        "buff": "Dégâts infligés aux ennemis faibles à tranchant +6%.",
        "numbers": "slashDmg: 6, general_dmg: 6"
    },
    {
        "name": "Améliorer la poussée 1",
        "buff": "Dégâts infligés aux ennemis faibles à la poussée +6%.",
        "numbers": "thrustDmg: 6, general_dmg: 6"
    },
    {
        "name": "Améliorer Blunt 1",
        "buff": "Dégâts infligés aux ennemis faibles à émoussés +6%.",
        "numbers": "bluntDmg: 6, general_dmg: 6"
    },
    {
        "name": "Attaque de faiblesse 2",
        "buff": "Dégâts critiques +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Courage 4",
        "buff": "Défense +50 % lorsque les PV sont <25 %.",
        "numbers": "def_percent: 50"
    },
    {
        "name": "Dévotion 4",
        "buff": "Attaque +20 % lorsque les PV sont >75 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Améliorer la poussée 4",
        "buff": "Dégâts infligés aux ennemis faibles à la poussée +24%.",
        "numbers": "thrustDmg: 24, general_dmg: 24"
    },
    {
        "name": "Améliorer l'attaque 3",
        "buff": "Attaque +4%.",
        "numbers": "atk_percent: 4"
    },
    {
        "name": "Améliorer la défense 2",
        "buff": "Défense +8%.",
        "numbers": "def_percent: 8"
    },
    {
        "name": "Améliorer l'attaque 2",
        "buff": "Attaque +8%.",
        "numbers": "atk_percent: 8"
    },
    {
        "name": "Améliorer HP 2",
        "buff": "PV maximum +8%.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "Taureau enragé 2",
        "buff": "Dégâts +12% sur les ennemis avec debuff d'attaque.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "Étalon enragé 2",
        "buff": "Dégâts +12% sur les ennemis avec debuff de défense.",
        "numbers": "general_dmg: 12"
    },
    {
        "name": "Améliorer Blunt 4",
        "buff": "Dégâts infligés aux ennemis faibles à contondants +24%.",
        "numbers": "bluntDmg: 24, general_dmg: 24"
    },
    {
        "name": "Coup brûlant 4",
        "buff": "L'attaque contre les ennemis brûlés augmente de 24%.",
        "numbers": "general_dmg: 24"
    },
    {
        "name": "Améliorer Slash 4",
        "buff": "Dégâts infligés aux ennemis faibles à tranchant +24%.",
        "numbers": "slashDmg: 24, general_dmg: 24"
    },
    {
        "name": "Fluff Étape 4",
        "buff": "Défense+ à chaque coup.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Coup venimeux 4",
        "buff": "Attaque +24% contre les ennemis empoisonnés.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "Persistance 4",
        "buff": "Attaque +20 % à moins de 50 % de vos propres PV. ",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Taureau enragé 4",
        "buff": "Dégâts +25% sur les ennemis avec debuff d'attaque.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Étalon enragé 4",
        "buff": "Dégâts +25% sur les ennemis avec debuff de défense.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Slash protéger 4",
        "buff": "Réduisez les dégâts du monstre à élément slash de 15%.",
        "numbers": "slashRes: 15"
    },
    {
        "name": "Améliorer la défense 3",
        "buff": "Défense +4%.",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Saignement puissant, objectif 4",
        "buff": "Les chances de saignement augmentent considérablement. [Précision Saignement 4] Taux de critique +24% sur le saignement. ",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "Coup sanglant 4",
        "buff": "Attaque +24% contre les ennemis qui saignent.",
        "numbers": "atk_percent: 24"
    },
    {
        "name": "Attaque de faiblesse 4",
        "buff": "Dégâts critiques +12%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Intervention 4",
        "buff": "Augmente le taux de critique à mesure que le nombre de HITS augmente.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Protection contre la poussée 4",
        "buff": "Réduisez les dégâts du monstre à élément de poussée de 15%.",
        "numbers": "thrustRes: 15"
    },
    {
        "name": "Réanimation 4",
        "buff": "Lorsque les HP sont inférieurs à 50 %, le taux de critique augmente de 30 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Protection émoussée 4",
        "buff": "Réduisez les dégâts de 15 % des monstres à éléments contondants. [Améliorer la Défense 3] Défense +4%. ",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Volonté en acier 4",
        "buff": "Les dégâts diminuent à 20 % lorsque les PV sont de 25 % ou moins. [Améliorer la Défense 3] Défense +4%. ",
        "numbers": "def_percent: 4"
    },
    {
        "name": "Attaque précise 3",
        "buff": "Taux critique +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "Plein de Yuuki 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences ou plus de Yuuki dans le même ensemble, Défense +8 %. Lorsque vous équipez 5 ou plus des enregistrements de compétences de Yuuki dans le même ensemble, attaque +8 %.",
        "numbers": "def_percent: 8, atk_percent: 8"
    },
    {
        "name": "Attaque précise 4",
        "buff": "Taux critique +10%.",
        "numbers": "crit_rate: 10"
    },
    {
        "name": "Améliorer HP 4",
        "buff": "Augmentation des HP maximum de 8%.",
        "numbers": "hp_percent: 8"
    },
    {
        "name": "Élixir de géant",
        "buff": "Les objets et objets de récupération sur les champs diminuent le taux de récupération de 50 % et les PV maximum augmenteront de 30 %.",
        "numbers": "hp_percent: 30"
    },
    {
        "name": "Cadeau de fleurs 4",
        "buff": "Lorsque vous êtes soigné dans le champ par un objet, l'attaque et la défense augmentent de 10 %.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Parfum de fleur 4",
        "buff": "L'activation critique augmente de 35 % lorsque vous soignez avec un objet sur le terrain. ",
        "numbers": "crit_rate: 35"
    },
    {
        "name": "Efface ta peur 4",
        "buff": "Tant que le buff de défense+ est efficace, la puissance d'attaque augmentera de 25 %. ",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Contrôle des foules 4",
        "buff": "Attaque +8% envers l'ennemi dans les afflictions de statut (Poison, Brûlure, Saignement, Engelure), dégâts de l'ennemi dans les Altérations de statut (Poison, Brûlure, Saignement, Engelure) -8%.",
        "numbers": "atk_percent: 8, allRes: 8"
    },
    {
        "name": "Possibilité d'attaque 4",
        "buff": "Dégâts critiques sur l'ennemi +20% tandis que la puissance d'attaque de l'ennemi diminue.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "Possibilité de défense 4",
        "buff": "Taux d'activation critique +20% tandis que la puissance de défense de l'ennemi diminue.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Esprit combatif 4",
        "buff": "Alors que buff attaque+ est efficace, défense +25%.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "Évasion 4",
        "buff": "Taux d'évasion +10%. *Il ne sera pas activé avec l'attaque focalisée./â—[Contre 4] Ajoute un buff lors de l'évasion, +10% de taux critique pendant 5 secondes.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Briser l'attaque 4",
        "buff": "Attaque +35% sur les ennemis lors de l'utilisation du break.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Encercler la pause 3",
        "buff": "Augmentation de la jauge de bris envers l'ennemi de +25%",
        "numbers": "break_pct: 25"
    },
    {
        "name": "Résister 4",
        "buff": "Maladies de statut (Poison, Brûlure, Saignement, Engelure) Rés. +10%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Courage 3",
        "buff": "Défense +10 % lorsque les PV sont <25 %.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Améliorer Berserk 4",
        "buff": "Lorsque le joueur souffre d'une maladie de statut (Poison, Brûlure, Saignement, Engelure, Malédiction, Débilité), Attaque +25%./â—[Améliorer la coagulation 4] Dégâts de saignement -50%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Graver une attaque de précision4",
        "buff": "Taux de critique +24% envers les adversaires brûlés.",
        "numbers": "crit_rate: 24"
    },
    {
        "name": "Tour rapide 4",
        "buff": "Attaque +10% pendant 5 secondes en cas d'évasion.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Améliorer HP 3",
        "buff": "Augmentation des HP maximum de 10 %.",
        "numbers": "hp_percent: 10"
    },
    {
        "name": "Accélération 4",
        "buff": "Dégâts critiques +30 % lorsque les PV sont inférieurs à 50 %.",
        "numbers": "crit_dmg: 30, general_dmg: 30"
    },
    {
        "name": "Maladies de statut Coup 4",
        "buff": "Attaque +18 % contre les ennemis souffrant d'altérations de statut (Poison, Brûlure, Saignement, Engelure).* Évolution et percée maximale",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Bécassine 4",
        "buff": "Montant des dégâts +18% envers les monstres ne ciblant pas le joueur.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Guérison de combat élevée 4",
        "buff": "Récupère un maximum de 1,5% de HP toutes les 3 secondes.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Améliorer Slash 3",
        "buff": "Dégâts infligés aux ennemis faibles à tranchant +15%.",
        "numbers": "slashDmg: 15, general_dmg: 15"
    },
    {
        "name": "Lame glacée 3",
        "buff": "Inflige +5% de dégâts de l'élément Eau à l'ennemi.",
        "numbers": "waterDmg: 5"
    },
    {
        "name": "Miracle sur Battlefield 4",
        "buff": "Dégâts critiques +25%, tandis que l'augmentation du buff du taux critique est efficace.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "Conversion de flamme 4",
        "buff": "Dégâts de l'élément eau sur les ennemis -10 % et dégâts de l'élément feu sur les ennemis +25 %.",
        "numbers": "fireDmg: 25, general_dmg: 25"
    },
    {
        "name": "Conversion de la Terre 4",
        "buff": "Dégâts de l'élément vent sur les ennemis -10 % et dégâts de l'élément terre sur les ennemis +25 %.",
        "numbers": "earthDmg: 25, general_dmg: 25"
    },
    {
        "name": "Technique d'épée vétéran 4",
        "buff": "La puissance d'attaque augmente avec son propre niveau : 0,17 %. (max 34%)/â—[Black Truth 4] Dégâts supplémentaires 200 lors de l'attaque d'un ennemi avec une maladie de statut (Poison, Brûlure, Saignement, Engelure).",
        "numbers": "additionalDmg: 200"
    },
    {
        "name": "Conversion aquatique 4",
        "buff": "Dégâts de l'élément feu sur les ennemis -10 % et dégâts de l'élément eau sur les ennemis +25 %.",
        "numbers": "waterDmg: 25, general_dmg: 25"
    },
    {
        "name": "Conversion du vent 4",
        "buff": "Dégâts de l'élément Terre sur les ennemis -10 % et dégâts de l'élément Vent sur les ennemis +25 %.",
        "numbers": "windDmg: 25, general_dmg: 25"
    },
    {
        "name": "Éclair noir 4",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences de Kirito ou plus dans le même ensemble, taux de critique + 20 %.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Bataille conjointe noire 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences de Kirito ou plus dans le même ensemble, dégâts critiques + 15 %.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Épée légendaire noire 4",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences de Kirito ou plus dans le même ensemble, attaque +15 %.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Combat noir 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences de Kirito ou plus dans le même ensemble, taux d'évasion + 5 %. *Il ne sera pas activé avec une attaque focalisée.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Fée noire 4",
        "buff": "Lorsque vous équipez 2 ou plus des enregistrements de compétences de Kirito dans le même ensemble, Max HP +22 %.",
        "numbers": "hp_percent: 22"
    },
    {
        "name": "Affection noire 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences de Kirito ou plus dans le même ensemble, taux de critique + 15 %.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "Accord rouge 4",
        "buff": "ATK +10 % pendant que votre propre buff est en vigueur.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Accord bleu 4",
        "buff": "Dégâts +10% à l'ennemi dont l'ATK diminue.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "Accord vert 4",
        "buff": "Dégâts +10% à l'ennemi dont la DEF diminue.",
        "numbers": "general_dmg: 10"
    },
    {
        "name": "Conversion de brillance 4",
        "buff": "Dégâts de l'élément sombre sur les ennemis -10 % et dégâts de l'élément sacré sur les ennemis +25 %.",
        "numbers": "holyDmg: 25, general_dmg: 25"
    },
    {
        "name": "Il y a une affaire !",
        "buff": "Dégâts critiques +15%.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Il n'y a qu'une seule vérité !",
        "buff": "ATK +20% sur l'ennemi dont la faiblesse a été trouvée.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Lame de coup de vent 3",
        "buff": "Inflige +4,5% de dégâts de l'élément Vent à l'ennemi.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Swing complet 4",
        "buff": "Taux critique +20% lorsque les HP sont supérieurs à 75%.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Oeil de tireur d'élite 4",
        "buff": "Lorsque l'augmentation du buff de dégâts critiques est efficace pour vous-même, taux critique + 35 %.",
        "numbers": "crit_rate: 35, general_dmg: 35"
    },
    {
        "name": "Élément ajouté",
        "buff": "Ajoute un élément sacré aux attaques normales. (Les effets de l'élément ajouté ne se chevauchent pas et seront prioritaires dans l'ordre des ténèbres, du sacré, de la terre, du vent, de l'eau et du feu).",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Lame Flash 4",
        "buff": "Taux critique pour les attaques normales +35%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Brise 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Kirito dans le même ensemble, dégâts critiques +15 %.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Fleur épanouie 4",
        "buff": "Lorsque vous attaquez avec 2 enregistrements de compétences ou plus de \"Leafa\" équipés dans le même ensemble, infligez 300 dégâts supplémentaires.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Tirage mortel 4",
        "buff": "Taux critique +50 % lorsque les PV sont >99 %.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "L'épée secrète du dragon 4",
        "buff": "Attaque +25 % lorsque les PV sont >99 %.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Assassin de l'ombre au clair de lune 4",
        "buff": "Dégâts critiques +38 % lorsque les PV sont >99 %.",
        "numbers": "crit_dmg: 38, general_dmg: 38"
    },
    {
        "name": "Émotion cachée 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Kirito dans le même ensemble, taux de critique +15%./â—[Le ciel que nous avons vu ensemble 4] ATK +10% pendant que votre propre buff est en vigueur./â—[Enhance Heal 4] Effet des objets de guérison et des objets de terrain +25%.",
        "numbers": "crit_rate: 15, atk_percent: 10"
    },
    {
        "name": "Grande Soeur ! 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Asuna dans le même ensemble, attaque +10 %",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Mon souhait 4",
        "buff": "En cas d'esquive, ajoute un buff de +15% de taux de critique et de dégâts critiques pendant 10 secondes.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Coup de gelure 4",
        "buff": "L'attaque contre les ennemis souffrant d'engelures augmente de 20 %.",
        "numbers": "general_dmg: 20"
    },
    {
        "name": "Cloche d'or 4",
        "buff": "Pendant que le buff de vos propres dégâts supplémentaires est en vigueur, le taux de critique devient +20 %.",
        "numbers": "additionalDmg: NaN, general_dmg: 20"
    },
    {
        "name": "Magie de la Lumière 4",
        "buff": "Le DEF augmente avec son propre niveau de 0,17 %. (maximum 34%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Lame glacée 4",
        "buff": "Inflige +20 % de dégâts de l'élément Eau à l'ennemi.",
        "numbers": "waterDmg: 20"
    },
    {
        "name": "Promesse faite 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Kirito dans le même ensemble, taux de critique + 20 %.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Vêtements glacés 3",
        "buff": "Lorsque vous êtes gelé, Défense +10% et dégâts de Gelure -15%.",
        "numbers": "def_percent: 10"
    },
    {
        "name": "Anneau glacé 3",
        "buff": "Lorsque vous êtes gelé, taux de critique +20 % et dégâts de gelure -15 %.",
        "numbers": "crit_rate: 20"
    },
    {
        "name": "Marge de l'expert 4",
        "buff": "Taux de critique et dégâts critiques +12% lorsque les PV sont inférieurs à 50%.",
        "numbers": "crit_dmg: 12, general_dmg: 12"
    },
    {
        "name": "Résultats de la formation spéciale 4",
        "buff": "Le taux de critique augmente de votre propre niveau : 0,28 %. (maximum 56%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Valeur 4",
        "buff": "Puissance d'attaque +12% pendant l'effet buff pour augmenter les dégâts critiques.",
        "numbers": "atk_percent: 12"
    },
    {
        "name": "Confiance vacillante 4",
        "buff": "Lorsque les dégâts critiques sont inférieurs à 10 %, si 3 enregistrements de compétences d'Asuna ou plus sont équipés dans le même ensemble, cet effet sera invalide.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Attaque de faiblesse 3",
        "buff": "Dégâts critiques +25%.",
        "numbers": "crit_dmg: 25, general_dmg: 25"
    },
    {
        "name": "Coeur tendu 4",
        "buff": "Lorsque le taux de critique est inférieur à 15 %, si 3 enregistrements de compétences de Kirito ou plus sont équipés dans le même ensemble, cet effet sera invalide.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Avancez le soldat 3",
        "buff": "Attaque +300.",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Améliorer Antidote 5",
        "buff": "Dégâts de poison -70%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Plein d'Asuna",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences d'Asuna ou plus dans le même ensemble, attaque +10 %. Lorsque vous équipez 6 enregistrements de compétences d'Asuna ou plus dans le même ensemble, taux de critique + 20 %.",
        "numbers": "atk_percent: 10, crit_rate: 20"
    },
    {
        "name": "Gantelet du géant 4",
        "buff": "Pendant que le buff de vos propres dégâts supplémentaires est en vigueur, l'attaque devient +25 %",
        "numbers": "additionalDmg: NaN, general_dmg: 25"
    },
    {
        "name": "Rappelez-vous 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Kirito dans le même ensemble, taux de critique + 30 %.",
        "numbers": "crit_rate: 30"
    },
    {
        "name": "Tueur de poisson 3",
        "buff": "Infliger des dégâts de vent à l'ennemi +10%.",
        "numbers": "windDmg: 10, general_dmg: 10"
    },
    {
        "name": "Voix pure",
        "buff": "Dégâts critiques +20% lorsque vos propres HP sont supérieurs à 75%.[Killer Smile] ATK +20% sur l'ennemi dont la faiblesse a été trouvée.",
        "numbers": "crit_dmg: 20, general_dmg: 20, atk_percent: 20"
    },
    {
        "name": "Flamme purificatrice 4",
        "buff": "Inflige +22 % de dégâts de l'élément Feu à l'ennemi.",
        "numbers": "fireDmg: 22"
    },
    {
        "name": "Commandement du Paladin 4",
        "buff": "Attaque +10%.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Briser l'attaque 3",
        "buff": "Attaque +25% sur les ennemis lors de l'utilisation du break.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Bref repos 4",
        "buff": "Lorsque vous équipez 3 ou plus des enregistrements de compétences de Kirito dans le même ensemble, attaque +20 %",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Souffle formidable 4",
        "buff": "Lorsque vous êtes soigné dans le champ par un objet, l'attaque augmente de 25 %.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Loi du Ciel et de la Terre 4",
        "buff": "Lorsque vous êtes soigné dans le champ par un objet, la résistance aux affections de statut (Paralysie, Étourdissement, Sommeil) augmente de +100 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Bref repos 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences d'Asuna ou plus dans le même ensemble, Attaque +20 %",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Diable Sourire 4",
        "buff": "Le taux critique des attaques non normales diminue de 20 %, le taux critique des attaques normales augmente de 80 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Invitation sombre 4",
        "buff": "Inflige +22 % de dégâts de l'élément sombre à l'ennemi.",
        "numbers": "darkDmg: 22"
    },
    {
        "name": "Yeux déterminés 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Eugeo dans le même ensemble, +300 dégâts supplémentaires lors de l'attaque./â—[Attack Up 3] Attaque +50.",
        "numbers": "additionalDmg: NaN, flat_atk: 50"
    },
    {
        "name": "Volonté 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Alice dans le même ensemble, +300 dégâts supplémentaires lors de l'attaque./â—[Knight's Vow 3] Vos PV max 0,3 % sont récupérés lorsque les monstres sont vaincus.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Serment de survie 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Asuna dans le même ensemble, attaque +15 %. Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Silica dans le même ensemble, Max HP +10 %. Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Lisbeth dans le même ensemble, dégâts critiques +15 %",
        "numbers": "atk_percent: 15, hp_percent: 10, crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Pouvoir de l'unité 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Asuna dans le même ensemble, les dégâts infligés aux ennemis faibles à la poussée +10 %. Lorsque vous équipez 2 enregistrements de compétences ou plus de Yuuki dans le même ensemble, les dégâts infligés aux ennemis faibles à la coupure +10 %.",
        "numbers": "thrustDmg: 10, general_dmg: 20, slashDmg: 10"
    },
    {
        "name": "Brise 3",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Kirito dans le même ensemble, dégâts critiques +15 %.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Danse au sol 4",
        "buff": "Inflige +22 % de dégâts de l'élément Terre à l'ennemi./â—[Hammer 3] Inflige 1 000 dégâts supplémentaires aux ennemis avec un statut debuff (Marque, Petite marque, Marque de la mort, Marque d'érosion par poussée, Marque de destruction tranchante).",
        "numbers": "earthDmg: 22, additionalDmg: NaN"
    },
    {
        "name": "Danse légère 4",
        "buff": "Inflige +22 % de dégâts de l'élément sacré à l'ennemi./â—[Dévotion 3] Attaque +10 % lorsque les PV sont >75 %.",
        "numbers": "holyDmg: 22, atk_percent: 10"
    },
    {
        "name": "Efface ta peur 3",
        "buff": "Tant que le buff de défense+ est efficace, la puissance d'attaque augmentera de 15 %./â—[MHCP 3] Dégâts supplémentaires +200 lors de l'attaque.",
        "numbers": "atk_percent: 15, additionalDmg: NaN"
    },
    {
        "name": "Remarquez-moi Senpai 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Eugeo dans le même ensemble, attaque +12%./â—[Volonté de continuer 4] Pendant que le buff de vos propres dégâts supplémentaires est en vigueur, dégâts supplémentaires +1000 lors de l'attaque.",
        "numbers": "atk_percent: 12, additionalDmg: NaN"
    },
    {
        "name": "Technique d'épée vétéran 3",
        "buff": "La puissance d'attaque augmente avec son propre niveau : 0,12 %. (maximum 24%)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Cadeau Sourire 4",
        "buff": "Restaure 3% de vos propres HP max en cas de coup critique. (Une fois par compétence)* Évolution et percée maximale",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Compteur 5",
        "buff": "Ajoute un buff lors de l'esquive, +30 % de taux de critique pendant 8 secondes.* Évolution et percée maximale",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Impasse 5",
        "buff": "Résistance au sursaut +60 % lorsque les PV dépassent 75 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Tempo + 5",
        "buff": "L'attaque augmente avec le nombre de coups.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Intervenir 5",
        "buff": "Augmente le taux de critique à mesure que le nombre de HITS augmente.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Domination noire",
        "buff": "Attaque +15 % lorsque vous n'équipez aucun enregistrement de compétence Alice dans le même ensemble.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Conversion sombre 4",
        "buff": "Dégâts de l'élément sacré sur les ennemis -10 % et dégâts de l'élément sombre sur les ennemis +25 %.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "Combattez avec facilité 4",
        "buff": "Attaque +25 % pendant que le buff qui récupère progressivement les PV en fonction du record de compétence est en vigueur./â—[Precise Attack Boost 3] Taux critique +15 % pendant que le buff pour augmenter le taux critique est en vigueur.* Évolution et percée maximale",
        "numbers": "atk_percent: 25, crit_rate: 15"
    },
    {
        "name": "Ruée imprudente 4",
        "buff": "Attaque +25% pendant que le buff qui augmente votre propre résistance au tressaillement est en vigueur./â—[Breaking Fist 3] Taux critique +15% pendant que le buff de vos propres dégâts supplémentaires est en vigueur.",
        "numbers": "atk_percent: 25, crit_rate: 15, additionalDmg: NaN"
    },
    {
        "name": "Jouez-le à l'oreille 4",
        "buff": "Attaque +10 % lorsque les PV sont supérieurs à 50 % et défense +10 % lorsque les PV sont inférieurs à 50 %.",
        "numbers": "atk_percent: 10, def_percent: 10"
    },
    {
        "name": "Améliorer Slash 2",
        "buff": "Dégâts infligés aux ennemis faibles à tranchant +10%.",
        "numbers": "slashDmg: 10, general_dmg: 10"
    },
    {
        "name": "Améliorer la poussée 2",
        "buff": "Dégâts infligés aux ennemis faibles à la poussée +10%.",
        "numbers": "thrustDmg: 10, general_dmg: 10"
    },
    {
        "name": "Améliorer Blunt 2",
        "buff": "Dégâts infligés aux ennemis faibles à émoussés +10%.",
        "numbers": "bluntDmg: 10, general_dmg: 10"
    },
    {
        "name": "Ouah Ouah !",
        "buff": "Attaque +18% contre les ennemis avec un effet buff et réduit les dégâts de 10%.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Nous sommes des jumeaux !",
        "buff": "Taux de critique +20% contre les ennemis avec un effet buff, et dégâts critiques +20%.",
        "numbers": "crit_rate: 20, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Traitement des données 4",
        "buff": "Dégâts critiques +20 % aux ennemis avec un statut debuff.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Traitement des données 3",
        "buff": "Dégâts critiques +15% contre les ennemis avec un statut debuff.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Slash protéger 3",
        "buff": "Réduisez les dégâts du monstre à élément slash de 12%.",
        "numbers": "slashRes: 12"
    },
    {
        "name": "Les Voleurs Fantômes de Cœur : Panthère",
        "buff": "Dégâts supplémentaires +1 000 en équipant 2 enregistrements de compétences ou plus de l'un des personnages Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet dans le même ensemble.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Les Voleurs Fantômes de Cœur : Mona",
        "buff": "Dégâts supplémentaires +500 en équipant 2 enregistrements de compétences ou plus de l'un des personnages Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet dans le même ensemble.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Les Voleurs de Cœur Fantômes : Reine",
        "buff": "Dégâts supplémentaires +1 000 en équipant 2 enregistrements de compétences ou plus de l'un des personnages Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet dans le même ensemble.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Augmentation de puissance 3",
        "buff": "Attaque +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Cœur sympathique : Leafa",
        "buff": "Dégâts critiques +15 % en équipant 1 ou plusieurs enregistrements de compétences de l'un des personnages Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet dans le même ensemble.",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Cœur sympathique : Yuuki",
        "buff": "Taux de critique +15 % en équipant 1 ou plusieurs enregistrements de compétences de l'un des personnages Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet dans le même ensemble.",
        "numbers": "crit_rate: 15"
    },
    {
        "name": "Cœur sympathique : Alice",
        "buff": "Attaque +15 % en équipant 1 ou plusieurs enregistrements de compétences de l'un des personnages Joker/Skull/Panther/Mona/Fox/Queen/Noir/Violet dans le même ensemble.",
        "numbers": "atk_percent: 15"
    },
    {
        "name": "Lame de coup de vent 4",
        "buff": "Inflige +20 % de dégâts de l'élément Vent à l'ennemi.",
        "numbers": "windDmg: 20"
    },
    {
        "name": "Sauvegarde automatique 4",
        "buff": "Défense +25 % en cas d'altérations de statut avec paralysie, étourdissement, sommeil, malédiction, débilité, pétrification, poison, brûlure, saignement, engelure.",
        "numbers": "def_percent: 25"
    },
    {
        "name": "Changement de talent 1",
        "buff": "L'effet change en fonction des enregistrements de compétences dans le même ensemble. Récupère 70 HP toutes les 3 secondes en équipant 1 ou plusieurs enregistrements de compétences d'Alice dans le même ensemble. Attaque +20 % en n'équipant aucun enregistrement de compétence Alice dans le même ensemble.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Améliorer Blunt 3",
        "buff": "Dégâts infligés aux ennemis faibles à émoussés +15%.",
        "numbers": "bluntDmg: 15, general_dmg: 15"
    },
    {
        "name": "Guérison de combat élevée 3",
        "buff": "Récupère un maximum de 1,2% de HP toutes les 3 secondes.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Coup de poignard dans le dos 4",
        "buff": "Dégâts +18% envers les monstres non ciblés par le joueur.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Domination sombre",
        "buff": "Dégâts supplémentaires +1 000 lorsque vous n'équipez aucun enregistrement de compétence Alice dans le même ensemble.",
        "numbers": "additionalDmg: NaN"
    },
    {
        "name": "Coup de gelure 3",
        "buff": "L'attaque contre les ennemis souffrant d'engelures augmente de 18 %.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Bataille pour la justice",
        "buff": "Résistance au sursaut +80 % lorsque les PV sont à 100 %. Récupère un maximum de 1 % de HP toutes les 3 secondes lorsque les HP tombent en dessous de 99 %.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "Maladies de statut Coup 3",
        "buff": "Attaque +18 % contre les ennemis souffrant d'altérations de statut (Poison, Brûlure, Saignement, Engelure)./â—[Œil gauche du dragon] Dégâts supplémentaires +1000.",
        "numbers": "atk_percent: 18, additionalDmg: NaN"
    },
    {
        "name": "Accord vital 3",
        "buff": "Défense +400.",
        "numbers": "flat_def: 400"
    },
    {
        "name": "Couleur de l'esprit",
        "buff": "L'effet change en fonction des enregistrements de compétence dans le même ensemble.Lorsque vous équipez 1 ou plusieurs enregistrements de compétence d'Asuna : PV max +10 %.Lorsque vous équipez 1 ou plusieurs enregistrements de compétence de Sinon : Attaque +20 %.Lorsque vous équipez 1 ou plusieurs enregistrements de compétence de Leafa : dégâts supplémentaires +500.Lorsque vous équipez 1 ou plusieurs enregistrements de compétence d'Alice : taux de critique +10 %.Lorsque vous équipez 1 ou plusieurs enregistrements de compétence d'Eugeo : dégâts critiques +10%.",
        "numbers": "hp_percent: 10, atk_percent: 20, additionalDmg: NaN, crit_rate: 10, crit_dmg: 10, general_dmg: 10"
    },
    {
        "name": "Invitation sombre 3",
        "buff": "Inflige +15 % de dégâts de l'élément sombre à l'ennemi.",
        "numbers": "darkDmg: 15"
    },
    {
        "name": "Apprentissage automatique 4",
        "buff": "Ajoute des effets supplémentaires en fonction du nombre de dossiers de compétences d'Alice équipés dans le même ensemble.2 ou plus : Défense +5 %.3 ou plus : PV max +10 %.4 ou plus : Taux critique +15 %.5 ou plus : Dégâts critiques +15 %.6 ou plus : Attaque +20 %.",
        "numbers": "def_percent: 5, hp_percent: 10, crit_rate: 15, crit_dmg: 15, general_dmg: 15, atk_percent: 20"
    },
    {
        "name": "Plein d'Alice 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences d'Alice ou plus dans le même ensemble, Défense +10 %. Lorsque vous équipez 6 enregistrements de compétences d'Alice ou plus dans le même ensemble, dégâts critiques +20 %.",
        "numbers": "def_percent: 10, crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Changement de talents 2",
        "buff": "L'effet change en fonction des enregistrements de compétences dans le même ensemble. Dégâts supplémentaires +1 000 en équipant 1 ou plusieurs enregistrements de compétences d'Alice dans le même ensemble. Attaque + 20 % si vous n'équipez aucun enregistrement de compétences d'Alice dans le même ensemble.",
        "numbers": "additionalDmg: NaN, atk_percent: 20"
    },
    {
        "name": "Accord de lumière 4",
        "buff": "Dégâts des éléments sacrés +28% sur les ennemis qui ont un effet buff.",
        "numbers": "holyDmg: 28, general_dmg: 28"
    },
    {
        "name": "Collaboration de rêve",
        "buff": "L'attaque augmente de 150 fois le nombre d'enregistrements de compétences Yuna dans le même ensemble.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Accord sombre 4",
        "buff": "Dégâts des éléments sombres +28% sur les ennemis qui ont un effet buff.",
        "numbers": "darkDmg: 28, general_dmg: 28"
    },
    {
        "name": "Avancez le soldat 4",
        "buff": "Attaque +400.",
        "numbers": "flat_atk: 400"
    },
    {
        "name": "Indemnité de la Terre 3",
        "buff": "Lorsque vous êtes empoisonné, les dégâts de l'élément Terre +40 %./â—[Améliorer l'Antidote 3] Dégâts du poison -30 %.",
        "numbers": "earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "Améliorer la poussée 3",
        "buff": "Dégâts infligés aux ennemis faibles à la poussée +15%.",
        "numbers": "thrustDmg: 15, general_dmg: 15"
    },
    {
        "name": "Danse au sol 2",
        "buff": "Inflige +9,3 % des dégâts de l'élément Terre à l'ennemi.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Boost d'attaque de faiblesse 3",
        "buff": "Dégâts critiques +15 % tant que le buff permettant d'augmenter les dégâts critiques est en vigueur.* Évolution et percée maximale",
        "numbers": "crit_dmg: 15, general_dmg: 15"
    },
    {
        "name": "Changement de talent 3",
        "buff": "L'effet change en fonction des enregistrements de compétence dans le même ensemble. Montant soigné par les plantes + 10 % lorsque vous équipez 1 ou plusieurs enregistrements de compétence d'Alice dans le même ensemble. Attaque + 20 % lorsque vous n'équipez aucun enregistrement de compétence d'Alice dans le même ensemble.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Affection fraternelle 4",
        "buff": "Les dégâts critiques augmentent de 5 % x le nombre de records de compétence Leafa dans le même ensemble. L'attaque augmente de 6 % x le nombre de records de compétence Silica dans le même ensemble.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "Indemnité de flamme 3",
        "buff": "Lorsque vous êtes brûlé, les dégâts des éléments de feu + 40 %./â—[Améliorer l'immunité aux brûlures 3] Dégâts des brûlures -30 %.",
        "numbers": "fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "Améliorer Berserk 3",
        "buff": "Lorsque le joueur est atteint d'altérations de statut (Poison, Brûlure, Saignement, Engelure, Malédiction, Débilité), Attaque +20 %.* Évolution et percée maximale",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Avancez le soldat 5",
        "buff": "Attaque +500.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Cinq armes tranchantes 3",
        "buff": "Attaque +800 en attaquant avec un élément de poussée.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Tenez le devant 4",
        "buff": "Récupère un maximum de 5 % + 200 HP toutes les 3 secondes lorsque les HP sont inférieurs à 50 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Coup brûlant 3",
        "buff": "L'attaque contre les ennemis brûlés augmente de 18%.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Augmentation de puissance 4",
        "buff": "Attaque +900.",
        "numbers": "flat_atk: 900"
    },
    {
        "name": "Glace fine 4",
        "buff": "Défense -30% et pendant l'effet buff pour augmenter les HP max, les HP -99% toutes les 3 secondes.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Lame glacée 2",
        "buff": "Inflige +9,3% de dégâts de l'élément Eau à l'ennemi.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Combattez avec facilité 3",
        "buff": "Attaque +20% pendant que le buff qui récupère progressivement les HP en fonction du record de compétence est en vigueur./â—[Enhance Heal 4] Effet des objets de guérison et des objets de terrain +25%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Fiable frère 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Leafa dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Évasion 3",
        "buff": "Taux d'évasion +7,2%. *Il ne sera pas activé avec une attaque focalisée.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Coup De Maillet 4",
        "buff": "Dégâts infligés aux ennemis faibles à contondants +30% contre les ennemis avec un statut debuff (Mark, Small Mark, Death Mark, Thrust Erosion Mark, Slash Destruction Mark).",
        "numbers": "bluntDmg: 30, general_dmg: 30"
    },
    {
        "name": "Taureau enragé 3",
        "buff": "Dégâts +18% sur les ennemis avec debuff d'attaque.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Étalon enragé 3",
        "buff": "Dégâts +18% sur les ennemis avec debuff de défense.",
        "numbers": "general_dmg: 18"
    },
    {
        "name": "Esprit de l'épée déferlante 4",
        "buff": "L'attaque augmente de 3,5 % x le nombre de records de compétences Yuuki dans le même ensemble.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Énergique 4",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences d'Agil ou plus dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Lame de coup de vent 2",
        "buff": "Inflige +9,3 % de dégâts de l'élément Vent à l'ennemi.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Accélération 3",
        "buff": "Dégâts critiques +20 % lorsque les PV sont inférieurs à 50 %.",
        "numbers": "crit_dmg: 20, general_dmg: 20"
    },
    {
        "name": "Frappe de bataille sanglante 3",
        "buff": "Attaque +35% en attaquant avec un élément contondant.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Croc d'acier 4",
        "buff": "Attaque +500 en attaquant avec un élément de poussée.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Boost de flamme 4",
        "buff": "Dégâts élémentaires autres que le feu infligés aux ennemis -50 % et dégâts de l'élément feu aux ennemis +40 %.",
        "numbers": "waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, fireDmg: 40, general_dmg: 40"
    },
    {
        "name": "La règle de l'épée légendaire",
        "buff": "Attaque +20 % lorsque vous n'équipez aucun enregistrement de compétence de Kirito dans le même ensemble.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Conversion de flamme 3",
        "buff": "Dégâts de l'élément eau sur les ennemis -10 % et dégâts de l'élément feu sur les ennemis +20 %.",
        "numbers": "fireDmg: 20, general_dmg: 20"
    },
    {
        "name": "Rencontrer un ami",
        "buff": "Récupère 80 HP toutes les 3 secondes en équipant 3 enregistrements de compétences d'Asuna ou plus dans le même ensemble.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Hors de tri 4",
        "buff": "Défense -30% et pendant l'effet buff pour augmenter les HP max, l'attaque et les dégâts -99% lors de l'utilisation d'une attaque normale.* Évolution et percée maximale",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Dieu de la mer 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences de Sinon ou plus dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Danse au sol 5",
        "buff": "Inflige +25 % de dégâts de l'élément Terre à l'ennemi.",
        "numbers": "earthDmg: 25"
    },
    {
        "name": "Changement de talents 4",
        "buff": "L'effet change en fonction des enregistrements de compétences dans le même ensemble. Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Kirito dans le même ensemble, + taux de réussite pour Burn. Dégâts infligés aux ennemis faibles jusqu'à trancher + 30 % lorsque vous n'équipez aucun enregistrement de compétences Kirito dans le même ensemble.",
        "numbers": "slashDmg: 30, general_dmg: 30"
    },
    {
        "name": "Tout en noir 4",
        "buff": "Ajoute des effets supplémentaires en fonction du nombre de dossiers de compétences de Kirito équipés dans le même ensemble.2 ou plus : Récupère un maximum de 1,2 % de PV toutes les 3 secondes.3 ou plus : PV max +5 %.4 ou plus : Taux de critique +10 %.5 ou plus : Dégâts critiques +10 %.6 ou plus : Attaque +15 %.",
        "numbers": "hp_percent: 5, crit_rate: 10, crit_dmg: 10, general_dmg: 10, atk_percent: 15"
    },
    {
        "name": "Coup sanglant 3",
        "buff": "Attaque +18% contre les ennemis qui saignent.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Plus Deban 1",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Lisbeth dans le même ensemble, attaque +20 %",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Sauvegarde automatique 2",
        "buff": "Défense +15 % en cas d'altérations de statut avec paralysie, étourdissement, sommeil, malédiction, débilité, pétrification, poison, brûlure, saignement, engelure.",
        "numbers": "def_percent: 15"
    },
    {
        "name": "Indemnité de la Lumière 3",
        "buff": "Lorsque vous êtes affaibli, les dégâts des éléments sacrés +40%.",
        "numbers": "holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "Punition à poigne de fer 4",
        "buff": "Attaque +500 en attaquant avec un élément contondant.",
        "numbers": "flat_atk: 500"
    },
    {
        "name": "Roi des masses 3",
        "buff": "Attaque +1000 lorsque 1H Club est équipé",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Rebelle contre le système 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Asuna dans le même ensemble, attaque +20 %",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Tactiques brutes 2",
        "buff": "Défense -30% et, lorsque les PV sont inférieurs à 50%, dégâts non élémentaires -400%.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Boost de vent 4",
        "buff": "Dégâts élémentaires autres que le vent infligés aux ennemis -50 % et dégâts de l'élément vent aux ennemis +40 %.",
        "numbers": "fireDmg: -50, waterDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, windDmg: 40, general_dmg: 40"
    },
    {
        "name": "Panthère noire 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Sachi dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Boost sombre 4",
        "buff": "Dégâts élémentaires autres que l'obscurité infligés aux ennemis -50 % et dégâts de l'élément sombre aux ennemis +40 %.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, noneDmg: -50, darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "Passer à Mêlée 4",
        "buff": "Attaque +20 % lorsque vous n'équipez aucun enregistrement de compétence de Sinon dans le même ensemble.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Plus de Deban 2",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Silica dans le même ensemble, attaque +20 %",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Indemnité de l'Ombre 3",
        "buff": "Lorsque vous êtes maudit, les dégâts des éléments sombres +40%.",
        "numbers": "darkDmg: 40, general_dmg: 40"
    },
    {
        "name": "Compteur de malédiction 4",
        "buff": "Lorsque le joueur est atteint de statut (malédiction), attaque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Assaut 4",
        "buff": "Attaque +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Indemnité de glace 3",
        "buff": "Lorsque vous êtes gelé, les dégâts de l'élément eau +40%./â—[Améliorer Frostbite 3] Dégâts de gelure -30%.",
        "numbers": "waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "Impact écrasant 3",
        "buff": "Attaque +800 en attaquant avec un élément contondant.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Aqua Boost 4",
        "buff": "Dégâts élémentaires autres que l'eau infligés aux ennemis -50 % et dégâts de l'élément eau aux ennemis +40 %.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 40, general_dmg: 40"
    },
    {
        "name": "Sauvegarde automatique 3",
        "buff": "Défense +20 % en cas d'altérations de statut avec paralysie, étourdissement, sommeil, malédiction, débilité, pétrification, poison, brûlure, saignement, engelure.",
        "numbers": "def_percent: 20"
    },
    {
        "name": "Prospérer 4",
        "buff": "Attaque +20% lorsque les PV sont supérieurs à 50%.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Coup de gelure 5",
        "buff": "L'attaque contre les ennemis souffrant d'engelures augmente de 30 %.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "Incarnation : Force 4",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences d'Alice ou plus dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Accord vital 4",
        "buff": "Défense +450.",
        "numbers": "flat_def: 450"
    },
    {
        "name": "Améliorer l'attaque 5",
        "buff": "Attaque +18%.",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Rapide et facile",
        "buff": "Réduit la résistance au tressaillement de 100 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Passionnant 4",
        "buff": "Défense -30% et dégâts critiques -300% pendant l'effet buff pour augmenter les PV max.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Flamme purificatrice 3",
        "buff": "Inflige +15 % de dégâts de l'élément Feu à l'ennemi.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "Cœur opposé 3",
        "buff": "Attaque +18% aux ennemis qui ont un effet buff",
        "numbers": "atk_percent: 18"
    },
    {
        "name": "Résonance de la flamme 4",
        "buff": "Dégâts de l'élément Feu +30% sur les ennemis qui ont un effet buff.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "Roi des lances 3",
        "buff": "Attaque +1000 en utilisant 2H Spear.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Brillance Boost 4",
        "buff": "Dégâts élémentaires autres que le sacré infligés aux ennemis -50 % et dégâts de l'élément sacré aux ennemis +40 %.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, earthDmg: -50, darkDmg: -50, noneDmg: -50, holyDmg: 40, general_dmg: 40"
    },
    {
        "name": "Résultats de la formation 4",
        "buff": "Les dégâts critiques augmentent de votre propre niveau – 0,14 % (max 28 %)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Six chemins 4",
        "buff": "L'effet change en fonction des enregistrements de compétence dans le même ensemble. Lorsque vous équipez 2 enregistrements de compétence de Kirito : inflige + 40 % de dégâts de l'élément Terre à l'ennemi. Lorsque vous équipez 3 enregistrements de compétence de Kirito : inflige + 40 % de dégâts de l'élément Vent à l'ennemi. Lorsque vous équipez 4 enregistrements de compétence de Kirito : inflige + 40 % de dégâts de l'élément Feu à l'ennemi. Lorsque vous équipez 5 enregistrements de compétence de Kirito : inflige + 40 % de dégâts de l'élément Eau à l'ennemi. équiper 6 des enregistrements de compétences de Kirito : inflige + 50 % des dégâts de l'élément sacré à l'ennemi. Lorsque vous équipez 7 des enregistrements de compétences de Kirito : inflige + 50 % des dégâts de l'élément sombre à l'ennemi.",
        "numbers": "earthDmg: 40, windDmg: 40, fireDmg: 40, waterDmg: 40, holyDmg: 50, darkDmg: 50"
    },
    {
        "name": "Ami étranger 1",
        "buff": "L'attaque augmente de 200 fois le nombre de records de compétence Rain dans le même ensemble.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Aspiration de chaleur 3",
        "buff": "Lorsque le joueur est atteint d'une maladie de statut (brûlure), attaque +40 %./â—[Améliorer l'immunité aux brûlures 3] Dégâts de brûlure -30 %.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Informations sur le rat 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Argo dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Attaque frontale 4",
        "buff": "Aggro augmente de -40 % lorsque l'attaque frappe",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Flexibilité 4",
        "buff": "Résistance à la pétrification +80% lorsque les PV sont à 100%. Récupère un maximum de 1 % de HP toutes les 3 secondes lorsque les HP tombent en dessous de 99 %.",
        "numbers": "hp_regen: 1"
    },
    {
        "name": "Roi des haches 3",
        "buff": "Attaque +1000 en utilisant la hache 2H.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Protection contre la poussée 3",
        "buff": "Réduisez les dégâts du monstre à élément de poussée de 12%.",
        "numbers": "thrustRes: 12"
    },
    {
        "name": "Apprentissage automatique 5",
        "buff": "Ajoute des effets supplémentaires en fonction du nombre de dossiers de compétences d'Alice équipés dans le même ensemble.2 ou plus : Taux critique +20 %.3 ou plus : Défense +5 %.4 ou plus : PV max +10 %.5 ou plus : Dégâts critiques +20 %.6 ou plus : Attaque +35 %.",
        "numbers": "crit_rate: 20, def_percent: 5, hp_percent: 10, crit_dmg: 20, general_dmg: 20, atk_percent: 35"
    },
    {
        "name": "Super chanceux !",
        "buff": "Il y a 1 % de chances que la prochaine attaque reçue par l'ennemi induise 2,5 fois les dégâts. (S'applique aux attaques des autres membres du groupe. L'effet disparaîtra après 10 secondes s'il n'est pas activé.)",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Chanceux !",
        "buff": "Une chance de 25 % de taux de critique +50 % pendant 10 secondes.",
        "numbers": "crit_rate: 50"
    },
    {
        "name": "Chance incertaine !",
        "buff": "75 % de chances d'attaque + 7 % pendant 30 s.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Euh oh !",
        "buff": "5 % de chances de vous infliger une malédiction pendant 20 secondes.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Boost de Terre 4",
        "buff": "Dégâts élémentaires autres que la terre infligés aux ennemis -50 % et dégâts de l'élément terre aux ennemis +40 %.",
        "numbers": "fireDmg: -50, waterDmg: -50, windDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, earthDmg: 40, general_dmg: 40"
    },
    {
        "name": "Changement de talents 5",
        "buff": "L'effet change en fonction des enregistrements de compétences dans le même ensemble. Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Kirito dans le même ensemble, + taux de réussite pour Frostbite. Attaque + 20 % lorsque vous n'équipez aucun enregistrement de compétences Kirito dans le même ensemble.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Machiniste 4",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences de Koharu ou plus dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Indemnité de l'ombre 1",
        "buff": "Lorsque vous êtes maudit, dégâts des éléments sombres +25%.",
        "numbers": "darkDmg: 25, general_dmg: 25"
    },
    {
        "name": "Roi des poignards 3",
        "buff": "Attaque +1000 en utilisant des dagues.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Fleur de glace 4",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences d'Eugeo ou plus dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Bataille sanglante Slash 3",
        "buff": "Attaque +35% lors d'une attaque avec un élément slash.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Accumulation de terre 3",
        "buff": "Les dégâts de l'élément Terre augmentent du nombre de records de compétence Klein dans le même ensemble x 10 %.",
        "numbers": "earthDmg: 10"
    },
    {
        "name": "Conversion aquatique 5",
        "buff": "Dégâts de l'élément feu sur les ennemis -15 % et dégâts de l'élément eau sur les ennemis +30 %.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "Conseiller tactique 4",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences ou plus de Yui dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Adresse au tir 3",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences de Sinon ou plus dans le même ensemble, attaque +20 %.* Évolution et percée maximale",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Halo 3",
        "buff": "Défense -30% et pendant l'effet buff pour augmenter les HP max, le taux de réussite -30%",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Entaille aggravée 3",
        "buff": "Les dégâts causés par la faiblesse des éléments slash augmentent du nombre d'enregistrements de compétences Eydis dans le même ensemble x 20 %.",
        "numbers": "slashDmg: 20"
    },
    {
        "name": "Pleine floraison 3",
        "buff": "Lorsque vous équipez 4 enregistrements de compétences d'Eydis ou plus dans le même ensemble, Attaque +800.",
        "numbers": "flat_atk: 800"
    },
    {
        "name": "Perte de charge 1",
        "buff": "Lorsque la défense est de -30 % et que les PV sont inférieurs à 50 %, dégâts de -1 000 % aux ennemis faibles à la poussée.* Évolution et percée maximale",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Aspiration de la Terre 3",
        "buff": "Lorsque le joueur est atteint d'une maladie de statut (Poison), attaque +35%./â—[Enhance Antidote 3] Dégâts de poison -30%.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Roi des Rapières 3",
        "buff": "Attaque +1000 en utilisant 1H Rapier.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Conversion du vent 5",
        "buff": "Dégâts de l'élément Terre sur les ennemis -15 % et dégâts de l'élément Vent sur les ennemis +30 %.",
        "numbers": "windDmg: 30, general_dmg: 30"
    },
    {
        "name": "Épéiste noir 3",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences de Kirito ou plus dans le même ensemble, attaque +20 %.* Évolution et percée maximale",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Super amélioration des soins",
        "buff": "Effet des objets de guérison et des objets de terrain +100 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Pic 3",
        "buff": "Attaque +40% lorsque les PV sont supérieurs à 80%.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Ami étranger 2",
        "buff": "L'attaque augmente de 250 fois le nombre de records de compétence Rain dans le même ensemble.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Lame aiguisée 4",
        "buff": "L'attaque augmente de 6 % x le nombre de records de compétences Asuna dans le même ensemble.",
        "numbers": "atk_percent: 6"
    },
    {
        "name": "L'indemnisation de la Terre 2",
        "buff": "Lorsque vous êtes empoisonné, les dégâts de l'élément Terre +35%.",
        "numbers": "earthDmg: 35, general_dmg: 35"
    },
    {
        "name": "Compteur de brûlures 3",
        "buff": "Lorsque le joueur est atteint d'une maladie de statut (brûlure), attaque +1000./â—[Améliorer l'immunité aux brûlures 2] Dégâts de brûlure -10 %.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Accro aux épices 3",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences de Kirito ou plus dans le même ensemble, attaque +20 %.* Évolution et percée maximale",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Guérison accélérée 4",
        "buff": "Récupère un maximum de 4 % de PV toutes les 3 secondes.",
        "numbers": "hp_regen: 4"
    },
    {
        "name": "Conversion de la Terre 5",
        "buff": "Dégâts de l'élément vent sur les ennemis -15 % et dégâts de l'élément terre sur les ennemis +30 %.",
        "numbers": "earthDmg: 30, general_dmg: 30"
    },
    {
        "name": "Épée Démon 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences d'Asuna dans le même ensemble, Attaque +20 %* Évolution et Percée maximale",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Jouez-le à l'oreille 5",
        "buff": "Attaque +25 % lorsque les PV sont supérieurs à 50 % et défense +15 % lorsque les PV sont inférieurs à 50 %.",
        "numbers": "atk_percent: 25, def_percent: 15"
    },
    {
        "name": "Bataille sanglante Slash 4",
        "buff": "Attaque +40% en attaquant avec l'élément slash.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Transport 3",
        "buff": "Lorsque vous équipez 4 ou plus des enregistrements de compétences de Kirito dans le même ensemble, Attaque +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Aspiration du givre 4",
        "buff": "Lorsque le joueur a un statut (Engelure), Attaque +50%./â—[Enhance Frostbite 3] Dégâts d'Engelure -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Calme 3",
        "buff": "Taux de réussite +30% lorsque vous êtes gelé.",
        "numbers": "hit_rate: 30"
    },
    {
        "name": "Résonance de glace 4",
        "buff": "Dégâts de l'élément Eau +30% aux ennemis qui ont un effet buff.",
        "numbers": "waterDmg: 30, general_dmg: 30"
    },
    {
        "name": "Conversion sombre 5",
        "buff": "Dégâts de l'élément sacré sur les ennemis -15 % et dégâts de l'élément sombre sur les ennemis +30 %.",
        "numbers": "darkDmg: 30, general_dmg: 30"
    },
    {
        "name": "Indemnité de l'Ombre 2",
        "buff": "Lorsque vous êtes maudit, dégâts des éléments sombres + 35%.",
        "numbers": "darkDmg: 35, general_dmg: 35"
    },
    {
        "name": "Compteur de saignement 3",
        "buff": "Lorsque le joueur souffre d'une maladie de statut (Saignement), Attaque +1000./â—[Améliorer la coagulation 2] Dégâts de saignement -10%.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Compteur de saignement 4",
        "buff": "Lorsque le joueur est atteint d'une maladie de statut (Saignement), Attaque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Indemnité de vent 3",
        "buff": "Lorsque le joueur est atteint d'une maladie de statut (Saignement), dégâts de l'élément Vent + 40%.",
        "numbers": "windDmg: 40, general_dmg: 40"
    },
    {
        "name": "Briser le barrage 3",
        "buff": "Montant de la jauge de rupture +30 % sur les ennemis.",
        "numbers": "break_pct: 30"
    },
    {
        "name": "Accumulation sombre 3",
        "buff": "Les dégâts de l'élément sombre augmentent du nombre de records de compétence Sanya dans le même ensemble x 10 %.",
        "numbers": "darkDmg: 10"
    },
    {
        "name": "Frappe de bataille sanglante 4",
        "buff": "Attaque +40% en attaquant avec un élément contondant.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Accumulation de flammes 3",
        "buff": "Les dégâts de l'élément Feu augmentent du nombre de records de compétence Asuna dans le même ensemble x 10 %.",
        "numbers": "fireDmg: 10"
    },
    {
        "name": "Coup brûlant 5",
        "buff": "L'attaque contre les ennemis brûlés augmente de 30%.",
        "numbers": "general_dmg: 30"
    },
    {
        "name": "Conversion de flamme 5",
        "buff": "Dégâts de l'élément eau sur les ennemis -15 % et dégâts de l'élément feu sur les ennemis +30 %.",
        "numbers": "fireDmg: 30, general_dmg: 30"
    },
    {
        "name": "Artiste martial 3",
        "buff": "Lorsque vous équipez 2 enregistrements de compétences ou plus de Leafa dans le même ensemble, attaque +20 %.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Assaut 1",
        "buff": "Attaque +25%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Poussée de bataille sanglante 3",
        "buff": "Attaque +35% en attaquant avec un élément de poussée.",
        "numbers": "atk_percent: 35"
    },
    {
        "name": "Feu de l'enfer 4",
        "buff": "L'attaque augmente de 7 % x le nombre de records de compétences Kirito dans le même ensemble.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Prospérer 5",
        "buff": "Attaque +25% lorsque les PV sont supérieurs à 50%.",
        "numbers": "atk_percent: 25"
    },
    {
        "name": "Percer 4",
        "buff": "Dégâts infligés aux ennemis faibles à la poussée +25%.",
        "numbers": "thrustDmg: 25, general_dmg: 25"
    },
    {
        "name": "Calme 1",
        "buff": "Taux de réussite +10 % lorsque vous êtes gelé./â—[Améliorer Frostbite 2] Dégâts de gelure -10 %.",
        "numbers": "hit_rate: 10"
    },
    {
        "name": "Accumulation de givre 4",
        "buff": "Les dégâts de l'élément Eau augmentent du nombre de records de compétence Eydis dans le même ensemble x 12,5 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Technique avancée de la rapière 3",
        "buff": "Dégâts non élémentaires +25% lors de l'utilisation de 1H Rapier.",
        "numbers": "general_dmg: 25"
    },
    {
        "name": "Aspiration d'air 4",
        "buff": "Lorsque le joueur souffre d'une maladie de statut (Saignement), Attaque +50%./â—[Améliorer la coagulation 3] Dégâts de saignement -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Rugissement du coup de vent 4",
        "buff": "Inflige +15 % de dégâts de l'élément Vent à l'ennemi.",
        "numbers": "windDmg: 15"
    },
    {
        "name": "Compteur de poison 4",
        "buff": "Lorsque le joueur est atteint de statut (Poison), attaque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Bissecte 4",
        "buff": "Dégâts infligés aux ennemis faibles à tranchant +25%.",
        "numbers": "slashDmg: 25, general_dmg: 25"
    },
    {
        "name": "Compteur d'engelures 4",
        "buff": "Lorsque le joueur est atteint d'une maladie de statut (engelure), attaque +1500.",
        "numbers": "flat_atk: 1500"
    },
    {
        "name": "Accumulation de chaleur 4",
        "buff": "Les dégâts de l'élément Feu augmentent du nombre de records de compétence Asuna dans le même ensemble x 12,5 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Opportunité en or 4",
        "buff": "Dégâts critiques +50%.",
        "numbers": "crit_dmg: 50, general_dmg: 50"
    },
    {
        "name": "Surtension perçante 3",
        "buff": "Les dégâts causés par la faiblesse des éléments de poussée augmentent du nombre de records de compétences LLENN dans le même ensemble x 20 %.",
        "numbers": "thrustDmg: 20"
    },
    {
        "name": "Cyberesprit 2",
        "buff": "L'attaque augmente de 7 % x le nombre d'enregistrements de compétences Yui dans le même ensemble.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Offensive de l'épée sacrée",
        "buff": "L'attaque augmente de 10 % x le nombre de records de compétence Heathcliff dans le même ensemble.",
        "numbers": "atk_percent: 10"
    },
    {
        "name": "Blocus1",
        "buff": "Tous les dégâts élémentaires diminuent de 100 % x le nombre d'enregistrements de compétences Asuna dans le même ensemble (non élémentaires inclus).",
        "numbers": "fireDmg: -100, waterDmg: -100, windDmg: -100, earthDmg: -100, holyDmg: -100, darkDmg: -100, noneDmg: -100"
    },
    {
        "name": "Réaction remarquable",
        "buff": "Taux d'évasion +16%. *Il ne sera pas activé avec une attaque focalisée.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Poussée de bataille sanglante 4",
        "buff": "Attaque +40% en attaquant avec un élément de poussée.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Vaillant 3",
        "buff": "Lorsque vous équipez 3 enregistrements de compétences ou plus de Yui dans le même ensemble, Attaque +300",
        "numbers": "flat_atk: 300"
    },
    {
        "name": "Foi aveugle",
        "buff": "L'attaque augmente de 7 % x le nombre d'enregistrements de compétences Yuna dans le même ensemble.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Surtension frappante 2",
        "buff": "Les dégâts causés par la faiblesse des éléments contondants augmentent du nombre de records de compétence Agil dans le même ensemble x 8 %.",
        "numbers": "bluntDmg: 8"
    },
    {
        "name": "Marchand Élite 4",
        "buff": "Lorsque vous équipez 5 enregistrements de compétences d'Agil ou plus dans le même ensemble, Attaque +1000.",
        "numbers": "flat_atk: 1000"
    },
    {
        "name": "Aspiration de la Terre 4",
        "buff": "Lorsque le joueur est atteint d'une maladie de statut (Poison), attaque +50%./â—[Améliorer Antidote 3] Dégâts de poison -30%.",
        "numbers": "atk_percent: 50"
    },
    {
        "name": "Impulsion au sol 4",
        "buff": "Inflige +15 % de dégâts de l'élément Terre à l'ennemi.",
        "numbers": "earthDmg: 15"
    },
    {
        "name": "Conversion de brillance 5",
        "buff": "Dégâts de l'élément sombre sur les ennemis -15 % et dégâts de l'élément sacré sur les ennemis +30 %.",
        "numbers": "holyDmg: 30, general_dmg: 30"
    },
    {
        "name": "Plus de Deban 4",
        "buff": "Lorsque vous équipez 1 ou plusieurs enregistrements de compétences de Silica dans le même ensemble, attaque +20 %",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "As de poignards 4",
        "buff": "Attaque +40% en utilisant des dagues.",
        "numbers": "atk_percent: 40"
    },
    {
        "name": "Ami fidèle 2",
        "buff": "L'attaque augmente de 7 % x le nombre de records de compétences Sanya dans le même ensemble.",
        "numbers": "atk_percent: 7"
    },
    {
        "name": "Améliorer la résolution par étourdissement. 3",
        "buff": "â— Résistance à l'étourdissement +30%.",
        "numbers": "stunRes: 30"
    },
    {
        "name": "Améliorer la résolution de débilité. 3",
        "buff": "â— Résistance à la débilité +30 %",
        "numbers": "debilityRes: 30"
    },
    {
        "name": "Indemnité de glace 2",
        "buff": "Lorsque vous êtes gelé, les dégâts de l'élément eau +35%. ",
        "numbers": "waterDmg: 35, general_dmg: 35"
    },
    {
        "name": "Attaque frontale 5",
        "buff": "Aggro augmente de -50% lorsque l'attaque frappe.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Profonde affection 4",
        "buff": "La défense augmente de 4 % x le nombre de records de compétence Asuna dans le même ensemble. L'attaque augmente de 7 % x le nombre de records de compétence Leafa dans le même ensemble.",
        "numbers": "def_percent: 4, atk_percent: 7"
    },
    {
        "name": "Accumulation de brillance 3",
        "buff": "Les dégâts de l'élément sacré augmentent du nombre d'enregistrements de compétences Sinon dans le même ensemble x 10 %.",
        "numbers": "holyDmg: 10"
    },
    {
        "name": "Contradiction 3",
        "buff": "Attaque +20 % en n'équipant aucun enregistrement de compétence Heathcliff dans le même ensemble.",
        "numbers": "atk_percent: 20"
    },
    {
        "name": "Protection de la lame sacrée",
        "buff": "La défense augmente de 5 % x le nombre de records de compétence Heathcliff dans le même ensemble.",
        "numbers": "def_percent: 5"
    },
    {
        "name": "Blessures de combat réduites 5",
        "buff": "Réduit les dégâts des monstres tranchants, de poussée et d'éléments contondants ainsi que les dégâts causés par les affections de statut de 5 %.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Aqua Boost 5",
        "buff": "Dégâts élémentaires autres que l'eau infligés aux ennemis -50 % (non élémentaires inclus) et dégâts de l'élément eau aux ennemis +45 %.",
        "numbers": "fireDmg: -50, windDmg: -50, earthDmg: -50, holyDmg: -50, darkDmg: -50, noneDmg: -50, waterDmg: 45, general_dmg: 45"
    },
    {
        "name": "Améliorer le coup de brûlure 5",
        "buff": "â— +taux de réussite pour Burn.",
        "numbers": "No Stats Parsed"
    },
    {
        "name": "Amélioration de l'élément Feu4/Buff",
        "buff": "Dégâts de l'élément feu +9,00 % pendant 15 s.",
        "numbers": "fireDmg: 9"
    },
    {
        "name": "Petite marque/débuff",
        "buff": "La prochaine attaque reçue par l’ennemi induira 1,5x de dégâts.",
        "numbers": "general_dmg: 50"
    },
    {
        "name": "Force de flamme 4/Buff",
        "buff": "Dégâts de l'élément feu +15,00 % pendant 15 s.",
        "numbers": "fireDmg: 15"
    },
    {
        "name": "Amélioration de l'élément sombre4/Buff",
        "buff": "Dégâts des éléments sombres +9,00 % pendant 15 s.",
        "numbers": "darkDmg: 9"
    }
];
