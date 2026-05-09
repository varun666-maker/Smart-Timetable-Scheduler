import { useState } from 'react'
import PortalLayout from '../../components/PortalLayout'
import { departments, subjects, faculty, classrooms } from '../../data/mockData'
import { Upload, Plus, Trash2, Check } from 'lucide-react'

const stepLabels = ['Department & Semester','Classroom Setup','PDF Upload & Subjects','Faculty Mapping','Day Schedule Config']

function Stepper({ current }) {
  return (
    <div className="stepper">
      {stepLabels.map((s, i) => (
        <div key={i} style={{display:'flex',alignItems:'center'}}>
          <div className={`step ${i === current ? 'active' : i < current ? 'completed' : ''}`}>
            <div className="step-circle">{i < current ? <Check size={16}/> : i + 1}</div>
            <div className="step-label">{s}</div>
          </div>
          {i < stepLabels.length - 1 && <div className={`step-line ${i < current ? 'completed' : ''}`} />}
        </div>
      ))}
    </div>
  )
}

function Step1() {
  return (
    <div className="grid-2">
      <div className="form-group"><label className="form-label">Department</label><select className="form-select"><option>Select Department</option>{departments.map(d=><option key={d}>{d}</option>)}</select></div>
      <div className="form-group"><label className="form-label">Academic Year</label><select className="form-select"><option>2025-2026</option><option>2026-2027</option></select></div>
      <div className="form-group"><label className="form-label">Semester Number</label><select className="form-select">{[1,2,3,4,5,6,7,8].map(s=><option key={s}>{s}</option>)}</select></div>
      <div className="form-group"><label className="form-label">Semester Start Date</label><input type="date" className="form-input" defaultValue="2026-01-15"/></div>
      <div className="form-group"><label className="form-label">Semester End Date</label><input type="date" className="form-input" defaultValue="2026-05-30"/></div>
    </div>
  )
}

