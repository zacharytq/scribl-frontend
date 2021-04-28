import React, { Component } from 'react';

class UploadFile extends Component {

  state = {
    selectedPhoto: null,
    // Add showPhoto to state for use before connecting to backend
    showPhoto: null
  };

  onPhotoSelect = event => {
    this.setState({ selectedPhoto: event.target.files[0]});
  };

  onPhotoUpload = event => {
    event.preventDefault();
    const formData = new FormData();

    formData.append(
      'image',
      this.state.selectedPhoto,
      this.state.selectedPhoto.name
    );

    console.log( JSON.stringify(...formData.entries()));
    let clone = { ...this.state };
    this.setState({ showPhoto: clone.selectedPhoto });
    fetch('http://127.0.0.1:3000/scribls', {
      method: 'POST',  
      body: formData
      })
      .then(resp =>{ return resp.json()})
  }

  photo = () => {
    if (this.state.showPhoto) {
      return (
        <div>
          <p>{this.state.showPhoto.name}</p>
        </div>
      )
    } else {
      return (
        <div>
          <form onSubmit={this.onPhotoUpload}>
            <input type='file' onChange={this.onPhotoSelect} />
            <input type='submit' name='Upload' />
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.photo()}
      </div>
    )
  }
}

export default UploadFile;
