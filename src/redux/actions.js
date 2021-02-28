import { 
  CREATE_POST, 
  HIDE_ALERT, 
  HIDE_LOADER, 
  SHOW_ALERT, 
  SHOW_LOADER, 
  REQUEST_POSTS } from "./types"

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post
  }
 }

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

export const showAlert = (text) => {
  return {
    type: SHOW_ALERT,
    payload: text
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,    
  }
}

export const asyncShowAlert = () => {
  return (dispatch)=> {
    dispatch(showAlert('Введите заголовок поста'))
    setTimeout(()=>{
      dispatch(hideAlert())
    },2000)
  }
}

export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS
  }
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
  //     if(response.ok) {
  //       setTimeout(()=>{
  //         dispatch(hideLoader());
  //       },500)
  //     }
  //     const json = await response.json();
  //     dispatch({ type: FETCH_POSTS, payload: json})
  //   } catch(e) {
  //     dispatch(showAlert('Что то пошло не так'))
  //   }
  // }
}