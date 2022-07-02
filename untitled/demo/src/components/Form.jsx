import React  from "react";

class  Form extends  React.Component {
    constructor() {
        super();
        this.state = {
            card:'',
            email: '',
        }
    }
    state = {
        firstName:'',
        email:'',
        message:'',
        select: '',
        subscription:false,
        gender:'',

    }
    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }
    handleCheckBoxChange = (event) =>{
        this.setState({[event.target.name]: event.target.checked})
    }
    validateSendButton = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))
        {
            alert('invalid email')
        }
        else if (!this.state.subscription){
            alert('u didnt accept with description')
        }
        else
        {
            this.setState({subscription: false,email:''});
           alert('accepted')



        }


    }




    validateName = () => {
        if (this.state.firstName.length < 7){
            alert('your first can t be less than 7 letters ')

        }
    }
    validateEmail = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))
        {
            alert("You have entered an invalid email address!")
        }


    }

    render() {
        const {firstName,email,select,message,subscription,gender} = this.state;
        return <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName }


            />
            <input
                type="email"
                name="email"
                placeholder="firstName"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}


            />
            <br/>
            <textarea name='message' value={message} onChange={this.handleChange}/>
            <br/>
            <select name={'select'} value={select} onChange={this.handleChange}>
                <option value={''} disabled></option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>

            </select>
            <br/>
            <label>
            <input type={'checkbox'} name={'subscription'} checked={subscription} onChange={this.handleCheckBoxChange}/>
                Subcription
            </label>
            <br/>
            <input type={"radio"} name={'gender'} value={'male'} onChange={this.handleChange} checked={gender ==='male'}/>Male
            <input type={"radio"} name={'gender'} value={'female'} onChange={this.handleChange} checked={gender ==='female'}/>Female

            <br/>

            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}


            />
            <br/>
            <label>
                <input type={'checkbox'}
                       name={'subscription'}
                       checked={subscription}
                       onChange={this.handleCheckBoxChange}/>
                All Accept
            </label>
            <br/>
            <label>
                <button onClick={this.validateSendButton}>Send</button>
            </label>
            <br/>










        </div>
    }
}
export { Form}