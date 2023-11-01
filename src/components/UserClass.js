import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={count:0,number:12345587459}
    }
    render() {
        const{name}=this.props;
        return (
            <div class="user-card">
                <h1>count: {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({count: this.state.count+1});
                }}>Count Increase</button>
                {/* <h2>Number: {this.state.number}</h2> */}
                <h2>Name: {name}</h2>
                <h3>Location: Nanded</h3>
                <h4>Contact: @nikitapatawar</h4>
            </div>

        );

    }
}

export default UserClass;