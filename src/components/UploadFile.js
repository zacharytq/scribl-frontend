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

  onPhotoUpload = () => {
    const formData = new FormData();

    formData.append(
      'myFile',
      this.state.selectedPhoto,
      this.state.selectedPhoto.name
    );

    console.log(formData);
    let clone = { ...this.state };
    this.setState({ showPhoto: clone.selectedPhoto });
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
          <input type='file' onChange={this.onPhotoSelect} />
          <button onClick={this.onPhotoUpload}>Upload</button>
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
