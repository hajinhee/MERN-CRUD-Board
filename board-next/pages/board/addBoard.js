import React, {useState} from 'react';
import { useDispatch, connect } from 'react-redux';
import { addRequest, deleteRequest } from '@/modules/board/addBoard';
import { AddBoard } from '@/components';

const AddBoardPage = () => {
    const [inputs, setInputs] =useState({
        title:'', name:'', email:'', subject:''
    })
    const dispatch = useDispatch()

    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setInputs({...inputs,[name]: value})
    }
    const onSubmit = e => {
        e.preventDefault()
        alert('게시글 내용: '+JSON.stringify(inputs))
        dispatch(addRequest(inputs))
    }
  return (
    <AddBoard onChange={onChange} onSubmit={onSubmit}  />
  );
};

const mapStateToProps = state => ({ isAdded: state.addBoard.isAdded })
const addBoardActions = {addRequest, deleteRequest}

export default connect(mapStateToProps, addBoardActions)(AddBoardPage)
