import './Main.css';

function Main({ apiData, fetchError }) {
    return (
        <main>
            <div>
                {!fetchError ? (<ul>
                    {apiData ? apiData.map((data) => (
                        <li key={data.id} className='list-data'>{JSON.stringify(data)}</li>
                    )) : <p className='error-info'>Click on one of the following i.e users, posts, or comments to fetch data :)</p>}
                </ul>) : <p className='error-info'>{fetchError}</p>}
            </div>
        </main>
    )
}

export default Main