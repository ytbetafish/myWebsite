
/* ==== farmersdelight bundle (inline) ==== */
// 农夫乐事 Farmer's Delight (vectorwing, MIT) - its scripts in one, made by its build script; do not edit
// ---- rules.js ----
(function () {
  'use strict';

  // 农夫乐事 - the play's data (cooking, cutting, foods, loot, tags ...), made by tools/mods/farmersdelight_build.py; do not edit
  self.FDEL = {
    "items": {
      "skillet": {
        "dur": 250,
        "atk": 8.0,
        "aspd": 0.9,
        "ench": 14,
        "rep": "#iron_tool_materials"
      },
      "flint_knife": {
        "knife": {
          "level": 1,
          "speed": 4
        },
        "dur": 131,
        "atk": 2.5,
        "aspd": 2.0,
        "ench": 5,
        "rep": "flint"
      },
      "iron_knife": {
        "knife": {
          "level": 2,
          "speed": 6
        },
        "dur": 250,
        "atk": 3.5,
        "aspd": 2.0,
        "ench": 14,
        "rep": "#iron_tool_materials"
      },
      "diamond_knife": {
        "knife": {
          "level": 3,
          "speed": 8
        },
        "dur": 1561,
        "atk": 4.5,
        "aspd": 2.0,
        "ench": 10,
        "rep": "#diamond_tool_materials"
      },
      "netherite_knife": {
        "knife": {
          "level": 4,
          "speed": 9
        },
        "dur": 2031,
        "atk": 5.5,
        "aspd": 2.0,
        "ench": 15,
        "rep": "#netherite_tool_materials",
        "fireproof": true
      },
      "golden_knife": {
        "knife": {
          "level": 0,
          "speed": 12
        },
        "dur": 32,
        "atk": 1.5,
        "aspd": 2.0,
        "ench": 22,
        "rep": "#gold_tool_materials"
      },
      "cabbage": {
        "food": [2, 1.6]
      },
      "tomato": {
        "food": [1, 0.6]
      },
      "onion": {
        "food": [2, 1.6]
      },
      "fried_egg": {
        "food": [4, 3.2]
      },
      "milk_bottle": {
        "drink": true,
        "special": "remove_random",
        "effects": [],
        "always": true,
        "leftover": "glass_bottle",
        "tipCustom": true
      },
      "hot_cocoa": {
        "drink": true,
        "special": "remove_random_harmful",
        "effects": [],
        "always": true,
        "leftover": "glass_bottle",
        "tipCustom": true
      },
      "apple_cider": {
        "food": [0, 0.0],
        "always": true,
        "drink": true,
        "effects": [["absorption", 1200, 0, 1.0]],
        "leftover": "glass_bottle",
        "tip": true
      },
      "melon_juice": {
        "drink": true,
        "special": "heal",
        "heal": 2.0,
        "effects": [],
        "always": true,
        "leftover": "glass_bottle",
        "tipCustom": true
      },
      "tomato_sauce": {
        "food": [4, 3.2],
        "leftover": "bowl"
      },
      "wheat_dough": {
        "food": [2, 1.2],
        "drink": false,
        "effects": [["hunger", 600, 0, 0.3]]
      },
      "raw_pasta": {
        "food": [2, 1.2],
        "drink": false,
        "effects": [["hunger", 600, 0, 0.3]]
      },
      "pumpkin_slice": {
        "food": [3, 1.8]
      },
      "cabbage_leaf": {
        "food": [1, 0.8],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "minced_beef": {
        "food": [2, 1.2],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "beef_patty": {
        "food": [4, 6.4],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "chicken_cuts": {
        "food": [1, 0.6],
        "drink": false,
        "ticks": 16,
        "effects": [["hunger", 600, 0, 0.3]]
      },
      "cooked_chicken_cuts": {
        "food": [3, 3.6],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "fd_bacon": {
        "food": [2, 1.2],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "cooked_bacon": {
        "food": [4, 6.4],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "cod_slice": {
        "food": [1, 0.2],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "cooked_cod_slice": {
        "food": [3, 3.0],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "salmon_slice": {
        "food": [1, 0.2],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "cooked_salmon_slice": {
        "food": [3, 4.8],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "mutton_chops": {
        "food": [1, 0.6],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "cooked_mutton_chops": {
        "food": [3, 4.8],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "ham": {
        "food": [5, 3.0]
      },
      "smoked_ham": {
        "food": [10, 16.0]
      },
      "pie_crust": {
        "food": [2, 0.8]
      },
      "cake_slice": {
        "food": [2, 0.4],
        "drink": false,
        "effects": [["speed", 400, 0, 1.0]]
      },
      "apple_pie_slice": {
        "food": [3, 1.8],
        "drink": false,
        "effects": [["speed", 600, 0, 1.0]]
      },
      "sweet_berry_cheesecake_slice": {
        "food": [3, 1.8],
        "drink": false,
        "effects": [["speed", 600, 0, 1.0]]
      },
      "chocolate_pie_slice": {
        "food": [3, 1.8],
        "drink": false,
        "effects": [["speed", 600, 0, 1.0]]
      },
      "pumpkin_pie_slice": {
        "food": [3, 1.8],
        "drink": false,
        "effects": [["speed", 600, 0, 1.0]]
      },
      "sweet_berry_cookie": {
        "food": [2, 0.4],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "honey_cookie": {
        "food": [2, 0.4],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "melon_popsicle": {
        "food": [3, 1.2],
        "always": true,
        "drink": false,
        "ticks": 16,
        "special": "extinguish",
        "effects": []
      },
      "glow_berry_custard": {
        "food": [7, 8.4],
        "always": true,
        "drink": true,
        "effects": [["glowing", 100, 0, 1.0]],
        "leftover": "glass_bottle",
        "tip": true
      },
      "fruit_salad": {
        "food": [6, 7.2],
        "drink": false,
        "effects": [["regeneration", 100, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "mixed_salad": {
        "food": [6, 7.2],
        "drink": false,
        "effects": [["regeneration", 100, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "nether_salad": {
        "food": [5, 4.0],
        "drink": false,
        "effects": [["nausea", 240, 0, 0.3]],
        "leftover": "bowl"
      },
      "barbecue_stick": {
        "food": [8, 14.4]
      },
      "egg_sandwich": {
        "food": [8, 12.8]
      },
      "chicken_sandwich": {
        "food": [10, 16.0]
      },
      "hamburger": {
        "food": [11, 17.6]
      },
      "bacon_sandwich": {
        "food": [10, 16.0]
      },
      "mutton_wrap": {
        "food": [10, 16.0]
      },
      "dumplings": {
        "food": [8, 12.8]
      },
      "stuffed_potato": {
        "food": [10, 14.0]
      },
      "cabbage_rolls": {
        "food": [5, 5.0]
      },
      "salmon_roll": {
        "food": [7, 8.4]
      },
      "cod_roll": {
        "food": [7, 8.4]
      },
      "kelp_roll": {
        "food": [12, 12.0],
        "drink": false,
        "ticks": 48,
        "effects": []
      },
      "kelp_roll_slice": {
        "food": [6, 6.0],
        "drink": false,
        "ticks": 16,
        "effects": []
      },
      "cooked_rice": {
        "food": [6, 4.8],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "bone_broth": {
        "food": [8, 11.2],
        "drink": true,
        "effects": [["farmersdelight:nourishment", 1200, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "beef_stew": {
        "food": [12, 19.2],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 3600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "chicken_soup": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "vegetable_soup": {
        "food": [12, 19.2],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 3600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "fish_stew": {
        "food": [12, 19.2],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 3600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "fried_rice": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "pumpkin_soup": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "baked_cod_stew": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "noodle_soup": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "onion_soup": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "bacon_and_eggs": {
        "food": [10, 12.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 1200, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "pasta_with_meatballs": {
        "food": [12, 19.2],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 3600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "pasta_with_mutton_chop": {
        "food": [12, 19.2],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 3600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "mushroom_rice": {
        "food": [12, 19.2],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 3600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "roasted_mutton_chops": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "vegetable_noodles": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "steak_and_potatoes": {
        "food": [12, 19.2],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 3600, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "ratatouille": {
        "food": [10, 12.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 1200, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "squid_ink_pasta": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "grilled_salmon": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "roast_chicken": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "stuffed_pumpkin": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "honey_glazed_ham": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "shepherds_pie": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "gleaming_salad": {
        "food": [14, 21.0],
        "drink": false,
        "effects": [["farmersdelight:nourishment", 6000, 0, 1.0]],
        "leftover": "bowl",
        "tip": true
      },
      "dog_food": {
        "food": [4, 1.6],
        "leftover": "bowl"
      }
    },
    "order": ["stove", "cooking_pot", "skillet", "cutting_board", "wooden_basket", "bamboo_basket", "carrot_crate", "potato_crate", "beetroot_crate", "cabbage_crate", "tomato_crate", "onion_crate", "rice_bale", "rice_bag", "straw_bale", "safety_net", "oak_cabinet", "spruce_cabinet", "birch_cabinet", "jungle_cabinet", "acacia_cabinet", "dark_oak_cabinet", "mangrove_cabinet", "cherry_cabinet", "bamboo_cabinet", "crimson_cabinet", "warped_cabinet", "tatami", "full_tatami_mat", "half_tatami_mat", "canvas_rug", "rope_fence", "rope_fence_gate", "organic_compost", "rich_soil", "rich_soil_farmland", "rope", "canvas_sign", "hanging_canvas_sign", "white_canvas_sign", "white_hanging_canvas_sign", "light_gray_canvas_sign", "light_gray_hanging_canvas_sign", "gray_canvas_sign", "gray_hanging_canvas_sign", "black_canvas_sign", "black_hanging_canvas_sign", "brown_canvas_sign", "brown_hanging_canvas_sign", "red_canvas_sign", "red_hanging_canvas_sign", "orange_canvas_sign", "orange_hanging_canvas_sign", "yellow_canvas_sign", "yellow_hanging_canvas_sign", "lime_canvas_sign", "lime_hanging_canvas_sign", "green_canvas_sign", "green_hanging_canvas_sign", "cyan_canvas_sign", "cyan_hanging_canvas_sign", "light_blue_canvas_sign", "light_blue_hanging_canvas_sign", "blue_canvas_sign", "blue_hanging_canvas_sign", "purple_canvas_sign", "purple_hanging_canvas_sign", "magenta_canvas_sign", "magenta_hanging_canvas_sign", "pink_canvas_sign", "pink_hanging_canvas_sign", "flint_knife", "iron_knife", "diamond_knife", "netherite_knife", "golden_knife", "straw", "canvas", "tree_bark", "sandy_shrub", "wild_cabbages", "wild_onions", "wild_tomatoes", "wild_carrots", "wild_potatoes", "wild_beetroots", "wild_rice", "brown_mushroom_colony", "red_mushroom_colony", "cabbage", "tomato", "onion", "rice_panicle", "rice", "cabbage_seeds", "tomato_seeds", "rotten_tomato", "fried_egg", "milk_bottle", "hot_cocoa", "apple_cider", "melon_juice", "tomato_sauce", "wheat_dough", "raw_pasta", "pumpkin_slice", "cabbage_leaf", "minced_beef", "beef_patty", "chicken_cuts", "cooked_chicken_cuts", "fd_bacon", "cooked_bacon", "cod_slice", "cooked_cod_slice", "salmon_slice", "cooked_salmon_slice", "mutton_chops", "cooked_mutton_chops", "ham", "smoked_ham", "pie_crust", "apple_pie", "sweet_berry_cheesecake", "chocolate_pie", "cake_slice", "apple_pie_slice", "sweet_berry_cheesecake_slice", "chocolate_pie_slice", "pumpkin_pie_slice", "sweet_berry_cookie", "honey_cookie", "melon_popsicle", "glow_berry_custard", "fruit_salad", "mixed_salad", "nether_salad", "barbecue_stick", "egg_sandwich", "chicken_sandwich", "hamburger", "bacon_sandwich", "mutton_wrap", "dumplings", "stuffed_potato", "cabbage_rolls", "salmon_roll", "cod_roll", "kelp_roll", "kelp_roll_slice", "cooked_rice", "bone_broth", "beef_stew", "chicken_soup", "vegetable_soup", "fish_stew", "fried_rice", "pumpkin_soup", "baked_cod_stew", "noodle_soup", "onion_soup", "bacon_and_eggs", "pasta_with_meatballs", "pasta_with_mutton_chop", "mushroom_rice", "roasted_mutton_chops", "vegetable_noodles", "steak_and_potatoes", "ratatouille", "squid_ink_pasta", "grilled_salmon", "roast_chicken_block", "roast_chicken", "stuffed_pumpkin_block", "stuffed_pumpkin", "honey_glazed_ham_block", "honey_glazed_ham", "shepherds_pie_block", "shepherds_pie", "gleaming_salad_block", "gleaming_salad", "rice_roll_medley_block", "dog_food", "horse_feed"],
    "fuel": {
      "cutting_board": 200,
      "wooden_basket": 300,
      "bamboo_basket": 300,
      "safety_net": 200,
      "oak_cabinet": 300,
      "spruce_cabinet": 300,
      "birch_cabinet": 300,
      "jungle_cabinet": 300,
      "acacia_cabinet": 300,
      "dark_oak_cabinet": 300,
      "mangrove_cabinet": 300,
      "cherry_cabinet": 300,
      "bamboo_cabinet": 300,
      "tatami": 400,
      "full_tatami_mat": 200,
      "half_tatami_mat": 100,
      "canvas_rug": 200,
      "straw": 100,
      "canvas": 400,
      "tree_bark": 200
    },
    "cooking": [{
      "id": "cooking/apple_cider",
      "ing": ["apple", "apple", "sugar"],
      "res": ["apple_cider", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "drinks"
    }, {
      "id": "cooking/baked_cod_stew",
      "ing": ["#c:foods/raw_cod", "#c:crops/potato", "#c:eggs", "#c:crops/tomato"],
      "res": ["baked_cod_stew", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/beef_stew",
      "ing": ["#c:foods/raw_beef", "#c:crops/carrot", "#c:crops/potato"],
      "res": ["beef_stew", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/beetroot_soup",
      "ing": ["#c:crops/beetroot", "#c:crops/beetroot", "#c:crops/beetroot"],
      "res": ["beetroot_soup", 1],
      "cont": "bowl",
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/bone_broth",
      "ing": ["#c:bones", ["glow_berries", "#c:mushrooms", "hanging_roots", "glow_lichen"]],
      "res": ["bone_broth", 1],
      "cont": null,
      "xp": 0.35,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/cabbage_rolls",
      "ing": ["#c:crops/cabbage", ["#c:foods/raw_meat", "#c:foods/safe_raw_fish", "#c:foods/vegetable", "#c:mushrooms"]],
      "res": ["cabbage_rolls", 1],
      "cont": null,
      "xp": 0.35,
      "time": 100,
      "tab": null
    }, {
      "id": "cooking/chicken_soup",
      "ing": ["#c:foods/raw_chicken", "#c:crops/carrot", "#c:foods/leafy_green", ["onion", "tomato", "carrot", "potato", "beetroot"]],
      "res": ["chicken_soup", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/cooked_rice",
      "ing": ["#c:crops/rice"],
      "res": ["cooked_rice", 1],
      "cont": null,
      "xp": 0.35,
      "time": 100,
      "tab": null
    }, {
      "id": "cooking/dog_food",
      "ing": ["rotten_flesh", "bone_meal", "#c:foods/raw_meat", "#c:crops/rice"],
      "res": ["dog_food", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": null
    }, {
      "id": "cooking/dumplings",
      "ing": ["#c:foods/dough", "#c:crops/cabbage", "#c:crops/onion", ["#c:foods/raw_chicken", "#c:foods/raw_pork", "#c:foods/raw_beef", "brown_mushroom"]],
      "res": ["dumplings", 2],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": null
    }, {
      "id": "cooking/fish_stew",
      "ing": ["#c:foods/safe_raw_fish", "tomato_sauce", "#c:crops/onion"],
      "res": ["fish_stew", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/fried_rice",
      "ing": ["#c:crops/rice", "#c:eggs", "#c:crops/carrot", "#c:crops/onion"],
      "res": ["fried_rice", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/glow_berry_custard",
      "ing": ["glow_berries", "#c:drinks/milk", "#c:eggs", "sugar"],
      "res": ["glow_berry_custard", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": null
    }, {
      "id": "cooking/hot_cocoa",
      "ing": ["#c:drinks/milk", "sugar", "cocoa_beans", "cocoa_beans"],
      "res": ["hot_cocoa", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "drinks"
    }, {
      "id": "cooking/mushroom_rice",
      "ing": ["brown_mushroom", "red_mushroom", "#c:crops/rice", ["carrot", "potato"]],
      "res": ["mushroom_rice", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/mushroom_stew",
      "ing": ["brown_mushroom", "red_mushroom"],
      "res": ["mushroom_stew", 1],
      "cont": "bowl",
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/noodle_soup",
      "ing": ["#c:foods/pasta", "#c:eggs", "dried_kelp", "#c:foods/raw_pork"],
      "res": ["noodle_soup", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/onion_soup",
      "ing": ["#c:crops/onion", "#c:crops/onion", "#c:foods/bread", "#c:drinks/milk"],
      "res": ["onion_soup", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/pasta_with_meatballs",
      "ing": ["minced_beef", "#c:foods/pasta", "tomato_sauce"],
      "res": ["pasta_with_meatballs", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/pasta_with_mutton_chop",
      "ing": ["#c:foods/raw_mutton", "#c:foods/pasta", "tomato_sauce"],
      "res": ["pasta_with_mutton_chop", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/pumpkin_soup",
      "ing": ["pumpkin_slice", "#c:foods/leafy_green", "#c:foods/raw_pork", "#c:drinks/milk"],
      "res": ["pumpkin_soup", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/rabbit_stew",
      "ing": ["#c:crops/potato", "rabbit", "#c:crops/carrot", ["brown_mushroom", "red_mushroom"]],
      "res": ["rabbit_stew", 1],
      "cont": "bowl",
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/ratatouille",
      "ing": ["#c:crops/tomato", "#c:crops/onion", "#c:crops/beetroot", ["onion", "tomato", "carrot", "potato", "beetroot"]],
      "res": ["ratatouille", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/squid_ink_pasta",
      "ing": ["#c:foods/safe_raw_fish", "#c:foods/pasta", "#c:crops/tomato", "ink_sac"],
      "res": ["squid_ink_pasta", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/stuffed_pumpkin_block",
      "ing": ["#c:crops/rice", "#c:crops/onion", "brown_mushroom", "#c:crops/potato", "#c:foods/berry", ["onion", "tomato", "carrot", "potato", "beetroot"]],
      "res": ["stuffed_pumpkin_block", 1],
      "cont": "pumpkin",
      "xp": 2.0,
      "time": 400,
      "tab": "meals"
    }, {
      "id": "cooking/tomato_sauce",
      "ing": ["#c:crops/tomato", "#c:crops/tomato"],
      "res": ["tomato_sauce", 1],
      "cont": null,
      "xp": 0.35,
      "time": 100,
      "tab": null
    }, {
      "id": "cooking/vegetable_noodles",
      "ing": ["#c:crops/carrot", "#c:mushrooms", "#c:foods/pasta", "#c:foods/leafy_green", ["onion", "tomato", "carrot", "potato", "beetroot"]],
      "res": ["vegetable_noodles", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }, {
      "id": "cooking/vegetable_soup",
      "ing": ["#c:crops/carrot", "#c:crops/potato", "#c:crops/beetroot", "#c:foods/leafy_green"],
      "res": ["vegetable_soup", 1],
      "cont": null,
      "xp": 1.0,
      "time": 200,
      "tab": "meals"
    }],
    "cutting": [{
      "id": "cutting/acacia_log",
      "ing": "acacia_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_acacia_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/acacia_wood",
      "ing": "acacia_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_acacia_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/allium",
      "ing": "allium",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["magenta_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/apple_pie",
      "ing": "apple_pie",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["apple_pie_slice", 4, 1.0]],
      "sound": null
    }, {
      "id": "cutting/azure_bluet",
      "ing": "azure_bluet",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["light_gray_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/bamboo_basket",
      "ing": "bamboo_basket",
      "tool": ["#axes", "#axes"],
      "out": [["canvas", 1, 1.0], ["bamboo", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/bamboo_block",
      "ing": "bamboo_block",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_bamboo_block", 1, 1.0], ["straw", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/beef",
      "ing": "beef",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["minced_beef", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/birch_log",
      "ing": "birch_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_birch_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/birch_wood",
      "ing": "birch_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_birch_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/blue_orchid",
      "ing": "blue_orchid",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["light_blue_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/brown_mushroom_colony",
      "ing": "brown_mushroom_colony",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["brown_mushroom", 5, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cabbage",
      "ing": "cabbage",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cabbage_leaf", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cake",
      "ing": "cake",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cake_slice", 7, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cherry_log",
      "ing": "cherry_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_cherry_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/cherry_wood",
      "ing": "cherry_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_cherry_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/chicken",
      "ing": "chicken",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["chicken_cuts", 2, 1.0], ["bone_meal", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/chocolate_pie",
      "ing": "chocolate_pie",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["chocolate_pie_slice", 4, 1.0]],
      "sound": null
    }, {
      "id": "cutting/clay",
      "ing": "clay",
      "tool": ["#shovels", "#shovels"],
      "out": [["clay_ball", 4, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cod",
      "ing": "cod",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cod_slice", 2, 1.0], ["bone_meal", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cooked_chicken",
      "ing": "cooked_chicken",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cooked_chicken_cuts", 2, 1.0], ["bone_meal", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cooked_cod",
      "ing": "cooked_cod",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cooked_cod_slice", 2, 1.0], ["bone_meal", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cooked_mutton",
      "ing": "cooked_mutton",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cooked_mutton_chops", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cooked_salmon",
      "ing": "cooked_salmon",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cooked_salmon_slice", 2, 1.0], ["bone_meal", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/cornflower",
      "ing": "cornflower",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["blue_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/crimson_hyphae",
      "ing": "crimson_hyphae",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_crimson_hyphae", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/crimson_stem",
      "ing": "crimson_stem",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_crimson_stem", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/dandelion",
      "ing": "dandelion",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["yellow_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/dark_oak_log",
      "ing": "dark_oak_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_dark_oak_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/dark_oak_wood",
      "ing": "dark_oak_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_dark_oak_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/gravel",
      "ing": "gravel",
      "tool": ["#shovels", "#shovels"],
      "out": [["gravel", 1, 1.0], ["flint", 1, 0.1]],
      "sound": null
    }, {
      "id": "cutting/ham",
      "ing": "ham",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["porkchop", 2, 1.0], ["bone", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/ink_sac",
      "ing": "ink_sac",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["black_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/jungle_log",
      "ing": "jungle_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_jungle_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/jungle_wood",
      "ing": "jungle_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_jungle_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/kelp_roll",
      "ing": "kelp_roll",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["kelp_roll_slice", 3, 1.0]],
      "sound": null
    }, {
      "id": "cutting/lily_of_the_valley",
      "ing": "lily_of_the_valley",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["white_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/mangrove_log",
      "ing": "mangrove_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_mangrove_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/mangrove_wood",
      "ing": "mangrove_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_mangrove_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/melon",
      "ing": "melon",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["melon_slice", 9, 1.0]],
      "sound": null
    }, {
      "id": "cutting/mutton",
      "ing": "mutton",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["mutton_chops", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/oak_log",
      "ing": "oak_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_oak_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/oak_wood",
      "ing": "oak_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_oak_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/orange_tulip",
      "ing": "orange_tulip",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["orange_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/oxeye_daisy",
      "ing": "oxeye_daisy",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["light_gray_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/pink_tulip",
      "ing": "pink_tulip",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["pink_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/poppy",
      "ing": "poppy",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["red_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/porkchop",
      "ing": "porkchop",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["fd_bacon", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/pumpkin",
      "ing": "pumpkin",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["pumpkin_slice", 4, 1.0]],
      "sound": null
    }, {
      "id": "cutting/pumpkin_pie",
      "ing": "pumpkin_pie",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["pumpkin_pie_slice", 4, 1.0]],
      "sound": null
    }, {
      "id": "cutting/red_mushroom_colony",
      "ing": "red_mushroom_colony",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["red_mushroom", 5, 1.0]],
      "sound": null
    }, {
      "id": "cutting/red_tulip",
      "ing": "red_tulip",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["red_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/rice_panicle",
      "ing": "rice_panicle",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["rice", 1, 1.0], ["straw", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/salmon",
      "ing": "salmon",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["salmon_slice", 2, 1.0], ["bone_meal", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/smoked_ham",
      "ing": "smoked_ham",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cooked_porkchop", 2, 1.0], ["bone", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/spruce_log",
      "ing": "spruce_log",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_spruce_log", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/spruce_wood",
      "ing": "spruce_wood",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_spruce_wood", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/sweet_berry_cheesecake",
      "ing": "sweet_berry_cheesecake",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["sweet_berry_cheesecake_slice", 4, 1.0]],
      "sound": null
    }, {
      "id": "cutting/tag_dough",
      "ing": "#c:foods/dough",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["raw_pasta", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/torchflower",
      "ing": "torchflower",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["orange_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/warped_hyphae",
      "ing": "warped_hyphae",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_warped_hyphae", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/warped_stem",
      "ing": "warped_stem",
      "tool": ["#axes", "#axes"],
      "out": [["stripped_warped_stem", 1, 1.0], ["tree_bark", 1, 1.0]],
      "sound": "minecraft:item.axe.strip"
    }, {
      "id": "cutting/white_tulip",
      "ing": "white_tulip",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["light_gray_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/wild_beetroots",
      "ing": "wild_beetroots",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["beetroot_seeds", 1, 1.0], ["red_dye", 1, 1.0]],
      "sound": null
    }, {
      "id": "cutting/wild_cabbages",
      "ing": "wild_cabbages",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["cabbage_seeds", 1, 1.0], ["yellow_dye", 2, 0.5]],
      "sound": null
    }, {
      "id": "cutting/wild_carrots",
      "ing": "wild_carrots",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["carrot", 1, 1.0], ["light_gray_dye", 2, 0.5]],
      "sound": null
    }, {
      "id": "cutting/wild_onions",
      "ing": "wild_onions",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["onion", 1, 1.0], ["magenta_dye", 2, 1.0], ["lime_dye", 1, 0.1]],
      "sound": null
    }, {
      "id": "cutting/wild_potatoes",
      "ing": "wild_potatoes",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["potato", 1, 1.0], ["purple_dye", 2, 0.5]],
      "sound": null
    }, {
      "id": "cutting/wild_rice",
      "ing": "wild_rice",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["rice", 1, 1.0], ["straw", 1, 0.5]],
      "sound": null
    }, {
      "id": "cutting/wild_tomatoes",
      "ing": "wild_tomatoes",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["tomato_seeds", 1, 1.0], ["tomato", 1, 0.2], ["green_dye", 1, 0.1]],
      "sound": null
    }, {
      "id": "cutting/wither_rose",
      "ing": "wither_rose",
      "tool": ["#farmersdelight:tools/knives", "#c:tools/knife"],
      "out": [["black_dye", 2, 1.0]],
      "sound": null
    }, {
      "id": "cutting/wooden_basket",
      "ing": "wooden_basket",
      "tool": ["#axes", "#axes"],
      "out": [["canvas", 1, 1.0], ["stick", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/acacia_chest_boat",
      "ing": "acacia_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["acacia_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/acacia_furniture",
      "ing": ["acacia_door", "acacia_trapdoor", "acacia_sign", "acacia_hanging_sign", "acacia_fence", "acacia_fence_gate", "acacia_pressure_plate", "acacia_button", "acacia_boat", "acacia_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["acacia_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/amethyst_block",
      "ing": "amethyst_block",
      "tool": ["#pickaxes", "#pickaxes"],
      "out": [["amethyst_shard", 4, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/bamboo_chest_raft",
      "ing": "bamboo_chest_raft",
      "tool": ["#hoes", "#hoes"],
      "out": [["bamboo_raft", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/bamboo_furniture",
      "ing": ["bamboo_door", "bamboo_trapdoor", "bamboo_sign", "bamboo_hanging_sign", "bamboo_fence", "bamboo_fence_gate", "bamboo_pressure_plate", "bamboo_button", "bamboo_raft", "bamboo_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["bamboo_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/birch_chest_boat",
      "ing": "birch_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["birch_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/birch_furniture",
      "ing": ["birch_door", "birch_trapdoor", "birch_sign", "birch_hanging_sign", "birch_fence", "birch_fence_gate", "birch_pressure_plate", "birch_button", "birch_boat", "birch_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["birch_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/bricks",
      "ing": "bricks",
      "tool": ["#pickaxes", "#pickaxes"],
      "out": [["brick", 4, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/cherry_chest_boat",
      "ing": "cherry_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["cherry_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/cherry_furniture",
      "ing": ["cherry_door", "cherry_trapdoor", "cherry_sign", "cherry_hanging_sign", "cherry_fence", "cherry_fence_gate", "cherry_pressure_plate", "cherry_button", "cherry_boat", "cherry_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["cherry_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/chest_minecart",
      "ing": "chest_minecart",
      "tool": ["#hoes", "#hoes"],
      "out": [["minecart", 1, 1.0], ["chest", 1, 1.0]],
      "sound": "minecraft:block.metal.break"
    }, {
      "id": "salvaging/crimson_furniture",
      "ing": ["crimson_door", "crimson_trapdoor", "crimson_sign", "crimson_hanging_sign", "crimson_fence", "crimson_fence_gate", "crimson_pressure_plate", "crimson_button", "crimson_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["crimson_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/dark_oak_chest_boat",
      "ing": "dark_oak_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["dark_oak_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/dark_oak_furniture",
      "ing": ["dark_oak_door", "dark_oak_trapdoor", "dark_oak_sign", "dark_oak_hanging_sign", "dark_oak_fence", "dark_oak_fence_gate", "dark_oak_pressure_plate", "dark_oak_button", "dark_oak_boat", "dark_oak_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["dark_oak_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/deepslate",
      "ing": "deepslate",
      "tool": ["#pickaxes", "#pickaxes"],
      "out": [["cobbled_deepslate", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/furnace_minecart",
      "ing": "furnace_minecart",
      "tool": ["#hoes", "#hoes"],
      "out": [["minecart", 1, 1.0], ["furnace", 1, 1.0]],
      "sound": "minecraft:block.metal.break"
    }, {
      "id": "salvaging/hopper_minecart",
      "ing": "hopper_minecart",
      "tool": ["#hoes", "#hoes"],
      "out": [["minecart", 1, 1.0], ["hopper", 1, 1.0]],
      "sound": "minecraft:block.metal.break"
    }, {
      "id": "salvaging/jungle_chest_boat",
      "ing": "jungle_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["jungle_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/jungle_furniture",
      "ing": ["jungle_door", "jungle_trapdoor", "jungle_sign", "jungle_hanging_sign", "jungle_fence", "jungle_fence_gate", "jungle_pressure_plate", "jungle_button", "jungle_boat", "jungle_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["jungle_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/leather_armor",
      "ing": ["leather_helmet", "leather_chestplate", "leather_leggings", "leather_boots"],
      "tool": ["#c:tools/shear", "#c:tools/shear"],
      "out": [["leather", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/leather_horse_armor",
      "ing": "leather_horse_armor",
      "tool": ["#c:tools/shear", "#c:tools/shear"],
      "out": [["leather", 2, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/mangrove_chest_boat",
      "ing": "mangrove_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["mangrove_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/mangrove_furniture",
      "ing": ["mangrove_door", "mangrove_trapdoor", "mangrove_sign", "mangrove_hanging_sign", "mangrove_fence", "mangrove_fence_gate", "mangrove_pressure_plate", "mangrove_button", "mangrove_boat", "mangrove_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["mangrove_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/nether_bricks",
      "ing": "nether_bricks",
      "tool": ["#pickaxes", "#pickaxes"],
      "out": [["nether_brick", 4, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/oak_chest_boat",
      "ing": "oak_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["oak_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/oak_furniture",
      "ing": ["oak_door", "oak_trapdoor", "oak_sign", "oak_hanging_sign", "oak_fence", "oak_fence_gate", "oak_pressure_plate", "oak_button", "oak_boat", "oak_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["oak_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/quartz_block",
      "ing": "quartz_block",
      "tool": ["#pickaxes", "#pickaxes"],
      "out": [["quartz", 4, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/saddle",
      "ing": "saddle",
      "tool": ["#c:tools/shear", "#c:tools/shear"],
      "out": [["leather", 2, 1.0], ["iron_nugget", 2, 0.5]],
      "sound": null
    }, {
      "id": "salvaging/spruce_chest_boat",
      "ing": "spruce_chest_boat",
      "tool": ["#hoes", "#hoes"],
      "out": [["spruce_boat", 1, 1.0], ["chest", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/spruce_furniture",
      "ing": ["spruce_door", "spruce_trapdoor", "spruce_sign", "spruce_hanging_sign", "spruce_fence", "spruce_fence_gate", "spruce_pressure_plate", "spruce_button", "spruce_boat", "spruce_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["spruce_planks", 1, 0.75]],
      "sound": null
    }, {
      "id": "salvaging/stone",
      "ing": "stone",
      "tool": ["#pickaxes", "#pickaxes"],
      "out": [["cobblestone", 1, 1.0]],
      "sound": null
    }, {
      "id": "salvaging/tnt_minecart",
      "ing": "tnt_minecart",
      "tool": ["#hoes", "#hoes"],
      "out": [["minecart", 1, 1.0], ["tnt", 1, 1.0]],
      "sound": "minecraft:block.metal.break"
    }, {
      "id": "salvaging/warped_furniture",
      "ing": ["warped_door", "warped_trapdoor", "warped_sign", "warped_hanging_sign", "warped_fence", "warped_fence_gate", "warped_pressure_plate", "warped_button", "warped_cabinet"],
      "tool": ["#axes", "#axes"],
      "out": [["warped_planks", 1, 0.75]],
      "sound": null
    }],
    "special": ["food_serving", "dough"],
    "btags": {
      "farmersdelight:cabinets": ["oak_cabinet", "spruce_cabinet", "birch_cabinet", "jungle_cabinet", "acacia_cabinet", "dark_oak_cabinet", "mangrove_cabinet", "cherry_cabinet", "bamboo_cabinet", "crimson_cabinet", "warped_cabinet"],
      "farmersdelight:campfire_signal_smoke": ["straw_bale", "rice_bale"],
      "farmersdelight:compost_activators": ["brown_mushroom", "red_mushroom", "podzol", "mycelium", "organic_compost", "rich_soil", "rich_soil_farmland", "brown_mushroom_colony", "red_mushroom_colony"],
      "farmersdelight:drops_cake_slice": ["candle_cake", "white_candle_cake", "orange_candle_cake", "magenta_candle_cake", "light_blue_candle_cake", "yellow_candle_cake", "lime_candle_cake", "pink_candle_cake", "gray_candle_cake", "light_gray_candle_cake", "cyan_candle_cake", "purple_candle_cake", "blue_candle_cake", "brown_candle_cake", "green_candle_cake", "red_candle_cake", "black_candle_cake"],
      "farmersdelight:feasts": ["roast_chicken_block", "stuffed_pumpkin_block", "shepherds_pie_block", "honey_glazed_ham_block", "gleaming_salad_block", "rice_roll_medley_block"],
      "farmersdelight:heat_conductors": ["hopper"],
      "farmersdelight:heat_sources": ["magma_block", "lava_cauldron", "stove", "lava", "campfire", "soul_campfire", "fire", "soul_fire"],
      "farmersdelight:mushroom_colonies": ["brown_mushroom_colony", "red_mushroom_colony"],
      "farmersdelight:mushroom_colony_growable_on": ["rich_soil"],
      "farmersdelight:pies": ["apple_pie", "sweet_berry_cheesecake", "chocolate_pie", "fd_pumpkin_pie"],
      "farmersdelight:planted_from_below": ["cave_vines", "cave_vines_plant"],
      "farmersdelight:ropes": ["rope"],
      "farmersdelight:straw_blocks": ["rice_bag", "rope", "safety_net", "canvas_rug", "tatami", "full_tatami_mat", "half_tatami_mat"],
      "farmersdelight:terrain": ["rich_soil", "coarse_dirt", "dirt", "rooted_dirt", "red_sand", "sand", "suspicious_sand"],
      "farmersdelight:tray_heat_sources": ["lava", "campfire", "soul_campfire", "fire", "soul_fire"],
      "farmersdelight:unaffected_by_rich_soil": ["grass_block", "short_grass", "moss_block", "crimson_nylium", "warped_nylium", "fern", "twisting_vines", "twisting_vines_plant", "big_dripleaf", "big_dripleaf_stem", "pink_petals", "sandy_shrub", "brown_mushroom_colony", "red_mushroom_colony", "wild_carrots", "wild_potatoes", "wild_beetroots", "wild_cabbages", "wild_tomatoes", "wild_onions", "wild_rice"],
      "farmersdelight:wild_crops": ["wild_carrots", "wild_potatoes", "wild_beetroots", "wild_cabbages", "wild_tomatoes", "wild_onions", "wild_rice"],
      "farmersdelight:cabinets/wooden": ["oak_cabinet", "spruce_cabinet", "birch_cabinet", "jungle_cabinet", "acacia_cabinet", "dark_oak_cabinet", "mangrove_cabinet", "cherry_cabinet", "bamboo_cabinet", "crimson_cabinet", "warped_cabinet"],
      "farmersdelight:mineable/knife": ["cactus", "melon", "pumpkin", "carved_pumpkin", "jack_o_lantern", "cobweb", "cake", "apple_pie", "sweet_berry_cheesecake", "chocolate_pie", "fd_pumpkin_pie", "black_carpet", "blue_carpet", "brown_carpet", "cyan_carpet", "gray_carpet", "green_carpet", "light_blue_carpet", "light_gray_carpet", "lime_carpet", "magenta_carpet", "orange_carpet", "pink_carpet", "purple_carpet", "red_carpet", "white_carpet", "yellow_carpet", "black_wool", "blue_wool", "brown_wool", "cyan_wool", "gray_wool", "green_wool", "light_blue_wool", "light_gray_wool", "lime_wool", "magenta_wool", "orange_wool", "pink_wool", "purple_wool", "red_wool", "white_wool", "yellow_wool", "black_candle_cake", "blue_candle_cake", "brown_candle_cake", "candle_cake", "cyan_candle_cake", "gray_candle_cake", "green_candle_cake", "light_blue_candle_cake", "light_gray_candle_cake", "lime_candle_cake", "magenta_candle_cake", "orange_candle_cake", "pink_candle_cake", "purple_candle_cake", "red_candle_cake", "white_candle_cake", "yellow_candle_cake", "rice_bag", "rope", "safety_net", "canvas_rug", "tatami", "full_tatami_mat", "half_tatami_mat"]
    },
    "blockLoot": {
      "brown_mushroom_colony": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "block": "brown_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "0"
              }
            }],
            "functions": [{
              "add": false,
              "count": 2.0,
              "function": "minecraft:set_count"
            }],
            "name": "brown_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "block": "brown_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "1"
              }
            }],
            "functions": [{
              "add": false,
              "count": 3.0,
              "function": "minecraft:set_count"
            }],
            "name": "brown_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "block": "brown_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "2"
              }
            }],
            "functions": [{
              "add": false,
              "count": 4.0,
              "function": "minecraft:set_count"
            }],
            "name": "brown_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "condition": "minecraft:inverted",
              "term": {
                "ability": "shears_harvest",
                "condition": "neoforge:can_item_perform_ability"
              }
            }, {
              "block": "brown_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "3"
              }
            }],
            "functions": [{
              "add": false,
              "count": 5.0,
              "function": "minecraft:set_count"
            }],
            "name": "brown_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }, {
              "block": "brown_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "3"
              }
            }],
            "name": "brown_mushroom_colony"
          }]
        }],
        "rolls": 1.0
      }],
      "budding_tomatoes": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:survives_explosion"
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "tomato_seeds"
        }],
        "rolls": 1.0
      }],
      "cabbages": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "block": "cabbages",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "7"
              }
            }],
            "name": "cabbage"
          }, {
            "type": "minecraft:item",
            "name": "cabbage_seeds"
          }]
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "cabbages",
          "condition": "minecraft:block_state_property",
          "properties": {
            "age": "7"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "enchantment": "minecraft:fortune",
            "formula": "minecraft:binomial_with_bonus_count",
            "function": "minecraft:apply_bonus",
            "parameters": {
              "extra": 3,
              "probability": 0.5714286
            }
          }],
          "name": "cabbage_seeds"
        }],
        "rolls": 1.0
      }],
      "full_tatami_mat": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:survives_explosion"
        }],
        "entries": [{
          "type": "minecraft:item",
          "conditions": [{
            "block": "full_tatami_mat",
            "condition": "minecraft:block_state_property",
            "properties": {
              "part": "head"
            }
          }],
          "name": "full_tatami_mat"
        }],
        "rolls": 1.0
      }],
      "gleaming_salad_block": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "gleaming_salad_block",
          "condition": "minecraft:block_state_property",
          "properties": {
            "servings": "4"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "gleaming_salad_block"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "block": "gleaming_salad_block",
            "condition": "minecraft:block_state_property",
            "properties": {
              "servings": "4"
            }
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "bowl"
        }],
        "rolls": 1.0
      }],
      "honey_glazed_ham_block": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "honey_glazed_ham_block",
          "condition": "minecraft:block_state_property",
          "properties": {
            "servings": "4"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "honey_glazed_ham_block"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "block": "honey_glazed_ham_block",
            "condition": "minecraft:block_state_property",
            "properties": {
              "servings": "4"
            }
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "bowl"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "block": "honey_glazed_ham_block",
            "condition": "minecraft:block_state_property",
            "properties": {
              "servings": "4"
            }
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "bone"
        }],
        "rolls": 1.0
      }],
      "onions": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "name": "onion"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "onions",
          "condition": "minecraft:block_state_property",
          "properties": {
            "age": "7"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "enchantment": "minecraft:fortune",
            "formula": "minecraft:binomial_with_bonus_count",
            "function": "minecraft:apply_bonus",
            "parameters": {
              "extra": 3,
              "probability": 0.5714286
            }
          }],
          "name": "onion"
        }],
        "rolls": 1.0
      }],
      "red_mushroom_colony": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "block": "red_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "0"
              }
            }],
            "functions": [{
              "add": false,
              "count": 2.0,
              "function": "minecraft:set_count"
            }],
            "name": "red_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "block": "red_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "1"
              }
            }],
            "functions": [{
              "add": false,
              "count": 3.0,
              "function": "minecraft:set_count"
            }],
            "name": "red_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "block": "red_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "2"
              }
            }],
            "functions": [{
              "add": false,
              "count": 4.0,
              "function": "minecraft:set_count"
            }],
            "name": "red_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "condition": "minecraft:inverted",
              "term": {
                "ability": "shears_harvest",
                "condition": "neoforge:can_item_perform_ability"
              }
            }, {
              "block": "red_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "3"
              }
            }],
            "functions": [{
              "add": false,
              "count": 5.0,
              "function": "minecraft:set_count"
            }],
            "name": "red_mushroom"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }, {
              "block": "red_mushroom_colony",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "3"
              }
            }],
            "name": "red_mushroom_colony"
          }]
        }],
        "rolls": 1.0
      }],
      "rice_panicles": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "block": "rice_panicles",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "3"
              }
            }, {
              "condition": "minecraft:match_tool",
              "predicate": {
                "items": "#farmersdelight:tools/knives"
              }
            }],
            "name": "rice"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "block": "rice_panicles",
              "condition": "minecraft:block_state_property",
              "properties": {
                "age": "3"
              }
            }],
            "name": "rice_panicle"
          }]
        }],
        "functions": [{
          "function": "minecraft:explosion_decay"
        }],
        "rolls": 1.0
      }],
      "rice_roll_medley_block": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "rice_roll_medley_block",
          "condition": "minecraft:block_state_property",
          "properties": {
            "servings": "8"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "rice_roll_medley_block"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "block": "rice_roll_medley_block",
            "condition": "minecraft:block_state_property",
            "properties": {
              "servings": "8"
            }
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "bowl"
        }],
        "rolls": 1.0
      }],
      "rich_soil_farmland": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:survives_explosion"
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "rich_soil"
        }],
        "rolls": 1.0
      }],
      "roast_chicken_block": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "roast_chicken_block",
          "condition": "minecraft:block_state_property",
          "properties": {
            "servings": "4"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "roast_chicken_block"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "block": "roast_chicken_block",
            "condition": "minecraft:block_state_property",
            "properties": {
              "servings": "4"
            }
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "bowl"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "block": "roast_chicken_block",
            "condition": "minecraft:block_state_property",
            "properties": {
              "servings": "4"
            }
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "bone_meal"
        }],
        "rolls": 1.0
      }],
      "sandy_shrub": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "sandy_shrub"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "chance": 0.125,
              "condition": "minecraft:random_chance"
            }],
            "functions": [{
              "function": "minecraft:explosion_decay"
            }, {
              "enchantment": "minecraft:fortune",
              "formula": "minecraft:uniform_bonus_count",
              "function": "minecraft:apply_bonus",
              "parameters": {
                "bonusMultiplier": 2
              }
            }],
            "name": "beetroot_seeds"
          }]
        }],
        "rolls": 1.0
      }],
      "shepherds_pie_block": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "shepherds_pie_block",
          "condition": "minecraft:block_state_property",
          "properties": {
            "servings": "4"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "shepherds_pie_block"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "block": "shepherds_pie_block",
            "condition": "minecraft:block_state_property",
            "properties": {
              "servings": "4"
            }
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "bowl"
        }],
        "rolls": 1.0
      }],
      "stuffed_pumpkin_block": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "stuffed_pumpkin_block",
          "condition": "minecraft:block_state_property",
          "properties": {
            "servings": "4"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "stuffed_pumpkin_block"
        }],
        "rolls": 1.0
      }],
      "tomatoes": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "tomatoes",
          "condition": "minecraft:block_state_property",
          "properties": {
            "age": "3"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "tomato"
        }],
        "functions": [{
          "add": false,
          "count": {
            "type": "minecraft:uniform",
            "max": 2.0,
            "min": 1.0
          },
          "function": "minecraft:set_count"
        }, {
          "enchantment": "minecraft:fortune",
          "formula": "minecraft:uniform_bonus_count",
          "function": "minecraft:apply_bonus",
          "parameters": {
            "bonusMultiplier": 1
          }
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "tomatoes",
          "condition": "minecraft:block_state_property",
          "properties": {
            "ropelogged": "false"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "tomato_seeds"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "tomatoes",
          "condition": "minecraft:block_state_property",
          "properties": {
            "age": "3"
          }
        }, {
          "chance": 0.05,
          "condition": "minecraft:random_chance"
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "rotten_tomato"
        }],
        "rolls": 1.0
      }],
      "tomatoes_on_rope": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "tomatoes_on_rope",
          "condition": "minecraft:block_state_property",
          "properties": {
            "age": "3"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "tomato"
        }],
        "functions": [{
          "add": false,
          "count": {
            "type": "minecraft:uniform",
            "max": 2.0,
            "min": 1.0
          },
          "function": "minecraft:set_count"
        }, {
          "enchantment": "minecraft:fortune",
          "formula": "minecraft:uniform_bonus_count",
          "function": "minecraft:apply_bonus",
          "parameters": {
            "bonusMultiplier": 1
          }
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "tomatoes_on_rope",
          "condition": "minecraft:block_state_property",
          "properties": {
            "age": "3"
          }
        }, {
          "chance": 0.05,
          "condition": "minecraft:random_chance"
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "rotten_tomato"
        }],
        "rolls": 1.0
      }],
      "wild_beetroots": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "chance": 0.2,
          "condition": "minecraft:random_chance"
        }, {
          "condition": "minecraft:inverted",
          "term": {
            "ability": "shears_harvest",
            "condition": "neoforge:can_item_perform_ability"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "beetroot"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_beetroots"
          }, {
            "type": "minecraft:item",
            "functions": [{
              "function": "minecraft:explosion_decay"
            }, {
              "enchantment": "minecraft:fortune",
              "formula": "minecraft:uniform_bonus_count",
              "function": "minecraft:apply_bonus",
              "parameters": {
                "bonusMultiplier": 2
              }
            }],
            "name": "beetroot_seeds"
          }]
        }],
        "rolls": 1.0
      }],
      "wild_cabbages": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "chance": 0.2,
          "condition": "minecraft:random_chance"
        }, {
          "condition": "minecraft:inverted",
          "term": {
            "ability": "shears_harvest",
            "condition": "neoforge:can_item_perform_ability"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "cabbage"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_cabbages"
          }, {
            "type": "minecraft:item",
            "functions": [{
              "function": "minecraft:explosion_decay"
            }, {
              "enchantment": "minecraft:fortune",
              "formula": "minecraft:uniform_bonus_count",
              "function": "minecraft:apply_bonus",
              "parameters": {
                "bonusMultiplier": 2
              }
            }],
            "name": "cabbage_seeds"
          }]
        }],
        "rolls": 1.0
      }],
      "wild_carrots": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_carrots"
          }, {
            "type": "minecraft:item",
            "functions": [{
              "function": "minecraft:explosion_decay"
            }, {
              "enchantment": "minecraft:fortune",
              "formula": "minecraft:uniform_bonus_count",
              "function": "minecraft:apply_bonus",
              "parameters": {
                "bonusMultiplier": 2
              }
            }],
            "name": "carrot"
          }]
        }],
        "rolls": 1.0
      }],
      "wild_onions": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_onions"
          }, {
            "type": "minecraft:item",
            "functions": [{
              "function": "minecraft:explosion_decay"
            }, {
              "enchantment": "minecraft:fortune",
              "formula": "minecraft:uniform_bonus_count",
              "function": "minecraft:apply_bonus",
              "parameters": {
                "bonusMultiplier": 2
              }
            }],
            "name": "onion"
          }]
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "condition": "minecraft:inverted",
          "term": {
            "ability": "shears_harvest",
            "condition": "neoforge:can_item_perform_ability"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "allium"
        }],
        "functions": [{
          "add": false,
          "count": {
            "type": "minecraft:uniform",
            "max": 3.0,
            "min": 1.0
          },
          "function": "minecraft:set_count"
        }],
        "rolls": 1.0
      }],
      "wild_potatoes": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_potatoes"
          }, {
            "type": "minecraft:item",
            "functions": [{
              "function": "minecraft:explosion_decay"
            }, {
              "enchantment": "minecraft:fortune",
              "formula": "minecraft:uniform_bonus_count",
              "function": "minecraft:apply_bonus",
              "parameters": {
                "bonusMultiplier": 2
              }
            }],
            "name": "potato"
          }]
        }],
        "rolls": 1.0
      }],
      "wild_rice": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "wild_rice",
          "condition": "minecraft:block_state_property",
          "properties": {
            "half": "lower"
          }
        }, {
          "condition": "minecraft:location_check",
          "offsetY": 1,
          "predicate": {
            "block": {
              "blocks": "farmersdelight:wild_rice",
              "state": {
                "half": "upper"
              }
            }
          }
        }],
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_rice"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "condition": "minecraft:survives_explosion"
            }],
            "name": "rice"
          }]
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "conditions": [{
          "block": "wild_rice",
          "condition": "minecraft:block_state_property",
          "properties": {
            "half": "upper"
          }
        }, {
          "condition": "minecraft:location_check",
          "offsetY": -1,
          "predicate": {
            "block": {
              "blocks": "farmersdelight:wild_rice",
              "state": {
                "half": "lower"
              }
            }
          }
        }],
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_rice"
          }, {
            "type": "minecraft:item",
            "conditions": [{
              "condition": "minecraft:survives_explosion"
            }],
            "name": "rice"
          }]
        }],
        "rolls": 1.0
      }],
      "wild_tomatoes": [{
        "bonus_rolls": 0.0,
        "conditions": [{
          "chance": 0.2,
          "condition": "minecraft:random_chance"
        }, {
          "condition": "minecraft:inverted",
          "term": {
            "ability": "shears_harvest",
            "condition": "neoforge:can_item_perform_ability"
          }
        }],
        "entries": [{
          "type": "minecraft:item",
          "name": "tomato"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:alternatives",
          "children": [{
            "type": "minecraft:item",
            "conditions": [{
              "ability": "shears_harvest",
              "condition": "neoforge:can_item_perform_ability"
            }],
            "name": "wild_tomatoes"
          }, {
            "type": "minecraft:item",
            "functions": [{
              "function": "minecraft:explosion_decay"
            }, {
              "enchantment": "minecraft:fortune",
              "formula": "minecraft:uniform_bonus_count",
              "function": "minecraft:apply_bonus",
              "parameters": {
                "bonusMultiplier": 2
              }
            }],
            "name": "tomato_seeds"
          }]
        }],
        "rolls": 1.0
      }]
    },
    "chests": {
      "chests/fd_abandoned_mineshaft": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "name": "cooking_pot"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "damage": {
              "type": "minecraft:uniform",
              "max": 0.8,
              "min": 0.15
            },
            "function": "minecraft:set_damage"
          }],
          "name": "skillet"
        }, {
          "type": "minecraft:empty",
          "weight": 6
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "tomato_seeds"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "cabbage_seeds"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "rice"
        }, {
          "type": "minecraft:empty",
          "weight": 2
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 4.0,
          "min": 1.0
        }
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 12.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "rope"
        }, {
          "type": "minecraft:empty",
          "weight": 2
        }],
        "rolls": 3.0
      }],
      "chests/fd_bastion_hoglin_stable": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "damage": {
              "type": "minecraft:uniform",
              "max": 0.8,
              "min": 0.15
            },
            "function": "minecraft:set_damage"
          }, {
            "function": "minecraft:enchant_randomly",
            "options": "#minecraft:on_random_loot"
          }],
          "name": "diamond_knife"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "function": "minecraft:enchant_randomly",
            "options": "#minecraft:on_random_loot"
          }],
          "name": "golden_knife",
          "weight": 2
        }, {
          "type": "minecraft:empty",
          "weight": 2
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 5.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "ham",
          "weight": 4
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 5.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "smoked_ham",
          "weight": 2
        }, {
          "type": "minecraft:empty",
          "weight": 2
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 2.0,
          "min": 1.0
        }
      }],
      "chests/fd_bastion_treasure": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "damage": {
              "type": "minecraft:uniform",
              "max": 1.0,
              "min": 0.8
            },
            "function": "minecraft:set_damage"
          }, {
            "function": "minecraft:enchant_randomly",
            "options": "#minecraft:on_random_loot"
          }],
          "name": "diamond_knife"
        }, {
          "type": "minecraft:item",
          "name": "diamond_knife"
        }, {
          "type": "minecraft:empty",
          "weight": 6
        }],
        "rolls": 1.0
      }],
      "chests/fd_end_city_treasure": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "function": "minecraft:enchant_with_levels",
            "levels": {
              "type": "minecraft:uniform",
              "max": 39.0,
              "min": 20.0
            },
            "options": "#minecraft:on_random_loot"
          }],
          "name": "diamond_knife"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "function": "minecraft:enchant_with_levels",
            "levels": {
              "type": "minecraft:uniform",
              "max": 39.0,
              "min": 20.0
            },
            "options": "#minecraft:on_random_loot"
          }],
          "name": "iron_knife"
        }, {
          "type": "minecraft:empty",
          "weight": 6
        }],
        "rolls": 1.0
      }],
      "chests/fd_pillager_outpost": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 12.0,
              "min": 4.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "onion",
          "weight": 5
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "onion_crate",
          "weight": 2
        }, {
          "type": "minecraft:empty",
          "weight": 2
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 2.0,
          "min": 1.0
        }
      }],
      "chests/fd_ruined_portal": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "function": "minecraft:enchant_randomly",
            "options": "#minecraft:on_random_loot"
          }],
          "name": "golden_knife"
        }, {
          "type": "minecraft:empty",
          "weight": 3
        }],
        "rolls": 1.0
      }],
      "chests/fd_shipwreck_supply": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "tomato_seeds",
          "weight": 6
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "cabbage_seeds",
          "weight": 6
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "onion",
          "weight": 6
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "rice",
          "weight": 6
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 2.0,
          "min": 1.0
        }
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 12.0,
              "min": 4.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "rope",
          "weight": 2
        }, {
          "type": "minecraft:empty"
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 3.0,
          "min": 1.0
        }
      }],
      "chests/fd_simple_dungeon": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "tomato_seeds"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 4.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "cabbage_seeds"
        }, {
          "type": "minecraft:empty",
          "weight": 2
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 4.0,
          "min": 1.0
        }
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 12.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "rope"
        }, {
          "type": "minecraft:empty",
          "weight": 2
        }],
        "rolls": 3.0
      }],
      "chests/fd_village_butcher": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "name": "flint_knife"
        }, {
          "type": "minecraft:item",
          "name": "iron_knife"
        }, {
          "type": "minecraft:empty"
        }],
        "rolls": 1.0
      }, {
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "name": "ham"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 6.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "minced_beef",
          "weight": 3
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 6.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "fd_bacon",
          "weight": 3
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 6.0,
              "min": 2.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "mutton_chops",
          "weight": 3
        }, {
          "type": "minecraft:empty"
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 2.0,
          "min": 1.0
        }
      }],
      "chests/fd_village_desert_house": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "tomato_seeds"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "rice"
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 3.0,
          "min": 1.0
        }
      }],
      "chests/fd_village_plains_house": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "onion"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "tomato_seeds"
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 3.0,
          "min": 1.0
        }
      }],
      "chests/fd_village_savanna_house": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "tomato_seeds"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "cabbage_seeds"
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 3.0,
          "min": 1.0
        }
      }],
      "chests/fd_village_snowy_house": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "onion"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "cabbage_seeds"
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 3.0,
          "min": 1.0
        }
      }],
      "chests/fd_village_taiga_house": [{
        "bonus_rolls": 0.0,
        "entries": [{
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "cabbage_seeds"
        }, {
          "type": "minecraft:item",
          "functions": [{
            "add": false,
            "count": {
              "type": "minecraft:uniform",
              "max": 3.0,
              "min": 1.0
            },
            "function": "minecraft:set_count"
          }],
          "name": "rice"
        }],
        "rolls": {
          "type": "minecraft:uniform",
          "max": 3.0,
          "min": 1.0
        }
      }]
    },
    "lootMods": [{
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/abandoned_mineshaft"
      }],
      "table": "farmersdelight:chests/fd_abandoned_mineshaft"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/bastion_hoglin_stable"
      }],
      "table": "farmersdelight:chests/fd_bastion_hoglin_stable"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/bastion_treasure"
      }],
      "table": "farmersdelight:chests/fd_bastion_treasure"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/end_city_treasure"
      }],
      "table": "farmersdelight:chests/fd_end_city_treasure"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/pillager_outpost"
      }],
      "table": "farmersdelight:chests/fd_pillager_outpost"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/ruined_portal"
      }],
      "table": "farmersdelight:chests/fd_ruined_portal"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/shipwreck_supply"
      }],
      "table": "farmersdelight:chests/fd_shipwreck_supply"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/simple_dungeon"
      }],
      "table": "farmersdelight:chests/fd_simple_dungeon"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/village/village_butcher"
      }],
      "table": "farmersdelight:chests/fd_village_butcher"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/village/village_desert_house"
      }],
      "table": "farmersdelight:chests/fd_village_desert_house"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/village/village_plains_house"
      }],
      "table": "farmersdelight:chests/fd_village_plains_house"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/village/village_savanna_house"
      }],
      "table": "farmersdelight:chests/fd_village_savanna_house"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/village/village_snowy_house"
      }],
      "table": "farmersdelight:chests/fd_village_snowy_house"
    }, {
      "type": "neoforge:add_table",
      "conditions": [{
        "condition": "neoforge:loot_table_id",
        "loot_table_id": "minecraft:chests/village/village_taiga_house"
      }],
      "table": "farmersdelight:chests/fd_village_taiga_house"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:any_of",
        "terms": [{
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:pillager"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:evoker"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:vindicator"
          }
        }]
      }, {
        "condition": "minecraft:killed_by_player"
      }, {
        "condition": "minecraft:random_chance_with_enchanted_bonus",
        "enchanted_chance": {
          "type": "minecraft:linear",
          "base": 0.03,
          "per_level_above_first": 0.01
        },
        "enchantment": "minecraft:looting",
        "unenchanted_chance": 0.02
      }],
      "item": "farmersdelight:onion"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:any_of",
        "terms": [{
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:zombie"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:husk"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:zombie_villager"
          }
        }]
      }, {
        "condition": "minecraft:killed_by_player"
      }, {
        "condition": "minecraft:random_chance_with_enchanted_bonus",
        "enchanted_chance": {
          "type": "minecraft:linear",
          "base": 0.03,
          "per_level_above_first": 0.01
        },
        "enchantment": "minecraft:looting",
        "unenchanted_chance": 0.02
      }],
      "item": "farmersdelight:onion"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "type": "minecraft:chicken"
        }
      }],
      "item": "minecraft:feather"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "type": "minecraft:hoglin"
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "flags": {
            "is_on_fire": false
          }
        }
      }],
      "item": "farmersdelight:ham"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "type": "minecraft:pig"
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "flags": {
            "is_on_fire": false
          }
        }
      }, {
        "condition": "minecraft:random_chance_with_enchanted_bonus",
        "enchanted_chance": {
          "type": "minecraft:linear",
          "base": 0.6,
          "per_level_above_first": 0.1
        },
        "enchantment": "minecraft:looting",
        "unenchanted_chance": 0.5
      }],
      "item": "farmersdelight:ham"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:any_of",
        "terms": [{
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:cow"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:mooshroom"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:horse"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:donkey"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:mule"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:llama"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:trader_llama"
          }
        }]
      }],
      "item": "minecraft:leather"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "type": "minecraft:rabbit"
        }
      }],
      "item": "minecraft:rabbit_hide"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "type": "minecraft:shulker"
        }
      }],
      "item": "minecraft:shulker_shell"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "type": "minecraft:hoglin"
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "flags": {
            "is_on_fire": true
          }
        }
      }],
      "item": "farmersdelight:smoked_ham"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "type": "minecraft:pig"
        }
      }, {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
          "flags": {
            "is_on_fire": true
          }
        }
      }, {
        "condition": "minecraft:random_chance_with_enchanted_bonus",
        "enchanted_chance": {
          "type": "minecraft:linear",
          "base": 0.6,
          "per_level_above_first": 0.1
        },
        "enchantment": "minecraft:looting",
        "unenchanted_chance": 0.5
      }],
      "item": "farmersdelight:smoked_ham"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:entity_properties",
        "entity": "attacker",
        "predicate": {
          "equipment": {
            "mainhand": {
              "items": "#farmersdelight:tools/knives"
            }
          }
        }
      }, {
        "condition": "minecraft:any_of",
        "terms": [{
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:spider"
          }
        }, {
          "condition": "minecraft:entity_properties",
          "entity": "this",
          "predicate": {
            "type": "minecraft:cave_spider"
          }
        }]
      }],
      "item": "minecraft:string"
    }, {
      "type": "farmersdelight:replace_item",
      "added_item": "farmersdelight:pumpkin_slice",
      "conditions": [{
        "block": "pumpkin",
        "condition": "minecraft:block_state_property"
      }, {
        "condition": "minecraft:match_tool",
        "predicate": {
          "predicates": {
            "minecraft:enchantments": [{
              "enchantments": "minecraft:silk_touch",
              "levels": {
                "min": 1
              }
            }]
          }
        }
      }],
      "count": 4,
      "removed_item": "minecraft:pumpkin"
    }, {
      "type": "farmersdelight:pastry_slicing",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:tools/knives"
        }
      }, {
        "block": "apple_pie",
        "condition": "minecraft:block_state_property"
      }],
      "slice": "farmersdelight:apple_pie_slice"
    }, {
      "type": "farmersdelight:pastry_slicing",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:tools/knives"
        }
      }, {
        "block": "cake",
        "condition": "minecraft:block_state_property"
      }],
      "slice": "farmersdelight:cake_slice"
    }, {
      "type": "farmersdelight:pastry_slicing",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:tools/knives"
        }
      }, {
        "block": "chocolate_pie",
        "condition": "minecraft:block_state_property"
      }],
      "slice": "farmersdelight:chocolate_pie_slice"
    }, {
      "type": "farmersdelight:pastry_slicing",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:tools/knives"
        }
      }, {
        "block": "fd_pumpkin_pie",
        "condition": "minecraft:block_state_property"
      }],
      "slice": "farmersdelight:pumpkin_pie_slice"
    }, {
      "type": "farmersdelight:pastry_slicing",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:tools/knives"
        }
      }, {
        "block": "sweet_berry_cheesecake",
        "condition": "minecraft:block_state_property"
      }],
      "slice": "farmersdelight:sweet_berry_cheesecake_slice"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:tools/knives"
        }
      }, {
        "condition": "minecraft:any_of",
        "terms": [{
          "block": "candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "white_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "orange_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "magenta_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "light_blue_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "yellow_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "lime_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "pink_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "gray_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "light_gray_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "cyan_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "purple_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "blue_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "brown_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "green_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "red_candle_cake",
          "condition": "minecraft:block_state_property"
        }, {
          "block": "black_candle_cake",
          "condition": "minecraft:block_state_property"
        }]
      }],
      "count": 7,
      "item": "farmersdelight:cake_slice"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:straw_harvesters"
        }
      }, {
        "chance": 0.2,
        "condition": "minecraft:random_chance"
      }, {
        "block": "short_grass",
        "condition": "minecraft:block_state_property"
      }],
      "item": "farmersdelight:straw"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:straw_harvesters"
        }
      }, {
        "block": "rice_panicles",
        "condition": "minecraft:block_state_property",
        "properties": {
          "age": "3"
        }
      }],
      "item": "farmersdelight:straw"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:straw_harvesters"
        }
      }, {
        "block": "wheat",
        "condition": "minecraft:block_state_property",
        "properties": {
          "age": "7"
        }
      }],
      "item": "farmersdelight:straw"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:straw_harvesters"
        }
      }, {
        "chance": 0.3,
        "condition": "minecraft:random_chance"
      }, {
        "block": "sandy_shrub",
        "condition": "minecraft:block_state_property"
      }],
      "item": "farmersdelight:straw"
    }, {
      "type": "farmersdelight:add_item",
      "conditions": [{
        "condition": "minecraft:match_tool",
        "predicate": {
          "items": "#farmersdelight:straw_harvesters"
        }
      }, {
        "chance": 0.2,
        "condition": "minecraft:random_chance"
      }, {
        "block": "tall_grass",
        "condition": "minecraft:block_state_property"
      }],
      "item": "farmersdelight:straw"
    }],
    "compost": {
      "apple_pie": 1.0,
      "apple_pie_slice": 0.85,
      "brown_mushroom_colony": 1.0,
      "cabbage": 0.65,
      "cabbage_leaf": 0.5,
      "cabbage_seeds": 0.3,
      "cake_slice": 0.85,
      "chocolate_pie": 1.0,
      "chocolate_pie_slice": 0.85,
      "dumplings": 1.0,
      "honey_cookie": 0.85,
      "kelp_roll": 0.85,
      "kelp_roll_slice": 0.5,
      "onion": 0.65,
      "pie_crust": 0.65,
      "pumpkin_slice": 0.5,
      "raw_pasta": 0.85,
      "red_mushroom_colony": 1.0,
      "rice": 0.3,
      "rice_bale": 0.85,
      "rice_panicle": 0.3,
      "rotten_tomato": 0.85,
      "sandy_shrub": 0.3,
      "straw": 0.3,
      "stuffed_pumpkin_block": 1.0,
      "sweet_berry_cheesecake": 1.0,
      "sweet_berry_cheesecake_slice": 0.85,
      "sweet_berry_cookie": 0.85,
      "tomato": 0.65,
      "tomato_seeds": 0.3,
      "tree_bark": 0.3,
      "wild_beetroots": 0.65,
      "wild_cabbages": 0.65,
      "wild_carrots": 0.65,
      "wild_onions": 0.65,
      "wild_potatoes": 0.65,
      "wild_rice": 0.65,
      "wild_tomatoes": 0.65
    },
    "lang": {
      "block.farmersdelight.stove": "炉灶",
      "block.farmersdelight.cooking_pot": "厨锅",
      "block.farmersdelight.wooden_basket": "篮子",
      "block.farmersdelight.cutting_board": "砧板",
      "block.farmersdelight.skillet": "煎锅",
      "block.farmersdelight.oak_cabinet": "橡木橱柜",
      "block.farmersdelight.birch_cabinet": "白桦木橱柜",
      "block.farmersdelight.spruce_cabinet": "云杉木橱柜",
      "block.farmersdelight.jungle_cabinet": "丛林木橱柜",
      "block.farmersdelight.acacia_cabinet": "金合欢木橱柜",
      "block.farmersdelight.dark_oak_cabinet": "深色橡木橱柜",
      "block.farmersdelight.mangrove_cabinet": "红树木橱柜",
      "block.farmersdelight.cherry_cabinet": "樱花木橱柜",
      "block.farmersdelight.bamboo_cabinet": "竹橱柜",
      "block.farmersdelight.crimson_cabinet": "绯红木橱柜",
      "block.farmersdelight.warped_cabinet": "诡异木橱柜",
      "block.farmersdelight.rope": "绳子",
      "block.farmersdelight.safety_net": "安全网",
      "block.farmersdelight.canvas_rug": "粗布毯",
      "block.farmersdelight.tatami": "榻榻米方块",
      "block.farmersdelight.full_tatami_mat": "长榻榻米垫",
      "block.farmersdelight.half_tatami_mat": "短榻榻米垫",
      "block.farmersdelight.organic_compost": "有机堆肥",
      "block.farmersdelight.rich_soil": "沃土",
      "block.farmersdelight.rich_soil_farmland": "沃土耕地",
      "block.farmersdelight.carrot_crate": "箱装胡萝卜",
      "block.farmersdelight.potato_crate": "箱装马铃薯",
      "block.farmersdelight.beetroot_crate": "箱装甜菜根",
      "block.farmersdelight.cabbage_crate": "箱装卷心菜",
      "block.farmersdelight.tomato_crate": "箱装番茄",
      "block.farmersdelight.onion_crate": "箱装洋葱",
      "block.farmersdelight.rice_bale": "稻米块",
      "block.farmersdelight.rice_bag": "袋装稻米",
      "block.farmersdelight.straw_bale": "稻草",
      "block.farmersdelight.canvas_sign": "粗布告示牌",
      "block.farmersdelight.white_canvas_sign": "白色粗布告示牌",
      "block.farmersdelight.orange_canvas_sign": "橙色粗布告示牌",
      "block.farmersdelight.magenta_canvas_sign": "品红色粗布告示牌",
      "block.farmersdelight.light_blue_canvas_sign": "淡蓝色粗布告示牌",
      "block.farmersdelight.yellow_canvas_sign": "黄色粗布告示牌",
      "block.farmersdelight.lime_canvas_sign": "黄绿色粗布告示牌",
      "block.farmersdelight.pink_canvas_sign": "粉红色粗布告示牌",
      "block.farmersdelight.gray_canvas_sign": "灰色粗布告示牌",
      "block.farmersdelight.light_gray_canvas_sign": "淡灰色粗布告示牌",
      "block.farmersdelight.cyan_canvas_sign": "青色粗布告示牌",
      "block.farmersdelight.purple_canvas_sign": "紫色粗布告示牌",
      "block.farmersdelight.blue_canvas_sign": "蓝色粗布告示牌",
      "block.farmersdelight.brown_canvas_sign": "棕色粗布告示牌",
      "block.farmersdelight.green_canvas_sign": "绿色粗布告示牌",
      "block.farmersdelight.red_canvas_sign": "红色粗布告示牌",
      "block.farmersdelight.black_canvas_sign": "黑色粗布告示牌",
      "block.farmersdelight.hanging_canvas_sign": "悬挂式粗布告示牌",
      "block.farmersdelight.white_hanging_canvas_sign": "悬挂式白色粗布告示牌",
      "block.farmersdelight.orange_hanging_canvas_sign": "悬挂式橙色粗布告示牌",
      "block.farmersdelight.magenta_hanging_canvas_sign": "悬挂式品红色粗布告示牌",
      "block.farmersdelight.light_blue_hanging_canvas_sign": "悬挂式淡蓝色粗布告示牌",
      "block.farmersdelight.yellow_hanging_canvas_sign": "悬挂式黄色粗布告示牌",
      "block.farmersdelight.lime_hanging_canvas_sign": "悬挂式黄绿色粗布告示牌",
      "block.farmersdelight.pink_hanging_canvas_sign": "悬挂式粉红色粗布告示牌",
      "block.farmersdelight.gray_hanging_canvas_sign": "悬挂式灰色粗布告示牌",
      "block.farmersdelight.light_gray_hanging_canvas_sign": "悬挂式淡灰色粗布告示牌",
      "block.farmersdelight.cyan_hanging_canvas_sign": "悬挂式青色粗布告示牌",
      "block.farmersdelight.purple_hanging_canvas_sign": "悬挂式紫色粗布告示牌",
      "block.farmersdelight.blue_hanging_canvas_sign": "悬挂式蓝色粗布告示牌",
      "block.farmersdelight.brown_hanging_canvas_sign": "悬挂式棕色粗布告示牌",
      "block.farmersdelight.green_hanging_canvas_sign": "悬挂式绿色粗布告示牌",
      "block.farmersdelight.red_hanging_canvas_sign": "悬挂式红色粗布告示牌",
      "block.farmersdelight.black_hanging_canvas_sign": "悬挂式黑色粗布告示牌",
      "block.farmersdelight.budding_tomatoes": "萌芽的番茄藤蔓",
      "block.farmersdelight.tomatoes": "番茄藤蔓",
      "block.farmersdelight.cabbages": "卷心菜",
      "block.farmersdelight.onions": "洋葱",
      "block.farmersdelight.rice": "稻米",
      "block.farmersdelight.rice_panicles": "稻米",
      "block.farmersdelight.brown_mushroom_colony": "棕色蘑菇菌落",
      "block.farmersdelight.red_mushroom_colony": "红色蘑菇菌落",
      "block.farmersdelight.sandy_shrub": "沙生灌木",
      "block.farmersdelight.wild_cabbages": "野生卷心菜",
      "block.farmersdelight.wild_tomatoes": "番茄灌木",
      "block.farmersdelight.wild_onions": "野生洋葱",
      "block.farmersdelight.wild_carrots": "野生胡萝卜",
      "block.farmersdelight.wild_potatoes": "野生马铃薯",
      "block.farmersdelight.wild_beetroots": "海甜菜",
      "block.farmersdelight.wild_rice": "野生稻米",
      "block.farmersdelight.apple_pie": "苹果派",
      "block.farmersdelight.sweet_berry_cheesecake": "甜浆果芝士派",
      "block.farmersdelight.chocolate_pie": "巧克力派",
      "item.farmersdelight.tomato": "番茄",
      "item.farmersdelight.cabbage": "卷心菜",
      "item.farmersdelight.onion": "洋葱",
      "item.farmersdelight.rice": "稻米",
      "item.farmersdelight.cabbage_seeds": "卷心菜种子",
      "item.farmersdelight.tomato_seeds": "番茄种子",
      "item.farmersdelight.rice_panicle": "稻米穗",
      "item.farmersdelight.rotten_tomato": "烂番茄",
      "item.farmersdelight.straw": "草秆",
      "item.farmersdelight.canvas": "粗布",
      "item.farmersdelight.tree_bark": "树皮",
      "item.farmersdelight.tomato_sauce": "番茄酱",
      "item.farmersdelight.fried_egg": "煎鸡蛋",
      "item.farmersdelight.milk_bottle": "奶瓶",
      "item.farmersdelight.hot_cocoa": "热可可",
      "item.farmersdelight.apple_cider": "苹果酒",
      "item.farmersdelight.melon_juice": "西瓜汁",
      "item.farmersdelight.wheat_dough": "面团",
      "item.farmersdelight.raw_pasta": "生意面",
      "item.farmersdelight.pumpkin_slice": "南瓜片",
      "item.farmersdelight.cabbage_leaf": "卷心菜叶",
      "item.farmersdelight.minced_beef": "牛肉馅",
      "item.farmersdelight.beef_patty": "牛肉饼",
      "item.farmersdelight.chicken_cuts": "生鸡肉丁",
      "item.farmersdelight.cooked_chicken_cuts": "熟鸡肉丁",
      "item.farmersdelight.bacon": "生培根",
      "item.farmersdelight.cooked_bacon": "熟培根",
      "item.farmersdelight.cod_slice": "生鳕鱼片",
      "item.farmersdelight.cooked_cod_slice": "熟鳕鱼片",
      "item.farmersdelight.salmon_slice": "生鲑鱼片",
      "item.farmersdelight.cooked_salmon_slice": "熟鲑鱼片",
      "item.farmersdelight.mutton_chops": "生羊排",
      "item.farmersdelight.cooked_mutton_chops": "熟羊排",
      "item.farmersdelight.ham": "火腿",
      "item.farmersdelight.smoked_ham": "烟熏火腿",
      "item.farmersdelight.pie_crust": "馅饼酥皮",
      "item.farmersdelight.cake_slice": "蛋糕切片",
      "item.farmersdelight.apple_pie_slice": "苹果派切片",
      "item.farmersdelight.sweet_berry_cheesecake_slice": "甜浆果芝士派切片",
      "item.farmersdelight.chocolate_pie_slice": "巧克力派切片",
      "item.farmersdelight.fruit_salad": "水果沙拉",
      "item.farmersdelight.sweet_berry_cookie": "甜浆果曲奇",
      "item.farmersdelight.honey_cookie": "蜂蜜曲奇",
      "item.farmersdelight.melon_popsicle": "西瓜冰棍",
      "item.farmersdelight.glow_berry_custard": "发光浆果蛋奶沙司",
      "item.farmersdelight.earthworm": "蚯蚓",
      "item.farmersdelight.flint_knife": "燧石刀",
      "item.farmersdelight.iron_knife": "铁刀",
      "item.farmersdelight.golden_knife": "金刀",
      "item.farmersdelight.diamond_knife": "钻石刀",
      "item.farmersdelight.netherite_knife": "下界合金刀",
      "item.farmersdelight.barbecue_stick": "烧烤串",
      "item.farmersdelight.egg_sandwich": "鸡蛋三明治",
      "item.farmersdelight.chicken_sandwich": "鸡肉三明治",
      "item.farmersdelight.hamburger": "汉堡包",
      "item.farmersdelight.bacon_sandwich": "培根三明治",
      "item.farmersdelight.mutton_wrap": "羊肉卷饼",
      "item.farmersdelight.dumplings": "饺子",
      "item.farmersdelight.stuffed_potato": "填馅马铃薯",
      "item.farmersdelight.cabbage_rolls": "卷心菜卷",
      "item.farmersdelight.salmon_roll": "鲑鱼寿司",
      "item.farmersdelight.cod_roll": "鳕鱼寿司",
      "item.farmersdelight.kelp_roll": "海带寿司卷",
      "item.farmersdelight.kelp_roll_slice": "海带寿司",
      "item.farmersdelight.cooked_rice": "米饭",
      "item.farmersdelight.mixed_salad": "混合沙拉",
      "item.farmersdelight.nether_salad": "下界沙拉",
      "item.farmersdelight.beef_stew": "牛肉炖",
      "item.farmersdelight.chicken_soup": "鸡肉汤",
      "item.farmersdelight.vegetable_soup": "蔬菜汤",
      "item.farmersdelight.fish_stew": "鱼肉炖",
      "item.farmersdelight.fried_rice": "炒饭",
      "item.farmersdelight.pumpkin_soup": "南瓜汤",
      "item.farmersdelight.baked_cod_stew": "烘焙鳕鱼炖",
      "item.farmersdelight.noodle_soup": "面条汤",
      "item.farmersdelight.bone_broth": "大骨汤",
      "item.farmersdelight.bacon_and_eggs": "培根鸡蛋",
      "item.farmersdelight.pasta_with_meatballs": "肉丸意面",
      "item.farmersdelight.pasta_with_mutton_chop": "羊排意面",
      "item.farmersdelight.roasted_mutton_chops": "烤羊排",
      "item.farmersdelight.steak_and_potatoes": "牛排配土豆",
      "item.farmersdelight.vegetable_noodles": "蔬菜面",
      "item.farmersdelight.ratatouille": "蔬菜杂烩",
      "item.farmersdelight.squid_ink_pasta": "鱿鱼墨面",
      "item.farmersdelight.grilled_salmon": "香烤鲑鱼",
      "item.farmersdelight.mushroom_rice": "蘑菇饭",
      "block.farmersdelight.roast_chicken_block": "烤鸡",
      "item.farmersdelight.roast_chicken": "盘装烤鸡",
      "block.farmersdelight.stuffed_pumpkin_block": "填馅南瓜",
      "item.farmersdelight.stuffed_pumpkin": "碗装填馅南瓜",
      "block.farmersdelight.honey_glazed_ham_block": "蜜汁火腿",
      "item.farmersdelight.honey_glazed_ham": "盘装蜜汁火腿",
      "block.farmersdelight.shepherds_pie_block": "牧羊人派",
      "item.farmersdelight.shepherds_pie": "盘装牧羊人派",
      "block.farmersdelight.rice_roll_medley_block": "寿司拼盘",
      "item.farmersdelight.dog_food": "狗粮",
      "item.farmersdelight.horse_feed": "马食",
      "entity.farmersdelight.rotten_tomato": "烂番茄",
      "effect.farmersdelight.nourishment": "滋养",
      "effect.farmersdelight.comfort": "舒适",
      "effect.farmersdelight.nourishment.description": "你不会再消耗饥饿值，除非需要借以恢复生命值。",
      "effect.farmersdelight.comfort.description": "使你对饥饿、缓慢和虚弱效果免疫。",
      "enchantment.farmersdelight.backstabbing": "背刺",
      "enchantment.farmersdelight.backstabbing.description": "增加从后攻击目标时的伤害。",
      "itemGroup.farmersdelight": "农夫乐事",
      "container.farmersdelight.recipe_book.cookable": "仅显示可烹饪",
      "container.farmersdelight.cooking_pot": "厨锅",
      "container.farmersdelight.cooking_pot.served_on": "需盛装于：%s",
      "container.farmersdelight.cooking_pot.not_heated": "下方需要热源",
      "container.farmersdelight.cooking_pot.heated": "已受热",
      "container.farmersdelight.basket": "篮子",
      "container.farmersdelight.cabinet": "橱柜",
      "tooltip.farmersdelight.cooking_pot.empty": "空",
      "tooltip.farmersdelight.cooking_pot.single_serving": "装有1份：",
      "tooltip.farmersdelight.cooking_pot.many_servings": "装有%s份：",
      "tooltip.farmersdelight.dog_food.when_feeding": "喂给已驯服的狗时：",
      "tooltip.farmersdelight.horse_feed.when_feeding": "喂给已驯服的马时：",
      "tooltip.farmersdelight.milk_bottle": "清除1个效果",
      "tooltip.farmersdelight.hot_cocoa": "清除1个有害效果",
      "tooltip.farmersdelight.melon_juice": "瞬间恢复少量生命值",
      "advancements.farmersdelight.root.title": "农夫乐事",
      "advancements.farmersdelight.root.description": "美味的世界在等着你！",
      "advancements.farmersdelight.craft_knife.title": "刀耕火种",
      "advancements.farmersdelight.craft_knife.description": "合成一把刀来从植物和动物上获取更多资源！",
      "advancements.farmersdelight.harvest_straw.title": "救命稻草",
      "advancements.farmersdelight.harvest_straw.description": "使用刀割下长草的植物以获取一些草秆",
      "advancements.farmersdelight.place_organic_compost.title": "先进堆肥",
      "advancements.farmersdelight.place_organic_compost.description": "放置一些有机堆肥。要是有阳光、水和蘑菇就更好了!",
      "advancements.farmersdelight.get_rich_soil.title": "植物肥料",
      "advancements.farmersdelight.get_rich_soil.description": "有机肥料会慢慢分解最终变成沃土，为你的农场增光添彩！",
      "advancements.farmersdelight.get_ham.title": "狂野屠夫",
      "advancements.farmersdelight.get_ham.description": "刀可以更精准仔细地切开动物的肉。刀劈有时候能产出更大的肉块！",
      "advancements.farmersdelight.use_cutting_board.title": "当心伤手……",
      "advancements.farmersdelight.use_cutting_board.description": "工具到手，在砧板上切开一些东西",
      "advancements.farmersdelight.obtain_netherite_knife.title": "没这金刚钻的话……",
      "advancements.farmersdelight.obtain_netherite_knife.description": "要么在你的刀上花一整块下界合金锭，要么从厨房里出去",
      "advancements.farmersdelight.get_fd_seed.title": "野生作物",
      "advancements.farmersdelight.get_fd_seed.description": "有四种新的作物在野外等待着你，你需要跨越山和大海……或者只需要翻翻箱子。",
      "advancements.farmersdelight.plant_rice.title": "倾斜稻根",
      "advancements.farmersdelight.plant_rice.description": "在浅水洼里种一些稻米",
      "advancements.farmersdelight.harvest_ropelogged_tomato.title": "采田艹加",
      "advancements.farmersdelight.harvest_ropelogged_tomato.description": "在番茄顶上挂些绳子，让它长得更高",
      "advancements.farmersdelight.hit_raider_with_rotten_tomato.title": "嘘！去！",
      "advancements.farmersdelight.hit_raider_with_rotten_tomato.description": "向那些讨厌的入侵者扔一个烂番茄！",
      "advancements.farmersdelight.get_mushroom_colony.title": "我们当中出了内“菌”",
      "advancements.farmersdelight.get_mushroom_colony.description": "在暗处的沃土上种点蘑菇，看着菌落长出来，然后剪掉它！",
      "advancements.farmersdelight.plant_all_crops.title": "轮作",
      "advancements.farmersdelight.plant_all_crops.description": "种植所有你找得到的水果、蔬菜，或是菌类！",
      "advancements.farmersdelight.place_campfire.title": "点燃营火",
      "advancements.farmersdelight.place_campfire.description": "放置一个营火，让夜晚不再寒冷",
      "advancements.farmersdelight.use_skillet.title": "移动厨房",
      "advancements.farmersdelight.use_skillet.description": "煎锅能让你轻松烹饪食物。在另一只手上把食物拿好，然后离热源近些！",
      "advancements.farmersdelight.place_skillet.title": "滋滋火热！",
      "advancements.farmersdelight.place_skillet.description": "潜行时把煎锅作为方块放置下来",
      "advancements.farmersdelight.place_cooking_pot.title": "晚餐上桌喽！",
      "advancements.farmersdelight.place_cooking_pot.description": "放置一个厨锅，准备做饭！",
      "advancements.farmersdelight.eat_nourishing_food.title": "服务周到",
      "advancements.farmersdelight.eat_nourishing_food.description": "一盘丰盛的食物会让你获得滋养很长一段时间！",
      "advancements.farmersdelight.place_feast.title": "一顿盛宴",
      "advancements.farmersdelight.place_feast.description": "有些食物最好拿到台面上分享给朋友。准备好盛饭的餐具吧！",
      "advancements.farmersdelight.master_chef.title": "厨神当道",
      "advancements.farmersdelight.master_chef.description": "把全部菜肴都品尝一遍！",
      "subtitles.farmersdelight.block.cooking_pot.boil": "厨锅：蒸煮",
      "subtitles.farmersdelight.block.cutting_board.knife_cut": "刀：切下",
      "subtitles.farmersdelight.block.stove.crackle": "炉灶：噼啪",
      "subtitles.farmersdelight.block.skillet.sizzle": "煎锅：滋滋",
      "subtitles.farmersdelight.block.skillet.add_food": "煎锅：嘶嘶",
      "subtitles.farmersdelight.block.cabinet.open": "橱柜：打开",
      "subtitles.farmersdelight.block.cabinet.close": "橱柜：关闭",
      "subtitles.farmersdelight.block.tomatoes.pick_tomatoes": "番茄：噗",
      "subtitles.farmersdelight.entity.rotten_tomato.throw": "烂番茄：丢出",
      "subtitles.farmersdelight.entity.rotten_tomato.hit": "烂番茄：脓汁四溅",
      "block.farmersdelight.feast.use_container": "你需要一个%s以食用它。",
      "block.farmersdelight.rice.invalid_placement": "这株作物很难在水洼外生存。",
      "block.farmersdelight.cutting_board.invalid_item": "这东西可不能切啊……",
      "block.farmersdelight.cutting_board.invalid_tool": "或许得换个工具……",
      "block.farmersdelight.skillet.invalid_item": "这东西可放不进去……",
      "block.farmersdelight.skillet.underwater": "被水泡着可没法煎啊……",
      "item.farmersdelight.skillet.how_to_cook": "用另一只手把食物拿好！",
      "item.farmersdelight.skillet.underwater": "在水里可没法煎啊……",
      "death.attack.farmersdelight.stove": "%1$s被烤的酥脆",
      "death.attack.farmersdelight.stove.player": "%1$s被大厨%2$s扔到了烤架上",
      "jei.farmersdelight.cooking": "烹饪",
      "jei.farmersdelight.cutting": "砧板",
      "jei.farmersdelight.chance": "%1$s%%的概率",
      "jei.farmersdelight.decomposition": "分解",
      "jei.farmersdelight.decomposition.light": "有日光时加快",
      "jei.farmersdelight.decomposition.fluid": "周围有水时加快",
      "jei.farmersdelight.decomposition.accelerators": "周围有以下催化物时加快",
      "jei.farmersdelight.info.dough": "小麦与水桶可以合成面团。别担心，水不会因此被浪费掉！",
      "jei.farmersdelight.info.straw": "用于合成的干燥植物纤维。使用小刀破坏草类植物或作物方块可以获得。",
      "jei.farmersdelight.info.knife": "小刀是轻量的近战武器。你可以用它们从草类植物中获得草秆，也可以击杀动物以获得副掉落物。",
      "jei.farmersdelight.info.ham": "从猪或疣猪兽腿上切下的一大块肉。剑太大了，想切下它你得找一把更轻的工具……",
      "jei.farmersdelight.info.wild_cabbages": "野生卷心菜通常可以在海滩沿岸找到。",
      "jei.farmersdelight.info.wild_beetroots": "海甜菜通常可以在海滩沿岸找到。",
      "jei.farmersdelight.info.wild_carrots": "野生胡萝卜通常可以在温带地区，如平原和森林中找到。",
      "jei.farmersdelight.info.wild_onions": "野生洋葱通常可以在温带地区，如平原和森林中找到。",
      "jei.farmersdelight.info.wild_potatoes": "野生马铃薯通常可以在寒冷地区，如山地和针叶林中找到。",
      "jei.farmersdelight.info.wild_tomatoes": "番茄灌木通常可以在干旱地区，如热带草原和沙漠中找到。",
      "jei.farmersdelight.info.wild_rice": "野生稻米通常可以在湿地的池塘中，如沼泽和丛林中找到。",
      "block.farmersdelight.bamboo_basket": "Bamboo Basket",
      "block.farmersdelight.rope_fence": "Rope Fence",
      "block.farmersdelight.rope_fence_gate": "Rope Fence Gate",
      "block.farmersdelight.canvas_wall_sign": "Canvas Wall Sign",
      "block.farmersdelight.white_canvas_wall_sign": "White Canvas Wall Sign",
      "block.farmersdelight.orange_canvas_wall_sign": "Orange Canvas Wall Sign",
      "block.farmersdelight.magenta_canvas_wall_sign": "Magenta Canvas Wall Sign",
      "block.farmersdelight.light_blue_canvas_wall_sign": "Light Blue Canvas Wall Sign",
      "block.farmersdelight.yellow_canvas_wall_sign": "Yellow Canvas Wall Sign",
      "block.farmersdelight.lime_canvas_wall_sign": "Lime Canvas Wall Sign",
      "block.farmersdelight.pink_canvas_wall_sign": "Pink Canvas Wall Sign",
      "block.farmersdelight.gray_canvas_wall_sign": "Gray Canvas Wall Sign",
      "block.farmersdelight.light_gray_canvas_wall_sign": "Light Gray Canvas Wall Sign",
      "block.farmersdelight.cyan_canvas_wall_sign": "Cyan Canvas Wall Sign",
      "block.farmersdelight.purple_canvas_wall_sign": "Purple Canvas Wall Sign",
      "block.farmersdelight.blue_canvas_wall_sign": "Blue Canvas Wall Sign",
      "block.farmersdelight.brown_canvas_wall_sign": "Brown Canvas Wall Sign",
      "block.farmersdelight.green_canvas_wall_sign": "Green Canvas Wall Sign",
      "block.farmersdelight.red_canvas_wall_sign": "Red Canvas Wall Sign",
      "block.farmersdelight.black_canvas_wall_sign": "Black Canvas Wall Sign",
      "block.farmersdelight.wall_hanging_canvas_sign": "Wall Hanging Canvas Sign",
      "block.farmersdelight.white_wall_hanging_canvas_sign": "White Wall Hanging Canvas Sign",
      "block.farmersdelight.orange_wall_hanging_canvas_sign": "Orange Wall Hanging Canvas Sign",
      "block.farmersdelight.magenta_wall_hanging_canvas_sign": "Magenta Wall Hanging Canvas Sign",
      "block.farmersdelight.light_blue_wall_hanging_canvas_sign": "Light Blue Wall Hanging Canvas Sign",
      "block.farmersdelight.yellow_wall_hanging_canvas_sign": "Yellow Wall Hanging Canvas Sign",
      "block.farmersdelight.lime_wall_hanging_canvas_sign": "Lime Wall Hanging Canvas Sign",
      "block.farmersdelight.pink_wall_hanging_canvas_sign": "Pink Wall Hanging Canvas Sign",
      "block.farmersdelight.gray_wall_hanging_canvas_sign": "Gray Wall Hanging Canvas Sign",
      "block.farmersdelight.light_gray_wall_hanging_canvas_sign": "Light Gray Wall Hanging Canvas Sign",
      "block.farmersdelight.cyan_wall_hanging_canvas_sign": "Cyan Wall Hanging Canvas Sign",
      "block.farmersdelight.purple_wall_hanging_canvas_sign": "Purple Wall Hanging Canvas Sign",
      "block.farmersdelight.blue_wall_hanging_canvas_sign": "Blue Wall Hanging Canvas Sign",
      "block.farmersdelight.brown_wall_hanging_canvas_sign": "Brown Wall Hanging Canvas Sign",
      "block.farmersdelight.green_wall_hanging_canvas_sign": "Green Wall Hanging Canvas Sign",
      "block.farmersdelight.red_wall_hanging_canvas_sign": "Red Wall Hanging Canvas Sign",
      "block.farmersdelight.black_wall_hanging_canvas_sign": "Black Wall Hanging Canvas Sign",
      "block.farmersdelight.tomatoes_on_rope": "Tomato Vine on Rope",
      "block.farmersdelight.pumpkin_pie": "Pumpkin Pie",
      "item.farmersdelight.pumpkin_pie_slice": "Slice of Pumpkin Pie",
      "item.farmersdelight.onion_soup": "Onion Soup",
      "block.farmersdelight.gleaming_salad_block": "Gleaming Salad",
      "item.farmersdelight.gleaming_salad": "Bowl of Gleaming Salad",
      "tooltip.farmersdelight.placeable": "Placeable",
      "tooltip.farmersdelight.placeable_sneaking": "Placeable when sneaking",
      "tooltip.farmersdelight.debug_item": "Debug item — Not meant for gameplay",
      "subtitles.farmersdelight.block.cutting_board.place_item": "Item placed on board",
      "subtitles.farmersdelight.block.cutting_board.remove_item": "Item removed from board",
      "subtitles.farmersdelight.block.cutting_board.carve_tool": "Tool carved on board",
      "subtitles.farmersdelight.block.rope_fence_gate.open": "Rope Fence Gate unties",
      "subtitles.farmersdelight.block.rope_fence_gate.close": "Rope Fence Gate ties",
      "subtitles.farmersdelight.block.food.take_portion": "Portion served",
      "subtitles.farmersdelight.block.food.slice": "Food sliced",
      "block.farmersdelight.cutting_board.remaining_items": "%s remaining...",
      "emi.category.farmersdelight.cooking": "Cooking",
      "emi.category.farmersdelight.cutting": "Cutting Board",
      "emi.category.farmersdelight.decomposition": "Decomposition",
      "tag.item.c.crops.cabbage": "Cabbage Crops",
      "tag.item.c.crops.grain": "Grain Crops",
      "tag.item.c.crops.onion": "Onion Crops",
      "tag.item.c.crops.rice": "Rice Crops",
      "tag.item.c.crops.tomato": "Tomato Crops",
      "tag.item.c.foods.cabbage": "Cabbages",
      "tag.item.c.foods.cooked_bacon": "Cooked Bacon",
      "tag.item.c.foods.cooked_beef": "Cooked Beef",
      "tag.item.c.foods.cooked_chicken": "Cooked Chicken",
      "tag.item.c.foods.cooked_cod": "Cooked Cod",
      "tag.item.c.foods.cooked_egg": "Cooked Eggs",
      "tag.item.c.foods.cooked_mutton": "Cooked Mutton",
      "tag.item.c.foods.cooked_pork": "Cooked Pork",
      "tag.item.c.foods.cooked_salmon": "Cooked Salmon",
      "tag.item.c.foods.cookie": "Cookies",
      "tag.item.c.foods.dough": "Doughs",
      "tag.item.c.foods.leafy_green": "Leafy Greens",
      "tag.item.c.foods.onion": "Onions",
      "tag.item.c.foods.pasta": "Pastas",
      "tag.item.c.foods.raw_bacon": "Raw Bacon",
      "tag.item.c.foods.raw_beef": "Raw Beef",
      "tag.item.c.foods.raw_chicken": "Raw Chicken",
      "tag.item.c.foods.raw_cod": "Raw Cod",
      "tag.item.c.foods.raw_eggs": "Raw Eggs",
      "tag.item.c.foods.raw_mutton": "Raw Mutton",
      "tag.item.c.foods.raw_pork": "Raw Pork",
      "tag.item.c.foods.raw_salmon": "Raw Salmon",
      "tag.item.c.foods.safe_raw_fish": "Safe Raw Fishes",
      "tag.item.c.foods.tomato": "Tomatoes",
      "tag.item.c.tools.knife": "Knives",
      "tag.item.c.seeds": "Seeds",
      "tag.item.c.storage_blocks.carrot": "Carrot Storage Blocks",
      "tag.item.c.storage_blocks.potato": "Potato Storage Blocks",
      "tag.item.c.storage_blocks.beetroot": "Beetroot Storage Blocks",
      "tag.item.c.storage_blocks.cabbage": "Cabbage Storage Blocks",
      "tag.item.c.storage_blocks.tomato": "Tomato Storage Blocks",
      "tag.item.c.storage_blocks.onion": "Onion Storage Blocks",
      "tag.item.c.storage_blocks.rice": "Rice Storage Blocks",
      "tag.item.c.storage_blocks.rice_panicle": "Rice Panicle Storage Blocks",
      "tag.item.c.storage_blocks.straw": "Straw Storage Blocks",
      "tag.block.farmersdelight.cabinets": "Cabinets",
      "tag.block.farmersdelight.cabinets.wooden": "Wooden Cabinets",
      "tag.block.farmersdelight.campfire_signal_smoke": "Campfire Signal Smoke",
      "tag.block.farmersdelight.compost_activators": "Compost Activators",
      "tag.block.farmersdelight.drops_cake_slice": "Drops Cake Slices",
      "tag.block.farmersdelight.feasts": "Feasts",
      "tag.block.farmersdelight.heat_conductors": "Heat Conductors",
      "tag.block.farmersdelight.heat_sources": "Heat Sources",
      "tag.block.farmersdelight.mineable.knife": "Mineable with Knife",
      "tag.block.farmersdelight.mushroom_colonies": "Mushroom Colonies",
      "tag.block.farmersdelight.mushroom_colony_growable_on": "Mushroom Colonies Can Grow On",
      "tag.block.farmersdelight.pies": "Pies",
      "tag.block.farmersdelight.planted_from_below": "Planted from Below",
      "tag.block.farmersdelight.ropes": "Ropes",
      "tag.block.farmersdelight.straw_blocks": "Straw Blocks",
      "tag.block.farmersdelight.terrain": "Terrain",
      "tag.block.farmersdelight.tray_heat_sources": "Heat Sources with a Tray",
      "tag.block.farmersdelight.unaffected_by_rich_soil": "Unaffected by Rich Soil",
      "tag.block.farmersdelight.wild_crops": "Wild Crops",
      "tag.item.farmersdelight.cabinets": "Cabinets",
      "tag.item.farmersdelight.cabinets.wooden": "Wooden Cabinets",
      "tag.item.farmersdelight.canvas_signs": "Canvas Signs",
      "tag.item.farmersdelight.drinks": "Drinks",
      "tag.item.farmersdelight.feasts": "Feasts",
      "tag.item.farmersdelight.flat_on_cutting_board": "Flat on Cutting Board",
      "tag.item.farmersdelight.hanging_canvas_signs": "Hanging Canvas Signs",
      "tag.item.farmersdelight.enchantable.knife": "Knife Enchantable",
      "tag.item.farmersdelight.meals": "Meals",
      "tag.item.farmersdelight.mushroom_colonies": "Mushroom Colonies",
      "tag.item.farmersdelight.pies": "Pies",
      "tag.item.farmersdelight.serving_containers": "Serving Containers",
      "tag.item.farmersdelight.snacks": "Snacks",
      "tag.item.farmersdelight.straw_harvesters": "Straw Harvesters",
      "tag.item.farmersdelight.sweets": "Sweets",
      "tag.item.farmersdelight.tools.knives": "Knives",
      "tag.item.farmersdelight.wild_crops": "Wild Crops",
      "farmersdelight.configuration.title": "Farmer's Delight — Settings",
      "farmersdelight.configuration.section.farmersdelight.client.toml": "Client settings",
      "farmersdelight.configuration.section.farmersdelight.client.toml.title": "Client settings",
      "farmersdelight.configuration.section.farmersdelight.common.toml": "Common settings",
      "farmersdelight.configuration.section.farmersdelight.common.toml.title": "Common settings",
      "farmersdelight.configuration.settings": "Game Settings",
      "farmersdelight.configuration.farming": "Farming",
      "farmersdelight.configuration.crafting": "Crafting",
      "farmersdelight.configuration.overrides": "Vanilla Overrides",
      "farmersdelight.configuration.stack_size": "Stack Size Overrides",
      "farmersdelight.configuration.world": "World Generation",
      "farmersdelight.configuration.debug": "Debug Settings",
      "farmersdelight.configuration.debug.tooltip": "§lWarning:§r This section is not meant for standard gameplay.",
      "farmersdelight.configuration.enableFarmerFDTrades": "Special Farmer Trades",
      "farmersdelight.configuration.enableFarmerFDTrades.tooltip": "If enabled, Novice and Apprentice Farmer villagers will have a chance to buy crops from this mod.",
      "farmersdelight.configuration.enableWanderingTraderFDTrades": "Special Wandering Trader Trades",
      "farmersdelight.configuration.enableWanderingTraderFDTrades.tooltip": "If enabled, the Wandering Trader will have a chance to sell seeds and plantables from this mod.",
      "farmersdelight.configuration.enableRopeReeling": "Rope Reeling",
      "farmersdelight.configuration.enableRopeReeling.tooltip": "If enabled, players will be able to reel back rope, bottom to top, when sneak-using with an empty hand on them.",
      "farmersdelight.configuration.canvasSignDarkBackgroundList": "Dark Background Canvas Signs",
      "farmersdelight.configuration.canvasSignDarkBackgroundList.tooltip": "A list of dye colors that, when used as the background color of a Canvas Sign, should default to white text when placed.\n\nDyes:\n[\"white\", \"orange\", \"magenta\", \"light_blue\", \"yellow\", \"lime\", \"pink\", \"gray\", \"light_gray\", \"cyan\", \"purple\", \"blue\", \"brown\", \"green\", \"red\", \"black\"]",
      "farmersdelight.configuration.richSoilBoostChance": "Rich Soil Boost Chance",
      "farmersdelight.configuration.richSoilBoostChance.tooltip": "The chance (in decimal percentage) of Rich Soil providing a bone meal boost to a crop planted on it. Set to 0.0 to disable.",
      "farmersdelight.configuration.enableTomatoVineClimbingTaggedRopes": "Tomato Vine Climbs Tagged Ropes",
      "farmersdelight.configuration.enableTomatoVineClimbingTaggedRopes.tooltip": "If enabled, tomato crops will be able to climb any rope tagged as farmersdelight:ropes. If disabled, this will be restricted to this mod's rope only.\n\n§lBeware: this will convert these blocks into the block specified in defaultTomatoVineRope.§r",
      "farmersdelight.configuration.defaultTomatoVineRope": "Default Tomato Vine Rope",
      "farmersdelight.configuration.defaultTomatoVineRope.tooltip": "Which rope should Tomato Vines leave behind when broken?",
      "farmersdelight.configuration.enableCookingPotRecipeBook": "Cooking Pot Recipe Book",
      "farmersdelight.configuration.enableCookingPotRecipeBook.tooltip": "If enabled, the Cooking Pot will provide a Recipe Book on its interface, similar to the one on Crafting Tables and Furnaces.",
      "farmersdelight.configuration.enableVanillaCropCrates": "Vanilla Crop Crates",
      "farmersdelight.configuration.enableVanillaCropCrates.tooltip": "If enabled, storage crates (3x3) for vanilla crops (similar to Quark and Thermal Cultivation) will become craftable.",
      "farmersdelight.configuration.cuttingBoardFortuneBonus": "Cutting Board Fortune Bonus",
      "farmersdelight.configuration.cuttingBoardFortuneBonus.tooltip": "How much (in decimal percentage) should each level of Fortune increase the odds of obtaining rare results on the Cutting Board? Set to 0.0 to disable.",
      "farmersdelight.configuration.enableVanillaSoupExtraEffects": "Vanilla Soup Extra Effects",
      "farmersdelight.configuration.enableVanillaSoupExtraEffects.tooltip": "If enabled, soups and stews from Minecraft will grant Nourishment when eaten, similar to meals from this mod.",
      "farmersdelight.configuration.enableRabbitStewBuff": "Rabbit Stew Buff",
      "farmersdelight.configuration.enableRabbitStewBuff.tooltip": "If enabled, Rabbit Stew will be given improved food stats, to match its crafting cost.",
      "farmersdelight.configuration.enablePumpkinPieSneakToPlace": "Sneak to Place Pumpkin Pie",
      "farmersdelight.configuration.enablePumpkinPieSneakToPlace.tooltip": "If enabled, Pumpkin Pie will require the user to sneak to place it down as a block.",
      "farmersdelight.configuration.enableCuttingBoardDispenserBehavior": "Cutting Board Dispenser Behavior",
      "farmersdelight.configuration.enableCuttingBoardDispenserBehavior.tooltip": "If enabled, the Dispenser will be able to operate a Cutting Board in front of itself, using stored items as cutting tools.",
      "farmersdelight.configuration.enableStackableSoupItems": "Stackable Soup Items",
      "farmersdelight.configuration.enableStackableSoupItems.tooltip": "If enabled, any BowlFoodItem in the following list will become stackable to 16, much like Farmer's Delight's meals.",
      "farmersdelight.configuration.soupItemList": "Soup Items",
      "farmersdelight.configuration.soupItemList.tooltip": "List of targeted food items. They must extend the BowlFoodItem class in code to be affected. Defaults to vanilla soups and stews.",
      "farmersdelight.configuration.generateFDChestLoot": "Generate Mod Chest Loot",
      "farmersdelight.configuration.generateFDChestLoot.tooltip": "If enabled, new loot pools will be added to chest loot across the game, containing items from this mod (ropes, crops, tools etc).",
      "farmersdelight.configuration.generateVillageCompostHeaps": "Generate Village Compost Heaps",
      "farmersdelight.configuration.generateVillageCompostHeaps.tooltip": "If enabled, Compost Heaps (structures containing Organic Compost piles) will sometimes generate across Villages.",
      "farmersdelight.configuration.generateFDCropsOnVillageFarms": "Generate Mod Crops on Village Farms",
      "farmersdelight.configuration.generateFDCropsOnVillageFarms.tooltip": "If enabled, crops from Farmer's Delight will sometimes replace standard crops in village farm plots.",
      "farmersdelight.configuration.enableTomatoRopePermanence": "Tomato Rope Permanence",
      "farmersdelight.configuration.enableTomatoRopePermanence.tooltip": "Tomato crops hanging on rope will force-place a Rope block when broken. Due to technical limitations, this affects things such as commands, making them fail to 'setblock' this block on the first attempt.\n\nDisable this if this block is preventing you from editing a region in creative or with commands. For normal gameplay, I recommend leaving this enabled.",
      "farmersdelight.configuration.enableNourishmentHungerOverlay": "Nourishment Hunger Overlay",
      "farmersdelight.configuration.enableNourishmentHungerOverlay.tooltip": "If enabled, a gilded overlay will be shown over the food meter when the player has the Nourishment effect.",
      "farmersdelight.configuration.enableComfortHealthOverlay": "Comfort Health Overlay",
      "farmersdelight.configuration.enableComfortHealthOverlay.tooltip": "If enabled, a scrolling overlay will be shown over the health meter when the player has the Comfort effect.",
      "farmersdelight.configuration.enableFoodEffectTooltip": "Food Effect Tooltip",
      "farmersdelight.configuration.enableFoodEffectTooltip.tooltip": "If enabled, food items will display tooltips showing which effects they grant when eaten, if any. Applies to foods from both Minecraft and this mod."
    },
    "adv": {
      "main/craft_knife": {
        "title": "刀耕火种",
        "desc": "合成一把刀来从植物和动物上获取更多资源！",
        "icon": "flint_knife",
        "parent": "main/root",
        "frame": "task",
        "crit": {
          "diamond_knife": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:diamond_knife"
              }]
            }
          },
          "flint_knife": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:flint_knife"
              }]
            }
          },
          "golden_knife": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:golden_knife"
              }]
            }
          },
          "iron_knife": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:iron_knife"
              }]
            }
          },
          "netherite_knife": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:netherite_knife"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["flint_knife", "iron_knife", "diamond_knife", "golden_knife", "netherite_knife"]]
      },
      "main/eat_nourishing_food": {
        "title": "服务周到",
        "desc": "一盘丰盛的食物会让你获得滋养很长一段时间！",
        "icon": "steak_and_potatoes",
        "parent": "main/place_cooking_pot",
        "frame": "task",
        "crit": {
          "nourishment": {
            "trigger": "effects_changed",
            "conditions": {
              "effects": {
                "farmersdelight:nourishment": {}
              }
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["nourishment"]]
      },
      "main/get_fd_seed": {
        "title": "野生作物",
        "desc": "有四种新的作物在野外等待着你，你需要跨越山和大海……或者只需要翻翻箱子。",
        "icon": "wild_onions",
        "parent": "main/root",
        "frame": "task",
        "crit": {
          "cabbage_seeds": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:cabbage_seeds"
              }]
            }
          },
          "onion": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:onion"
              }]
            }
          },
          "rice": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:rice"
              }]
            }
          },
          "tomato_seeds": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:tomato_seeds"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["cabbage_seeds", "tomato_seeds", "onion", "rice"]]
      },
      "main/get_ham": {
        "title": "狂野屠夫",
        "desc": "刀可以更精准仔细地切开动物的肉。刀劈有时候能产出更大的肉块！",
        "icon": "ham",
        "parent": "main/craft_knife",
        "frame": "task",
        "crit": {
          "ham": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:ham"
              }]
            }
          },
          "smoked_ham": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:smoked_ham"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["ham", "smoked_ham"]]
      },
      "main/get_mushroom_colony": {
        "title": "我们当中出了内“菌”",
        "desc": "在暗处的沃土上种点蘑菇，看着菌落长出来，然后剪掉它！",
        "icon": "red_mushroom_colony",
        "parent": "main/get_fd_seed",
        "frame": "task",
        "crit": {
          "brown_mushroom_colony": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:brown_mushroom_colony"
              }]
            }
          },
          "red_mushroom_colony": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:red_mushroom_colony"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["brown_mushroom_colony", "red_mushroom_colony"]]
      },
      "main/get_rich_soil": {
        "title": "植物肥料",
        "desc": "有机肥料会慢慢分解最终变成沃土，为你的农场增光添彩！",
        "icon": "rich_soil",
        "parent": "main/place_organic_compost",
        "frame": "goal",
        "crit": {
          "get_rich_soil": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:rich_soil"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["get_rich_soil"]]
      },
      "main/harvest_ropelogged_tomato": {
        "title": "采田艹加",
        "desc": "在番茄顶上挂些绳子，让它长得更高",
        "icon": "tomato",
        "parent": "main/get_fd_seed",
        "frame": "task",
        "crit": {
          "harvest_ropelogged_tomato": {
            "trigger": "default_block_use",
            "conditions": {
              "location": [{
                "condition": "minecraft:location_check",
                "predicate": {
                  "block": {
                    "blocks": "farmersdelight:tomatoes_on_rope",
                    "state": {
                      "age": "0"
                    }
                  }
                }
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["harvest_ropelogged_tomato"]]
      },
      "main/harvest_straw": {
        "title": "救命稻草",
        "desc": "使用刀割下长草的植物以获取一些草秆",
        "icon": "straw",
        "parent": "main/craft_knife",
        "frame": "task",
        "crit": {
          "harvest_straw": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:straw"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["harvest_straw"]]
      },
      "main/hit_raider_with_rotten_tomato": {
        "title": "嘘！去！",
        "desc": "向那些讨厌的入侵者扔一个烂番茄！",
        "icon": "rotten_tomato",
        "parent": "main/harvest_ropelogged_tomato",
        "frame": "task",
        "crit": {
          "hit_raider_with_rotten_tomato": {
            "trigger": "player_hurt_entity",
            "conditions": {
              "damage": {
                "type": {
                  "direct_entity": {
                    "type": "farmersdelight:rotten_tomato"
                  },
                  "tags": [{
                    "expected": true,
                    "id": "minecraft:is_projectile"
                  }]
                }
              },
              "entity": [{
                "condition": "minecraft:entity_properties",
                "entity": "this",
                "predicate": {
                  "type": "#minecraft:raiders"
                }
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["hit_raider_with_rotten_tomato"]]
      },
      "main/master_chef": {
        "title": "厨神当道",
        "desc": "把全部菜肴都品尝一遍！",
        "icon": "honey_glazed_ham",
        "parent": "main/place_feast",
        "frame": "challenge",
        "crit": {
          "bacon_and_eggs": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:bacon_and_eggs"
              }
            }
          },
          "baked_cod_stew": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:baked_cod_stew"
              }
            }
          },
          "beef_stew": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:beef_stew"
              }
            }
          },
          "bone_broth": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:bone_broth"
              }
            }
          },
          "chicken_soup": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:chicken_soup"
              }
            }
          },
          "cooked_rice": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:cooked_rice"
              }
            }
          },
          "fish_stew": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:fish_stew"
              }
            }
          },
          "fried_rice": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:fried_rice"
              }
            }
          },
          "gleaming_salad": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:gleaming_salad"
              }
            }
          },
          "grilled_salmon": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:grilled_salmon"
              }
            }
          },
          "honey_glazed_ham": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:honey_glazed_ham"
              }
            }
          },
          "mixed_salad": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:mixed_salad"
              }
            }
          },
          "mushroom_rice": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:mushroom_rice"
              }
            }
          },
          "noodle_soup": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:noodle_soup"
              }
            }
          },
          "onion_soup": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:onion_soup"
              }
            }
          },
          "pasta_with_meatballs": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:pasta_with_meatballs"
              }
            }
          },
          "pasta_with_mutton_chop": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:pasta_with_mutton_chop"
              }
            }
          },
          "pumpkin_soup": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:pumpkin_soup"
              }
            }
          },
          "ratatouille": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:ratatouille"
              }
            }
          },
          "roast_chicken": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:roast_chicken"
              }
            }
          },
          "roasted_mutton_chops": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:roasted_mutton_chops"
              }
            }
          },
          "shepherds_pie": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:shepherds_pie"
              }
            }
          },
          "squid_ink_pasta": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:squid_ink_pasta"
              }
            }
          },
          "steak_and_potatoes": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:steak_and_potatoes"
              }
            }
          },
          "stuffed_pumpkin": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:stuffed_pumpkin"
              }
            }
          },
          "vegetable_noodles": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:vegetable_noodles"
              }
            }
          },
          "vegetable_soup": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:vegetable_soup"
              }
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["mixed_salad"], ["cooked_rice"], ["bone_broth"], ["beef_stew"], ["vegetable_soup"], ["fish_stew"], ["chicken_soup"], ["fried_rice"], ["pumpkin_soup"], ["baked_cod_stew"], ["noodle_soup"], ["onion_soup"], ["bacon_and_eggs"], ["ratatouille"], ["steak_and_potatoes"], ["pasta_with_meatballs"], ["pasta_with_mutton_chop"], ["mushroom_rice"], ["roasted_mutton_chops"], ["vegetable_noodles"], ["squid_ink_pasta"], ["grilled_salmon"], ["roast_chicken"], ["stuffed_pumpkin"], ["honey_glazed_ham"], ["shepherds_pie"], ["gleaming_salad"]]
      },
      "main/obtain_netherite_knife": {
        "title": "没这金刚钻的话……",
        "desc": "要么在你的刀上花一整块下界合金锭，要么从厨房里出去",
        "icon": "netherite_knife",
        "parent": "main/use_cutting_board",
        "frame": "challenge",
        "crit": {
          "obtain_netherite_knife": {
            "trigger": "inventory_changed",
            "conditions": {
              "items": [{
                "items": "farmersdelight:netherite_knife"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["obtain_netherite_knife"]]
      },
      "main/place_campfire": {
        "title": "点燃营火",
        "desc": "放置一个营火，让夜晚不再寒冷",
        "icon": "campfire",
        "parent": "main/root",
        "frame": "task",
        "crit": {
          "campfire": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "campfire",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "soul_campfire": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "soul_campfire",
                "condition": "minecraft:block_state_property"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["campfire", "soul_campfire"]]
      },
      "main/place_cooking_pot": {
        "title": "晚餐上桌喽！",
        "desc": "放置一个厨锅，准备做饭！",
        "icon": "cooking_pot",
        "parent": "main/place_campfire",
        "frame": "goal",
        "crit": {
          "cooking_pot": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "cooking_pot",
                "condition": "minecraft:block_state_property"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["cooking_pot"]]
      },
      "main/place_feast": {
        "title": "一顿盛宴",
        "desc": "有些食物最好拿到台面上分享给朋友。准备好盛饭的餐具吧！",
        "icon": "roast_chicken_block",
        "parent": "main/eat_nourishing_food",
        "frame": "task",
        "crit": {
          "gleaming_salad": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "gleaming_salad_block",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "honey_glazed_ham": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "honey_glazed_ham_block",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "rice_roll_medley": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "rice_roll_medley_block",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "roast_chicken": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "roast_chicken_block",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "shepherds_pie": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "shepherds_pie_block",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "stuffed_pumpkin": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "stuffed_pumpkin_block",
                "condition": "minecraft:block_state_property"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["roast_chicken", "stuffed_pumpkin", "honey_glazed_ham", "shepherds_pie", "gleaming_salad", "rice_roll_medley"]]
      },
      "main/place_organic_compost": {
        "title": "先进堆肥",
        "desc": "放置一些有机堆肥。要是有阳光、水和蘑菇就更好了!",
        "icon": "organic_compost",
        "parent": "main/harvest_straw",
        "frame": "task",
        "crit": {
          "place_organic_compost": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "organic_compost",
                "condition": "minecraft:block_state_property"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["place_organic_compost"]]
      },
      "main/place_skillet": {
        "title": "滋滋火热！",
        "desc": "潜行时把煎锅作为方块放置下来",
        "icon": "skillet",
        "parent": "main/use_skillet",
        "frame": "task",
        "crit": {
          "skillet": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "skillet",
                "condition": "minecraft:block_state_property"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["skillet"]]
      },
      "main/plant_all_crops": {
        "title": "轮作",
        "desc": "种植所有你找得到的水果、蔬菜，或是菌类！",
        "icon": "cabbage",
        "parent": "main/plant_rice",
        "frame": "challenge",
        "crit": {
          "beetroot": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "beetroots",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "brown_mushroom": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "brown_mushroom",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "cabbage": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "cabbages",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "carrot": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "carrots",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "chorus_flower": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "chorus_flower",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "cocoa": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "cocoa",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "glow_berries": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "cave_vines",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "kelp": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "kelp",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "melon": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "melon_stem",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "nether_wart": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "nether_wart",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "onion": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "onions",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "potato": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "potatoes",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "pumpkin": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "pumpkin_stem",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "red_mushroom": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "red_mushroom",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "rice": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "rice",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "sugar_cane": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "sugar_cane",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "sweet_berries": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "sweet_berry_bush",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "tomato": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "budding_tomatoes",
                "condition": "minecraft:block_state_property"
              }]
            }
          },
          "wheat": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "wheat",
                "condition": "minecraft:block_state_property"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["wheat"], ["beetroot"], ["carrot"], ["potato"], ["cabbage"], ["tomato"], ["onion"], ["rice"], ["melon"], ["pumpkin"], ["sweet_berries"], ["sugar_cane"], ["kelp"], ["cocoa"], ["nether_wart"], ["chorus_flower"], ["brown_mushroom"], ["red_mushroom"], ["glow_berries"]]
      },
      "main/plant_rice": {
        "title": "倾斜稻根",
        "desc": "在浅水洼里种一些稻米",
        "icon": "rice",
        "parent": "main/get_fd_seed",
        "frame": "task",
        "crit": {
          "plant_rice": {
            "trigger": "placed_block",
            "conditions": {
              "location": [{
                "block": "rice",
                "condition": "minecraft:block_state_property"
              }]
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["plant_rice"]]
      },
      "main/root": {
        "title": "农夫乐事",
        "desc": "美味的世界在等着你！",
        "icon": "cooking_pot",
        "parent": null,
        "frame": "task",
        "crit": {
          "seeds": {
            "trigger": "inventory_changed",
            "conditions": {}
          }
        },
        "hidden": false,
        "bg": "minecraft:textures/block/bricks.png",
        "req": [["seeds"]]
      },
      "main/use_cutting_board": {
        "title": "当心伤手……",
        "desc": "工具到手，在砧板上切开一些东西",
        "icon": "cutting_board",
        "parent": "main/craft_knife",
        "frame": "task",
        "crit": {
          "cutting_board": {
            "trigger": "use_cutting_board",
            "conditions": {}
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["cutting_board"]]
      },
      "main/use_skillet": {
        "title": "移动厨房",
        "desc": "煎锅能让你轻松烹饪食物。在另一只手上把食物拿好，然后离热源近些！",
        "icon": "skillet",
        "parent": "main/place_campfire",
        "frame": "task",
        "crit": {
          "skillet": {
            "trigger": "consume_item",
            "conditions": {
              "item": {
                "items": "farmersdelight:skillet"
              }
            }
          }
        },
        "hidden": false,
        "bg": null,
        "req": [["skillet"]]
      }
    },
    "sounds": {
      "block.cabinet.close": {
        "s": [{
          "event": "block.barrel.close"
        }],
        "sub": "橱柜：关闭"
      },
      "block.cabinet.open": {
        "s": [{
          "event": "block.barrel.open"
        }],
        "sub": "橱柜：打开"
      },
      "block.cooking_pot.boil": {
        "s": [{
          "name": "../../mods/farmersdelight/sounds/block_cooking_pot_boil_water1",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }, {
          "name": "../../mods/farmersdelight/sounds/block_cooking_pot_boil_water2",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }],
        "sub": "厨锅：蒸煮"
      },
      "block.cooking_pot.boil_soup": {
        "s": [{
          "name": "../../mods/farmersdelight/sounds/block_cooking_pot_boil_soup1",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }, {
          "name": "../../mods/farmersdelight/sounds/block_cooking_pot_boil_soup2",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }, {
          "name": "../../mods/farmersdelight/sounds/block_cooking_pot_boil_soup3",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }],
        "sub": "厨锅：蒸煮"
      },
      "block.cutting_board.carve_tool": {
        "s": [{
          "event": "block.wood.place"
        }],
        "sub": "Tool carved on board"
      },
      "block.cutting_board.knife_cut": {
        "s": [{
          "name": "../../mods/farmersdelight/sounds/block_cutting_board_knife1",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }, {
          "name": "../../mods/farmersdelight/sounds/block_cutting_board_knife2",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }],
        "sub": "刀：切下"
      },
      "block.cutting_board.place_item": {
        "s": [{
          "event": "block.wood.place"
        }],
        "sub": "Item placed on board"
      },
      "block.cutting_board.remove_item": {
        "s": [{
          "event": "block.wood.hit"
        }],
        "sub": "Item removed from board"
      },
      "block.food.slice": {
        "s": [{
          "event": "block.wool.break"
        }],
        "sub": "Food sliced"
      },
      "block.food.take_portion": {
        "s": [{
          "event": "item.armor.equip_generic"
        }],
        "sub": "Portion served"
      },
      "block.rope_fence_gate.close": {
        "s": [{
          "event": "entity.leash_knot.place"
        }],
        "sub": "Rope Fence Gate ties"
      },
      "block.rope_fence_gate.open": {
        "s": [{
          "event": "entity.leash_knot.break"
        }],
        "sub": "Rope Fence Gate unties"
      },
      "block.skillet.add_food": {
        "s": [{
          "name": "../../mods/farmersdelight/sounds/block_skillet_add_food1",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }, {
          "name": "../../mods/farmersdelight/sounds/block_skillet_add_food2",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }],
        "sub": "煎锅：嘶嘶"
      },
      "block.skillet.sizzle": {
        "s": [{
          "name": "../../mods/farmersdelight/sounds/block_skillet_sizzle1",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }, {
          "name": "../../mods/farmersdelight/sounds/block_skillet_sizzle2",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }, {
          "name": "../../mods/farmersdelight/sounds/block_skillet_sizzle3",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }],
        "sub": "煎锅：滋滋"
      },
      "block.stove.crackle": {
        "s": [{
          "event": "block.campfire.crackle"
        }],
        "sub": "炉灶：噼啪"
      },
      "block.tomatoes.pick_tomatoes": {
        "s": [{
          "event": "block.sweet_berry_bush.pick_berries"
        }],
        "sub": "番茄：噗"
      },
      "entity.rotten_tomato.hit": {
        "s": [{
          "event": "entity.slime.attack"
        }],
        "sub": "烂番茄：脓汁四溅"
      },
      "entity.rotten_tomato.throw": {
        "s": [{
          "event": "entity.snowball.throw"
        }],
        "sub": "烂番茄：丢出"
      },
      "item.skillet.attack.strong": {
        "s": [{
          "name": "../../mods/farmersdelight/sounds/block_skillet_attack_strong",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }],
        "sub": ""
      },
      "item.skillet.attack.weak": {
        "s": [{
          "name": "../../mods/farmersdelight/sounds/block_skillet_attack_weak",
          "volume": 1.0,
          "pitch": 1.0,
          "weight": 1
        }],
        "sub": ""
      }
    },
    "license": "MIT License\n\nCopyright (c) 2020 vectorwing\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE."
  };
})();
// ---- core.js ----
(function () {
  'use strict';

  // 农夫乐事 Farmer's Delight (vectorwing, MIT licence) - what its scripts share (self.FD): block states and tags, giving
  // and dropping, heat; then the plain parts of its play: its blocks' loot tables, knives (KnifeItem: the knife tag's
  // blocks mined fast, harvested), fuels, the special crafting (dough, food serving, what crafting leaves behind), its
  // loot in vanilla's chests and the global loot modifiers (scavenging with knives, straw, pastry slicing, onions from
  // zombies), the farmers' and wandering traders' trades, its sounds, its creative tab and its credits
  (function () {
    const F = self.FDEL;
    if (!F || typeof BLOCKS === 'undefined') return;
    const FD = self.FD = {
      F
    };
    const strip = s => String(s || '').replace(/^[a-z_]+:/, '');
    const L = FD.L = (k, d) => F.lang[k] !== undefined ? F.lang[k] : d !== undefined ? d : k;
    FD.strip = strip;
    // (what the mod's zh_cn leaves out - 192 of its 479 lines - came in English: the cutting board's "2 remaining...",
    // onion soup, gleaming salad, the pumpkin pie slice, rope fences, the wall signs ... here in Chinese, named as the
    // mod's own Chinese names its others; 11-13)
    {
      const nm = k => {
        const it = typeof ITEM_KEY !== 'undefined' && ITEM_KEY[k] !== undefined ? ITEMS[ITEM_KEY[k]] : null;
        return it ? it.cn : null;
      };
      const ZH = {
        onion_soup: '洋葱汤',
        gleaming_salad: '碗装金光沙拉',
        gleaming_salad_block: '金光沙拉',
        pumpkin_pie_slice: '南瓜派切片',
        fd_pumpkin_pie: '南瓜派',
        rope_fence: '绳栅栏',
        rope_fence_gate: '绳栅栏门',
        tomatoes_on_rope: '绳上的番茄藤蔓',
        bamboo_basket: '竹篮',
        canvas_wall_sign: '墙上的粗布告示牌',
        wall_hanging_canvas_sign: '墙上的悬挂式粗布告示牌'
      };
      for (const c of ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']) {
        const s = nm(c + '_canvas_sign'),
          h = nm(c + '_hanging_canvas_sign');
        if (s) ZH[c + '_canvas_wall_sign'] = '墙上的' + s;
        if (h) ZH[c + '_wall_hanging_canvas_sign'] = '墙上的' + h;
      }
      const english = s => !/[\u4e00-\u9fff]/.test(String(s || ''));
      for (const [k, cn] of Object.entries(ZH)) {
        if (typeof BID !== 'undefined' && BID[k] !== undefined && english(BLOCKS[BID[k]].cn)) BLOCKS[BID[k]].cn = cn;
        if (typeof ITEM_KEY !== 'undefined' && ITEM_KEY[k] !== undefined && english(ITEMS[ITEM_KEY[k]].cn)) ITEMS[ITEM_KEY[k]].cn = cn;
      }
      const LANG = {
        'block.farmersdelight.cutting_board.remaining_items': '还剩 %s 个',
        'tooltip.farmersdelight.placeable': '可以放置',
        'tooltip.farmersdelight.placeable_sneaking': '潜行时可以放置',
        'subtitles.farmersdelight.block.cutting_board.place_item': '物品放上砧板',
        'subtitles.farmersdelight.block.cutting_board.remove_item': '物品从砧板上拿下',
        'subtitles.farmersdelight.block.cutting_board.carve_tool': '工具插上砧板',
        'subtitles.farmersdelight.block.rope_fence_gate.open': '绳栅栏门解开',
        'subtitles.farmersdelight.block.rope_fence_gate.close': '绳栅栏门系上',
        'subtitles.farmersdelight.block.food.take_portion': '盛出一份',
        'subtitles.farmersdelight.block.food.slice': '食物被切开'
      };
      for (const [k, v] of Object.entries(LANG)) if (F.lang[k] === undefined || english(F.lang[k])) F.lang[k] = v;
    }
    // (a block's own item that is a weapon - the skillet: its wear, attack and speed, enchantability, repair, which the
    // game's ITEM_DATA loops give only the items that are not blocks)
    for (const [k, info] of Object.entries(F.items || {})) {
      const it = ITEM_KEY[k] !== undefined && ITEMS[ITEM_KEY[k]];
      if (!it || it.block === undefined) continue;
      if (info.dur && !it.durability) it.durability = info.dur;
      if (info.atk && !it.attack) {
        it.attack = info.atk;
        it.attackSpeed = info.aspd;
      }
      if (info.ench && !it.enchantability) it.enchantability = info.ench;
      if (info.rep && !it.repair) it.repair = info.rep;
    }

    // ---- block states ----
    FD.bkey = id => BLOCKS[id] ? BLOCKS[id].key : null;
    FD.ikey = st => st && ITEMS[st.id] ? ITEMS[st.id].key : null;
    FD.st = (g, x, y, z) => {
      const b = BLOCKS[g.world.getBlock(x, y, z)];
      return b && b.states && b.states[g.world.getMeta(x, y, z)] || {};
    };
    FD.at = (g, x, y, z) => FD.bkey(g.world.getBlock(x, y, z));
    // the meta of a block's state with these properties (others as in base)
    FD.meta = (id, props, base) => {
      const b = BLOCKS[id];
      if (!b || !b.states) return 0;
      const cur = {
        ...(base !== undefined && b.states[base] || b.states[0]),
        ...props
      };
      const i = b.states.findIndex(s => Object.keys(cur).every(k => String(s[k]) === String(cur[k])));
      if (i >= 0) return i;
      const j = b.states.findIndex(s => Object.keys(props).every(k => String(s[k]) === String(props[k])));
      return j < 0 ? 0 : j;
    };
    FD.place = (g, x, y, z, key, props) => {
      const id = BID[key];
      if (id === undefined) return false;
      g.world.setBlock(x, y, z, id, FD.meta(id, props || {}));
      return true;
    };
    FD.setProps = (g, x, y, z, props) => {
      const w = g.world,
        id = w.getBlock(x, y, z),
        b = BLOCKS[id];
      if (!b || !b.states) return;
      const m = FD.meta(id, props, w.getMeta(x, y, z));
      if (m !== w.getMeta(x, y, z)) w.setBlock(x, y, z, id, m);
    };
    // ---- tags: the mod's block tags (keys), vanilla's (Features), item tags (the recipes' tags) ----
    const bt = {};
    FD.btag = tag => {
      if (bt[tag]) return bt[tag];
      const s = new Set();
      if (F.btags[tag]) {
        for (const k of F.btags[tag]) if (BID[k] !== undefined) s.add(BID[k]);
      } else if (typeof Features !== 'undefined' && Features.tagSet) {
        for (const id of Features.tagSet(tag)) s.add(id);
      }
      return bt[tag] = s;
    };
    FD.inB = (tag, id) => FD.btag(tag).has(id);
    const it = {};
    FD.itag = tag => it[tag] || (it[tag] = new Set(itemIds('#' + tag)));
    FD.inI = (tag, st) => !!st && FD.itag(tag).has(st.id);
    FD.isKnife = st => FD.inI('farmersdelight:tools/knives', st);
    FD.lit = (g, x, y, z) => {
      const v = FD.st(g, x, y, z).lit;
      return v === undefined || v === 'true';
    };
    // a heat source below (lit, if it can be lit), or one under a heat conductor (HeatableBlockEntity)
    FD.heated = (g, x, y, z) => {
      const w = g.world,
        b1 = w.getBlock(x, y - 1, z);
      if (FD.inB('farmersdelight:heat_sources', b1)) return FD.lit(g, x, y - 1, z);
      if (FD.inB('farmersdelight:heat_conductors', b1)) {
        const b2 = w.getBlock(x, y - 2, z);
        if (FD.inB('farmersdelight:heat_sources', b2)) return FD.lit(g, x, y - 2, z);
      }
      return false;
    };

    // ---- items: the held one, giving, dropping ----
    FD.creative = g => g.mode === 'creative';
    FD.useUp = (g, n = 1) => {
      const p = g.player,
        h = p.inv.held;
      if (!h || FD.creative(g)) return;
      h.count -= n;
      if (h.count <= 0) p.inv.slots[p.inv.sel] = null;
    };
    FD.give = (g, st) => {
      if (!st) return;
      const s = {
        ...st
      };
      if (g.player.inv.add(s)) g.dropFromPlayer ? g.dropFromPlayer(s) : g.dropItem(g.player.pos[0], g.player.pos[1] + 1, g.player.pos[2], s);
    };
    FD.stack = (key, n = 1) => ITEM_KEY[key] !== undefined ? makeStack(key, n) : null;
    FD.drop = (g, x, y, z, st, vel) => {
      if (st) g.dropItem(x, y, z, st, vel);
    };
    // the way a facing turns (counter-clockwise, seen from above), as vanilla's Direction
    FD.DIR = {
      north: [0, -1],
      south: [0, 1],
      west: [-1, 0],
      east: [1, 0]
    };
    FD.CCW = {
      north: 'west',
      west: 'south',
      south: 'east',
      east: 'north'
    };
    FD.beAt = (g, x, y, z, kind) => {
      const k = x + ',' + y + ',' + z;
      let be = g.blockEntities.get(k);
      if (!be || be.type !== 'fd') {
        be = {
          type: 'fd',
          kind,
          pos: [x, y, z],
          slots: []
        };
        g.blockEntities.set(k, be);
      }
      if (!be.kind) be.kind = kind;
      return be;
    };
    FD.mark = (g, be) => {
      if (g.markBlockEntity) g.markBlockEntity(be);
    };
    FD.light = (g, x, y, z) => Math.max(g.world.skyAt(x, y, z) * (g.daylight ? g.daylight() : 1), g.world.blockLightAt(x, y, z));

    // ---- sounds ('farmersdelight:<event>' beside vanilla's, their subtitles; the vanilla events they name, theirs) ----
    function addSounds() {
      const E = window.SOUNDS && SOUNDS.events;
      if (!E || E['farmersdelight:block.stove.crackle']) return;
      for (const [k, v] of Object.entries(F.sounds || {})) {
        E['farmersdelight:' + k] = v.s.flatMap(x => x.event ? E[x.event] || [] : [x]);
        if (self.SUBTITLES && v.sub) SUBTITLES['farmersdelight:' + k] = v.sub;
      }
    }
    if (typeof Sound !== 'undefined') {
      const sev = Sound.ev;
      Sound.ev = function (event, ...a) {
        if (typeof event === 'string' && event.startsWith('farmersdelight:')) addSounds();
        return sev.call(this, event, ...a);
      };
    }
    FD.sound = (name, pos, vol = 1, pitch = 1) => typeof Sound !== 'undefined' ? Sound.ev('farmersdelight:' + name, pos, vol, pitch) : null;
    FD.vsound = (name, pos, vol = 1, pitch = 1) => typeof Sound !== 'undefined' ? Sound.ev(name, pos, vol, pitch) : null;

    // ---- particles: its own (client/particle: SteamParticle, StarParticle, SparkleParticle) and the vanilla ones the game
    // has no case for (bubble_pop, enchanted_hit, mycelium, an item's crumbs) - a plain one spawned, then given their looks
    // (tiles fd:particle/x, mc:particle/x from the build); fdDrag: their own friction in place of the game's 0.98 ----
    const TL = n => self.ASSETS && ASSETS.tiles[n] !== undefined ? ASSETS.tiles[n] : 0;
    FD.particle = (g, kind, x, y, z, vx = 0, vy = 0, vz = 0, extra) => {
      const P = g && g.particles;
      if (!P) return null;
      const r = Math.random;
      if (kind === 'item') {
        const it = ITEMS[extra];
        if (!it) return null;
        if (it.tex === undefined && it.block !== undefined && BLOCKS[it.block]) return P.spawn('block', x, y, z, vx, vy, vz, {
          id: it.block,
          meta: 0
        });
        return P.spawn('block', x, y, z, vx, vy, vz, {
          id: 1,
          layer: it.tex
        });
      }
      const p = P.spawn('heart', x, y, z, vx, vy, vz);
      if (!p || p === P.spare) return p;
      p.bright = false;
      p.grav = 0;
      p.col = [255, 255, 255];
      const q = 0.2 * (r() * 0.5 + 0.5); // (vanilla's quadSize 0.1 - 0.2, a half-width as the game's size)
      switch (kind) {
        // (steam: twice the size, 80 - 130 ticks, rising as it was sent off with a little more, no friction)
        // (its alpha 0.6 fading 0.02 a tick for the last 60 - gone 30 ticks into that: the game's particles are opaque, so it
        // shrinks away over those 30 instead)
        case 'steam':
          p.layer = TL('fd:particle/steam_0');
          p.size = p.fdSize = q * 2;
          p.life = 80 + Math.floor(r() * 50) - 30;
          p.fdFade = p.life - 30;
          p.y += 0.3;
          p.py = p.y;
          p.vy += r() / 500;
          p.fdDrag = 1;
          p.fdDrift = true;
          break;
        case 'star':
          p.layer = TL('fd:particle/star');
          p.size = q * 1.5;
          p.life = 16;
          p.y += 0.3;
          p.py = p.y;
          p.vx *= 0.01;
          p.vy = p.vy * 0.01 + 0.1;
          p.vz *= 0.01;
          p.fdDrag = 0.86;
          break;
        case 'sparkle':
          p.frames = 4;
          p.base = TL('fd:particle/sparkle_0');
          p.size = q * 0.75;
          p.life = 4;
          p.vx = p.vy = p.vz = 0;
          p.bright = true;
          break;
        case 'bubble_pop':
          p.frames = 5;
          p.base = TL('mc:particle/bubble_pop_0');
          p.size = q;
          p.life = 4;
          p.grav = 0.04 * 0.008;
          break;
        case 'enchanted_hit':
          {
            p.layer = TL('mc:particle/enchanted_hit');
            p.size = q * 0.75;
            p.life = Math.max(1, Math.floor(6 / (r() * 0.8 + 0.6)));
            p.vx *= 0.4;
            p.vy *= 0.4;
            p.vz *= 0.4;
            p.grav = 0.02;
            p.fdDrag = 0.7;
            const c = (r() * 0.3 + 0.6) * 255;
            p.col = [c * 0.3 | 0, c * 0.8 | 0, c | 0];
            break;
          }
        case 'mycelium':
          {
            p.layer = TL('p_generic_0');
            p.size = q * (r() * 0.6 + 0.5);
            p.life = Math.floor(20 / (r() * 0.8 + 0.2));
            p.vx = (r() - 0.5) * 0.004;
            p.vy = (r() - 0.5) * 0.004;
            p.vz = (r() - 0.5) * 0.004;
            p.fdDrag = 0.99;
            const c = (r() * 0.1 + 0.2) * 255 | 0;
            p.col = [c, c, c];
            break;
          }
      }
      return p;
    };
    if (typeof Particles !== 'undefined' && !Particles.prototype.fdTick) {
      const pt = Particles.prototype.tick;
      Particles.prototype.fdTick = true;
      Particles.prototype.tick = function () {
        pt.call(this);
        for (const p of this.list) {
          if (!p.fdDrag) continue;
          const k = p.fdDrag / 0.98;
          p.vx *= k;
          p.vy *= k;
          p.vz *= k;
          if (p.fdDrift) {
            p.vx += Math.random() / 5000 * (Math.random() < 0.5 ? 1 : -1);
            p.vz += Math.random() / 5000 * (Math.random() < 0.5 ? 1 : -1);
          }
          if (p.fdFade && p.age > p.fdFade) p.size = p.fdSize * Math.max(0, (p.life - p.age) / (p.life - p.fdFade));
        }
      };
    }

    // ---- loot tables (loot_table/blocks: those that are more than the block - crops, feasts, mushroom colonies ...) ----
    const lnum = (v, r) => {
      if (typeof v === 'number') return v;
      if (!v || typeof v !== 'object') return 1;
      const t = strip(v.type);
      if (t === 'uniform') {
        const a = lnum(v.min, r),
          b = lnum(v.max, r);
        return a + r() * (b - a);
      }
      if (t === 'binomial') {
        let n = 0;
        const k = lnum(v.n, r),
          p = lnum(v.p, r);
        for (let i = 0; i < k; i++) if (r() < p) n++;
        return n;
      }
      return lnum(v.value !== undefined ? v.value : 1, r);
    };
    const ench = (st, e) => typeof enchLevel === 'function' && st ? enchLevel(st, strip(e)) || 0 : 0;
    // an item predicate's items: a tag (#...) or names
    function itemsOk(items, st) {
      if (!items) return true;
      if (!st) return false;
      return [].concat(items).some(v => {
        v = String(v);
        if (v[0] === '#') {
          const t = v.slice(1).replace(/^minecraft:/, '');
          return FD.inI(t, st);
        }
        return strip(v) === FD.ikey(st);
      });
    }
    FD.itemsOk = itemsOk;
    function entityOk(pred, e) {
      if (!pred) return true;
      if (!e) return false;
      if (pred.type) {
        const types = [].concat(pred.type).map(String);
        const t = e === (self.game && self.game.player) ? 'player' : e.type;
        if (!types.some(x => x[0] === '#' ? false : strip(x) === t)) return false;
      }
      if (pred.flags && pred.flags.is_on_fire !== undefined && !!(e.fire > 0) !== pred.flags.is_on_fire) return false;
      if (pred.equipment && pred.equipment.mainhand) {
        const h = e.inv ? e.inv.held : e.held || null;
        if (!itemsOk(pred.equipment.mainhand.items, h)) return false;
      }
      return true;
    }
    function cond(c, ctx) {
      switch (strip(c.condition)) {
        case 'survives_explosion':
          return true;
        case 'inverted':
          return !cond(c.term, ctx);
        case 'any_of':
        case 'alternative':
          return (c.terms || []).some(q => cond(q, ctx));
        case 'all_of':
          return (c.terms || []).every(q => cond(q, ctx));
        case 'match_tool':
          {
            const p = c.predicate || {};
            return itemsOk(p.items, ctx.tool) && (p.enchantments || []).every(e => ench(ctx.tool, e.enchantments || e.enchantment) >= (e.levels && e.levels.min || 1));
          }
        case 'table_bonus':
          {
            const ch = c.chances || [0];
            return ctx.r() < ch[Math.min(ch.length - 1, ench(ctx.tool, c.enchantment))];
          }
        case 'random_chance':
          return ctx.r() < c.chance;
        case 'random_chance_with_enchanted_bonus':
          return ctx.r() < (typeof c.unenchanted_chance === 'number' ? c.unenchanted_chance : 0.1);
        case 'killed_by_player':
          return !!ctx.player;
        case 'block_state_property':
          {
            if (c.block && ctx.block && strip(c.block) !== ctx.block) return false;
            const s = ctx.state || {};
            return Object.entries(c.properties || {}).every(([k, v]) => String(s[k]) === String(v));
          }
        case 'entity_properties':
          return entityOk(c.predicate, c.entity === 'attacker' || c.entity === 'killer' ? ctx.attacker : ctx.entity);
        case 'loot_table_id':
          return strip(c.loot_table_id) === strip(ctx.table);
      }
      return true;
    }
    FD.cond = cond;
    FD.conds = (cs, ctx) => !cs || cs.every(c => cond(c, ctx));
    function func(f, n, ctx) {
      if (f.conditions && !f.conditions.every(c => cond(c, ctx))) return n;
      const t = strip(f.function);
      if (t === 'set_count') return Math.floor((f.add ? n : 0) + lnum(f.count, ctx.r));
      if (t === 'apply_bonus') {
        const Lv = ench(ctx.tool, f.enchantment),
          fo = strip(f.formula),
          p = f.parameters || {};
        if (!Lv) return n;
        if (fo === 'ore_drops') return n * (Math.max(0, Math.floor(ctx.r() * (Lv + 2)) - 1) + 1);
        if (fo === 'uniform_bonus_count') return n + Math.floor(ctx.r() * ((p.bonusMultiplier || 1) * Lv + 1));
        if (fo === 'binomial_with_bonus_count') {
          let m = n;
          for (let i = 0; i < Lv + (p.extra || 0); i++) if (ctx.r() < p.probability) m++;
          return m;
        }
        return n;
      }
      if (t === 'limit_count') {
        const l = f.limit || {};
        return Math.max(l.min !== undefined ? l.min : -Infinity, Math.min(l.max !== undefined ? l.max : Infinity, n));
      }
      return n;
    }
    function entry(en, ctx, out) {
      if (en.conditions && !en.conditions.every(c => cond(c, ctx))) return false;
      const t = strip(en.type);
      if (t === 'alternatives') {
        for (const ch of en.children || []) if (entry(ch, ctx, out)) return true;
        return false;
      }
      if (t === 'group') {
        for (const ch of en.children || []) entry(ch, ctx, out);
        return true;
      }
      if (t === 'sequence') {
        for (const ch of en.children || []) if (!entry(ch, ctx, out)) break;
        return true;
      }
      if (t === 'item') {
        let n = 1;
        for (const f of en.functions || []) n = func(f, n, ctx);
        if (n > 0 && ITEM_KEY[en.name] !== undefined) out.push([en.name, n]);
        return true;
      }
      return t === 'empty';
    }
    function roll(pools, ctx) {
      const out = [];
      ctx.r = ctx.r || Math.random;
      for (const p of pools || []) {
        if (p.conditions && !p.conditions.every(c => cond(c, ctx))) continue;
        const rolls = Math.max(0, Math.floor(lnum(p.rolls !== undefined ? p.rolls : 1, ctx.r)));
        const es = p.entries || [];
        for (let i = 0; i < rolls; i++) {
          if (es.length === 1) {
            entry(es[0], ctx, out);
            continue;
          }
          const tot = es.reduce((s, e) => s + (e.weight || 1), 0);
          let x = ctx.r() * tot;
          for (const e of es) {
            if ((x -= e.weight || 1) < 0) {
              entry(e, ctx, out);
              break;
            }
          }
        }
      }
      return out;
    }
    FD.roll = roll;
    for (const [k, pools] of Object.entries(F.blockLoot || {})) {
      const id = BID[k],
        b = id !== undefined ? BLOCKS[id] : null;
      if (!b) continue;
      b.drops = (meta, r, tool) => roll(pools, {
        r: r || Math.random,
        tool,
        block: k,
        state: b.states ? b.states[meta] : null
      });
    }

    // ---- knives: their own tool kind - the knife tag's blocks (cakes, pies, feasts, crops, wool ...) mined at their
    // speed and harvested; the rest of the mod's tools by their item fields ----
    const KN = FD.btag('farmersdelight:mineable/knife');
    for (const [k, info] of Object.entries(F.items)) {
      const d = ITEMS[ITEM_KEY[k]];
      if (!d) continue;
      if (info.knife) d.tool = {
        type: 'knife',
        level: info.knife.level,
        speed: info.knife.speed
      };
      if (info.fireproof) d.fireproof = true;
    }
    const asKnife = (g, id, f) => {
      const h = g.player && g.player.inv.held,
        d = h && ITEMS[h.id];
      if (!d || !d.tool || d.tool.type !== 'knife' || !KN.has(id)) return f();
      const b = BLOCKS[id],
        t0 = b.tool;
      b.tool = 'knife';
      try {
        return f();
      } finally {
        b.tool = t0;
      }
    };
    const bs0 = Game.prototype.breakSpeed;
    Game.prototype.breakSpeed = function (id) {
      return asKnife(this, id, () => bs0.call(this, id));
    };
    const ch0 = Game.prototype.canHarvest;
    Game.prototype.canHarvest = function (id, held) {
      const d = held && ITEMS[held.id];
      if (d && d.tool && d.tool.type === 'knife' && KN.has(id)) return true;
      return ch0.call(this, id, held);
    };

    // (the skillet is in #enchantable/sword, but takes no sweeping edge - SkilletItem.supportsEnchantment)
    if (typeof ENCH !== 'undefined' && ENCH.sweeping_edge && ITEM_KEY.skillet !== undefined) {
      ENCH.sweeping_edge.sup.delete(ITEM_KEY.skillet);
      ENCH.sweeping_edge.prim.delete(ITEM_KEY.skillet);
    }

    // ---- backstabbing (BackstabbingEnchantment): a knife's hit from behind does 1.2 + 0.2 a level times as much ----
    if (typeof NET_ENCH_CN !== 'undefined') NET_ENCH_CN['farmersdelight:backstabbing'] = L('enchantment.farmersdelight.backstabbing', '背刺');
    if (typeof enchantAttackBonus === 'function') {
      const eab = enchantAttackBonus;
      enchantAttackBonus = function (held, e) {
        let b = eab(held, e);
        const lv = enchLevel(held, 'farmersdelight:backstabbing'),
          g = self.game;
        if (lv && e && g && g.player && e.pos && e.yaw !== undefined) {
          const p = g.player,
            dx = e.pos[0] - p.pos[0],
            dz = e.pos[2] - p.pos[2],
            l = Math.hypot(dx, dz) || 1;
          const yaw = e.bodyYaw !== undefined ? e.bodyYaw : e.yaw,
            lx = -Math.sin(yaw),
            lz = -Math.cos(yaw);
          // (the attacker behind: the way from it to the target is the way the target looks)
          if (dx / l * lx + dz / l * lz > 0) {
            const d = ITEMS[held.id],
              base = d && d.attack || 1;
            b += base * (0.2 + 0.2 * lv);
            Sound.ev('entity.player.attack.crit', p.pos, 1, 1);
          }
        }
        return b;
      };
    }

    // ---- fuels (FuelItem / FuelBlockItem burn times) ----
    for (const [k, n] of Object.entries(F.fuel || {})) {
      const d = ITEMS[ITEM_KEY[k]];
      if (d) d.fuel = n;
      const b = BID[k] !== undefined ? BLOCKS[BID[k]] : null;
      if (b) b.fuel = n;
    }

    // ---- crafting: what an ingredient leaves (milk bucket -> bucket, bottles, bowls - its foods' too), the dough (wheat
    // and a water bucket, the bucket kept full), food serving (a cooking pot holding a meal and its container) ----
    const LEAVES_IN_GRID = {
      milk_bucket: 'bucket',
      honey_bottle: 'glass_bottle',
      dragon_breath: 'glass_bottle'
    };
    for (const [k, info] of Object.entries(F.items)) if (info.leftover && (info.drink || /^(milk_bottle|hot_cocoa|apple_cider|melon_juice|tomato_sauce|glow_berry_custard)$/.test(k))) LEAVES_IN_GRID[k] = info.leftover;
    if (typeof CraftingScreen !== 'undefined') {
      const ch = CraftingScreen.prototype.changed;
      CraftingScreen.prototype.changed = function () {
        ch.call(this);
        this.fdSpecial = null;
        if (this.result) return;
        const items = this.grid.map((s, i) => s ? {
          s,
          i,
          k: FD.ikey(s)
        } : null).filter(Boolean);
        // dough: one wheat and a water bucket
        if (F.special.includes('dough') && items.length === 2 && items.some(o => o.k === 'wheat') && items.some(o => o.k === 'water_bucket')) {
          this.result = makeStack('wheat_dough', 1);
          this.fdSpecial = 'dough';
          return;
        }
        // food serving: a cooking pot with a meal in it, and its container
        const pot = items.find(o => o.k === 'cooking_pot' && o.s.fdMeal && o.s.fdMeal.count > 0);
        if (pot && items.length === 2) {
          const other = items.find(o => o !== pot),
            cont = pot.s.fdCont || FD.containerOf(FD.ikey(pot.s.fdMeal));
          if (cont && other.k === cont) {
            this.result = {
              ...pot.s.fdMeal,
              count: 1
            };
            this.fdSpecial = 'serving';
          }
        }
      };
      const co = CraftingScreen.prototype.consume;
      CraftingScreen.prototype.consume = function () {
        const sp = this.fdSpecial;
        if (sp === 'dough') {
          const w = this.grid.findIndex(s => s && FD.ikey(s) === 'water_bucket'),
            keep = {
              ...this.grid[w]
            };
          co.call(this);
          this.grid[w] = keep;
          this.changed();
          return;
        }
        if (sp === 'serving') {
          const pi = this.grid.findIndex(s => s && FD.ikey(s) === 'cooking_pot'),
            pot = {
              ...this.grid[pi],
              fdMeal: {
                ...this.grid[pi].fdMeal
              }
            };
          co.call(this);
          pot.fdMeal.count--;
          if (pot.fdMeal.count <= 0) {
            delete pot.fdMeal;
            delete pot.fdCont;
          }
          pot.count = 1;
          this.grid[pi] = pot;
          this.changed();
          return;
        }
        // what the ingredients leave behind
        const left = this.result ? this.grid.map(s => s && s.count === 1 && LEAVES_IN_GRID[FD.ikey(s)] || null) : [];
        const more = this.result ? this.grid.map(s => s && s.count > 1 && LEAVES_IN_GRID[FD.ikey(s)] || null) : [];
        co.call(this);
        let ch2 = false;
        left.forEach((k, i) => {
          if (k && !this.grid[i]) {
            this.grid[i] = makeStack(k);
            ch2 = true;
          }
        });
        more.forEach(k => {
          if (k) FD.give(this.game, makeStack(k));
        });
        if (ch2) this.changed();
      };
    }

    // ---- loot: its chest tables added to vanilla's (neoforge:add_table), the global loot modifiers ----
    const tablesOf = name => [self.STRUCT_DATA && STRUCT_DATA.loot && (STRUCT_DATA.loot[name] || STRUCT_DATA.loot['minecraft:' + name]), typeof ENTITY_DATA !== 'undefined' && ENTITY_DATA.loot && ENTITY_DATA.loot[name]].filter(Boolean);
    const MODS = F.lootMods || [];
    // (a modifier for mobs' drops - an entity's properties or a player's kill anywhere in its conditions - or for blocks')
    const entityMod = m => {
      const c = JSON.stringify(m.conditions || []);
      return c.includes('entity_properties') || c.includes('killed_by_player');
    };
    for (const m of MODS) {
      if (strip(m.type) !== 'add_table') continue;
      const target = (m.conditions || []).map(c => c.loot_table_id).find(Boolean),
        add = F.chests[strip(m.table)];
      if (!target || !add) continue;
      for (const T of tablesOf(strip(target))) {
        const pools = T.pools || (T.pools = []);
        if (!pools.fdAdded) {
          pools.push(...JSON.parse(JSON.stringify(add)));
          pools.fdAdded = true;
        }
      }
    }
    // (entity drops: scavenging with a knife - ham, leather, feathers, string ...; onions from zombies and illagers)
    if (typeof rollLoot === 'function') {
      const rl = rollLoot;
      rollLoot = function (name, ctx = {}, out = []) {
        rl(name, ctx, out);
        const e = ctx.e;
        if (!e || !e.type || ctx.fdIn) return out;
        const att = ctx.src && ctx.src.attacker,
          c = {
            entity: e,
            attacker: att,
            player: !!ctx.player || att && att === (self.game && self.game.player),
            r: Math.random,
            table: 'entities/' + name
          };
        for (const m of MODS) {
          if (strip(m.type) !== 'add_item' || !entityMod(m)) continue;
          if (!FD.conds(m.conditions, c)) continue;
          const k = strip(m.item);
          if (ITEM_KEY[k] === undefined) continue;
          out.push({
            id: ITEM_KEY[k],
            count: m.count || 1,
            dmg: 0
          });
        }
        return out;
      };
    }
    // (block drops: straw from grass and grown wheat and rice with a knife, slices from cakes and pies broken with one)
    const dbl = Game.prototype.dropBlockLoot;
    Game.prototype.dropBlockLoot = function (x, y, z, id, meta, held) {
      const r = dbl.call(this, x, y, z, id, meta, held);
      const b = BLOCKS[id];
      if (!b || this.net) return r;
      const c = {
        tool: held,
        block: b.key,
        state: b.states ? b.states[meta] : null,
        r: Math.random
      };
      for (const m of MODS) {
        const t = strip(m.type);
        if (t !== 'add_item' && t !== 'pastry_slicing') continue;
        if (entityMod(m)) continue;
        if (!FD.conds(m.conditions, c)) continue;
        if (t === 'add_item') {
          const k = strip(m.item);
          if (ITEM_KEY[k] !== undefined) this.dropItem(x + 0.5, y + 0.5, z + 0.5, makeStack(k, m.count || 1));
        } else {
          // (PastrySlicingModifier: a slice for each bite left; a candle cake its candle too)
          const k = strip(m.slice);
          if (ITEM_KEY[k] === undefined) continue;
          const bites = +(c.state && c.state.bites !== undefined ? c.state.bites : 0),
            max = /cake/.test(b.key) ? 7 : 4;
          const n = /candle_cake$/.test(b.key) ? 7 : max - bites;
          if (n > 0) this.dropItem(x + 0.5, y + 0.5, z + 0.5, makeStack(k, n));
          if (/candle_cake$/.test(b.key)) {
            const ck = b.key.replace(/_cake$/, '');
            if (ITEM_KEY[ck] !== undefined) this.dropItem(x + 0.5, y + 0.5, z + 0.5, makeStack(ck, 1));
          }
        }
      }
      return r;
    };

    // ---- trades (VillagerEvents, the mod's earlier versions - left as a to-do in this one): farmers buy its crops, the
    // wandering trader sells its seeds ----
    // (BasicItemListing: 26 onions / tomatoes, 16 cabbages, 20 rice for an emerald, 16 uses; a seed or crop for an emerald)
    if (typeof TRADES !== 'undefined' && TRADES.farmer && !TRADES.farmer.fd && typeof T_ === 'function') {
      TRADES.farmer.fd = true;
      const add = (lv, t) => (TRADES.farmer[lv - 1] || (TRADES.farmer[lv - 1] = [])).push(t);
      add(1, T_('onion', 26, 'emerald', 1, 16, 2));
      add(1, T_('tomato', 26, 'emerald', 1, 16, 2));
      add(2, T_('cabbage', 16, 'emerald', 1, 16, 5));
      add(2, T_('rice', 20, 'emerald', 1, 16, 5));
    }
    if (typeof WT_SELL !== 'undefined' && !WT_SELL.some(t => t[0] === 'cabbage_seeds')) WT_SELL.push(['cabbage_seeds', 1, 1], ['tomato_seeds', 1, 1], ['rice', 1, 1], ['onion', 1, 1]);

    // ---- its tab in the creative inventory ----
    // the creative tabs (the user 11-13: sorted into kinds, on a page of their own - after 匠魂's when it is on): the
    // mod's one tab's items in their order, each in the first kind that takes it (what none takes: 建材与装饰)
    if (typeof CREATIVE_TABS !== 'undefined' && !CREATIVE_TABS.some(t => t.id === 'fd_kitchen')) {
      const keyOf = k => typeof k === 'object' ? k.key : typeof k === 'number' ? ITEMS[k].key : k;
      const ALL = () => creativeTabItems('farmersdelight');
      const has = list => {
        const s = new Set(list.split(' '));
        return k => s.has(k);
      };
      const KINDS = [['fd_kitchen', '农夫乐事·厨具与工具', 'cooking_pot', has('stove cooking_pot skillet cutting_board wooden_basket bamboo_basket flint_knife iron_knife diamond_knife netherite_knife golden_knife rope safety_net')], ['fd_farming', '农夫乐事·农作与种植', 'cabbage', k => /^wild_|_mushroom_colony$|_seeds$/.test(k) || has('organic_compost rich_soil rich_soil_farmland straw canvas tree_bark sandy_shrub cabbage tomato onion rice_panicle rice rotten_tomato')(k)], ['fd_ingredients', '农夫乐事·食材', 'minced_beef', has('tomato_sauce wheat_dough raw_pasta pumpkin_slice cabbage_leaf minced_beef beef_patty chicken_cuts cooked_chicken_cuts fd_bacon cooked_bacon cod_slice cooked_cod_slice salmon_slice cooked_salmon_slice mutton_chops cooked_mutton_chops ham smoked_ham pie_crust fried_egg')], ['fd_sweets', '农夫乐事·甜点与饮品', 'hot_cocoa', k => /(_pie|_cheesecake|_slice|_cookie)$/.test(k) && k !== 'shepherds_pie' && k !== 'kelp_roll_slice' || has('milk_bottle hot_cocoa apple_cider melon_juice melon_popsicle glow_berry_custard')(k)], ['fd_meals', '农夫乐事·料理', 'beef_stew', k => !/(cabinet|crate|_sign|tatami|_mat|rug|bale|_bag|rope_fence)/.test(k)], ['fd_building', '农夫乐事·建材与装饰', 'oak_cabinet', () => true]];
      // (each item's kind, worked out once the items are all there)
      let kindOf = null;
      const sort = () => {
        kindOf = new Map();
        for (const st of ALL()) {
          const k = keyOf(st);
          for (const [id,,, take] of KINDS) if (take(k)) {
            kindOf.set(k, id);
            break;
          }
        }
      };
      KINDS.forEach(([id, name, icon], i) => CREATIVE_TABS.push({
        id,
        name,
        icon: ITEM_KEY[icon] !== undefined ? icon : 'cooking_pot',
        newPage: i === 0,
        get items() {
          if (!kindOf) sort();
          return ALL().filter(st => kindOf.get(keyOf(st)) === id);
        }
      }));
    }

    // ---- the credits (MIT: its copyright notice and licence) ----
    window.addEventListener('load', () => {
      if (typeof HELP_PAGES === 'undefined' || HELP_PAGES.some(p => p.fd) || typeof Font === 'undefined') return;
      const wrap = text => {
        const out = [];
        for (const para of String(text || '').split('\n')) {
          let cur = '';
          for (const word of para.split(' ')) {
            const t = cur ? cur + ' ' + word : word;
            if (Font.width(t) > 300 && cur) {
              out.push(cur);
              cur = word;
            } else cur = t;
          }
          out.push(cur);
        }
        return out;
      };
      const lines = ["农夫乐事 Farmer's Delight 由 vectorwing 制作，", '代码、贴图、音效和数据按 MIT 许可使用', '（全文如下，模组包里另附 LICENSE.txt）。', '', ...wrap(String(F.license).replace(/([^\n])\n(?!\n)/g, '$1 '))];
      for (let i = 0; i < lines.length; i += 18) HELP_PAGES.push({
        fd: true,
        title: "模组：农夫乐事 Farmer's Delight",
        lines: lines.slice(i, i + 18)
      });
    });
  })();
})();
// ---- food.js ----
(function () {
  'use strict';

  // 农夫乐事 Farmer's Delight (vectorwing, MIT licence) - food: its foods and drinks (FoodValues: nutrition, saturation,
  // what they do - nourishment, regeneration, speed ...; bowls and bottles left; fast foods), the vanilla soups' nourishment,
  // its effects (nourishment: no hunger while it lasts, unless healing on saturation; comfort: slow healing without
  // saturation), the drinks' own effects (milk bottle, hot cocoa: one effect gone; melon juice: healing; the popsicle puts
  // fire out), feasts (FeastBlock: servings taken with their container), pies (PieBlock: eaten a bite at a time or cut
  // into slices with a knife), vanilla's pumpkin pie placed by sneaking, the rotten tomato thrown, dog food and horse feed
  (function () {
    const FD = self.FD;
    if (!FD) return;
    const F = FD.F,
      L = FD.L;
    const NOUR = 'farmersdelight:nourishment',
      COMF = 'farmersdelight:comfort';

    // ---- its effects: the registry, their icons ----
    if (typeof EFFECTS !== 'undefined') {
      EFFECTS[NOUR] = {
        key: NOUR,
        id: 1100,
        cn: L('effect.farmersdelight.nourishment', '滋养'),
        kind: 1,
        color: 0xF3B300
      };
      EFFECTS[COMF] = {
        key: COMF,
        id: 1101,
        cn: L('effect.farmersdelight.comfort', '舒适'),
        kind: 1,
        color: 0xDDF2F5
      };
      const icons = {};
      for (const n of ['nourishment', 'comfort']) {
        const im = new Image();
        im.src = 'mods/farmersdelight/mob_effect/' + n + '.png';
        icons['eff_farmersdelight:' + n] = im;
      }
      const give = ui => {
        if (ui && ui.img && !ui.img['eff_' + NOUR]) Object.assign(ui.img, icons);
      };
      if (typeof drawEffectIcons === 'function') {
        const dei = drawEffectIcons;
        drawEffectIcons = function (ui, p) {
          give(ui);
          return dei(ui, p);
        };
      }
      window.addEventListener('load', () => setTimeout(() => self.game && give(self.game.ui), 0));
    }
    // nourishment (NourishmentEffect: exhaustion kept at nothing, unless the player could heal on saturation); comfort
    // (ComfortEffect: every 4 seconds a half heart, without saturation or regeneration)
    const te = Living.prototype.tickEffects;
    Living.prototype.tickEffects = function () {
      const fx = this.effects,
        g = this.game;
      if (fx && fx.size && !(g.net && this === g.player) && this.health > 0) {
        if (fx.has(NOUR) && this.food !== undefined) {
          const healing = this.health < this.maxHealth && this.saturation > 0 && !(g.rules && g.rules.natural_regeneration === false);
          if (!healing) this.exhaustion = 0;
        }
        const c = fx.get(COMF);
        if (c && c.dur % 80 === 0 && !fx.has('regeneration') && !(this.saturation > 0) && this.health < this.maxHealth) this.health = Math.min(this.maxHealth, this.health + 1);
      }
      return te.call(this);
    };

    // ---- foods and drinks ----
    const DRINK = new Set();
    for (const [k, info] of Object.entries(F.items)) {
      const d = ITEMS[ITEM_KEY[k]];
      if (!d) continue;
      if (info.food) d.food = info.food.slice();else if (info.effects || info.special || info.drink) {
        d.food = [0, 0];
        info.always = true;
      }
      if (!d.food) continue;
      if (info.always) ALWAYS_EDIBLE.add(k);
      if (info.effects && info.effects.length) FOOD_EFFECTS[k] = info.effects.map(([e, t, a, ch]) => [e, t, a, ch]);
      if (info.leftover) FOOD_LEFTOVER[k] = info.leftover;
      if (info.ticks) EAT_TICKS[k] = info.ticks;
      if (info.drink) DRINK.add(k);
    }
    // the vanilla soups (VANILLA_SOUP_EFFECTS): nourishment; rabbit stew as filling as the mod's stews (the rabbit stew buff)
    FOOD_EFFECTS.mushroom_stew = [[NOUR, 3600, 0, 1]];
    FOOD_EFFECTS.beetroot_soup = [[NOUR, 3600, 0, 1]];
    FOOD_EFFECTS.rabbit_stew = [[NOUR, 6000, 0, 1]];
    if (ITEM_KEY.rabbit_stew !== undefined) ITEMS[ITEM_KEY.rabbit_stew].food = [14, 21];
    FD.containerOf = k => F.items[k] && F.items[k].leftover || FOOD_LEFTOVER[k] || null;
    // (a nourished player can always eat - its mixin)
    const cc = Game.prototype.canConsume;
    Game.prototype.canConsume = function (def) {
      return cc.call(this, def) || !!def.food && this.player.hasEffect(NOUR);
    };
    const fe = Game.prototype.finishEating;
    Game.prototype.finishEating = function (held) {
      const p = this.player,
        k = FD.ikey(held),
        info = F.items[k];
      if (!info) return fe.call(this, held);
      const drink = DRINK.has(k),
        burp = Sound.burp;
      if (drink) Sound.burp = () => {};
      try {
        fe.call(this, held);
      } finally {
        Sound.burp = burp;
      }
      if (drink) Sound.ev('entity.generic.drink', p.pos, 0.5, 1);
      // (RemoveRandomStatusEffects: one effect gone - for hot cocoa a harmful one; HealConsumeEffect; ExtinguishConsumeEffect)
      if (info.special === 'remove_random' || info.special === 'remove_random_harmful') {
        const keys = [...(p.effects || new Map()).keys()].filter(e => !String(e).startsWith('farmersdelight:') && (info.special === 'remove_random' || EFFECTS[e] && EFFECTS[e].kind < 0));
        if (keys.length) p.removeEffect(keys[Math.floor(Math.random() * keys.length)]);
      } else if (info.special === 'heal') p.health = Math.min(p.maxHealth, p.health + (info.heal || 2));else if (info.special === 'extinguish') p.fire = 0;
    };
    // the tooltips: a food's effects (ConsumableItem with its effect tooltip), the drinks' own lines
    const ticks = t => {
      const s = Math.round(t / 20);
      return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    };
    if (typeof UI !== 'undefined' && UI.prototype.itemLines) {
      const il = UI.prototype.itemLines;
      UI.prototype.itemLines = function (st) {
        const lines = il.call(this, st),
          k = FD.ikey(st),
          info = F.items[k];
        if (info && (info.tip || info.tipCustom)) {
          const tk = 'tooltip.farmersdelight.' + k;
          if (F.lang[tk]) lines.push({
            text: F.lang[tk],
            color: '#5555FF'
          });else for (const [e, t, a] of info.effects || []) if (EFFECTS[e]) lines.push({
            text: EFFECTS[e].cn + (a ? ' ' + ['I', 'II', 'III', 'IV', 'V'][a] : '') + ' (' + ticks(t) + ')',
            color: EFFECTS[e].kind < 0 ? '#FF5555' : '#5555FF'
          });
        }
        if (k === 'mushroom_stew' || k === 'beetroot_soup' || k === 'rabbit_stew') lines.push({
          text: EFFECTS[NOUR].cn + ' (' + ticks(k === 'rabbit_stew' ? 6000 : 3600) + ')',
          color: '#5555FF'
        });
        if (k === 'dog_food' || k === 'horse_feed') {
          const t = F.lang['tooltip.farmersdelight.' + k + '.when_feeding'];
          if (t) lines.push({
            text: t,
            color: '#AAAAAA'
          });
          for (const [e, a] of k === 'dog_food' ? [['speed', 0], ['strength', 0], ['resistance', 0]] : [['speed', 1], ['jump_boost', 0]]) if (EFFECTS[e]) lines.push({
            text: EFFECTS[e].cn + (a ? ' II' : '') + ' (5:00)',
            color: '#5555FF'
          });
        }
        return lines;
      };
    }

    // ---- feasts (FeastBlock, RotatedFeastBlock, GleamingSaladBlock, RiceRollMedleyBlock): a serving for its container;
    // empty, the leftovers - used again they break (their loot: the bowl, bones ...) ----
    const FEASTS = {
      roast_chicken_block: {
        item: 'roast_chicken',
        leftovers: true
      },
      stuffed_pumpkin_block: {
        item: 'stuffed_pumpkin',
        leftovers: false
      },
      honey_glazed_ham_block: {
        item: 'honey_glazed_ham',
        leftovers: true
      },
      shepherds_pie_block: {
        item: 'shepherds_pie',
        leftovers: true
      },
      gleaming_salad_block: {
        item: 'gleaming_salad',
        leftovers: true
      },
      rice_roll_medley_block: {
        items: ['cod_roll', 'cod_roll', 'salmon_roll', 'salmon_roll', 'salmon_roll', 'kelp_roll_slice', 'kelp_roll_slice', 'kelp_roll_slice'],
        leftovers: true
      }
    };
    // (placed: full - FeastBlock's default state has its most servings; the engine started from the first state, 0
    // servings, so a feast put down was already eaten and the first use broke it, 11-13)
    const FEAST_IDS = new Set(Object.keys(FEASTS).map(k => BID[k]).filter(id => id !== undefined));
    const fps = Game.prototype.placeState;
    Game.prototype.placeState = function (b, t, hdir, x, y, z) {
      let m = fps.call(this, b, t, hdir, x, y, z);
      if (FEAST_IDS.has(b.id)) {
        const most = Math.max(...b.states.map(s => +s.servings || 0));
        m = Features.withProp(b.id, m, 'servings', String(most));
      }
      return m;
    };
    for (const [k, f] of Object.entries(FEASTS)) {
      const id = BID[k];
      if (id === undefined) continue;
      BLOCKS[id].onUse = function (g, x, y, z) {
        if (g.net) return false;
        const st = FD.st(g, x, y, z),
          n = +st.servings,
          p = g.player,
          held = p.inv.held;
        if (n === 0) {
          FD.vsound('block.wood.break', [x + 0.5, y + 0.5, z + 0.5], 0.8, 0.8);
          g.breakBlock(x, y, z, true);
          g.flushMesh && g.flushMesh();
          return true;
        }
        const serving = f.items ? f.items[n - 1] : f.item,
          cont = FD.containerOf(serving);
        if (cont && FD.ikey(held) !== cont) {
          const cn = ITEMS[ITEM_KEY[cont]] ? ITEMS[ITEM_KEY[cont]].cn : cont;
          g.ui.actionBar = {
            text: L('block.farmersdelight.feast.use_container', '你需要一个%s以食用它。').replace('%s', cn),
            t: performance.now()
          };
          return true;
        }
        if (cont) FD.useUp(g);
        FD.give(g, makeStack(serving));
        FD.setProps(g, x, y, z, {
          servings: String(n - 1)
        });
        FD.sound('block.food.take_portion', [x + 0.5, y + 0.5, z + 0.5]);
        if (n - 1 === 0 && !f.leftovers) g.breakBlock(x, y, z, true);
        return true;
      };
    }

    // ---- pies (PieBlock): a bite (if hungry) or, with a knife, a slice; four of them ----
    const PIES = {
      apple_pie: 'apple_pie_slice',
      sweet_berry_cheesecake: 'sweet_berry_cheesecake_slice',
      chocolate_pie: 'chocolate_pie_slice',
      fd_pumpkin_pie: 'pumpkin_pie_slice'
    };
    for (const [k, slice] of Object.entries(PIES)) {
      const id = BID[k];
      if (id === undefined) continue;
      BLOCKS[id].onUse = function (g, x, y, z) {
        if (g.net) return false;
        const p = g.player,
          held = p.inv.held,
          bites = +FD.st(g, x, y, z).bites,
          pos = [x + 0.5, y + 0.3, z + 0.5];
        const next = () => {
          if (bites < 3) FD.setProps(g, x, y, z, {
            bites: String(bites + 1)
          });else g.world.setBlock(x, y, z, 0, 0);
          g.flushMesh && g.flushMesh();
        };
        if (FD.isKnife(held)) {
          next();
          const yaw = p.yaw,
            d = [Math.sin(yaw) * 0.15, -Math.cos(yaw) * 0.15];
          g.dropItem(pos[0], pos[1], pos[2], makeStack(slice), [d[0], 0.05, d[1]]);
          FD.sound('block.food.slice', pos, 0.8, 0.8);
          return true;
        }
        if (held) return false;
        const def = ITEMS[ITEM_KEY[slice]];
        if (!(p.food < 20 || g.mode === 'creative' || p.hasEffect(NOUR))) return false;
        if (def.food) {
          p.food = Math.min(20, p.food + def.food[0]);
          p.saturation = Math.min(p.food, p.saturation + def.food[1]);
        }
        for (const [e, t, a, ch] of FOOD_EFFECTS[slice] || []) if (Math.random() < ch) p.addEffect(e, a, t);
        next();
        Sound.ev('entity.generic.eat', pos, 0.8, 0.8);
        return true;
      };
    }
    // vanilla's pumpkin pie: placed as the mod's when sneaking (PlacePumpkinPieMixin, its default config)
    if (BID.fd_pumpkin_pie !== undefined && typeof Game.prototype.useEquipment === 'function') {
      const ue = Game.prototype.useEquipment;
      Game.prototype.useEquipment = function (held, def) {
        if (def && def.key === 'pumpkin_pie' && this.player.sneaking && this.target && !this.net) {
          const t = this.target,
            D = DIRS[t.face],
            x = t.pos[0] + D[0],
            y = t.pos[1] + D[1],
            z = t.pos[2] + D[2];
          const w = this.world,
            cur = w.getBlock(x, y, z);
          if ((!cur || REPLACEABLE[cur]) && SOLIDCUBE[w.getBlock(x, y - 1, z)]) {
            const id = BID.fd_pumpkin_pie,
              look = this.lookDir(),
              f = Math.abs(look[0]) > Math.abs(look[2]) ? look[0] > 0 ? 'east' : 'west' : look[2] > 0 ? 'south' : 'north';
            w.setBlock(x, y, z, id, FD.meta(id, {
              facing: f,
              bites: '0'
            }));
            Sound.block('place', BLOCKS[id].sound, [x + 0.5, y + 0.5, z + 0.5]);
            FD.useUp(this);
            this.player.swing();
            this.flushMesh && this.flushMesh();
            return true;
          }
        }
        return ue.call(this, held, def);
      };
    }

    // ---- the rotten tomato: thrown like a snowball, a splat where it lands (RottenTomatoEntity) ----
    if (typeof Thrown !== 'undefined') {
      class FdTomato extends Thrown {
        burst() {
          if (this.burst_) return;
          this.burst_ = true;
          this.dead = true;
          const g = this.game,
            [x, y, z] = this.pos;
          FD.sound('entity.rotten_tomato.hit', this.pos, 1, (Math.random() - Math.random()) * 0.2 + 1);
          for (let i = 0; i < 12; i++) FD.particle(g, 'item', x, y, z, (Math.random() - 0.5) * 0.16, Math.random() * 0.16, (Math.random() - 0.5) * 0.16, ITEM_KEY.rotten_tomato);
        }
      }
      // (a raider hit with one: its advancement)
      const bu = FdTomato.prototype.burst;
      FdTomato.prototype.burst = function () {
        const g = this.game,
          [x, y, z] = this.pos;
        if (!this.burst_ && FD.trigger && g.entities.some(e => !e.dead && /^(pillager|vindicator|evoker|illusioner|witch|ravager)$/.test(e.type) && Math.abs(e.pos[0] - x) < 1 && Math.abs(e.pos[2] - z) < 1 && y >= e.pos[1] - 0.2 && y <= e.pos[1] + (e.h || 2) + 0.2)) FD.trigger(g, 'player_hurt_entity');
        return bu.call(this);
      };
      self.FdTomato = FdTomato;
      const ue = Game.prototype.useEquipment;
      Game.prototype.useEquipment = function (held, def) {
        if (def && def.key === 'rotten_tomato') {
          const p = this.player,
            d = this.lookDir();
          this.entities.push(new FdTomato(this, p.pos[0], p.pos[1] + p.eye() - 0.1, p.pos[2], d.map(v => v * 1.5), p, 'rotten_tomato'));
          FD.sound('entity.rotten_tomato.throw', p.pos, 0.5, 0.4 / (Math.random() * 0.4 + 0.8));
          FD.useUp(this);
          p.swing();
          return true;
        }
        return ue.call(this, held, def);
      };
    }

    // ---- dog food and horse feed (DogFoodItem, HorseFeedItem): a tamed one of farmersdelight:dog_food_users /
    // horse_feed_users fed - healed full, speed (II for a horse) / strength / resistance or jump boost for 5 minutes, the
    // eating sound, five stars; in creative nothing used up (and no bowl back) ----
    const gauss = () => {
      let u = 0;
      while (!u) u = Math.random();
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
    };
    const FEED = {
      dog_food: {
        users: /^wolf$/,
        fx: [['speed', 0], ['strength', 0], ['resistance', 0]],
        snd: 'entity.generic.eat',
        bowl: true
      },
      horse_feed: {
        users: /^(horse|skeleton_horse|zombie_horse|donkey|mule|llama)$/,
        fx: [['speed', 1], ['jump_boost', 0]],
        snd: 'entity.horse.eat'
      }
    };
    const usr = Game.prototype.use;
    Game.prototype.use = function () {
      const e = this.targetEntity,
        held = this.player.inv.held,
        k = FD.ikey(held),
        f = FEED[k];
      if (e && !this.net && f && f.users.test(e.type)) {
        const tame = e.tamed || e.owner || e.tame || e.isTame;
        if (tame && e.health > 0 && !e.dead) {
          e.health = e.maxHealth;
          for (const [fx, a] of f.fx) if (e.addEffect) e.addEffect(fx, a, 6000);
          for (let i = 0; i < 5; i++) FD.particle(this, 'star', e.pos[0] + (Math.random() * 2 - 1) * e.w * 0.5, e.pos[1] + Math.random() * e.h + 0.5, e.pos[2] + (Math.random() * 2 - 1) * e.w * 0.5, gauss() * 0.02, gauss() * 0.02, gauss() * 0.02);
          Sound.ev(f.snd, [Math.floor(e.pos[0]) + 0.5, Math.floor(e.pos[1]) + 0.5, Math.floor(e.pos[2]) + 0.5], 0.8, 0.8);
          if (this.mode !== 'creative') {
            FD.useUp(this);
            if (f.bowl) FD.give(this, makeStack('bowl'));
          }
          this.player.swing();
          this.useCd = 4;
          return;
        }
      }
      return usr.call(this);
    };
    // ---- horses, donkeys and mules follow a player with horse feed in hand (farmersdelight:horse_feed_tempted; it is in
    // #horse_tempt_items), as with their own food ----
    if (typeof VMob !== 'undefined') {
      const tm = VMob.prototype.tempt;
      VMob.prototype.tempt = function (c) {
        if (tm.call(this, c)) return true;
        if (!/^(horse|donkey|mule)$/.test(this.type) || this.baby && !this.D.babyTempt || this.game.net) return false;
        const p = this.game.player;
        if (FD.ikey(p.inv.held) !== 'horse_feed' && FD.ikey(p.inv.slots[40]) !== 'horse_feed') return false;
        if (p.mode === 'spectator' || this.game.mode === 'spectator') return false;
        const d = this.distTo(p);
        if (d > 10 || p.deathTime) return false;
        c.look = p;
        if (d > 2.5) {
          c.goal = [p.pos[0], p.pos[1], p.pos[2]];
          c.mod = this.D.temptMod || 1.0;
        }
        return true;
      };
    }
  })();
})();
// ---- crops.js ----
(function () {
  'use strict';

  // 农夫乐事 Farmer's Delight (vectorwing, MIT licence) - farming: its crops (CabbageBlock, OnionBlock - CropBlock;
  // BuddingTomatoBlock grown into TomatoBlock, which climbs ropes as HangingTomatoBlock and is picked; RiceBlock in water,
  // its panicles above; wild crops; mushroom colonies), where they can stand, their random growth (vanilla's crop
  // growth speed from the farmland around), bone meal on them, rich soil (mushrooms on it become colonies, plants on it
  // grow on their own now and then), its farmland, organic compost turning into rich soil
  (function () {
    const FD = self.FD;
    if (!FD) return;
    const L = FD.L;
    const B = k => BID[k];
    const isB = (id, ...ks) => ks.some(k => B(k) !== undefined && id === B(k));
    const FARMLAND = () => [63, B('rich_soil_farmland')].filter(x => x !== undefined);
    const isFarmland = id => FARMLAND().includes(id);
    const tagged = tag => id => FD.inB(tag, id);
    const DIRT = tagged('dirt'),
      SAND = tagged('sand');
    const solidBelow = (w, x, y, z) => !!SOLIDCUBE[w.getBlock(x, y - 1, z)];
    const CROPS7 = ['cabbages', 'onions'];
    const FD_PLANTS = ['cabbages', 'onions', 'budding_tomatoes', 'tomatoes', 'tomatoes_on_rope', 'rice', 'rice_panicles', 'wild_cabbages', 'wild_onions', 'wild_tomatoes', 'wild_carrots', 'wild_potatoes', 'wild_beetroots', 'wild_rice', 'sandy_shrub', 'brown_mushroom_colony', 'red_mushroom_colony'];
    for (const k of FD_PLANTS) if (B(k) !== undefined) {
      BLOCKS[B(k)].needsSupport = true;
      BLOCKS[B(k)].fdPlant = true;
    }

    // ---- where they stand (canSurvive / mayPlaceOn) ----
    const SURVIVE = {
      cabbages: (w, x, y, z) => isFarmland(w.getBlock(x, y - 1, z)),
      onions: (w, x, y, z) => isFarmland(w.getBlock(x, y - 1, z)),
      budding_tomatoes: (w, x, y, z) => isFarmland(w.getBlock(x, y - 1, z)),
      tomatoes: (w, x, y, z) => {
        const b = w.getBlock(x, y - 1, z);
        return isFarmland(b) || isB(b, 'tomatoes', 'tomatoes_on_rope');
      },
      tomatoes_on_rope: (w, x, y, z) => isB(w.getBlock(x, y - 1, z), 'tomatoes', 'tomatoes_on_rope'),
      rice: (w, x, y, z) => {
        const b = w.getBlock(x, y - 1, z);
        return DIRT(b) || isFarmland(b);
      },
      rice_panicles: (w, x, y, z) => isB(w.getBlock(x, y - 1, z), 'rice'),
      sandy_shrub: (w, x, y, z) => SAND(w.getBlock(x, y - 1, z)),
      brown_mushroom_colony: solidBelow,
      red_mushroom_colony: solidBelow
    };
    for (const k of ['wild_cabbages', 'wild_onions', 'wild_tomatoes', 'wild_carrots', 'wild_potatoes', 'wild_beetroots']) SURVIVE[k] = (w, x, y, z) => {
      const b = w.getBlock(x, y - 1, z);
      return DIRT(b) || SAND(b);
    };
    SURVIVE.wild_rice = (w, x, y, z, id, meta) => {
      if (Features.propOf(id, meta, 'half') === 'upper') return w.getBlock(x, y - 1, z) === id;
      const b = w.getBlock(x, y - 1, z);
      return DIRT(b) || SAND(b);
    };
    // the feasts, pies and the canvas rug / tatami mats stand on something
    for (const k of ['apple_pie', 'sweet_berry_cheesecake', 'chocolate_pie', 'fd_pumpkin_pie', 'roast_chicken_block', 'stuffed_pumpkin_block', 'honey_glazed_ham_block', 'shepherds_pie_block', 'gleaming_salad_block', 'rice_roll_medley_block']) SURVIVE[k] = (w, x, y, z) => {
      const b = BLOCKS[w.getBlock(x, y - 1, z)];
      return !!b && (!!SOLIDCUBE[b.id] || b.solid && b.shape !== undefined && b.key !== 'air');
    };
    for (const k of ['canvas_rug', 'full_tatami_mat', 'half_tatami_mat']) SURVIVE[k] = (w, x, y, z) => w.getBlock(x, y - 1, z) !== 0 && !IS_FLUID[w.getBlock(x, y - 1, z)];
    const sup = Game.prototype.supported;
    Game.prototype.supported = function (x, y, z, id, meta) {
      const b = BLOCKS[id],
        f = b && SURVIVE[b.key];
      return f ? f(this.world, x, y, z, id, meta) : sup.call(this, x, y, z, id, meta);
    };
    // (placed: rice and wild rice only into a water source with air above)
    const sfp = Game.prototype.supportedForPlace;
    Game.prototype.supportedForPlace = function (x, y, z, id, meta) {
      const b = BLOCKS[id],
        w = this.world;
      if (b && (b.key === 'rice' || b.key === 'wild_rice')) {
        if (!(w.getBlock(x, y, z) === WATER && w.getMeta(x, y, z) === 0)) return false;
        if (b.key === 'wild_rice' && w.getBlock(x, y + 1, z) !== 0) return false;
      }
      return sfp.call(this, x, y, z, id, meta);
    };
    // (anything that grows on rich soil farmland but has no rule of its own: as on farmland - vanilla's wheat, carrots ...)
    if (B('rich_soil_farmland') !== undefined) {
      const RSF = B('rich_soil_farmland');
      const sup2 = Game.prototype.supported;
      Game.prototype.supported = function (x, y, z, id, meta) {
        if (this.world.getBlock(x, y - 1, z) === RSF && BLOCKS[id] && !SURVIVE[BLOCKS[id].key] && (id === 64 || /^(carrots|potatoes|beetroots|melon_stem|pumpkin_stem|attached_melon_stem|attached_pumpkin_stem|torchflower_crop|pitcher_crop)$/.test(BLOCKS[id].key))) return true;
        return sup2.call(this, x, y, z, id, meta);
      };
    }

    // ---- growth ----
    // vanilla's crop growth speed (CropBlock.getGrowthSpeed): farmland under and around, moist counting three times, less
    // for the same crop in rows on both axes or on a diagonal
    const moist = (w, x, y, z) => {
      const id = w.getBlock(x, y, z);
      if (id === 63) return w.getMeta(x, y, z) > 0;
      if (id === B('rich_soil_farmland')) return +(FD.st({
        world: w
      }, x, y, z).moisture || 0) > 0;
      return false;
    };
    function growthSpeed(w, x, y, z, id) {
      let s = 1;
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        const b = w.getBlock(x + dx, y - 1, z + dz);
        let bonus = 0;
        if (isFarmland(b)) bonus = moist(w, x + dx, y - 1, z + dz) ? 3 : 1;
        if (dx || dz) bonus /= 4;
        s += bonus;
      }
      const same = (a, c) => w.getBlock(x + a, y, z + c) === id;
      const ew = same(-1, 0) || same(1, 0),
        ns = same(0, -1) || same(0, 1);
      if (ew && ns) s /= 2;else if (same(-1, -1) || same(1, -1) || same(1, 1) || same(-1, 1)) s /= 2;
      return s;
    }
    const chance = f => Math.random() < 1 / (Math.floor(25 / f) + 1);
    const age = (g, x, y, z, p = 'age') => +FD.st(g, x, y, z)[p] || 0;
    const RT = BLOCK_RANDOM_TICK;
    const light = (g, x, y, z) => FD.light(g, x, y, z);
    for (const k of CROPS7) RT[k] = (g, x, y, z, id) => {
      if (light(g, x, y, z) < 9) return;
      const a = age(g, x, y, z);
      if (a < 7 && chance(growthSpeed(g.world, x, y, z, id))) FD.setProps(g, x, y, z, {
        age: String(a + 1)
      });
    };
    RT.rice_panicles = (g, x, y, z, id) => {
      if (light(g, x, y, z) < 9) return;
      const a = age(g, x, y, z);
      if (a < 3 && chance(growthSpeed(g.world, x, y, z, id))) FD.setProps(g, x, y, z, {
        age: String(a + 1)
      });
    };
    RT.budding_tomatoes = (g, x, y, z, id) => {
      if (light(g, x, y, z) < 9) return;
      const a = age(g, x, y, z);
      if (!chance(growthSpeed(g.world, x, y, z, id))) return;
      if (a >= 3) FD.place(g, x, y, z, 'tomatoes', {
        age: '0',
        ropelogged: 'false'
      });else FD.setProps(g, x, y, z, {
        age: String(a + 1)
      });
    };
    // tomatoes: 1 in 6 a stage; up a rope above them (three high at most)
    const ROPE = () => B('rope');
    function climb(g, x, y, z) {
      const w = g.world;
      if (w.getBlock(x, y + 1, z) !== ROPE()) return;
      let h = 1;
      while (isB(w.getBlock(x, y - h, z), 'tomatoes', 'tomatoes_on_rope')) h++;
      if (h < 3) FD.place(g, x, y + 1, z, 'tomatoes_on_rope', {
        age: '0'
      });
    }
    const tomatoTick = (g, x, y, z, id) => {
      const k = FD.bkey(id);
      if (k === 'tomatoes' && FD.st(g, x, y, z).ropelogged === 'true') {
        FD.place(g, x, y, z, 'tomatoes_on_rope', {
          age: String(age(g, x, y, z))
        });
        return;
      }
      if (light(g, x, y, z) < 9) return;
      const a = age(g, x, y, z);
      if (a < 3 && chance(5)) FD.setProps(g, x, y, z, {
        age: String(a + 1)
      });
      climb(g, x, y, z);
    };
    RT.tomatoes = tomatoTick;
    RT.tomatoes_on_rope = tomatoTick;
    // rice: 1 in 3 a stage with light above; grown, its panicles above it
    RT.rice = (g, x, y, z) => {
      if (light(g, x, y + 1, z) < 6) return;
      const a = age(g, x, y, z);
      if (!chance(10)) return;
      if (a >= 3) {
        if (g.world.getBlock(x, y + 1, z) === 0) FD.place(g, x, y + 1, z, 'rice_panicles', {
          age: '0'
        });
      } else FD.setProps(g, x, y, z, {
        age: String(a + 1)
      });
    };
    // mushroom colonies: on the blocks they grow on (mycelium, rich soil ...), 1 in 4 a stage
    for (const k of ['brown_mushroom_colony', 'red_mushroom_colony']) RT[k] = (g, x, y, z) => {
      const a = age(g, x, y, z);
      if (a < 3 && FD.inB('farmersdelight:mushroom_colony_growable_on', g.world.getBlock(x, y - 1, z)) && Math.random() < 0.25) FD.setProps(g, x, y, z, {
        age: String(a + 1)
      });
    };
    // organic compost (OrganicCompostBlock): faster with compost activators around, sky light and water; then rich soil
    RT.organic_compost = (g, x, y, z) => {
      const w = g.world;
      let c = 0,
        water = false,
        sky = 0;
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
        const id = w.getBlock(x + dx, y + dy, z + dz);
        if (FD.inB('farmersdelight:compost_activators', id)) c += 0.02;
        if (id === WATER || w.isWaterlogged && w.isWaterlogged(x + dx, y + dy, z + dz)) water = true;
        sky = Math.max(sky, w.skyAt(x + dx, y + dy + 1, z + dz));
      }
      c += sky > 12 ? 0.1 : 0.05;
      if (water) c += 0.1;
      if (Math.random() > c) return;
      const s = age(g, x, y, z, 'composting');
      if (s >= 7) FD.place(g, x, y, z, 'rich_soil');else FD.setProps(g, x, y, z, {
        composting: String(s + 1)
      });
    };
    // rich soil (RichSoilBlock): a mushroom on it becomes a colony; else a plant on it (or hanging under it) grows now
    // and then (RICH_SOIL_BOOST_CHANCE 0.2)
    function boost(g, x, y, z) {
      if (Math.random() > 0.2) return;
      const w = g.world,
        a = w.getBlock(x, y + 1, z);
      if (!FD.inB('farmersdelight:planted_from_below', a) && grow(g, x, y + 1, z, true)) return;
      if (FD.inB('farmersdelight:planted_from_below', w.getBlock(x, y - 1, z))) grow(g, x, y - 1, z, true);
    }
    RT.rich_soil = (g, x, y, z) => {
      const a = FD.at(g, x, y + 1, z);
      if (a === 'brown_mushroom' || a === 'red_mushroom') {
        FD.place(g, x, y + 1, z, a + '_colony', {
          age: '0'
        });
        return;
      }
      boost(g, x, y, z);
    };
    // its farmland (RichSoilFarmlandBlock): moist near water or in rain, drying a step at a time; moist, it boosts
    RT.rich_soil_farmland = (g, x, y, z) => {
      const w = g.world,
        m = age(g, x, y, z, 'moisture');
      let wet = g.weather > 0.5 && w.skyAt(x, y + 1, z) >= 15;
      for (let dx = -4; dx <= 4 && !wet; dx++) for (let dz = -4; dz <= 4 && !wet; dz++) for (let dy = 0; dy <= 1; dy++) if (w.waterAt(x + dx, y + dy, z + dz)) {
        wet = true;
        break;
      }
      if (!wet) {
        if (m > 0) FD.setProps(g, x, y, z, {
          moisture: String(m - 1)
        });
      } else if (m < 7) FD.setProps(g, x, y, z, {
        moisture: '7'
      });else boost(g, x, y, z);
    };
    // (vanilla farmland under one of its crops keeps from turning back to dirt, as under wheat)
    const ort = Game.prototype.onRandomTick;
    Game.prototype.onRandomTick = function (x, y, z, id, ch) {
      if (id === 63) {
        const a = BLOCKS[this.world.getBlock(x, y + 1, z)];
        if (a && a.fdPlant && this.world.getMeta(x, y, z) === 0) {
          const w = this.world;
          for (let dx = -4; dx <= 4; dx++) for (let dz = -4; dz <= 4; dz++) for (let dy = 0; dy <= 1; dy++) if (w.waterAt(x + dx, y + dy, z + dz)) {
            w.setMeta(x, y, z, 1);
            return;
          }
          return;
        }
      }
      return ort.call(this, x, y, z, id, ch);
    };

    // ---- bone meal (performBonemeal) - and rich soil's boost, which grows a plant the same way ----
    const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    function grow(g, x, y, z, fromSoil) {
      const w = g.world,
        id = w.getBlock(x, y, z),
        b = BLOCKS[id];
      if (!b) return false;
      const k = b.key,
        st = FD.st(g, x, y, z);
      if (fromSoil && FD.inB('farmersdelight:unaffected_by_rich_soil', id)) return false;
      if (CROPS7.includes(k)) {
        const a = +st.age;
        if (a >= 7) return false;
        FD.setProps(g, x, y, z, {
          age: String(Math.min(7, a + rint(2, 5)))
        });
        return true;
      }
      if (k === 'rice_panicles') {
        const a = +st.age;
        if (a >= 3) return false;
        FD.setProps(g, x, y, z, {
          age: String(Math.min(3, a + Math.floor(rint(2, 5) / 3)))
        });
        return true;
      }
      if (k === 'budding_tomatoes') {
        const g2 = Math.min(+st.age + rint(1, 4), 7);
        if (g2 <= 3) FD.setProps(g, x, y, z, {
          age: String(g2)
        });else FD.place(g, x, y, z, 'tomatoes', {
          age: String(Math.min(3, g2 - 4)),
          ropelogged: 'false'
        });
        return true;
      }
      if (k === 'tomatoes' || k === 'tomatoes_on_rope') {
        if (k === 'tomatoes' && st.ropelogged === 'true') {
          FD.place(g, x, y, z, 'tomatoes_on_rope', {
            age: st.age
          });
          return true;
        }
        const a = +st.age;
        if (a < 3) {
          FD.setProps(g, x, y, z, {
            age: String(Math.min(3, a + Math.floor(rint(2, 5) / 2)))
          });
          if (Math.random() < 0.3) climb(g, x, y, z);
          return true;
        }
        if (w.getBlock(x, y + 1, z) === ROPE()) {
          climb(g, x, y, z);
          return true;
        }
        if (isB(w.getBlock(x, y + 1, z), 'tomatoes_on_rope')) return grow(g, x, y + 1, z, fromSoil);
        return false;
      }
      if (k === 'rice') {
        const a = +st.age,
          g2 = Math.min(a + rint(1, 4), 7);
        if (g2 <= 3) {
          FD.setProps(g, x, y, z, {
            age: String(g2)
          });
          return true;
        }
        if (isB(w.getBlock(x, y + 1, z), 'rice_panicles')) return grow(g, x, y + 1, z, fromSoil);
        if (w.getBlock(x, y + 1, z) === 0) {
          FD.setProps(g, x, y, z, {
            age: '3'
          });
          FD.place(g, x, y + 1, z, 'rice_panicles', {
            age: String(Math.min(3, g2 - 4))
          });
          return true;
        }
        return false;
      }
      if (k === 'brown_mushroom_colony' || k === 'red_mushroom_colony') {
        const a = +st.age;
        if (a >= 3) return false;
        FD.setProps(g, x, y, z, {
          age: String(Math.min(3, a + rint(1, 2)))
        });
        return true;
      }
      if (fromSoil) {
        // vanilla's: wheat, the age crops, saplings (as bone meal does)
        if (id === 64) {
          const m = w.getMeta(x, y, z);
          if (m >= 7) return false;
          w.setMeta(x, y, z, Math.min(7, m + rint(2, 5)));
          return true;
        }
        if (st.age !== undefined && /^(carrots|potatoes|beetroots|melon_stem|pumpkin_stem|sweet_berry_bush|cocoa|torchflower_crop|nether_wart)$/.test(k)) {
          const max = Math.max(...b.states.map(s => +s.age).filter(n => !isNaN(n))),
            a = +st.age;
          if (a >= max) return false;
          FD.setProps(g, x, y, z, {
            age: String(Math.min(max, a + (/^(carrots|potatoes|beetroots|melon_stem|pumpkin_stem)$/.test(k) ? rint(2, 5) : 1)))
          });
          return true;
        }
        if (id >= 65 && id <= 67 || k.endsWith('_sapling')) {
          if (Math.random() < 0.45 && !(w.gen2 && g.growTreeV(x, y, z, id)) && id <= 67) g.growTree(x, y, z, id);
          return true;
        }
      }
      return false;
    }
    FD.grow = grow;
    function boneMeal(g, x, y, z) {
      const w = g.world,
        id = w.getBlock(x, y, z),
        k = FD.bkey(id);
      if (!k) return false;
      if (/^wild_(cabbages|onions|tomatoes|carrots|potatoes|beetroots)$/.test(k)) {
        // (WildCropBlock: 4 in 5 another one nearby, up to 10 around)
        if (Math.random() >= 0.8) return true;
        let n = 10;
        for (let dx = -4; dx <= 4; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -4; dz <= 4; dz++) if (w.getBlock(x + dx, y + dy, z + dz) === id && --n <= 0) return true;
        let p = [x, y, z];
        const rnd = q => [q[0] + rint(-1, 1), q[1] + Math.floor(Math.random() * 2) - Math.floor(Math.random() * 2), q[2] + rint(-1, 1)];
        let r = rnd(p);
        for (let i = 0; i < 4; i++) {
          if (w.getBlock(...r) === 0 && SURVIVE[k](w, ...r, id, 0)) p = r;
          r = rnd(p);
        }
        if (w.getBlock(...r) === 0 && SURVIVE[k](w, ...r, id, 0)) w.setBlock(r[0], r[1], r[2], id, 0);
        return true;
      }
      if (k === 'wild_rice') {
        if (Math.random() < 0.3) g.dropItem(x + 0.5, y + 0.5, z + 0.5, makeStack('wild_rice'));
        return true;
      }
      if (k === 'sandy_shrub') {
        // (its patch: sandy shrubs on the sand around)
        for (let i = 0; i < 16; i++) {
          const nx = x + rint(-3, 3),
            ny = y + rint(-1, 1),
            nz = z + rint(-3, 3);
          if (w.getBlock(nx, ny, nz) === 0 && SAND(w.getBlock(nx, ny - 1, nz))) w.setBlock(nx, ny, nz, id, 0);
        }
        return true;
      }
      if (!['cabbages', 'onions', 'budding_tomatoes', 'tomatoes', 'tomatoes_on_rope', 'rice', 'rice_panicles', 'brown_mushroom_colony', 'red_mushroom_colony'].includes(k)) return null;
      return grow(g, x, y, z, false);
    }
    FD.boneMeal = boneMeal;

    // ---- using things on them: bone meal; a hoe on rich soil; tomatoes picked; colonies cut and sheared ----
    const use0 = Game.prototype.use;
    Game.prototype.use = function () {
      const t = this.target,
        p = this.player,
        held = p.inv.held,
        k = FD.ikey(held);
      if (t && !this.targetEntity && !this.net) {
        const [x, y, z] = t.pos,
          bk = FD.bkey(t.id);
        if (k === 'bone_meal') {
          const r = boneMeal(this, x, y, z);
          if (r !== null && r !== false) {
            for (let i = 0; i < 12; i++) this.particles.spawn('bone_meal', x + Math.random(), y + 0.5 + Math.random() * 0.5, z + Math.random(), 0, 0.02, 0);
            Sound.ev('item.bone_meal.use', [x + 0.5, y + 0.5, z + 0.5], 1, 1);
            FD.useUp(this);
            p.swing();
            this.flushMesh && this.flushMesh();
            this.useCd = 4;
            return;
          }
          if (r === false) {
            this.useCd = 4;
            return;
          }
        }
        if (bk === 'rich_soil' && ITEMS[held && held.id] && ITEMS[held.id].tool && ITEMS[held.id].tool.type === 'hoe' && this.world.getBlock(x, y + 1, z) === 0 && t.face !== 2) {
          FD.place(this, x, y, z, 'rich_soil_farmland', {
            moisture: '0'
          });
          Sound.ev('item.hoe.till', [x + 0.5, y + 0.5, z + 0.5], 1, 1);
          this.damageHeld(1);
          p.swing();
          this.flushMesh && this.flushMesh();
          this.useCd = 4;
          return;
        }
      }
      return use0.call(this);
    };
    for (const k of ['tomatoes', 'tomatoes_on_rope']) if (B(k) !== undefined) BLOCKS[B(k)].onUse = function (g, x, y, z) {
      if (g.net || age(g, x, y, z) < 3) return false;
      const pos = [x + 0.5, y + 0.5, z + 0.5];
      g.dropItem(...pos, makeStack('tomato', 1 + Math.floor(Math.random() * 2)));
      if (Math.random() < 0.05) g.dropItem(...pos, makeStack('rotten_tomato'));
      FD.sound('block.tomatoes.pick_tomatoes', pos, 1, 0.8 + Math.random() * 0.4);
      FD.setProps(g, x, y, z, {
        age: '0'
      });
      if (k === 'tomatoes_on_rope' && FD.trigger) FD.trigger(g, 'default_block_use');
      return true;
    };
    for (const k of ['brown_mushroom_colony', 'red_mushroom_colony']) if (B(k) !== undefined) BLOCKS[B(k)].onUse = function (g, x, y, z) {
      const a = age(g, x, y, z),
        held = g.player.inv.held,
        hk = FD.ikey(held),
        mush = k.replace('_colony', ''),
        pos = [x + 0.5, y + 0.5, z + 0.5];
      if (g.net || a <= 0) return false;
      if (hk === 'shears' || FD.inI('c:tools/shear', held)) {
        FD.setProps(g, x, y, z, {
          age: String(a - 1)
        });
        Sound.ev('entity.sheep.shear', pos, 1, 1);
        g.dropItem(...pos, makeStack(mush));
        g.damageHeld(1);
        return true;
      }
      if (FD.isKnife(held)) {
        FD.setProps(g, x, y, z, {
          age: '0'
        });
        Sound.block('break', BLOCKS[B(k)].sound, pos);
        g.dropItem(...pos, makeStack(mush, a));
        g.damageHeld(1);
        return true;
      }
      return false;
    };
    // (a tomato vine broken off a rope leaves the rope - HangingTomatoBlock, a rope-logged TomatoBlock)
    const bb = Game.prototype.breakBlock;
    Game.prototype.breakBlock = function (x, y, z, natural, silent) {
      const w = this.world,
        id = w.getBlock(x, y, z),
        k = FD.bkey(id),
        rl = k === 'tomatoes_on_rope' || k === 'tomatoes' && FD.st(this, x, y, z).ropelogged === 'true';
      const r = bb.call(this, x, y, z, natural, silent);
      if (rl && w.getBlock(x, y, z) === 0 && !this.net) FD.place(this, x, y, z, 'rope', {});
      return r;
    };
    // ---- ravagers trample its crops: a ravager in one (CropBlock.entityInside - cabbages, onions, rice panicles,
    // tomatoes; BuddingBushBlock - budding tomatoes), mob griefing on - broken as by hand, its drops left ----
    const TRAMPLED = new Set(['cabbages', 'onions', 'rice_panicles', 'tomatoes', 'tomatoes_on_rope', 'budding_tomatoes'].map(B).filter(x => x !== undefined));
    if (typeof Ravager !== 'undefined' && TRAMPLED.size) {
      const am = Ravager.prototype.afterMove;
      Ravager.prototype.afterMove = function () {
        if (am) am.call(this);
        const g = this.game,
          w = this.world;
        if (!g || g.net || this.dead || this.health <= 0 || g.rule && !g.rule('mob_griefing')) return;
        const hw = this.w / 2 - 1e-5,
          x0 = Math.floor(this.pos[0] - hw),
          x1 = Math.floor(this.pos[0] + hw),
          z0 = Math.floor(this.pos[2] - hw),
          z1 = Math.floor(this.pos[2] + hw);
        const y0 = Math.floor(this.pos[1] + 1e-5),
          y1 = Math.floor(this.pos[1] + this.h - 1e-5);
        for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) if (TRAMPLED.has(w.getBlock(x, y, z))) g.breakBlock(x, y, z, true);
      };
    }
    // ---- what shows now and then near the player (animateTick): organic compost's mycelium specks (1 in 10), the
    // gleaming salad's sparkles (5 % a serving) - the game looks at fewer blocks a tick than vanilla's ~1300 in 16 / 32
    // blocks: 100 here, each chance scaled to match ----
    const COMPOST = B('organic_compost'),
      SALAD = B('gleaming_salad_block');
    if (COMPOST !== undefined || SALAD !== undefined) {
      const ap = Game.prototype.ambientParticles;
      const SCALE = (667 / 35937 + 667 / 274625) / (100 / 35937);
      Game.prototype.ambientParticles = function () {
        if (ap) ap.call(this);
        const p = this.player,
          w = this.world;
        if (!p || !w) return;
        for (let i = 0; i < 100; i++) {
          const x = Math.floor(p.pos[0]) + Math.floor(Math.random() * 33) - 16,
            y = Math.floor(p.pos[1]) + Math.floor(Math.random() * 33) - 16,
            z = Math.floor(p.pos[2]) + Math.floor(Math.random() * 33) - 16;
          const id = w.getBlock(x, y, z);
          if (id === COMPOST && Math.random() < 0.1 * SCALE) FD.particle(this, 'mycelium', x + Math.random(), y + 1.1, z + Math.random());else if (id === SALAD) {
            const n = +FD.st(this, x, y, z).servings || 0;
            for (let k = 0.05 * n * SCALE; k > 0; k--) if (Math.random() < Math.min(1, k)) FD.particle(this, 'sparkle', x + 0.5 + (Math.random() * 0.5 - 0.25), y + 0.5, z + 0.5 + (Math.random() * 0.5 - 0.25));
          }
        }
      };
    }
    // a tomato vine on a rope that is placed with tomatoes below climbs at once when they are grown? (no - by growth only)
    FD.climb = climb;
    void L;
  })();
})();
// ---- kitchen.js ----
(function () {
  'use strict';

  // 农夫乐事 Farmer's Delight (vectorwing, MIT licence) - the kitchen: the stove (StoveBlock: lit when placed, put out
  // with a shovel or water, lit with flint and steel or a fire charge; six things cooked on top as on a campfire; it burns
  // whoever walks on it), the cooking pot (CookingPotBlockEntity: up to six ingredients, heated from below, the meal kept
  // until served into its container; its screen), the skillet (SkilletBlock: one stack cooked on a heat source, quicker
  // than a campfire; SkilletItem: held, with food in the other hand, near heat), the cutting board (CuttingBoardBlock:
  // a stack put on it, cut with the right tool - knives, axes, pickaxes, shovels, shears - into its results; a tool
  // carved into it when sneaking)
  (function () {
    const FD = self.FD;
    if (!FD) return;
    const F = FD.F,
      L = FD.L;
    const B = k => BID[k];
    const drawn = [];

    // ---- the campfire's recipes (cooked on the stove and in the skillet) ----
    const CAMP = (RECIPE_DATA.cooking || []).filter(r => r[0] === 'campfire_cooking');
    const campRecipe = st => {
      if (!st) return null;
      for (const r of CAMP) if (itemIds(r[1]).includes(st.id)) return {
        res: r[2],
        xp: r[3],
        time: r[4] || 600
      };
      return null;
    };
    FD.campRecipe = campRecipe;

    // ---- drawing an item where a block holds it (as 匠魂's tables do) ----
    function drawItemAt(g, st, spot, x, y, z, light, env) {
      if (!st || !ITEMS[st.id]) return;
      const def = ITEMS[st.id],
        r = g.renderer,
        vim = r.itemModel && r.itemModel(st.id),
        b = def.block !== undefined ? BLOCKS[def.block] : null;
      const flat = vim ? vim.gen || !b && !vim.mesh : !b || def.flat || b.shape === SH_CROSS || b.shape === SH_TORCH || b.ladder || b.door;
      const m = M4.create(),
        D = Math.PI / 180,
        s = (spot.size || 16) / 16;
      M4.translate(m, x + spot.center[0] / 16, y + spot.center[1] / 16, z + spot.center[2] / 16);
      if (spot.y) M4.rotY(m, -spot.y * D);
      if (spot.x) M4.rotX(m, -spot.x * D);
      M4.scale(m, s, s, s);
      M4.translate(m, -0.5, -0.5, flat ? 0 : -0.5);
      g.drawItemModel(st.id, m, light, env, 'fixed', st);
    }
    FD.drawItemAt = drawItemAt;
    const FACE_DEG = {
      south: 0,
      west: 90,
      north: 180,
      east: 270
    };
    const DRAW = {};
    const beDraw = function (g, b, x, y, z, light, env) {
      const be = g.blockEntities.get(x + ',' + y + ',' + z);
      if (be && be.type === 'fd' && DRAW[b.key]) DRAW[b.key](g, b, be, x, y, z, light, env);
    };
    const addDraw = (k, f) => {
      if (B(k) === undefined) return;
      DRAW[k] = f;
      BLOCKS[B(k)].beDraw = beDraw;
      drawn.push(B(k));
    };

    // ---- the stove ----
    const STOVE = B('stove');
    function stoveUse(g, x, y, z) {
      if (g.net) return false;
      const p = g.player,
        held = p.inv.held,
        k = FD.ikey(held),
        lit = FD.st(g, x, y, z).lit === 'true',
        pos = [x + 0.5, y + 0.5, z + 0.5];
      if (lit) {
        const d = held && ITEMS[held.id];
        if (d && d.tool && d.tool.type === 'shovel') {
          FD.setProps(g, x, y, z, {
            lit: 'false'
          });
          Sound.ev('block.fire.extinguish', pos, 1, 1);
          g.damageHeld(1);
          return true;
        }
        if (k === 'water_bucket') {
          FD.setProps(g, x, y, z, {
            lit: 'false'
          });
          Sound.ev('block.fire.extinguish', pos, 1, 1);
          if (g.mode !== 'creative') p.inv.slots[p.inv.sel] = makeStack('bucket');
          return true;
        }
      } else {
        if (k === 'flint_and_steel') {
          FD.setProps(g, x, y, z, {
            lit: 'true'
          });
          Sound.ev('item.flintandsteel.use', pos, 1, 0.8 + Math.random() * 0.4);
          g.damageHeld(1);
          return true;
        }
        if (k === 'fire_charge') {
          FD.setProps(g, x, y, z, {
            lit: 'true'
          });
          Sound.ev('item.firecharge.use', pos, 1, 1);
          FD.useUp(g);
          return true;
        }
      }
      // food on top (not under a block that covers it - isStoveTopCovered: a full block or a cooking pot / skillet sits there)
      const rec = campRecipe(held);
      if (!rec) return false;
      const above = g.world.getBlock(x, y + 1, z);
      if (SOLIDCUBE[above] || FD.inB('farmersdelight:heat_conductors', above) || above === B('cooking_pot') || above === B('skillet')) return false;
      const be = FD.beAt(g, x, y, z, 'stove');
      for (let i = 0; i < 6; i++) if (!be.slots[i]) {
        be.slots[i] = {
          ...held,
          count: 1
        };
        be.cook = be.cook || [];
        be.time = be.time || [];
        be.cook[i] = 0;
        be.time[i] = rec.time;
        FD.useUp(g);
        FD.vsound('block.lantern.place', pos, 0.5, 1);
        FD.mark(g, be);
        return true;
      }
      return false;
    }
    if (STOVE !== undefined) BLOCKS[STOVE].onUse = stoveUse;
    const STOVE_OFF = [[0.3, 0.2], [0, 0.2], [-0.3, 0.2], [0.3, -0.2], [0, -0.2], [-0.3, -0.2]];
    addDraw('stove', (g, b, be, x, y, z, light, env) => {
      const f = FD.st(g, x, y, z).facing || 'north',
        a = (FACE_DEG[f] || 0) * Math.PI / 180;
      be.slots.forEach((st, i) => {
        if (!st) return;
        let [ox, oz] = STOVE_OFF[i];
        if (f === 'east' || f === 'west') [ox, oz] = [oz, ox];
        const rx = ox * Math.cos(a) - oz * Math.sin(a),
          rz = ox * Math.sin(a) + oz * Math.cos(a);
        drawItemAt(g, st, {
          center: [8 + rx * 16, 16.3, 8 + rz * 16],
          x: 90,
          y: FACE_DEG[f],
          size: 6
        }, x, y, z, light, env);
      });
    });
    function stoveTick(g, be) {
      const [x, y, z] = be.pos;
      if (g.world.getBlock(x, y, z) !== STOVE) return;
      const lit = FD.st(g, x, y, z).lit === 'true';
      let ch = false;
      for (let i = 0; i < 6; i++) {
        const st = be.slots[i];
        if (!st) continue;
        be.cook = be.cook || [];
        be.time = be.time || [];
        if (!lit) {
          if (be.cook[i] > 0) be.cook[i] = Math.max(0, be.cook[i] - 2);
          continue;
        }
        if (++be.cook[i] < (be.time[i] || 600)) continue;
        const rec = campRecipe(st);
        be.slots[i] = null;
        be.cook[i] = 0;
        ch = true;
        if (rec) g.dropItem(x + 0.5, y + 1.2, z + 0.5, makeStack(rec.res, 1), [0, 0.05, 0]);
      }
      if (lit && Math.random() < 0.05) {
        const f = FD.st(g, x, y, z).facing || 'north',
          d = FD.DIR[f],
          o = Math.random() * 0.6 - 0.3;
        const px = x + 0.5 + (d[0] ? d[0] * 0.52 : o),
          pz = z + 0.5 + (d[1] ? d[1] * 0.52 : o),
          py = y + Math.random() * 6 / 16;
        g.particles.spawn('smoke', px, py, pz, 0, 0, 0);
        g.particles.spawn('flame', px, py, pz, 0, 0, 0);
        if (Math.random() < 0.1 * 20 / 20) FD.sound('block.stove.crackle', [x + 0.5, y, z + 0.5]);
        if (be.slots.some(Boolean)) g.particles.spawn('smoke', x + 0.5 + (Math.random() - 0.5) * 0.6, y + 1.1, z + 0.5 + (Math.random() - 0.5) * 0.6, 0, 0.04, 0);
      }
      if (ch) FD.mark(g, be);
    }

    // ---- the cooking pot ----
    const POT = B('cooking_pot');
    const REMAINDER = {
      powder_snow_bucket: 'bucket',
      axolotl_bucket: 'bucket',
      cod_bucket: 'bucket',
      pufferfish_bucket: 'bucket',
      salmon_bucket: 'bucket',
      tropical_fish_bucket: 'bucket',
      suspicious_stew: 'bowl',
      mushroom_stew: 'bowl',
      rabbit_stew: 'bowl',
      beetroot_soup: 'bowl',
      potion: 'glass_bottle',
      splash_potion: 'glass_bottle',
      lingering_potion: 'glass_bottle',
      experience_bottle: 'glass_bottle',
      milk_bucket: 'bucket',
      water_bucket: 'bucket',
      honey_bottle: 'glass_bottle',
      dragon_breath: 'glass_bottle'
    };
    for (const [k, info] of Object.entries(F.items)) if (info.leftover && (info.drink || k === 'tomato_sauce')) REMAINDER[k] = info.leftover;
    const ingIds = ing => Array.isArray(ing) ? itemIds(ing) : itemIds(ing);
    // a recipe whose ingredients match the six slots one to one (RecipeMatcher)
    function potRecipe(slots) {
      const items = slots.slice(0, 6).filter(Boolean);
      if (!items.length) return null;
      for (const r of F.cooking) {
        if (r.ing.length !== items.length) continue;
        const sets = r.cache || (r.cache = r.ing.map(ingIds));
        const used = new Array(items.length).fill(false);
        const fit = j => {
          if (j === sets.length) return true;
          for (let i = 0; i < items.length; i++) if (!used[i] && sets[j].includes(items[i].id)) {
            used[i] = true;
            if (fit(j + 1)) return true;
            used[i] = false;
          }
          return false;
        };
        if (fit(0)) return r;
      }
      return null;
    }
    FD.potRecipe = potRecipe;
    const potBE = (g, x, y, z) => {
      const be = FD.beAt(g, x, y, z, 'pot');
      be.slots.length = Math.max(be.slots.length, 8);
      return be;
    };
    // (slots: 0-5 ingredients, 6 the container, 7 the output; be.meal the meal waiting for its container)
    const mealCont = be => be.cont || FD.containerOf(FD.ikey(be.meal));
    function potTick(g, be) {
      const [x, y, z] = be.pos;
      if (g.world.getBlock(x, y, z) !== POT) return;
      const heated = FD.heated(g, x, y, z);
      let ch = false;
      const r = heated ? potRecipe(be.slots) : null;
      const can = r && (!be.meal || FD.ikey(be.meal) === r.res[0] && be.meal.count + r.res[1] <= 64);
      if (can) {
        be.total = r.time;
        be.cook = (be.cook || 0) + 1;
        if (be.cook >= r.time) {
          be.cook = 0;
          if (be.meal) be.meal.count += r.res[1];else be.meal = makeStack(r.res[0], r.res[1]);
          be.cont = r.cont || null;
          be.xp = (be.xp || 0) + (r.xp || 0);
          const f = FD.st(g, x, y, z).facing || 'north',
            d = FD.DIR[FD.CCW[f]];
          for (let i = 0; i < 6; i++) {
            const st = be.slots[i];
            if (!st) continue;
            const left = REMAINDER[FD.ikey(st)];
            if (left) g.dropItem(x + 0.5 + d[0] * 0.25, y + 0.7, z + 0.5 + d[1] * 0.25, makeStack(left), [d[0] * 0.08, 0.25, d[1] * 0.08]);
            st.count--;
            if (st.count <= 0) be.slots[i] = null;
          }
          ch = true;
        }
      } else if (be.cook > 0) be.cook = Math.max(0, be.cook - 2);
      // the meal: without a container straight to the output; with one, served into the containers put in
      if (be.meal) {
        const cont = mealCont(be),
          out = be.slots[7];
        const room = n => !out || out.id === be.meal.id && out.count + n <= maxStack(out.id);
        if (!cont) {
          const n = out ? Math.min(be.meal.count, maxStack(out.id) - out.count) : be.meal.count;
          if (n > 0 && room(n)) {
            if (out) out.count += n;else be.slots[7] = {
              ...be.meal,
              count: n
            };
            be.meal.count -= n;
            ch = true;
          }
        } else if (be.slots[6] && FD.ikey(be.slots[6]) === cont && room(1)) {
          const n = Math.min(be.meal.count, be.slots[6].count, out ? maxStack(out.id) - out.count : 64);
          if (n > 0) {
            if (out) out.count += n;else be.slots[7] = {
              ...be.meal,
              count: n
            };
            be.meal.count -= n;
            be.slots[6].count -= n;
            if (!be.slots[6].count) be.slots[6] = null;
            ch = true;
          }
        }
        if (be.meal && be.meal.count <= 0) {
          be.meal = null;
          be.cont = null;
        }
      }
      if (heated) {
        if (Math.random() < 0.2) FD.particle(g, 'bubble_pop', x + 0.5 + Math.random() * 0.6 - 0.3, y + 0.7, z + 0.5 + Math.random() * 0.6 - 0.3, 0, 0, 0);
        if (Math.random() < 0.05) FD.particle(g, 'steam', x + 0.5 + Math.random() * 0.4 - 0.2, y + 0.5, z + 0.5 + Math.random() * 0.4 - 0.2, 0, Math.random() < 0.5 ? 0.015 : 0.005, 0);
        if (Math.random() < 0.005) FD.sound(be.meal ? 'block.cooking_pot.boil_soup' : 'block.cooking_pot.boil', [x + 0.5, y, z + 0.5], 0.5, Math.random() * 0.2 + 0.9);
      }
      if (ch) FD.mark(g, be);
    }
    const img = n => {
      const im = new Image();
      im.src = 'mods/farmersdelight/gui/' + n;
      return im;
    };
    const GUI = {
      pot: img('cooking_pot.png')
    };
    const ready = im => im.complete && im.naturalWidth;
    class CookingPotScreen extends ContainerScreen {
      constructor(game, be, title) {
        super(game, null, 176, 166, title);
        this.be = be;
        for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
          const i = r * 3 + c;
          this.slots.push({
            x: 30 + c * 18,
            y: 17 + r * 18,
            group: 'container',
            get: () => be.slots[i] || null,
            set: s => {
              be.slots[i] = s;
            }
          });
        }
        this.slots.push({
          x: 92,
          y: 55,
          group: 'container',
          get: () => be.slots[6] || null,
          set: s => {
            be.slots[6] = s;
          }
        });
        this.slots.push({
          x: 124,
          y: 55,
          output: true,
          get: () => be.slots[7] || null,
          set: () => {},
          onTake: () => {
            be.slots[7] = null;
            this.xp();
          }
        });
        this.addPlayerSlots(84, 142);
      }
      xp() {
        const be = this.be;
        if (be.xp >= 1 || be.xp > 0 && Math.random() < be.xp) {
          const n = Math.max(1, Math.floor(be.xp));
          this.game.dropXp(this.game.player.pos[0], this.game.player.pos[1] + 0.5, this.game.player.pos[2], n);
        }
        be.xp = 0;
      }
      owns(be) {
        return be === this.be;
      }
      drawBase(ui) {
        ui.dim(0.6);
        const c = ui.ctx,
          im = GUI.pot,
          x0 = this.x,
          y0 = this.y,
          be = this.be;
        if (ready(im)) c.drawImage(im, 0, 0, 176, 166, x0, y0, 176, 166);
        Font.draw(c, this.title, x0 + 28, y0 + 6, '#404040', false);
        Font.draw(c, '物品栏', x0 + 8, y0 + 73, '#404040', false);
        const [x, y, z] = be.pos;
        if (FD.heated(this.game, x, y, z) && ready(im)) c.drawImage(im, 176, 0, 17, 15, x0 + 47, y0 + 55, 17, 15);
        if (be.total && be.cook && ready(im)) {
          const l = Math.floor(be.cook * 24 / be.total);
          c.drawImage(im, 176, 15, l + 1, 17, x0 + 89, y0 + 25, l + 1, 17);
        }
        if (be.meal) ui.drawItem(be.meal, x0 + 124, y0 + 26);
      }
      draw(ui) {
        super.draw(ui);
        this.drawTips(ui);
      }
      // (the meal waiting and the heat's tooltips - book.js draws the screen with its recipe book, then these)
      drawTips(ui) {
        if (ui.cursor) return;
        const x0 = this.x,
          y0 = this.y,
          be = this.be,
          m = ui.mouse;
        if (be.meal && ui.hit({
          x: x0 + 123,
          y: y0 + 25,
          w: 18,
          h: 18
        })) {
          const cont = mealCont(be),
            lines = [{
              text: L('container.farmersdelight.cooking_pot.served_on', '盛装在：%s').replace('%s', cont && ITEMS[ITEM_KEY[cont]] ? ITEMS[ITEM_KEY[cont]].cn : '-'),
              color: '#AAAAAA'
            }];
          ui.tooltip([{
            text: (ITEMS[be.meal.id] || {}).cn + ' x' + be.meal.count,
            color: '#FFFFFF'
          }, ...lines], m.x, m.y);
        } else if (ui.hit({
          x: x0 + 47,
          y: y0 + 55,
          w: 17,
          h: 15
        })) {
          const [x, y, z] = be.pos;
          ui.tooltip([{
            text: FD.heated(this.game, x, y, z) ? L('container.farmersdelight.cooking_pot.heated', '已加热') : L('container.farmersdelight.cooking_pot.not_heated', '未加热'),
            color: '#FFFFFF'
          }], m.x, m.y);
        }
      }
      close() {
        FD.mark(this.game, this.be);
      }
    }
    FD.CookingPotScreen = CookingPotScreen;
    if (POT !== undefined) BLOCKS[POT].onUse = function (g, x, y, z) {
      if (g.net) return false;
      const be = potBE(g, x, y, z),
        held = g.player.inv.held,
        cont = be.meal && mealCont(be);
      // the meal served straight into the container in hand (useHeldItemOnMeal)
      if (be.meal && cont && FD.ikey(held) === cont) {
        FD.useUp(g);
        FD.give(g, {
          ...be.meal,
          count: 1
        });
        be.meal.count--;
        if (be.meal.count <= 0) {
          be.meal = null;
          be.cont = null;
        }
        FD.sound('block.food.take_portion', [x + 0.5, y + 0.5, z + 0.5]);
        FD.mark(g, be);
        return true;
      }
      g.ui.open(new CookingPotScreen(g, be, L('container.farmersdelight.cooking_pot', BLOCKS[POT].cn)));
      return true;
    };
    // sneaking with an empty hand: its handle up or down (the tray / handle support)
    const usePot = Game.prototype.use;
    Game.prototype.use = function () {
      const t = this.target,
        p = this.player;
      if (t && p.sneaking && !p.inv.held && t.id === POT && !this.net) {
        const [x, y, z] = t.pos,
          s = FD.st(this, x, y, z).support;
        FD.setProps(this, x, y, z, {
          support: s === 'handle' ? FD.inB('farmersdelight:tray_heat_sources', this.world.getBlock(x, y - 1, z)) ? 'tray' : 'none' : 'handle'
        });
        FD.vsound('block.lantern.place', [x + 0.5, y + 0.5, z + 0.5], 0.7, 1);
        p.swing();
        this.useCd = 4;
        return;
      }
      if (t && p.sneaking && !p.inv.held && t.id === B('cutting_board') && !this.net) {
        if (boardTake(this, ...t.pos)) {
          p.swing();
          this.useCd = 4;
          return;
        }
      }
      if (t && p.sneaking && t.id === B('cutting_board') && !this.net && boardCarve(this, ...t.pos)) {
        p.swing();
        this.useCd = 4;
        return;
      }
      return usePot.call(this);
    };
    // placed (getStateForPlacement): the stove lit (AbstractStoveBlock), the pot hung by its handle from a block's
    // underside, else a tray over tray heat sources (CookingPotBlock), the skillet's tray likewise (SkilletBlock). The
    // engine started from the first state - an unlit stove, a pot always on its handle (11-13)
    const kps = Game.prototype.placeState;
    Game.prototype.placeState = function (b, t, hdir, x, y, z) {
      let m = kps.call(this, b, t, hdir, x, y, z);
      const W = Features.withProp,
        heat = () => y !== undefined && FD.inB('farmersdelight:tray_heat_sources', this.world.getBlock(x, y - 1, z));
      if (b.id === STOVE) m = W(b.id, m, 'lit', 'true');else if (b.id === POT) m = W(b.id, m, 'support', t && t.face === 2 ? 'handle' : heat() ? 'tray' : 'none');else if (SK !== undefined && b.id === SK) m = W(b.id, m, 'support', heat() ? 'true' : 'false');
      return m;
    };
    // (its support from the block below when placed or when that changes: a tray over tray heat sources; hung from a block's underside, the handle)
    const obc = Game.prototype.onBlockChanged;
    Game.prototype.onBlockChanged = function (x, y, z, old, id, oldMeta) {
      obc.call(this, x, y, z, old, id, oldMeta);
      if (this.net || POT === undefined) return;
      const fix = (px, py, pz) => {
        if (this.world.getBlock(px, py, pz) !== POT || FD.st(this, px, py, pz).support === 'handle') return;
        const want = FD.inB('farmersdelight:tray_heat_sources', this.world.getBlock(px, py - 1, pz)) ? 'tray' : 'none';
        if (FD.st(this, px, py, pz).support !== want) FD.setProps(this, px, py, pz, {
          support: want
        });
      };
      if (id === POT && old !== POT) {
        const t = this.target;
        if (t && t.face === 2 && t.pos[1] === y + 1) FD.setProps(this, x, y, z, {
          support: 'handle'
        });else fix(x, y, z);
      } else fix(x, y + 1, z);
    };
    // (broken, it keeps its meal: the pot dropped with it - CookingPotItem - and the rest of what it held)
    const dbl = Game.prototype.dropBlockLoot;
    Game.prototype.dropBlockLoot = function (x, y, z, id, meta, held) {
      if (id === POT && !this.net) {
        const be = this.blockEntities.get(x + ',' + y + ',' + z);
        if (be && be.type === 'fd' && be.meal) {
          const st = makeStack('cooking_pot');
          st.fdMeal = {
            ...be.meal
          };
          if (be.cont) st.fdCont = be.cont;
          this.dropItem(x + 0.5, y + 0.5, z + 0.5, st);
          be.meal = null;
          if (be.xp >= 1) this.dropXp(x + 0.5, y + 0.5, z + 0.5, Math.floor(be.xp));
          return;
        }
      }
      return dbl.call(this, x, y, z, id, meta, held);
    };
    const pa = Game.prototype.placeAt;
    Game.prototype.placeAt = function (x, y, z, id, meta, held, merge) {
      const r = pa.call(this, x, y, z, id, meta, held, merge);
      if (id === POT && held && held.fdMeal && this.world.getBlock(x, y, z) === POT) {
        const be = potBE(this, x, y, z);
        be.meal = {
          ...held.fdMeal
        };
        be.cont = held.fdCont || null;
      }
      return r;
    };
    if (typeof UI !== 'undefined' && UI.prototype.itemLines) {
      const il = UI.prototype.itemLines;
      UI.prototype.itemLines = function (st) {
        const lines = il.call(this, st);
        if (st && st.fdMeal && ITEMS[st.fdMeal.id]) lines.push({
          text: L(st.fdMeal.count > 1 ? 'tooltip.farmersdelight.cooking_pot.many_servings' : 'tooltip.farmersdelight.cooking_pot.single_serving', '装有%s份：').replace('%s', st.fdMeal.count) + ' ' + ITEMS[st.fdMeal.id].cn,
          color: '#AAAAAA'
        });else if (FD.ikey(st) === 'cooking_pot') lines.push({
          text: L('tooltip.farmersdelight.cooking_pot.empty', '空'),
          color: '#AAAAAA'
        });
        return lines;
      };
    }

    // ---- the skillet (block): a stack on it, cooked one at a time on heat (a fifth of the campfire's time) ----
    const SK = B('skillet');
    // (SkilletBlock.getSkilletCookingTime: a fifth of the campfire's whole seconds, 5 % less a level of fire aspect, at
    // least 60 ticks; the skillet placed keeps its stack - enchantments, wear, name - SkilletBlockEntity.skilletStack)
    const skTime = (t, fa = 0) => {
      const r = Math.floor(Math.floor((t > 0 ? t : 600) / 20) * (0.2 - fa * 0.05)) * 20;
      return r < 60 ? 60 : Math.min(r, t);
    };
    const skFire = st => st && typeof enchLevel === 'function' ? enchLevel(st, 'fire_aspect') : 0;
    if (SK !== undefined) BLOCKS[SK].onUse = function (g, x, y, z) {
      if (g.net) return false;
      const be = FD.beAt(g, x, y, z, 'skillet'),
        p = g.player,
        held = p.inv.held;
      if (!held) {
        if (be.slots[0]) {
          const s = be.slots[0];
          be.slots[0] = null;
          if (g.mode !== 'creative') p.inv.slots[p.inv.sel] = s;
          FD.mark(g, be);
          return true;
        }
        return false;
      }
      if (be.slots[0]) return false;
      const rec = campRecipe(held);
      if (!rec) return false;
      if (g.world.isWaterlogged && g.world.isWaterlogged(x, y, z)) {
        g.ui.actionBar = {
          text: L('block.farmersdelight.skillet.underwater', '平底锅在水下无法烹饪'),
          t: performance.now()
        };
        return true;
      }
      be.slots[0] = {
        ...held
      };
      be.cook = 0;
      be.total = skTime(rec.time, skFire(be.skillet));
      if (g.mode !== 'creative') p.inv.slots[p.inv.sel] = null;
      FD.vsound('block.lantern.place', [x + 0.5, y + 0.5, z + 0.5], 0.7, 1);
      if (FD.heated(g, x, y, z)) FD.sound('block.skillet.add_food', [x + 0.5, y + 0.5, z + 0.5], 0.8, 1);
      FD.mark(g, be);
      return true;
    };
    function skilletTick(g, be) {
      const [x, y, z] = be.pos;
      if (g.world.getBlock(x, y, z) !== SK) return;
      const st = be.slots[0];
      if (!st) return;
      if (!FD.heated(g, x, y, z)) {
        if (be.cook > 0) be.cook = Math.max(0, be.cook - 2);
        return;
      }
      if (Math.random() < 0.2) FD.particle(g, 'steam', x + 0.5 + Math.random() * 0.4 - 0.2, y + 0.1, z + 0.5 + Math.random() * 0.4 - 0.2, 0, Math.random() < 0.5 ? 0.015 : 0.005, 0);
      const fa = skFire(be.skillet);
      if (fa > 0 && Math.random() < fa * 0.05) FD.particle(g, 'enchanted_hit', x + 0.5 + Math.random() * 0.4 - 0.2, y + 0.1, z + 0.5 + Math.random() * 0.4 - 0.2, Math.random() - 0.5, Math.random() * 0.5 + 0.2, Math.random() - 0.5);
      if (Math.random() < 0.01) FD.sound('block.skillet.sizzle', [x + 0.5, y, z + 0.5], 0.4, Math.random() * 0.2 + 0.9);
      if (++be.cook < (be.total || 120)) return;
      const rec = campRecipe(st);
      be.cook = 0;
      if (rec) {
        const f = FD.st(g, x, y, z).facing || 'north',
          d = FD.DIR[FD.CCW[f]];
        g.dropItem(x + 0.5, y + 0.3, z + 0.5, makeStack(rec.res, 1), [d[0] * 0.08, 0.25, d[1] * 0.08]);
      }
      st.count--;
      if (st.count <= 0) be.slots[0] = null;
      FD.mark(g, be);
    }
    addDraw('skillet', (g, b, be, x, y, z, light, env) => {
      const st = be.slots[0];
      if (!st) return;
      const f = FD.st(g, x, y, z).facing || 'north';
      for (let i = 0; i < Math.min(3, Math.ceil(st.count / 16)); i++) drawItemAt(g, st, {
        center: [8, 1.2 + i * 0.6, 8],
        x: 90,
        y: FACE_DEG[f] + i * 20,
        size: 9
      }, x, y, z, light, env);
    });
    if (SK !== undefined) {
      const pa = Game.prototype.placeAt;
      Game.prototype.placeAt = function (x, y, z, id, meta, held, merge) {
        const snap = id === SK && held && FD.ikey(held) === 'skillet' ? {
          ...held,
          count: 1
        } : null;
        const r = pa.call(this, x, y, z, id, meta, held, merge);
        if (snap && !this.net && this.world.getBlock(x, y, z) === SK) {
          delete snap.fdCook;
          delete snap.fdCookT;
          FD.beAt(this, x, y, z, 'skillet').skillet = snap;
        }
        return r;
      };
      const dbl = Game.prototype.dropBlockLoot;
      Game.prototype.dropBlockLoot = function (x, y, z, id, meta, held) {
        if (id === SK && !this.net) {
          const be = this.blockEntities.get(x + ',' + y + ',' + z);
          if (be && be.type === 'fd' && be.skillet) {
            this.dropItem(x + 0.5, y + 0.5, z + 0.5, {
              ...be.skillet
            });
            be.skillet = null;
            return;
          }
        }
        return dbl.call(this, x, y, z, id, meta, held);
      };
    }
    const atk = Game.prototype.attack;
    Game.prototype.attack = function (e) {
      const p = this.player,
        held = p.inv.held,
        k = FD.ikey(held);
      if (k !== 'skillet' && !FD.isKnife(held)) return atk.call(this, e);
      const str = this.attackStrength(),
        hp = e.health,
        dh = this.damageHeld,
        e0 = held.e;
      this.damageHeld = n => dh.call(this, Math.min(n, 1));
      // (the attack_knockback +1: as a level of knockback more for this one hit)
      if (k === 'skillet') {
        const l = (e0 || []).map(x => x.slice()),
          kb = l.find(x => x[0] === 'knockback');
        if (kb) kb[1]++;else l.push(['knockback', 1]);
        held.e = l;
      }
      try {
        atk.call(this, e);
      } finally {
        this.damageHeld = dh;
        if (k === 'skillet') {
          if (e0 === undefined) delete held.e;else held.e = e0;
        }
      }
      if (k === 'skillet' && (e.health < hp || e.dead)) {
        if (str > 0.8) FD.sound('item.skillet.attack.strong', p.pos, 1, 0.9 + Math.random() * 0.2);else FD.sound('item.skillet.attack.weak', p.pos, 0.8, 0.9);
      }
    };
    // (held: food in the other hand cooked over a heat source near the feet, the use held - SkilletItem)
    const nearHeat = g => {
      const p = g.player,
        x = Math.floor(p.pos[0]),
        y = Math.floor(p.pos[1]),
        z = Math.floor(p.pos[2]);
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
        const id = g.world.getBlock(x + dx, y + dy, z + dz);
        if (FD.inB('farmersdelight:heat_sources', id) && FD.lit(g, x + dx, y + dy, z + dz)) return true;
      }
      return false;
    };
    // (SkilletItem.place: put down as a block only when sneaking - not sneaking, the use cooks whatever block is looked at,
    // a stove or the ground; by a heat source with nothing to cook in the other hand it says how, under water it cannot.
    // Before 11-11 it was put down instead, and looking at a stove did nothing)
    const ueq = Game.prototype.useEquipment;
    Game.prototype.useEquipment = function (held, def) {
      if (def && def.key === 'skillet' && !this.net && (!this.target || !this.player.sneaking)) {
        const p = this.player,
          off = p.inv.slots[40],
          rec = campRecipe(off);
        const say = (k, cn) => {
          this.ui.actionBar = {
            text: L(k, cn),
            t: performance.now()
          };
        };
        if (nearHeat(this)) {
          if (!rec) say('item.farmersdelight.skillet.how_to_cook', '用另一只手把食物拿好！');else if (p.eyeInWater) say('item.farmersdelight.skillet.underwater', '在水里可没法煎啊……');else {
            held.fdCook = {
              ...off,
              count: 1
            };
            held.fdCookT = skTime(rec.time, skFire(held));
            if (this.mode !== 'creative') {
              off.count--;
              if (!off.count) p.inv.slots[40] = null;
            }
            p.usingItem = held.id;
            p.useT = 0;
            p.useHand = 'main';
            FD.sound('block.skillet.add_food', p.pos, 0.4, 1);
            return true;
          }
        }
        if (this.target) return true; // (not put down)
      }
      return ueq.call(this, held, def);
    };
    const utk = Game.prototype.usingTick;
    Game.prototype.usingTick = function (held) {
      if (utk) utk.call(this, held);
      if (!held || !held.fdCook || FD.ikey(held) !== 'skillet') return;
      const p = this.player;
      if (p.useT % 20 === 0) FD.sound('block.skillet.sizzle', p.pos, 0.4, Math.random() * 0.2 + 0.9);
      if (p.useT >= held.fdCookT) {
        const rec = campRecipe(held.fdCook);
        if (rec) FD.give(this, makeStack(rec.res, 1));
        if (FD.trigger) FD.trigger(this, 'consume_item', c => JSON.stringify(c).includes('skillet'));
        delete held.fdCook;
        delete held.fdCookT;
        p.usingItem = null;
        p.useT = 0;
        p.useHand = null;
      }
    };
    const rlu = Game.prototype.releaseUsing;
    Game.prototype.releaseUsing = function (held) {
      if (held && held.fdCook && FD.ikey(held) === 'skillet') {
        FD.give(this, held.fdCook);
        delete held.fdCook;
        delete held.fdCookT;
        return;
      }
      return rlu ? rlu.call(this, held) : undefined;
    };

    // ---- the cutting board ----
    const BOARD = B('cutting_board');
    function cutRecipe(st, tool) {
      if (!st) return null;
      for (const r of F.cutting) {
        const ii = r.ii || (r.ii = itemIds(r.ing)),
          ti = r.ti || (r.ti = itemIds(r.tool));
        if (ii.includes(st.id) && tool && ti.includes(tool.id)) return r;
      }
      return null;
    }
    FD.cutRecipe = cutRecipe;
    const anyCut = st => !!st && F.cutting.some(r => (r.ii || (r.ii = itemIds(r.ing))).includes(st.id));
    function boardTake(g, x, y, z) {
      const be = g.blockEntities.get(x + ',' + y + ',' + z);
      if (!be || be.type !== 'fd' || !be.slots[0]) return false;
      const s = be.slots[0];
      be.slots[0] = null;
      be.carved = false;
      if (g.mode !== 'creative') FD.give(g, s);
      FD.sound('block.cutting_board.remove', [x + 0.5, y + 0.5, z + 0.5], 0.25, 0.5);
      FD.mark(g, be);
      return true;
    }
    function boardCarve(g, x, y, z) {
      // (sneaking with a tool: put on the board to show, not cut with)
      const be = FD.beAt(g, x, y, z, 'board'),
        held = g.player.inv.held,
        d = held && ITEMS[held.id];
      if (be.slots[0] || !held || !(d.tool || d.durability || FD.isKnife(held))) return false;
      be.slots[0] = {
        ...held
      };
      be.carved = true;
      if (g.mode !== 'creative') g.player.inv.slots[g.player.inv.sel] = null;
      FD.sound('block.cutting_board.carve_tool', [x + 0.5, y + 0.5, z + 0.5], 1, 0.8);
      FD.mark(g, be);
      return true;
    }
    if (BOARD !== undefined) BLOCKS[BOARD].onUse = function (g, x, y, z) {
      if (g.net) return false;
      const be = FD.beAt(g, x, y, z, 'board'),
        p = g.player,
        held = p.inv.held,
        pos = [x + 0.5, y + 0.5, z + 0.5];
      if (!held) return boardTake(g, x, y, z) || true;
      if (!be.slots[0]) {
        // (anything can be put on it - FD's canAddItem: the board empty)
        be.slots[0] = {
          ...held
        };
        be.carved = false;
        if (g.mode !== 'creative') p.inv.slots[p.inv.sel] = null;
        FD.sound('block.cutting_board.place', pos, 1, 0.8);
        FD.mark(g, be);
        return true;
      }
      if (be.carved) return true;
      const r = cutRecipe(be.slots[0], held);
      if (!r) {
        if (anyCut(be.slots[0])) g.ui.actionBar = {
          text: L('block.farmersdelight.cutting_board.invalid_tool', '这个工具切不了它'),
          t: performance.now()
        };
        return true;
      }
      const f = FD.st(g, x, y, z).facing || 'north',
        d = FD.DIR[FD.CCW[f]];
      for (const [k, n, ch] of r.out) if (Math.random() < (ch === undefined ? 1 : ch)) g.dropItem(x + 0.5 + d[0] * 0.2, y + 0.2, z + 0.5 + d[1] * 0.2, makeStack(k, n), [d[0] * 0.2, 0, d[1] * 0.2]);
      g.damageHeld(1);
      for (let i = 0; i < 5; i++) FD.particle(g, 'item', x + 0.5, y + 0.1, z + 0.5, (Math.random() - 0.5) * 0.15, Math.random() * 0.15, (Math.random() - 0.5) * 0.15, be.slots[0].id);
      const tk = FD.ikey(held);
      if (r.sound) Sound.ev(String(r.sound).replace(/^minecraft:/, '').replace(/^farmersdelight:/, 'farmersdelight:'), pos, 1, 1);else if (FD.isKnife(held)) FD.sound('block.cutting_board.knife_cut', pos, 0.8, 1);else if (ITEMS[held.id].tool && ITEMS[held.id].tool.type === 'axe') Sound.ev('item.axe.strip', pos, 1, 1);else if (tk === 'shears') Sound.ev('entity.sheep.shear', pos, 1, 1);else Sound.block('break', BLOCKS[BOARD].sound, pos);
      be.slots[0].count--;
      if (be.slots[0].count <= 0) be.slots[0] = null;
      g.ui.actionBar = {
        text: be.slots[0] ? L('block.farmersdelight.cutting_board.remaining_items', '剩余：%s').replace('%s', be.slots[0].count) : '',
        t: performance.now()
      };
      if (FD.trigger) FD.trigger(g, 'use_cutting_board');
      FD.mark(g, be);
      return true;
    };
    addDraw('cutting_board', (g, b, be, x, y, z, light, env) => {
      const st = be.slots[0];
      if (!st) return;
      const f = FD.st(g, x, y, z).facing || 'north',
        def = ITEMS[st.id];
      const block = def && def.block !== undefined && BLOCKS[def.block] && !FD.inI('farmersdelight:flat_on_cutting_board', st);
      if (be.carved) drawItemAt(g, st, {
        center: [8, 6, 8],
        x: 180,
        y: FACE_DEG[f] + 180,
        size: 10
      }, x, y, z, light, env);else if (block) drawItemAt(g, st, {
        center: [8, 1 + 4, 8],
        y: FACE_DEG[f],
        size: 8
      }, x, y, z, light, env);else drawItemAt(g, st, {
        center: [8, 1.3, 8],
        x: 90,
        y: FACE_DEG[f],
        size: 10
      }, x, y, z, light, env);
    });

    // ---- ticking, walking on a lit stove ----
    const tf = Game.prototype.tickFurnaces;
    Game.prototype.tickFurnaces = function () {
      tf.call(this);
      if (this.net) return;
      for (const be of this.blockEntities.values()) {
        if (be.type !== 'fd' || !this.world.isLoaded(be.pos[0], be.pos[2])) continue;
        if (be.kind === 'stove') stoveTick(this, be);else if (be.kind === 'pot') potTick(this, be);else if (be.kind === 'skillet') skilletTick(this, be);else if (FD.tickers && FD.tickers[be.kind]) FD.tickers[be.kind](this, be);
      }
      // (pots need a block entity before anything is put in them: heat, the meal)
      const p = this.player;
      if (p && p.onGround && !p.sneaking && STOVE !== undefined && !(p.effects && p.effects.has('fire_resistance'))) {
        const bx = Math.floor(p.pos[0]),
          by = Math.floor(p.pos[1] - 0.05),
          bz = Math.floor(p.pos[2]);
        if (this.world.getBlock(bx, by, bz) === STOVE && FD.st(this, bx, by, bz).lit === 'true' && this.mode !== 'creative' && this.mode !== 'spectator') p.hurt(1, {
          type: 'hot_floor'
        });
      }
    };
    FD.tickers = FD.tickers || {};
    if (typeof BE_IDS !== 'undefined') for (const id of drawn) if (!BE_IDS.includes(id)) BE_IDS.push(id);
  })();
})();
// ---- book.js ----
(function () {
  'use strict';

  // 农夫乐事 Farmer's Delight (vectorwing, MIT licence) - the cooking pot's recipe book (CookingPotScreen with its
  // CookingPotRecipeBookComponent, vanilla's RecipeBookComponent): the button left of the ingredients, the book beside the
  // pot (over it on a narrow screen, out of the way once a recipe is chosen - as the crafting table's here), its tabs
  // (all: compass; meals: vegetable noodles; drinks: apple cider; misc: dumplings, tomato sauce - the recipes'
  // recipe_book_tab, misc when none), the search, its own "only what can be cooked" button, pages; a recipe chosen puts
  // its ingredients from the inventory in the six slots (shift / a long press: as many as there are), or shows it as
  // a ghost - the meal where it shows, its container in the container slot - when they are not all there
  (function () {
    const FD = self.FD,
      F = self.FDEL;
    if (!FD || !F || !FD.CookingPotScreen) return;
    const L = FD.L,
      CPS = FD.CookingPotScreen,
      P = CPS.prototype;
    const img = n => {
      const im = new Image();
      im.src = 'mods/farmersdelight/gui/recipe_book/' + n + '.png';
      return im;
    };
    const FILTER = {
      on: img('cooking_pot_enabled'),
      off: img('cooking_pot_disabled'),
      onHl: img('cooking_pot_enabled_highlighted'),
      offHl: img('cooking_pot_disabled_highlighted')
    };
    const ready = im => im.complete && im.naturalWidth;
    const TABS = [['compass'], ['vegetable_noodles'], ['apple_cider'], ['dumplings', 'tomato_sauce']];
    const TAB_OF = {
      meals: 1,
      drinks: 2,
      misc: 3
    };
    const sets = r => r.cache || (r.cache = r.ing.map(i => itemIds(i)));
    // the items for each ingredient from what there is (a different stack for each, RecipeMatcher)
    function plan(r, avail) {
      const S = sets(r),
        used = new Map(),
        out = [];
      const fit = j => {
        if (j === S.length) return true;
        for (const id of S[j]) {
          if ((avail.get(id) || 0) - (used.get(id) || 0) < 1) continue;
          used.set(id, (used.get(id) || 0) + 1);
          out.push(id);
          if (fit(j + 1)) return true;
          used.set(id, used.get(id) - 1);
          out.pop();
        }
        return false;
      };
      return fit(0) ? out : null;
    }
    const count = (inv, extra) => {
      const m = new Map(),
        add = s => {
          if (s) m.set(s.id, (m.get(s.id) || 0) + s.count);
        };
      for (let i = 0; i < 36; i++) add(inv.slots[i]);
      if (extra) extra.forEach(add);
      return m;
    };
    const lay = P.layout;
    P.layout = function () {
      lay.call(this);
      const u = this.game.ui;
      this.narrow = u.w < 379;
      this.bookOpen = this.game.settings.fdPotBook === true;
      if (this.bookOpen && !this.narrow) this.x = 177 + Math.floor((u.w - this.gw - 200) / 2);
      if (!this.bookOpen || !this.narrow) this.peek = false;
      this.bookBtn = {
        x: 5,
        y: 34,
        w: 20,
        h: 18
      };
      this.page = this.page || 0;
      this.tab = this.tab || 0;
      this.search = this.search || '';
      if (!this.bookOpen && this.searching) {
        u.hideInput();
        this.searching = false;
      }
    };
    P.bookRecipes = function () {
      const avail = count(this.game.player.inv, this.be.slots.slice(0, 6)),
        q = this.search.trim().toLowerCase();
      const byResult = new Map();
      for (const r of F.cooking) {
        const id = ITEM_KEY[r.res[0]];
        if (id === undefined) continue;
        if (this.tab > 0 && (TAB_OF[r.tab] || 3) !== this.tab) continue;
        if (q && !String(ITEMS[id].cn || '').toLowerCase().includes(q) && !ITEMS[id].key.includes(q)) continue;
        const pl = plan(r, avail);
        let e = byResult.get(id);
        if (!e) byResult.set(id, e = {
          r,
          id,
          plan: pl,
          many: false
        });else {
          e.many = true;
          if (pl && !e.plan) {
            e.r = r;
            e.plan = pl;
          }
        }
      }
      let list = [...byResult.values()];
      if (this.onlyCookable) list = list.filter(e => e.plan);
      list.sort((a, b) => (b.plan ? 1 : 0) - (a.plan ? 1 : 0));
      return list;
    };
    P.bookList = function () {
      const inv = this.game.player.inv,
        sig = st => st ? st.id + ':' + st.count : '-';
      let key = this.tab + '|' + this.search + '|' + !!this.onlyCookable + '|';
      for (let i = 0; i < 36; i++) key += sig(inv.slots[i]) + ',';
      for (let i = 0; i < 6; i++) key += sig(this.be.slots[i]) + ',';
      if (key !== this.bookKey) {
        this.bookKey = key;
        this.bookCache = this.bookRecipes();
      }
      return this.bookCache;
    };
    // (vanilla's placeRecipe: the six slots back to the inventory first, then the ingredients one each - or as many as
    // every one of them has, up to a stack)
    P.fillRecipe = function (entry, max) {
      const g = this.game,
        inv = g.player.inv,
        ui = g.ui,
        be = this.be;
      for (let i = 0; i < 6; i++) if (be.slots[i]) {
        ui.returnStack(be.slots[i]);
        be.slots[i] = null;
      }
      const avail = count(inv),
        pl = plan(entry.r, avail);
      this.ghost = null;
      if (!pl) {
        this.ghost = {
          slots: sets(entry.r),
          result: entry.id,
          cont: ITEM_KEY[entry.r.cont || FD.containerOf(entry.r.res[0])],
          t: performance.now()
        };
        FD.mark(g, be);
        return;
      }
      const need = new Map();
      for (const id of pl) need.set(id, (need.get(id) || 0) + 1);
      let times = 1;
      if (max) {
        times = 64;
        for (const [id, k] of need) times = Math.min(times, Math.floor(avail.get(id) / k), maxStack(id));
        times = Math.max(1, times);
      }
      pl.forEach((id, i) => {
        const like = inv.slots.slice(0, 36).find(s => s && s.id === id);
        inv.remove(id, times);
        be.slots[i] = {
          ...(like || {}),
          id,
          count: times
        };
      });
      FD.mark(g, be);
      Sound.click();
    };
    P.bookLayout = function () {
      const u = this.game.ui;
      return {
        x: Math.floor((u.w - 147) / 2) - (this.narrow ? 0 : 86),
        y: Math.floor((u.h - 166) / 2),
        w: 147,
        h: 166
      };
    };
    P.drawBook = function (ui) {
      const c = ui.ctx,
        B = this.bookLayout();
      this.tabRects = [];
      TABS.forEach((ic, i) => {
        const sel = i === this.tab,
          x = B.x - 30 - (sel ? 2 : 0),
          y = B.y + 3 + i * 27;
        ui.sprite(sel ? 'rb_tab_selected' : 'rb_tab', x, y);
        this.tabRects.push({
          x,
          y,
          w: 35,
          h: 27
        });
        const ids = ic.map(k => ITEM_KEY[k]).filter(v => v !== undefined);
        ids.forEach((id, k) => ui.drawItem({
          id,
          count: 1
        }, x + 9 + (ids.length > 1 ? 3 * k - 2 : 0), y + 5 + (ids.length > 1 ? 3 * k - 1 : 0)));
      });
      c.drawImage(ui.img.recipe_book, 1, 1, 147, 166, B.x, B.y, 147, 166);
      this.searchRect = {
        x: B.x + 25,
        y: B.y + 13,
        w: 81,
        h: 14
      };
      if (!this.searching && !this.search) Font.draw(c, '搜索…', B.x + 27, B.y + 15, '#808080', false);else if (!this.searching) Font.draw(c, this.search, B.x + 27, B.y + 15, '#E0E0E0', false);
      this.filterBtn = {
        x: B.x + 110,
        y: B.y + 12,
        w: 26,
        h: 16
      };
      const hl = ui.hit(this.filterBtn),
        fim = this.onlyCookable ? hl ? FILTER.onHl : FILTER.on : hl ? FILTER.offHl : FILTER.off;
      if (ready(fim)) c.drawImage(fim, this.filterBtn.x, this.filterBtn.y);
      const list = this.bookList(),
        per = 20,
        pages = Math.max(1, Math.ceil(list.length / per));
      this.page = clamp(this.page, 0, pages - 1);
      this.bookCells = [];
      let hover = null;
      list.slice(this.page * per, this.page * per + per).forEach((e, i) => {
        const x = B.x + 11 + i % 5 * 25,
          y = B.y + 31 + Math.floor(i / 5) * 25,
          cell = {
            x,
            y,
            w: 25,
            h: 25,
            e
          };
        this.bookCells.push(cell);
        ui.sprite('rb_slot_' + (e.many ? 'many_' : '') + (e.plan ? 'craftable' : 'uncraftable'), x, y);
        ui.drawItem({
          id: e.id,
          count: e.r.res[1] || 1
        }, x + 4, y + 4);
        if (ui.hit(cell)) hover = e;
      });
      this.prevBtn = {
        x: B.x + 38,
        y: B.y + 137,
        w: 12,
        h: 17
      };
      this.nextBtn = {
        x: B.x + 93,
        y: B.y + 137,
        w: 12,
        h: 17
      };
      if (pages > 1) {
        const t = this.page + 1 + '/' + pages;
        Font.draw(c, t, B.x + 73 - Math.floor(Font.width(t) / 2), B.y + 141, '#FFFFFF', false);
        if (this.page > 0) ui.sprite('rb_page_backward' + (ui.hit(this.prevBtn) ? '_hl' : ''), this.prevBtn.x, this.prevBtn.y);
        if (this.page < pages - 1) ui.sprite('rb_page_forward' + (ui.hit(this.nextBtn) ? '_hl' : ''), this.nextBtn.x, this.nextBtn.y);
      }
      this.bookTip = null;
      if (ui.cursor) return;
      if (hl) this.bookTip = [{
        text: this.onlyCookable ? '显示全部' : L('container.farmersdelight.recipe_book.cookable', '仅显示可烹饪')
      }];else if (hover) this.bookTip = ui.itemLines({
        id: hover.id,
        count: hover.r.res[1] || 1
      });
    };
    // (red ghosts of a recipe not all there - in the ingredient slots, the meal's place and the container slot; gone once
    // something is put in)
    P.drawGhost = function (ui) {
      const g = this.ghost,
        be = this.be;
      if (!g) return;
      if (be.slots.slice(0, 6).some(Boolean)) {
        this.ghost = null;
        return;
      }
      const c = ui.ctx,
        cyc = Math.floor((performance.now() - g.t) / 1000);
      const one = (opts, x, y) => {
        if (!opts || !opts.length) return;
        const id = opts[cyc % opts.length];
        c.fillStyle = 'rgba(255,0,0,0.19)';
        c.fillRect(this.x + x, this.y + y, 16, 16);
        c.globalAlpha = 0.5;
        ui.drawItem({
          id,
          count: 1
        }, this.x + x, this.y + y);
        c.globalAlpha = 1;
      };
      g.slots.forEach((opts, i) => one(opts, 30 + i % 3 * 18, 17 + Math.floor(i / 3) * 18));
      if (!be.meal) one([g.result], 124, 26);
      if (g.cont !== undefined && !be.slots[6]) one([g.cont], 92, 55);
    };
    P.draw = function (ui) {
      const b = this.bookBtn || {
          x: 5,
          y: 34,
          w: 20,
          h: 18
        },
        r = {
          x: this.x + b.x,
          y: this.y + b.y,
          w: b.w,
          h: b.h
        };
      const btn = () => ui.sprite(ui.hit(r) ? 'rb_button_hl' : 'rb_button', r.x, r.y);
      if (this.bookOpen && this.narrow && !this.peek) {
        ui.dim(0.6);
        this.drawBook(ui);
        btn();
        if (this.bookTip) ui.tooltip(this.bookTip, ui.mouse.x, ui.mouse.y);
        return;
      }
      this.drawBase(ui);
      if (this.bookOpen && !this.peek) this.drawBook(ui);else this.bookTip = null;
      btn();
      this.drawGhost(ui);
      this.drawSlots(ui);
      this.drawTips(ui);
      if (this.bookTip) ui.tooltip(this.bookTip, ui.mouse.x, ui.mouse.y);
    };
    P.mouseDown = function (ui, mx, my, button, shift) {
      const b = this.bookBtn || {
        x: 5,
        y: 34,
        w: 20,
        h: 18
      };
      if (ui.hit({
        x: this.x + b.x,
        y: this.y + b.y,
        w: b.w,
        h: b.h
      }, mx, my)) {
        if (this.peek) {
          this.peek = false;
          Sound.click();
          return;
        }
        this.game.settings.fdPotBook = !this.bookOpen;
        this.game.saveSettings();
        this.layout();
        Sound.click();
        return;
      }
      if (this.bookOpen && !this.peek) {
        const none = {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        };
        if (ui.hit(this.filterBtn || none, mx, my)) {
          this.onlyCookable = !this.onlyCookable;
          this.page = 0;
          Sound.click();
          return;
        }
        if (ui.hit(this.prevBtn || none, mx, my)) {
          this.page--;
          Sound.click();
          return;
        }
        if (ui.hit(this.nextBtn || none, mx, my)) {
          this.page++;
          Sound.click();
          return;
        }
        for (let i = 0; i < (this.tabRects || []).length; i++) if (ui.hit(this.tabRects[i], mx, my)) {
          this.tab = i;
          this.page = 0;
          Sound.click();
          return;
        }
        if (ui.hit(this.searchRect || none, mx, my)) {
          const sr = this.searchRect;
          this.searching = true;
          ui.showInput(sr.x, sr.y, sr.w, sr.h, this.search, () => {}, {
            onInput: v => {
              this.search = v;
              this.page = 0;
              this.tab = 0;
            },
            onEsc: () => {
              ui.hideInput();
              this.searching = false;
            },
            max: 30
          });
          return;
        }
        if (this.searching) {
          ui.hideInput();
          this.searching = false;
        }
        for (const c of this.bookCells || []) if (ui.hit(c, mx, my)) {
          if (!ui.cursor) {
            this.fillRecipe(c.e, shift || button === 2);
            if (this.narrow) this.peek = true;
          }
          return;
        }
        if (ui.hit(this.bookLayout(), mx, my) || this.narrow) return;
      }
      ContainerScreen.prototype.mouseDown.call(this, ui, mx, my, button, shift);
    };
    P.wheel = function (ui, dy) {
      if (this.bookOpen && !this.peek && ui.hit(this.bookLayout())) this.page += Math.sign(dy);
    };
    // (touch: a finger dragged from the open book turns its pages; from a slot it carries the stack - #B1, as the crafting table)
    P.scrollsAt = function (x, y) {
      return !!this.bookOpen && !this.peek && this.game.ui.hit(this.bookLayout(), x, y);
    };
    P.outside = function (mx, my) {
      return ContainerScreen.prototype.outside.call(this, mx, my) && !(this.bookOpen && !this.peek && this.game.ui.hit(this.bookLayout(), mx, my));
    };
    const cl = P.close;
    P.close = function () {
      if (this.searching) {
        this.game.ui.hideInput();
        this.searching = false;
      }
      this.ghost = null;
      if (cl) cl.call(this);
    };
  })();
})();
// ---- storage.js ----
(function () {
  'use strict';

  // 农夫乐事 Farmer's Delight (vectorwing, MIT licence) - storage and building: cabinets (CabinetBlock: a barrel's 27
  // places, its door open while looked into, its own sounds), baskets (BasketBlock: 27 places, items that fall into its
  // opening are taken in), the rope (RopeBlock: climbed; another rope used on it goes to its bottom), the safety net (no
  // fall damage, a bounce unless sneaking), the full tatami mat (two blocks long), the canvas signs (their wall and
  // hanging forms)
  (function () {
    const FD = self.FD;
    if (!FD) return;
    const F = FD.F,
      L = FD.L;
    const B = k => BID[k];

    // ---- cabinets ----
    const CAB = new Set();
    for (const b of BLOCKS) if (b && /_cabinet$/.test(b.key) && FD.F.btags['farmersdelight:cabinets'] && FD.F.btags['farmersdelight:cabinets'].includes(b.key)) CAB.add(b.id);
    for (const k of ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'bamboo', 'crimson', 'warped']) if (B(k + '_cabinet') !== undefined) CAB.add(B(k + '_cabinet'));
    const openCab = new Map();
    for (const id of CAB) BLOCKS[id].onUse = function (g, x, y, z) {
      if (g.net) return false;
      const be = g.getBlockEntity(x, y, z, 'chest');
      g.ui.open(new ChestScreen(g, [be], L('container.farmersdelight.cabinet', BLOCKS[id].cn)));
      if (FD.st(g, x, y, z).open !== 'true') {
        FD.setProps(g, x, y, z, {
          open: 'true'
        });
        FD.sound('block.cabinet.open', [x + 0.5, y + 0.5, z + 0.5], 0.5, Math.random() * 0.1 + 0.9);
      }
      openCab.set(x + ',' + y + ',' + z, be);
      return true;
    };

    // ---- baskets: 27 places; what comes into the block in front of its opening is taken in ----
    const BASKETS = new Set([B('wooden_basket'), B('bamboo_basket')].filter(x => x !== undefined));
    const FACE6 = {
      north: [0, 0, -1],
      south: [0, 0, 1],
      west: [-1, 0, 0],
      east: [1, 0, 0],
      up: [0, 1, 0],
      down: [0, -1, 0]
    };
    for (const id of BASKETS) BLOCKS[id].onUse = function (g, x, y, z) {
      if (g.net) return false;
      const be = g.getBlockEntity(x, y, z, 'chest');
      g.ui.open(new ChestScreen(g, [be], L('container.farmersdelight.basket', BLOCKS[id].cn)));
      Sound.ev('block.barrel.open', [x + 0.5, y + 0.5, z + 0.5], 0.5, 1.2);
      return true;
    };
    function basketTick(g, x, y, z) {
      const f = FD.st(g, x, y, z).facing || 'up',
        d = FACE6[f] || [0, 1, 0];
      // (its opening: the block itself and the one in front of it, as BasketBlockEntity's collection area)
      const ax = x + d[0],
        ay = y + d[1],
        az = z + d[2];
      let be = null;
      for (const e of g.entities) {
        if (!(e instanceof ItemEntity) || e.dead || !e.stack || e.pickupDelay > 0) continue;
        const ex = Math.floor(e.pos[0]),
          ey = Math.floor(e.pos[1]),
          ez = Math.floor(e.pos[2]);
        if (!(ex === x && ey === y && ez === z || ex === ax && ey === ay && ez === az)) continue;
        be = be || g.getBlockEntity(x, y, z, 'chest');
        const st = e.stack,
          ms = maxStack(st.id);
        for (let i = 0; i < 27 && st.count > 0; i++) {
          const s = be.slots[i];
          if (!s) {
            be.slots[i] = {
              ...st
            };
            st.count = 0;
          } else if (sameKind(s, st) && s.count < ms && !ITEMS[s.id].durability) {
            const k = Math.min(st.count, ms - s.count);
            s.count += k;
            st.count -= k;
          }
        }
        if (st.count <= 0) e.dead = true;
        FD.mark(g, be);
      }
    }

    // ---- ticking: cabinets closing, baskets taking items ----
    FD.tickers = FD.tickers || {};
    const tf = Game.prototype.tickFurnaces;
    let n = 0;
    Game.prototype.tickFurnaces = function () {
      tf.call(this);
      if (this.net) return;
      for (const [k, be] of openCab) {
        const sc = this.ui.screen;
        if (sc && sc.chests && sc.chests.includes(be)) continue;
        if (sc && sc.be === be) continue;
        openCab.delete(k);
        const [x, y, z] = k.split(',').map(Number);
        if (CAB.has(this.world.getBlock(x, y, z))) {
          FD.setProps(this, x, y, z, {
            open: 'false'
          });
          FD.sound('block.cabinet.close', [x + 0.5, y + 0.5, z + 0.5], 0.5, Math.random() * 0.1 + 0.9);
        }
      }
      // (baskets: the loaded ones near the player, every other tick)
      if (++n & 1 || !BASKETS.size) return;
      const p = this.player,
        w = this.world,
        px = Math.floor(p.pos[0]),
        py = Math.floor(p.pos[1]),
        pz = Math.floor(p.pos[2]);
      const items = this.entities.filter(e => e instanceof ItemEntity && !e.dead);
      if (!items.length) return;
      const seen = new Set();
      for (const e of items) {
        const ex = Math.floor(e.pos[0]),
          ey = Math.floor(e.pos[1]),
          ez = Math.floor(e.pos[2]);
        if (Math.abs(ex - px) > 64 || Math.abs(ez - pz) > 64) continue;
        for (const [dx, dy, dz] of [[0, 0, 0], [0, -1, 0], [0, 1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]) {
          const bx = ex + dx,
            by = ey + dy,
            bz = ez + dz,
            key = bx + ',' + by + ',' + bz;
          if (seen.has(key) || !BASKETS.has(w.getBlock(bx, by, bz))) continue;
          seen.add(key);
          basketTick(this, bx, by, bz);
        }
      }
      void py;
    };

    // ---- the rope: another rope used on a rope goes to the bottom of the line (RopeItem) ----
    const ROPE = B('rope');
    if (ROPE !== undefined) {
      const use0 = Game.prototype.use;
      Game.prototype.use = function () {
        const t = this.target,
          held = this.player.inv.held;
        if (t && t.id === ROPE && FD.ikey(held) === 'rope' && !this.net) {
          const [x,, z] = t.pos;
          let y = t.pos[1];
          while (this.world.getBlock(x, y - 1, z) === ROPE) y--;
          const by = y - 1,
            cur = this.world.getBlock(x, by, z);
          if (by >= 0 && (!cur || REPLACEABLE[cur])) {
            FD.place(this, x, by, z, 'rope', {});
            Sound.block('place', BLOCKS[ROPE].sound, [x + 0.5, by + 0.5, z + 0.5]);
            FD.useUp(this);
            this.player.swing();
            this.flushMesh && this.flushMesh();
            this.useCd = 4;
            return;
          }
        }
        // (rope reeling - its default config: sneaking with an empty hand on a rope takes the line's bottom one back)
        if (t && t.id === ROPE && !held && this.player.sneaking && !this.net) {
          const [x,, z] = t.pos;
          let y = t.pos[1];
          while (this.world.getBlock(x, y - 1, z) === ROPE) y--;
          this.world.setBlock(x, y, z, 0, 0);
          Sound.block('break', BLOCKS[ROPE].sound, [x + 0.5, y + 0.5, z + 0.5]);
          if (this.mode !== 'creative') FD.give(this, makeStack('rope'));
          this.player.swing();
          this.flushMesh && this.flushMesh();
          this.useCd = 4;
          return;
        }
        return use0.call(this);
      };
      // (its knots to the sides: tied to a solid block beside it, when nothing is above it)
      const obc = Game.prototype.onBlockChanged;
      Game.prototype.onBlockChanged = function (x, y, z, old, id, oldMeta) {
        obc.call(this, x, y, z, old, id, oldMeta);
        if (this.net) return;
        const fix = (px, py, pz) => {
          if (this.world.getBlock(px, py, pz) !== ROPE) return;
          const w = this.world,
            above = w.getBlock(px, py + 1, pz),
            free = above === 0 || IS_FLUID[above];
          const side = (dx, dz) => String(free && !!SOLIDCUBE[w.getBlock(px + dx, py, pz + dz)]);
          FD.setProps(this, px, py, pz, {
            north: side(0, -1),
            south: side(0, 1),
            west: side(-1, 0),
            east: side(1, 0),
            tied_to_bell: String(FD.at(this, px, py - 1, pz) === 'bell')
          });
        };
        fix(x, y, z);
        fix(x, y - 1, z);
        fix(x + 1, y, z);
        fix(x - 1, y, z);
        fix(x, y, z + 1);
        fix(x, y, z - 1);
      };
    }

    // ---- the safety net: no fall damage, a bounce (SafetyNetBlock; sneaking, an ordinary landing) ----
    const NET = B('safety_net');
    if (NET !== undefined && typeof Living !== 'undefined') {
      const ol = Living.prototype.onLand;
      Living.prototype.onLand = function (d) {
        const id = this.world.getBlock(Math.floor(this.pos[0]), Math.floor(this.pos[1] - 0.2), Math.floor(this.pos[2]));
        if (id === NET && !this.sneaking) {
          if (d > 0.5) {
            this.vel[1] = Math.min(1.5, Math.sqrt(0.16 * d) * 0.6);
            this.onGround = false;
          }
          return;
        }
        // (straw and rice bales are hay: a fifth of the fall damage - ofFullCopy(HAY_BLOCK))
        if (id === B('straw_bale') || id === B('rice_bale')) return ol.call(this, 3 + (d - 3) * 0.2);
        return ol.call(this, d);
      };
    }

    // ---- the full tatami mat: two blocks, head and foot ----
    const MAT = B('full_tatami_mat');
    if (MAT !== undefined) {
      const pa = Game.prototype.placeAt;
      Game.prototype.placeAt = function (x, y, z, id, meta, held, merge) {
        if (id === MAT && !this.net) {
          const look = this.lookDir(),
            f = Math.abs(look[0]) > Math.abs(look[2]) ? look[0] > 0 ? 'east' : 'west' : look[2] > 0 ? 'south' : 'north';
          const d = FD.DIR[f],
            hx = x + d[0],
            hz = z + d[1],
            cur = this.world.getBlock(hx, y, hz);
          if (cur && !REPLACEABLE[cur] || !this.world.getBlock(hx, y - 1, hz)) return;
          const r = pa.call(this, x, y, z, id, FD.meta(id, {
            facing: f,
            part: 'foot'
          }), held, merge);
          if (this.world.getBlock(x, y, z) === MAT) this.world.setBlock(hx, y, hz, MAT, FD.meta(id, {
            facing: f,
            part: 'head'
          }));
          return r;
        }
        return pa.call(this, x, y, z, id, meta, held, merge);
      };
      const bb = Game.prototype.breakBlock;
      Game.prototype.breakBlock = function (x, y, z, natural, silent) {
        const w = this.world;
        if (w.getBlock(x, y, z) === MAT && !this.net) {
          const st = FD.st(this, x, y, z),
            d = FD.DIR[st.facing] || [0, 0],
            s = st.part === 'head' ? -1 : 1;
          const ox = x + d[0] * s,
            oz = z + d[1] * s;
          const r = bb.call(this, x, y, z, natural, silent);
          if (w.getBlock(ox, y, oz) === MAT && w.getBlock(x, y, z) !== MAT) w.setBlock(ox, y, oz, 0, 0);
          return r;
        }
        return bb.call(this, x, y, z, natural, silent);
      };
    }
    // the tatami: paired with the one it faces into
    const TAT = B('tatami');
    if (TAT !== undefined) {
      const obc = Game.prototype.onBlockChanged;
      Game.prototype.onBlockChanged = function (x, y, z, old, id, oldMeta) {
        obc.call(this, x, y, z, old, id, oldMeta);
        if (this.net || id !== TAT || old === TAT) return;
        const t = this.target,
          NAME = ['west', 'east', 'down', 'up', 'north', 'south'];
        const f = t ? NAME[t.face ^ 1] || 'north' : 'north';
        FD.setProps(this, x, y, z, {
          facing: f,
          paired: 'false'
        });
      };
    }

    // ---- the canvas signs: their wall forms placed against a block's side (hanging ones under a block) ----
    if (typeof WALL_FORM !== 'undefined') {
      const cols = ['', 'white_', 'orange_', 'magenta_', 'light_blue_', 'yellow_', 'lime_', 'pink_', 'gray_', 'light_gray_', 'cyan_', 'purple_', 'blue_', 'brown_', 'green_', 'red_', 'black_'];
      for (const c of cols) {
        const pairs = [[c + 'canvas_sign', c + 'canvas_wall_sign'], [c + 'hanging_canvas_sign', c + 'wall_hanging_canvas_sign']];
        for (const [s, wv] of pairs) if (BID[s] !== undefined && BID[wv] !== undefined) {
          WALL_FORM[s] = wv;
          IS_WALL_FORM.add(wv);
        }
      }
      // (the hanging ones hang from a block's underside - the game knows hanging signs by their *_hanging_sign names)
      const HANG = /^([a-z_]*_)?hanging_canvas_sign$/;
      const al = Game.prototype.attachLost;
      Game.prototype.attachLost = function (x, y, z, id, meta) {
        const k = FD.bkey(id);
        if (k && HANG.test(k)) {
          const a = this.world.getBlock(x, y + 1, z);
          return a === 0 || !!REPLACEABLE[a] || !!IS_FLUID[a];
        }
        return al.call(this, x, y, z, id, meta);
      };
      const use1 = Game.prototype.use;
      Game.prototype.use = function () {
        const t = this.target,
          held = this.player.inv.held,
          k = FD.ikey(held);
        if (t && k && HANG.test(k) && t.face === 2 && !this.net && !(BLOCKS[t.id].onUse && !this.player.sneaking)) {
          const x = t.pos[0],
            y = t.pos[1] - 1,
            z = t.pos[2],
            cur = this.world.getBlock(x, y, z);
          if (!cur || REPLACEABLE[cur]) {
            const id = BID[k],
              rot = String(Math.floor(16 - this.player.yaw * 8 / Math.PI + 0.5) & 15);
            this.world.setBlock(x, y, z, id, FD.meta(id, {
              rotation: rot,
              attached: 'false'
            }));
            Sound.block('place', BLOCKS[id].sound, [x + 0.5, y + 0.5, z + 0.5]);
            FD.useUp(this);
            this.player.swing();
            this.flushMesh && this.flushMesh();
            this.useCd = 4;
            return;
          }
        }
        return use1.call(this);
      };
    }
    void F;
    void L;
  })();
})();
// ---- adv.js ----
(function () {
  'use strict';

  // 农夫乐事 Farmer's Delight (vectorwing, MIT licence) - its advancements (advancement/main): added to the game's list
  // (title, icon; granted with its toast) and done when every requirement group has one criterion met - an item in the
  // inventory, a block placed, a food eaten, nourishment on, the cutting board used, a tomato picked off a rope, a raider
  // hit with a rotten tomato, food cooked in a held skillet
  (function () {
    const FD = self.FD;
    if (!FD || typeof ADVANCEMENTS === 'undefined') return;
    const A = FD.F.adv || {};
    // (its names in the game: 'farmersdelight:bacon' is fd_bacon here)
    const key = ref => {
      const p = FD.strip(ref);
      return ITEM_KEY[p] !== undefined || BID[p] !== undefined ? p : ITEM_KEY['fd_' + p] !== undefined || BID['fd_' + p] !== undefined ? 'fd_' + p : p;
    };
    for (const [k, a] of Object.entries(A)) ADVANCEMENTS['fd:' + k] = [a.title || k, ITEM_KEY[a.icon] !== undefined ? a.icon : 'cooking_pot'];
    const has = (g, k) => !!(g.adv && g.adv[k]);
    function meet(g, k, crit) {
      const ck = 'fd:' + k + '#' + crit;
      if (has(g, ck)) return;
      g.adv[ck] = Date.now();
      if ((A[k].req || []).every(grp => grp.some(c => has(g, 'fd:' + k + '#' + c)))) g.grant('fd:' + k);
    }
    function check(g, trigger, test) {
      if (!g.adv || g.net) return;
      for (const [k, a] of Object.entries(A)) {
        if (has(g, 'fd:' + k)) continue;
        for (const [name, c] of Object.entries(a.crit)) if (c.trigger === trigger && test(c.conditions || {}, k)) meet(g, k, name);
      }
    }
    FD.trigger = (g, trigger, test) => check(g, trigger, test || (() => true));
    const itemsOf = cond => [].concat((cond.item || {}).items || []).map(key);
    // inventory_changed (each second), effects_changed (nourishment)
    const tf = Game.prototype.tickFurnaces;
    Game.prototype.tickFurnaces = function () {
      tf.call(this);
      if (this.net || !this.adv || this.tickCount % 20 !== 11) return;
      const inv = this.player.inv.slots.filter(Boolean).map(s => FD.ikey(s));
      check(this, 'inventory_changed', c => {
        const it = c.items || [];
        return !it.length ? inv.length > 0 : it.some(x => [].concat(x.items || []).map(key).some(k => inv.includes(k)));
      });
      if (this.player.hasEffect('farmersdelight:nourishment')) check(this, 'effects_changed', c => !!(c.effects && c.effects['farmersdelight:nourishment']));
    };
    // placed_block: what a use of the player's put down
    const us = Game.prototype.use;
    Game.prototype.use = function () {
      this.fdUseTick = this.tickCount;
      return us.call(this);
    };
    const oc = Game.prototype.onBlockChanged;
    Game.prototype.onBlockChanged = function (x, y, z, old, id, oldMeta) {
      oc.call(this, x, y, z, old, id, oldMeta);
      if (this.net || !this.adv || !id || old === id || this.fdUseTick !== this.tickCount) return;
      const bk = FD.bkey(id);
      check(this, 'placed_block', c => (c.location || []).some(l => l.block && key(l.block) === bk));
    };
    // consume_item: a food eaten
    const fe = Game.prototype.finishEating;
    Game.prototype.finishEating = function (held) {
      const k = FD.ikey(held);
      const r = fe.call(this, held);
      check(this, 'consume_item', c => itemsOf(c).includes(k));
      return r;
    };
  })();
})();

