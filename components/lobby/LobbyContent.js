import React from 'react';
import CardElement from './CardElement';

function LobbyContent() {

    const list = ["element-1", "element-2", "element-3"]

    return (
        list.map(e => {
            return (
                <CardElement element={e} />
            )
        })
    );
}

export default LobbyContent;
