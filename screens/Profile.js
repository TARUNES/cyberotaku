import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import CircularProgressBase from 'react-native-circular-progress-indicator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Profile = ({
  value,
  nday,
  ndate,
  nmonth,
  Height,
  Weight,
  imageSource,
  name,
  specialty,
  rating,
  reviews,
  hospital,
  patients,
  yearsExpert,
  aboutMe,
  ADay,
  AMonth,
  ATime
}) => {
  // Accept the props as an object
  const props = {
    activeStrokeWidth: 10,
    inActiveStrokeWidth: 10,
    inActiveStrokeOpacity: 0.2,
  };
  const [ismodalvisible, setIsmodalvisible] = useState(false);
  const handelmodel = () => {
    setIsmodalvisible(!ismodalvisible);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '7%',
          // marginVertical: '5%',
          marginTop: '7%',
        }}>
        <View>
          <Text style={{fontSize: 19, fontWeight: '700'}}>Hi, Sriram</Text>
          <Text style={{fontSize: 13}}>
            {nday} {ndate} {nmonth}
          </Text>
        </View>
        <Image
          style={{
            height: '96%',
            width: '13%',
            resizeMode: 'contain',
            borderRadius: 100,
          }}
          source={require('../Assets/profile.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '35%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '69%',
            width: '50%',
            borderWidth: 0.3,
            borderRadius: 10,
            marginLeft: '5%',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: '1%',
            marginHorizontal: '3%',
            backgroundColor: 'white',
            borderColor: 'lightgray',
          }}>
          <CircularProgressBase
            {...props}
            transition="0.3 "
            value={value}
            radius={45}
            activeStrokeColor={'#2465FD'}
            activeStrokeSecondaryColor={'#C25AFF'}
            inActiveStrokeColor={'#B298D6'}></CircularProgressBase>
          <Text style={{marginTop: '2%', fontWeight: '700', fontSize: 10}}>
            Obesity {value}%
          </Text>
          <Text style={{marginTop: '2%', fontWeight: '700', fontSize: 10}}>
            Height {Height} M
          </Text>
          <Text style={{marginTop: '2%', fontWeight: '700', fontSize: 10}}>
            Weight {Weight}KG
          </Text>
        </View>

        <TouchableOpacity
          style={{
            height: '69%',
            width: '33%',
            borderWidth: 1,
            // marginVertical: '10%',
            marginHorizontal: '3%',
            borderWidth: 0.3,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderColor: 'lightgray',
          }}>
          <MaterialCommunityIcons name="file-cloud" size={40} color="gray" />
          <Text
            style={{
              fontSize: 11,
              fontWeight: '800',
              marginTop: '5%',
              color: 'black',
            }}>
            View Your records
          </Text>
        </TouchableOpacity>
      </View>
      
        <View>
          <Text style={{marginHorizontal:'5%',fontSize:18,marginBottom:'5%'}}>Your Appointment :</Text>
          <TouchableOpacity style={styles.box} onPress={handelmodel}>
            <Image style={styles.img} source={{uri: imageSource}} />
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'black'}}>{name}</Text>
              <Text>{specialty}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal visible={ismodalvisible} animationType="slide">
        <View style={styles.Mcontainer}>
          <View style={{flexDirection: 'row', height: '11%'}}>
            <TouchableOpacity style={styles.Mclose} onPress={handelmodel}>
              <Feather name="chevron-left" size={29} color="black" />
            </TouchableOpacity>
            <View>
              <Text style={styles.Muptxt}>About </Text>
            </View>
          </View>
          <View style={styles.Mframe}>
            <Image
              style={{
                resizeMode: 'contain',
                height: '70%',
                width: '100%',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderWidth: 0.5,
              }}
              source={{uri: imageSource}}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: '3%',
                }}>
                <Text style={{fontSize: 18, color: 'black'}}>{name}</Text>
                <Text style={{color: 'black'}}>
                  ⭐ {rating} ({reviews} reviews)
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: '5%',
                  color: 'black',
                }}>
                {specialty} | {hospital}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '3%',
              marginVertical: '5%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon1.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {patients}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Patients
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon2.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {yearsExpert}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Years expert
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon3.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {rating}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Rating
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: '3%',
                marginVertical: '5%',
                alignItems: 'center',
              }}>
              <Image
                style={{marginHorizontal: '3%', marginVertical: '1%'}}
                source={require('../Assets/Icon4.png')}
              />
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 13,
                  color: 'black',
                }}>
                {reviews}
              </Text>
              <Text
                style={{
                  marginHorizontal: '3%',
                  marginVertical: '1%',
                  fontSize: 10,
                }}>
                Reviews
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: '5%'}}>
            <Text style={{fontSize: 19, color: 'black'}}>About Me</Text>
            <Text style={{marginVertical: '2%'}}>{aboutMe}</Text>
          </View>

          <Text style={{fontSize:19,color:'black',marginHorizontal:'5%',marginTop:'5%'}}>Appointment details:</Text>
          <View style={{marginHorizontal:'5%',marginVertical:'5%'}}>
                <Text style={{color:'black'}}> Month: {AMonth}</Text>
                <Text style={{color:'black'}}> Day: {ADay}</Text>
                <Text style={{color:'black'}}> Time: {ATime}</Text>
          </View>
        </View>
      </Modal>

        <TouchableOpacity
          style={{
            height: '13%',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth: 0.3,
            flexDirection: 'row',
            marginTop:'5%',
            backgroundColor: 'white',
            borderColor: 'lightgray',
            
            
          }}>
          <Image
            style={{
              height: '85%',
              width: '25%',
              resizeMode: 'contain',
              marginVertical: '3%',
            }}
            source={require('../Assets/pill.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 17,
                marginTop: '10%',
                marginHorizontal: '7%',
                color: 'black',
              }}>
              Wanna check your Pill ?
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginHorizontal: '5%',
                marginHorizontal: '17%',
              }}>
              Know about you Pill
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: '13%',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth: 0.2,
            flexDirection: 'row',
            marginTop: '5%',
            backgroundColor: 'white',
            borderColor: 'lightgray',
          }}>
          <Image
            style={{
              height: '50%',
              width: '15%',
              resizeMode: 'contain',
              alignSelf: 'center',
              marginLeft: '5%',
              // marginVertical: '5%',
            }}
            source={require('../Assets/Schedule.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 13,
                marginTop: '10%',
                color: 'black',
                marginHorizontal: '3%',
                textAlign: 'center',
                color: 'black',
              }}>
              struggling to take medications on time?
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginHorizontal: '5%',
                marginTop: '3%',
                textAlign: 'center',
              }}>
              {' '}
              checkkout of new feature
            </Text>
          </View>
        </TouchableOpacity>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 100,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    // marginVertical: '5%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  img: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
    borderRadius: 90,
    marginHorizontal: '10%',
  },
  Mcontainer: {
    flex: 1,
  },
  Mclose: {
    height: '39%',
    width: '9%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '5%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AMclose: {
    height: '65%',
    width: '9%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '5%',
    marginLeft: '5%',
  },

  Muptxt: {
    fontSize: 18,
    color: 'black',
    marginVertical: '19%',
    marginHorizontal: '9%',
    fontWeight: '700',
    textAlign: 'center',
  },
  AMuptxt: {
    fontSize: 18,
    color: 'black',
    marginTop: '6%',
    marginHorizontal: '9%',
    fontWeight: '700',
    textAlign: 'center',
  },

  Mframe: {
    height: '35%',
    width: '90%',
    borderBottomWidth: 0.2,
    alignSelf: 'center',
    marginTop: '1%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
 
});