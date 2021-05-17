import React from 'react'
import { Card, Button } from "react-bootstrap"

function DisplayData({ filterData }) {
    return (
        <div className="display">
            {filterData.map((data) => {
                return (
                    <div>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>{data.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {data.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <br /><br /><br />
                    </div>
                )
            })}


        </div>

    )
}

export default DisplayData
