import { Container, Separator, SmallSquare, Square } from "@/components/base/base";

export default function Css() {
    return (<div>
        <h1>Css</h1>
        <h2>Task 0 - box model</h2>
        <ol><li>Where is 200px?</li><li>Change box-sizing</li></ol>
        <Container>
            <Square className="red" style={{ width: "200px", padding: "20px", margin: "20px", borderWidth: "10px", boxSizing: "content-box", }}>
                <SmallSquare className="gold"/>
                padding: "20px"
                borderWidth: "10px",
                width: "200px"
            </Square>
        </Container>
        <Separator />
        <h2>Task 1 - display</h2>
        <ol><li>??</li><li>??</li><li>??</li></ol>
        <Container>
            <Square className="red">
                <SmallSquare className="gold"/>
                <SmallSquare className="violet"/>
                <SmallSquare className="black"/>
                <SmallSquare className="blue"/>
            </Square>
            <Square className="green">
                <span>text 1</span>
                <span>text 2</span>
                <a>Link</a>
                <p>Paragraph</p>
                <span>text 3</span>
            </Square>
            <Square className="blue"/>
        </Container>
        <Separator />
        <h2>Task 2 - position</h2>
        <ol><li>??</li><li>text in angle in Squere</li><li>different position</li></ol>
        <Container>
            <Square className="red d-inline" />
            <Square className="green d-inline"/>
            <Square className="blue d-inline"/>
            <Square className="d-inline"/>
        </Container>
        <Separator />
        <h2>Task 3 - flex</h2>
        <ol><li>??</li><li>??</li><li>??</li></ol>
        <Container>
            <Square className="red d-inline" />
            <Square className="green d-inline"/>
            <Square className="blue d-inline"/>
            <Square className="d-inline"/>
        </Container>
        <h2>Task 4 - Media query</h2>
        <ol><li>??</li><li>??</li><li>??</li></ol>
        <Container>
            <Square className="red d-inline" />
            <Square className="green d-inline"/>
            <Square className="blue d-inline"/>
            <Square className="d-inline"/>
        </Container>
        <h2>Task 5 - Selectors</h2>
        <ol><li>??</li><li>??</li><li>??</li></ol>
        <Container>
            <Square className="red d-inline" />
            <Square className="green d-inline"/>
            <Square className="blue d-inline"/>
            <Square className="d-inline"/>
        </Container>
    </div>)
}
