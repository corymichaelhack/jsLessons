import React from 'react'

// class PieTable extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }

//   componentDidMount() {
//     const piedata = this.props.pieData
//     console.log(piedata)
//   }
  
//   render() {
//     return (
//       <div>
//         <h3>Pie List</h3>
//         <table border='1' className='Pies'>
//           <thead>
//             <tr>
//               <th>Name of Pie</th>
//               <th>Base of Pie</th>
//               <th>Crust</th>
//               <th>Time to Bake</th>
//               <th>Servings</th>
//               <th>Rating</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Apple</td>
//               <td>Fruit</td>
//               <td>Sourdough</td>
//               <td>50 min</td>
//               <td>8</td>
//               <td>5 stars</td>
//             </tr>
//             <tr>
//               <td>Peach</td>
//               <td>Fruit</td>
//               <td>Sourdough</td>
//               <td>50 min</td>
//               <td>8</td>
//               <td>5 stars</td>
//             </tr>
//             <tr>
//               <td>Chocolate Cream</td>
//               <td>Cream</td>
//               <td>Oreo</td>
//               <td>50 min</td>
//               <td>8</td>
//               <td>5 stars</td>
//             </tr>
//             <tr>
//               <td>Chicken Pot Pie</td>
//               <td>Gravy</td>
//               <td>Hot Water Crust</td>
//               <td>50 min</td>
//               <td>8</td>
//               <td>5 stars</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

const PieTable = (props) => {
  console.log(props.pieData)
  
  return(
    // <p>{props.pieData}</p>
    <div>
      <h3>Pie List</h3>
      <table border='1' className='Pies'>
        <thead>
          <tr>
            <th>Name of Pie</th>
            <th>Base of Pie</th>
            <th>Crust</th>
            <th>Time to Bake</th>
            <th>Servings</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>Fruit</td>
            <td>Sourdough</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
          <tr>
            <td>Peach</td>
            <td>Fruit</td>
            <td>Sourdough</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
          <tr>
            <td>Chocolate Cream</td>
            <td>Cream</td>
            <td>Oreo</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
          <tr>
            <td>Chicken Pot Pie</td>
            <td>Gravy</td>
            <td>Hot Water Crust</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
        </tbody>
      </table>
    </div> 
  )
}

export default PieTable;