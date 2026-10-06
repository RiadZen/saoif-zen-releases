/**
 * SAOIF Cooking System Database
 * Contains EXP Progression (Lv 1-100), Dishes, Crafted/Intermediate Ingredients, and Base Ingredients.
 * Automatically structured for the SAOIF-ZEN Cooking feature.
 */

const COOKING_DATA = {
  "version": "1.2.0",
  "updatedAt": "2026-10-04",
  "iconBaseUrl": "https://raw.githubusercontent.com/Nayuta-Kani/SAOIF-Skill-Records-Database/master/items/",
  "expTable": [
    {
      "level": 1,
      "total": 0,
      "next": 1200
    },
    {
      "level": 2,
      "total": 1200,
      "next": 3600
    },
    {
      "level": 3,
      "total": 4800,
      "next": 7200
    },
    {
      "level": 4,
      "total": 12000,
      "next": 12000
    },
    {
      "level": 5,
      "total": 24000,
      "next": 18000
    },
    {
      "level": 6,
      "total": 42000,
      "next": 25200
    },
    {
      "level": 7,
      "total": 67200,
      "next": 33600
    },
    {
      "level": 8,
      "total": 100800,
      "next": 43200
    },
    {
      "level": 9,
      "total": 144000,
      "next": 54000
    },
    {
      "level": 10,
      "total": 198000,
      "next": 66000
    },
    {
      "level": 11,
      "total": 264000,
      "next": 79200
    },
    {
      "level": 12,
      "total": 343200,
      "next": 93600
    },
    {
      "level": 13,
      "total": 436800,
      "next": 109200
    },
    {
      "level": 14,
      "total": 546000,
      "next": 126000
    },
    {
      "level": 15,
      "total": 672000,
      "next": 144000
    },
    {
      "level": 16,
      "total": 816000,
      "next": 163200
    },
    {
      "level": 17,
      "total": 979200,
      "next": 183600
    },
    {
      "level": 18,
      "total": 1162800,
      "next": 205200
    },
    {
      "level": 19,
      "total": 1368000,
      "next": 228000
    },
    {
      "level": 20,
      "total": 1596000,
      "next": 252000
    },
    {
      "level": 21,
      "total": 1848000,
      "next": 277200
    },
    {
      "level": 22,
      "total": 2125200,
      "next": 303600
    },
    {
      "level": 23,
      "total": 2428800,
      "next": 331200
    },
    {
      "level": 24,
      "total": 2760000,
      "next": 360000
    },
    {
      "level": 25,
      "total": 3120000,
      "next": 390000
    },
    {
      "level": 26,
      "total": 3510000,
      "next": 421200
    },
    {
      "level": 27,
      "total": 3931200,
      "next": 453600
    },
    {
      "level": 28,
      "total": 4384800,
      "next": 487200
    },
    {
      "level": 29,
      "total": 4872000,
      "next": 522000
    },
    {
      "level": 30,
      "total": 5394000,
      "next": 558000
    },
    {
      "level": 31,
      "total": 5952000,
      "next": 595200
    },
    {
      "level": 32,
      "total": 6547200,
      "next": 633600
    },
    {
      "level": 33,
      "total": 7180800,
      "next": 673200
    },
    {
      "level": 34,
      "total": 7854000,
      "next": 714000
    },
    {
      "level": 35,
      "total": 8568000,
      "next": 756000
    },
    {
      "level": 36,
      "total": 9324000,
      "next": 799200
    },
    {
      "level": 37,
      "total": 10123200,
      "next": 843600
    },
    {
      "level": 38,
      "total": 10966800,
      "next": 889200
    },
    {
      "level": 39,
      "total": 11856000,
      "next": 936000
    },
    {
      "level": 40,
      "total": 12792000,
      "next": 984000
    },
    {
      "level": 41,
      "total": 13776000,
      "next": 1033200
    },
    {
      "level": 42,
      "total": 14809200,
      "next": 1083600
    },
    {
      "level": 43,
      "total": 15892800,
      "next": 1135200
    },
    {
      "level": 44,
      "total": 17028000,
      "next": 1188000
    },
    {
      "level": 45,
      "total": 18216000,
      "next": 1242000
    },
    {
      "level": 46,
      "total": 19458000,
      "next": 1297200
    },
    {
      "level": 47,
      "total": 20755200,
      "next": 1353600
    },
    {
      "level": 48,
      "total": 22108800,
      "next": 1411200
    },
    {
      "level": 49,
      "total": 23520000,
      "next": 1470000
    },
    {
      "level": 50,
      "total": 24990000,
      "next": 1530000
    },
    {
      "level": 51,
      "total": 26520000,
      "next": 1591200
    },
    {
      "level": 52,
      "total": 28111200,
      "next": 1653600
    },
    {
      "level": 53,
      "total": 29764800,
      "next": 1717200
    },
    {
      "level": 54,
      "total": 31482000,
      "next": 1782000
    },
    {
      "level": 55,
      "total": 33264000,
      "next": 1848000
    },
    {
      "level": 56,
      "total": 35112000,
      "next": 1915200
    },
    {
      "level": 57,
      "total": 37027200,
      "next": 1983600
    },
    {
      "level": 58,
      "total": 39010800,
      "next": 2053200
    },
    {
      "level": 59,
      "total": 41064000,
      "next": 2124000
    },
    {
      "level": 60,
      "total": 43188000,
      "next": 2196000
    },
    {
      "level": 61,
      "total": 45384000,
      "next": 2269200
    },
    {
      "level": 62,
      "total": 47653200,
      "next": 2343600
    },
    {
      "level": 63,
      "total": 49996800,
      "next": 2419200
    },
    {
      "level": 64,
      "total": 52416000,
      "next": 2496000
    },
    {
      "level": 65,
      "total": 54912000,
      "next": 2574000
    },
    {
      "level": 66,
      "total": 57486000,
      "next": 2653200
    },
    {
      "level": 67,
      "total": 60139200,
      "next": 2733600
    },
    {
      "level": 68,
      "total": 62872800,
      "next": 2815200
    },
    {
      "level": 69,
      "total": 65688000,
      "next": 2898000
    },
    {
      "level": 70,
      "total": 68586000,
      "next": 2982000
    },
    {
      "level": 71,
      "total": 71568000,
      "next": 3067200
    },
    {
      "level": 72,
      "total": 74635200,
      "next": 3153600
    },
    {
      "level": 73,
      "total": 77788800,
      "next": 3241200
    },
    {
      "level": 74,
      "total": 81030000,
      "next": 3330000
    },
    {
      "level": 75,
      "total": 84360000,
      "next": 3420000
    },
    {
      "level": 76,
      "total": 87780000,
      "next": 3511200
    },
    {
      "level": 77,
      "total": 91291200,
      "next": 3603600
    },
    {
      "level": 78,
      "total": 94894800,
      "next": 3697200
    },
    {
      "level": 79,
      "total": 98592000,
      "next": 3792000
    },
    {
      "level": 80,
      "total": 102384000,
      "next": 3888000
    },
    {
      "level": 81,
      "total": 106272000,
      "next": 3985200
    },
    {
      "level": 82,
      "total": 110257200,
      "next": 4083600
    },
    {
      "level": 83,
      "total": 114340800,
      "next": 4183200
    },
    {
      "level": 84,
      "total": 118524000,
      "next": 4284000
    },
    {
      "level": 85,
      "total": 122808000,
      "next": 4386000
    },
    {
      "level": 86,
      "total": 127194000,
      "next": 4489200
    },
    {
      "level": 87,
      "total": 131683200,
      "next": 4593600
    },
    {
      "level": 88,
      "total": 136276800,
      "next": 4699200
    },
    {
      "level": 89,
      "total": 140976000,
      "next": 4806000
    },
    {
      "level": 90,
      "total": 145782000,
      "next": 4914000
    },
    {
      "level": 91,
      "total": 150696000,
      "next": 5023200
    },
    {
      "level": 92,
      "total": 155719200,
      "next": 5133600
    },
    {
      "level": 93,
      "total": 160852800,
      "next": 5245200
    },
    {
      "level": 94,
      "total": 166098000,
      "next": 5358000
    },
    {
      "level": 95,
      "total": 171456000,
      "next": 5472000
    },
    {
      "level": 96,
      "total": 176928000,
      "next": 5587200
    },
    {
      "level": 97,
      "total": 182515200,
      "next": 5703600
    },
    {
      "level": 98,
      "total": 188218800,
      "next": 5821200
    },
    {
      "level": 99,
      "total": 194040000,
      "next": 5940000
    },
    {
      "level": 100,
      "total": 199980000,
      "next": 6060000
    }
  ],
  "craftedIngredients": [
    {
      "id": "star_salt",
      "name": "★Salt",
      "levelReq": 1,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 3
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_grainsacksalt_01.png"
    },
    {
      "id": "star_bread_dough",
      "name": "★Bread Dough",
      "levelReq": 5,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 2
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_dough_01.png"
    },
    {
      "id": "star_cheese",
      "name": "★Cheese",
      "levelReq": 10,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "milk",
          "name": "Milk",
          "count": 3
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_cheesepot_01.png"
    },
    {
      "id": "star_bouillon",
      "itemId": 1000879,
      "recipeId": 19,
      "name": "★Bouillon",
      "levelReq": 12,
      "colCost": 6000,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        },
        {
          "id": "animal_bone",
          "name": "Animal Bone",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_whitesauces_01.png"
    },
    {
      "id": "star_bread",
      "name": "★Bread",
      "levelReq": 40,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "star_bread_dough",
          "name": "★Bread Dough",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "star_dressing",
      "name": "★Dressing",
      "levelReq": 40,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "vinegar",
          "name": "Vinegar",
          "count": 1
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_dressingsauces_01.png"
    },
    {
      "id": "star_tomato_sauce",
      "name": "★Tomato Sauce",
      "levelReq": 15,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "tomato",
          "name": "Tomato",
          "count": 2
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_tomatosauces_01.png"
    },
    {
      "id": "star_jam",
      "itemId": 1000881,
      "recipeId": 21,
      "name": "★Jam",
      "levelReq": 18,
      "colCost": 9000,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 2
        },
        {
          "id": "berry",
          "name": "Berry",
          "count": 3
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_jampot_01.png"
    },
    {
      "id": "star_white_sauce",
      "itemId": 1000943,
      "name": "★White Sauce",
      "levelReq": 20,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "milk",
          "name": "Milk",
          "count": 2
        },
        {
          "id": "butter",
          "name": "Butter",
          "count": 1
        },
        {
          "id": "flour",
          "name": "Flour",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_whitesauces_01.png"
    },
    {
      "id": "star_demi_glace",
      "itemId": 1000945,
      "name": "★Demi-Glace Sauce",
      "levelReq": 25,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "red_meat_steak",
          "name": "Red Meat Steak",
          "count": 1
        },
        {
          "id": "onion",
          "name": "Onion",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_demi-glacesauces_01.png"
    },
    {
      "id": "star_herb_oil",
      "itemId": 1000884,
      "recipeId": 24,
      "name": "★Herb oil",
      "levelReq": 25,
      "colCost": 12500,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "oil",
          "name": "Oil",
          "count": 2
        },
        {
          "id": "herb",
          "name": "Herb",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_oil_01.png"
    },
    {
      "id": "star_dashi",
      "itemId": 1000885,
      "recipeId": 25,
      "name": "★Dashi",
      "levelReq": 28,
      "colCost": 14000,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        },
        {
          "id": "white_fish_loin",
          "name": "White Fish Loin",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_soupstocksauces_01.png"
    },
    {
      "id": "star_fruit_vinegar",
      "itemId": 1000886,
      "recipeId": 26,
      "name": "★Fruit vinegar",
      "levelReq": 30,
      "colCost": 15000,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "apple",
          "name": "Apple",
          "count": 2
        },
        {
          "id": "vinegar",
          "name": "Vinegar",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_sauces_01.png"
    },
    {
      "id": "star_bean_paste",
      "itemId": 1000887,
      "recipeId": 27,
      "name": "★Bean paste",
      "levelReq": 32,
      "colCost": 16000,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        },
        {
          "id": "bean",
          "name": "Bean",
          "count": 3
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_misopot_01.png"
    },
    {
      "id": "star_tsukune_mixture",
      "itemId": 1000888,
      "recipeId": 28,
      "name": "★Tsukune mixture",
      "levelReq": 33,
      "colCost": 16500,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "egg",
          "name": "Egg",
          "count": 1
        },
        {
          "id": "minced_white_meat",
          "name": "Minced White Meat",
          "count": 3
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_mincedmeat_w01.png"
    },
    {
      "id": "star_raw_bacon",
      "itemId": 1000889,
      "recipeId": 29,
      "name": "★Raw bacon",
      "levelReq": 35,
      "colCost": 17500,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 2
        },
        {
          "id": "red_meat_belly_block",
          "name": "Red Meat Belly Block",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_bacon_01.png"
    },
    {
      "id": "star_raw_sausage",
      "itemId": 1000891,
      "recipeId": 31,
      "name": "★Raw sausage",
      "levelReq": 38,
      "colCost": 19000,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "spice",
          "name": "Spice",
          "count": 1
        },
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_sausage_01.png"
    },
    {
      "id": "star_hamburger_patty_mixture",
      "itemId": 1000892,
      "recipeId": 32,
      "name": "★Hamburger patty mixture",
      "levelReq": 38,
      "colCost": 19000,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 2
        },
        {
          "id": "onion",
          "name": "Onion",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_mincedmeat_r01.png"
    },
    {
      "id": "star_meat_sauce",
      "itemId": 1000944,
      "recipeId": 84,
      "name": "★Meat sauce",
      "levelReq": 42,
      "colCost": 21000,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_meatsauces_01.png"
    },
    {
      "id": "star_berry_vinegar",
      "itemId": 1001041,
      "recipeId": 181,
      "name": "★Berry vinegar",
      "levelReq": 45,
      "colCost": 22500,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1
        },
        {
          "id": "berry",
          "name": "Berry",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_redwine_01.png"
    },
    {
      "id": "star_pickles",
      "itemId": 1000946,
      "recipeId": 86,
      "name": "★Pickles",
      "levelReq": 45,
      "colCost": 22500,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 2
        },
        {
          "id": "vinegar",
          "name": "Vinegar",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_cooking_asazuke_01.png"
    },
    {
      "id": "star_smoked_meat",
      "itemId": 1000947,
      "recipeId": 87,
      "name": "★Smoked meat",
      "levelReq": 48,
      "colCost": 24000,
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Intermediate dish that can be made through cooking",
      "materials": [
        {
          "id": "star_raw_bacon",
          "name": "★Raw bacon",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "spice",
          "name": "Spice",
          "count": 1
        },
        {
          "id": "firewood",
          "name": "Firewood",
          "count": 1
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_blockmeat_r01.png"
    },
    {
      "id": "star_cream",
      "name": "★Cream",
      "levelReq": 45,
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Seasoning that can be made through cooking",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1
        },
        {
          "id": "milk",
          "name": "Milk",
          "count": 2
        }
      ],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_milkbutter_01.png"
    },
    {
      "id": "star_noodles",
      "name": "★Noodles",
      "levelReq": "??",
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Noodles that can be made through cooking",
      "materials": [],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "star_noodle_soup_base",
      "name": "★Noodle Soup Base",
      "levelReq": "??",
      "category": "Seasoning",
      "effect": "No Effect",
      "duration": "-",
      "description": "Soup base seasoning that can be made through cooking",
      "materials": [],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_soupstocksauces_01.png"
    },
    {
      "id": "star_ham",
      "name": "★Ham",
      "levelReq": "??",
      "category": "Intermediate Dish",
      "effect": "No Effect",
      "duration": "-",
      "description": "Ham that can be made through cooking",
      "materials": [],
      "isCrafted": true,
      "iconFile": "ui_icon_item_ingredients_ham_01.png"
    }
  ],
  "dishes": [
    {
      "id": "sandwich",
      "name": "Sandwich",
      "levelReq": 1,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Max HP+ 1%",
      "effects": [
        {
          "stat": "Max HP",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 2
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        },
        {
          "id": "lettuce",
          "name": "Lettuce",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_sandwich_01.png"
    },
    {
      "id": "yakiniku",
      "name": "Yakiniku",
      "levelReq": 1,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Additional Damage+200",
      "effects": [
        {
          "stat": "Additional Damage",
          "value": 200,
          "unit": "flat"
        }
      ],
      "duration": "2hrs",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "red_meat_steak",
          "name": "Red Meat Steak",
          "count": 1
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png"
    },
    {
      "id": "yakitori_skewer",
      "name": "Yakitori Skewer",
      "levelReq": 2,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Additional Damage+250",
      "effects": [
        {
          "stat": "Additional Damage",
          "value": 250,
          "unit": "flat"
        }
      ],
      "duration": "30min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "bone_in_chicken_thigh",
          "name": "Bone-In Chicken Thigh",
          "count": 2
        },
        {
          "id": "spice",
          "name": "Spice",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_skewer_01.png"
    },
    {
      "id": "fried_egg",
      "name": "Fried Egg",
      "levelReq": 2,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Gradually recovers HP+50",
      "effects": [
        {
          "stat": "Gradually recovers HP",
          "value": 50,
          "unit": "flat"
        }
      ],
      "duration": "20min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "egg",
          "name": "Egg",
          "count": 2
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedegg_01.png"
    },
    {
      "id": "onigiri",
      "name": "Onigiri",
      "levelReq": 3,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Stun Res.+5%",
      "effects": [
        {
          "stat": "Stun Res.",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "rice",
          "name": "Rice",
          "count": 2
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_onigiri_01.png"
    },
    {
      "id": "fish_skewer",
      "name": "Fish Skewer",
      "levelReq": 3,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Water Element Damage+ 1%",
      "effects": [
        {
          "stat": "Water Element Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "white_fish_loin",
          "name": "White Fish Loin",
          "count": 1
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_skewer_01.png"
    },
    {
      "id": "boiled_egg",
      "name": "Boiled Egg",
      "levelReq": 4,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Gradually recovers HP+70",
      "effects": [
        {
          "stat": "Gradually recovers HP",
          "value": 70,
          "unit": "flat"
        }
      ],
      "duration": "20min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "egg",
          "name": "Egg",
          "count": 3
        }
      ],
      "iconFile": "ui_icon_item_ingredients_eggs_01.png"
    },
    {
      "id": "steamed_potato",
      "name": "Steamed Potato",
      "levelReq": 5,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Earth Element Damage+ 1%",
      "effects": [
        {
          "stat": "Earth Element Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "potato",
          "name": "Potato",
          "count": 3
        }
      ],
      "iconFile": "ui_icon_item_cooking_boiled_01.png"
    },
    {
      "id": "grilled_mushroom",
      "name": "Grilled Mushroom",
      "levelReq": 6,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Poison Res.+5%",
      "effects": [
        {
          "stat": "Poison Res.",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "mushroom",
          "name": "Mushroom",
          "count": 2
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png"
    },
    {
      "id": "steak",
      "name": "Steak",
      "levelReq": 6,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Additional Damage+250",
      "effects": [
        {
          "stat": "Additional Damage",
          "value": 250,
          "unit": "flat"
        }
      ],
      "duration": "3hrs",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "red_meat_steak",
          "name": "Red Meat Steak",
          "count": 2
        },
        {
          "id": "spice",
          "name": "Spice",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png"
    },
    {
      "id": "salt_boiled_shrimp",
      "name": "Salt-Boiled Shrimp",
      "levelReq": 7,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Water Element Damage+ 1.2%",
      "effects": [
        {
          "stat": "Water Element Damage",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "1hrs",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 2
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_boiled_01.png"
    },
    {
      "id": "baked_apple",
      "name": "Baked Apple",
      "levelReq": 7,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Recovery Effect Up+0.5%",
      "effects": [
        {
          "stat": "Recovery Effect Up",
          "value": 0.5,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "apple",
          "name": "Apple",
          "count": 2
        },
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_dessert_01.png"
    },
    {
      "id": "honey_milk",
      "name": "Honey Milk",
      "levelReq": 8,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Holy Element Damage+ 1%",
      "effects": [
        {
          "stat": "Holy Element Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "15min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "milk",
          "name": "Milk",
          "count": 2
        },
        {
          "id": "honey",
          "name": "Honey",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_drink_01.png"
    },
    {
      "id": "french_fries",
      "name": "French Fries",
      "levelReq": 9,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Col Gain+ 1%",
      "effects": [
        {
          "stat": "Col Gain",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "potato",
          "name": "Potato",
          "count": 2
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png"
    },
    {
      "id": "vegetable_soup",
      "name": "Vegetable Soup",
      "levelReq": 9,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Flinch Res.+500",
      "effects": [
        {
          "stat": "Flinch Res.",
          "value": 500,
          "unit": "flat"
        }
      ],
      "duration": "3hrs",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1
        },
        {
          "id": "carrot",
          "name": "Carrot",
          "count": 1
        },
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png"
    },
    {
      "id": "seasoned_wild_greens",
      "name": "Seasoned Wild Greens",
      "levelReq": 10,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Petrify Res.+5%",
      "effects": [
        {
          "stat": "Petrify Res.",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "wild_greens",
          "name": "Wild Greens",
          "count": 2
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_asazuke_01.png"
    },
    {
      "id": "steamed_shellfish",
      "name": "Steamed Shellfish",
      "levelReq": 11,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Paralysis Res.+5%",
      "effects": [
        {
          "stat": "Paralysis Res.",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": null,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "shellfish",
          "name": "Shellfish",
          "count": 2
        },
        {
          "id": "rice_vinegar",
          "name": "Rice Vinegar",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_boiled_01.png"
    },
    {
      "id": "lemon_water",
      "itemId": 1000910,
      "recipeId": 50,
      "name": "Lemon water",
      "levelReq": 13,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Debility Resistance: +5%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "15min",
      "colCost": 6500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "lemon",
          "name": "Lemon",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_drink_01.png",
      "isHighLevel": false
    },
    {
      "id": "bean_soup",
      "itemId": 1000911,
      "recipeId": 51,
      "name": "Bean soup",
      "levelReq": 14,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Stun Resistance: +5%",
      "effects": [
        {
          "stat": "Stun Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 7000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "rock_salt",
          "name": "Rock Salt",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "bean",
          "name": "Bean",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": false
    },
    {
      "id": "ginger_pork",
      "itemId": 1000912,
      "recipeId": 52,
      "name": "Ginger pork",
      "levelReq": 15,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +1%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 7500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "ginger",
          "name": "Ginger",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "sliced_red_meat",
          "name": "Sliced Red Meat",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledginger_01.png",
      "isHighLevel": false
    },
    {
      "id": "stuffed_bell_peppers_with_meat",
      "itemId": 1000913,
      "recipeId": 53,
      "name": "Stuffed bell peppers with meat",
      "levelReq": 16,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Additional Damage: +300",
      "effects": [
        {
          "stat": "Additional Damage",
          "value": 300,
          "unit": "flat"
        }
      ],
      "duration": "2hrs",
      "colCost": 8000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "bell_pepper",
          "name": "Bell Pepper",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_stuffedpwithm_01.png",
      "isHighLevel": false
    },
    {
      "id": "croquette",
      "itemId": 1000914,
      "recipeId": 54,
      "name": "Croquette",
      "levelReq": 16,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Burn Resistance: +5%",
      "effects": [
        {
          "stat": "Burn Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 8000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "potato",
          "name": "Potato",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": false
    },
    {
      "id": "tempura",
      "itemId": 1000915,
      "recipeId": 55,
      "name": "Tempura",
      "levelReq": 17,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Burn Resistance: +5%",
      "effects": [
        {
          "stat": "Burn Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 8500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": false
    },
    {
      "id": "gyoza",
      "itemId": 1000916,
      "recipeId": 56,
      "name": "Gyoza",
      "levelReq": 18,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Additional Damage: +350",
      "effects": [
        {
          "stat": "Additional Damage",
          "value": 350,
          "unit": "flat"
        }
      ],
      "duration": "90min",
      "colCost": 9000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedgyoza_01.png",
      "isHighLevel": false
    },
    {
      "id": "braised_pork_belly",
      "itemId": 1000917,
      "recipeId": 57,
      "name": "Braised pork belly",
      "levelReq": 19,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Flinch Resistance: +5%",
      "effects": [
        {
          "stat": "Flinch Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 9500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "red_meat_belly_block",
          "name": "Red Meat Belly Block",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_braisedpork_01.png",
      "isHighLevel": false
    },
    {
      "id": "stir_fried_liver_and_garlic_chives",
      "itemId": 1000918,
      "recipeId": 58,
      "name": "Stir-fried liver and garlic chives",
      "levelReq": 19,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Bleed Resistance: +5%",
      "effects": [
        {
          "stat": "Bleed Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 9500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "liver",
          "name": "Liver",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "chive",
          "name": "Chive",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedchiveliver_01.png",
      "isHighLevel": false
    },
    {
      "id": "pudding",
      "itemId": 1000919,
      "recipeId": 59,
      "name": "Pudding",
      "levelReq": 20,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Sleep Resistance: +5%",
      "effects": [
        {
          "stat": "Sleep Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 10000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "milk",
          "name": "Milk",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_dessert_01.png",
      "isHighLevel": false
    },
    {
      "id": "castella",
      "itemId": 1000920,
      "recipeId": 60,
      "name": "Castella",
      "levelReq": 21,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "EXP Gain: +1%",
      "effects": [
        {
          "stat": "EXP Gain",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 10500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_castella_01.png",
      "isHighLevel": false
    },
    {
      "id": "pancake",
      "itemId": 1000921,
      "recipeId": 61,
      "name": "Pancake",
      "levelReq": 21,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Potion HP Recovery: +0.5%",
      "effects": [
        {
          "stat": "Potion HP Recovery",
          "value": 0.5,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 10500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "milk",
          "name": "Milk",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_pancake_01.png",
      "isHighLevel": false
    },
    {
      "id": "vegetable_tempura",
      "itemId": 1000922,
      "recipeId": 62,
      "name": "Vegetable tempura",
      "levelReq": 22,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Wind Attack: +1%",
      "effects": [
        {
          "stat": "Wind Attack",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 11000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "carrot",
          "name": "Carrot",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": false
    },
    {
      "id": "mushroom_tempura",
      "itemId": 1000923,
      "recipeId": 63,
      "name": "Mushroom tempura",
      "levelReq": 23,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Poison Resistance: +5%",
      "effects": [
        {
          "stat": "Poison Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 11500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "mushroom",
          "name": "Mushroom",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": false
    },
    {
      "id": "fish_tempura",
      "itemId": 1000925,
      "recipeId": 65,
      "name": "Fish tempura",
      "levelReq": 23,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Water Attack: +1.4%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 11500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "white_fish_loin",
          "name": "White Fish Loin",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": false
    },
    {
      "id": "wild_plant_tempura",
      "itemId": 1000924,
      "recipeId": 64,
      "name": "Wild plant tempura",
      "levelReq": 23,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Bind Resistance: +5%",
      "effects": [
        {
          "stat": "Bind Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 11500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "wild_greens",
          "name": "Wild Greens",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": false
    },
    {
      "id": "honey_pudding",
      "itemId": 1000926,
      "recipeId": 66,
      "name": "Honey pudding",
      "levelReq": 24,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Sleep Resistance: +5.5%",
      "effects": [
        {
          "stat": "Sleep Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 12000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "milk",
          "name": "Milk",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "honey",
          "name": "Honey",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_dessert_01.png",
      "isHighLevel": false
    },
    {
      "id": "shrimp_gyoza",
      "itemId": 1000927,
      "recipeId": 67,
      "name": "Shrimp gyoza",
      "levelReq": 25,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Critical Damage: +1%",
      "effects": [
        {
          "stat": "Critical Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 12500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedgyoza_01.png",
      "isHighLevel": false
    },
    {
      "id": "berry_pancake",
      "name": "Berry Pancake",
      "levelReq": 26,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Col Gain+ 1%",
      "effects": [
        {
          "stat": "Col Gain",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 13000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 2
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1
        },
        {
          "id": "berry",
          "name": "Berry",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_pancake_01.png",
      "isHighLevel": false
    },
    {
      "id": "honey_pancake",
      "itemId": 1000929,
      "recipeId": 69,
      "name": "Honey pancake",
      "levelReq": 27,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "EXP Gain: +1%",
      "effects": [
        {
          "stat": "EXP Gain",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 13500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "honey",
          "name": "Honey",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_pancake_01.png",
      "isHighLevel": false
    },
    {
      "id": "lemon_macaron",
      "itemId": 1000930,
      "recipeId": 70,
      "name": "Lemon macaron",
      "levelReq": 28,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Switch Damage: +1%",
      "effects": [
        {
          "stat": "Switch Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "20min",
      "colCost": 14000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "lemon",
          "name": "Lemon",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_macaron_01.png",
      "isHighLevel": false
    },
    {
      "id": "honey_castella",
      "itemId": 1000931,
      "recipeId": 71,
      "name": "Honey castella",
      "levelReq": 29,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Holy Attack: +1%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 14500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "honey",
          "name": "Honey",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_castella_01.png",
      "isHighLevel": false
    },
    {
      "id": "stir_fried_pork_belly_and_eggplant",
      "itemId": 1000932,
      "recipeId": 72,
      "name": "Stir-fried pork belly and eggplant",
      "levelReq": 30,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Earth Attack: +1%",
      "effects": [
        {
          "stat": "Earth Attack",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 15000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1
        },
        {
          "id": "eggplant",
          "name": "Eggplant",
          "count": 1
        },
        {
          "id": "white_meat_belly_block",
          "name": "White Meat Belly Block",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledginger_01.png",
      "isHighLevel": true
    },
    {
      "id": "ginger_white_fish",
      "itemId": 1000933,
      "recipeId": 73,
      "name": "Ginger white fish",
      "levelReq": 31,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +1.2%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 15500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "ginger",
          "name": "Ginger",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "sliced_white_meat",
          "name": "Sliced White Meat",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledginger_01.png",
      "isHighLevel": true
    },
    {
      "id": "minced_chicken_onigiri",
      "itemId": 1001081,
      "recipeId": 74,
      "name": "Minced chicken onigiri",
      "levelReq": 32,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Additional Damage: +350",
      "effects": [
        {
          "stat": "Additional Damage",
          "value": 350,
          "unit": "flat"
        }
      ],
      "duration": "30min",
      "colCost": 16000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "minced_white_meat",
          "name": "Minced White Meat",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_onigiri_01.png",
      "isHighLevel": true
    },
    {
      "id": "cheesy_broccoli",
      "name": "Cheesy Broccoli",
      "levelReq": 33,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Flinch Res.+550",
      "effects": [
        {
          "stat": "Flinch Res.",
          "value": 550,
          "unit": "flat"
        }
      ],
      "duration": "1hrs",
      "colCost": 16500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "broccoli",
          "name": "Broccoli",
          "count": 2
        },
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png"
    },
    {
      "id": "fried_chicken_tender",
      "itemId": 1000935,
      "recipeId": 75,
      "name": "Fried chicken tender",
      "levelReq": 33,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Critical Rate: +1%",
      "effects": [
        {
          "stat": "Critical Rate",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 16500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "chicken_tenderloin",
          "name": "Chicken Tenderloin",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": true
    },
    {
      "id": "lean_meat_sashimi",
      "itemId": 1000936,
      "recipeId": 76,
      "name": "Lean meat sashimi",
      "levelReq": 34,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Critical Damage: +1%",
      "effects": [
        {
          "stat": "Critical Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 17000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1
        },
        {
          "id": "lean_fish_loin",
          "name": "Lean Fish Loin",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_sashimi_01.png",
      "isHighLevel": true
    },
    {
      "id": "chicken_hot_pot",
      "itemId": 1000937,
      "recipeId": 77,
      "name": "Chicken hot pot",
      "levelReq": 35,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Max HP: +1%",
      "effects": [
        {
          "stat": "Max HP",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 17500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "bone_in_chicken_thigh",
          "name": "Bone-In Chicken Thigh",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "napa_cabbage",
          "name": "Napa Cabbage",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "green_onion",
          "name": "Green Onion",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "sweet_boiled_sweet_potato",
      "itemId": 1000938,
      "recipeId": 78,
      "name": "Sweet boiled sweet potato",
      "levelReq": 35,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Earth Attack: +1.2%",
      "effects": [
        {
          "stat": "Earth Attack",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 17500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "sweet_potato",
          "name": "Sweet Potato",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "stir_fried_bean_sprouts",
      "name": "Stir-Fried Bean Sprouts",
      "levelReq": 36,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Col Gain+ 1%",
      "effects": [
        {
          "stat": "Col Gain",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "1hrs",
      "colCost": 18000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "bean_sprouts",
          "name": "Bean Sprouts",
          "count": 2
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "count": 1
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedchiveliver_01.png",
      "isHighLevel": false
    },
    {
      "id": "tonkatsu",
      "itemId": 1001045,
      "recipeId": 182,
      "name": "Tonkatsu",
      "levelReq": 37,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Burn Resistance: +5%",
      "effects": [
        {
          "stat": "Burn Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 18500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1
        },
        {
          "id": "pork_loin",
          "name": "Pork Loin",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": true
    },
    {
      "id": "twice_cooked_pork",
      "itemId": 1000940,
      "recipeId": 80,
      "name": "Twice-cooked pork",
      "levelReq": 38,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Burn Resistance: +5.5%",
      "effects": [
        {
          "stat": "Burn Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 19000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "spice",
          "name": "Spice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "red_meat_belly_block",
          "name": "Red Meat Belly Block",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_braisedpork_01.png",
      "isHighLevel": true
    },
    {
      "id": "sweet_and_spicy_chicken_wings",
      "itemId": 1001046,
      "recipeId": 183,
      "name": "Sweet and spicy chicken wings",
      "levelReq": 39,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Bleed Resistance: +5%",
      "effects": [
        {
          "stat": "Bleed Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 19500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1
        },
        {
          "id": "chicken_wing",
          "name": "Chicken Wing",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_roastchicken_01.png",
      "isHighLevel": true
    },
    {
      "id": "asparagus_wrapped_in_bacon",
      "itemId": 1001004,
      "recipeId": 144,
      "name": "Asparagus wrapped in bacon",
      "levelReq": 40,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Col Gain: +1.2%",
      "effects": [
        {
          "stat": "Col Gain",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 20000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_raw_bacon",
          "name": "★Raw bacon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "asparagus",
          "name": "Asparagus",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "cheese_yakitori",
      "itemId": 1000951,
      "recipeId": 91,
      "name": "Cheese yakitori",
      "levelReq": 40,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Col Gain: +1.4%",
      "effects": [
        {
          "stat": "Col Gain",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 20000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "chicken_breast",
          "name": "Chicken Breast",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_skewer_01.png",
      "isHighLevel": true
    },
    {
      "id": "meat_pie",
      "itemId": 1000950,
      "recipeId": 90,
      "name": "Meat pie",
      "levelReq": 40,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Attack: +1%",
      "effects": [
        {
          "stat": "Attack",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 20000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread_dough",
          "name": "★Bread Dough",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "butter",
          "name": "Butter",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_applepie_01.png",
      "isHighLevel": true
    },
    {
      "id": "tomato_stew",
      "itemId": 1000952,
      "recipeId": 92,
      "name": "Tomato stew",
      "levelReq": 41,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Debility Resistance: +5%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 20500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "red_meat_block",
          "name": "Red Meat Block",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_tomatohotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "cheese_risotto",
      "itemId": 1000953,
      "recipeId": 93,
      "name": "Cheese risotto",
      "levelReq": 41,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Flinch Resistance: +5.5%",
      "effects": [
        {
          "stat": "Flinch Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 20500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "yakisoba",
      "itemId": 1000955,
      "recipeId": 95,
      "name": "Yakisoba",
      "levelReq": 42,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Wind Attack+ 1.2%",
      "effects": [
        {
          "stat": "Wind Attack",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 21000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1
        },
        {
          "id": "sliced_red_meat",
          "name": "Sliced Red Meat",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_yakisoba_01.png",
      "isHighLevel": true
    },
    {
      "id": "jam_crepe",
      "itemId": 1000954,
      "recipeId": 94,
      "name": "Jam crepe",
      "levelReq": 42,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Potion HP Recovery: +0.7%",
      "effects": [
        {
          "stat": "Potion HP Recovery",
          "value": 0.7,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 21000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_jam",
          "name": "★Jam",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_pancake_01.png",
      "isHighLevel": true
    },
    {
      "id": "tsukune",
      "itemId": 1000956,
      "recipeId": 96,
      "name": "Tsukune",
      "levelReq": 43,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Attack: +1.2%",
      "effects": [
        {
          "stat": "Attack",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 21500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_tsukune_mixture",
          "name": "★Tsukune mixture",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_skewer_01.png",
      "isHighLevel": true
    },
    {
      "id": "cream_soup",
      "itemId": 1000957,
      "recipeId": 97,
      "name": "Cream soup",
      "levelReq": 43,
      "category": "Dish",
      "dishType": "Side",
      "effect": "HP Regen (per 3s): +0.7%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 0.7,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 21500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "potato",
          "name": "Potato",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "herb_chicken",
      "itemId": 1000959,
      "recipeId": 99,
      "name": "Herb chicken",
      "levelReq": 44,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Poison Resistance: +5%",
      "effects": [
        {
          "stat": "Poison Resistance",
          "value": 5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 22000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "chicken_breast",
          "name": "Chicken Breast",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_roastchicken_01.png",
      "isHighLevel": true
    },
    {
      "id": "bouillon_soup",
      "itemId": 1000958,
      "recipeId": 98,
      "name": "Bouillon soup",
      "levelReq": 44,
      "category": "Dish",
      "dishType": "Side",
      "effect": "HP Regen (per 3s): +0.9%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 0.9,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 22000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "onion",
          "name": "Onion",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "carrot",
          "name": "Carrot",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "baked_shrimp_with_cheese",
      "itemId": 1000960,
      "recipeId": 100,
      "name": "Baked shrimp with cheese",
      "levelReq": 44,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Paralysis Resistance: +5.5%",
      "effects": [
        {
          "stat": "Paralysis Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 22000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png",
      "isHighLevel": true
    },
    {
      "id": "soy_sauce_ramen",
      "name": "Soy Sauce Ramen",
      "levelReq": 45,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Max HP+ 3% & Atk+ 2%",
      "effects": [
        {
          "stat": "Max HP+ 3% & Atk",
          "value": 2,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 22000,
      "description": "A steaming bowl of freshly crafted noodles in savory soy broth.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 2
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 2
        },
        {
          "id": "pork_loin",
          "name": "Pork Loin",
          "count": 1
        },
        {
          "id": "green_onion",
          "name": "Green Onion",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_soysauceramen_01.png",
      "isHighLevel": true
    },
    {
      "id": "ham_and_bean_soup",
      "itemId": 1000961,
      "recipeId": 101,
      "name": "Ham and bean soup",
      "levelReq": 45,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Stun Resistance: +5.5%",
      "effects": [
        {
          "stat": "Stun Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 22500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_ham",
          "name": "★Ham",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "potato",
          "name": "Potato",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "bean",
          "name": "Bean",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "mushroom_simmered_in_dashi_stock",
      "itemId": 1000962,
      "recipeId": 102,
      "name": "Mushroom simmered in dashi stock",
      "levelReq": 45,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Poison Resistance: +5.5%",
      "effects": [
        {
          "stat": "Poison Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 22500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "mushroom",
          "name": "Mushroom",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "tomato_pasta",
      "itemId": 1000963,
      "recipeId": 103,
      "name": "Tomato pasta",
      "levelReq": 46,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Debility Resistance: +5.5%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 23000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_neapolitan_01.png",
      "isHighLevel": true
    },
    {
      "id": "cream_pasta",
      "itemId": 1000964,
      "recipeId": 104,
      "name": "Cream pasta",
      "levelReq": 46,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Holy Attack: +1%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 23000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_neapolitan_01.png",
      "isHighLevel": true
    },
    {
      "id": "bean_paste_sandwich",
      "itemId": 1001082,
      "recipeId": 105,
      "name": "Bean paste sandwich",
      "levelReq": 47,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Bleed Resistance: +5.5%",
      "effects": [
        {
          "stat": "Bleed Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 23500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bean_paste",
          "name": "★Bean paste",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_sandwich_01.png",
      "isHighLevel": true
    },
    {
      "id": "potato_salad",
      "itemId": 1000967,
      "recipeId": 107,
      "name": "Potato salad",
      "levelReq": 47,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Earth Attack: +1.4%",
      "effects": [
        {
          "stat": "Earth Attack",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 23500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dressing",
          "name": "★Dressing",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "potato",
          "name": "Potato",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "cheese_mushroom",
      "itemId": 1000966,
      "recipeId": 106,
      "name": "Cheese mushroom",
      "levelReq": 47,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Poison Resistance: +6%",
      "effects": [
        {
          "stat": "Poison Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 23500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "mushroom",
          "name": "Mushroom",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "herb_grilled_dish",
      "itemId": 1000969,
      "recipeId": 109,
      "name": "Herb-grilled dish",
      "levelReq": 48,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Debility Resistance: +6%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 24000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "red_meat_block",
          "name": "Red Meat Block",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "white_fish_carpaccio",
      "itemId": 1001083,
      "recipeId": 108,
      "name": "White fish carpaccio",
      "levelReq": 48,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Water Attack: +1.4%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 24000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "white_fish_loin",
          "name": "White Fish Loin",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_sashimi_01.png",
      "isHighLevel": true
    },
    {
      "id": "fruit_vinegar_drink",
      "itemId": 1000970,
      "recipeId": 110,
      "name": "Fruit vinegar drink",
      "levelReq": 48,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Debility Resistance: +6.5%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "15min",
      "colCost": 24000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_fruit_vinegar",
          "name": "★Fruit vinegar",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "honey",
          "name": "Honey",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_drink_01.png",
      "isHighLevel": true
    },
    {
      "id": "steamed_clams_with_bouillon",
      "itemId": 1000971,
      "recipeId": 111,
      "name": "Steamed clams with bouillon",
      "levelReq": 49,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Paralysis Resistance: +6%",
      "effects": [
        {
          "stat": "Paralysis Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 24500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_berry_vinegar",
          "name": "★Berry vinegar",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "shellfish",
          "name": "Shellfish",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_shrimpchili_01.png",
      "isHighLevel": true
    },
    {
      "id": "chicken_stock_rice_porridge",
      "itemId": 1000972,
      "recipeId": 112,
      "name": "Chicken stock rice porridge",
      "levelReq": 49,
      "category": "Dish",
      "dishType": "Main",
      "effect": "HP Regen (per 3s): +1.1%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 1.1,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 24500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "omurice",
      "name": "Omurice",
      "levelReq": 50,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Exp Gain+ 1% Max HP+ 1.6%",
      "effects": [
        {
          "stat": "Exp Gain+ 1% Max HP",
          "value": 1.6,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 25000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "egg",
          "name": "Egg",
          "count": 2
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1
        },
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_omeletterice_01.png",
      "isHighLevel": true
    },
    {
      "id": "wild_plant_pasta",
      "itemId": 1000973,
      "recipeId": 113,
      "name": "Wild plant pasta",
      "levelReq": 50,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Wind Attack: +1.2%, Poison Resistance: +6%",
      "effects": [
        {
          "stat": "Wind Attack",
          "value": 1.2,
          "unit": "%"
        },
        {
          "stat": "Poison Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 25000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "wild_greens",
          "name": "Wild Greens",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_neapolitan_01.png",
      "isHighLevel": true
    },
    {
      "id": "naporitan_pasta",
      "itemId": 1000975,
      "recipeId": 115,
      "name": "Naporitan pasta",
      "levelReq": 50,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Max HP: +1.4%, Switch Damage: +1%",
      "effects": [
        {
          "stat": "Max HP",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Switch Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 25000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "onion",
          "name": "Onion",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_neapolitan_01.png",
      "isHighLevel": true
    },
    {
      "id": "meat_and_potato_stew",
      "itemId": 1000974,
      "recipeId": 114,
      "name": "Meat and potato stew",
      "levelReq": 50,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +1.2%, Max HP: +1.2%",
      "effects": [
        {
          "stat": "Attack",
          "value": 1.2,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 25000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "potato",
          "name": "Potato",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "sliced_red_meat",
          "name": "Sliced Red Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "chili_shrimp",
      "itemId": 1000978,
      "recipeId": 118,
      "name": "Chili shrimp",
      "levelReq": 51,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +1.4%, Water Attack: +1.4%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Water Attack",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 25500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "spice",
          "name": "Spice",
          "count": 1
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_shrimpchili_01.png",
      "isHighLevel": true
    },
    {
      "id": "macaron",
      "name": "Macaron",
      "levelReq": 52,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Critical Rate+ 1.2% Exp Gain+ 1.2%",
      "effects": [
        {
          "stat": "Critical Rate+ 1.2% Exp Gain",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "20min",
      "colCost": 25000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "egg",
          "name": "Egg",
          "count": 1
        },
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 2
        },
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_macaron_01.png",
      "isHighLevel": true
    },
    {
      "id": "miso_ramen",
      "itemId": 1000980,
      "recipeId": 120,
      "name": "Miso ramen",
      "levelReq": 52,
      "category": "Dish",
      "dishType": "Main",
      "effect": "HP Regen (per 3s): +1.1%, Sleep Resistance: +5.5%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 1.1,
          "unit": "%"
        },
        {
          "stat": "Sleep Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 26000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "miso",
          "name": "Miso",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_soysauceramen_01.png",
      "isHighLevel": true
    },
    {
      "id": "chashu_ramen",
      "itemId": 1000981,
      "recipeId": 121,
      "name": "Chashu ramen",
      "levelReq": 52,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +1.4%, Critical Damage: +1%",
      "effects": [
        {
          "stat": "Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Critical Damage",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 26000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "red_meat_belly_block",
          "name": "Red Meat Belly Block",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_soysauceramen_01.png",
      "isHighLevel": true
    },
    {
      "id": "vegetable_ramen",
      "itemId": 1000982,
      "recipeId": 122,
      "name": "Vegetable ramen",
      "levelReq": 52,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Debility Resistance: +6.5%, Poison Resistance: +6%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 6.5,
          "unit": "%"
        },
        {
          "stat": "Poison Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 26000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_soysauceramen_01.png",
      "isHighLevel": true
    },
    {
      "id": "seafood_ramen",
      "itemId": 1000983,
      "recipeId": 123,
      "name": "Seafood ramen",
      "levelReq": 53,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Water Attack: +1.4%, Paralysis Resistance: +6%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Paralysis Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 26500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_soysauceramen_01.png",
      "isHighLevel": true
    },
    {
      "id": "berry_pudding",
      "itemId": 1000984,
      "recipeId": 124,
      "name": "Berry pudding",
      "levelReq": 53,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Potion HP Recovery: +0.9%, Sleep Resistance: +6%",
      "effects": [
        {
          "stat": "Potion HP Recovery",
          "value": 0.9,
          "unit": "%"
        },
        {
          "stat": "Sleep Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 26500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "berry",
          "name": "Berry",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_dessert_01.png",
      "isHighLevel": true
    },
    {
      "id": "cheese_pudding",
      "itemId": 1000985,
      "recipeId": 125,
      "name": "Cheese pudding",
      "levelReq": 53,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Holy Attack: +1.2%, Potion HP Recovery: +1.1%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 1.2,
          "unit": "%"
        },
        {
          "stat": "Potion HP Recovery",
          "value": 1.1,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 26500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_dessert_01.png",
      "isHighLevel": true
    },
    {
      "id": "cheese_gyoza",
      "itemId": 1000986,
      "recipeId": 126,
      "name": "Cheese gyoza",
      "levelReq": 54,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Attack: +1.6%, Stun Resistance: +6%",
      "effects": [
        {
          "stat": "Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Stun Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 27000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedgyoza_01.png",
      "isHighLevel": true
    },
    {
      "id": "berry_macaron",
      "itemId": 1000987,
      "recipeId": 127,
      "name": "Berry macaron",
      "levelReq": 55,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Col Gain: +1.6%, EXP Gain: +1.4%",
      "effects": [
        {
          "stat": "Col Gain",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "EXP Gain",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "20min",
      "colCost": 27500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_jam",
          "name": "★Jam",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "sugar",
          "name": "Sugar",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_macaron_01.png",
      "isHighLevel": true
    },
    {
      "id": "white_fish_steak",
      "itemId": 1000990,
      "recipeId": 130,
      "name": "White fish steak",
      "levelReq": 56,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +1.6%, Critical Damage: +1.2%",
      "effects": [
        {
          "stat": "Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Critical Damage",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 28000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "butter",
          "name": "Butter",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "white_meat_steak",
          "name": "White Meat Steak",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png",
      "isHighLevel": true
    },
    {
      "id": "simmered_white_fish_and_daikon_radish",
      "itemId": 1000991,
      "recipeId": 131,
      "name": "Simmered white fish and daikon radish",
      "levelReq": 56,
      "category": "Dish",
      "dishType": "Main",
      "effect": "HP Regen (per 3s): +1.3%, Sleep Resistance: +6%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 1.3,
          "unit": "%"
        },
        {
          "stat": "Sleep Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 28000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "daikon_radish",
          "name": "Daikon Radish",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "white_meat_block",
          "name": "White Meat Block",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_sashimi_01.png",
      "isHighLevel": true
    },
    {
      "id": "roasted_whole_chicken",
      "itemId": 1000992,
      "recipeId": 132,
      "name": "Roasted whole chicken",
      "levelReq": 57,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +1.6%, Max HP: +1.6%",
      "effects": [
        {
          "stat": "Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 1.6,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 28500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "whole_chicken",
          "name": "Whole Chicken",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_roastchicken_01.png",
      "isHighLevel": true
    },
    {
      "id": "bacon_and_eggs",
      "itemId": 1000993,
      "recipeId": 133,
      "name": "Bacon and eggs",
      "levelReq": 57,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "HP Regen (per 3s): +1.5%, Bleed Resistance: +6%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 1.5,
          "unit": "%"
        },
        {
          "stat": "Bleed Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 28500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_raw_bacon",
          "name": "★Raw bacon",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedegg_01.png",
      "isHighLevel": true
    },
    {
      "id": "grilled_sausage",
      "itemId": 1000994,
      "recipeId": 134,
      "name": "Grilled sausage",
      "levelReq": 58,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Fire Attack: +1.6%, Attack: +1.8%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 1.8,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 29000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_raw_sausage",
          "name": "★Raw sausage",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_ingredients_sausage_01.png",
      "isHighLevel": true
    },
    {
      "id": "cabbage_roll",
      "itemId": 1000996,
      "recipeId": 136,
      "name": "Cabbage roll",
      "levelReq": 58,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Flinch Resistance: +6%, HP Regen (per 3s): +1.7%",
      "effects": [
        {
          "stat": "Flinch Resistance",
          "value": 6,
          "unit": "%"
        },
        {
          "stat": "HP Regen (per 3s)",
          "value": 1.7,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 29000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "minced_red_meat",
          "name": "Minced Red Meat",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_stuffedpwithm_01.png",
      "isHighLevel": true
    },
    {
      "id": "pot_au_feu",
      "itemId": 1000995,
      "recipeId": 135,
      "name": "Pot-au-feu",
      "levelReq": 58,
      "category": "Dish",
      "dishType": "Main",
      "effect": "HP Regen (per 3s): +1.5%, Max HP: +1.8%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 1.5,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 1.8,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 29000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_raw_sausage",
          "name": "★Raw sausage",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "carrot",
          "name": "Carrot",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "garlic_steak",
      "itemId": 1000997,
      "recipeId": 137,
      "name": "Garlic steak",
      "levelReq": 59,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +1.6%, Attack: +1.8%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 1.8,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 29500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "count": 1
        },
        {
          "id": "red_meat_steak",
          "name": "Red Meat Steak",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png",
      "isHighLevel": true
    },
    {
      "id": "lightly_pickled_cucumber",
      "itemId": 1000998,
      "recipeId": 138,
      "name": "Lightly pickled cucumber",
      "levelReq": 59,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Debility Resistance: +7%, Bind Resistance: +5.5%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 7,
          "unit": "%"
        },
        {
          "stat": "Bind Resistance",
          "value": 5.5,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 29500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "cucumber",
          "name": "Cucumber",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_asazuke_01.png",
      "isHighLevel": true
    },
    {
      "id": "lightly_pickled_napa_cabbage",
      "itemId": 1000999,
      "recipeId": 139,
      "name": "Lightly pickled Napa cabbage",
      "levelReq": 60,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Debility Resistance: +7.5%, Bind Resistance: +6%",
      "effects": [
        {
          "stat": "Debility Resistance",
          "value": 7.5,
          "unit": "%"
        },
        {
          "stat": "Bind Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 30000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "napa_cabbage",
          "name": "Napa Cabbage",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_asazuke_01.png",
      "isHighLevel": true
    },
    {
      "id": "sauteed_spinach",
      "itemId": 1001000,
      "recipeId": 140,
      "name": "Sautéed spinach",
      "levelReq": 60,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Attack: +2%, Bleed Resistance: +6%",
      "effects": [
        {
          "stat": "Attack",
          "value": 2,
          "unit": "%"
        },
        {
          "stat": "Bleed Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 30000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_raw_bacon",
          "name": "★Raw bacon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "spinach",
          "name": "Spinach",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_friedchiveliver_01.png",
      "isHighLevel": true
    },
    {
      "id": "sauteed_white_meat",
      "itemId": 1001047,
      "recipeId": 184,
      "name": "Sautéed white meat",
      "levelReq": 61,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +2%, Critical Rate: +1%",
      "effects": [
        {
          "stat": "Attack",
          "value": 2,
          "unit": "%"
        },
        {
          "stat": "Critical Rate",
          "value": 1,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 30500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "white_meat",
          "name": "White Meat",
          "count": 2
        },
        {
          "id": "butter",
          "name": "Butter",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png",
      "isHighLevel": true
    },
    {
      "id": "hamburger",
      "itemId": 1001007,
      "recipeId": 147,
      "name": "Hamburger",
      "levelReq": 62,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Attack: +2.2%, Max HP: +2%",
      "effects": [
        {
          "stat": "Attack",
          "value": 2.2,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 31000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_hamburger_patty_mixture",
          "name": "★Hamburger patty mixture",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_hamburger_01.png",
      "isHighLevel": true
    },
    {
      "id": "pumpkin_soup",
      "itemId": 1001002,
      "recipeId": 142,
      "name": "Pumpkin soup",
      "levelReq": 62,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Defense: +1%, HP Regen (per 3s): +1.9%",
      "effects": [
        {
          "stat": "Defense",
          "value": 1,
          "unit": "%"
        },
        {
          "stat": "HP Regen (per 3s)",
          "value": 1.9,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 31000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "pumpkin",
          "name": "Pumpkin",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "simmered_bamboo_shoots",
      "itemId": 1001001,
      "recipeId": 141,
      "name": "Simmered bamboo shoots",
      "levelReq": 62,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Earth Attack: +1.4%, HP Regen (per 3s): +2.1%",
      "effects": [
        {
          "stat": "Earth Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "HP Regen (per 3s)",
          "value": 2.1,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 31000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "soy_sauce",
          "name": "Soy Sauce",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "bamboo_shoot",
          "name": "Bamboo Shoot",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "salad",
      "itemId": 1001006,
      "recipeId": 146,
      "name": "Salad",
      "levelReq": 62,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Wind Attack: +1.4%, Debility Resistance: +8%",
      "effects": [
        {
          "stat": "Wind Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Debility Resistance",
          "value": 8,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 31000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dressing",
          "name": "★Dressing",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "tomato",
          "name": "Tomato",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "hamburger_steak",
      "itemId": 1001008,
      "recipeId": 148,
      "name": "Hamburger steak",
      "levelReq": 63,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +2.2%, Max HP: +2%",
      "effects": [
        {
          "stat": "Attack",
          "value": 2.2,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 31500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_hamburger_patty_mixture",
          "name": "★Hamburger patty mixture",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_hamburg_01.png",
      "isHighLevel": true
    },
    {
      "id": "meat_rice_porridge",
      "itemId": 1001084,
      "recipeId": 149,
      "name": "Meat rice porridge",
      "levelReq": 64,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +1.6%, Max HP: +2%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 32000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "red_meat_block",
          "name": "Red Meat Block",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "meat_sauce_pasta",
      "itemId": 1001011,
      "recipeId": 151,
      "name": "Meat sauce pasta",
      "levelReq": 65,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +1.8%, Attack: +2.4%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1.8,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 2.4,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 32500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_meat_sauce",
          "name": "★Meat sauce",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_neapolitan_01.png",
      "isHighLevel": true
    },
    {
      "id": "gratin",
      "itemId": 1001010,
      "recipeId": 150,
      "name": "Gratin",
      "levelReq": 65,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Holy Attack: +1.2%, EXP Gain: +1.4%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 1.2,
          "unit": "%"
        },
        {
          "stat": "EXP Gain",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 32500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "chicken_breast",
          "name": "Chicken Breast",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png",
      "isHighLevel": true
    },
    {
      "id": "plain_udon",
      "name": "Plain Udon",
      "levelReq": 66,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Sleep Res.+6.5% Gradually recovers HP+210",
      "effects": [
        {
          "stat": "Sleep Res.+6.5% Gradually recovers HP",
          "value": 210,
          "unit": "flat"
        }
      ],
      "duration": "3hrs",
      "colCost": 33000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_noodle_soup_base",
          "name": "★Noodle Soup Base",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_udon_01.png",
      "isHighLevel": true
    },
    {
      "id": "wild_plant_udon",
      "itemId": 1001013,
      "recipeId": 153,
      "name": "Wild plant udon",
      "levelReq": 67,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Bind Resistance: +6%, Poison Resistance: +6.5%",
      "effects": [
        {
          "stat": "Bind Resistance",
          "value": 6,
          "unit": "%"
        },
        {
          "stat": "Poison Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 33500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_noodle_soup_base",
          "name": "★Noodle Soup Base",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "wild_greens",
          "name": "Wild Greens",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_udon_01.png",
      "isHighLevel": true
    },
    {
      "id": "smoked_meat_sandwich",
      "itemId": 1001015,
      "recipeId": 155,
      "name": "Smoked meat sandwich",
      "levelReq": 68,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Dark Attack: +1%, Attack: +2.6%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 1,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 2.6,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 34000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_smoked_meat",
          "name": "★Smoked meat",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_sandwich_01.png",
      "isHighLevel": true
    },
    {
      "id": "meat_udon",
      "itemId": 1001085,
      "recipeId": 154,
      "name": "Meat udon",
      "levelReq": 68,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +1.8%, Paralysis Resistance: +6.5%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 1.8,
          "unit": "%"
        },
        {
          "stat": "Paralysis Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 34000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_noodle_soup_base",
          "name": "★Noodle Soup Base",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "sliced_red_meat",
          "name": "Sliced Red Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_udon_01.png",
      "isHighLevel": true
    },
    {
      "id": "tuna_roll",
      "itemId": 1001048,
      "recipeId": 185,
      "name": "Tuna roll",
      "levelReq": 69,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Water Attack: +1.6%, Critical Damage: +1.4%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Critical Damage",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 34500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "rice",
          "name": "Rice",
          "count": 1
        },
        {
          "id": "seaweed",
          "name": "Seaweed",
          "count": 1
        },
        {
          "id": "lean_fish_loin",
          "name": "Lean Fish Loin",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_tekkamaki_01.png",
      "isHighLevel": true
    },
    {
      "id": "demi_glace_stew",
      "itemId": 1001019,
      "recipeId": 159,
      "name": "Demi-glace stew",
      "levelReq": 70,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Flinch Resistance: +6%, Max HP: +2%",
      "effects": [
        {
          "stat": "Flinch Resistance",
          "value": 6,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 35000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "potato",
          "name": "Potato",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "red_meat_block",
          "name": "Red Meat Block",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_demi-glacehotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "vegetable_rice_porridge",
      "itemId": 1001087,
      "recipeId": 157,
      "name": "Vegetable rice porridge",
      "levelReq": 70,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Earth Attack: +1.4%, Fire Attack: +2.2%",
      "effects": [
        {
          "stat": "Earth Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Fire Attack",
          "value": 2.2,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 35000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "potato",
          "name": "Potato",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "carrot",
          "name": "Carrot",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "seafood_rice_porridge",
      "itemId": 1001088,
      "recipeId": 158,
      "name": "Seafood rice porridge",
      "levelReq": 70,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +2.4%, Water Attack: +1.6%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 2.4,
          "unit": "%"
        },
        {
          "stat": "Water Attack",
          "value": 1.6,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 35000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "white_fish_loin",
          "name": "White Fish Loin",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "chicken_rice_porridge",
      "itemId": 1001086,
      "recipeId": 156,
      "name": "Chicken rice porridge",
      "levelReq": 70,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +2%, Attack: +2.6%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 2,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 2.6,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 35000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "bone_in_chicken_thigh",
          "name": "Bone-In Chicken Thigh",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "mushroom_cream_pasta",
      "itemId": 1001049,
      "recipeId": 186,
      "name": "Mushroom cream pasta",
      "levelReq": 71,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Holy Attack: +1.4%, Poison Resistance: +7%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Poison Resistance",
          "value": 7,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 35500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "mushroom",
          "name": "Mushroom",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_neapolitan_01.png",
      "isHighLevel": true
    },
    {
      "id": "shrimp_gratin",
      "itemId": 1001020,
      "recipeId": 160,
      "name": "Shrimp gratin",
      "levelReq": 72,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Holy Attack: +1.6%, Water Attack: +1.8%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Water Attack",
          "value": 1.8,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 36000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png",
      "isHighLevel": true
    },
    {
      "id": "meat_doria",
      "itemId": 1001021,
      "recipeId": 161,
      "name": "Meat doria",
      "levelReq": 72,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +2.8%, Max HP: +2.2%",
      "effects": [
        {
          "stat": "Attack",
          "value": 2.8,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2.2,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 36000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_meat_sauce",
          "name": "★Meat sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png",
      "isHighLevel": true
    },
    {
      "id": "lasagna",
      "itemId": 1001022,
      "recipeId": 162,
      "name": "Lasagna",
      "levelReq": 73,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +3%, Defense: +1.2%",
      "effects": [
        {
          "stat": "Attack",
          "value": 3,
          "unit": "%"
        },
        {
          "stat": "Defense",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 36500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_meat_sauce",
          "name": "★Meat sauce",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png",
      "isHighLevel": true
    },
    {
      "id": "stewed_hamburger_steak",
      "itemId": 1001024,
      "recipeId": 164,
      "name": "Stewed hamburger steak",
      "levelReq": 74,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +3.2%, Max HP: +2.4%",
      "effects": [
        {
          "stat": "Attack",
          "value": 3.2,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2.4,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 37000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_hamburger_patty_mixture",
          "name": "★Hamburger patty mixture",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "mushroom",
          "name": "Mushroom",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_hamburg_01.png",
      "isHighLevel": true
    },
    {
      "id": "cheeseburger",
      "itemId": 1001023,
      "recipeId": 163,
      "name": "Cheeseburger",
      "levelReq": 74,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Attack: +3.4%, Defense: +1.4%",
      "effects": [
        {
          "stat": "Attack",
          "value": 3.4,
          "unit": "%"
        },
        {
          "stat": "Defense",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 37000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_hamburger_patty_mixture",
          "name": "★Hamburger patty mixture",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_hamburger_01.png",
      "isHighLevel": true
    },
    {
      "id": "white_sauce_pasta",
      "itemId": 1001025,
      "recipeId": 165,
      "name": "White sauce pasta",
      "levelReq": 75,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Holy Attack: +1.8%, Max HP: +2.6%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 1.8,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2.6,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 37500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_noodles",
          "name": "★Noodles",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_neapolitan_01.png",
      "isHighLevel": true
    },
    {
      "id": "pickle_burger",
      "itemId": 1001026,
      "recipeId": 166,
      "name": "Pickle burger",
      "levelReq": 75,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Attack: +3.6%, Bind Resistance: +6.5%",
      "effects": [
        {
          "stat": "Attack",
          "value": 3.6,
          "unit": "%"
        },
        {
          "stat": "Bind Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 37500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_hamburger_patty_mixture",
          "name": "★Hamburger patty mixture",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_pickles",
          "name": "★Pickles",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_hamburger_01.png",
      "isHighLevel": true
    },
    {
      "id": "jam_sandwich",
      "itemId": 1001027,
      "recipeId": 167,
      "name": "Jam sandwich",
      "levelReq": 76,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Potion HP Recovery: +1.3%, Sleep Resistance: +7%",
      "effects": [
        {
          "stat": "Potion HP Recovery",
          "value": 1.3,
          "unit": "%"
        },
        {
          "stat": "Sleep Resistance",
          "value": 7,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 38000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_jam",
          "name": "★Jam",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_sandwich_01.png",
      "isHighLevel": true
    },
    {
      "id": "smoked_meat_pizza",
      "itemId": 1001028,
      "recipeId": 168,
      "name": "Smoked meat pizza",
      "levelReq": 76,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Dark Attack: +1.2%, Attack: +3.8%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 1.2,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 3.8,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 38000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread_dough",
          "name": "★Bread Dough",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_smoked_meat",
          "name": "★Smoked meat",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_margherita_01.png",
      "isHighLevel": true
    },
    {
      "id": "chicken_salad",
      "itemId": 1001029,
      "recipeId": 169,
      "name": "Chicken salad",
      "levelReq": 76,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Wind Attack: +1.4%, Debility Resistance: +8%",
      "effects": [
        {
          "stat": "Wind Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Debility Resistance",
          "value": 8,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 38000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dressing",
          "name": "★Dressing",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "chicken_tenderloin",
          "name": "Chicken Tenderloin",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "cabbage",
          "name": "Cabbage",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "seafood_gratin",
      "itemId": 1001050,
      "recipeId": 187,
      "name": "Seafood gratin",
      "levelReq": 77,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Water Attack: +2%, Defense: +1.4%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 2,
          "unit": "%"
        },
        {
          "stat": "Defense",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 38500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "shellfish",
          "name": "Shellfish",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png",
      "isHighLevel": true
    },
    {
      "id": "egg_sandwich",
      "itemId": 1001089,
      "recipeId": 170,
      "name": "Egg sandwich",
      "levelReq": 78,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Fire Attack: +2.6%, Burn Resistance: +6%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 2.6,
          "unit": "%"
        },
        {
          "stat": "Burn Resistance",
          "value": 6,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 39000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_sandwich_01.png",
      "isHighLevel": true
    },
    {
      "id": "pumpkin_croquette",
      "itemId": 1001090,
      "recipeId": 172,
      "name": "Pumpkin croquette",
      "levelReq": 78,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Fire Attack: +2.8%, Burn Resistance: +6.5%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 2.8,
          "unit": "%"
        },
        {
          "stat": "Burn Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 39000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "pumpkin",
          "name": "Pumpkin",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": true
    },
    {
      "id": "cream_croquette",
      "itemId": 1001031,
      "recipeId": 171,
      "name": "Cream croquette",
      "levelReq": 78,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Holy Attack: +2%, Defense: +1.6%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 2,
          "unit": "%"
        },
        {
          "stat": "Defense",
          "value": 1.6,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 39000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "flour",
          "name": "Flour",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "oil",
          "name": "Oil",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_croquette_01.png",
      "isHighLevel": true
    },
    {
      "id": "beef_stroganoff",
      "itemId": 1001051,
      "recipeId": 188,
      "name": "Beef stroganoff",
      "levelReq": 79,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +3.8%, Defense: +1.6%",
      "effects": [
        {
          "stat": "Attack",
          "value": 3.8,
          "unit": "%"
        },
        {
          "stat": "Defense",
          "value": 1.6,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 39500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "red_meat_block",
          "name": "Red Meat Block",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_demi-glacehotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "cream_omurice",
      "itemId": 1001033,
      "recipeId": 173,
      "name": "Cream omurice",
      "levelReq": 80,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Holy Attack: +2%, EXP Gain: +1.6%",
      "effects": [
        {
          "stat": "Holy Attack",
          "value": 2,
          "unit": "%"
        },
        {
          "stat": "EXP Gain",
          "value": 1.6,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 40000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_omeletterice_01.png",
      "isHighLevel": true
    },
    {
      "id": "demi_glace_omurice",
      "itemId": 1001034,
      "recipeId": 174,
      "name": "Demi-glace omurice",
      "levelReq": 80,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +4%, EXP Gain: +1.8%",
      "effects": [
        {
          "stat": "Attack",
          "value": 4,
          "unit": "%"
        },
        {
          "stat": "EXP Gain",
          "value": 1.8,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 40000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "egg",
          "name": "Egg",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_omeletterice_01.png",
      "isHighLevel": true
    },
    {
      "id": "pork_rice_porridge",
      "itemId": 1001091,
      "recipeId": 189,
      "name": "Pork rice porridge",
      "levelReq": 81,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +2.8%, Max HP: +2.6%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 2.8,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2.6,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 40500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "pork_loin",
          "name": "Pork Loin",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "chicken_tender_salad",
      "itemId": 1001035,
      "recipeId": 175,
      "name": "Chicken tender salad",
      "levelReq": 82,
      "category": "Dish",
      "dishType": "Side",
      "effect": "Critical Rate: +1.2%, Debility Resistance: +8.5%",
      "effects": [
        {
          "stat": "Critical Rate",
          "value": 1.2,
          "unit": "%"
        },
        {
          "stat": "Debility Resistance",
          "value": 8.5,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 41000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dressing",
          "name": "★Dressing",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "chicken_tenderloin",
          "name": "Chicken Tenderloin",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "lettuce",
          "name": "Lettuce",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledveg_01.png",
      "isHighLevel": true
    },
    {
      "id": "hayashi_rice",
      "itemId": 1001053,
      "recipeId": 190,
      "name": "Hayashi rice",
      "levelReq": 83,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +4.2%, Critical Damage: +1.4%",
      "effects": [
        {
          "stat": "Attack",
          "value": 4.2,
          "unit": "%"
        },
        {
          "stat": "Critical Damage",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 41500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "red_meat_steak",
          "name": "Red Meat Steak",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "ham_sandwich",
      "name": "Ham Sandwich",
      "levelReq": 84,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Stun Res.+6.5% Attack+4.4%",
      "effects": [
        {
          "stat": "Stun Res.+6.5% Attack",
          "value": 4.4,
          "unit": "%"
        }
      ],
      "duration": "30min",
      "colCost": 42000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_ham",
          "name": "★Ham",
          "count": 2,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_sandwich_01.png",
      "isHighLevel": true
    },
    {
      "id": "blt_sandwich",
      "itemId": 1001037,
      "recipeId": 177,
      "name": "BLT sandwich",
      "levelReq": 85,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Attack: +4.4%, Bleed Resistance: +6.5%",
      "effects": [
        {
          "stat": "Attack",
          "value": 4.4,
          "unit": "%"
        },
        {
          "stat": "Bleed Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 42500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_raw_bacon",
          "name": "★Raw bacon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "lettuce",
          "name": "Lettuce",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_sandwich_01.png",
      "isHighLevel": true
    },
    {
      "id": "miso_soup_with_green_onion",
      "itemId": 1001003,
      "recipeId": 143,
      "name": "Miso soup with green onion",
      "levelReq": 85,
      "category": "Dish",
      "dishType": "Side",
      "effect": "HP Regen (per 3s): +2.3%, Max HP: +2.8%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 2.3,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2.8,
          "unit": "%"
        }
      ],
      "duration": "90min",
      "colCost": 42500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "miso",
          "name": "Miso",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "green_onion",
          "name": "Green Onion",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "samgyetang_style_soup",
      "itemId": 1001054,
      "recipeId": 191,
      "name": "Samgyetang-style soup",
      "levelReq": 86,
      "category": "Dish",
      "dishType": "Main",
      "effect": "HP Regen (per 3s): +2.3%, Debility Resistance: +8.5%",
      "effects": [
        {
          "stat": "HP Regen (per 3s)",
          "value": 2.3,
          "unit": "%"
        },
        {
          "stat": "Debility Resistance",
          "value": 8.5,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 43000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "whole_chicken",
          "name": "Whole Chicken",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "beef_pie",
      "itemId": 1001055,
      "recipeId": 192,
      "name": "Beef pie",
      "levelReq": 87,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Attack: +4.4%, Flinch Resistance: +6.5%",
      "effects": [
        {
          "stat": "Attack",
          "value": 4.4,
          "unit": "%"
        },
        {
          "stat": "Flinch Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 43500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread_dough",
          "name": "★Bread Dough",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "red_meat_block",
          "name": "Red Meat Block",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_applepie_01.png",
      "isHighLevel": true
    },
    {
      "id": "acqua_pazza",
      "itemId": 1001056,
      "recipeId": 193,
      "name": "Acqua pazza",
      "levelReq": 88,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Water Attack: +2.2%, Paralysis Resistance: +7%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 2.2,
          "unit": "%"
        },
        {
          "stat": "Paralysis Resistance",
          "value": 7,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 44000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_berry_vinegar",
          "name": "★Berry vinegar",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "shellfish",
          "name": "Shellfish",
          "count": 1
        },
        {
          "id": "white_fish_loin",
          "name": "White Fish Loin",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_boiled_01.png",
      "isHighLevel": true
    },
    {
      "id": "mille_feuille",
      "itemId": 1001057,
      "recipeId": 194,
      "name": "Mille-feuille",
      "levelReq": 89,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Col Gain: +1.6%, EXP Gain: +2%",
      "effects": [
        {
          "stat": "Col Gain",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "EXP Gain",
          "value": 2,
          "unit": "%"
        }
      ],
      "duration": "45min",
      "colCost": 44500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread_dough",
          "name": "★Bread Dough",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_jam",
          "name": "★Jam",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_cream",
          "name": "★Cream",
          "count": 1,
          "isCrafted": true
        }
      ],
      "iconFile": "ui_icon_item_cooking_pancake_01.png",
      "isHighLevel": true
    },
    {
      "id": "legendary_meat_pie",
      "itemId": 1000988,
      "recipeId": 128,
      "name": "Legendary meat pie",
      "levelReq": 90,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Dark Attack: +1.4%, Attack: +4.6%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 4.6,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 45000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bread_dough",
          "name": "★Bread Dough",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "butter",
          "name": "Butter",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "aged_meat",
          "name": "Aged Meat",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_applepie_01.png",
      "isHighLevel": true
    },
    {
      "id": "aged_meat_steak",
      "itemId": 1001092,
      "recipeId": 195,
      "name": "Aged meat steak",
      "levelReq": 91,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Dark Attack: +1.4%, Attack: +4.6%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 1.4,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 4.6,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 45500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "aged_meat",
          "name": "Aged Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png",
      "isHighLevel": true
    },
    {
      "id": "grilled_aged_meat",
      "itemId": 1001093,
      "recipeId": 129,
      "name": "Grilled aged meat",
      "levelReq": 92,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Dark Attack: +1.6%, Critical Damage: +1.4%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 1.6,
          "unit": "%"
        },
        {
          "stat": "Critical Damage",
          "value": 1.4,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 46000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_salt",
          "name": "★Salt",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "aged_meat",
          "name": "Aged Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png",
      "isHighLevel": true
    },
    {
      "id": "seafood_ajillo",
      "itemId": 1001059,
      "recipeId": 196,
      "name": "Seafood ajillo",
      "levelReq": 93,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Water Attack: +2.4%, Burn Resistance: +6.5%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 2.4,
          "unit": "%"
        },
        {
          "stat": "Burn Resistance",
          "value": 6.5,
          "unit": "%"
        }
      ],
      "duration": "2hrs",
      "colCost": 46500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_herb_oil",
          "name": "★Herb oil",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 2
        },
        {
          "id": "shellfish",
          "name": "Shellfish",
          "count": 1
        }
      ],
      "iconFile": "ui_icon_item_cooking_boiled_01.png",
      "isHighLevel": true
    },
    {
      "id": "ragout_lasagna",
      "itemId": 1001060,
      "recipeId": 197,
      "name": "Ragout lasagna",
      "levelReq": 94,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Dark Attack: +1.8%, Attack: +4.8%, Defense: +1.8%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 1.8,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 4.8,
          "unit": "%"
        },
        {
          "stat": "Defense",
          "value": 1.8,
          "unit": "%"
        }
      ],
      "duration": "3hrs",
      "colCost": 47000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_white_sauce",
          "name": "★White Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "aged_meat",
          "name": "Aged Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_gratin_01.png",
      "isHighLevel": true
    },
    {
      "id": "whole_chicken_tomato_stew",
      "itemId": 1001061,
      "recipeId": 198,
      "name": "Whole chicken tomato stew",
      "levelReq": 95,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Fire Attack: +2.8%, Max HP: +2.8%",
      "effects": [
        {
          "stat": "Fire Attack",
          "value": 2.8,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 2.8,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 47500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_tomato_sauce",
          "name": "★Tomato Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "onion",
          "name": "Onion",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "whole_chicken",
          "name": "Whole Chicken",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_tomatohotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "ragout_rabbit_stew",
      "itemId": 1001038,
      "recipeId": 178,
      "name": "Ragout Rabbit stew",
      "levelReq": 96,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Dark Attack: +1.8%, Attack: +4.8%, Max HP: +3%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 1.8,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 4.8,
          "unit": "%"
        },
        {
          "stat": "Max HP",
          "value": 3,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 48000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "carrot",
          "name": "Carrot",
          "count": 3,
          "isCrafted": false
        },
        {
          "id": "aged_meat",
          "name": "Aged Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_demi-glacehotpot_01.png",
      "isHighLevel": true
    },
    {
      "id": "deluxe_steak_plate",
      "itemId": 1001062,
      "recipeId": 199,
      "name": "Deluxe steak plate",
      "levelReq": 97,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Attack: +5%, Critical Damage: +1.6%",
      "effects": [
        {
          "stat": "Attack",
          "value": 5,
          "unit": "%"
        },
        {
          "stat": "Critical Damage",
          "value": 1.6,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 48500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_demi_glace",
          "name": "★Demi-Glace Sauce",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_pickles",
          "name": "★Pickles",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "red_meat_steak",
          "name": "Red Meat Steak",
          "count": 2
        }
      ],
      "iconFile": "ui_icon_item_cooking_grilledsteak_01.png",
      "isHighLevel": true
    },
    {
      "id": "aged_meat_rice_porridge",
      "itemId": 1001094,
      "recipeId": 179,
      "name": "Aged meat rice porridge",
      "levelReq": 98,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Dark Attack: +2%, Fire Attack: +3%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 2,
          "unit": "%"
        },
        {
          "stat": "Fire Attack",
          "value": 3,
          "unit": "%"
        }
      ],
      "duration": "5hrs",
      "colCost": 49000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_dashi",
          "name": "★Dashi",
          "count": 2,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 1,
          "isCrafted": false
        },
        {
          "id": "aged_meat",
          "name": "Aged Meat",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "seafood_paella",
      "itemId": 1001063,
      "recipeId": 200,
      "name": "Seafood paella",
      "levelReq": 99,
      "category": "Dish",
      "dishType": "Main",
      "effect": "Water Attack: +2.4%, Switch Damage: +1.2%",
      "effects": [
        {
          "stat": "Water Attack",
          "value": 2.4,
          "unit": "%"
        },
        {
          "stat": "Switch Damage",
          "value": 1.2,
          "unit": "%"
        }
      ],
      "duration": "4hrs",
      "colCost": 49500,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_bouillon",
          "name": "★Bouillon",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "rice",
          "name": "Rice",
          "count": 2,
          "isCrafted": false
        },
        {
          "id": "shrimp",
          "name": "Shrimp",
          "count": 1,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_risotto_01.png",
      "isHighLevel": true
    },
    {
      "id": "ragout_rabbit_burger",
      "itemId": 1001040,
      "recipeId": 180,
      "name": "Ragout Rabbit burger",
      "levelReq": 100,
      "category": "Dish",
      "dishType": "Snack",
      "effect": "Dark Attack: +2.2%, Attack: +5.2%, Critical Damage: +1.8%",
      "effects": [
        {
          "stat": "Dark Attack",
          "value": 2.2,
          "unit": "%"
        },
        {
          "stat": "Attack",
          "value": 5.2,
          "unit": "%"
        },
        {
          "stat": "Critical Damage",
          "value": 1.8,
          "unit": "%"
        }
      ],
      "duration": "1hr",
      "colCost": 50000,
      "description": "A dish made by cooking. Eating it temporarily boosts your abilities.",
      "materials": [
        {
          "id": "star_cheese",
          "name": "★Cheese",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "star_bread",
          "name": "★Bread",
          "count": 1,
          "isCrafted": true
        },
        {
          "id": "aged_meat",
          "name": "Aged Meat",
          "count": 2,
          "isCrafted": false
        }
      ],
      "iconFile": "ui_icon_item_cooking_hamburger_01.png",
      "isHighLevel": true
    }
  ],
  "baseIngredients": [
    {
      "id": "aged_meat",
      "name": "Aged Meat",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Ragout Rabbit"
        ],
        "notes": "Delicacy meat dropped by Ragout Rabbit; used in legendary ragout dishes"
      },
      "iconFile": "ui_icon_item_ingredients_meatchunk_01.png"
    },
    {
      "id": "sliced_white_meat",
      "name": "Sliced White Meat",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 17 Map 1 [Ch.2] (Adrenalinity Dino · x1)",
          "Floor 23 Map 2 [Ch.2] (Apparition Mink · x1)",
          "Floor 24 Map 1 [Ch.2] (Euxenite Boar · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 17 Map 1, Floor 23 Map 2, Floor 24 Map 1)"
      },
      "iconFile": "ui_icon_item_ingredients_slicedmeat_w01.png"
    },
    {
      "id": "white_meat_belly_block",
      "name": "White Meat Belly Block",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 17 Map 1 [Ch.2] (Adrenalinity Dino · x1)",
          "Floor 23 Map 2 [Ch.2] (Apparition Mink · x1)",
          "Floor 24 Map 1 [Ch.2] (Euxenite Boar · x1)",
          "Floor 92 [Ch.2] (Speculum Lion · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 17 Map 1, Floor 23 Map 2, Floor 24 Map 1)"
      },
      "iconFile": "ui_icon_item_ingredients_bellymeat_w01.png"
    },
    {
      "id": "white_meat_block",
      "name": "White Meat Block",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 91 Map 1 [Ch.1] (Crystal Cerat · x1)",
          "Floor 91 Map 2/Dungeon [Ch.1] (Blazing Mustang · x1)",
          "Floor 94 Dungeon [Ch.1] (Lycan Cogitat · x1)",
          "Floor 56 Dungeon [Ch.2] (Cave Kapiyva · x1)",
          "Floor 63 Dungeon [Ch.2] (Whitish Billy Goat · x1)",
          "Floor 79 Map 1 [Ch.2] (Junkyard Wolf · x1)",
          "Floor 92 [Ch.2] (Speculum Lion · x1)"
        ],
        "notes": "Dropped across Chapter 1 (3 floors) and Chapter 2 (4 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_blockmeat_w01.png"
    },
    {
      "id": "white_meat_steak",
      "name": "White Meat Steak",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 81 Map 2/Dungeon [Ch.1] (Viridian Unicorn · x1)",
          "Floor 33 Map 2 [Ch.2] (Wildland Wolf · x1)",
          "Floor 65 Map 1 [Ch.2] (Butterscotch Meiolania · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (2 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_steakmeat_w01.png"
    },
    {
      "id": "white_meat",
      "name": "White Meat",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 77 Dungeon [Ch.1] (Sulfur Gargoyle · x1)",
          "Floor 85 Map 1 [Ch.1] (Flaming Taotie · x1)",
          "Floor 16 Map 1 [Ch.2] (Dozer Crab · x1)",
          "Floor 24 Map 1 [Ch.2] (Lakeside Beak · x1)",
          "Floor 44 Map 1 [Ch.2] (Aquamarine Carbuncle · x1)",
          "Floor 65 Map 1 [Ch.2] (Candy Apple Egg · x1)",
          "Floor 69 Map 1 [Ch.2] (Thirsthroat Tadpole · x1)"
        ],
        "notes": "Dropped across Chapter 1 (2 floors) and Chapter 2 (4 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_slicedmeat_w01.png"
    },
    {
      "id": "minced_white_meat",
      "name": "Minced White Meat",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 8 Map 1 [Ch.1] (Penguin Knight · x2)",
          "Floor 8 Map 1-2 [Ch.1] (Rough Yeti · x2)",
          "Floor 14 Map 2 [Ch.1] (Gentle Meiolana · x2)",
          "Floor 20 Map 1/Dungeon [Ch.1] (Browny Squirrel · x2)",
          "Floor 20 Map 2/Dungeon [Ch.1] (Silverly Squirrel · x2)",
          "Floor 25 Map 1 [Ch.1] (Welded Gill · x2)",
          "Floor 40 Map 1/Dungeon [Ch.1] (Nasty Shrewman · x2)",
          "Floor 74 Map 1-2 [Ch.1] (Lizardman Lord · x2)",
          "Floor 85 Map 1 [Ch.1] (Flaming Taotie · x2)",
          "Floor 91 Map 1 [Ch.1] (Wrongous Mink · x2)",
          "Floor 91 Map 2/Dungeon [Ch.1] (Blazing Mustang · x2)",
          "Floor 94 Dungeon [Ch.1] (Lycan Cogitat · x2)",
          "Floor 14 Map 1 [Ch.1] (Gentle Meiolania · x2)",
          "Floor 91 Map 1 [Ch.1] (Crystal Cerat · x2)",
          "Floor 56 Dungeon [Ch.2] (Cave Kapiyva · x2)",
          "Floor 63 Dungeon [Ch.2] (Whitish Billy Goat · x2)",
          "Floor 79 Map 1 [Ch.2] (Junkyard Wolf · x2)"
        ],
        "notes": "Dropped across Chapter 1 (12 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_mincedmeat_w01.png"
    },
    {
      "id": "chicken_breast",
      "name": "Chicken Breast",
      "type": "Poultry",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 2 [Ch.2] (Ruffed Frog · x1)",
          "Floor 51 Map 1 [Ch.2] (Magichromed Kapiyva · x1)",
          "Floor 92 [Ch.2] (Speculum Lion · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 16 Map 2, Floor 51 Map 1)"
      },
      "iconFile": "ui_icon_item_ingredients_breastmeat_01.png"
    },
    {
      "id": "chicken_tenderloin",
      "name": "Chicken Tenderloin",
      "type": "Poultry",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [],
        "notes": "Drop location not yet discovered"
      },
      "iconFile": "ui_icon_item_ingredients_filletmeat_01.png"
    },
    {
      "id": "chicken_wing",
      "name": "Chicken Wing",
      "type": "Poultry",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 99 Dungeon [Ch.1] (Agile Swallow · x1)",
          "Floor 31 Map 1 [Ch.2] (Cliff Swallow · x1)",
          "Floor 96 [Ch.2] (Backpacker Swallow · x1)",
          "Floor 33 Map 2/Dungeon [Ch.2] (Heath Beak · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (2 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_thighmeat_01.png"
    },
    {
      "id": "whole_chicken",
      "name": "Whole Chicken",
      "type": "Poultry",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [],
        "notes": "Drop location not yet discovered"
      },
      "iconFile": "ui_icon_item_ingredients_wholechicken_01.png"
    },
    {
      "id": "bone_in_chicken_thigh",
      "name": "Bone-In Chicken Thigh",
      "type": "Poultry",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 75 Map 1 [Ch.1] (Slinky Mink · x1)",
          "Floor 75 Map 2/Dungeon [Ch.1] (Army Lycan · x1)",
          "Floor 85 Map 1-2/Dungeon [Ch.1] (Frilled Frog · x1)",
          "Floor 24 Map 2 [Ch.2] (Lizardman Centuria · x1)",
          "Floor 33 Map 1 [Ch.2] (Naked Mustang · x1)",
          "Floor 33 Map 2 [Ch.2] (Moor Macaque · x1)",
          "Floor 44 Map 1 [Ch.2] (Aquamarine Carbuncle · x1)",
          "Floor 65 Map 1 [Ch.2] (White Blonde Lycan · x1)"
        ],
        "notes": "Dropped across Chapter 1 (3 floors) and Chapter 2 (5 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_thighmeat_01.png"
    },
    {
      "id": "sliced_red_meat",
      "name": "Sliced Red Meat",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 33 Map 2 [Ch.2] (Moor Macaque · x1)",
          "Floor 58 [Ch.2] (Wired Tadpole · x1)",
          "Floor 33 Map 1 [Ch.2] (Naked Mustang · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 33 Map 2, Floor 58)"
      },
      "iconFile": "ui_icon_item_ingredients_slicedmeat_r01.png"
    },
    {
      "id": "red_meat_steak",
      "name": "Red Meat Steak",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 20 Map 1/Dungeon [Ch.1] (Granite Boar · x2)",
          "Floor 27 Map 1/Dungeon [Ch.1] (Coke Shell · x2)",
          "Floor 35 Map 1 [Ch.1] (Golden Billy Goat · x2)",
          "Floor 35 Map 2 [Ch.1] (Strange Egg · x2)",
          "Floor 35 Map 2/Dungeon [Ch.1] (Drunk Ape · x2)",
          "Floor 40 Map 1 [Ch.1] (Humpty Lesser Demon · x2)",
          "Floor 48 Dungeon [Ch.1] (Rhyolite Boar · x2)",
          "Floor 50 Map 1 [Ch.1] (Grassy Rhino · x2)",
          "Floor 55 Dungeon [Ch.1] (Valor Yeti · x2)",
          "Floor 85 Map 1 [Ch.1] (Uncanny Orc · x2)",
          "Floor 87 Dungeon [Ch.1] (Hot Spring Kapiyva · x2)",
          "Floor 91 Map 2/Dungeon [Ch.1] (Ogre Gladiator · x2)",
          "Floor 20 Map 2/Dungeon [Ch.1] (Stubborn Orc · x2)",
          "Floor 26 Dungeon [Ch.2] (Chamberlain Dog · x2)",
          "Floor 51 Map 2/Dungeon [Ch.2] (Enchanted Boar · x2)"
        ],
        "notes": "Dropped across Chapter 1 (12 floors) and Chapter 2 (2 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_steakmeat_r01.png"
    },
    {
      "id": "red_meat_block",
      "name": "Red Meat Block",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 13 Map 2/Dungeon [Ch.1] (Sniffy Dino · x2)",
          "Floor 14 Map 1 [Ch.1] (Knavish Meiolania · x2)",
          "Floor 35 Map 1 [Ch.1] (Amber Carbuncle · x2)",
          "Floor 48 Dungeon [Ch.1] (Docile Kapiyva · x2)",
          "Floor 50 Map 1 [Ch.1] (Bash Raptor · x2)",
          "Floor 50 Map 2/Dungeon [Ch.1] (Quartz Rhino · x2)",
          "Floor 61 Map 1 [Ch.1] (Clamor Beak · x2)",
          "Floor 81 Map 1 [Ch.1] (Intelligent Swallow · x2)",
          "Floor 85 Map 1 [Ch.1] (Uncanny Orc · x2)",
          "Floor 87 Dungeon [Ch.1] (Hot Spring Kapiyva · x2)",
          "Floor 91 Map 2/Dungeon [Ch.1] (Ogre Gladiator · x2)",
          "Floor 17 Map 2/Dungeon [Ch.2] (Ground Pterosaur · x2)",
          "Floor 26 Dungeon [Ch.2] (Chamberlain Dog · x2)",
          "Floor 72 [Ch.2] (Citadeland Orc · x2)",
          "Floor 72 [Ch.2] (Citadeland Wolf · x2)"
        ],
        "notes": "Dropped across Chapter 1 (11 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_blockmeat_r01.png"
    },
    {
      "id": "minced_red_meat",
      "name": "Minced Red Meat",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 1 [Ch.1] (Frenzy Boar · x3)",
          "Floor 1 dungeon [Ch.1] (Slate Boar · x3)",
          "Floor 1 [Ch.1] (Dire Wolf · x3)",
          "Floor 2 Map 1 [Ch.1] (Trembling Cow · x3)",
          "Floor 2 Map 1-2 [Ch.1] (Onrushing Cow · x3)",
          "Floor 3 Map 1 [Ch.1] (Magma Boar · x3)",
          "Floor 5 Map 1-2 [Ch.1] (Crumble Orc · x3)",
          "Floor 5 dungeon [Ch.1] (Sly Shrewman · x3)",
          "Floor 7 Map 1-2 [Ch.1] (Big Horn Billy Goat · x3)",
          "Floor 7 Map 1 [Ch.1] (Ground Shell · x3)",
          "Floor 7 Map 2 [Ch.1] (Blueness Kapiyva · x3)",
          "Floor 7 dungeon [Ch.1] (Violet Billy Goat · x3)",
          "Floor 8 dungeon [Ch.1] (Wild Yeti · x3)",
          "Floor 9 Map 2 [Ch.1] (Riddle Egg · x3)",
          "Floor 10 Map 1-2 [Ch.1] (White Guardian Dog · x3)",
          "Floor 10 Map 1 [Ch.1] (Rustic Orc · x3)",
          "Floor 10 dungeon [Ch.1] (Black Guardian Dog · x3)",
          "Floor 11 Map 1-2 [Ch.1] (Jagged Worm · x3)",
          "Floor 12 dungeon [Ch.1] (Merman Jack · x3)",
          "Floor 13 Map 1 [Ch.1] (Enigma Egg · x3)",
          "Floor 20 Map 2/Dungeon [Ch.1] (Stubborn Orc · x3)",
          "Floor 27 Map 1/Dungeon [Ch.1] (Coke Shell · x3)",
          "Floor 35 Map 1 [Ch.1] (Amber Carbuncle · x3)",
          "Floor 35 Map 1 [Ch.1] (Golden Billy Goat · x3)",
          "Floor 35 Map 2 [Ch.1] (Drunk Ape · x3)",
          "Floor 35 Map 2 [Ch.1] (Strange Egg · x3)",
          "Floor 40 Map 1 [Ch.1] (Humpty Lesser Demon · x3)",
          "Floor 48 Dungeon [Ch.1] (Rhyolite Boar · x3)",
          "Floor 48 Dungeon [Ch.1] (Docile Kapiyva · x3)",
          "Floor 50 Map 1 [Ch.1] (Grassy Rhino · x3)",
          "Floor 50 Map 1 [Ch.1] (Bash Raptor · x3)",
          "Floor 50 Map 2/Dungeon [Ch.1] (Quartz Rhino · x3)",
          "Floor 55 Dungeon [Ch.1] (Valor Yeti · x3)",
          "Floor 61 Map 1 [Ch.1] (Clamor Beak · x3)",
          "Floor 75 Map 2/Dungeon [Ch.1] (Bionic Gladiator · x3)",
          "Floor 75 Map 2/Dungeon [Ch.1] (Nut Eater · x3)",
          "Floor 81 Map 1 [Ch.1] (Ink Boar · x3)",
          "Floor 17 Map 2 [Ch.2] (Adrenalinity Rhino · x3)",
          "Floor 17 Map 2 [Ch.2] (Ground Pterosaur · x3)",
          "Floor 19 Map 1 [Ch.2] (Looming Mustang · x3)",
          "Floor 19 Map 2 [Ch.2] (Oriohorma Egg · x3)",
          "Floor 19 Map 2 [Ch.2] (Contracted Mummy · x3)",
          "Floor 19 Map 2 [Ch.2] (Swamp Cow · x3)",
          "Floor 23 Map 1 [Ch.2] (Apparition Orc · x3)",
          "Floor 51 Map 2/Dungeon [Ch.2] (Magichromed Unicorn · x3)",
          "Floor 69 Map 1 [Ch.2] (Thirsthroat Shrewman · x3)",
          "Floor 69 Map 1 [Ch.2] (Thirsthroat Shell · x3)",
          "Floor 69 Map 2/Dungeon [Ch.2] (Thirsthroat Worm · x3)",
          "Floor 69 Map 2/Dungeon [Ch.2] (Adamassadderian Amazon · x3)",
          "Floor 72 [Ch.2] (Citadeland Orc · x3)",
          "Floor 72 [Ch.2] (Citadeland Wolf · x3)",
          "Floor 83 Map 2 [Ch.2] (Marinized Gladiator · x3)"
        ],
        "notes": "Dropped across Chapter 1 (31 floors) and Chapter 2 (9 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_mincedmeat_r01.png"
    },
    {
      "id": "red_meat_belly_block",
      "name": "Red Meat Belly Block",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 81 Map 1 [Ch.1] (Ink Boar · x1)",
          "Floor 94 Dungeon [Ch.1] (Dino Cogitat · x1)",
          "Floor 87 Dungeon [Ch.1] (Hot Spring Kapiyva · x1)",
          "Floor 17 Map 2/Dungeon [Ch.2] (Adrenalinity Rhino · x1)",
          "Floor 26 Dungeon [Ch.2] (Chamberlain Tortoise · x1)",
          "Floor 83 Map 1 [Ch.2] (Bayside Wolf · x1)",
          "Floor 17 Map 2/Dungeon [Ch.2] (Adrenalinity Meiolania · x1)",
          "Floor 83 Map 2/Dungeon [Ch.2] (Marinized Gladiator · x1)"
        ],
        "notes": "Dropped across Chapter 1 (2 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_bellymeat_r01.png"
    },
    {
      "id": "pork_loin",
      "name": "Pork Loin",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 81 Map 2/Dungeon [Ch.1] (Durunian Wolf · x1)",
          "Floor 16 Map 1 [Ch.2] (Venasaxum Orc · x1)",
          "Floor 51 Map 1 [Ch.2] (Magichromed Kapiyva · x1)",
          "Floor 83 Map 1 [Ch.2] (Bayside Wolf · x1)",
          "Floor 51 Map 2/Dungeon [Ch.2] (Enchanted Boar · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_slicedmeat_r01.png"
    },
    {
      "id": "liver",
      "name": "Liver",
      "type": "Meat",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 19 Map 1 [Ch.2] (Looming Mustang · x1)",
          "Floor 24 Map 2 [Ch.2] (Lizardman Centuria · x1)",
          "Floor 33 Map 2 [Ch.2] (Moor Macaque · x1)",
          "Floor 51 Map 2/Dungeon [Ch.2] (Magichromed Unicorn · x1)",
          "Floor 19 Map 2/Dungeon [Ch.2] (Contracted Mummy · x1)",
          "Floor 33 Map 1 [Ch.2] (Naked Mustang · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_liver_01.png"
    },
    {
      "id": "animal_bone",
      "name": "Animal Bone",
      "type": "Drop/Material",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 1 [Ch.1] (Kobold Henchmen · x3)",
          "Floor 2 Map 2 [Ch.1] (Trembling Ox · x3)",
          "Floor 2 Map 2/Dungeon [Ch.1] (Glaring Shrewman · x3)",
          "Floor 2 dungeon [Ch.1] (Horror Bat · x3)",
          "Floor 3 Map 2 [Ch.1] (Malicious Shrewman · x3)",
          "Floor 4 Map 1 [Ch.1] (Kobold Soldier · x3)",
          "Floor 4 Map 2 [Ch.1] (Mauve Bat · x3)",
          "Floor 5 Map 1/Dungeon [Ch.1] (Moldy Mummy · x3)",
          "Floor 5 Map 2 [Ch.1] (Humid Mummy · x3)",
          "Floor 6 Map 1-2 [Ch.1] (Pointed Beak · x3)",
          "Floor 7 Map 1 [Ch.1] (Biting Kapiyva · x3)",
          "Floor 8 Map 1-2 [Ch.1] (Rough Yeti · x3)",
          "Floor 8 Map 2 [Ch.1] (Penguin Ax · x3)",
          "Floor 10 Map 1 [Ch.1] (Orochi Foot Soldier · x3)",
          "Floor 10 Map 2 [Ch.1] (Orochi Infantry · x3)",
          "Floor 11 Map 1 [Ch.1] (Globe Tail · x3)",
          "Floor 11 Map 2 [Ch.1] (Globe Tail Crimson · x3)",
          "Floor 11 Map 2 [Ch.1] (Spirit Lamia Lancer · x3)",
          "Floor 12 Map 1 [Ch.1] (Offensive Beak · x3)",
          "Floor 25 Map 1/Dungeon [Ch.1] (Wonder Grimoire · x3)",
          "Floor 25 Map 2/Dungeon [Ch.1] (Frost Knight · x3)",
          "Floor 25 Map 2 [Ch.1] (Curious Grimoire · x3)",
          "Floor 27 Map 1 [Ch.1] (Vanilla Dwarf Laborer · x3)",
          "Floor 27 Map 1/Dungeon [Ch.1] (Pale Bat · x3)",
          "Floor 27 Map 2/Dungeon [Ch.1] (Kobold Zombie Worker · x3)",
          "Floor 27 Map 2 [Ch.1] (Dark Dwarf Miner · x3)",
          "Floor 40 Map 1 [Ch.1] (Willow Bat · x3)",
          "Floor 40 Map 2/Dungeon [Ch.1] (Kobold Jailer · x3)",
          "Floor 40 Map 2/Dungeon [Ch.1] (Previous Knight · x3)",
          "Floor 74 Map 1-2 [Ch.1] (Lizardman Lord · x3)",
          "Floor 74 Map 1-2 [Ch.1] (Demonic Servant · x3)",
          "Floor 75 Map 1 [Ch.1] (Slinky Mink · x3)",
          "Floor 75 Map 2/Dungeon [Ch.1] (Army Lycan · x3)",
          "Floor 77 Dungeon [Ch.1] (Sulfur Gargoyle · x3)",
          "Floor 81 Map 1 [Ch.1] (Intelligent Swallow · x3)",
          "Floor 81 Map 2/Dungeon [Ch.1] (Durunian Wolf · x3)",
          "Floor 81 Map 2/Dungeon [Ch.1] (Viridian Unicorn · x3)",
          "Floor 91 Map 1 [Ch.1] (Sentry Knight · x3)",
          "Floor 91 Map 1 [Ch.1] (Wrongous Mink · x3)",
          "Floor 94 [Ch.1] (Dino Cogitat · x3)",
          "Floor 99 [Ch.1] (Elusive Grimoire · x3)",
          "Floor 99 [Ch.1] (Agile Swallow · x3)",
          "Floor 99 [Ch.1] (Musty Worm · x3)",
          "Floor 1 Map 1 [Ch.1] (Kobold Henchman · x3)",
          "Floor 19 Map 1 [Ch.2] (Contracted Knight · x3)",
          "Floor 19 Map 1 [Ch.2] (Toxic Mantis · x3)",
          "Floor 23 Map 1 [Ch.2] (Apparition Ashigaru · x3)",
          "Floor 23 Map 2 [Ch.2] (Apparition Nobushi · x3)",
          "Floor 31 Map 1 [Ch.2] (Cliff Swallow · x3)",
          "Floor 33 Map 2 [Ch.2] (Heath Beack · x3)",
          "Floor 51 Map 1 [Ch.2] (Magichromed Butterfly · x3)",
          "Floor 51 Map 1 [Ch.2] (Magichromed Wasp · x3)",
          "Floor 51 Map 2/Dungeon [Ch.2] (Mass-produced Colossus · x3)",
          "Floor 79 Map 1 [Ch.2] (Mechanoid Jiangshi · x3)",
          "Floor 79 Map 2/Dungeon [Ch.2] (Junk Slime · x3)",
          "Floor 79 Map 2/Dungeon [Ch.2] (Kobold Mechanoid · x3)",
          "Floor 96 [Ch.2] (Backpack Swallow · x3)",
          "Floor 33 Map 2/Dungeon [Ch.2] (Heath Beak · x3)",
          "Floor 96 Dungeon [Ch.2] (Backpacker Swallow · x3)"
        ],
        "notes": "Dropped across Chapter 1 (37 floors) and Chapter 2 (10 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_porkbone_01.png"
    },
    {
      "id": "lean_fish_loin",
      "name": "Lean Fish Loin",
      "type": "Seafood",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 2 [Ch.2] (Ruffed Frog · x1)",
          "Floor 58 [Ch.2] (Whetstone Racoon Man · x1)",
          "Floor 83 Map 1 [Ch.2] (Merman Pirate · x1)",
          "Floor 83 Map 2/Dungeon [Ch.2] (Merman Sergeant · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 16 Map 2, Floor 58, Floor 83 Map 1)"
      },
      "iconFile": "ui_icon_item_ingredients_redfishfillet_01.png"
    },
    {
      "id": "white_fish_loin",
      "name": "White Fish Loin",
      "type": "Seafood",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 2 dungeon [Ch.1] (Keenfin Tadpole · x3)",
          "Floor 4 Map 1-2 [Ch.1] (Dorsalfin Tadpole · x3)",
          "Floor 4 Map 1 [Ch.1] (Scuttle Crab · x3)",
          "Floor 6 Map 1 [Ch.1] (Quaint Toad · x3)",
          "Floor 6 Map 1 [Ch.1] (Predator Fish · x3)",
          "Floor 6 Map 2 [Ch.1] (Scream Fish · x3)",
          "Floor 6 dungeon [Ch.1] (Boiling Crab · x3)",
          "Floor 6 dungeon [Ch.1] (Poisonous Toad · x3)",
          "Floor 7 dungeon [Ch.1] (Sharkfin Tadpole · x3)",
          "Floor 8 Map 1-2 [Ch.1] (Penguin Knight · x3)",
          "Floor 12 Map 1-2 [Ch.1] (Merman Knight · x3)",
          "Floor 13 Map 2/Dungeon [Ch.1] (Lava Crab · x3)",
          "Floor 14 Map 2 [Ch.1] (Furious Fish · x3)",
          "Floor 25 Map 1 [Ch.1] (Welded Gill · x3)",
          "Floor 61 Map 1 [Ch.1] (Crimped Gill · x3)",
          "Floor 61 Map 2/Dungeon [Ch.1] (Penguin Ax Berserker · x3)",
          "Floor 61 Map 2/Dungeon [Ch.1] (Ultisol Gill · x3)",
          "Floor 68 Dungeon [Ch.1] (Luscious Clam · x3)",
          "Floor 68 Dungeon [Ch.1] (Stout Crab · x3)",
          "Floor 85 Map 1-2/Dungeon [Ch.1] (Frilled Frog · x3)",
          "Floor 91 Map 2 [Ch.1] (Tingly Fairy · x3)",
          "Floor 4 Dungeon [Ch.1] (Fussy Crab · x3)",
          "Floor 31 Map 1 [Ch.2] (Solidfin Tadpole · x3)",
          "Floor 31 Map 1 [Ch.2] (Dull Shell · x3)",
          "Floor 42 Dungeon [Ch.2] (Airy Guy Spirit · x3)",
          "Floor 42 Dungeon [Ch.2] (Hardened Gill · x3)",
          "Floor 69 Map 1 [Ch.2] (Thirsthroat Tadpole · x3)",
          "Floor 79 Map 2/Dungeon [Ch.2] (Mechanoid Crab · x3)",
          "Floor 83 Map 1 [Ch.2] (Craggy Clam · x3)",
          "Floor 83 Map 2/Dungeon [Ch.2] (Merman Rogue · x3)"
        ],
        "notes": "Dropped across Chapter 1 (17 floors) and Chapter 2 (6 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_whitefishfillet_01.png"
    },
    {
      "id": "seaweed",
      "name": "Seaweed",
      "type": "Seafood",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 91 Map 2/Dungeon [Ch.1] (Tingly Fairy · x1)",
          "Floor 31 Map 1 [Ch.2] (Dull Shell · x1)",
          "Floor 42 Dungeon [Ch.2] (Airy Guy Spirit · x1)",
          "Floor 65 Map 2 [Ch.2] (Scrap Slime · x1)",
          "Floor 83 Map 2/Dungeon [Ch.2] (Merman Sergeant · x1)",
          "Floor 83 Map 2/Dungeon [Ch.2] (Merman Rogue · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (4 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "shellfish",
      "name": "Shellfish",
      "type": "Seafood",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 11 dungeon [Ch.1] (Wilderness Shell · x2)",
          "Floor 12 Map 1/Dungeon [Ch.1] (Fairy Shell · x2)",
          "Floor 12 Map 2 [Ch.1] (Strong Mimic · x2)",
          "Floor 68 Dungeon [Ch.1] (Stout Crab · x2)",
          "Floor 91 Map 2/Dungeon [Ch.1] (Tingly Fairy · x2)",
          "Floor 17 Map 2/Dungeon [Ch.2] (Adrenalinity Meiolania · x2)",
          "Floor 26 Dungeon [Ch.2] (Chamberlain Tortoise · x2)",
          "Floor 31 Map 1 [Ch.2] (Dull Shell · x2)",
          "Floor 69 Map 1 [Ch.2] (Thirsthroat Shell · x2)",
          "Floor 79 Map 2/Dungeon [Ch.2] (Mechanoid Crab · x2)",
          "Floor 83 Map 1 [Ch.2] (Craggy Clam · x2)",
          "Floor 83 Map 2/Dungeon [Ch.2] (Merman Rogue · x2)",
          "Floor 83 Map 2/Dungeon [Ch.2] (Merman Sergeant · x2)",
          "Floor 42 Dungeon [Ch.2] (Hardened Gill · x2)",
          "Floor 83 Map 1 [Ch.2] (Merman Pirate · x2)"
        ],
        "notes": "Dropped across Chapter 1 (5 floors) and Chapter 2 (7 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "shrimp",
      "name": "Shrimp",
      "type": "Seafood",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 20 Map 1 [Ch.1] (Longicorp Wasp · x2)",
          "Floor 61 Map 1 [Ch.1] (Crimped Gill · x2)",
          "Floor 61 Map 2/Dungeon [Ch.1] (Utilsol Gill · x2)",
          "Floor 61 Map 2/Dungeon [Ch.1] (Penguin Ax Berserker · x2)",
          "Floor 85 Map 1-2/Dungeon [Ch.1] (Frilled Frog · x2)",
          "Floor 16 Map 1 [Ch.2] (Dozer Crab · x2)",
          "Floor 24 Map 1 [Ch.2] (Lakeside Beak · x2)",
          "Floor 42 Dungeon [Ch.2] (Hardened Gill · x2)",
          "Floor 58 [Ch.2] (Wired Tadpole · x2)",
          "Floor 65 Map 2 [Ch.2] (Scrap Slime · x2)",
          "Floor 79 Map 2/Dungeon [Ch.2] (Mechanoid Crab · x2)",
          "Floor 83 Map 1 [Ch.2] (Craggy Clam · x2)",
          "Floor 83 Map 1 [Ch.2] (Merman Pirate · x2)"
        ],
        "notes": "Dropped across Chapter 1 (4 floors) and Chapter 2 (7 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "potato",
      "name": "Potato",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (300 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 300 Col"
      },
      "iconFile": "ui_icon_item_ingredients_potato_01.png"
    },
    {
      "id": "sweet_potato",
      "name": "Sweet Potato",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 10+ Merchants (900 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 10 and all higher floors for 900 Col"
      },
      "iconFile": "ui_icon_item_ingredients_sweetpotato_01.png"
    },
    {
      "id": "onion",
      "name": "Onion",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 9 Map 2 [Ch.1] (Yellow Covetous Flower · x2)",
          "Floor 11 Map 1 [Ch.1] (Wicked Vine · x2)",
          "Floor 14 Map 1 [Ch.1] (Astray Mush · x2)",
          "Floor 20 Map 1-2 [Ch.1] (Killer Mantis · x2)",
          "Floor 35 Map 1 [Ch.1] (Carbon Hercules Beetle · x2)",
          "Floor 35 Map 2 [Ch.1] (Steel Hercules Beetle · x2)",
          "Floor 47 Map 1 [Ch.1] (Grinning Vine · x2)",
          "Floor 47 Map 2/Dungeon [Ch.1] (Garish Gerbera · x2)",
          "Floor 47 Map 2/Dungeon [Ch.1] (Huge Flytrap · x2)",
          "Floor 94 Dungeon [Ch.1] (Squirrel Cogitat · x2)",
          "Floor 31 Map 2/Dungeon [Ch.2] (Spiky Shrewman · x2)",
          "Floor 56 Dungeon [Ch.2] (Titanite Hercules Beetle · x2)",
          "Floor 38 Dungeon [Ch.2] (Vampkin Hopper · x2)"
        ],
        "notes": "Dropped across Chapter 1 (9 floors) and Chapter 2 (2 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_onion_01.png"
    },
    {
      "id": "green_onion",
      "name": "Green Onion",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 23 Map 1 [Ch.2] (Apparition Mush · x1)",
          "Floor 24 Map 1 [Ch.2] (Lacustris Sickle · x1)",
          "Floor 24 Map 2 [Ch.2] (Pollen Treant · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 23 Map 1, Floor 24 Map 1, Floor 24 Map 2)"
      },
      "iconFile": "ui_icon_item_ingredients_greenonion_01.png"
    },
    {
      "id": "carrot",
      "name": "Carrot",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 9 Map 1 [Ch.1] (Red Covetous Flower · x2)",
          "Floor 20 Map 1 [Ch.1] (Longicorn Wasp · x2)",
          "Floor 47 Map 1 [Ch.1] (Charcoal Worm · x2)",
          "Floor 47 Map 1 [Ch.1] (Vivid Butterfly · x2)",
          "Floor 47 Map 2/Dungeon [Ch.1] (Azure Butterfly · x2)",
          "Floor 61 Map 2/Dungeon [Ch.1] (Poisonous Tail · x2)",
          "Floor 31 Map 2/Dungeon [Ch.2] (Ogrian Soldier · x2)",
          "Floor 70 Map 1 [Ch.2] (Chlorophyll Wasp · x2)",
          "Floor 70 Map 2 [Ch.2] (Mycelium Mycorrhizian · x2)"
        ],
        "notes": "Dropped across Chapter 1 (5 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_carrot_01.png"
    },
    {
      "id": "tomato",
      "name": "Tomato",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (200 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 200 Col"
      },
      "iconFile": "ui_icon_item_ingredients_tomato_01.png"
    },
    {
      "id": "bell_pepper",
      "name": "Bell Pepper",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (200 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 200 Col"
      },
      "iconFile": "ui_icon_item_ingredients_greenpepper_01.png"
    },
    {
      "id": "eggplant",
      "name": "Eggplant",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 2 [Ch.2] (Wither Gerbera · x1)",
          "Floor 23 Map 1 [Ch.2] (Apparition Mush · x1)",
          "Floor 79 Map 2/Dungeon [Ch.2] (Junk Slime · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 16 Map 2, Floor 23 Map 1, Floor 79 Map 2)"
      },
      "iconFile": "ui_icon_item_ingredients_eggplant_01.png"
    },
    {
      "id": "pumpkin",
      "name": "Pumpkin",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 75 Map 2/Dungeon [Ch.1] (Nut Eater · x1)",
          "Floor 17 Map 1 [Ch.2] (Adrenalinity Mantis · x1)",
          "Floor 38 Dungeon [Ch.2] (Vampkin Hopper · x1)",
          "Floor 38 Dungeon [Ch.2] (Vampkin Walker · x1)",
          "Floor 79 Map 1 [Ch.2] (Aramid Worm · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_pumpkin_01.png"
    },
    {
      "id": "cabbage",
      "name": "Cabbage",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 7 Map 2/Dungeon [Ch.1] (Killer Mush · x2)",
          "Floor 61 Map 1 [Ch.1] (Scorching Wasp · x2)",
          "Floor 17 Map 1 [Ch.2] (Adrenalinity Mantis · x2)",
          "Floor 17 Map 1 [Ch.2] (Eruptide Elder Mush · x2)",
          "Floor 70 Map 1 [Ch.2] (Antian Infantry · x2)"
        ],
        "notes": "Dropped across Chapter 1 (2 floors) and Chapter 2 (2 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_cabbage_01.png"
    },
    {
      "id": "napa_cabbage",
      "name": "Napa Cabbage",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 94 Dungeon [Ch.1] (Squirrel Cogitat · x1)",
          "Floor 31 Map 2/Dungeon [Ch.2] (Spiky Shrewman · x1)",
          "Floor 56 Dungeon [Ch.2] (Titanite Hercules Beetle · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (2 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_chinesecabbage_01.png"
    },
    {
      "id": "spinach",
      "name": "Spinach",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 94 Dungeon [Ch.1] (Squirrel Cogitat · x1)",
          "Floor 17 Map 1 [Ch.2] (Eruptide Elder Mush · x1)",
          "Floor 38 Dungeon [Ch.2] (Vampkin Hopper · x1)",
          "Floor 56 Dungeon [Ch.2] (Titanite Hercules Beetle · x1)",
          "Floor 92 [Ch.2] (Hemoglobin Moth · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (4 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_spinach_01.png"
    },
    {
      "id": "lettuce",
      "name": "Lettuce",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 99 Dungeon [Ch.1] (Musty Worm · x1)",
          "Floor 31 Map 2/Dungeon [Ch.2] (Hematite Stag Beetle · x1)",
          "Floor 63 Dungeon [Ch.2] (Cold Shrewman · x1)",
          "Floor 70 Map 2 [Ch.2] (Mycelium Mycorrhizian · x1)",
          "Floor 79 Map 1 [Ch.2] (Aramid Worm · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (4 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_lettuce_01.png"
    },
    {
      "id": "broccoli",
      "name": "Broccoli",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 10+ Merchants (900 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 10 and all higher floors for 900 Col"
      },
      "iconFile": "ui_icon_item_ingredients_broccoli_01.png"
    },
    {
      "id": "asparagus",
      "name": "Asparagus",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 2 [Ch.2] (Infrared Shrewman · x1)",
          "Floor 16 Map 2 [Ch.2] (Withered Gerbera · x1)",
          "Floor 19 Map 1 [Ch.2] (Toxic Mantis · x1)",
          "Floor 70 Map 1 [Ch.2] (Antian Infantry · x1)",
          "Floor 96 Dungeon [Ch.2] (Lemon Nepenthes · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 16 Map 2, Floor 19 Map 1, Floor 70 Map 1)"
      },
      "iconFile": "ui_icon_item_ingredients_asparagus_01.png"
    },
    {
      "id": "chive",
      "name": "Chive",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 2 [Ch.2] (Wither Gerbera · x1)",
          "Floor 65 [Ch.2] (Melon Nepenthes · x1)",
          "Floor 96 Dungeon [Ch.2] (Lemon Nepenthes · x1)",
          "Floor 19 Map 1 [Ch.2] (Toxic Mantis · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 16 Map 2, Floor 65, Floor 96 Dungeon)"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "bean_sprouts",
      "name": "Bean Sprouts",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 23 Map 1 [Ch.2] (Apparition Mush · x1)",
          "Floor 24 Map 1 [Ch.2] (Lacustris Sickle · x1)",
          "Floor 31 Map 2/Dungeon [Ch.2] (Ogrian Soldier · x1)",
          "Floor 70 Map 1 [Ch.2] (Anthocyanin Mantis · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (4 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_beansprouts_01.png"
    },
    {
      "id": "mushroom",
      "name": "Mushroom",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (300 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 300 Col"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "cucumber",
      "name": "Cucumber",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 24 Map 2 [Ch.2] (Arboris Wasp · x1)",
          "Floor 31 Map 2/Dungeon [Ch.2] (Ogrian Soldier · x1)",
          "Floor 33 Map 1 [Ch.2] (Tumble Vine · x1)",
          "Floor 92 [Ch.2] (Hemoglobin Moth · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 24 Map 2, Floor 31 Map 2/Dungeon, Floor 33 Map 1)"
      },
      "iconFile": "ui_icon_item_ingredients_cucumber_01.png"
    },
    {
      "id": "bamboo_shoot",
      "name": "Bamboo Shoot",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 2 [Ch.2] (Infrared Shrewman · x1)",
          "Floor 33 Map 1 [Ch.2] (Tumble Vine · x1)",
          "Floor 92 [Ch.2] (Hemoglobin Moth · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (3 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_bambooshoots_01.png"
    },
    {
      "id": "daikon_radish",
      "name": "Daikon Radish",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 91 Map 1 [Ch.1] (Wrongous Mink · x1)",
          "Floor 31 Map 2/Dungeon [Ch.2] (Hematite Stag Beetle · x1)",
          "Floor 63 Dungeon [Ch.2] (Cold Shrewman · x1)"
        ],
        "notes": "Dropped across Chapter 1 (1 floors) and Chapter 2 (2 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_japaneseradish_01.png"
    },
    {
      "id": "wild_greens",
      "name": "Wild Greens",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 24 Map 2 [Ch.2] (Pollen Treant · x1)",
          "Floor 65 Map 1 [Ch.2] (Melon Nepenthes · x1)",
          "Floor 70 Map 2 [Ch.2] (Mycelium Mycorrhizian · x1)",
          "Floor 89 Map 1 [Ch.2] (Apple Nepenthes · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 24 Map 2, Floor 65 Map 1, Floor 70 Map 2)"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "garlic",
      "name": "Garlic",
      "type": "Seasoning/Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 1 [Ch.2] (Water Vein Sickle · x1)",
          "Floor 24 Map 2 [Ch.2] (Lizardman Centuria · x1)",
          "Floor 65 Map 2 [Ch.2] (White Blonde Lycan · x1)",
          "Floor 65 Map 2 [Ch.2] (Dracoag Flunky · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 16 Map 1, Floor 24 Map 2, Floor 65 Map 2)"
      },
      "iconFile": "ui_icon_item_ingredients_garlic_01.png"
    },
    {
      "id": "ginger",
      "name": "Ginger",
      "type": "Seasoning/Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 16 Map 1 [Ch.2] (Water Vein Sickle · x1)",
          "Floor 24 Map 2 [Ch.2] (Arboris Wasp · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 (Floor 16 Map 1, Floor 24 Map 2)"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "bean",
      "name": "Bean",
      "type": "Vegetable",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (300 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 300 Col"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "apple",
      "name": "Apple",
      "type": "Fruit",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 17 Map 1 [Ch.2] (Adrenalinity Mantis · x1)",
          "Floor 89 Map 1 [Ch.2] (Apple Nepenthes · x1)",
          "Floor 69 Map 1 [Ch.2] (Thirsthroat Shrewman · x1)"
        ],
        "notes": "Exclusively dropped in Chapter 2 by Adrenalinity Mantis (Floor 17 Map 1) and Apple Nepenthes (Floor 89 Map 1)"
      },
      "iconFile": "ui_icon_item_ingredients_roundfruit_01.png"
    },
    {
      "id": "lemon",
      "name": "Lemon",
      "type": "Fruit",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (300 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 300 Col"
      },
      "iconFile": "ui_icon_item_ingredients_roundfruit_01.png"
    },
    {
      "id": "berry",
      "name": "Berry",
      "type": "Fruit",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (200 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 200 Col"
      },
      "iconFile": "ui_icon_item_ingredients_roundfruit_01.png"
    },
    {
      "id": "milk",
      "name": "Milk",
      "type": "Dairy",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (100 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_milkbutter_01.png"
    },
    {
      "id": "butter",
      "name": "Butter",
      "type": "Dairy",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 25+ Merchants (800 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 25 and all higher floors for 800 Col"
      },
      "iconFile": "ui_icon_item_ingredients_milkbutter_01.png"
    },
    {
      "id": "egg",
      "name": "Egg",
      "type": "Pantry",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (100 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_eggs_01.png"
    },
    {
      "id": "flour",
      "name": "Flour",
      "type": "Pantry",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (100 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_grainsackflour_01.png"
    },
    {
      "id": "rice",
      "name": "Rice",
      "type": "Pantry",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (100 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_grainsackflour_01.png"
    },
    {
      "id": "sugar",
      "name": "Sugar",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (100 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_grainsacksugar_01.png"
    },
    {
      "id": "rock_salt",
      "name": "Rock Salt",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (100 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_grainsacksalt_01.png"
    },
    {
      "id": "oil",
      "name": "Oil",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (100 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_oil_01.png"
    },
    {
      "id": "vinegar",
      "name": "Vinegar",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 10+ Merchants (300 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 10 and all higher floors for 300 Col"
      },
      "iconFile": "ui_icon_item_ingredients_sauces_01.png"
    },
    {
      "id": "rice_vinegar",
      "name": "Rice Vinegar",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (300 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 300 Col"
      },
      "iconFile": "ui_icon_item_ingredients_sauces_01.png"
    },
    {
      "id": "soy_sauce",
      "name": "Soy Sauce",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (100 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 100 Col"
      },
      "iconFile": "ui_icon_item_ingredients_soysauces_01.png"
    },
    {
      "id": "miso",
      "name": "Miso",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 50+ Merchants (3,000 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 50 and all higher floors for 3,000 Col"
      },
      "iconFile": "ui_icon_item_ingredients_misopot_01.png"
    },
    {
      "id": "spice",
      "name": "Spice",
      "type": "Seasoning",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (300 Col)"
        ],
        "mobs": [],
        "notes": "Available from any floor merchant or directly via player Menu for 300 Col"
      },
      "iconFile": "ui_icon_item_ingredients_spicessauces_01.png"
    },
    {
      "id": "honey",
      "name": "Honey",
      "type": "Pantry",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Any Floor Merchant (300 Col)"
        ],
        "mobs": [
          "Floor 9 (Plant monsters)"
        ],
        "notes": "Purchasable from any floor merchant (or Menu, 300 Col) or dropped by plant monsters on Floor 9"
      },
      "iconFile": "ui_icon_item_ingredients_honeypot_01.png"
    },
    {
      "id": "herb",
      "name": "Herb",
      "type": "Plant",
      "isCrafted": false,
      "sources": {
        "merchants": [
          "Floor 2+ Merchants (600 Col)"
        ],
        "mobs": [],
        "notes": "Sold by merchants on Floor 2 and all higher floors for 600 Col"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    },
    {
      "id": "firewood",
      "name": "Firewood",
      "type": "Fuel",
      "isCrafted": false,
      "sources": {
        "merchants": [],
        "mobs": [
          "Floor 20 Map 1/Dungeon [Ch.1] (Browny Squirrel · x1)",
          "Floor 20 Map 1-2 [Ch.1] (Killer Mantis · x1)",
          "Floor 25 Map 1/Dungeon [Ch.1] (Wonder Grimoire · x1)",
          "Floor 25 Map 2 [Ch.1] (Curious Grimoire · x1)",
          "Floor 35 Map 1 [Ch.1] (Carbon Hercules Beetle · x1)",
          "Floor 40 Map 1 [Ch.1] (Nasty Shrewman · x1)",
          "Floor 47 Map 1 [Ch.1] (Grinning Vine · x1)",
          "Floor 47 Map 2/Dungeon [Ch.1] (Garish Gerbera · x1)",
          "Floor 47 Map 2/Dungeon [Ch.1] (Huge Flytrap · x1)",
          "Floor 61 Map 1 [Ch.1] (Scorching Wasp · x1)",
          "Floor 61 Map 2/Dungeon [Ch.1] (Poisonous Tail · x1)",
          "Floor 75 Map 1 [Ch.1] (Scary Mantis · x1)",
          "Floor 91 Map 1 [Ch.1] (Sentry Knight · x1)",
          "Floor 99 [Ch.1] (Elusive Grimoire · x1)",
          "Floor 23 Map 1 [Ch.2] (Apparition Ashigaru · x1)",
          "Floor 23 Map 2 [Ch.2] (Apparition Nobushi · x1)",
          "Floor 24 Map 2 [Ch.2] (Pollen Treant · x1)",
          "Floor 38 Dungeon [Ch.2] (Vampkin Walker · x1)",
          "Floor 79 Map 2/Dungeon [Ch.2] (Kobold Mechanoid · x1)",
          "Floor 89 Map 1 [Ch.2] (Libro Animato Grimoire · x1)"
        ],
        "notes": "Dropped across Chapter 1 (13 floors) and Chapter 2 (5 floors)"
      },
      "iconFile": "ui_icon_item_ingredients_grainsack_01.png"
    }
  ],
  "achievements": [
    {
      "title": "My First Homemade Dish",
      "req": "Cook 1 time",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "Kitchen Regular",
      "req": "Cook 10 times",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "Cooking Lover",
      "req": "Cook 50 times",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "Veteran Cook",
      "req": "Cook 100 times",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "Master of the Kitchen",
      "req": "Cook 500 times",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "One Who Graced a Thousand Tables",
      "req": "Cook 1,000 times",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "Ultimate Cooking Mania",
      "req": "Cook 10,000 times",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "Master of Gastronomy",
      "req": "Cook 100,000 times",
      "reward": "10 Arcana Gems",
      "category": "count"
    },
    {
      "title": "Apprentice Cook",
      "req": "Reach Cooking Level 5",
      "reward": "10 Arcana Gems",
      "category": "level"
    },
    {
      "title": "Novice Chef",
      "req": "Reach Cooking Level 10",
      "reward": "10 Arcana Gems",
      "category": "level"
    },
    {
      "title": "Skillful Cook",
      "req": "Reach Cooking Level 25",
      "reward": "10 Arcana Gems",
      "category": "level"
    },
    {
      "title": "Expert Chef",
      "req": "Reach Cooking Level 50",
      "reward": "10 Arcana Gems",
      "category": "level"
    },
    {
      "title": "Legendary Cook",
      "req": "Reach Cooking Level 100",
      "reward": "10 Arcana Gems",
      "category": "level"
    }
  ]
};
