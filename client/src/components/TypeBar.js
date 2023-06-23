import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from 'react-bootstrap/ListGroup';


const TypeBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <ListGroup>
            {product.types.map(type => 
                <ListGroup.Item 
                    onClick={() => product.setSelectedType(type)}    
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar;