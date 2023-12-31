 const App = () => {
           
        const timeTable = {
            Monday: {
              9: {
                subject: "Maths",
                teacher: "Brijesh Mishra",
                time: "1 hour"
              },
              10: {
                subject: "Physics",
                teacher: "Sumit Yadav",
                time: "1 hour"
              },
              11: {
                subject: "Chemistry",
                teacher: "Vedanti Joshi",
                time: "1 hour"
              },
              13: {
                subject: "English Litrature",
                teacher: "Mayur Pandey",
                time: "1 hour"
              },
              14: {
                subject: "Hindi Vyakaran",
                teacher: "Sony Desai",
                time: "1 hour"
              },
              15: {
                subject: "PT",
                teacher: "Sonu Tyagi",
                time: "1 hour"
              }
            },
            Tuesday: {
              9: {
                subject: "Physics",
                teacher: "Sumit Yadav",
                time: "1 hour"
              },
              10: {
                subject: "Hindi Sahitya",
                teacher: "Ramesh Jha",
                time: "1 hour"
              },
              11: {
                subject: "Environtal Studies",
                teacher: "Rakesh Prakash",
                time: "1 hour"
              },
              13: {
                subject: "Biology",
                teacher: "Kuldeep Narayan",
                time: "1 hour"
              },
              14: {
                subject: "Maths",
                teacher: "Brijesh Mishra",
                time: "1 hour"
              },
              15: {
                subject: "Physics Practical",
                teacher: "Sumit Yadav",
                time: "1 hour"
              }
            },
            Wednesday: {
              9: {
                subject: "Chemistry",
                teacher: "Vedanti Joshi",
                time: "1 hour"
              },
              10: {
                subject: "English Grammar",
                teacher: "Aditi Upasane",
                time: "1 hour"
              },
              11: {
                subject: "Maths",
                teacher: "Brijesh Mishra",
                time: "1 hour"
              },
              13: {
                subject: "English Litrature",
                teacher: "Mayur Pandey",
                time: "1 hour"
              },
              14: {
                subject: "Physics",
                teacher: "Sumit Yadav",
                time: "1 hour"
              },
              15: {
                subject: "Chemistry Practical",
                teacher: "Vedanti Joshi",
                time: "1 hour"
              }
            },
            Thursday: {
              9: {
                subject: "Biology",
                teacher: "Kuldeep Narayan",
                time: "1 hour"
              },
              10: {
                subject: "Hindi Sahitya",
                teacher: "Ramesh Jha",
                time: "1 hour"
              },
              11: {
                subject: "Chemistry",
                teacher: "Vedanti Joshi",
                time: "1 hour"
              },
              13: {
                subject: "Maths",
                teacher: "Brijesh Mishra",
                time: "1 hour"
              },
              14: {
                subject: "Physics",
                teacher: "Sumit Yadav",
                time: "1 hour"
              },
              15: {
                subject: "Biology Practical",
                teacher: "Kuldeep Narayan",
                time: "1 hour"
              }
            },
            Friday: {
              9: {
                subject: "English Litrature",
                teacher: "Mayur Pandey",
                time: "1 hour"
              },
              10: {
                subject: "Hindi Sahitya",
                teacher: "Ramesh Jha",
                time: "1 hour"
              },
              11: {
                subject: "English Grammar",
                teacher: "Aditi Upasane",
                time: "1 hour"
              },
              13: {
                subject: "Biology",
                teacher: "Kuldeep Narayan",
                time: "1 hour"
              },
              14: {
                subject: "Hindi Vyakaran",
                teacher: "Sony Desai",
                time: "1 hour"
              },
              15: {
                subject: "PT",
                teacher: "Sonu Tyagi",
                time: "1 hour"
              }
            }
          };        
    
            return (
              <>
               
                
                <table border="1px">
                    <caption>School time-table of a class 12th Student</caption>
                    <thead>
                <tr>
                <th></th>
                <th>9am-10am</th>
                <th>10am-11am</th>
                <th>11am-12noon</th>
                <th>12noon-1pm</th>
                <th>1pm-2pm</th>
                <th>2pm-3pm</th>
                <th>3pm-4pm</th>
               

                 
            </tr>
            </thead>
            <tbody>
                {Object.keys(timeTable).map((key,index)=>(
                
                <tr key={index}>
                {/* <td>{key["9"].subject}</td>
                <td>{key["10"].subject}</td>
                <td>{key["11"].subject}</td>
                <td>break</td>
                <td>{key["13"].subject}</td>
                <td>{key["14"].subject}</td>
                <td>{key["15"].subject}</td>
                */}
              <td>{key}</td>  
              <td>{timeTable[key]["9"].subject}</td>
              <td>{timeTable[key]["10"].subject}</td>
              <td>{timeTable[key]["11"].subject}</td>
              <td>Break</td>
              <td>{timeTable[key]["13"].subject}</td>
              <td>{timeTable[key]["14"].subject}</td>
              <td>{timeTable[key]["15"].subject}</td>

                
            
            
            </tr>
             
                
                ))}
                </tbody>
                
                </table>
              </>
            );
          };
    
          const rootElement = ReactDOM.createRoot(document.getElementById("root"));
          rootElement.render(<App />);
