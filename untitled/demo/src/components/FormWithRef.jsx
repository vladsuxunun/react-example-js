import React  from "react";
class  FormWithRef extends  React.Component {
    constructor() {
        super();
        this.state = {
            card:'',
            email: '',
        }
        this.firstNameref = React.createRef();
        this.emailref = React.createRef()
    }

    handleChange = (event) =>{
        this.setState( () => ({[event.target.name]: event.target.value}),() => {
            if(this.state.card.length === 16)
            {
                this.emailref.current.focus();
            }

        })

    }
    handleCheckBoxChange = (event) =>{
        this.setState({[event.target.name]: event.target.checked})
    }












    componentDidMount() {
        console.log(this.firstNameref)
        this.firstNameref.current.focus();
    }

    render() {
        const {card,email} = this.state;
        return <div>
            <h2>FormwithRef##############</h2>
            <input
                type="text"
                name="card"
                placeholder="card"
                value={card}
                onChange={this.handleChange}
                onBlur={this.validateName }
                ref={this.firstNameref}


            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}
                ref={this.emailref}


            />
            <br/>
            <h2>FormwithRef##############</h2>

        </div>
    }
}
export { FormWithRef}