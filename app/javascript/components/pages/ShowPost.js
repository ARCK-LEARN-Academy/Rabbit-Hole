import React, { Component } from "react";

import {
    CardGroup,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardLink,
    Button,
} from "reactstrap";


class ShowPost extends Component {
    render() {
        const {
            logged_in,
            current_user
        } = this.props;
        console.log("logged_in:", logged_in);
        console.log("current_user:", current_user);
        return (
            <>
                <h1>ShowPost Page</h1>
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Post title</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                Card subtitle
                            </CardSubtitle>
                        </CardBody>
                        <CardBody>
                            <CardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}

export default ShowPost;
