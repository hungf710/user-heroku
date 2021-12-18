import React, {useState} from 'react'

export default function Todolist() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    //const [jobs, setJobs] = useState(() => {
    //    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    //    return storageJobs
    //})

    const handleSubmit = () => {
        //setJobs(prev => {
        //    const newJobs = [...prev, job]

        //    const jsonJobs = JSON.stringify(newJobs)
        //    localStorage.setItem('jobs', jsonJobs)

        //    return newJobs
        //})
        //setJob('')
        setJobs(prev => [...prev, job])
    }

    //console.log(job);

    return (
        <div className='ant-table-container'>
            <input value={job} onChange={e => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>

            <hr style={{width: 400, display:'flex'}}/>
            <h1 style={{paddingLeft: 60}}>Todo list</h1>
            <ul>
                {/*{console.log(jobs)}*/}
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}
