import React from 'react';
import {connect} from 'react-redux';
import {createPost, showAlert, hideAlert, asyncShowAlert} from '../redux/actions'
import { Alert } from './Alert';

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
    }
  }

  submitHandler = event => {
    event.preventDefault();

    const { title } = this.state;

    if(!title.trim()) {
      this.props.asyncShowAlert();
      return;
    }
    const newPost = {
      title, id: Date.now().toString()
    }    
    this.props.createPost(newPost)        
    this.setState({title: ''})
  }

   changeInputHandler = event => { 
    this.setState(prev=> ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    const {alert} = this.props
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Post form</h2>                        
        <div className="form-group">
          <label htmlFor="title">Загловок поста</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        {alert && <Alert alert={alert}/>}        
        </div>
        <button className="btn btn-success mt-3" type="submit">Создать</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    alert: state.app.showAlert
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
  asyncShowAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);