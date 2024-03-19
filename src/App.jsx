import { database } from './FireBase/Firebase'
import './App.css'

import { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {

  const toolbarOptions =[['bold','italic'],['link','image']]

  const module ={
    toolbar :toolbarOptions,
  };


 
  const [fname,setfname] =useState('')
 
  const [show,setshow] =useState(false)
  const [val,setval] = useState([])
  const [Id,setId]=useState('')
  const value =collection(database, 'demo')


  useEffect(()=>{
    const getData =async()=>{
   const dbval =  await getDocs(value)
   setval(dbval.docs.map(doc=>({...doc.data(),id:doc.id})))
    }
    getData()
  })



  const handleCreate=async()=>{
  await addDoc(value,{name1:fname})
  setfname('')

  }



const handleDelete= async (id)=>{
 const deletet = doc(database,"demo",id)
 await deleteDoc(deletet)
}



const handleUpdate =async ()=>{
const updateData =doc(database,"demo",Id)
await updateDoc(updateData,{name1:fname})
setfname('')

setshow(false)
}



const handleEdit =async(id,name1)=>{
  setfname(name1)

  setId(id)
  setshow(true)
}


  return (
    
    <div className=''>
      
     <div className='container'>
     <ReactQuill style={{ height: '200px',width:'70vh' }}  modules={module} theme="snow" value={fname}  onChange={(content) => setfname(content)} />
     
      
      {!show?<button className='btn btn-primary' onClick={handleCreate}>Create</button>:
      <button className='btn btn-primary' onClick={handleUpdate}>Update</button>}
</div>
    <div className='sum'>  {val.map(value=>


<Card className='shadow border' style={{ width:'200px',height:'fit-content' }}>
<Card.Body>
  <Card.Title>
  <p id='sum' dangerouslySetInnerHTML={{ __html: value.name1 }}></p>
  </Card.Title>
 <div className='d-flex justify-content-between'> 
  <Button onClick={()=>handleDelete(value.id)} variant="primary">Delete</Button>
  <Button onClick={()=>handleEdit(value.id,value.name1,value.name2)} variant="primary">Edit</Button></div>
</Card.Body>
</Card>

        )}</div>
     
    </div>
  )
}

export default App
