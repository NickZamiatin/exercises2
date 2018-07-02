import React, {
    Component
} from 'react';


class InputBox extends Component {
    constructor() {
        super();
        this.state = {
            liInput: "",
              data : new Date()

        }

        this.userType = this.userType.bind(this)
        this.formSubitted = this.formSubitted.bind(this)

    }

    userType(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    formSubitted(event) {
        event.preventDefault();
        console.log(this.state)
        this.props.addUser(this.state);

    }


    render() {
        return(
              <form onSubmit={this.formSubitted}>
                <div className="form-group">
                    <input type="text" 
                    onChange={this.userType} 
                    className="form-control" 
                    value={this.state.liInput}
                    id="liInput" 
                    placeholder="type here"/>
                </div>
                   <button type="submit" className="btn btn-primary">Add Thing</button>
                </form>
        )
    }
}

export default InputBox