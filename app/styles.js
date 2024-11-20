import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },

  form: {
    alignItems: "center",   
    padding: 20,
    backgroundColor: "#00008B",
    borderRadius: 10,
    margin: 10
  },

  formHeader: {
    textAlign: "center",
    fontSize: 45,
    color: "white",
    fontFamily: 'Times New Roman'
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    marginVertical:10,
    backgroundColor: "grey"
  },

  pickerInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    width: 100,
    marginVertical:10,
    backgroundColor: "grey"
  },


  menuDisplaybox: {
    flex: 1,
    backgroundColor: "#00008B",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 10        ,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3
  },
  
  textMainHeader: {
    color: "black",
    fontFamily: 'Times New Roman',
    textAlign: "center",
    fontSize: 45
  },

  notification: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },  

  textHeader:{
    fontFamily: 'Times New Roman',  
    color: 'white',
    textAlign: "center",
    fontSize: 20  
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 100,
    height: 50,
    marginBottom: 10
  },

  menuImage: {
    width: 300,
    height: 300, 
    resizeMode:'cover',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000  ',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5    
  },

  textContent: {
    fontFamily: 'Times New Roman',
    color: 'white',   
  }
});

export default styles;  
