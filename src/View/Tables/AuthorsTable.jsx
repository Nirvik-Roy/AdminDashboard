import React from 'react'
import logo_one from '../../assets/avatar4.2a4ba26c.png'
import logo_two from '../../assets/avatar2.b8132c3c.png'
import logo_three from '../../assets/avatar3.4d26ce02.png'
import logo_four from '../../assets/avatar1.1d9e1978.png'
import logo_five from '../../assets/avatar5.ffd2f0d1.png'
import logo_six from '../../assets/avatar6.ce4b99ea.png'

const AuthorsTable = () => {
  const authorsData = [
    {
      id: 1,
      logo: logo_one,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      role: "Manager",
      organization: "Organization",
      status: "Online",
      date: "23/04/18",
    },
    {
      id: 2,
      logo: logo_two,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      role: "Programato",
      organization: "Developer",
      status: "Offline",
      date: "11/01/19",
    },
    {
      id: 3,
      logo: logo_three,
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      role: "Executive",
      organization: "Projects",
      status: "Online",
      date: "19/09/17",
    },
    {
      id: 4,
      logo: logo_four,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      role: "Programato",
      organization: "Developer",
      status: "Online",
      date: "24/12/08",
    },
    {
      id: 5,
      logo: logo_five,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      role: "Manager",
      organization: "Executive",
      status: "Offline",
      date: "11/01/19",
    },
    {
      id: 6,
      logo: logo_six,
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      role: "Programato",
      organization: "Developer",
      status: "Offline",
      date: "11/01/19",
    },
  ];
  return (
    <>
      <div className="authors_table_wrapper" style={{overflowX: 'auto'}}>
        <p className='authors_table_header'>Authors table</p>
        <table className='authors_table'>
          <thead>
            <tr className='authors_table_row'>
              <th className='authors_table_heading author_heading'>AUTHOR</th>
              <th className='authors_table_heading function_heading'>FUNCTION</th>
              <th className='authors_table_heading status_heading'>STATUS</th>
              <th className='authors_table_heading employed_heading'>EMPLOYED</th>
              <th className='authors_table_heading action_heading'>ACTION</th>
            </tr>
          </thead>
          <tbody>

          {authorsData.map((author) => (
        <tr key={author.id} className="authors_table_row">
          <td className="author_data data_1">
            <div className="author_name_logo">
              <div className="author_logo">
                <img src={author.logo} alt={author.name} />
              </div>
              <div className="author_name_email">
                <p className='author_name'>{author.name}</p>
                <p className='author_email'>{author.email}</p>
              </div>
            </div>
          </td>
          <td className="author_data data_2">
            <div className="author_function_data">
              <p className='author_role'>{author.role}</p>
              <p className='author_organisation'>{author.organization}</p>
            </div>
          </td>
          <td className="author_data data_3">
            <div className="status_button" style={{padding: "3px 5px", backgroundColor:  author.status === "Online" ? "#01b574" : "transparent", color: "#FFF", borderRadius: "7px", border: author.status === "Offline" ? "1px solid white" : "null"}}>
              {author.status}
            </div>
          </td>
          <td className="author_data data_4">{author.date}</td>
          <td className="author_data data_5">
            <p>Edit</p>
          </td>
        </tr>
      ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AuthorsTable
