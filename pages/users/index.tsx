import styles from '../../styles/User.module.css';
import Link from 'next/link';
import fetch from 'node-fetch';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
  return {
    props: { users: data }
  };
};

  
const Users = ({ users }: any) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map((user: any) => ( // Fix: Remove unnecessary destructuring
        <Link href={'/users/' + user.id} key={user.id}>
          <h3 className={styles.single}>{user.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Users;