function Step2({ rooms, setRooms }) {
  const addRoom = () => setRooms([...rooms, {name:'',type:'Lecture Hall',capacity:'',floor:''}])
  const removeRoom = i => setRooms(rooms.filter((_,idx)=>idx!==i))
  const update = (i,k,v) => { const r=[...rooms]; r[i]={...r[i],[k]:v}; setRooms(r) }
  return (
    <div>
      <div className="table-wrapper">
        <table className="table">
          <thead><tr><th>Room Name</th><th>Type</th><th>Capacity</th><th>Floor</th><th>Action</th></tr></thead>
          <tbody>
            {rooms.map((r,i)=>(
              <tr key={i}>
                <td><input className="form-input" value={r.name} onChange={e=>update(i,'name',e.target.value)} placeholder="Room name"/></td>
                <td><select className="form-select" value={r.type} onChange={e=>update(i,'type',e.target.value)}><option>Lecture Hall</option><option>Lab</option><option>Seminar Room</option></select></td>
                <td><input className="form-input" type="number" value={r.capacity} onChange={e=>update(i,'capacity',e.target.value)} placeholder="60"/></td>
                <td><input className="form-input" value={r.floor} onChange={e=>update(i,'floor',e.target.value)} placeholder="1st"/></td>
                <td><button className="btn btn-sm btn-danger" onClick={()=>removeRoom(i)}><Trash2 size={14}/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-secondary mt-16" onClick={addRoom}><Plus size={16}/>Add Room</button>
    </div>
  )
}

function Step3({ subs, setSubs }) {
  const [uploaded, setUploaded] = useState(false)
  const addSub = () => setSubs([...subs, {name:'',code:'',credits:'',hours:'',type:'Theory'}])
  const removeSub = i => setSubs(subs.filter((_,idx)=>idx!==i))
  const update = (i,k,v) => { const s=[...subs]; s[i]={...s[i],[k]:v}; setSubs(s) }
  return (
    <div>
      {!uploaded ? (
        <div className="upload-zone" onClick={()=>setUploaded(true)}>
          <Upload size={40} color="var(--text-muted)" />
          <div className="font-semibold mt-16">Drop PDF here or click to upload</div>
          <div className="text-sm text-muted mt-8">Syllabus PDF will be parsed to extract subjects</div>
        </div>
      ) : (
        <>
          <div className="badge badge-success mb-16"><Check size={14}/> PDF parsed successfully — {subs.length} subjects extracted</div>
          <div className="table-wrapper">
            <table className="table">
              <thead><tr><th>Subject Name</th><th>Code</th><th>Credits</th><th>Hours/Week</th><th>Type</th><th>Action</th></tr></thead>
              <tbody>
                {subs.map((s,i)=>(
                  <tr key={i}>
                    <td><input className="form-input" value={s.name} onChange={e=>update(i,'name',e.target.value)}/></td>
                    <td><input className="form-input" value={s.code} onChange={e=>update(i,'code',e.target.value)}/></td>
                    <td><input className="form-input" type="number" value={s.credits} onChange={e=>update(i,'credits',e.target.value)} style={{width:70}}/></td>
                    <td><input className="form-input" type="number" value={s.hours} onChange={e=>update(i,'hours',e.target.value)} style={{width:70}}/></td>
                    <td><select className="form-select" value={s.type} onChange={e=>update(i,'type',e.target.value)}><option>Theory</option><option>Lab</option><option>Mentoring</option></select></td>
                    <td><button className="btn btn-sm btn-danger" onClick={()=>removeSub(i)}><Trash2 size={14}/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-secondary mt-16" onClick={addSub}><Plus size={16}/>Add Subject</button>
        </>
      )}
    </div>
  )
}

function Step4() {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead><tr><th>Faculty Name</th><th>Subjects (Multi-select)</th><th>Max Hours/Day</th></tr></thead>
        <tbody>
          {faculty.map(f=>(
            <tr key={f.id}>
              <td className="font-semibold">{f.name}</td>
              <td>
                <div className="flex gap-8" style={{flexWrap:'wrap'}}>
                  {subjects.filter(s=>f.subjects.includes(s.code)).map(s=>(
                    <span key={s.code} className="badge badge-primary">{s.name}</span>
                  ))}
                </div>
              </td>
              <td><input className="form-input" type="number" defaultValue={f.maxHours} style={{width:80}}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Step5() {
  const breaks = [{name:'Tea Break',start:'10:00',dur:'15 min'},{name:'Lunch Break',start:'12:00',dur:'60 min'}]
  const [brk, setBrk] = useState(breaks)
  const hours = ['8:00','9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00']
  return (
    <div>
      <div className="grid-2 mb-24">
        <div className="form-group"><label className="form-label">Working Hours Start</label><input type="time" className="form-input" defaultValue="08:00"/></div>
        <div className="form-group"><label className="form-label">Working Hours End</label><input type="time" className="form-input" defaultValue="17:00"/></div>
      </div>
      <div className="card mb-24">
        <div className="card-title mb-16">Break Slots</div>
        {brk.map((b,i)=>(
          <div key={i} className="flex items-center gap-16 mb-8">
            <input className="form-input" value={b.name} onChange={e=>{const n=[...brk];n[i].name=e.target.value;setBrk(n)}} style={{width:160}}/>
            <input type="time" className="form-input" defaultValue={b.start} style={{width:130}}/>
            <input className="form-input" value={b.dur} readOnly style={{width:100}}/>
            <button className="btn btn-sm btn-danger" onClick={()=>setBrk(brk.filter((_,idx)=>idx!==i))}><Trash2 size={14}/></button>
          </div>
        ))}
        <button className="btn btn-secondary btn-sm mt-8" onClick={()=>setBrk([...brk,{name:'',start:'',dur:'15 min'}])}><Plus size={14}/>Add Break</button>
      </div>
      <div className="card">
        <div className="card-title mb-16">Day Timeline Preview</div>
        <div style={{display:'flex',height:48,borderRadius:'var(--radius-sm)',overflow:'hidden',border:'1px solid var(--border)'}}>
          {hours.map((h,i)=>{
            const isBreak = (h==='10:00'||h==='12:00')
            return <div key={i} style={{flex:1,background:isBreak?'var(--warning-bg)':'var(--primary-bg)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.7rem',fontWeight:600,color:isBreak?'var(--warning)':'var(--primary)',borderRight:'1px solid var(--border)'}}>{h}{isBreak?' ☕':''}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default function SetupWizard() {
  const [step, setStep] = useState(0)
  const [rooms, setRooms] = useState(classrooms.map(c=>({...c})))
  const [subs, setSubs] = useState(subjects.map(s=>({...s})))
  const steps = [<Step1/>,<Step2 rooms={rooms} setRooms={setRooms}/>,<Step3 subs={subs} setSubs={setSubs}/>,<Step4/>,<Step5/>]

  return (
    <PortalLayout role="hod" title="Setup Wizard">
      <div className="card">
        <Stepper current={step}/>
        <h3 className="mb-24">{stepLabels[step]}</h3>
        {steps[step]}
        <div className="flex justify-between mt-24" style={{paddingTop:24,borderTop:'1px solid var(--border)'}}>
          <button className="btn btn-secondary" onClick={()=>setStep(Math.max(0,step-1))} disabled={step===0}>Back</button>
          {step<4 ? <button className="btn btn-primary" onClick={()=>setStep(step+1)}>Continue</button> : <button className="btn btn-success">🚀 Generate Timetable</button>}
        </div>
      </div>
    </PortalLayout>
  )
}
