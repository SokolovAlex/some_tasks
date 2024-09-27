import { Container, Separator, SmallSquare, Square } from "@/components/base/base";

export default function Css() {
    return (<div>
        <h1>Css</h1>
        <h2>Task 0 - box model</h2>
        <ol><li>Where is 200px?</li><li>Change box-sizing</li><li>Measure units</li></ol>
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
        <ol><li>inline</li><li>block</li><li>inline-block</li></ol>
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
                <div>Block</div>
                <span>text 3</span>
                <a>Link</a>
            </Square>
            <Square className="blue"/>
        </Container>
        <Separator />

        <h2>Task 2 - position</h2>
        <ol><li>Predictions</li><li>text in angle in Squere</li><li>width in %</li></ol>
        <Container>
            <Square className="red d-inline"/>
            <Square className="green d-inline"/>
            <Square className="blue d-inline"/>
            <Square className="d-inline"/>
            <Square className="gold d-inline">
                <SmallSquare className="black "/>
            </Square>
        </Container>
        <Separator />

        <h2>Task 3 - flex</h2>
        <ol><li>direction</li><li>justify content</li><li>align-items</li><li>flex-grow-schrink</li><li>wrap</li></ol>
        <Container className="d-flex">
            <Square className="red" style={{ height: "150px", width: "15%" }}>
                11111111111
                </Square>
            <Square className="green" style={{ height: "100px", width: 'auto', flexBasis: "200px" }}>
                2222222222222222 22222
                </Square>
            <Square className="blue" style={{ height: "150px", flexShrink: 0 }}/>
            <Square className="gold" style={{ height: "200px"  }}/>
            {/* <Square className="violet" style={{ height: "200px", flexGrow: 2  }}/> */}
        </Container>

        <h2>Task 4 - Media query Адаптивная сетка</h2>
        <ol><li>??</li><li>??</li><li>??</li></ol>
        <Container>
            <Square className="red d-inline" />
            <Square className="green d-inline"/>
            <Square className="blue d-inline"/>
            <Square className="d-inline"/>
        </Container>

        <h2>Task 5 - Selectors</h2>
        <ol><li>get only black in gold</li><li>??</li><li>??</li></ol>
        <Container className="d-flex">
            <Square className="red">
                <SmallSquare className="black "/>
            </Square>
            <Square className="gold">
                <SmallSquare className="black "/>
                <SmallSquare className="black "/>
                <SmallSquare className="black "/>
            </Square>
            <Square className="blue"/>
            <Square className=""/>
        </Container>

        <h2>Task 6 - Overflow</h2>
        <ol><li>get only black in gold</li><li>??</li><li>??</li></ol>
        <Container>
            <Square className="red">
                <SmallSquare className="black "/>
            </Square>
            <Square className="gold d-inline">
                <SmallSquare className="black "/>
            </Square>
            <Square className="blue d-inline"/>
            <Square className="d-inline"/>
        </Container> 

        <h2>Task 7 - psevdo</h2>
        <ol><li>get only black in gold</li><li>??</li><li>??</li></ol>
        <Container>
            <input className="psevdo-input" />
            <input className="psevdo-input bad-psevdo" />
            <input className="psevdo-input" />
            <div className="bad-psevdo">I am block</div>
        </Container> 
    </div>)
}
