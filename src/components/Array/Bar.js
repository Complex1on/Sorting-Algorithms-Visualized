import React from 'react';

class Bar extends React.Component {
    render() {
        return (
            <div
                style={{
                    background: 'tomato',
                    marginBottom: '10px',
                    marginTop: '10px',
                    height: '10px',
                    width: this.props.width
                }}
            ></div>
        );
    }
}

export default Bar;
