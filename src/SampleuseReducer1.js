import React, { useReducer} from 'react';
import EditReducer from './EditReducer';
const reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON")
    {
       const newarray=state.data.filter((eachObj)=>{
           return eachObj.id!==action.payload;
           
       });
       return {...state,data:newarray};
    }
    if(action.type==="EDIT"){
        return {...state,isEditing:action.payload}
    }
        if(action.type==="Update"){
           
           const newarray=state.data.map((eachObj)=>{
            if(eachObj.id===action.payload.id){
                return{
                    id:action.payload.id,  
                    name:action.payload.name,
                       age:action.payload.age}}
            
            else{
                return eachObj;
            }
           })
           
           return {...state,data:newarray};
                   
          }
          return state;
        }
      

const SampleuseReducer1 = () => {
    const intitialstate={
        data:
        [{id:1,name:"akhila",age:22},{id:2,name:"navya",age:20},{id:3,name:"anjanamma",age:43},{id:4,name:"ramamohan",age:45}],
        isEditing:{status:false,id:"",name:"",age:""}
        };
    const[state,dispatch]=useReducer(reducer,intitialstate);
    const handledelete=(id)=>{
        dispatch({type:"DELETE_PERSON",payload:id,});
    };
   const handleEdit=(person)=>{
    dispatch({type:"EDIT",payload:{status:true ,id:person.id ,name:person.name,age:person.age}});
   } 
   const updateData=(id,name,age)=>{
    dispatch({type:"Update",payload:{id,name,age}});
    dispatch({type:"EDIT",payload:{status:false,id:id,name:name,age:age}});
   }  
  return (
    <div>
   { state.isEditing.status&&<EditReducer id={state.isEditing.id} Uname={state.isEditing.name} Uage={state.isEditing.age} updateData={updateData} />}
        <ul>
    {
        state.data.map((eachObj)=>{
            return<li key={eachObj.id}>
            <h3>{eachObj.name}</h3>
            <h3>{eachObj.age}</h3>
            <button onClick={()=>{handleEdit(eachObj) }}>Edit</button>
            <button onClick={()=>{handledelete(eachObj.id) }}>delete</button>
             </li>
         })
    }
        </ul>
    </div>
  )
}


export default SampleuseReducer1
