import fetch from 'node-fetch';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json() as { id: number }[];
  console.log('User List:', data); // Log the response data
    
  const paths = data.map((user: { id: number }) => {
    return {
      params: { id: user.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  console.log('User Details:', data); // Log the response data

  return {
    props: { user: data }
  };
};


type UserProps = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };

const Details = ({ user }: { user: UserProps }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default Details;
