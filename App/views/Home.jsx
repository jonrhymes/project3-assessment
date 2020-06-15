const React = require('react');
const reverseInt = require('../reverse_interger.js')
const maxChar = require('../max_character.js')

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reverse: '',
            maxCharacter: ''
        };
    }
  render() {
    return (
        <div>
            <h1>Algorithms</h1>
            <label htmlFor="reverse">Reverse Your Interger</label>
            <form action="" onSubmit="reverseInt(this)">
                Input Interger:
                <input type="text" onChange={this.handleChange}/><br/>
                <input type="submit" name="" value="REVERSE"/>
             </form>
             <br />
             <label htmlFor="maxCharacter">Find the Max Character</label>
            <form action="" onSubmit="maxChar(this)">
                Input Character as String:
               <input type="text" name="num" onChange={this.handleChange}/><br/>
                <input type="submit" name="" value="FIND"/>
             </form>
        </div>);
  }
}

module.exports = Home;