import React from 'react'

const Projects = () => {
  const projectsData = [
    {
      companyName: "Chakra Vision UI Version",
      companyIcon: "fa-brands fa-spotify",
      iconColor: "#2ebd59",
      members: "", // Add member data here
      budget: "$14,000",
      completion: 60,
    },
    {
      companyName: "Add Progress Track",
      companyIcon: "fa-brands fa-spotify",
      iconColor: "#2ebd59",
      members: "",
      budget: "$3,000",
      completion: 10,
    },
    {
      companyName: "Fix Platform Errors",
      companyIcon: "fa-brands fa-spotify",
      iconColor: "#2ebd59",
      members: "",
      budget: "Not set",
      completion: 100,
    },
    {
      companyName: "Launch our Mobile App",
      companyIcon: "fa-brands fa-spotify",
      iconColor: "#2ebd59",
      members: "",
      budget: "$20,500",
      completion: 100,
    },
    {
      companyName: "Add the New Pricing Page",
      companyIcon: "fa-brands fa-spotify",
      iconColor: "#2ebd59",
      members: "",
      budget: "$500",
      completion: 25,
    },
    {
      companyName: "Redesign New Online Shop",
      companyIcon: "fa-brands fa-spotify",
      iconColor: "#2ebd59",
      members: "",
      budget: "$2,000",
      completion: 40,
    },
    
  ];
  return (
    <>
      <div className="projects_wrapper">
      <div className="projects_header_section">
      <div className="projects_left_header">
      <p>Projects</p>
      <h5><i class="fa-solid fa-circle-check" style={{color: '#008000', marginRight: '8px'}}></i><span>30 done</span> this month</h5>
      </div>
      <div className="ellipsis_vertical_button"><i class="fa-solid fa-ellipsis-vertical" style={{color: "#a0aec0", cursor: "pointer"}}></i></div>
      </div>
        

        <table className='projects_table'>
          <thead>
            <tr className='projects_table_row'>
              <th className='projects_table_heading'>COMPANIES</th>
              <th className='projects_table_heading'>MEMBERS</th>
              <th className='projects_table_heading'>BUDGET</th>
              <th className='projects_table_heading'>COMPLETION</th>
            </tr>
          </thead>
          <tbody>
        {projectsData.map((project, index) => (
          <tr key={index} className="projects_table_row">
            <td className="projects_table_data1">
              <div className="project_table_companies">
                <i
                  className={project.companyIcon}
                  style={{ color: project.iconColor }}
                ></i>
                <span>{project.companyName}</span>
              </div>
            </td>
            <td className="projects_table_data2">{project.members}</td>
            <td className="projects_table_data3">{project.budget}</td>
            <td className="projects_table_data4">
              <div className="completion_data">
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
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </>
  )
}

export default Projects
