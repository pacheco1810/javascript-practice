const { 
  parseShipment, 
  planRestock, 
  groupByZone, 
  clonePantry 
} = require('./pantryRestocker');

describe('parseShipment', () => {
  test('parses valid shipment data correctly', () => {
    const rawData = [
      "A1|Rice|10|2025-12-31|north",
      "B2|Beans|5|2025-12-31|south"
    ];
    const result = parseShipment(rawData);
    
    expect(result).toEqual([
      { sku: "A1", name: "Rice", qty: 10, expires: "2025-12-31", zone: "north" },
      { sku: "B2", name: "Beans", qty: 5, expires: "2025-12-31", zone: "south" }
    ]);
  });

  test('handles missing zone (defaults to "general")', () => {
    const rawData = ["C3|Pasta|3|2025-12-31"];
    const result = parseShipment(rawData);
    
    expect(result[0].zone).toBe("general");
  });

  test('handles duplicate SKU - keeps first occurrence', () => {
    const rawData = [
      "A1|Rice|10|2025-12-31|north",
      "A1|Rice|20|2026-01-01|south"
    ];
    const result = parseShipment(rawData);
    
    expect(result.length).toBe(1);
    expect(result[0].qty).toBe(10);
  });

  test('returns empty array for invalid input', () => {
    expect(parseShipment(null)).toEqual([]);
    expect(parseShipment([])).toEqual([]);
  });
});

describe('planRestock', () => {
  const pantry = [
    { sku: "A1", name: "Rice", qty: 10, zone: "north" },
    { sku: "B2", name: "Beans", qty: 5, zone: "south" }
  ];
  
  test('returns "restock" for existing SKU with positive qty', () => {
    const shipment = [{ sku: "A1", qty: 3, zone: "north" }];
    const result = planRestock(pantry, shipment);
    
    expect(result).toEqual([
      { type: "restock", item: { sku: "A1", qty: 3, zone: "north" } }
    ]);
  });

  test('returns "donate" for new SKU with positive qty', () => {
    const shipment = [{ sku: "C3", qty: 2, zone: "general" }];
    const result = planRestock(pantry, shipment);
    
    expect(result).toEqual([
      { type: "donate", item: { sku: "C3", qty: 2, zone: "general" } }
    ]);
  });

  test('returns "discard" for any SKU with qty <= 0', () => {
    const shipment = [
      { sku: "A1", qty: 0, zone: "north" },
      { sku: "C3", qty: -5, zone: "general" }
    ];
    const result = planRestock(pantry, shipment);
    
    expect(result).toEqual([
      { type: "discard", item: { sku: "A1", qty: 0, zone: "north" } },
      { type: "discard", item: { sku: "C3", qty: -5, zone: "general" } }
    ]);
  });

  test('handles multiple items correctly', () => {
    const shipment = [
      { sku: "A1", qty: 3, zone: "north" },
      { sku: "C3", qty: 2, zone: "general" },
      { sku: "B2", qty: 0, zone: "south" }
    ];
    const result = planRestock(pantry, shipment);
    
    expect(result).toEqual([
      { type: "restock", item: { sku: "A1", qty: 3, zone: "north" } },
      { type: "donate", item: { sku: "C3", qty: 2, zone: "general" } },
      { type: "discard", item: { sku: "B2", qty: 0, zone: "south" } }
    ]);
  });
});

describe('groupByZone', () => {
  test('groups actions by zone', () => {
    const actions = [
      { type: "restock", item: { sku: "A1", qty: 3, zone: "north" } },
      { type: "donate", item: { sku: "C3", qty: 2, zone: "general" } },
      { type: "restock", item: { sku: "B2", qty: 1, zone: "south" } },
      { type: "discard", item: { sku: "D4", qty: 0, zone: "general" } }
    ];
    const result = groupByZone(actions);
    
    expect(result).toEqual({
      north: [{ type: "restock", item: { sku: "A1", qty: 3, zone: "north" } }],
      general: [
        { type: "donate", item: { sku: "C3", qty: 2, zone: "general" } },
        { type: "discard", item: { sku: "D4", qty: 0, zone: "general" } }
      ],
      south: [{ type: "restock", item: { sku: "B2", qty: 1, zone: "south" } }]
    });
  });

  test('handles empty actions array', () => {
    expect(groupByZone([])).toEqual({});
  });

  test('handles missing zone (defaults to "general")', () => {
    const actions = [
      { type: "donate", item: { sku: "C3", qty: 2 } }
    ];
    const result = groupByZone(actions);
    
    expect(result.general).toBeDefined(undefined);
    expect(result.general.length).toBe(1);
  });
});

describe('clonePantry', () => {
  test('creates a deep copy of pantry', () => {
    const pantry = [
      { sku: "A1", name: "Rice", qty: 10, zone: "north" },
      { sku: "B2", name: "Beans", qty: 5, zone: "south" }
    ];
    const copy = clonePantry(pantry);
    
    expect(copy).toEqual(pantry);
    expect(copy).not.toBe(pantry);
    expect(copy[0]).not.toBe(pantry[0]);
  });

  test('modifying copy does not affect original', () => {
    const pantry = [
      { sku: "A1", name: "Rice", qty: 10, zone: "north" }
    ];
    const copy = clonePantry(pantry);
    copy[0].qty = 99;
    
    expect(pantry[0].qty).toBe(10);
    expect(copy[0].qty).toBe(99);
  });
});