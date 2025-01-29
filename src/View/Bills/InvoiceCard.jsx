import React from 'react'
import file_img from '../../assets/download (10).png'

const InvoiceCard = () => {
  return (
    <>
      <div className="invoice_card_wrapper" style={{overflowX:"auto"}}>
        <div className="invoice_card_heading_button_wrapper">
          <p>Invoices</p>
          <div className="invoice_btn">
            VIEW ALL
          </div>
        </div>

        <table className='invoices_table'>
        <tbody>
        <tr className='invoice_table_row'>
            <td className='invoices_data_1'><p style={{color:"#FFF", fontSize:"14px", fontWeight:"500"}}>March, 01, 2020</p><p style={{color:"#9eacbe", fontSize:"12px", fontWeight:"500"}}>#MS-415646</p></td>
            <td className='invoices_data_2'>$180</td>
            <td className='invoices_data_3'><div className="invoices_pdf_div"><img src={file_img} alt="" /><span>PDF</span></div></td>
          </tr>
          <tr className='invoice_table_row'>
          <td className='invoices_data_1'><p style={{color:"#FFF", fontSize:"14px", fontWeight:"500"}}>March, 01, 2020</p><p style={{color:"#9eacbe", fontSize:"12px", fontWeight:"500"}}>#MS-415646</p></td>
            <td className='invoices_data_2'>$180</td>
            <td className='invoices_data_3'><div className="invoices_pdf_div"><img src={file_img} alt="" /><span>PDF</span></div></td>
          </tr>
          <tr className='invoice_table_row'>
          <td className='invoices_data_1'><p style={{color:"#FFF", fontSize:"14px", fontWeight:"500"}}>March, 01, 2020</p><p style={{color:"#9eacbe", fontSize:"12px", fontWeight:"500"}}>#MS-415646</p></td>
            <td className='invoices_data_2'>$180</td>
            <td className='invoices_data_3'><div className="invoices_pdf_div"><img src={file_img} alt="" /><span>PDF</span></div></td>
          </tr>
          <tr className='invoice_table_row'>
          <td className='invoices_data_1'><p style={{color:"#FFF", fontSize:"14px", fontWeight:"500"}}>March, 01, 2020</p><p style={{color:"#9eacbe", fontSize:"12px", fontWeight:"500"}}>#MS-415646</p></td>
            <td className='invoices_data_2'>$180</td>
            <td className='invoices_data_3'><div className="invoices_pdf_div"><img src={file_img} alt="" /><span>PDF</span></div></td>
          </tr>
          <tr className='invoice_table_row'>
          <td className='invoices_data_1'><p style={{color:"#FFF", fontSize:"14px", fontWeight:"500"}}>March, 01, 2020</p><p style={{color:"#9eacbe", fontSize:"12px", fontWeight:"500"}}>#MS-415646</p></td>
            <td className='invoices_data_2'>$180</td>
            <td className='invoices_data_3'><div className="invoices_pdf_div"><img src={file_img} alt="" /><span>PDF</span></div></td>
          </tr>
        </tbody>
        </table>
      </div>
    </>
  )
}

export default InvoiceCard
