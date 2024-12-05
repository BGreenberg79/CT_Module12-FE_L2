import React from 'react'
import { Container, ListGroup, Button, Form, Modal } from 'react-bootstrap'
import { addWorkout, deleteWorkout } from '../redux/exerciseLogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Exercise = () => {

    const dispatch = useDispatch()
    const workouts = useSelector((state) => state.exerciseLog.workouts)
    const [workoutId, setWorkoutId] = useState('')
    const [type, setType] = useState('')
    const [duration, setDuration] = useState('')
    const [calories, setCalories] = useState('')
    const [error, setError] = useState('')
    

    const handleAddWorkout = () => {
        if (workoutId && type && duration && calories){
        dispatch(addWorkout({
            "workoutId": workoutId,
            'type': type,
            "duration": duration,
            "calories": calories
        }));
        setWorkoutId('');
        setType('');
        setDuration('');
        setCalories('');

    } else { 
        setError('Please fill in all form fields')
    }}
    const handleDeleteWorkout = (workoutId) => {
        dispatch(deleteWorkout({ workoutId }))
    }

    return (
        <Container>
            {error && <Modal.Dialog><Modal.Body className='alert alert-danger'>{error}</Modal.Body></Modal.Dialog>}


            <Form className="border border-warning">

            <Form.Group>
                    <Form.Label>Workout Id:</Form.Label>
                    <Form.Control
                        type="number"
                        value={workoutId}
                        onChange={(e) => setWorkoutId(e.target.value)}
                    />
            </Form.Group>

                <Form.Group>
                    <Form.Label>Workout Type:</Form.Label>
                    <Form.Control
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Duration:</Form.Label>
                    <Form.Control
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Calories:</Form.Label>
                    <Form.Control
                        type="number"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                </Form.Group>

                <Button className='shadow-sm m-1 p-1' variant="success" onClick={handleAddWorkout}>Submit</Button>
            </Form>

            <ListGroup>
                {workouts.map((workout, index) => (
                    <ListGroup.Item variant='warning' key={index}>
                        Workout ID: {workout.workoutId}, Exercise Type: {workout.type}, Duration: {workout.duration}, Calories: {workout.calories}

                        <Button variant='danger' className='shadow-sm m-1 p-1' onClick={() => handleDeleteWorkout(workout.workoutId)}>
                            Delete
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}

export default Exercise;