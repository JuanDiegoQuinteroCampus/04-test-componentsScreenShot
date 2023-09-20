import { render } from "@testing-library/react"
import Table from "../../src/components/Table"

describe("Captura del componente <tabla.jsx>", ()=>{
    test("fotico :)", ()=>{
    let {container} = render(<Table/>);
        // expect(container).toMatchSnapshot();
        console.log(container);
        
    })
})