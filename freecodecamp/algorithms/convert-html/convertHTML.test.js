const { convertHTML } = require('./convertHTML');

const solutions = [
  convertHTML
];

solutions.forEach(fn => {

  test(`${fn.name} converts "Dolce & Gabbana" correctly`, () => {
    expect(fn("Dolce & Gabbana")).toBe("Dolce &amp; Gabbana");
  });

  test(`${fn.name} converts "Hamburgers < Pizza < Tacos" correctly`, () => {
    expect(fn("Hamburgers < Pizza < Tacos")).toBe("Hamburgers &lt; Pizza &lt; Tacos");
  });

  test(`${fn.name} converts "Sixty > twelve" correctly`, () => {
    expect(fn("Sixty > twelve")).toBe("Sixty &gt; twelve");
  });

  test(`${fn.name} converts 'Stuff in "quotation marks"' correctly`, () => {
    expect(fn('Stuff in "quotation marks"')).toBe('Stuff in &quot;quotation marks&quot;');
  });

  test(`${fn.name} converts "Schindler's List" correctly`, () => {
    expect(fn("Schindler's List")).toBe("Schindler&apos;s List");
  });

  test(`${fn.name} converts string with multiple characters`, () => {
    expect(fn("<>")).toBe("&lt;&gt;");
  });

  test(`${fn.name} handles empty string`, () => {
    expect(fn("")).toBe("");
  });

  test(`${fn.name} handles string with no HTML characters`, () => {
    expect(fn("Hello World")).toBe("Hello World");
  });

});