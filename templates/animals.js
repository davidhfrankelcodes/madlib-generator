window.MADLIB_TEMPLATES = window.MADLIB_TEMPLATES || {};
Object.assign(window.MADLIB_TEMPLATES, {

  nature_doc: {
    title: "Nature Documentary",
    category: "Animals & Nature",
    story: "Here in the {{ADJ_1}} {{HABITAT_1}} of {{PLACE_1}}, we observe one of nature's most {{ADJ_2}} creatures: the {{ADJ_3}} {{ANIMAL_1}}. Notice how it {{VERB_1}}s with remarkable {{NOUN_1}} as it searches for its favorite meal — {{FOOD_1}}. The {{ANIMAL_1}} must {{VERB_2}} at least {{NUMBER_1}} times per day to maintain its {{ADJ_4}} physique. But danger lurks. The fearsome {{ANIMAL_2}} — a natural predator — begins to {{VERB_3}} toward it from the {{DIRECTION_1}}. In a breathtaking display of {{NOUN_2}}, the {{ANIMAL_1}} {{VERB_4}}s to safety behind a {{ADJ_5}} {{NOUN_3}}. The predator, now {{ADJ_6}} and {{EMOTION_1}}, {{VERB_5}}s away in defeat. Our hero survives another day in this {{ADJ_7}} world, ready to {{VERB_6}} again tomorrow.",
    fields: [
      { key: "ADJ_1",      label: "Adjective",        hint: "e.g., sun-baked" },
      { key: "HABITAT_1",  label: "Habitat",          hint: "e.g., rainforest" },
      { key: "PLACE_1",    label: "Place",            hint: "e.g., Borneo" },
      { key: "ADJ_2",      label: "Adjective",        hint: "e.g., misunderstood" },
      { key: "ADJ_3",      label: "Adjective",        hint: "e.g., magnificent" },
      { key: "ANIMAL_1",   label: "Animal",           hint: "e.g., pangolin" },
      { key: "VERB_1",     label: "Verb",             hint: "e.g., amble" },
      { key: "NOUN_1",     label: "Noun (quality)",   hint: "e.g., grace" },
      { key: "FOOD_1",     label: "Food",             hint: "e.g., termites" },
      { key: "VERB_2",     label: "Verb",             hint: "e.g., sniff" },
      { key: "NUMBER_1",   label: "Number",           hint: "e.g., forty-seven" },
      { key: "ADJ_4",      label: "Adjective",        hint: "e.g., impressive" },
      { key: "ANIMAL_2",   label: "Predator animal",  hint: "e.g., jaguar" },
      { key: "VERB_3",     label: "Verb",             hint: "e.g., creep" },
      { key: "DIRECTION_1",label: "Direction",        hint: "e.g., north" },
      { key: "NOUN_2",     label: "Noun (quality)",   hint: "e.g., agility" },
      { key: "VERB_4",     label: "Verb",             hint: "e.g., scramble" },
      { key: "ADJ_5",      label: "Adjective",        hint: "e.g., rotting" },
      { key: "NOUN_3",     label: "Natural object",   hint: "e.g., boulder" },
      { key: "ADJ_6",      label: "Adjective",        hint: "e.g., famished" },
      { key: "EMOTION_1",  label: "Emotion",          hint: "e.g., dejected" },
      { key: "VERB_5",     label: "Past tense verb",  hint: "e.g., slunk" },
      { key: "ADJ_7",      label: "Adjective",        hint: "e.g., unpredictable" },
      { key: "VERB_6",     label: "Verb",             hint: "e.g., forage" },
    ]
  },

});
