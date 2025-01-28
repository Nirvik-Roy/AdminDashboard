import React from 'react'
import adobe_icon from '../../assets/download (4).png'
import spotify_icon from '../../assets/download (5).png'
import figma_icon from '../../assets/download (2).png'
import icon_11 from '../../assets/download (1).png'
import icon_12 from '../../assets/download (3).png'

const ProjectsTable = () => {
  const projectsData = [
    {
      companyName: "Chakra Vision UI Version",
      companyIcon: adobe_icon,
      iconColor: "#2ebd59",
      status: "Working", 
      budget: "$14,000",
      completion: 60,
    },
    {
      companyName: "Add Progress Track",
      companyIcon: icon_12,
      iconColor: "#2ebd59",
      status: "Done", 
      budget: "$3,000",
      completion: 10,
    },
    {
      companyName: "Fix Platform Errors",
      companyIcon: figma_icon,
      iconColor: "#2ebd59",
      status: "Canceled",
      budget: "Not set",
      completion: 100,
    },
    {
      companyName: "Launch our Mobile App",
      companyIcon: spotify_icon,
      iconColor: "#2ebd59",
      status: "Canceled",
      budget: "$20,500",
      completion: 100,
    },
    {
      companyName: "Add the New Pricing Page",
      companyIcon: icon_11,
      iconColor: "#2ebd59",
      status: "Done",
      budget: "$500",
      completion: 25,
    },
    
    
  ];
  return (
    <>
      <div className="table_dashboard_projects_table_wrapper" style={{overflowX: 'auto'}}>
      
      <div className="table_dashboard_projects_table_header">
      <p>Projects Table</p>
      </div>
      
        

        <table className='table_dashboard_projects_table'>
          <thead>
            <tr className='table_dashboard_projects_table_row'>
              <th className='table_dashboard_projects_table_heading projects_heading_11'>PROJECT</th>
              <th className='table_dashboard_projects_table_heading projects_heading_13'>BUDGET</th>
              <th className='table_dashboard_projects_table_heading projects_heading_13'>STATUS</th>
              <th className='table_dashboard_projects_table_heading projects_heading_14'>COMPLETION</th>
              <th className='table_dashboard_projects_table_heading action_heading_22'>ACTION</th>
            </tr>
          </thead>
          <tbody>
        {projectsData.map((project, index) => (
          <tr key={index} className="table_dashboard_projects_table_row">
            <td className="table_dashboard_projects_table_data projects_data_2">
              <div className="table_dashboard_project_table_projects">
               
                <img src={project.companyIcon} alt="" style={{ width: '20px', height: '20px' }}/>
                <span>{project.companyName}</span>
              </div>
            </td>
            <td className="table_dashboard_projects_table_data budget_data_2">{project.budget}</td>
            <td className="table_dashboard_projects_table_data status_data_2">{project.status}</td>
            <td className="table_dashboard_projects_table_data completion_data_2">
              <div className="table_dashboard_completion_data">
                {project.completion}%
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#2d2e5f",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: `${project.completion}%`,
                        height: "5px",
                        backgroundColor: "#0075ff",
                        borderRadius: "5px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td className="table_dashboard_projects_table_data action_button"><i class="fa-solid fa-ellipsis-vertical" style={{color: "#a0aec0", cursor: "pointer"}}></i></td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </>
  )
}

export default ProjectsTable
