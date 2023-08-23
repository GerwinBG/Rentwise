import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"


function Protected(props) {
  const loggedInUser = useSelector(state => state.loggedInUser)

  return (
    <>
      {
        loggedInUser ?
          <Navigate to="/login" replace /> :
          props.children
      }

    </>

  )
};

export default Protected;