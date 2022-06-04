import React, {useEffect} from 'react';

const Zadanie1 = () => {
    const [user, setUser] = React.useState();

    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then((result) => result.json())
            .then((data) => setUser(data.results[0]));
    }, []);

    const getRandomUser = () => {
        fetch("https://randomuser.me/api/")
            .then((result) => result.json())
            .then((data) => setUser(data.results[0]));
    };

    return (
        <section>
            {user !== undefined ? (
                <ul>
                    <li>User: {user.name.title} {user.name.first} {user.name.last}</li>
                    <li>Nationality: {user.nat}</li>
                    <li>City: {user.location.city}</li>
                    <li>Phone: {user.phone}</li>
                    <li>Email: {user.email}</li>
                    <li>
                        <picture>
                            <img
                                src={user.picture.large}
                                alt={`${user.name.first} profile`}
                            />
                        </picture>
                    </li>
                </ul>
            ) : (
                <li>User doesn't exist!</li>
            )}
            <button onClick={getRandomUser}>Get user data</button>
        </section>
    );
};

export default Zadanie1;