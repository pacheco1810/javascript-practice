const { groupAnagrams } = require('./groupAnagrams');

describe('groupAnagrams', () => {

    test('groups anagrams correctly', () => {
        const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
        
        // Ordenar para comparación consistente
        const sortedResult = result.map(group => group.sort()).sort();
        const expected = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]].map(group => group.sort()).sort();
        
        expect(sortedResult).toEqual(expected);
    });

    test('handles empty array', () => {
        const result = groupAnagrams([]);
        expect(result).toEqual([]);
    });

    test('handles single word', () => {
        const result = groupAnagrams(["hello"]);
        expect(result).toEqual([["hello"]]);
    });

    test('handles words with no anagrams', () => {
        const result = groupAnagrams(["cat", "dog", "bird"]);
        expect(result).toEqual([["cat"], ["dog"], ["bird"]]);
    });

    test('handles case sensitivity', () => {
        const result = groupAnagrams(["Eat", "tea", "ATE"]);
        
        const sortedResult = result.map(group => group.sort()).sort();
        const expected = [["ATE", "Eat", "tea"]].map(group => group.sort()).sort();
        
        expect(sortedResult).toEqual(expected);
    });

    test('handles all words being anagrams', () => {
        const result = groupAnagrams(["abc", "cba", "bac", "bca"]);
        
        expect(result.length).toBe(1);
        expect(result[0].length).toBe(4);
    });

});