import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import {Row} from "react-bootstrap";
import {Card} from "react-bootstrap"
import {Context} from '../index'

const ProductBar = observer(() => {
    const { product } = useContext(Context)

    return (
        
        <div className="d-flex flex-wrap">
            {product.positions.map(position =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={position.id}
                    className="p-3 me-2"
                    onClick={() => product.setSelectedPosition(position)}
                    border={position.id === product.selectedPosition.id ? 'black' : 'light'}
                >
                    {position.name}
                </Card>
            )}
        </div>
    );
});

export default ProductBar;