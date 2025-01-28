import React, { useEffect } from 'react'
import './Tables.css'
import AuthorsTable from './AuthorsTable'
import Header from '../../Layout/Header'
import ProjectsTable from './ProjectsTable'

const Tables = () => {
  useEffect(()=>{
    window.scrollTo({top:0, behavior:'instant'})
  },[])
  return (
    <>
    <Header name={'Tables'}/>
      <section className='tables_dashboard_section'>
        <div className="uni_wrapper">
          <div className="uni_container">
          <p className='tables_dashboard_header'>Tables</p>
            <AuthorsTable />
            <ProjectsTable />
          </div>
        </div>
      </section>
    </>
  )
}

export default Tables
