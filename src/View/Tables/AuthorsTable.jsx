import React from 'react'
import logo_one from '../../assets/avatar4.2a4ba26c.png'

const AuthorsTable = () => {
  return (
    <>
      <div className="authors_table_wrapper">
        <p className='authors_table_header'>Authors table</p>
        <table className='authors_table'>
          <thead>
            <tr>
              <th className='authors_table_heading'>AUTHOR</th>
              <th className='authors_table_heading'>FUNCTION</th>
              <th className='authors_table_heading'>STATUS</th>
              <th className='authors_table_heading'>EMPLOYED</th>
              <th className='authors_table_heading'>ACTION</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td  className='author_data_1'><div className="author_name_logo"><div className="author_logo"><img src={logo_one} alt="" /></div><div className="author_name_email"><p>Esthera Jackson</p><p>esthera@simmmple.com</p></div></div></td>
                <td  className='author_data_2'><div className="author_function_data"><p>	
                Manager</p><p>Organization</p></div></td>
                <td  className='author_data_3'><div className="status_button">Online</div></td>
                <td  className='author_data_4'>23/04/18</td>
                <td  className='author_data_5'><p>Edit</p></td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AuthorsTable
