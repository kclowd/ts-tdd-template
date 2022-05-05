import { exampleFunction } from "../src/example";

describe("test example function", () => {
    it("should return 0", () => {
        expect(exampleFunction("string")).toBe(0);
    })
})