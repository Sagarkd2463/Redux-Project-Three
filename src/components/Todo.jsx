import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, removeAllItem } from '../actions/index';


function Todo() {

    const [data, setData] = useState('');

    const list = useSelector((state) => state.todoReducer.list);

    const dispatch = useDispatch();

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption> Add Todo List Here </figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder='Add Items..' value={data}
                            onChange={(e) => setData(e.target.value)} />
                        <i className='fa fa-plus add-btn' title='add Item' onClick={() => dispatch(addItem(data),
                            setData(''))}></i>
                    </div>

                    <div className='showItem'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className='eachItem' key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className='todo-btn'>
                                            <button>
                                                <i className='fa-solid fa-trash' title='delete item' onClick={() => dispatch(deleteItem(elem.id))}></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='showItems'>
                        <button className='btn' data-sm-link-text="remove All" onClick={() => dispatch(removeAllItem())}>
                            <span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;