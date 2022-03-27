import React, { useState, useEffect} from 'react'
import '../App.css';

import { fetchStudents } from '../api';

import { Inject, ScheduleComponent, Day, Week, Month, Agenda, ViewsDirective,ViewDirective, TimelineViews, TimelineMonth, DragAndDrop, Resize, ResourceDirective,ResourcesDirective, GroupModel } from '@syncfusion/ej2-react-schedule';

import { TreeViewComponent, DragAndDropEventArgs } from '@syncfusion/ej2-react-navigations'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'

const Schedule = () => {

  let scheduleObj = new ScheduleComponent()
    let [patiens, setPatiens] = useState([]);

    useEffect(() => {fetchStudents().then((response) => {
      setPatiens(response.student)
    })
  },[])

  
    let data = [{
        Id: 1,
        DNI: 15234566,
        Subject: 'Diego',
        StartTime: new Date(2021, 11, 21, 11, 0),
        EndTime: new Date(2021, 11, 21, 11, 30),
        ResourceId: 1
      },
      {
        Id: 2,
        DNI: 13256987,
        Subject: 'Jesuan',
        StartTime: new Date(2021, 11, 21, 10, 0),
        EndTime: new Date(2021, 11, 21, 10, 30),
        ResourceId: 2
      },
      {
        Id: 3,
        DNI: 12879632,
        Subject: 'Yani',
        StartTime: new Date(2021, 11, 23, 11, 30),
        EndTime: new Date(2021, 11, 23, 12, 12),
        RecurrenceRule:"FREQ=WEEKLY;BYDAY=TH;INTERVAL=2;COUNT=10;",
        ResourceId: 3
      }
    
    ]

      


    let ResourceDataSource = [{
      Id: 1,
      Doctor: 'John',
      color: '#0033cc'
    },
    {
      Id: 2,
      Doctor: 'Smith',
      color: '#003300'
    },
    {
      Id: 3,
      Doctor: 'David',
      color: '#9966ff'
    }]

    let field = { dataSource: data, id: 'Id', text: 'Subject'}

    //     const editorWindowTemplate = (props) => {
    //   console.log(props)
    //   return(
    //     <table className = "custom-event-editor">
    //       <tbody>
    //         <tr>
    //           <td className = "e-textlabel">summary</td>
    //           <td><input id="summary" name="Subject" placeholder={props.Subject}/></td>
    //         </tr>
    //         <tr>
    //           <td className = "e-textlabel">status</td>
    //           <td>
    //             <DropDownListComponent id="EventType" dataSource={['new', 'requested', 'confirmed']} placeholder = 'choose status' data-name="EventType" value={props.EventType || null} >

    //             </DropDownListComponent>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className = "e-textlabel">from</td>
    //           <td>
    //             <DateTimePickerComponent id="StartTime" data-name="StartTime" value = {new Date(props.startTime || props.StartTime)}></DateTimePickerComponent>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className = "e-textlabel">to</td>
    //           <td>
    //             <DateTimePickerComponent id="EndTime" data-name="EndTime" value = {new Date(props.endTime || props.EndTime)}></DateTimePickerComponent>
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className = "e-textlabel">reason</td>
    //           <td>
    //             <textarea id="Description" name="Description" rows={3} cols={50}></textarea>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   )
    // }

    const onTreeDragStop = (args) => {
      
      let CellData = scheduleObj.getCellDetails(args.target);
      
      let eventData = { 
        Subject: args.draggedNodeData.text,
        StartTime: CellData.startTime,
        EndTime: CellData.endTime,
        IsAllDay: CellData.isAllDay,
      }
      
      scheduleObj.openEditor(eventData,'Add',true)
      console.log(scheduleObj)
      //scheduleObj.addEvent(eventData)
    }

    let groupData = {
      resources: ['Resources'],
    }

  return (
    <div>
       <div className="scheduler-title-container">Doctor Apointments</div>
        <div className = "scheduler-component">
      <ScheduleComponent ref={(schedule) => scheduleObj = schedule}  height = '300px' currentView = 'Day' selectedDate={new Date(2021, 11, 18)} eventSettings={ { dataSource: data } } views = {[ 'Day', 'Week', 'Week', 'Month' ]} group={groupData}>

        

        <ResourcesDirective>
            <ResourceDirective  field = 'ResourceId' title = 'Resource Doctor'  name='Resources' dataSource={ResourceDataSource} textField='Doctor' idField='Id' colorField='color' ></ResourceDirective>
        </ResourcesDirective>


        <ViewsDirective>
          <ViewDirective option = 'Day' startHour = '08:00' endHour = '20:00'></ViewDirective>
          <ViewDirective option = 'Month' isSelected={true}></ViewDirective>
          <ViewDirective option = 'TimelineMonth'></ViewDirective>
        </ViewsDirective>        
        <Inject services={[Day, Week, Month, Agenda , TimelineViews, TimelineMonth, Resize, DragAndDrop]} />
      </ScheduleComponent>
      </div>
      <div>
        <div className="treeView-title-container">Patien  List</div>
        <div className = "treeView-component"> <TreeViewComponent fields = {field} allowDragAndDrop = {true} nodeDragStop = {(evt) => {onTreeDragStop(evt)}}/></div>
      </div>
    </div>
  )
}

export default Schedule
