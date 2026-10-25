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
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>IT</td>
            <td>70000</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Sneha</td>
            <td>HR</td>
            <td>80000</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Suhas</td>
            <td>Finance</td>
            <td>85000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
