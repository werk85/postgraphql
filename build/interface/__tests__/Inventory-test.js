"use strict";
const Inventory_1 = require('../Inventory');
test('addCollection will add a collection', () => {
    const inventory = new Inventory_1.default();
    const collection = {};
    expect(inventory.hasCollection(collection)).toBe(false);
    inventory.addCollection(collection);
    expect(inventory.hasCollection(collection)).toBe(true);
});
test('addCollection will not add a collection with the same name', () => {
    const inventory = new Inventory_1.default()
        .addCollection({ name: 'a' })
        .addCollection({ name: 'b' });
    expect(() => inventory.addCollection({ name: 'a' })).toThrow();
    expect(() => inventory.addCollection({ name: 'b' })).toThrow();
    inventory.addCollection({ name: 'c' });
    expect(() => inventory.addCollection({ name: 'c' })).toThrow();
});
test('getCollections will return all collections added by addCollection', () => {
    const inventory = new Inventory_1.default();
    const collectionA = { name: 'a' };
    const collectionB = { name: 'b' };
    const collectionC = { name: 'c' };
    expect(inventory.getCollections()).toEqual([]);
    inventory.addCollection(collectionA).addCollection(collectionB);
    expect(inventory.getCollections()).toEqual([collectionA, collectionB]);
    inventory.addCollection(collectionC);
    expect(inventory.getCollections()).toEqual([collectionA, collectionB, collectionC]);
});
test('getCollection will get a collection by name if it exists', () => {
    const inventory = new Inventory_1.default();
    expect(inventory.getCollection('a')).toBeFalsy();
    const collection = { name: 'a' };
    inventory.addCollection(collection);
    expect(inventory.getCollection('a')).toBe(collection);
});
test('hasCollection will return if the exact collection exists in the inventory', () => {
    const inventory = new Inventory_1.default();
    const collection1 = { name: 'a' };
    const collection2 = { name: 'a' };
    expect(inventory.hasCollection(collection1)).toBe(false);
    expect(inventory.hasCollection(collection2)).toBe(false);
    inventory.addCollection(collection1);
    expect(inventory.hasCollection(collection1)).toBe(true);
    expect(inventory.hasCollection(collection2)).toBe(false);
});
test('addRelation will fail unless both the head and tail collections exist in the inventory', () => {
    const inventory = new Inventory_1.default();
    const collection1 = { name: 'a' };
    const collection2 = { name: 'b' };
    const relation1 = { name: 'a', tailCollection: collection1, headCollectionKey: { collection: collection2 } };
    const relation2 = { name: 'b', tailCollection: collection2, headCollectionKey: { collection: collection1 } };
    expect(() => inventory.addRelation(relation1)).toThrow();
    expect(() => inventory.addRelation(relation2)).toThrow();
    inventory.addCollection(collection1);
    expect(() => inventory.addRelation(relation1)).toThrow();
    expect(() => inventory.addRelation(relation2)).toThrow();
    inventory.addCollection(collection2);
    inventory.addRelation(relation1);
    inventory.addRelation(relation2);
});
test('getRelations will get all of the relations that have been added to the inventory', () => {
    const inventory = new Inventory_1.default();
    const collection1 = { name: 'a' };
    const collection2 = { name: 'b' };
    const relation1 = { name: 'a', tailCollection: collection1, headCollectionKey: { collection: collection2 } };
    const relation2 = { name: 'b', tailCollection: collection2, headCollectionKey: { collection: collection1 } };
    expect(inventory.getRelations()).toEqual([]);
    expect(() => inventory.addRelation(relation1)).toThrow();
    expect(() => inventory.addRelation(relation2)).toThrow();
    expect(inventory.getRelations()).toEqual([]);
    inventory.addCollection(collection1);
    inventory.addCollection(collection2);
    inventory.addRelation(relation1);
    expect(inventory.getRelations()).toEqual([relation1]);
    inventory.addRelation(relation2);
    expect(inventory.getRelations()).toEqual([relation1, relation2]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52ZW50b3J5LXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW50ZXJmYWNlL19fdGVzdHNfXy9JbnZlbnRvcnktdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEJBQXNCLGNBRXRCLENBQUMsQ0FGbUM7QUFFcEMsSUFBSSxDQUFDLHFDQUFxQyxFQUFFO0lBQzFDLE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFBO0lBQ2pDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQTtJQUNyQixNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2RCxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3hELENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLDREQUE0RCxFQUFFO0lBQ2pFLE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVMsRUFBRTtTQUM5QixhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDNUIsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFFL0IsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDOUQsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDOUQsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVB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