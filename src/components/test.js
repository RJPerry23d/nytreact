import React, { Component } from "react";


class Test extends Component {
    handleSubmit(event) {
        alert ("it's working!");
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Test;