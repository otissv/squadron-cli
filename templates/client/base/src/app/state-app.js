export default function mapStateToProps (state) {
  return {
    appIsLoggedIn : state.app.appIsLoggedIn,
    appStorage    : state.app.appStorage
  };
}
