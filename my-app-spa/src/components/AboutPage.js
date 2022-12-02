import { Component } from "react";
import Header from "./Header";

class AboutPage extends Component {
    render () {
        const baseUrl = this.props.location.pathname;
        return (
            <div>
                <Header url={baseUrl}/>
                <strong>About Page</strong>
            </div>
        )
    }
}

export default AboutPage;