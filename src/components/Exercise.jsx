import React from 'react'
import { Container, ListGroup, Button } from 'react-bootstrap'
import { addWorkout, deleteWorkout } from '../redux/exerciseLogSlice'
import { useDispatch, useSelector } from 'react-redux'

const Exercise = () => {

    const dispatch = useDispatch()
    const workouts = useSelector((state) => state.exerciseLog.workouts)
    
    const handleAddWorkout = (id) =>{
        dispatch(addWorkout({id}))
    }
    const handleDeleteWorkout = (id) =>{
        dispatch(deleteWorkout({id}))
    }

  return (
    <Container>
        <ListGroup>
                    {(Object.entries(workouts).map((workout, index)=>(
                        <ListGroup.Item variant='warning' key={index}>
                        Customer ID: {workout.id}, Exercise Name: {workout.name}, Duration: {workout.duration}, Calories: {workout.calories}

                        <Button variant='danger' className='shadow-sm m-1 p-1' onClick={() => handleDeleteWorkout(workout.id)}>
                            Delete
                        </Button>
                    </ListGroup.Item>
                    )))}
        </ListGroup>
    </Container>
  )
}

export default Exercise