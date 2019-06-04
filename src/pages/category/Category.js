import React from 'react'
import { getFirstCategories, getChildren } from 'SRC/api/category'
import CategoryUI from './CategoryUI'

class Category extends React.Component {
    state = {
        activedId: 1,
        tabs: [],
        selectTab: {}
    }

    getFirstCategories() {
        //获取侧边栏商品分类
        getFirstCategories().then(response => {
            this.setState({
                tabs: response
            })
            this.changeTab(response[0].id)
        }).catch(error => { })
    }

    changeTab(id) {
        if (!this.state.selectTab[id]) {
            //根据侧边栏分类ID，获取分类下级的所有子分类集合
            getChildren({ id }).then(response => {
                this.setState({
                    selectTab: { [id]: response, ...this.state.selectTab },
                    activedId: id
                })
            }).catch(error => { })
        } else {
            this.setState({
                activedId: id
            })
        }
    }

    componentDidMount() {
        this.getFirstCategories()
        console.log('catagory')
    }

    render() {
        return (
            <CategoryUI tabs={this.state.tabs}
                selectTab={this.state.selectTab}
                activedId={this.state.activedId}
                changeTab={this.changeTab.bind(this)} />
        );
    }
}

export default Category;

