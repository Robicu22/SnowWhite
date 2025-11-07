import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
        <div className='userTable'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
              </table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john.doe@example.com</td>
                  <td>123 Main St</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
        </div>
    </>
  )
}

export default App
