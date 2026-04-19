const { simplifyPath } = require('./simplifyPath');

describe('simplifyPath', () => {

    test('simplifies "/a/../../b/../c//.//" correctly', () => {
        expect(simplifyPath("/a/../../b/../c//.//")).toBe("/c");
    });

    test('simplifies "/home/" correctly', () => {
        expect(simplifyPath("/home/")).toBe("/home");
    });

    test('simplifies "/../" correctly', () => {
        expect(simplifyPath("/../")).toBe("/");
    });

    test('simplifies "/home//foo/" correctly', () => {
        expect(simplifyPath("/home//foo/")).toBe("/home/foo");
    });

    test('simplifies "/a/./b/../../c/" correctly', () => {
        expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
    });

    test('simplifies "/a/../../b/../c//.//" correctly', () => {
        expect(simplifyPath("/a/../../b/../c//.//")).toBe("/c");
    });

    test('handles root path "/"', () => {
        expect(simplifyPath("/")).toBe("/");
    });

    test('handles path with multiple slashes', () => {
        expect(simplifyPath("///home//user///docs//")).toBe("/home/user/docs");
    });

});