import React from 'react';
import { Text, View, Picker, YellowBox, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as db from './components/db';
import  {collection,addDoc} from 'firebase/firestore'

//import database from '@react-native-firebase/database';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

export default function Login() {


const initialValues= {
        name: '',
        number: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        gender: '',
      };
const saveTodo = (input) => {
    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("React-form").add({
      id: 1,
      item: input,
    });
  };
const  onSubmit= (values) => {
    // let ref1 = firebase.database().ref().child('users').push()
    // let key = ref1.key
    // values.id = key
    // ref1.set(values)
  };
const renderError = (message) => <p className="help is-danger">{message}</p>;


  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const LoginSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short').required('Required'),

    number: Yup.string()
      .required('required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'Too Short!')
      .max(10, 'Too Long!'),

    address: Yup.string().min(10, 'Too Short!').required('Required'),
    city: Yup.string().required('Required'),

    zip: Yup.string().min(6, 'Too Short!').required('Required'),

    country: Yup.string().required('Required'),

    gender: Yup.string().required('Required'),
  });


  return (
<Formik
      initialValues={{name: '',
        number: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        gender: '',}}
      validationSchema={LoginSchema}

      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
	console.log(values);

/*
addUser = (values)=> {
  e.preventDefault();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection(“React-form”).add({
    	name: values.name,
        number: values.number,
        address: values.address,
        city: values.city,
        zip: values.zip,
        country: values.country,
        gender:values.gender,
  });  
  this.setState({
    	name: "",
        number: "",
        address: "",
        city: "",
        zip:"",
        country: "",
        gender:"",
  });
};
*/

const sendToFirestore = async(values) => {
      await addDoc( collection(db, "React-form"), {
               name: values.name,
        number: values.number,
        address: values.address,
        city: values.city,
        zip: values.zip,
        country: values.country,
        gender:values.gender,
  } )}
sendToFirestore(values);

/*
	function writeData(values) {
        Firebase.database().ref("User").set({
            name: values.name,
        number: values.number,
        address: values.address,
        city: values.city,
        zip: values.zip,
        country: values.country,
        gender:values.gender,
        });
      }
*/
	/*let ref1 = firebase.database().ref().child('users').push()
    	let key = ref1.key
    	values.id = key
    	ref1.set(values)*/
	/*const saveTodo = (values) => {
    const saveToFirebase = fireBase.firestore();
    saveToFirebase.collection("React-form").add({
      id: 1,
      item: values,
    });
  };*/

        resetForm();
      }}

    >
     {({  handleChange, handleSubmit, handleBlur, values, errors, touched  }) => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
       
        alignItems: 'center',
        justifyContent: 'center',
      }}>
	<View  style={{
        flex: 2,
        backgroundColor: '#fff',
        width: 480,
        height: 100,
        borderColor: '#e94832',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
paddingHorizontal: 32,
paddingVertical: 32,
          marginBottom: 16,
      }}>
      <Text style={{ 

color: '#223e4b', 
fontSize: 20, 
marginBottom: 16 ,
fontWeight: 'bold',
fontFamily: undefined,
fontSize: '50px',

}}>
        Form
      </Text>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="man"
          placeholder="Name"
          autoCapitalize="none"
          autoCompleteType="none"
          keyboardType="name"
          selectedValue={values.name}

          error={errors.name}
          touched={touched.name}
       
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="mobile"
          placeholder="Phone number"
          autoCompleteType="number"
          autoCapitalize="none"
          keyboardType="numeric"
          selectedValue={values.number}

          
          error={errors.number}
          touched={touched.number}
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('number')}
          onBlur={handleBlur('number')}
          value={values.number}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="address"
          placeholder="address"
          autoCompleteType="address"
          autoCapitalize="none"
          keyboardAppearance="dark"
          selectedValue={values.address}
          
          error={errors.address}
          touched={touched.address}
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="circle"
          placeholder="City"
          autoCompleteType="address"
          autoCapitalize="none"
          keyboardAppearance="dark"
          selectedValue={values.city}

          
          error={errors.city}
          touched={touched.city}
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('city')}
          onBlur={handleBlur('city')}

          value={values.city}

        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="code"
          placeholder="Zip-Code"
          autoCompleteType="address"
          autoCapitalize="none"
          keyboardType="numeric"
          selectedValue={values.zip}

          error={errors.zip}
          touched={touched.zip}
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('zip')}
          onBlur={handleBlur('zip')}
          value={values.zip}

        />
      </View>

      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="flag"
          placeholder="Country"
          autoCompleteType="address"
          autoCapitalize="none"
          keyboardAppearance="dark"
          selectedValue={values.country}

 error={errors.country}
          touched={touched.country}
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('country')}
          onBlur={handleBlur('country')}
          value={values.country}
         
        />
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 100, marginTop: 10 }}>
        <View
          style={{ justifyContent: 'center', alignItems: 'center', right: 10 }}>
          <Text style={{ color: '#223e4b', fontSize: 16 }}>Gender:</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 80,
            width: 150,
          }}>
          <RNPickerSelect
            style={{
              inputIOS: {
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 8,
                color: 'black',
                paddingRight: 30, // to ensure the text is never behind the icon
              },
              inputAndroid: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderWidth: 0.5,
                borderColor: 'purple',
                borderRadius: 8,
                color: 'black',
                paddingRight: 30, // to ensure the text is never behind the icon
              },
              inputWeb: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderWidth: 0.5,
                borderColor: 'white',
                borderRadius: 8,
                color: 'black',
                paddingRight: 30,
              },
            }}
            placeholder={{ label: '', value: "" }}
            selectedValue={values.gender}

            error={errors.gender}
            touched={touched.gender}

            onValueChange={handleChange('gender')}
            onBlur={handleBlur('gender')}
            value={values.gender}
 
            items={[
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
              { label: 'Others', value: 'Others' },
            ]}
          />
        </View>
      </View>

      <Button label="Submit" onPress={handleSubmit} />
</View>
    </View>
      )}
</Formik>
  );
}