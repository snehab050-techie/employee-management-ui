const employees = [
  { id: 1, name: "Rahul", department: "IT", salary: 80000 },
  { id: 2, name: "Sneha", department: "HR", salary: 78000 },
  { id: 3, name: "Arun", department: "Finance", salary: 90000 },
];

function App() {
  return (
    <div>
      <h1>Employee Management System</h1>
      <p>Welcome! Manage your employees in one place.</p>

      <h2>Employee Directory</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
