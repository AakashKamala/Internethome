import UserForm from '../components/UserForm';

function InternetHome() {
  return (
    <div>
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        color: 'white',
        // background: '#3498db',
        background: 'grey',
        padding: '20px',
        margin: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', /* Add a subtle text shadow */
        fontSize: '2rem', /* Adjust the font size for better readability */
        fontWeight: 'bold',
        letterSpacing: '1px', /* Add a slight letter-spacing for style */
      }}>
        Get Yourself a Home on the Internet
      </h1>

      <UserForm />
    </div>
  );
}

export default InternetHome;
