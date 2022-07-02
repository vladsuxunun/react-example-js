import React  from "react";
class  UncontrolledForm extends  React.Component {
    constructor() {
        super();

        this.cardref = React.createRef();
        this.emailref = React.createRef()
    }















    handlerOnSubmit = (event) => {
        event.preventDefault();
        if(this.cardref.current.value.length < 16){
            alert('invalid card num');
            return;
        }
        //send
        this.cardref.current.value = '';
        this.emailref.current.value = '';


    }

    render() {
        return <form onSubmit={this.handlerOnSubmit}>
            <h2>UncontrolledForm##############</h2>
            <input
                type="text"
                name="card"
                placeholder="card"
                ref={this.cardref}


            />
            <input
                type="email"
                name="email"
                placeholder="email"
                ref={this.emailref}


            />
            <br/>
            <h2>UncontrolledForm#######</h2>
            <button>Send</button>

        </form>
    }
}
export { UncontrolledForm}