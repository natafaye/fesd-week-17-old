import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"

describe("NotFound", () => {
    it("Shows the text Not Found", () => {
        // arrange
        // build a little web page
        render(<NotFound/>)

        // act
        // click around that web page
        
        // assert
        // check if something is showing in the web page
        expect(screen.getByText("Not Found")).toBeVisible()
    })

    it("Has a back to home button", () => {

    })
})