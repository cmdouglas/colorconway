import React from "react"

export default class PlayControls extends React.Component {
    render() {
        return (
            <div className="play-controls">
                <button onClick={this.props.step}>Step</button>
                <button onClick={this.props.start}>Start</button>
                <button onClick={this.props.stop}>Stop</button>
                <button onClick={this.props.clear}>Clear</button>
            </div>
        )
    }
}