import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { Plus, Trash2, Edit } from 'lucide-react'

export default function ManageUsers() {
  const [tab, setTab] = useState('Faculty')
  const [yearFilter, setYearFilter] = useState('Year 1')

  const [facultyList, setFacultyList] = useState([
    { id: 1, name: 'Dr. Rajesh Kumar', dept: 'Computer Science', role: 'Professor' },
    { id: 2, name: 'Prof. Anita Sharma', dept: 'Computer Science', role: 'Asst. Professor' },
  ])

  const [studentList, setStudentList] = useState([
    { id: 1, name: 'Sarah Doe', rollNo: 'CS24100', year: 'Year 3', batch: 'CSE-A' },
    { id: 2, name: 'John Smith', rollNo: 'CS24101', year: 'Year 3', batch: 'CSE-B' },
  ])

  return (
    <PortalLayout role="hod" title="Manage Users">
      <div className="tabs mb-24">
        {['Faculty', 'Students'].map(t => (
          <div key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
            {t}
          </div>
        ))}
      </div>

      {tab === 'Faculty' && (
        <div className="card">
          <div className="flex justify-between items-center mb-16">
            <h3 className="card-title">Teaching Faculty</h3>
            <button className="btn btn-primary"><Plus size={16} /> Add Faculty</button>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead><tr><th>Name</th><th>Department</th><th>Role</th><th>Action</th></tr></thead>
              <tbody>
                {facultyList.map(f => (
                  <tr key={f.id}>
                    <td className="font-semibold">{f.name}</td>
                    <td>{f.dept}</td>
                    <td>{f.role}</td>
                    <td>
                      <div className="flex gap-8">
                        <button className="btn btn-sm btn-secondary"><Edit size={14} /></button>
                        <button className="btn btn-sm btn-danger"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'Students' && (
        <div className="card">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-16">
              <h3 className="card-title">Students</h3>
              <select className="form-select" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} style={{ width: 150 }}>
                <option>Year 1</option>
                <option>Year 2</option>
                <option>Year 3</option>
                <option>Year 4</option>
              </select>
            </div>
            <button className="btn btn-primary"><Plus size={16} /> Add Student</button>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead><tr><th>Name</th><th>Roll Number</th><th>Year</th><th>Batch</th><th>Action</th></tr></thead>
              <tbody>
                {studentList.filter(s => s.year === yearFilter).map(s => (
                  <tr key={s.id}>
                    <td className="font-semibold">{s.name}</td>
                    <td>{s.rollNo}</td>
                    <td>{s.year}</td>
                    <td>{s.batch}</td>
                    <td>
                      <div className="flex gap-8">
                        <button className="btn btn-sm btn-secondary"><Edit size={14} /></button>
                        <button className="btn btn-sm btn-danger"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {studentList.filter(s => s.year === yearFilter).length === 0 && (
                  <tr><td colSpan="5" className="text-center text-muted" style={{ padding: 40 }}>No students found for this year.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </PortalLayout>
  )
}
