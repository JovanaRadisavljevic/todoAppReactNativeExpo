import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Todo{
  id:number;
  text:string;
  done:boolean;
}
const initialTodo:Todo[] = [
  {id:1, text:"Learn react", done:true},
  {id:2, text:"Learn react", done:false},
  {id:3, text:"Learn react", done:true},
];

export default function Index() {
  const [todos,setTodos]= useState<Todo[]>(initialTodo);

  return (
    <View style={style.container}>
      <View style={style.todoContainer}>
        <Text style={style.todoHeader}>Obaveze</Text>
        {todos.map((task)=>(
          <View key={task.id} style={style.todoCard}>
            <Text >{task.text}</Text>
          </View>
        ))}
      </View>
      <View>
        <Link asChild href="/create" >
          <TouchableOpacity activeOpacity={0.6} style={style.createTodoButton} >
            <Text style={style.buttonText}>Dodaj novu obavezu</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const style =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent:"space-between"
  },
  todoContainer:{
    marginVertical: 5,
    padding:10,
  },
  todoHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },

  //todo card
  todoCard:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    paddingHorizontal:10,
    paddingVertical:18,
    marginVertical: 5,
    backgroundColor: "#429ef5",
    borderRadius: 5,
    elevation:2,
  },
  todoTitle:{
    fontSize: 10,
    fontWeight:500,
  },
  createTodoButton:{
    backgroundColor: "#014c91",
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 10,
    borderRadius: 30,
    alignItems: "center",
    textAlign: "center",
  },
  buttonText:{
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  }
});
