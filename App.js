import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
const BLUE='blue' , RED='RED'
export default function App() {
  const [currentTurn,setCurrentTurn]=useState(RED)
  const [game,setGame]=useState([
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ])
  const changeTurn=()=>{
    if(currentTurn===RED){
      setCurrentTurn(BLUE)
    }else{
      setCurrentTurn(RED)
    }
  }
  const resetGame=()=>{
    setGame([
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ])
    setCurrentTurn(RED)
  }
  
  const onSelect =(i,j)=>{
    let tempArray=[].concat(game)
    if(tempArray[i][j]!==0){
    alert('This area already taken')
    }else{
      tempArray[i][j]=currentTurn
      setGame(tempArray)
      //CheckWin
      let winStatus=false
      //if [0,0] [0,1] [0,2] All same color then currentTurn win
      if(tempArray[0][0]===currentTurn && tempArray[0][1]===currentTurn && tempArray[0][2]===currentTurn){
        winStatus=true
        alert(`${currentTurn} WINNER`)
      }
       //if [0,0] [1,0] [2,0] All same color then currentTurn win
       if(tempArray[0][0]===currentTurn && tempArray[1][0]===currentTurn && tempArray[2][0]===currentTurn){
        winStatus=true
        alert(`${currentTurn} WINNER`)
      }
      //if [0,0] [1,1] [2,2] All same color then currentTurn win
      if(tempArray[0][0]===currentTurn && tempArray[1][1]===currentTurn && tempArray[2][2]===currentTurn){
       winStatus=true
       alert(`${currentTurn} WINNER`)
     }      
     //if [0,1] [1,1] [2,1] All same color then currentTurn win
     if(tempArray[0][1]===currentTurn && tempArray[1][1]===currentTurn && tempArray[2][1]===currentTurn){
      winStatus=true
      alert(`${currentTurn} WINNER`)
    }        
    //if [0,2] [1,2] [2,2] All same color then currentTurn win
    if(tempArray[0][2]===currentTurn && tempArray[1][2]===currentTurn && tempArray[2][2]===currentTurn){
     winStatus=true
     alert(`${currentTurn} WINNER`)
    }
    //if [2,0] [2,1] [2,2] All same color then currentTurn win
    if(tempArray[2][0]===currentTurn && tempArray[2][1]===currentTurn && tempArray[2][2]===currentTurn){
      winStatus=true
      alert(`${currentTurn} WINNER`)
     }   
    //if [1,0] [1,1] [1,2] All same color then currentTurn win
    if(tempArray[1][0]===currentTurn && tempArray[1][1]===currentTurn && tempArray[1][2]===currentTurn){
      winStatus=true
      alert(`${currentTurn} WINNER`)
     }     
      if(winStatus){
        resetGame()
      }else{
        changeTurn()
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
     <View style={styles.currentTurnContainer}>
     <Text>Current turn for : </Text>
     <Text style={currentTurn===RED ? styles.redColor : styles.blueColor}>{currentTurn}</Text>
     </View>


    {
      [0,1,2].map((row)=>{
        return( <View key={row} style={styles.flexRow}>
          <TouchableOpacity
          onPress={()=>onSelect(row,0)}
          >
          <View style={[styles.gameBox,game[row][0] == RED ? styles.redBg :game[row][0] == BLUE ? styles.blueBg :null ]} ><Text>{row} 0</Text></View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>onSelect(row,1)}
          >
          <View style={[styles.gameBox,game[row][1] == RED ? styles.redBg :game[row][1] == BLUE ? styles.blueBg :null ]}  ><Text>{row} 1</Text></View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>onSelect(row,2)}
          >
          <View style={[styles.gameBox,game[row][2] == RED ? styles.redBg :game[row][2] == BLUE ? styles.blueBg :null ]}  ><Text>{row} 2</Text></View>
          </TouchableOpacity>
        </View>)
      })
    }

    
     <TouchableOpacity
       onPress={()=>resetGame()}
       >
       <Text style={styles.reset}>Reset Game</Text>
       </TouchableOpacity>
    </View>
  );
}
