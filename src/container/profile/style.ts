import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  textTitle: {
    color: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  headerView: {
    height: 70,
    backgroundColor: '#1a1a1a',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
    paddingTop: 20,
  },
  bottomView: {
    height: 60,
    backgroundColor: '#1a1a1a',
    marginTop: 20,
  },
  buttonStyle: {
    fontSize: 25,
    color: 'white',
    paddingLeft: 10,
    paddingTop: 10,
  },
  txtBtnStyle: {
    height: 80,
    backgroundColor: '#1a1a1a',
    marginTop: 20,
  },

  txtStyle: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
    paddingTop: 5,
  },
  txtSubTitleStyle: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 10,
    paddingTop: 5,
  },
  listTitle: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  listContainer: {
    padding: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  textView: {
    flexGrow: 1,
    flexBasis: 0,
  },
  iconView: {
    flexGrow: 0.3,
    flexBasis: 0,
    alignItems: 'center',
    paddingBottom: 4,
  },
  iconStyle: {
    fontSize: 30,
    color: 'white',
  },
  radioView: {
    marginTop: Dimensions.get('screen').height / 3,
    backgroundColor: '#303030',
    marginHorizontal: 30,
  },
  txtRadio: {
    color: 'white',
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 25,
  },
  radioContainer: {
    alignItems: 'flex-start',
    margin: 10,
    paddingVertical: 8,
  },
});
