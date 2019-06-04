import React from 'react'
import SellWellUI from './SellWellUI'
import { getSellWell } from 'SRC/api/home'

class SellWell extends React.Component {

    state = {
        data: []
    }

    getSellWell() {
        getSellWell().then(response => {
            this.setState({
                data: response
            })
        }).catch(error => {})
    }

    componentWillMount() {
        this.getSellWell()
    }

    render() {
        return (
            <SellWellUI data={this.state.data} />
        )
    }
}

export default SellWell;