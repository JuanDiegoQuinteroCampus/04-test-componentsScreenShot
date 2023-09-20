import { saludo } from "../../api/prueba"
describe("test del archivo prueba.js", () =>{
    test("la fuuncion devuelve un 'hello world'", () =>{
        expect(saludo()).toBe("hello world")
    })
})