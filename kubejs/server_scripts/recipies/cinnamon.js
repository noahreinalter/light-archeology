ServerEvents.recipes((event) => {
  // Slice cinnamon_sticks on a cutting board!
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ item: "festive_delight:cinnamon_sticks" }],
    tool: { tag: "c:tools/knives" },
    result: [{ item: "festive_delight:cinnamon_powder", count: 2 }],
  });

  // Cinnamon sticks to cinnamon sticks
  event.shapeless("festive_delight:cinnamon_sticks", [
    "expandeddelight:raw_cinnamon",
  ]);

  event.shapeless("expandeddelight:raw_cinnamon", [
    "festive_delight:cinnamon_sticks",
  ]);

  // Cinnamon powder to cinnamon powder
  event.shapeless("festive_delight:cinnamon_powder", [
    "expandeddelight:ground_cinnamon",
  ]);

  event.shapeless("expandeddelight:ground_cinnamon", [
    "festive_delight:cinnamon_powder",
  ]);
});
