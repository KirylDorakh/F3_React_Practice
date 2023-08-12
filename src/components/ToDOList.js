import React from "react";

import ToDoListItem from "./ToDoListItem";

class ToDOList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        this.updateItems();
    }

    updateItems(){
        fetch("https://example.com/todo")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            })
    }

    createItem(){
        fetch("https://example.com/POST/todo",
            {method: "POST",
                body: '{“name»: «' + name + '»}'
            }
            ).then(this.updateItems)
    }

    deleteItem(id) {
        fetch("https://example.com/todo", {method: 'DELETE'}).then(this.updateItems)
    }

    render(){
        return !this.state.isLoaded ? "Loading...": (
            <div>
                <h1>ToDo List</h1>
                <ul>
                    {
                        this.state.items.map(
                            item => <ToDoListItem name={item.name} deleteItem={() => this.deleteItem(item.id)}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default ToDOList