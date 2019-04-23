import React, { Component } from 'react'
import axios from 'axios';

export default class Testv extends Component {
    constructor(props) {
        super(props);
  this.state = {
      pro: null
  }
    }
    onsub = (e) => {
        e.preventDefault();
  let pd = new FormData();
  pd.append('pitchdesk',this.state.pro, this.state.pro.name);
        axios({
            method:'POST',
            url:'http://127.0.0.1:8000/api/testcom',
            data: pd
          })
          .then((res) => {
            console.log(res);
            console.log(this.state.pro.name)
          
         })
    }
    handler = (e) => {
        let file = e.target.files[0];
        this.setState({
            pro: file
        })
        }
    
  render() {
    return (
      <div>
     <form encType="multipart/form-data" onSubmit={this.onsub}>

          <fieldset>
  <legend>Upload pitch desk</legend>
      <div className="custom-file">

<input type="file" className="custom-file-input" onChange={this.handler}  name="pro" />
<label className="custom-file-label" name="images" >Choose file...</label>
</div>
    </fieldset>
    <input type="submit" value="sub"/>
    </form>
      </div>
    )
  }
}
