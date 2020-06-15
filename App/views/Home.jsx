const React = require('react');
const reverseInt = require('../reverse_interger.js')
// const maxChar = require('../max_character.js')

const maxChar = (string) => {
    const frequency = {}
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

class Home extends React.Component {
  render() {
    return (
        <div>
            <h1>Algorithms</h1>
            <label htmlFor="reverse">Reverse Your Interger</label>
            <form action="javascript:;" onSubmit="reverseInt(this)">
                Input Interger:
                <input type="text" name="num" /><br/>
                <input type="submit" name="" value="REVERSE"/>
             </form>
             <br />
             <label htmlFor="maxCharacter">Find the Max Character</label>
            <form action="javascript:;" onSubmit="maxChar(this)">
                Input Character as String:
               <input type="text" name="num" /><br/>
                <input type="submit" name="" value="FIND"/>
             </form>
        </div>);
  }
}

module.exports = Home;