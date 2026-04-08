window.MADLIB_TEMPLATES = window.MADLIB_TEMPLATES || {};
Object.assign(window.MADLIB_TEMPLATES, {

  chef_disaster: {
    title: "Celebrity Chef Disaster",
    category: "Food & Cooking",
    story: "Welcome to {{SHOW_1}}, the hottest cooking show on {{CHANNEL_1}}! Today, our celebrity chef {{NAME_1}} will attempt to create a {{ADJ_1}} {{DISH_1}} infused with the essence of {{INGREDIENT_1}}. \"First,\" says {{NAME_1}} in their signature {{ADJ_2}} accent, \"we need to {{VERB_1}} the {{INGREDIENT_2}} until it turns {{COLOR_1}}.\" Things take a turn when the {{NOUN_1}} begins to {{VERB_2}} at {{ADJ_3}} speeds. \"{{EXCLAIM_1}}!\" shouts the chef, as {{INGREDIENT_3}} {{VERB_3}} all over the {{ADJ_4}} studio ceiling. The judges — a {{ADJ_5}} food critic, a {{ADJ_6}} grandmother, and a surprisingly {{ADJ_7}} {{ANIMAL_1}} — watch with {{EMOTION_1}} expressions. Despite the chaos, the final dish tastes {{ADJ_8}}, and {{NAME_1}} is awarded the coveted {{ADJ_9}} Spatula award.",
    fields: [
      { key: "SHOW_1",      label: "Show name",        hint: "e.g., Sizzle Madness" },
      { key: "CHANNEL_1",   label: "TV channel",       hint: "e.g., Channel 7" },
      { key: "NAME_1",      label: "Chef's name",      hint: "e.g., Chef Bloberto" },
      { key: "ADJ_1",       label: "Adjective",        hint: "e.g., revolutionary" },
      { key: "DISH_1",      label: "Dish name",        hint: "e.g., soufflé" },
      { key: "INGREDIENT_1",label: "Ingredient",       hint: "e.g., pickle juice" },
      { key: "ADJ_2",       label: "Adjective",        hint: "e.g., squeaky" },
      { key: "VERB_1",      label: "Cooking verb",     hint: "e.g., sauté" },
      { key: "INGREDIENT_2",label: "Ingredient",       hint: "e.g., mushrooms" },
      { key: "COLOR_1",     label: "Color",            hint: "e.g., iridescent" },
      { key: "NOUN_1",      label: "Kitchen tool",     hint: "e.g., blender" },
      { key: "VERB_2",      label: "Verb",             hint: "e.g., explode" },
      { key: "ADJ_3",       label: "Adjective",        hint: "e.g., terrifying" },
      { key: "EXCLAIM_1",   label: "Exclamation",      hint: "e.g., Mon dieu" },
      { key: "INGREDIENT_3",label: "Ingredient",       hint: "e.g., hollandaise" },
      { key: "VERB_3",      label: "Past tense verb",  hint: "e.g., splattered" },
      { key: "ADJ_4",       label: "Adjective",        hint: "e.g., newly renovated" },
      { key: "ADJ_5",       label: "Adjective",        hint: "e.g., pompous" },
      { key: "ADJ_6",       label: "Adjective",        hint: "e.g., opinionated" },
      { key: "ADJ_7",       label: "Adjective",        hint: "e.g., distinguished" },
      { key: "ANIMAL_1",    label: "Animal",           hint: "e.g., capybara" },
      { key: "EMOTION_1",   label: "Emotion",          hint: "e.g., bewildered" },
      { key: "ADJ_8",       label: "Adjective",        hint: "e.g., transcendent" },
      { key: "ADJ_9",       label: "Adjective",        hint: "e.g., Golden" },
    ]
  },

});
