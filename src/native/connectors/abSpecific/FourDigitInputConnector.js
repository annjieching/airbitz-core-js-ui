import { connect } from 'react-redux'
import {FourDigitInputComponent} from '../../components/abSpecific/'
import * as actions from '../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    style: ownProps.style,
    pin: state.login.pin,
    username: state.login.username

  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: (data) => dispatch(actions.testAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FourDigitInputComponent)
