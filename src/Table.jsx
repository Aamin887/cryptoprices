import React from 'react'

function Table({coinData}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th ></th>
                    <th >Coin</th>
                    <th >Price($)</th>
                    <th >Growth</th>
                    <th >Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {
                coinData.map((coin, idx)=> {
                    return(
                        <tr key={idx}>
                            <td><img src={coin.image} alt={coin.id}/></td>
                            <td>{coin.name}</td>
                            <td>{coin.current_price}</td>
                            <td>{coin.market_cap_change_percentage_24h}</td>
                            <td>{coin.market_cap}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </div>
  )
}

export default Table