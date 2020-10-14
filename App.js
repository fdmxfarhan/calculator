import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [num, setNum] = useState(0);
  const [lastNum, setLastNum] = useState(0);
  const [operator, setOperator] = useState('N');
  const presslistener = (button) => {
    if(button == '+'){
      setLastNum(num);
      setNum(0);
      setOperator('+');
    }
    else if(button == '-'){
      setLastNum(num);
      setNum(0);
      setOperator('-');
    }
    else if(button == '÷'){
      setLastNum(num);
      setNum(0);
      setOperator('÷');
    }
    else if(button == 'x'){
      setLastNum(num);
      setNum(0);
      setOperator('x');
    }
    else if(button == '='){
      if(operator == '+'){
        setNum(lastNum + num);
      }
      else if(operator == '-'){
        setNum(lastNum - num);
      }
      else if(operator == '÷'){
        setNum(lastNum / num);
      }
      else if(operator == 'x'){
        setNum(lastNum * num);
      }
      setOperator('N');
    }
    else{
      var newNum = num * 10 + button;
      setNum(newNum);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.num}>{num}</Text>
      </View>
      <View style={styles.buttonsArea}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => presslistener(1)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener(2)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener(3)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener('+')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonsArea}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => presslistener(4)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener(5)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener(6)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener('-')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.buttonsArea}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => presslistener(7)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener(8)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener(9)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener('÷')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>÷</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.buttonsArea}>
        <View style={styles.row}>
        <TouchableOpacity onPress={() => presslistener(0)}>
            <View style={styles.longButton}>
              <Text style={styles.buttonText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener('=')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>=</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => presslistener('x')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>x</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display:{
    backgroundColor: 'lightgray',
    width: '90%',
    marginTop: 60,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginBottom: 30,
  },
  buttonsArea:{
    marginBottom: 10,
    width: '90%',
    // flex: 1,
    flexDirection: 'column',
  },
  row:{
    // backgroundColor: 'red',
    width: '100%',
    // flex: 1,
    flexDirection: 'row',
  },
  button:{
    backgroundColor: 'lightblue',
    width: 83,
    height: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  longButton:{
    backgroundColor: 'lightblue',
    width: 174,
    height: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: "center",
    fontSize: 25,
  },
  num:{
    fontSize: 25,
  },
});
