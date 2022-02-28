import React from "react";

class Tabs extends React.Component {
    constructor (props) {
        super(props);
        this.state = {index: 0};
    };

    // click()
    // setState({ index: ? });

    render() {
        return(
            <div>
                <h1>Tabs</h1>
                <ul>
                    <h1>Title</h1>
                        <article>Content</article>
                </ul>
            </div>
        );
    };
};


export default Tabs;