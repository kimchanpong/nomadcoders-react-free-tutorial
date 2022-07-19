import {useState, useEffect} from "react";

function App_coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((item, index) => {
                    return <li key={index}>{item.name} ({item.symbol}): {item.quotes.USD.price} USD</li>
                })}
            </ul>
        </div>
    );
}

export default App_coin;
