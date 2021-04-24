import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },

  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },

  menu: {
    width: 25,
    height: 25,
  },
});

export default styles;
