import axios from "axios"
export const GET_INFORMATION="GET_INFORMATION"

export const getAllTypes = () => (dispatch) => {
    // Tu código acá
    return axios.get(
        'https://mqjl9s6vf4.execute-api.eu-west-1.amazonaws.com/prod/v1/hackday/public/event'
      )
      .then(res=>res.data)
      .then(json => {
      dispatch({type: GET_INFORMATION, payload: json})
    }
  )
}